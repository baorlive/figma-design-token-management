# Manual Figma QA

Use a disposable design file: generation mutates local Variables and Styles. Run the applicable rows for behavior changes and the full checklist before a release. Record Figma desktop/browser, OS, plugin size, generation options, tested categories, results, and remaining gaps in the PR. These are checks to perform, not claims of completed testing.

Automated checks and review requirements are defined in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Regression checklist

| Area | Checks and expected result |
| --- | --- |
| Load and resize | Import the manifest, open the plugin, inspect unclipped header/editors, switch tabs, resize, and reopen; dimensions persist. |
| Default generation | Generate defaults; inline progress becomes a success summary, controls recover, Foundation has Value mode, Theme has selected Light/Dark modes, and semantic Paint/Text/Effect Styles exist. Generate again without duplicates. |
| Generation options | Test Variables-only and Styles-only; the disabled asset type is untouched. Test invalid/no-output options and confirm inline feedback with recovered controls. |
| Overwrite/prune | Remove a token after generation. With overwrite on, obsolete tagged variables/styles disappear; untagged assets and inactive collections survive. With overwrite off, obsolete assets remain. |
| Color | Add/rename a brand pack and edit its base; tone rows and semantic references update. Neutral defaults include 0 and 100–1000 by 100. Edit Light/Dark independently; generated aliases and Paint Style bindings resolve. |
| Typography | Add Foundation font and semantic text rows; suggestions, sorting, and collapse work. Generated styles preserve percentage line height and letter spacing. Missing fonts fall back with warnings; check weight-500 Book when available. |
| Spacing and size | Add primitives and aliases; values resolve and semantic scopes target gap and width/height respectively. |
| Radius and opacity | Verify supported radius rows, legacy `radius.pill` → `radius.9999` normalization, and usable opacity values from legacy fractional inputs such as 0.38. |
| Shadow | Edit primitives and semantic references; suggestions and Effect Styles update. Test comma-separated layers, inset → INNER_SHADOW, and invalid input without a crash. |
| Motion | Edit duration/easing primitives and semantic aliases. Test presets, Bézier handles, numeric coordinates, preview, and linear easing; generation retains the selected values and aliases. |
| Sessions | Save with an empty name: modal stays open, shows its own hint, and focuses the input without stacking another modal. Save a valid name, modify/save current, reopen to restore active state, export/import both Markdown and JSON, then delete. |
| Defaults | Set a modified setup as default and Reset to restore it. With saved defaults cleared, Reset restores built-in defaults. |
| Dashboard JSON | Import the [fixture](../examples/token-collections.json); inspect collections, modes, values, and aliases. Test unresolved references and invalid JSON: warnings/errors are visible and the interface remains usable. |
| Status feedback | Progress, success, and errors appear inline; empty status is hidden. Save validation never blocks later Generate actions. |
| Interface | Check narrow/wide plugin sizes, long token names, overflow, tab order, visible focus, accessible names, selected states, dropdown Escape/outside dismissal, and dialog focus return. Attach same-size before/after screenshots for UI changes. |

## Known boundaries

- The Node suite simulates Figma APIs. Live style generation, bindings, font availability, persistence across restarts, import/export, and keyboard behavior need manual testing.
- The large inline UI script requires visual and interaction review; syntax and DOM checks do not establish accessibility compliance.
- `stylePrefix` exists in the controller but is not a primary visible control.
- Letter-spacing variable binding is intentionally skipped to retain percent units.
- Historical regressions to preserve: inline Save validation and status handling, weight-500 Book fallback, and variable/style pruning ownership. Implementation constraints live in [AGENTS.md](../AGENTS.md).
