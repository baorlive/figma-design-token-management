# Agent instructions

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for quality gates and evidence. Consult [manual QA](docs/QA.md) for affected behavior and [UI guidelines](docs/UI.md) before changing visual design.

## Architecture

- Keep the plugin dependency-free and runnable directly from `manifest.json`. No bundler-only syntax, modules, JSX, or TypeScript in runtime files.
- `code.js` owns Figma APIs, token conversion, Variables, Styles, fonts, and storage. It has no DOM.
- `ui.html` owns markup, CSS, and inline browser logic. It communicates with the controller through plugin messages; it has no Figma API access.
- `ui.js` is generated from the authoritative inline script. Use the synchronization command documented in CONTRIBUTING; never edit the mirror independently.
- Store persistent plugin data through `figma.clientStorage`; do not depend on browser `localStorage` in the Figma iframe.

## Token and controller constraints

- Defaults are `Foundation` with mode `Value`, and `Theme` with selected color modes. Respect custom collection names.
- Preserve `$collection`, `$type`, `$value`, modes, and aliases such as `{Foundation.color.brand.500}`.
- Use canonical `color.*`, `space.*`, `size.*`, `radius.*`, `opacity.*`, `shadow.*`, and `font.*` paths. Spacing and font-size primitive suffixes match their values (`space.8 = 8`, `font.size.14 = 14`). Preserve existing line-height references when modifying typography.
- Motion primitives use `duration.*` (milliseconds) and `easing.*` (CSS strings); semantic roles use `motion.duration.*` and `motion.easing.*`.
- Composite `text.*` fields end with `.fontFamily`, `.fontSize`, `.fontWeight`, `.lineHeight`, `.letterSpacing`, and `.textCase`. Changing suffixes also requires updating UI payloads and `collectTextStyleGroups()`.
- Setup changes may affect form defaults, `buildSetup()` in the iframe, and `buildTokensFromSetup()` in the controller. JSON parsing changes belong in `readCollections()` / `flattenTokens()`.
- Use variable aliases when a target exists. Warn on unresolved aliases; detect circular references with a `seen` set rather than crashing or silently flattening them.
- Generate styles only from the configured Theme collection. Update styles by name, preserve picker scopes, and keep `PLUGIN_DATA_KEY` tagging on generated assets.
- Overwrite defaults to enabled; pruning must preserve untagged assets and inactive collections. Changes require regression coverage and manual QA.
- Load fonts before assigning text style font properties. Preserve requested-family candidates (including `Book` at weight 500), then Inter Regular / Roboto Regular fallbacks.
- Preserve numeric, percentage, and px typography conversion. Apply letter spacing as a percent value without variable binding, which can force pixel units.
- Preserve hex and rgb/rgba input support and existing opacity normalization.

## UI and message constraints

- Setup posts `{ type: "setup-tokens", setup, options }`; dashboard import posts `{ type: "import-tokens", tokens, options }`.
- Preserve the `import-started` → `import-complete` / `import-error` lifecycle and re-enable controls on completion or failure.
- Search both controller and iframe before changing message names, including resize, font, session, and default-storage messages.
- Preserve `id="status"` and the Save Session inline hint. Modal validation belongs inside the modal; calling global status fallback can stack feedback modals and block generation.
- Keep status hidden when empty through `:not(:empty)` visibility rules. Do not override visibility in `.status.ok` / `.status.error`.
- Required DOM lookups must have matching markup. Document intentional optional controls in the static check rather than bypassing missing required IDs.

## Handoff

Keep changes focused; preserve user edits, license, and Git history. Do not force-push or rewrite published commits as routine cleanup. Complete applicable quality gates and report actual results, limitations, and any unverified Figma behavior. Update the document that owns the changed behavior instead of duplicating instructions.

## Show code changes after implementation


After each turn that implements file or code changes, open the Codex desktop Review panel before sending the final reply. Use the current chat's `last-turn` review when available. If that view is unavailable, open the relevant unstaged or staged diff. If the desktop review tool is unavailable, include a concise file-by-file summary with links in the final reply.
