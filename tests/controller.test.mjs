import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("../code.js", import.meta.url), "utf8");
const example = JSON.parse(readFileSync(new URL("../examples/token-collections.json", import.meta.url), "utf8"));

function controller(overrides = {}) {
  const messages = [];
  const figma = {
    showUI() {},
    notify() {},
    clientStorage: { getAsync: async () => undefined },
    ui: { postMessage: (message) => messages.push(message) },
    ...overrides
  };
  const context = vm.createContext({ figma, __html__: "", console });
  vm.runInContext(source, context, { filename: "code.js" });
  return { api: context, figma, messages };
}

// Values cross a VM boundary; compare JSON data rather than realm prototypes.
const plain = (value) => JSON.parse(JSON.stringify(value));

function memoryVariables() {
  const collections = [];
  const variables = [];
  let nextId = 0;
  const id = () => String(++nextId);
  return {
    collections, variables,
    getLocalVariableCollectionsAsync: async () => collections,
    getLocalVariablesAsync: async () => variables,
    createVariableCollection(name) {
      const collection = {
        id: id(), name, modes: [{ name: "Mode 1", modeId: id() }],
        renameMode(modeId, name) { this.modes.find((mode) => mode.modeId === modeId).name = name; },
        addMode(name) { const modeId = id(); this.modes.push({ name, modeId }); return modeId; }
      };
      collections.push(collection);
      return collection;
    },
    createVariable(name, collection, resolvedType) {
      const data = new Map();
      const variable = {
        id: id(), name, variableCollectionId: collection.id, resolvedType, valuesByMode: {},
        setPluginData: (key, value) => data.set(key, value),
        getPluginData: (key) => data.get(key) || "",
        setValueForMode(modeId, value) { this.valuesByMode[modeId] = value; },
        remove() { variables.splice(variables.indexOf(this), 1); }
      };
      variables.push(variable);
      return variable;
    },
    createVariableAlias: (variable) => ({ type: "VARIABLE_ALIAS", id: variable.id })
  };
}

test("setup preserves value-based primitives, Light/Dark aliases, and motion roles", () => {
  const { api } = controller();
  const tokens = api.buildTokensFromSetup({
    foundation: {
      color: { "neutral.0": "#FFFFFF", "neutral.1000": "#121212" },
      spacing: { "space.8": 8 },
      motion: { duration: { "duration.250": 250 }, easing: { standard: "linear" } }
    },
    semantic: {
      color: { "bg.canvas": { Light: "color.neutral.0", Dark: "color.neutral.1000" } },
      spacing: { "inset.sm": "space.8" },
      motion: { duration: { enter: "duration.250" }, easing: { change: "easing.standard" } }
    }
  }, { modeNames: ["Light", "Dark"] });
  assert.equal(tokens.Foundation.space[8].$value, 8);
  assert.deepEqual(plain(tokens.Theme.color.bg.canvas.$value), example.Theme.color.bg.canvas.$value);
  assert.deepEqual(plain(tokens.Theme.$collection.modes), ["Light", "Dark"]);
  assert.equal(tokens.Theme.space.inset.sm.$value, "{Foundation.space.8}");
  assert.equal(tokens.Theme.motion.duration.enter.$value, "{Foundation.duration.250}");
  assert.equal(tokens.Theme.motion.easing.change.$value, "{Foundation.easing.standard}");
});

test("example imports mode aliases and repeated generation updates instead of duplicating", async () => {
  const variables = memoryVariables();
  const { api } = controller({ variables });
  const first = await api.importTokens(example, { styles: false });
  assert.equal(first.variablesCreated, 5);
  assert.equal(first.warnings.length, 0);
  const theme = variables.collections.find((collection) => collection.name === "Theme");
  const canvas = variables.variables.find((variable) => variable.name === "color/bg/canvas");
  for (const mode of theme.modes) {
    const target = variables.variables.find((variable) => variable.name === `color/neutral/${mode.name === "Light" ? "0" : "1000"}`);
    assert.deepEqual(plain(canvas.valuesByMode[mode.modeId]), { type: "VARIABLE_ALIAS", id: target.id });
  }
  const second = await api.importTokens(example, { styles: false });
  assert.equal(second.variablesCreated, 0);
  assert.equal(second.variablesUpdated, 5);
  assert.equal(variables.variables.length, 5);
});

test("pruning removes only obsolete tagged variables in active collections", async () => {
  const variables = memoryVariables();
  const { api } = controller({ variables });
  await api.importTokens(example, { styles: false });
  const foundation = variables.collections.find((collection) => collection.name === "Foundation");
  const unrelated = variables.createVariableCollection("Unrelated");
  const userVariable = variables.createVariable("handmade", foundation, "FLOAT");
  const oldVariable = variables.createVariable("obsolete", foundation, "FLOAT");
  oldVariable.setPluginData("tool-designsystem-token-id", "Foundation.obsolete");
  const otherVariable = variables.createVariable("obsolete", unrelated, "FLOAT");
  otherVariable.setPluginData("tool-designsystem-token-id", "Unrelated.obsolete");
  await api.importTokens(example, { styles: false, overwrite: false });
  assert.ok(variables.variables.includes(oldVariable));
  await api.importTokens(example, { styles: false });
  assert.ok(!variables.variables.includes(oldVariable));
  assert.ok(variables.variables.includes(userVariable));
  assert.ok(variables.variables.includes(otherVariable));
});

test("missing and circular aliases warn without recursive failure", () => {
  const { api } = controller();
  const a = { ref: "Theme.a", value: "{Theme.b}" };
  const b = { ref: "Theme.b", value: "{Theme.a}" };
  const context = { tokenByRef: new Map([[a.ref, a], [b.ref, b]]), warnings: [] };
  assert.equal(api.resolveConcreteValue(a, context), undefined);
  assert.match(context.warnings[0], /Circular reference/);
  assert.equal(api.resolveConcreteValue({ ref: "Theme.missing", value: "{Foundation.absent}" }, context), undefined);
  assert.match(context.warnings[1], /Unresolved concrete value alias/);
});

test("opacity uses Figma percent values and primitives stay out of pickers", () => {
  const { api } = controller();
  const context = { themeCollectionName: "Theme" };
  const primitive = { type: "number", dotPath: "opacity.38", value: 0.38, collectionName: "Foundation" };
  assert.equal(api.resolveVariableValue(primitive, context), 38);
  assert.deepEqual(plain(api.getVariableScopes("FLOAT", primitive, context)), []);
  assert.deepEqual(plain(api.getVariableScopes("FLOAT", { ...primitive, collectionName: "Theme" }, context)), ["OPACITY"]);
});

test("typography conversions preserve percentages and font-relative units", () => {
  const { api } = controller();
  assert.equal(api.toLineHeightPercent("24px", 16), 150);
  assert.equal(api.toLineHeightPercent(1.3, 16), 130);
  assert.equal(api.toLineHeightPercent("140%", 16), 140);
  assert.equal(api.toLetterSpacingPercent("-0.32px", 16), -2);
  assert.equal(api.toLetterSpacingPercent("2%", 16), 2);
});

test("invalid import reports an error to the UI rather than completion", async () => {
  const { figma, messages } = controller();
  await figma.ui.onmessage({ pluginMessage: { type: "import-tokens", tokens: null } });
  assert.deepEqual(messages.map((message) => message.type), ["import-started", "import-error"]);
  assert.match(messages[1].error, /No token collections/);
});

test("missing variable aliases produce import warnings", async () => {
  const { api } = controller({ variables: memoryVariables() });
  const tokens = { Theme: { $collection: { modes: ["Light"] }, missing: { $type: "number", $value: "{Foundation.absent}" } } };
  const result = await api.importTokens(tokens, { styles: false });
  assert.equal(result.variablesCreated, 1);
  assert.match(result.warnings[0], /Unresolved alias/);
});
