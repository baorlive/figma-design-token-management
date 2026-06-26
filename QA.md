# Design System Token Importer QA Reference

## Purpose

This document describes the current feature set, what the plugin can do, and how it is currently designed and implemented. It is the authoritative reference for QA, regression testing, and future development rules.

The plugin is a Figma development plugin named **Design System Token Importer**. It turns a token setup form or imported token JSON into local Figma Variables and local Paint, Text, and Effect Styles.

---

## Plugin Entry Points

- `manifest.json`: declares the plugin name, id, Figma editor target, controller entry, and UI entry.
- `code.js`: runs in the Figma plugin controller environment. It owns Figma API calls for Variables, Styles, aliases, storage, font loading, notifications, and import orchestration.
- `ui.html`: contains the plugin UI, CSS, markup, and inline browser JavaScript. The inline `<script>` is the authoritative UI source.
- `ui.js`: mirrors the UI JavaScript logic from `ui.html`. Must be kept in sync with `ui.html` after any logic change.
- `README.md`: user-facing workflow, token taxonomy, naming rules, and examples.

---

## High-Level Feature List

- Generates Figma Variables from token definitions.
- Generates local Figma Paint Styles from semantic color tokens.
- Generates local Figma Text Styles from semantic text token groups.
- Generates local Figma Effect Styles from semantic shadow tokens.
- Supports a guided setup UI for Foundation and Semantic tokens.
- Supports dashboard/token JSON import.
- Supports session save, load, delete, import, and export.
- Supports a saved default setup.
- Restores the last active saved session when reopening.
- Persists plugin window size.
- Supports Light and Dark semantic color modes.
- Supports overwrite/prune behavior for old plugin-generated variables and styles.
- Supports variable aliasing from semantic tokens to Foundation tokens.
- Applies scoped variable visibility so Figma property pickers stay focused.
- Loads available Figma fonts and uses font fallbacks during text style generation.
- Provides token suggestions/datalists for reference fields.
- Provides a custom color picker for brand and Foundation colors.
- Shows inline status feedback in the header after Generate, Reset, and session operations.
- Shows inline validation errors inside the Save Session modal without closing it.

---

## Token Categories

### Foundation Tokens

Foundation tokens create primitive variables and are intentionally hidden from most Figma property pickers through empty variable scopes.

- Color: `color.*`
- Spacing: `space.*`
- Size: `size.*`
- Radius: `radius.*`
- Opacity: `opacity.*`
- Font family: `font.family.*`
- Font size: `font.size.*`
- Font weight: `font.weight.*`
- Line height: `font.lineHeight.*`
- Letter spacing: `font.letterSpacing.*`
- Text transform: `font.textTransform.*`

### Semantic Tokens

Semantic tokens are intended for designers to apply in Figma. They map to Foundation tokens and receive Figma scopes based on their category.

- Color: `color.text.*`, `color.bg.*`, `color.border.*`, `color.action.*`, `color.focus.*`, `color.status.*`
- Spacing: `space.inline.*`, `space.stack.*`, `space.inset.*`, `space.layout.*`, `space.control.*`
- Size: `size.control.*`, `size.icon.*`, `size.touch.*`, `size.avatar.*`, `size.dialog.*`, `size.layout.*`
- Radius: `radius.*`
- Opacity: `opacity.*`
- Shadow/elevation: `shadow.*`
- Text styles: `text.*`

---

## Current UI Design

The UI is a dark, desktop-style interface with a fixed header and a three-column workspace:

- Left column: token category tabs.
- Middle column: Foundation token editor for the active category.
- Right column: Semantic token editor for the active category.

Available tabs:

- Color
- Text
- Spacing
- Size
- Radius
- Opacity
- Shadow

Header controls:

- `Generate`
- `Reset`
- `Close`
- **Status bar** (inline, appears next to Generate; shows Generating… / success / error text)
- `Variables` toggle
- `Styles` toggle
- Light/Dark generation toggles
- `Overwrite old generated tokens/styles`
- Session selector
- Save session menu
- Import menu
- Set as default

The UI uses restrained dark surfaces, compact controls, icon buttons, hint popovers, token rows, searchable session menus, and a draggable resize corner.

---

## Guided Setup Features

### Color Setup

- Manages Foundation brand color packs.
- Generates 5-tone brand scales from a base color.
- Includes neutral scale defaults.
- Includes status color groups for info, success, warning, and danger.
- Supports adding, renaming, selecting, recoloring, and deleting brand packs.
- Shows semantic color mapping rows with swatches.
- Supports Light and Dark semantic color mode editing.
- Synchronizes missing semantic color values between modes when needed.

### Text Setup

- Manages Foundation font families, sizes, weights, line heights, letter spacing, and text transforms.
- Manages Semantic text styles as composite rows.
- Semantic text style fields map to Foundation font tokens:
  - Font family
  - Font size
  - Font weight
  - Line height
  - Letter spacing
  - Text case
- Supports adding text styles.
- Supports sorting semantic text styles by group and size.
- Supports collapsing/expanding semantic text mapping fields.
- Loads available Figma fonts into suggestions.

### Spacing Setup

- Manages Foundation spacing primitives.
- Manages Semantic spacing aliases grouped by usage intent.
- Semantic spacing tokens are scoped to Figma gap/padding assignment surfaces.

### Size Setup

- Manages Foundation size primitives.
- Manages Semantic size aliases for controls, icons, touch targets, avatars, dialog dimensions, and layout dimensions.
- Semantic size tokens are scoped to width/height assignment surfaces.

### Radius Setup

- Uses a fixed Foundation radius map:
  - `radius.0`
  - `radius.4`
  - `radius.8`
  - `radius.16`
  - `radius.32`
  - `radius.9999`
- Uses a fixed semantic radius map:
  - `none`
  - `sm`
  - `md`
  - `lg`
  - `xl`
  - `full`
- Normalizes legacy radius references such as `radius.pill` or `radius.round` to `radius.9999`.

### Opacity Setup

- Manages Foundation opacity primitives.
- Manages Semantic opacity aliases for state, overlay, and content usage.
- Normalizes 0..1 opacity variable values to Figma's percentage-style assignment values where needed.

### Shadow Setup

- Has no editable Foundation shadow column.
- Manages Semantic shadow/elevation tokens.
- Parses CSS-like shadow strings into Figma Effect Styles.
- Supports comma-separated multiple shadows.
- Supports outer and inset shadows when the CSS-like syntax can be parsed.

---

## Import And Export Features

### Guided Setup Import Path

The UI posts:

```json
{ "type": "setup-tokens", "setup": {}, "options": {} }
```

`code.js` converts the setup payload into DTCG-style collections through `buildTokensFromSetup()`, then imports the generated token collections.

### Dashboard JSON Import Path

The UI posts:

```json
{ "type": "import-tokens", "tokens": {}, "options": {} }
```

`code.js` reads DTCG-style collections through `readCollections()` and `flattenTokens()`.

Supported dashboard concepts:

- `$collection`
- `$type`
- `$value`
- Collection modes
- References like `{Foundation.color.brand.500}`
- Collections such as Foundation, Theme, and Component when present in imported JSON

### Session Import And Export

The session system supports:

- Save as new session
- Save current session
- Load saved session
- Delete saved session
- Import `.md` session file
- Import `.json` token file
- Export saved sessions as `.md`
- Export saved sessions as `.json`

Session Markdown stores a JSON payload inside a fenced `json` block.

---

## Storage Features

The plugin uses `figma.clientStorage` in `code.js` for persistent plugin state:

- Window size: `tokenPluginWindowSize`
- Default setup: `tokenPluginDefaultSetup`
- Saved sessions: `tokenPluginSavedSessions`
- Active session id: `tokenPluginActiveSessionId`

The UI also has local fallback storage keys for default/session data if backend storage fails.

---

## Generation Options

- `variables`: generate/update Figma Variables.
- `styles`: generate/update local Figma Styles.
- `overwrite`: remove obsolete plugin-generated variables/styles in active generated collections.
- `paletteName`: currently fixed to `Foundation`.
- `themeName`: currently fixed or session-derived as `Theme`.
- `modeName`: base mode, currently `Light`.
- `modeNames`: selected semantic color modes, currently Light and/or Dark.
- `stylePrefix`: supported by the controller, though the current UI keeps the visible setup simple.

---

## Implementation Details

### Message Contract

UI to controller:

- `resize-ui`
- `close`
- `save-default`
- `load-default`
- `load-sessions`
- `load-fonts`
- `save-session`
- `set-active-session`
- `delete-session`
- `setup-tokens`
- `import-tokens`

Controller to UI:

- `window-size`
- `available-fonts`
- `available-fonts-error`
- `save-default-complete`
- `save-default-error`
- `load-default-complete`
- `load-default-error`
- `load-sessions-complete`
- `load-sessions-error`
- `save-session-complete`
- `save-session-error`
- `delete-session-complete`
- `delete-session-error`
- `import-started`
- `import-complete`
- `import-error`

### Status Feedback

The UI uses a `<span id="status">` element in the header action row for inline status feedback.

- Receives Figma theme-aware styles via `.status`, `.status.ok`, and `.status.error` CSS classes.
- Is hidden when empty (`display: none` becomes `display: inline-block` when content is non-empty via `:not(:empty)`).
- Has `role="status"`, `aria-live="polite"`, and `aria-atomic="true"` for screen reader compatibility.
- `setStatus(message, kind)` sets `textContent` and the CSS class on this element.
- **Rule:** Never remove `id="status"` from the HTML. If `status` is `null` at runtime, `setStatus()` falls back to opening a feedback modal for every call — this breaks the Save Session dialog (dialog gets stuck) and makes Generate appear unresponsive.

### Save Session Modal

The Save Session modal (`id="saveModalBackdrop"`) contains:

- `id="saveModalName"` — text input for the session name.
- `id="saveModalHint"` — paragraph for inline validation error text (e.g. "Session name is required.").
- `id="saveModalConfirm"` — Save button wired to `commitSaveSession()`.
- `id="saveModalCancel"` — Cancel button wired to `closeSaveModal()`.

**Rule:** `commitSaveSession()` must never call `setStatus()` for validation errors while the modal is open. Instead it writes to `saveModalHint.textContent`. This prevents the feedback modal from opening on top of the save modal and making it impossible to dismiss.

### Variable Generation

`importTokens()` orchestrates the import:

1. Reads token collections.
2. Builds token reference maps.
3. Creates or updates variable collections.
4. Creates or updates variables.
5. Sets values and aliases per mode.
6. Creates or updates styles.
7. Prunes obsolete generated variables/styles when overwrite is enabled.

Variables are tagged with plugin data using `tool-designsystem-token-id`, which allows later pruning without touching unrelated user-created variables/styles.

`setVariableValues(collections, context, summary)` accepts three parameters to align with its call site. The `summary` parameter is currently unused inside the function (warnings are pushed to `context.warnings`), but the signature must match the call in `importTokens()`.

### Collection And Mode Handling

- Existing collections are reused by name.
- Missing collections are created.
- Missing modes are added.
- A default `Mode 1` mode can be renamed to the requested first mode.
- Foundation defaults to a `Value` mode.
- Theme uses selected semantic modes, typically `Light` and `Dark`.

### Alias Handling

- Token references use DTCG syntax: `{Collection.path.to.token}`.
- Semantic aliases are converted to Figma variable aliases when the target variable exists.
- Unresolved aliases are reported as warnings rather than crashing the full import where possible.
- Circular references are detected while resolving concrete values.

### Style Generation

Styles are generated only from the Theme collection.

- Semantic color tokens create Paint Styles.
- Semantic shadow tokens create Effect Styles.
- Semantic text token groups create Text Styles.
- Existing styles are updated by exact name instead of duplicated.
- Generated styles are tagged with plugin data for future pruning.

### Paint Style Behavior

- Creates solid Paint Styles from semantic color tokens.
- Resolves concrete color and alpha values.
- Binds the paint color to the generated semantic color variable when possible.

### Text Style Behavior

- Groups semantic text fields by shared `text.*` path.
- Requires at least `fontFamily` and `fontSize` to create a text style.
- Loads the requested font/style before mutating Figma text style font properties.
- Falls back through requested family/style → `Inter Regular` → `Roboto Regular`.
- Applies font size, line height, letter spacing, and text case.
- Binds font family, font size, and font weight variables when possible.
- Does not bind letter spacing variables because Figma forces bound letter spacing to pixel units; the plugin preserves percent letter spacing by applying the value directly.

### Font Style Candidates

`fontStyleCandidates(weight)` maps CSS numeric weights to an ordered list of Figma font style names to try:

| Weight | Candidates (in order) |
|---|---|
| 100 | Thin, Hairline, Regular |
| 200 | ExtraLight, Extra Light, Ultra Light, Light, Book, Regular |
| 300 | Light, Book, Roman, Regular, Normal |
| 400 | Regular, Normal, Book, Roman |
| 500 | Medium, Demi, **Book**, Regular, Normal |
| 600 | SemiBold, Semi Bold, Semibold, DemiBold, Demi Bold, Medium, Bold, Regular |
| 700 | Bold, DemiBold, Demi Bold, SemiBold, Semibold, Regular |
| 800 | ExtraBold, Extra Bold, Ultra Bold, Bold, Regular |
| 900 | Black, Heavy, ExtraBold, Bold, Regular |

`Book` is included in weight 500 to support fonts such as Proxima Nova that use the `Book` style name for medium-weight text.

**Rule:** When adding a new weight entry or reordering candidates, ensure `Regular` is always the final fallback in every row.

### Effect Style Behavior

- Parses CSS-like shadow values such as `0px 4px 12px 0px rgba(...)`.
- Supports multiple comma-separated shadows (split is parenthesis-aware so `rgba()` is not broken).
- Converts parsed values into Figma `DROP_SHADOW` or `INNER_SHADOW` effects (`inset` prefix → `INNER_SHADOW`).
- Skips effect creation when the value cannot be parsed into a supported shadow.

### Variable Scopes

Foundation variables use `[]` scopes so they do not clutter Figma property pickers.

Theme variables use scopes based on token path and type:

- Text color tokens: `TEXT_FILL`
- Border color tokens: `STROKE_COLOR`
- Fill/background color tokens: `ALL_FILLS`
- Shadow color/string tokens: effect-related scopes
- Font size tokens and text style fontSize fields: `FONT_SIZE`
- Font weight tokens and text style fontWeight fields: `FONT_WEIGHT`
- Line height fields: `LINE_HEIGHT`
- Letter spacing fields: `LETTER_SPACING`
- Spacing tokens: `GAP`
- Size tokens: `WIDTH_HEIGHT`
- Radius tokens: `CORNER_RADIUS`
- Opacity tokens: `OPACITY`

---

## Bug Fix History

### 2026-06-26 — Save Session Dialog Stuck + Generate Button Unresponsive

**Root cause:** `id="status"` element was absent from `ui.html`. `setStatus()` has a fallback: when the status element is `null`, it calls `showFeedback()` (feedback modal) for every message. This caused two breakages:

1. **Save session stuck:** Clicking Save with an empty name called `setStatus("Session name is required.", "error")` → opened the feedback modal on top of the save modal → no way to dismiss the save modal.
2. **Generate unresponsive:** Clicking Generate called `setStatus("Generating...")` → feedback modal opened and blocked the UI → `import-complete` tried another `setStatus` → modal conflict; generate button stayed disabled.

**Fixes applied:**

- Restored `<span id="status" class="status" aria-live="polite" aria-atomic="true">` in the header action row in `ui.html`.
- Added `.status`, `.status.ok`, `.status.error` CSS with Figma theme-aware color variables.
- Added `<p id="saveModalHint" class="save-modal-hint">` inside the save modal for inline validation messages.
- Added `.save-modal-hint` CSS rule.
- Updated `commitSaveSession()` in both `ui.html` and `ui.js`:
  - Clears `saveModalHint` on each invocation.
  - On empty name: writes to `saveModalHint.textContent`, adds `input-error` class to the input (auto-removed after 1200 ms), never calls `setStatus`.
  - On catch error: writes to `saveModalHint.textContent` if hint element exists, falls back to `setStatus` only if hint element is absent.

**Files changed:** `ui.html`, `ui.js`

---

### 2026-06-26 — fontStyleCandidates Weight 500 Missing Book

**Root cause:** `fontStyleCandidates(500)` did not include `"Book"`, causing fonts like Proxima Nova to fall through to `Regular` for medium-weight text styles instead of resolving the correct `Book` style.

**Fix:** Added `"Book"` after `"Demi"` in the weight-500 candidate array: `["Medium", "Demi", "Book", "Regular", "Normal"]`.

**File changed:** `code.js` — `fontStyleCandidates()` function.

---

### 2026-06-26 — setVariableValues Signature Mismatch

**Root cause:** `setVariableValues` was declared as `(collections, context)` but called as `setVariableValues(collections, context, summary)`. JavaScript silently ignores extra arguments, so there was no runtime error, but the signature was misleading.

**Fix:** Updated the function signature to `(collections, context, summary)` to match the call site. The `summary` parameter is currently unused inside the function body (warnings flow through `context.warnings`).

**File changed:** `code.js` — `setVariableValues()` declaration.

---

## Development Rules

These rules are derived from bugs found and fixed during QA. Follow them when editing the plugin.

### UI / HTML Rules

1. **Never remove `id="status"`.** The `setStatus()` fallback opens a feedback modal when this element is absent, which breaks the Save Session dialog and the Generate flow.

2. **Never call `setStatus()` for validation errors while a modal is open.** Write to the modal's own hint element instead. Each modal that requires validation (currently only the Save Session modal) must have its own `id="…Hint"` paragraph for inline error display.

3. **Keep `ui.html` and `ui.js` in sync.** `ui.js` mirrors the inline script in `ui.html`. After any logic change in either file, apply the equivalent change to the other.

4. **Do not add new required DOM IDs without documenting them here.** The plugin uses `document.getElementById()` with no null-guard in several places. A missing element causes a silent `null` reference that surfaces as unexpected behavior elsewhere.

5. **Status bar element CSS.** The `.status` element uses `display: none` by default and `display: inline-block` only when non-empty, controlled by `:not(:empty)`. Do not add `display` overrides to `.status.ok` or `.status.error` — the `:not(:empty)` selector handles visibility.

### code.js Rules

6. **`fontStyleCandidates` — always include `Regular` as the last fallback.** Every weight bucket must end with `"Regular"` to guarantee a load-able font name even for uncommon font families.

7. **`setVariableValues` accepts `(collections, context, summary)`.** Keep the signature consistent with the call site in `importTokens()`. The parameter is intentionally received but not used inside the function body.

8. **Never remove `PLUGIN_DATA_KEY` tagging from created variables and styles.** The prune/overwrite behavior depends entirely on plugin data to identify which variables and styles were generated by this plugin. Removing the tag breaks pruning and will leave orphaned Figma objects.

9. **`context.overwrite !== false` controls pruning.** The default is `true` (overwrite enabled). Do not change the default without updating the UI toggle and the QA checklist.

10. **Unresolved aliases push to `context.warnings`, not `throw`.** Import should be maximally tolerant. A single bad alias must not abort the entire import. Only push to warnings and continue.

11. **Circular reference detection uses a `seen` Set.** When resolving concrete values, always pass and extend the `seen` set. Do not flatten circular references silently.

12. **Letter spacing variable binding is intentionally skipped.** Figma forces letter spacing to pixel units when a variable is bound, destroying the percent value. Apply the percent value directly and do not bind the variable. This is documented in the code comment and must not be changed without a Figma API update that supports percent-unit variable binding.

---

## Required DOM Element IDs

These IDs must exist in `ui.html`. Removing any of them will silently break the corresponding feature.

| ID | Purpose |
|---|---|
| `status` | Inline status bar; absence causes all `setStatus()` calls to open modals |
| `generate` | Generate button |
| `reset` | Reset button |
| `cancel` | Close button |
| `variables` | Variables toggle checkbox |
| `styles` | Styles toggle checkbox |
| `overwrite` | Overwrite toggle checkbox |
| `modeName` | Hidden input tracking current editing mode (Light/Dark) |
| `generateLightMode` | Light mode generation checkbox |
| `generateDarkMode` | Dark mode generation checkbox |
| `paletteName` | Hidden input for Foundation collection name |
| `themeName` | Hidden input for Theme collection name |
| `sessionSelect` | Native select for session list |
| `sessionSelectButton` | Custom session dropdown trigger |
| `sessionSelectMenu` | Custom session dropdown listbox |
| `saveSession` | Save session button |
| `saveMenu` | Save menu dropdown |
| `saveAsNewSession` | Save as new menu item |
| `saveCurrentSession` | Save current menu item |
| `loadSession` | Import menu trigger |
| `importMenu` | Import menu dropdown |
| `importSessionMarkdown` | Import .md menu item |
| `importSessionJson` | Import .json menu item |
| `setDefault` | Set as default button |
| `saveModalBackdrop` | Save session modal overlay |
| `saveModalName` | Session name input inside save modal |
| `saveModalHint` | Inline validation error paragraph inside save modal |
| `saveModalConfirm` | Confirm button inside save modal |
| `saveModalCancel` | Cancel button inside save modal |
| `feedbackModalBackdrop` | Feedback/result modal overlay |
| `feedbackModalTitle` | Feedback modal title |
| `feedbackModalMessage` | Feedback modal message |
| `feedbackModalOk` | Feedback modal OK button |
| `brandColors` | Foundation brand color rows container |
| `neutralColors` | Foundation neutral color rows container |
| `statusColors` | Foundation status color rows container |
| `foundationColors` | All foundation color rows container |
| `foundationSpacing` | Foundation spacing rows container |
| `foundationSize` | Foundation size rows container |
| `foundationRadius` | Foundation radius rows container |
| `foundationOpacity` | Foundation opacity rows container |
| `semanticColors` | Semantic color rows container |
| `semanticSpacing` | Semantic spacing rows container |
| `semanticSize` | Semantic size rows container |
| `semanticRadius` | Semantic radius rows container |
| `semanticOpacity` | Semantic opacity rows container |
| `semanticShadow` | Semantic shadow rows container |
| `semanticText` | Semantic text rows container |
| `fontFamily` | Foundation font family rows container |
| `fontSize` | Foundation font size rows container |
| `fontWeight` | Foundation font weight rows container |
| `fontLineHeight` | Foundation line height rows container |
| `fontLetterSpacing` | Foundation letter spacing rows container |
| `fontTextTransform` | Foundation text transform rows container |
| `customColorPicker` | Custom HSV color picker panel |
| `brandPackTabs` | Brand pack tab strip |
| `addBrandPack` | Add brand pack button |
| `sortSemanticText` | Sort semantic text styles button |
| `toggleSemanticMapping` | Collapse/expand semantic text mapping button |
| `resizeCornerHitarea` | Drag handle for plugin window resize |
| `file` | Hidden file input for JSON import |
| `sessionFile` | Hidden file input for session file import |

---

## QA Checklist

### Load And Basic UI

- Import `manifest.json` in Figma as a development plugin.
- Run **Design System Token Importer**.
- Confirm the plugin opens at the expected default size.
- Confirm header controls are visible and not clipped.
- Confirm the status bar (next to Generate) is not visible when empty.
- Confirm token tabs switch the Foundation/Semantic columns together.
- Confirm the resize corner changes the plugin window size and the size persists after reopening.

### Generate Defaults

- With default settings, click `Generate`.
- Confirm the status bar shows `Generating…` inline (not as a modal).
- Confirm the status bar shows a success summary after completion.
- Confirm Figma shows Foundation and Theme variable collections.
- Confirm Foundation collection has `Value` mode.
- Confirm Theme collection has selected Light/Dark modes.
- Confirm local Paint, Text, and Effect Styles are created from Theme tokens.

### Variables Toggle

- Disable `Variables` and leave `Styles` enabled.
- Click `Generate`.
- Confirm styles are created/updated without creating/updating variables.

### Styles Toggle

- Enable `Variables` and disable `Styles`.
- Click `Generate`.
- Confirm variables are created/updated without creating/updating styles.

### Overwrite Behavior

- Generate defaults.
- Remove one semantic token row.
- Generate with overwrite enabled.
- Confirm the old plugin-generated variable/style for the removed token is pruned.
- Confirm unrelated user-created variables/styles are not removed.
- Repeat with overwrite disabled and confirm obsolete generated items remain.

### Status Bar QA

- Trigger Generate and confirm inline `Generating…` text appears in the header (not a modal).
- Confirm success message appears inline after generation completes.
- Trigger a generation error (e.g. disable Variables and Styles) and confirm the error appears inline in the status bar.
- Confirm status bar is hidden/empty when idle.

### Color QA

- Add a new brand pack.
- Rename the brand pack.
- Change its base color.
- Confirm tone scale rows update.
- Confirm semantic color references update when a brand pack is renamed.
- Switch between Light and Dark mode editing.
- Confirm both selected modes generate in the Theme collection.
- Confirm semantic color Paint Styles bind to variables where possible.

### Text QA

- Add a Foundation font family.
- Add a Semantic text style.
- Use font token suggestions where available.
- Generate and confirm the local Text Style is created.
- Confirm line height and letter spacing are applied as percentages.
- Confirm missing font styles fall back without crashing and warnings are reported.
- For fonts using `Book` at weight 500 (e.g. Proxima Nova), confirm the style resolves correctly.
- Use sort and collapse/expand controls for semantic text rows.

### Spacing And Size QA

- Add Foundation spacing and size primitives.
- Add Semantic spacing and size aliases.
- Generate and confirm semantic spacing variables are scoped to gap fields.
- Generate and confirm semantic size variables are scoped to width/height fields.

### Radius And Opacity QA

- Confirm radius rows use the fixed supported radius set.
- Import or enter legacy radius references such as `radius.pill`; confirm they normalize to `radius.9999`.
- Confirm opacity values such as `0.38` generate usable opacity variables.

### Shadow QA

- Add a CSS-like shadow value.
- Generate and confirm a local Effect Style is created.
- Test multiple shadows separated by commas.
- Test an inset shadow with the `inset` prefix and confirm `INNER_SHADOW` type.
- Test an invalid shadow value and confirm the plugin does not crash.

### Session QA

- Click `Save session` → `Save as new` with an **empty name**.
  - Confirm the modal stays open (does not close or open a second modal on top).
  - Confirm an inline error hint appears inside the modal ("Session name is required.").
  - Confirm the name input gets focus.
- Enter a valid name and click Save.
- Confirm the session appears in the session selector.
- Modify tokens and save current session.
- Reload the plugin and confirm the active session restores.
- Export session as `.md` and `.json`.
- Import a saved `.md` session and confirm the form state is restored.
- Delete a session and confirm it is removed from the selector.

### Default Setup QA

- Modify token setup.
- Click `Set as default`.
- Click `Reset`.
- Confirm saved default setup is restored.
- Clear or bypass saved default storage and confirm reset falls back to built-in defaults.

### Dashboard JSON QA

- Import a valid dashboard/Figma Tokens JSON file.
- Confirm collections, modes, variables, aliases, and Theme styles are created.
- Import JSON with unresolved aliases and confirm warnings are shown/logged without a full crash.
- Import invalid JSON and confirm the UI shows an inline error (not a stuck modal).

---

## Current Limitations And Watch Areas

- Component-layer token binding is described as coming soon in the README and is not implemented as a full component binding workflow.
- Foundation shadow tokens are not exposed as an editable Foundation shadow section; only Semantic shadow/elevation tokens generate effect styles.
- `stylePrefix` is supported in the controller but not presented as a primary visible UI control.
- The plugin has no bundler, automated test suite, or package-managed build step in this folder.
- `ui.html` contains a large inline script, so UI logic requires careful manual review after changes. Always sync equivalent changes to `ui.js`.
- Figma manual QA is required because the core behavior depends on Figma plugin APIs and mutates local Variables and Styles.
- Letter spacing variable binding is intentionally skipped to preserve percent units (see Development Rules §12).

---

## Suggested Regression Commands

Run these after every code change:

```sh
node --check code.js
```

After any HTML structure change, verify all required IDs in the Required DOM Element IDs table are still present:

```sh
node -e "
var html = require('fs').readFileSync('ui.html','utf8');
var ids = ['status','generate','reset','cancel','variables','styles','overwrite',
  'saveModalBackdrop','saveModalName','saveModalHint','saveModalConfirm','saveModalCancel',
  'feedbackModalBackdrop','feedbackModalOk','sessionSelect','saveSession','setDefault',
  'brandColors','semanticColors','semanticShadow','semanticText','customColorPicker',
  'resizeCornerHitarea','generateLightMode','generateDarkMode'];
var failed = ids.filter(function(id){ return html.indexOf('id=\"'+id+'\"') === -1; });
if (failed.length) { console.error('MISSING IDs:', failed.join(', ')); process.exit(1); }
else console.log('All required IDs present.');
"
```

After logic changes to `ui.html`, also apply the equivalent edit to `ui.js` and confirm both files match for the changed function.
