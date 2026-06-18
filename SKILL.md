---
name: design-system-token-importer
description: Work on the Design System Token Importer Figma plugin in this repository. Use when modifying or debugging the plugin that turns setup form input or dashboard token JSON into Figma Variables and Styles, including code.js, ui.html, manifest.json, Foundation primitive tokens, semantic aliases, variable collections, text styles, paint styles, and Figma plugin UI behavior.
---

# Design System Token Importer

## Repository Shape

- `manifest.json`: Figma development plugin manifest. Main entry is `code.js`; UI entry is `ui.html`.
- `code.js`: Figma plugin controller. Owns Figma API calls, Variables, Styles, aliases, font loading, imports, and plugin notifications.
- `ui.html`: Single-file plugin UI with CSS and inline JavaScript. Owns setup forms, dashboard JSON import, generated setup payloads, resize behavior, and status UI.
- `README.md`: User-facing plugin workflow and token shape. Keep it aligned when changing workflow or supported token input.
- `skills/opencode-desktop-ui/SKILL.md`: UI styling skill for dark desktop-app layouts, component patterns, and token discipline when refining the plugin interface.

There is no build step and no package manager setup in this folder. Edit plain JavaScript, HTML, CSS, and JSON directly.

## UI Styling

When the task changes layout, spacing, hierarchy, or visual design in `ui.html`, read `skills/opencode-desktop-ui/SKILL.md` first. Use it to keep the plugin UI aligned to a restrained desktop dark theme with a consistent tokenized design system instead of one-off styling.

## Core Workflow

The plugin has two import paths:

1. Setup flow in `ui.html` posts `{ type: "setup-tokens", setup, options }`.
2. Dashboard JSON import in `ui.html` posts `{ type: "import-tokens", tokens, options }`.

`code.js` receives both paths through `figma.ui.onmessage`, posts `import-started`, imports tokens, then posts either `import-complete` or `import-error`.

For setup flow changes:

- Update the form/defaults/read functions in `ui.html`.
- Update `buildSetup()` in `ui.html` if the setup payload shape changes.
- Update `buildTokensFromSetup()` in `code.js` to convert the setup payload to DTCG-style collections.
- Update `README.md` if the visible workflow, defaults, or generated token shape changes.

For dashboard JSON import changes:

- Prefer changing parsing in `readCollections()` and `flattenTokens()` in `code.js`.
- Preserve DTCG compatibility: `$collection`, `$type`, `$value`, modes, and aliases like `{Foundation.color.brand.500}`.

## Token Model

Generated setup tokens use two collections by default:

- `Foundation`: primitive values, with mode `Value`.
- `Theme`: semantic aliases and text style fields, with user-selected mode such as `Light`.

Primitive naming:

- Foundation colors normalize to `color.*`.
- Foundation spacing normalizes to value-based `space.*` names. The suffix should match the numeric value, for example `space.8` has value `8` and `space.16` has value `16`; do not use unrelated scale IDs like `space.50` for value `8`.
- Foundation text primitives normalize to `font.family.*`, `font.size.*`, `font.weight.*`, `font.lineHeight.*`, `font.letterSpacing.*`, and `font.textTransform.*`. The setup UI should display these full canonical names, not bare names like `sans`, `100`, or `regular`.
- `font.size.*` names are value-based. The suffix should match the numeric value, for example `font.size.14` has value `14`; avoid scale IDs like `font.size.100` for value `14`.
- `font.lineHeight.*` uses `lineHeight.fontSize` naming. The suffix should match the paired font size token, for example `font.lineHeight.14` for `font.size.14`.

Semantic naming:

- Semantic colors normalize to `color.*`.
- Semantic spacing normalizes to `space.*`.
- Semantic text styles normalize to `text.*`.

Text style groups are composite token groups ending with:

- `.color`
- `.fontFamily`
- `.fontSize`
- `.fontWeight`
- `.lineHeight`
- `.letterSpacing`
- `.textCase`

Keep these suffixes stable unless also updating `collectTextStyleGroups()` and the UI setup payload.

## Figma API Rules

- Use Figma Variables for generated token values.
- Use variable aliases for semantic references when the target variable exists.
- Update local paint, text, and effect styles by name instead of creating duplicates.
- Generate styles from the Theme collection only; do not generate Foundation primitive styles.
- Use `figma.clientStorage` for persisted plugin UI data. Browser `localStorage` is unavailable in Figma plugin UI data URLs.
- Always load fonts before mutating text style font properties. Current fallback order is requested family/style, then `Inter Regular`, then `Roboto Regular`.
- Preserve variable scopes in `getVariableScopes()` so Figma pickers stay relevant.

## Message Contract

Messages from UI to controller:

- `resize-ui`: `{ width, height }`
- `close`
- `setup-tokens`: `{ setup, options }`
- `import-tokens`: `{ tokens, options }`

Messages from controller to UI:

- `window-size`: `{ width, height }`
- `import-started`
- `import-complete`: `{ summary }`
- `import-error`: `{ error }`

Keep message type strings centralized by searching before renaming; both files usually need changes.

## Verification

Before finishing code changes:

1. Run `node --check code.js` to catch controller syntax errors.
2. Run `python3 - <<'PY'` with an `html.parser.HTMLParser` parse check only if Python is available and the edit touched HTML structure.
3. Manually inspect UI JavaScript edits in `ui.html`; inline browser code is not covered by `node --check`.
4. Load the plugin in Figma with `Plugins > Development > Import plugin from manifest...` and select `manifest.json`.
5. Run `Design System Token Importer`, click `Generate`, and confirm Variables and Styles are created or updated.

Use a small Figma test file for manual QA because imports mutate local Variables and Styles.

## Common Pitfalls

- Do not introduce bundler-only syntax, imports, modules, JSX, TypeScript annotations, or external dependencies.
- Do not rely on DOM APIs in `code.js`; it runs in the Figma plugin controller environment.
- Do not rely on Figma APIs in `ui.html`; it runs in the plugin iframe and must communicate with `parent.postMessage`.
- Keep color conversion accepting hex and rgb/rgba strings.
- Keep line height conversion compatible with numbers, percentages, and px values.
- Keep aliases resilient: unresolved references should warn instead of crashing whenever possible.
