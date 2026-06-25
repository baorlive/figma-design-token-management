# Figma Plugin: Token-Driven DS Creation

![Figma Plugin: Token-Driven DS Creation](./README-IMG.png)

Take full control of your design tokens with a scalable, 3-layer architecture. Build a consistent, token-driven system from Figma design to code implementation.

## Overview

### Foundations Layer

Define the core hex and raw values for your design system.

### Semantic Layer

Map foundational values to create context-aware aliases that drive component visuals and light/dark themes.

### Component Layer

Coming soon: bind semantic tokens to specific UI properties for absolute visual consistency.

### Export & Management

Export your token taxonomy as `.md` files for seamless codebase integration, empowering AI agents to consistently build your design system where tokens are the primary driver.

This plugin helps teams set up design tokens and generate Figma Variables and Styles from a token-first workflow.

## Load in Figma

1. Open Figma.
2. Go to `Plugins > Development > Import plugin from manifest...`.
3. Select `figma-plugin/manifest.json`.
4. Run `Design System Token Importer`.

## Main Workflow

Use the setup screen to define the same first-layer structure used by the main app:

- Foundation color scales from tabbed brand packs plus grouped system-status scales.
- Foundation spacing tokens.
- Foundation size tokens.
- Foundation radius tokens.
- Foundation opacity tokens.
- Foundation text tokens.
- Semantic color aliases.
- Semantic spacing aliases.
- Semantic size aliases.
- Semantic radius aliases.
- Semantic opacity aliases.
- Semantic shadow/elevation effect tokens.
- Semantic text styles.
- Naming for Foundation collection, Theme collection, mode, and optional style prefix.

Click `Generate` to create or update Figma Variables and Styles.

The plugin starts with defaults copied from the app's color, text, and spacing token model. Add, remove, or edit rows, then click `Generate`.

`Overwrite old generated tokens/styles` is enabled by default. When enabled, plugin-generated variables/styles missing from the current setup are removed, existing ones are updated, and new ones are created.

## API-backed behavior

- Uses Figma Variables collections and modes for generated token values.
- Uses Figma variable aliases for theme references. Theme tokens map directly from Foundation primitive variables.
- Uses scoped variables so picker results stay relevant:
  - Text colors are scoped to text-fill, and typography numbers use font-size, line-height, or letter-spacing scopes.
  - Semantic spacing tokens (`space.inline.*`, `space.stack.*`, etc.) are scoped specifically to the Auto Layout `GAP` scope (which covers both gap and padding).
  - Semantic size tokens (`size.control.*`, `size.dialog.*`, `size.layout.*`) are scoped specifically to the `WIDTH_HEIGHT` scope (making them assignable only to width and height layout fields).
  - All Foundation primitive tokens (such as `space.*`, `size.*`, `radius.*`, `opacity.*`) are assigned empty scopes `[]`, which completely hides them from all Figma property pickers and edit inputs, leaving the design panels clean and limited only to semantic design tokens.
- Letter spacing foundation tokens are parsed as percentages (supporting both `%` and `px` formats, with `px` dynamically converted based on the text style font size). Generated text styles use the `PERCENT` unit for letter spacing instead of being forced to `PIXELS` (achieved by omitting the variable binding since Figma only supports binding variables to letter spacing in `PIXELS`).
- Uses local paint and text style APIs to update existing styles by name instead of duplicating them.
- Uses `figma.clientStorage` for plugin window size persistence because browser `localStorage` is unavailable in Figma plugin UI data URLs.
- Supports `Set as default` to store the current setup/options in `figma.clientStorage`; `Reset` loads this saved default when available.
- Supports saved sessions in `figma.clientStorage`, with saves managed by the plugin backend instead of forcing an automatic `.md` download when a session is created or updated. The last active saved session is restored when the plugin reopens. Use the Session dropdown to load a saved setup, `Save session` to add the current setup to the saved list, `Sessions` to manage saved sessions, `Import .md` to import a Markdown session, and `Export .md` to manually download the current setup when needed.

## Input Sections

- `Foundation: Color`: uses one tab per brand color pack. System-status scales such as `info`, `success`, `warning`, and `danger` live in their own grouped rows below neutral. Each pack creates a 5-tone scale such as `Foundation/color/brand/*`, plus required `Foundation/color/neutral/*` scale values for surfaces, text, and borders.
- `Foundation: Spacing`: creates primitive numeric spacing variables such as `Foundation/space/16`.
- `Foundation: Size`: creates primitive numeric size variables such as `Foundation/size/40`.
- `Foundation: Radius`: creates primitive numeric corner radius variables such as `Foundation/radius/8`.
- `Foundation: Opacity`: creates primitive numeric opacity variables such as `Foundation/opacity/12`.
- `Foundation: Text`: creates primitive `Foundation/font/family/*`, `font/size/*`, `font/weight/*`, `font/lineHeight/*`, `font/letterSpacing/*`, and `font/textTransform/*`.
- `Semantic: Color`: creates `Theme/color/*` aliases to Foundation color variables.
- `Semantic: Spacing`: creates `Theme/space/*` aliases to Foundation spacing variables.
- `Semantic: Size`: creates `Theme/size/*` aliases to Foundation size variables.
- `Semantic: Radius`: creates `Theme/radius/*` aliases to Foundation radius variables.
- `Semantic: Opacity`: creates `Theme/opacity/*` aliases to Foundation opacity variables.
- `Semantic: Shadow`: creates `Theme/shadow/*` string variables and Figma effect styles from CSS-like shadow values. Use `shadow.sm`, `shadow.md`, and `shadow.lg` for cards, popovers, modals, and menus.
- `Semantic: Text Styles`: creates `Theme/text/*` composite variables and Figma text styles. Each text style maps directly to Foundation values for family, size, weight, line-height, letter-spacing, and text case.
- Styles are generated only from the Theme collection. Foundation variables are not turned into Figma styles.

## Spacing Naming Guideline

Use semantic spacing names by intent and axis:

- `space.inline.*`: horizontal spacing between siblings (often gap-x / inline margin).
- `space.stack.*`: vertical spacing between siblings (often gap-y / block margin).
- `space.inset.*`: inner container padding.
- `space.layout.*`: page/section/container outer spacing.
- `space.control.*`: component internal spacing (button/input/chip paddings).

Suggested set:

- `space.inline.xs|sm|md|lg`
- `space.stack.xs|sm|md|lg`
- `space.inset.xs|sm|md|lg`
- `space.layout.section|page`
- `space.control.xs|sm|md`

If teams want explicit property-facing aliases, add:

- `space.margin.*` -> aliases to `space.inline.*` / `space.stack.*`
- `space.padding.*` -> aliases to `space.inset.*`

## Size Naming Guideline

Use size tokens for fixed component dimensions, not spacing between things:

- `size.control.*`: component heights, such as buttons and inputs.
- `size.icon.*`: icon box sizes.
- `size.touch.*`: minimum touch target sizes.
- `size.avatar.*`: avatar dimensions.
- `size.dialog.width.*`: modal/dialog widths, following standard T-shirt sizes.
- `size.dialog.maxHeight.*`: modal/dialog maximum heights to handle viewport vertical scrolling constraints.
- `size.layout.header.height`: top navigation/header scaffolding height.
- `size.layout.sidebar.width`: main navigation/sidebar scaffolding width.
- `size.layout.drawer.width`: drawer/side sheet container width.

## Generated Setup Shape

```json
{
  "foundation": {
    "color": {
      "brand.100": "#FBD6D2",
      "brand.300": "#F38A7C",
      "brand.500": "#E8341C",
      "brand.700": "#B52816",
      "brand.900": "#7D1C0F",
      "neutral.0": "#FFFFFF",
      "neutral.50": "#F7F7F8",
      "neutral.900": "#1E222B"
    },
    "spacing": {
      "space.8": 8,
      "space.16": 16
    },
    "size": {
      "size.32": 32,
      "size.40": 40,
      "size.48": 48,
      "size.320": 320,
      "size.560": 560
    },
    "radius": {
      "radius.sm": 4,
      "radius.md": 8,
      "radius.lg": 16
    },
    "opacity": {
      "opacity.12": 0.12,
      "opacity.100": 1
    },
    "text": {
      "family": { "font.family.sans": "Inter" },
      "size": { "font.size.14": 14, "font.size.28": 28 },
      "weight": { "font.weight.regular": 400, "font.weight.bold": 700 },
      "lineHeight": { "font.lineHeight.14": "21px", "font.lineHeight.28": "38px" },
      "letterSpacing": { "font.letterSpacing.default": 0 }
    }
  },
  "semantic": {
    "color": {
      "bg.default": "color.neutral.0",
      "text.default": "color.neutral.900"
    },
    "spacing": {
      "stack.sm": "space.8",
      "inset.md": "space.16",
      "control.sm": "space.8"
    },
    "size": {
      "control.sm": "size.32",
      "control.md": "size.40",
      "control.lg": "size.48",
      "dialog.width.xs": "size.320",
      "dialog.width.md": "size.560"
    },
    "radius": {
      "control.sm": "radius.sm",
      "control.md": "radius.md",
      "control.lg": "radius.lg"
    },
    "opacity": {
      "state.hover": "opacity.8",
      "state.disabled": "opacity.38"
    },
    "shadow": {
      "sm": "0px 1px 2px 0px rgba(18, 21, 27, 0.08)",
      "md": "0px 4px 12px 0px rgba(18, 21, 27, 0.12)",
      "lg": "0px 12px 32px 0px rgba(18, 21, 27, 0.18)"
    },
    "text": {
      "body.m": {
        "fontFamily": "font.family.sans",
        "fontSize": "font.size.14",
        "fontWeight": "font.weight.regular",
        "lineHeight": "font.lineHeight.14",
        "letterSpacing": "font.letterSpacing.default",
        "textCase": "font.textTransform.none"
      }
    }
  }
}
```

Short names are normalized:

- Foundation color `brand.primary` becomes `color.brand.primary`.
- Generated foundation colors follow primitive palette naming: `color.brand.100` to `color.brand.900` and `color.neutral.*`.
- Foundation spacing names are value-based: `space.8` has value `8`, `space.16` has value `16`, and bare `16` is still accepted and normalized to `space.16`.
- Foundation size names are value-based: `size.40` has value `40`.
- Semantic color `bg.default` becomes `color.bg.default`.
- Semantic spacing `stack.sm` becomes `space.stack.sm`.
- Semantic size `control.md` becomes `size.control.md`.
- Semantic shadow `sm` becomes `shadow.sm` and generates both a Theme string variable and a local Effect Style.
- Semantic text `body.m` becomes `text.body.m`.
- Text primitives use canonical names under `font.*`.
- `font.size.*` names are value-based, for example `font.size.14` has value `14`.
- `font.lineHeight.*` follows `lineHeight.fontSize` naming, for example `font.lineHeight.14` is the line-height token paired with size `14`.

## Dashboard JSON

The advanced `Import dashboard JSON` section still accepts the dashboard's Figma Tokens export:

- `Palette`, `Foundation`, or a renamed primitive collection becomes the foundation variable collection.
- `Theme` becomes the semantic variable collection.
- `Component` becomes the component variable collection when present.
- DTCG aliases such as `{Foundation.color.brand.500}` become Figma variable aliases.
