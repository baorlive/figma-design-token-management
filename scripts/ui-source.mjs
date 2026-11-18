import { readFileSync } from "node:fs";

export const root = new URL("../", import.meta.url);
export const read = (path) => readFileSync(new URL(path, root), "utf8");

export function extractUiScript(html = read("ui.html")) {
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];
  if (scripts.length !== 1 || scripts[0][1].trim()) {
    throw new Error("Expected one inline script in ui.html; update the extraction contract if this changes.");
  }
  return scripts[0][2].trim() + "\n";
}
