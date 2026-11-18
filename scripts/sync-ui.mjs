import { writeFileSync } from "node:fs";
import { extractUiScript, root } from "./ui-source.mjs";

writeFileSync(new URL("ui.js", root), extractUiScript());
console.log("Synced ui.js from the authoritative ui.html script.");
