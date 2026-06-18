figma.showUI(__html__, { width: 1080, height: 960, themeColors: true });

const PLUGIN_DATA_KEY = "tool-designsystem-token-id";
const DEFAULT_SETUP_STORAGE_KEY = "tokenPluginDefaultSetup";
const SESSIONS_STORAGE_KEY = "tokenPluginSavedSessions";
const VARIABLE_TYPES = {
  color: "COLOR",
  number: "FLOAT",
  string: "STRING",
  boolean: "BOOLEAN",
  shadow: "STRING"
};

figma.clientStorage.getAsync("tokenPluginWindowSize")
  .then((size) => {
    if (!size || typeof size !== "object") return;
    const width = Math.max(1, Number(size.width) || 1080);
    const height = Math.max(1, Number(size.height) || 960);
    figma.ui.resize(width, height);
    figma.ui.postMessage({ type: "window-size", width, height });
  })
  .catch(() => {});

const messageHandlers = {
  close: async () => {
    figma.closePlugin();
  },
  "resize-ui": async (message) => {
    const width = Math.max(1, Number(message.width) || 1080);
    const height = Math.max(1, Number(message.height) || 960);
    figma.ui.resize(width, height);
    figma.clientStorage.setAsync("tokenPluginWindowSize", { width, height }).catch(() => {});
  },
  "save-default": async (message) => {
    try {
      const payload = message.payload;
      if (!payload || typeof payload !== "object") {
        throw new Error("Invalid default payload.");
      }
      await figma.clientStorage.setAsync(DEFAULT_SETUP_STORAGE_KEY, payload);
      figma.ui.postMessage({ type: "save-default-complete" });
    } catch (error) {
      const errorMessage = error && error.message ? error.message : String(error);
      figma.ui.postMessage({ type: "save-default-error", error: errorMessage });
    }
  },
  "load-default": async () => {
    try {
      const payload = await figma.clientStorage.getAsync(DEFAULT_SETUP_STORAGE_KEY);
      figma.ui.postMessage({ type: "load-default-complete", payload: payload || null });
    } catch (error) {
      const errorMessage = error && error.message ? error.message : String(error);
      figma.ui.postMessage({ type: "load-default-error", error: errorMessage });
    }
  },
  "load-sessions": async () => {
    try {
      const sessions = await figma.clientStorage.getAsync(SESSIONS_STORAGE_KEY);
      figma.ui.postMessage({ type: "load-sessions-complete", sessions: Array.isArray(sessions) ? sessions : [] });
    } catch (error) {
      const errorMessage = error && error.message ? error.message : String(error);
      figma.ui.postMessage({ type: "load-sessions-error", error: errorMessage });
    }
  },
  "load-fonts": async () => {
    try {
      const availableFonts = typeof figma.listAvailableFontsAsync === "function"
        ? await figma.listAvailableFontsAsync()
        : [];
      const families = [];
      const stylesByFamily = {};
      const seenFamilies = new Set();

      availableFonts.forEach((entry) => {
        const fontName = entry && entry.fontName ? entry.fontName : null;
        const family = fontName && fontName.family ? String(fontName.family).trim() : "";
        const style = fontName && fontName.style ? String(fontName.style).trim() : "";
        if (!family) return;
        if (!seenFamilies.has(family)) {
          seenFamilies.add(family);
          families.push(family);
        }
        if (!stylesByFamily[family]) stylesByFamily[family] = [];
        if (style && stylesByFamily[family].indexOf(style) === -1) {
          stylesByFamily[family].push(style);
        }
      });

      families.sort((a, b) => a.localeCompare(b));
      Object.keys(stylesByFamily).forEach((family) => {
        stylesByFamily[family].sort((a, b) => a.localeCompare(b));
      });

      figma.ui.postMessage({
        type: "available-fonts",
        families,
        stylesByFamily
      });
    } catch (error) {
      const errorMessage = error && error.message ? error.message : String(error);
      figma.ui.postMessage({ type: "available-fonts-error", error: errorMessage });
    }
  },
  "save-session": async (message) => {
    try {
      const session = message.session;
      if (!session || typeof session !== "object" || !session.id || !session.markdown) {
        throw new Error("Invalid session payload.");
      }
      const existing = await figma.clientStorage.getAsync(SESSIONS_STORAGE_KEY);
      const sessions = Array.isArray(existing) ? existing.filter((item) => item && item.id !== session.id) : [];
      sessions.unshift(session);
      await figma.clientStorage.setAsync(SESSIONS_STORAGE_KEY, sessions);
      figma.ui.postMessage({ type: "save-session-complete", sessions });
    } catch (error) {
      const errorMessage = error && error.message ? error.message : String(error);
      figma.ui.postMessage({ type: "save-session-error", error: errorMessage });
    }
  },
  "delete-session": async (message) => {
    try {
      const existing = await figma.clientStorage.getAsync(SESSIONS_STORAGE_KEY);
      const sessions = Array.isArray(existing) ? existing.filter((item) => item && item.id !== message.id) : [];
      await figma.clientStorage.setAsync(SESSIONS_STORAGE_KEY, sessions);
      figma.ui.postMessage({ type: "delete-session-complete", sessions });
    } catch (error) {
      const errorMessage = error && error.message ? error.message : String(error);
      figma.ui.postMessage({ type: "delete-session-error", error: errorMessage });
    }
  },
  "import-tokens": async (message) => {
    await runImport(message, message.tokens);
  },
  "setup-tokens": async (message) => {
    const options = message.options || {};
    const tokens = buildTokensFromSetup(message.setup, options);
    await runImport(message, tokens);
  }
};

figma.ui.onmessage = async (message) => {
  const payload = message && message.pluginMessage ? message.pluginMessage : message;
  const type = payload && payload.type;
  const handler = type ? messageHandlers[type] : null;
  if (!handler) return;
  await handler(payload);
};

async function runImport(message, tokens) {
  figma.ui.postMessage({ type: "import-started" });

  try {
    const options = message.options || {};
    const summary = await importTokens(tokens, options);
    const text = [
      `${summary.variablesCreated} variables created`,
      `${summary.variablesUpdated} variables updated`,
      `${summary.stylesCreated} styles created`,
      `${summary.stylesUpdated} styles updated`
    ].join(", ");

    const warningText = summary.warnings.length
      ? ` ${summary.warnings.length} warnings; check console.`
      : "";

    if (summary.warnings.length) console.warn("Token import warnings", summary.warnings);
    figma.notify(`Design tokens imported. ${text}.${warningText}`);
    figma.ui.postMessage({ type: "import-complete", summary: `${text}.${warningText}` });
  } catch (error) {
    const errorMessage = error && error.message ? error.message : String(error);
    figma.notify(errorMessage, { error: true });
    figma.ui.postMessage({ type: "import-error", error: errorMessage });
  }
}

async function importTokens(tokens, options) {
  const collections = readCollections(tokens);
  if (!collections.length) {
    throw new Error("No token collections found. Export Figma Tokens JSON from the dashboard first.");
  }

  const summary = {
    variablesCreated: 0,
    variablesUpdated: 0,
    stylesCreated: 0,
    stylesUpdated: 0,
    warnings: []
  };

  const context = {
    collectionByName: new Map(),
    variableByRef: new Map(),
    tokenByRef: new Map(),
    stylesByKey: new Map(),
    stylePrefix: options.stylePrefix || "",
    themeCollectionName: options.themeName || "Theme",
    warnings: summary.warnings,
    overwrite: options.overwrite !== false
  };

  collections.forEach((collection) => {
    collection.tokens.forEach((token) => {
      context.tokenByRef.set(token.ref, token);
    });
  });

  if (options.variables !== false) {
    await upsertVariables(collections, context, summary);
    await setVariableValues(collections, context, summary);
  }

  if (options.styles !== false) {
    await upsertStyles(collections, context, summary);
  }

  if (context.overwrite) {
    if (options.variables !== false) {
      await pruneObsoleteVariables(collections, context);
    }
    if (options.styles !== false) {
      await pruneObsoleteStyles(collections, context);
    }
  }

  return summary;
}

async function pruneObsoleteVariables(collections, context) {
  const activeCollectionNames = new Set(collections.map((collection) => collection.name));
  const expectedRefs = new Set();
  collections.forEach((collection) => {
    collection.tokens.forEach((token) => expectedRefs.add(token.ref));
  });

  const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
  const activeCollectionIds = new Set(
    localCollections
      .filter((collection) => activeCollectionNames.has(collection.name))
      .map((collection) => collection.id)
  );
  const variables = await figma.variables.getLocalVariablesAsync();
  variables.forEach((variable) => {
    if (!activeCollectionIds.has(variable.variableCollectionId)) return;
    const ref = variable.getPluginData(PLUGIN_DATA_KEY);
    if (!ref) return;
    if (expectedRefs.has(ref)) return;
    try {
      variable.remove();
    } catch (error) {
      context.warnings.push(`Could not remove obsolete variable ${variable.name}: ${error.message}`);
    }
  });
}

function collectExpectedStyleKeys(collections, context) {
  const keys = new Set();
  collections.forEach((collection) => {
    if (collection.name !== context.themeCollectionName) return;
    collection.tokens.forEach((token) => {
      if (token.type === "color") keys.add(`paint:${styleNameForToken(token, context)}`);
      if (token.type === "shadow" || (token.type === "string" && token.dotPath.startsWith("shadow."))) {
        keys.add(`effect:${styleNameForToken(token, context)}`);
      }
    });
    collectTextStyleGroups(collection.tokens).forEach((group) => {
      keys.add(`text:${styleNameForToken(group, context)}`);
    });
  });
  return keys;
}

async function pruneObsoleteStyles(collections, context) {
  const expectedKeys = collectExpectedStyleKeys(collections, context);
  const [paintStyles, textStyles, effectStyles] = await Promise.all([
    figma.getLocalPaintStylesAsync(),
    figma.getLocalTextStylesAsync(),
    figma.getLocalEffectStylesAsync()
  ]);

  const taggedStyles = [
    ...paintStyles.map((style) => ({ key: `paint:${style.name}`, style })),
    ...textStyles.map((style) => ({ key: `text:${style.name}`, style })),
    ...effectStyles.map((style) => ({ key: `effect:${style.name}`, style }))
  ];

  taggedStyles.forEach(({ key, style }) => {
    const ref = style.getPluginData(PLUGIN_DATA_KEY);
    if (!ref) return;
    if (!ref.startsWith(context.themeCollectionName + ".")) return;
    if (expectedKeys.has(key)) return;
    try {
      style.remove();
    } catch (error) {
      context.warnings.push(`Could not remove obsolete style ${style.name}: ${error.message}`);
    }
  });
}

function buildTokensFromSetup(setup, options) {
  if (!setup || typeof setup !== "object" || Array.isArray(setup)) {
    throw new Error("Setup must be a JSON object.");
  }

  const paletteName = options.paletteName || "Foundation";
  const themeName = options.themeName || "Theme";
  const modeName = options.modeName || "Light";
  const semanticColorModes = collectSemanticColorModes(
    (setup.semantic || {}).color || (setup.semantic || {}).colors || {},
    Array.isArray(options.modeNames) && options.modeNames.length ? options.modeNames : [modeName]
  );
  const palette = { $collection: { modes: ["Value"] } };
  const theme = { $collection: { modes: semanticColorModes } };
  const foundation = setup.global || setup.foundation || {};
  const semantic = setup.semantic || {};
  const semanticColorRefs = new Set();
  Object.keys(semantic.color || semantic.colors || {}).forEach((name) => {
    semanticColorRefs.add(normalizeSemanticName("color", name));
  });

  Object.entries(foundation.color || foundation.colors || {}).forEach(([name, value]) => {
    setDtcgPath(palette, tokenPath(normalizeFoundationName("color", name)), {
      $type: "color",
      $value: toDtcgColorValue(value)
    });
  });

  Object.entries(foundation.spacing || foundation.space || {}).forEach(([name, value]) => {
    setDtcgPath(palette, tokenPath(normalizeFoundationName("spacing", name)), {
      $type: "number",
      $value: toNumberValue(value)
    });
  });

  Object.entries(foundation.size || foundation.sizing || {}).forEach(([name, value]) => {
    setDtcgPath(palette, tokenPath(normalizeFoundationName("size", name)), {
      $type: "number",
      $value: toNumberValue(value)
    });
  });

  Object.entries(foundation.radius || {}).forEach(([name, value]) => {
    setDtcgPath(palette, tokenPath(normalizeFoundationName("radius", name)), {
      $type: "number",
      $value: toNumberValue(value)
    });
  });

  Object.entries(foundation.opacity || {}).forEach(([name, value]) => {
    setDtcgPath(palette, tokenPath(normalizeFoundationName("opacity", name)), {
      $type: "number",
      $value: toNumberValue(value)
    });
  });

  const textFoundation = foundation.text || foundation.typography || {};
  addTextFoundationGroup(palette, "family", textFoundation.family || textFoundation.fontFamily || {}, "string");
  addTextFoundationGroup(palette, "size", textFoundation.size || textFoundation.fontSize || {}, "number");
  addTextFoundationGroup(palette, "weight", textFoundation.weight || textFoundation.fontWeight || {}, "number");
  addTextFoundationGroup(palette, "lineHeight", textFoundation.lineHeight || {}, "number");
  addTextFoundationGroup(palette, "letterSpacing", textFoundation.letterSpacing || {}, "number");
  addTextFoundationGroup(palette, "textTransform", textFoundation.textTransform || textFoundation.textCase || {}, "string");

  Object.entries(semantic.color || semantic.colors || {}).forEach(([name, value]) => {
    setDtcgPath(theme, tokenPath(normalizeSemanticName("color", name)), {
      $type: "color",
      $value: toModeAwareTokenValue(value, semanticColorModes, paletteName, "color")
    });
  });

  Object.entries(semantic.spacing || semantic.space || {}).forEach(([name, value]) => {
    setDtcgPath(theme, tokenPath(normalizeSemanticName("spacing", name)), {
      $type: "number",
      $value: toTokenValue(value, paletteName, "spacing")
    });
  });

  Object.entries(semantic.size || semantic.sizing || {}).forEach(([name, value]) => {
    setDtcgPath(theme, tokenPath(normalizeSemanticName("size", name)), {
      $type: "number",
      $value: toTokenValue(value, paletteName, "size")
    });
  });

  Object.entries(semantic.radius || {}).forEach(([name, value]) => {
    setDtcgPath(theme, tokenPath(normalizeSemanticName("radius", name)), {
      $type: "number",
      $value: toTokenValue(value, paletteName, "radius")
    });
  });

  Object.entries(semantic.opacity || {}).forEach(([name, value]) => {
    setDtcgPath(theme, tokenPath(normalizeSemanticName("opacity", name)), {
      $type: "number",
      $value: toTokenValue(value, paletteName, "opacity")
    });
  });

  Object.entries(semantic.shadow || semantic.elevation || {}).forEach(([name, value]) => {
    setDtcgPath(theme, tokenPath(normalizeSemanticName("shadow", name)), {
      $type: "shadow",
      $value: toShadowValue(value)
    });
  });

  Object.entries(semantic.text || semantic.typography || {}).forEach(([name, fields]) => {
    const textPath = tokenPath(normalizeSemanticName("text", name));
    const safeFields = fields || {};
    const textTokens = {
      fontFamily: { type: "string", refType: "fontFamily", fallback: "font.family.sans" },
      fontSize: { type: "number", refType: "fontSize", fallback: "font.size.14" },
      fontWeight: { type: "number", refType: "fontWeight", fallback: "font.weight.regular" },
      lineHeight: { type: "number", refType: "lineHeight", fallback: "font.lineHeight.130" },
      letterSpacing: { type: "number", refType: "letterSpacing", fallback: "font.letterSpacing.default" },
      textCase: { type: "string", refType: "textCase", fallback: "font.textTransform.none" }
    };

    Object.entries(textTokens).forEach(([fieldName, config]) => {
      const rawValue = safeFields[fieldName] === undefined ? config.fallback : safeFields[fieldName];
      const fieldValue = toTokenValue(rawValue, paletteName, config.refType);
      setDtcgPath(theme, textPath.concat(fieldName), {
        $type: config.type,
        $value: fieldValue
      });
    });
  });

  const output = {};
  output[paletteName] = palette;
  output[themeName] = theme;
  return output;
}

function collectSemanticColorModes(semanticColors, preferredModes) {
  const explicitModes = Array.isArray(preferredModes) && preferredModes.length
    ? preferredModes
    : (preferredModes ? [preferredModes] : []);
  const modes = [];
  const seen = new Set();

  explicitModes.forEach((modeName) => {
    if (!modeName || seen.has(modeName)) return;
    seen.add(modeName);
    modes.push(modeName);
  });

  if (modes.length) return modes;

  Object.values(semanticColors || {}).forEach((value) => {
    if (!isModeValueMap(value)) return;
    Object.keys(value).forEach((modeName) => {
      if (!modeName || seen.has(modeName)) return;
      seen.add(modeName);
      modes.push(modeName);
    });
  });

  return modes.length ? modes : ["Light"];
}

function toModeAwareTokenValue(value, modeNames, paletteName, refType) {
  if (!isModeValueMap(value)) return toTokenValue(value, paletteName, refType);

  const entries = {};
  modeNames.forEach((modeName) => {
    if (value[modeName] === undefined) return;
    entries[modeName] = toTokenValue(value[modeName], paletteName, refType);
  });

  if (!Object.keys(entries).length) {
    return toTokenValue(selectModeValue(value), paletteName, refType);
  }

  return entries;
}

function addTextFoundationGroup(palette, groupName, values, type) {
  Object.entries(values || {}).forEach(([name, value]) => {
    const fullName = normalizeTextFoundationName(groupName, name);
    const normalizedValue = type === "number" ? toNumberValue(value) : String(value);
    setDtcgPath(palette, tokenPath(fullName), {
      $type: type,
      $value: normalizedValue
    });
  });
}

function normalizeTextFoundationName(groupName, name) {
  const clean = cleanTokenPath(name);
  const directPrefix = groupName + ".";
  const legacyPrefix = "font." + groupName + ".";
  if (clean.indexOf(legacyPrefix) === 0) return clean;
  if (clean.indexOf(directPrefix) === 0) return "font." + clean;
  return "font." + directPrefix + cleanTokenSegment(clean);
}

function normalizeFoundationName(type, name) {
  const clean = cleanTokenPath(name);
  if (type === "color") return clean.indexOf("color.") === 0 ? clean : "color." + clean;
  if (type === "spacing") return clean.indexOf("space.") === 0 ? clean : "space." + clean;
  if (type === "size") return clean.indexOf("size.") === 0 ? clean : "size." + clean;
  if (type === "radius") return clean.indexOf("radius.") === 0 ? clean : "radius." + clean;
  if (type === "opacity") return clean.indexOf("opacity.") === 0 ? clean : "opacity." + clean;
  return clean;
}

function normalizeSemanticName(type, name) {
  const clean = cleanTokenPath(name);
  if (type === "color") return clean.indexOf("color.") === 0 ? clean : "color." + clean;
  if (type === "spacing") return clean.indexOf("space.") === 0 ? clean : "space." + clean;
  if (type === "size") return clean.indexOf("size.") === 0 ? clean : "size." + clean;
  if (type === "radius") return clean.indexOf("radius.") === 0 ? clean : "radius." + clean;
  if (type === "opacity") return clean.indexOf("opacity.") === 0 ? clean : "opacity." + clean;
  if (type === "shadow") return clean.indexOf("shadow.") === 0 ? clean : "shadow." + clean;
  if (type === "text") return clean.indexOf("text.") === 0 ? clean : "text." + clean;
  return clean;
}

function toShadowValue(value) {
  if (isReference(value)) return value;
  if (Array.isArray(value)) {
    return value.map((item) => String(item || "").trim()).filter(Boolean).join(", ");
  }
  return String(value || "").trim();
}

function toTokenValue(value, paletteName, refType) {
  if (typeof value === "string") {
    if (isReference(value)) return value;
    if (looksLikeTokenName(value)) return "{" + paletteName + "." + normalizeReferenceName(value, refType) + "}";
  }

  if (refType === "color") return toDtcgColorValue(value);
  if (refType === "textCase" || refType === "fontFamily") return String(value);
  return toNumberValue(value);
}

function toTextColorTokenValue(value, paletteName, themeName, semanticColorMap) {
  if (typeof value === "string") {
    if (isReference(value)) return value;
    if (looksLikeTokenName(value)) {
      const normalized = normalizeReferenceName(value, "color");
      const semanticShortName = normalized.indexOf("color.") === 0 ? normalized.slice("color.".length) : normalized;
      const semanticThemeRef = "{" + themeName + "." + normalizeSemanticName("color", semanticShortName) + "}";

      const semanticMap = semanticColorMap || {};
      const hasSemantic = Object.prototype.hasOwnProperty.call(semanticMap, semanticShortName)
        || Object.prototype.hasOwnProperty.call(semanticMap, normalized);
      if (hasSemantic) return semanticThemeRef;

      const foundationRef = semanticMap[semanticShortName] || semanticMap[normalized] || normalized;
      return "{" + paletteName + "." + normalizeReferenceName(foundationRef, "color") + "}";
    }
  }
  return toDtcgColorValue(value);
}

function normalizeReferenceName(value, refType) {
  const cleanValue = cleanTokenPath(value);
  if (refType === "color") return normalizeFoundationName("color", value);
  if (refType === "spacing") return normalizeFoundationName("spacing", value);
  if (refType === "size") return normalizeFoundationName("size", value);
  if (refType === "radius") return normalizeFoundationName("radius", value);
  if (refType === "opacity") return normalizeFoundationName("opacity", value);
  if (refType === "shadow") return normalizeSemanticName("shadow", value);

  const textPrefixes = ["family.", "size.", "weight.", "lineHeight.", "letterSpacing.", "textTransform."];
  for (const prefix of textPrefixes) {
    if (cleanValue.indexOf(prefix) === 0) return "font." + cleanValue;
  }
  if (cleanValue.indexOf("font.family.") === 0) return cleanValue;
  if (cleanValue.indexOf("font.size.") === 0) return cleanValue;
  if (cleanValue.indexOf("font.weight.") === 0) return cleanValue;
  if (cleanValue.indexOf("font.lineHeight.") === 0) return cleanValue;
  if (cleanValue.indexOf("font.letterSpacing.") === 0) return cleanValue;
  if (cleanValue.indexOf("font.textTransform.") === 0) return cleanValue;
  if (
    cleanValue.indexOf("color.") === 0 ||
    cleanValue.indexOf("space.") === 0 ||
    cleanValue.indexOf("size.") === 0 ||
    cleanValue.indexOf("radius.") === 0 ||
    cleanValue.indexOf("opacity.") === 0 ||
    cleanValue.indexOf("shadow.") === 0
  ) return cleanValue;
  if (refType === "fontFamily") return "font.family." + cleanValue;
  if (refType === "fontSize") return "font.size." + cleanValue;
  if (refType === "fontWeight") return "font.weight." + cleanValue;
  if (refType === "lineHeight") return "font.lineHeight." + cleanValue;
  if (refType === "letterSpacing") return "font.letterSpacing." + cleanValue;
  if (refType === "textCase") return "font.textTransform." + cleanValue;
  return cleanValue;
}

function looksLikeTokenName(value) {
  return /^[a-z][a-z0-9-]*(\.[a-z0-9-]+)+$/i.test(value);
}

function tokenPath(name) {
  return cleanTokenPath(name).split(".").filter(Boolean);
}

function cleanTokenPath(value) {
  return String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9_.-]+/g, ".")
    .replace(/\.+/g, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "");
}

function cleanTokenSegment(value) {
  return cleanTokenPath(value).replace(/\./g, "-");
}

function toNumberValue(value) {
  if (typeof value === "number") return value;
  const parsed = parseFloat(String(value).replace(",", ".").replace("px", ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

function toLineHeightPercent(value, fontSize) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.endsWith("%")) {
      const percent = parseFloat(trimmed);
      return Number.isNaN(percent) ? 100 : percent;
    }
    if (trimmed.endsWith("px")) {
      const px = parseFloat(trimmed);
      const size = Number(fontSize);
      if (!Number.isNaN(px) && size > 0) return Math.round((px / size) * 10000) / 100;
      return Number.isNaN(px) ? 100 : px;
    }
  }

  const numeric = toNumberValue(value);
  if (numeric > 0 && numeric <= 4) return Math.round(numeric * 10000) / 100;
  return numeric || 100;
}

function toDtcgColorValue(value) {
  if (value && typeof value === "object" && Array.isArray(value.components)) return value;
  const color = toFigmaColor(value);
  const alpha = value && typeof value === "object" && typeof value.alpha === "number"
    ? value.alpha
    : colorAlpha(value);
  return {
    colorSpace: "srgb",
    components: [color.r, color.g, color.b],
    alpha,
    hex: colorHex(value, color)
  };
}

function colorAlpha(value) {
  const match = String(value || "").match(/rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+(?:\s*,\s*([\d.]+))?\s*\)/i);
  return match && match[1] !== undefined ? clamp01(Number(match[1])) : 1;
}

function colorHex(value, color) {
  const text = String(value || "").trim();
  const hex = text.replace(/^#/, "");
  if (/^[0-9a-f]{6}/i.test(hex)) return "#" + hex.slice(0, 6).toUpperCase();
  const toHex = (channel) => Math.round(clamp01(channel) * 255).toString(16).padStart(2, "0");
  return ("#" + toHex(color.r) + toHex(color.g) + toHex(color.b)).toUpperCase();
}

function setDtcgPath(obj, path, token) {
  let current = obj;
  for (let index = 0; index < path.length - 1; index += 1) {
    const key = path[index];
    if (!current[key]) {
      current[key] = {};
    } else if (current[key].$type !== undefined) {
      current[key] = { default: current[key] };
    }
    current = current[key];
  }

  const lastKey = path[path.length - 1];
  if (current[lastKey] && typeof current[lastKey] === "object" && current[lastKey].$type === undefined) {
    current[lastKey].default = token;
  } else {
    current[lastKey] = token;
  }
}

function readCollections(root) {
  if (!root || typeof root !== "object" || Array.isArray(root)) return [];

  return Object.entries(root)
    .filter(([, value]) => value && typeof value === "object" && value.$collection)
    .map(([name, value]) => ({
      name,
      modes: Array.isArray(value.$collection.modes) && value.$collection.modes.length
        ? value.$collection.modes
        : ["Value"],
      tokens: flattenTokens(value, name)
    }));
}

function flattenTokens(node, collectionName, path = []) {
  const tokens = [];
  if (!node || typeof node !== "object") return tokens;

  if (node.$type !== undefined && node.$value !== undefined) {
    const dotPath = path.join(".");
    tokens.push({
      collectionName,
      dotPath,
      ref: `${collectionName}.${dotPath}`,
      figmaName: path.join("/"),
      type: node.$type,
      value: node.$value
    });
  }

  Object.entries(node).forEach(([key, value]) => {
    if (key.startsWith("$")) return;
    flattenTokens(value, collectionName, path.concat(key)).forEach((token) => {
      tokens.push(token);
    });
  });

  return tokens;
}

async function upsertVariables(collections, context, summary) {
  const existingCollections = await figma.variables.getLocalVariableCollectionsAsync();
  existingCollections.forEach((collection) => {
    context.collectionByName.set(collection.name, collection);
  });

  const existingVariables = await figma.variables.getLocalVariablesAsync();
  const variableByCollectionAndName = new Map();
  existingVariables.forEach((variable) => {
    variableByCollectionAndName.set(`${variable.variableCollectionId}:${variable.name}`, variable);
  });

  collections.forEach((collectionData) => {
    const collection = getOrCreateCollection(collectionData, context);
    const modeIdByName = ensureModes(collection, collectionData.modes);

    collectionData.tokens.forEach((token) => {
      const figmaType = toFigmaVariableType(token.type);
      if (!figmaType) {
        context.warnings.push(`Skipped unsupported variable type "${token.type}" at ${token.ref}.`);
        return;
      }

      const key = `${collection.id}:${token.figmaName}`;
      let variable = variableByCollectionAndName.get(key);

      if (variable && variable.resolvedType !== figmaType) {
        variable.remove();
        variable = null;
      }

      if (!variable) {
        variable = figma.variables.createVariable(token.figmaName, collection, figmaType);
        variableByCollectionAndName.set(key, variable);
        summary.variablesCreated += 1;
      } else {
        summary.variablesUpdated += 1;
      }

      variable.scopes = getVariableScopes(figmaType, token, context);
      variable.setPluginData(PLUGIN_DATA_KEY, token.ref);
      context.variableByRef.set(token.ref, { variable, modeIdByName });
    });
  });
}

function getOrCreateCollection(collectionData, context) {
  const existing = context.collectionByName.get(collectionData.name);
  if (existing) return existing;

  const collection = figma.variables.createVariableCollection(collectionData.name);
  context.collectionByName.set(collectionData.name, collection);
  return collection;
}

function ensureModes(collection, modeNames) {
  const modeIdByName = new Map(collection.modes.map((mode) => [mode.name, mode.modeId]));

  modeNames.forEach((modeName, index) => {
    if (modeIdByName.has(modeName)) return;

    if (index === 0 && collection.modes.length === 1 && /^Mode\s+\d+$/i.test(collection.modes[0].name)) {
      const oldModeName = collection.modes[0].name;
      const defaultModeId = collection.modes[0].modeId;
      collection.renameMode(defaultModeId, modeName);
      modeIdByName.delete(oldModeName);
      modeIdByName.set(modeName, defaultModeId);
      return;
    }

    const modeId = collection.addMode(modeName);
    modeIdByName.set(modeName, modeId);
  });

  return modeIdByName;
}

async function setVariableValues(collections, context) {
  for (const collectionData of collections) {
    for (const token of collectionData.tokens) {
      const record = context.variableByRef.get(token.ref);
      if (!record) continue;

      for (const modeName of collectionData.modes) {
        const modeId = record.modeIdByName.get(modeName);
        if (!modeId) continue;

        const value = resolveVariableValue(token, context, modeName);
        if (value === undefined) continue;

        try {
          record.variable.setValueForMode(modeId, value);
        } catch (error) {
          context.warnings.push(`Could not set ${token.ref} in ${modeName}: ${error.message}`);
        }
      }
    }
  }
}

function resolveVariableValue(token, context, modeName) {
  const value = selectModeValue(token.value, modeName);
  if (isReference(value)) {
    const target = context.variableByRef.get(referenceToRef(value));
    if (!target) {
      context.warnings.push(`Unresolved alias ${value} at ${token.ref}.`);
      return undefined;
    }
    return figma.variables.createVariableAlias(target.variable);
  }

  if (token.type === "color") return toFigmaColor(value);
  if (token.type === "number") {
    const numeric = typeof value === "number" ? value : parseFloat(String(value).replace(",", ".")) || 0;
    if (token.dotPath && token.dotPath.indexOf("opacity.") === 0) {
      // Figma opacity bindings behave as percentage-like values for variable assignment.
      // Normalize legacy 0..1 inputs so opacity.100 is applied as 100, not 1.
      if (numeric <= 1 && numeric >= 0) return Math.round(numeric * 100 * 1000) / 1000;
    }
    return numeric;
  }
  if (token.type === "boolean") return Boolean(value);
  return String(value);
}

async function upsertStyles(collections, context, summary) {
  const [paintStyles, textStyles, effectStyles] = await Promise.all([
    figma.getLocalPaintStylesAsync(),
    figma.getLocalTextStylesAsync(),
    figma.getLocalEffectStylesAsync()
  ]);

  paintStyles.forEach((style) => context.stylesByKey.set(`paint:${style.name}`, style));
  textStyles.forEach((style) => context.stylesByKey.set(`text:${style.name}`, style));
  effectStyles.forEach((style) => context.stylesByKey.set(`effect:${style.name}`, style));

  for (const collection of collections) {
    if (collection.name !== context.themeCollectionName) continue;

    for (const token of collection.tokens) {
      if (token.type === "color") {
        upsertPaintStyle(token, context, summary);
      }

      if (token.type === "shadow" || (token.type === "string" && token.dotPath.startsWith("shadow."))) {
        upsertEffectStyle(token, context, summary);
      }
    }

    const textGroups = collectTextStyleGroups(collection.tokens);
    for (const group of textGroups) {
      try {
        await upsertTextStyle(group, context, summary);
      } catch (error) {
        context.warnings.push(`Could not create text style ${group.ref}: ${error.message}`);
      }
    }
  }
}

function upsertPaintStyle(token, context, summary) {
  const styleName = styleNameForToken(token, context);
  let style = context.stylesByKey.get(`paint:${styleName}`);
  if (!style) {
    style = figma.createPaintStyle();
    style.name = styleName;
    context.stylesByKey.set(`paint:${styleName}`, style);
    summary.stylesCreated += 1;
  } else {
    summary.stylesUpdated += 1;
  }

  const paint = {
    type: "SOLID",
    visible: true,
    opacity: resolveAlpha(token, context),
    color: resolveConcreteColor(token, context)
  };

  const variableRecord = context.variableByRef.get(token.ref);
  style.paints = variableRecord
    ? [figma.variables.setBoundVariableForPaint(paint, "color", variableRecord.variable)]
    : [paint];
  style.setPluginData(PLUGIN_DATA_KEY, token.ref);
}

async function upsertTextStyle(group, context, summary) {
  const styleName = styleNameForToken(group, context);
  let style = context.stylesByKey.get(`text:${styleName}`);
  if (!style) {
    style = figma.createTextStyle();
    style.name = styleName;
    context.stylesByKey.set(`text:${styleName}`, style);
    summary.stylesCreated += 1;
  } else {
    summary.stylesUpdated += 1;
  }

  const resolved = resolveTextStyleValues(group, context);
  const fontName = await loadBestFont(resolved.fontFamily, resolved.fontWeight, context);
  applyTextStyleProperty(style, "fontName", fontName, group.ref, context);
  applyTextStyleProperty(style, "fontSize", resolved.fontSize, group.ref, context);
  applyTextStyleProperty(style, "lineHeight", { unit: "PERCENT", value: resolved.lineHeight }, group.ref, context);
  applyTextStyleProperty(style, "letterSpacing", { unit: "PERCENT", value: resolved.letterSpacing }, group.ref, context);
  applyTextStyleProperty(style, "textCase", resolved.textCase, group.ref, context);
  if (resolved.color) {
    applyTextStyleProperty(style, "fills", [{
      type: "SOLID",
      visible: true,
      opacity: resolved.colorAlpha,
      color: resolved.color
    }], group.ref, context);
  }

  bindTextPaintVariable(style, group.fields.color, context);
  bindTextStyleVariable(style, "fontFamily", group.fields.fontFamily, context);
  bindTextStyleVariable(style, "fontSize", group.fields.fontSize, context);
  bindTextStyleVariable(style, "fontWeight", group.fields.fontWeight, context);
  bindTextStyleVariable(style, "letterSpacing", group.fields.letterSpacing, context);

  style.setPluginData(PLUGIN_DATA_KEY, group.ref);
}

function applyTextStyleProperty(style, property, value, ref, context) {
  if (value === null || value === undefined) return;
  try {
    if (property === "fills" && Array.isArray(value)) {
      style.fills = value.map((paint) => clonePaint(paint));
      return;
    }
    style[property] = value;
  } catch (error) {
    context.warnings.push(`Could not set ${property} on ${ref}: ${error.message}`);
  }
}

function upsertEffectStyle(token, context, summary) {
  const effects = parseShadowEffects(resolveConcreteValue(token, context));
  if (!effects.length) return;

  const styleName = styleNameForToken(token, context);
  let style = context.stylesByKey.get(`effect:${styleName}`);
  if (!style) {
    style = figma.createEffectStyle();
    style.name = styleName;
    context.stylesByKey.set(`effect:${styleName}`, style);
    summary.stylesCreated += 1;
  } else {
    summary.stylesUpdated += 1;
  }

  style.effects = effects;
  style.setPluginData(PLUGIN_DATA_KEY, token.ref);
}

function collectTextStyleGroups(tokens) {
  const groups = new Map();
  const textFieldPattern = /^(.*)\.(color|fontFamily|fontSize|fontWeight|lineHeight|letterSpacing|textCase)$/;

  tokens.forEach((token) => {
    const match = token.dotPath.match(textFieldPattern);
    if (!match) return;

    const [, basePath, field] = match;
    if (!groups.has(basePath)) {
      groups.set(basePath, {
        collectionName: token.collectionName,
        dotPath: basePath,
        ref: `${token.collectionName}.${basePath}`,
        figmaName: basePath.split(".").join("/"),
        fields: {}
      });
    }
    groups.get(basePath).fields[field] = token;
  });

  return Array.from(groups.values()).filter((group) => group.fields.fontSize && group.fields.fontFamily);
}

function resolveTextStyleValues(group, context) {
  const fontSize = Number(resolveConcreteValue(group.fields.fontSize, context) || 12);
  const rawLineHeight = resolveConcreteValue(group.fields.lineHeight, context);
  return {
    fontFamily: normalizeFontFamily(resolveConcreteValue(group.fields.fontFamily, context) || "Inter"),
    fontWeight: Number(resolveConcreteValue(group.fields.fontWeight, context) || 400),
    fontSize,
    lineHeight: toLineHeightPercent(rawLineHeight || 100, fontSize),
    letterSpacing: Number(resolveConcreteValue(group.fields.letterSpacing, context) || 0),
    color: group.fields.color ? resolveConcreteColor(group.fields.color, context) : null,
    colorAlpha: group.fields.color ? resolveAlpha(group.fields.color, context) : 1,
    textCase: toFigmaTextCase(resolveConcreteValue(group.fields.textCase, context))
  };
}

async function loadBestFont(family, weight, context) {
  const candidates = fontStyleCandidates(weight);
  for (const style of candidates) {
    const fontName = { family, style };
    try {
      await figma.loadFontAsync(fontName);
      return fontName;
    } catch (error) {}
  }

  context.warnings.push(`Could not load ${family}; used Inter Regular.`);
  const fallback = { family: "Inter", style: "Regular" };
  try {
    await figma.loadFontAsync(fallback);
    return fallback;
  } catch (error) {
    context.warnings.push(`Could not load Inter Regular; used Roboto Regular.`);
  }

  const secondFallback = { family: "Roboto", style: "Regular" };
  try {
    await figma.loadFontAsync(secondFallback);
    return secondFallback;
  } catch (error) {
    context.warnings.push("Could not load Roboto Regular; kept the current text style font.");
  }

  return null;
}

function bindTextStyleVariable(style, property, token, context) {
  if (!token || typeof style.setBoundVariable !== "function") return;
  const record = resolvePreferredBindingRecord(token, context);
  if (!record) return;

  try {
    style.setBoundVariable(property, record.variable);
  } catch (error) {
    context.warnings.push(`Could not bind ${token.ref} to text style ${style.name}: ${error.message}`);
  }
}

function bindTextPaintVariable(style, token, context) {
  if (!token || !style.fills || !style.fills.length) return;
  const record = resolvePreferredBindingRecord(token, context);
  if (!record) return;

  try {
    const basePaint = clonePaint(style.fills[0]);
    style.fills = [figma.variables.setBoundVariableForPaint(basePaint, "color", record.variable)];
  } catch (error) {
    context.warnings.push(`Could not bind ${token.ref} to text style fill ${style.name}: ${error.message}`);
  }
}

function resolvePreferredBindingRecord(token, context) {
  if (!token) return null;
  const direct = context.variableByRef.get(token.ref);
  if (isReference(token.value)) {
    const targetRef = referenceToRef(token.value);
    const target = context.variableByRef.get(targetRef);
    if (target) return target;
  }
  return direct || null;
}

function clonePaint(paint) {
  if (!paint || typeof paint !== "object") return paint;
  const cloned = {};
  Object.keys(paint).forEach((key) => {
    const value = paint[key];
    if (value && typeof value === "object") {
      if (Array.isArray(value)) {
        cloned[key] = value.map((item) => (item && typeof item === "object" ? Object.assign({}, item) : item));
      } else {
        cloned[key] = Object.assign({}, value);
      }
    } else {
      cloned[key] = value;
    }
  });
  return cloned;
}

function toFigmaVariableType(type) {
  return VARIABLE_TYPES[type] || null;
}

function getVariableScopes(figmaType, token, context) {
  const path = token.dotPath || "";
  const isThemeToken = context && token.collectionName === context.themeCollectionName;
  if (!isThemeToken) return [];

  if (figmaType === "COLOR") {
    if (path.startsWith("text.") || path.includes(".text.") || path.includes("text.")) return ["TEXT_FILL"];
    if (path.startsWith("border.") || path.includes(".border.")) return ["STROKE_COLOR"];
    if (path.startsWith("shadow.") || path.includes(".shadow.")) return ["EFFECT_COLOR"];
    return ["ALL_FILLS"];
  }

  if (figmaType === "STRING") {
    if (path.startsWith("family.") || path.startsWith("font.family.") || path.includes("fontFamily")) return ["FONT_FAMILY"];
    if (path.includes("fontStyle")) return ["FONT_STYLE"];
    if (path.startsWith("shadow.") || path.includes(".shadow.")) return ["ALL_SCOPES"];
    return ["ALL_SCOPES"];
  }

  if (figmaType === "FLOAT") {
    if (path.startsWith("font.size.") || path.includes("fontSize")) return ["FONT_SIZE"];
    if (path.startsWith("size.") || path.includes(".size.")) return ["WIDTH_HEIGHT"];
    if (path.startsWith("weight.") || path.startsWith("font.weight.") || path.includes("fontWeight")) return ["FONT_WEIGHT"];
    if (path.startsWith("lineHeight.") || path.startsWith("font.lineHeight.") || path.includes("lineHeight")) return ["LINE_HEIGHT"];
    if (path.startsWith("letterSpacing.") || path.startsWith("font.letterSpacing.") || path.includes("letterSpacing")) return ["LETTER_SPACING"];
    if (path.startsWith("space.") || path.includes(".space.") || path.includes("gap")) {
      return isThemeToken ? ["GAP"] : [];
    }
    if (path.includes("radius")) return ["CORNER_RADIUS"];
    if (path.includes("opacity")) return ["OPACITY"];
    return ["ALL_SCOPES"];
  }

  return ["ALL_SCOPES"];
}

function isReference(value) {
  return typeof value === "string" && /^\{[^{}]+\}$/.test(value.trim());
}

function referenceToRef(value) {
  return value.trim().slice(1, -1);
}

function resolveConcreteValue(token, context, seen = new Set(), modeName) {
  if (!token) return undefined;
  if (seen.has(token.ref)) {
    context.warnings.push(`Circular reference found at ${token.ref}.`);
    return undefined;
  }

  const value = selectModeValue(token.value, modeName);

  if (isReference(value)) {
    const targetRef = referenceToRef(value);
    const target = context.tokenByRef.get(targetRef);
    if (!target) {
      context.warnings.push(`Unresolved concrete value alias ${value} at ${token.ref}.`);
      return undefined;
    }
    seen.add(token.ref);
    return resolveConcreteValue(target, context, seen, modeName);
  }

  return value;
}

function resolveConcreteColor(token, context, modeName) {
  return toFigmaColor(resolveConcreteValue(token, context, new Set(), modeName));
}

function resolveAlpha(token, context, modeName) {
  const value = resolveConcreteValue(token, context, new Set(), modeName);
  if (value && typeof value === "object" && typeof value.alpha === "number") return value.alpha;
  return 1;
}

function isModeValueMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  if (value.components || value.colorSpace || value.hex) return false;
  return true;
}

function selectModeValue(value, modeName) {
  if (!isModeValueMap(value)) return value;
  if (modeName && value[modeName] !== undefined) return value[modeName];
  if (value.Light !== undefined) return value.Light;
  if (value.Dark !== undefined) return value.Dark;
  const firstModeName = Object.keys(value)[0];
  return firstModeName ? value[firstModeName] : undefined;
}

function toFigmaColor(value) {
  if (value && typeof value === "object" && Array.isArray(value.components)) {
    return {
      r: clamp01(Number(value.components[0])),
      g: clamp01(Number(value.components[1])),
      b: clamp01(Number(value.components[2]))
    };
  }

  const text = String(value || "#000000").trim();
  const rgbaMatch = text.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (rgbaMatch) {
    return {
      r: clamp01(Number(rgbaMatch[1]) / 255),
      g: clamp01(Number(rgbaMatch[2]) / 255),
      b: clamp01(Number(rgbaMatch[3]) / 255)
    };
  }

  const hex = text.replace(/^#/, "");
  if (/^[0-9a-f]{6}/i.test(hex)) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255
    };
  }

  return { r: 0, g: 0, b: 0 };
}

function parseShadowEffects(value) {
  const text = String(value || "");
  return splitShadowList(text).map((shadow) => {
    const match = shadow.match(/^(inset\s+)?(-?[\d.]+)(?:px)?\s+(-?[\d.]+)(?:px)?\s+([\d.]+)(?:px)?(?:\s+(-?[\d.]+)(?:px)?)?\s+(rgba?\([^)]+\)|#[0-9a-f]{6,8})$/i);
    if (!match) return null;

    const color = parseShadowColor(match[6]);
    return {
      type: match[1] ? "INNER_SHADOW" : "DROP_SHADOW",
      visible: true,
      color,
      offset: { x: Number(match[2]), y: Number(match[3]) },
      radius: Number(match[4]),
      spread: match[5] === undefined ? 0 : Number(match[5]),
      blendMode: "NORMAL",
      showShadowBehindNode: false
    };
  }).filter(Boolean);
}

function splitShadowList(value) {
  const shadows = [];
  let current = "";
  let depth = 0;
  String(value || "").split("").forEach((char) => {
    if (char === "(") depth += 1;
    if (char === ")") depth = Math.max(0, depth - 1);
    if (char === "," && depth === 0) {
      if (current.trim()) shadows.push(current.trim());
      current = "";
      return;
    }
    current += char;
  });
  if (current.trim()) shadows.push(current.trim());
  return shadows;
}

function parseShadowColor(value) {
  const text = String(value || "").trim();
  const rgbaMatch = text.match(/^rgba?\(([^)]+)\)$/i);
  if (rgbaMatch) {
    const parts = rgbaMatch[1].split(",").map((part) => part.trim());
    const color = toFigmaColor("rgb(" + parts.slice(0, 3).join(",") + ")");
    return {
      r: color.r,
      g: color.g,
      b: color.b,
      a: parts[3] === undefined ? 1 : clamp01(Number(parts[3]))
    };
  }

  const color = toFigmaColor(text);
  const alpha = text.replace(/^#/, "").length >= 8
    ? parseInt(text.replace(/^#/, "").slice(6, 8), 16) / 255
    : 1;
  return { r: color.r, g: color.g, b: color.b, a: clamp01(alpha) };
}

function toFigmaTextCase(value) {
  const text = String(value || "none").toLowerCase();
  if (text === "uppercase") return "UPPER";
  if (text === "lowercase") return "LOWER";
  if (text === "capitalize" || text === "title") return "TITLE";
  return "ORIGINAL";
}

function normalizeFontFamily(value) {
  const raw = String(value || "Inter").replace(/["']/g, "").trim();
  const cssVarMatch = raw.match(/^var\(--font-([^)]+)\)$/);
  if (!cssVarMatch) return raw;

  const known = {
    forum: "Forum",
    "plus-jakarta": "Plus Jakarta Sans",
    "plus-jakarta-sans": "Plus Jakarta Sans"
  };

  const key = cssVarMatch[1].toLowerCase();
  return known[key] || key.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function fontStyleCandidates(weight) {
  const rounded = Math.round(Number(weight) / 100) * 100;
  const map = {
    100: ["Thin", "Hairline", "Regular"],
    200: ["ExtraLight", "Extra Light", "Ultra Light", "Light", "Book", "Regular"],
    300: ["Light", "Book", "Roman", "Regular", "Normal"],
    400: ["Regular", "Normal", "Book", "Roman"],
    500: ["Medium", "Demi", "Regular", "Normal"],
    600: ["SemiBold", "Semi Bold", "Semibold", "DemiBold", "Demi Bold", "Medium", "Bold", "Regular"],
    700: ["Bold", "DemiBold", "Demi Bold", "SemiBold", "Semibold", "Regular"],
    800: ["ExtraBold", "Extra Bold", "Ultra Bold", "Bold", "Regular"],
    900: ["Black", "Heavy", "ExtraBold", "Bold", "Regular"]
  };
  return map[rounded] || ["Regular"];
}

function styleNameForToken(token, context) {
  const baseName = `${token.collectionName}/${token.figmaName}`;
  const prefix = context && context.stylePrefix ? context.stylePrefix : "";
  if (!prefix) return baseName;
  return `${prefix}/${baseName}`;
}

function clamp01(value) {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(1, value));
}
