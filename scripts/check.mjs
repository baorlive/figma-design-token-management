import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { Script } from "node:vm";
import { extractUiScript, read, root } from "./ui-source.mjs";

const html = read("ui.html");
const inlineScript = extractUiScript(html);
for (const [filename, source] of [["code.js", read("code.js")], ["ui.js", read("ui.js")], ["ui.html inline script", inlineScript]]) {
  new Script(source, { filename });
}
assert.equal(read("ui.js"), inlineScript, "UI mirror is stale. Run npm run sync:ui.");

const manifest = JSON.parse(read("manifest.json"));
assert.equal(manifest.api, "1.0.0");
assert.deepEqual(manifest.editorType, ["figma"]);
assert.equal(manifest.main, "code.js");
assert.equal(manifest.ui, "ui.html");
assert.ok(manifest.name && manifest.id, "Manifest needs a name and ID.");
for (const path of [manifest.main, manifest.ui]) assert.ok(existsSync(new URL(path, root)), `Missing entry: ${path}`);

// Check literal DOM lookups without executing the Figma iframe in Node.
const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "");
const ids = [...markup.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "Duplicate HTML IDs.");
// Legacy dashboard button is optional; all its uses are null-guarded.
const optionalIds = new Set(["importDashboard"]);
for (const match of inlineScript.matchAll(/getElementById\(["']([^"']+)["']\)/g)) {
  assert.ok(ids.includes(match[1]) || optionalIds.has(match[1]), `UI references a missing element: ${match[1]}`);
}

function checkDocs(directory = root) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const url = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);
    if (entry.isDirectory()) checkDocs(url);
    else if (entry.name.endsWith(".md")) {
      const content = read(url);
      for (const match of content.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
        const target = match[1].split("#")[0];
        if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
        assert.ok(existsSync(new URL(target, url)), `Broken local link in ${entry.name}: ${target}`);
      }
    }
  }
}
checkDocs();
console.log("Passed: JavaScript syntax, UI sync, manifest, DOM references, and local documentation links.");
