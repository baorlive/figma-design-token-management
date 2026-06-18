# Native Dark Desktop UI

This document describes the current implemented UI in [ui.html](/Users/bao/Documents/figma-plugin/design system gen/ui.html) and should be treated as the design reference for the token importer panel.

## 1. Product Intent

The UI is implemented as a compact dark desktop tool rather than a marketing-style web form. The panel behaves like a production editor:

- Dense layout with persistent controls at the top.
- Sharp charcoal surfaces with low-contrast separators.
- Monochrome default actions, with one branded destructive-attention action.
- Side-by-side token editing for Foundation and Semantic layers.
- Lightweight modal, menu, and suggestion surfaces instead of full-screen flows.

## 2. Source Of Truth

- Primary implementation: [ui.html](/Users/bao/Documents/figma-plugin/design system gen/ui.html)
- Secondary script file exists: [ui.js](/Users/bao/Documents/figma-plugin/design system gen/ui.js)

`ui.html` currently contains the richer and more complete implementation. It includes categories and interactions that `ui.js` does not fully mirror, so any future UI updates should align to `ui.html` first.

## 3. Visual System

### Core palette

The current panel uses a native dark charcoal stack:

- `--bg-app: #121212`
- `--bg-panel: #181818`
- `--bg-panel-2: #1e1e1e`
- `--bg-elevated: #242424`
- `--border-subtle: rgba(255,255,255,0.07)`
- `--border-strong: rgba(255,255,255,0.15)`
- `--text-primary: rgba(255,255,255,0.92)`
- `--text-secondary: rgba(255,255,255,0.65)`
- `--text-muted: rgba(255,255,255,0.40)`

Additional implemented state tokens:

- `--text-disabled`
- `--accent`, `--accent-soft`, `--accent-border`
- `--danger`, `--danger-soft`
- `--shadow-elevated`

### Action color policy

- Default buttons are dark and subdued.
- Header secondary actions use inverted white fill with black text.
- The primary `Generate` action is branded red: `#E8341C`.
- Hover and active states stay restrained; there are no glow effects or saturated gradients.

### Shape and spacing

- Small radii dominate: `3px`, `5px`, `8px`, `10px`.
- Standard spacing scale is `4/8/12/16/20/24`.
- Inputs and buttons mostly sit at `36-38px` height.

## 4. Layout Architecture

The implemented layout is a three-part desktop shell:

1. Header row
2. Session/config row
3. Token workspace

### Header row

The top area contains:

- Title: `Setup Figma Tokens`
- Supporting copy describing Foundation vs Theme tokens
- Action row: `Reset`, `Close`, `Generate`
- Generation toggles: `Variables`, `Styles`, `Overwrite old generated tokens/styles`

### Session/config row

The second band manages reusable working states:

- Saved session picker
- `Save session`
- `Import` split menu with `.md` and `.json`
- `Set as default`

Hidden values are still part of the active setup payload:

- `paletteName`
- `themeName`
- `modeName`

### Token workspace

The main editing area is a 3-column grid:

- Left rail: token category navigation
- Middle column: Foundation tokens
- Right column: Semantic tokens

The left rail is sticky and uses these categories:

- `Color`
- `Text`
- `Spacing`
- `Size`
- `Radius`
- `Opacity`
- `Shadow`

Each category activates a matching Foundation and Semantic panel side by side.

## 5. Implemented Token Categories

### Color

Foundation color editing is split into:

- Brand color packs via tabs
- Neutral scale
- Status scale

Implemented brand behavior:

- Multiple brand packs can exist
- Each pack has a name and base color
- Brand tabs can be added, selected, renamed, and deleted
- Brand colors can be collapsed or expanded

Implemented neutral scale:

- `neutral.0`
- `neutral.50`
- `neutral.100`
- `neutral.200`
- `neutral.300`
- `neutral.500`
- `neutral.700`
- `neutral.900`
- `neutral.1000`

Semantic color editing uses intent names such as:

- `text.*`
- `bg.*`
- `border.*`
- `action.*`
- `focus.*`
- `status.*`

It also includes a Light/Dark mode toggle. The toggle swaps semantic references using built-in mode packs rather than only changing UI chrome.

### Text

Foundation text is broken into separate primitive groups:

- Font family
- Font size
- Font weight
- Line height
- Letter spacing
- Text transform

Semantic text styles are usage-based rows such as:

- `display.*`
- `headline.*`
- `title.*`
- `body.*`
- `button.*`
- `label.*`
- `caption.*`

Each semantic text row maps to multiple primitive references. Rows can also be:

- Sorted by font size descending
- Collapsed or expanded at the mapping level
- Removed individually

### Spacing

Foundation spacing uses numeric primitives such as `space.0` through `space.80`.

Semantic spacing uses intent names such as:

- `inline.*`
- `stack.*`
- `inset.*`
- `layout.*`
- `control.*`

### Size

Foundation size is implemented for primitive dimensions like:

- `size.16`
- `size.20`
- `size.24`
- `size.32`
- `size.36`
- `size.40`
- `size.44`
- `size.48`
- `size.56`
- `size.64`

Semantic size aliases cover component usage:

- `control.*`
- `icon.*`
- `touch.*`
- `avatar.*`

### Radius

Foundation radius is currently a small primitive set:

- `radius.sm`
- `radius.md`
- `radius.lg`

Semantic radius is intentionally minimal:

- `sm`
- `md`
- `lg`

### Opacity

Foundation opacity primitives include:

- `opacity.0`
- `opacity.8`
- `opacity.12`
- `opacity.16`
- `opacity.38`
- `opacity.60`
- `opacity.80`
- `opacity.100`

Semantic opacity aliases focus on state and overlays:

- `state.hover`
- `state.focus`
- `state.pressed`
- `state.dragged`
- `state.disabled`
- `overlay.*`
- `content.*`

### Shadow

Shadow is handled differently from other categories:

- Foundation shadow panel is explanatory only
- Semantic shadow is the editable layer

Semantic shadow ships with:

- `sm`
- `md`
- `lg`

Values are CSS shadow strings intended to become Figma effect styles.

## 6. Interaction Model

### Row editing

The token editor is row-based:

- Every row has explicit add/remove controls
- Token name and value/reference fields are visually separated
- Token name inputs are emphasized with stronger border treatment
- Reference inputs use suggestion/autocomplete behavior

### Suggestion system

The UI implements a global suggestion popover with:

- Scrim backdrop
- Active field highlighting
- Keyboard-friendly option selection
- Shared datalists for token references

This is used to keep semantic mappings aligned to currently available primitive tokens.

### Elevated surfaces

The following UI parts use elevated desktop surfaces:

- Save session modal
- Feedback modal
- Session select menu
- Import menu
- Reference suggestion popover

These surfaces consistently use `--bg-elevated`, stronger borders, and `--shadow-elevated`.

### Window resizing

The panel includes a resize corner hit area at the bottom-right. This is part of the implemented desktop-tool behavior and should remain available.

## 7. Data And Persistence Model

The current UI supports several persistence flows:

- Save current setup as markdown session
- Import session from markdown
- Import token JSON
- Save current setup as default
- Load saved defaults on startup
- Manage saved sessions through the session picker

The session payload includes:

- Foundation token groups
- Semantic token groups
- Generation options
- Active tab
- Current mode

## 8. Current Naming Guidance In Product

The UI already teaches naming conventions through hints and popovers. Those conventions are part of the product and should be preserved:

- Semantic color uses intent names
- Semantic spacing uses layout/usage names
- Semantic size uses fixed-dimension usage names
- Semantic radius stays minimal
- Semantic opacity is state-oriented
- Semantic shadow is elevation-oriented
- Semantic text uses role-plus-size naming

## 9. Implementation Notes

- `ui.html` contains both structure and active behavior.
- The design is intentionally compact and should not be relaxed into large-card SaaS spacing.
- The light/dark mode control currently affects semantic color mappings, not the host panel theme.
- White secondary buttons in the header/session area are intentional and part of the current visual hierarchy.
- The red `Generate` button is the only strong color emphasis in the shell.

## 10. Guardrails For Future Updates

When updating this UI, preserve these characteristics:

- Keep the desktop-editor density and avoid large empty sections.
- Maintain the left-rail plus dual-column editing structure.
- Keep semantic editing tied to primitive references rather than freeform styling.
- Reuse the elevated-surface pattern for menus, popovers, and modals.
- Keep strong color usage limited to the primary generate action and functional status color tokens.
- Treat `ui.html` as the implementation baseline unless the app is refactored to move all logic back into `ui.js`.
