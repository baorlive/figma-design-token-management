# Plugin UI guidelines

Design guidance for the token editor in `ui.html`, not a claim that every existing control has been audited against it. Keep Foundation and Semantic editors paired, token tabs coordinated, and generation/session actions easy to find. These visual foundations describe the interface; they are separate from the user-generated design tokens.

## Visual foundations

Use the registered values below. Change a token's value and affected consumers together rather than adding one-off styling. Preserve Figma theme-aware status feedback.

### Color

Every color rule must use an exact hex code. Use eight-digit hex (`#RRGGBBAA`) when alpha is required. Never use an ambiguous color description without its corresponding code.

Core surfaces:

- `--bg-app: #121212` — application canvas.
- `--bg-panel: #181818` — navigation, header, sidebar, and detail panels.
- `--bg-panel-2: #1E1E1E` — nested panels and menus.
- `--bg-elevated: #242424` — controls and elevated surfaces.
- `--bg-hover: #2A2A2A` — hover and focus fill.
- `--bg-canvas: #0B0B0B` — media or high-contrast preview canvas.

Borders:

- `--border-subtle: #FFFFFF11` — structural separators and default cards.
- `--border-strong: #FFFFFF21` — elevated containers and emphasized separation.
- `--border-hover: #FFFFFF3D` — interactive structural borders only.

Text and icons:

- `--text-primary: #FFFFFFEB` — primary labels and values.
- `--text-secondary: #FFFFFFA6` — secondary labels and inactive controls.
- `--text-muted: #FFFFFF66` — supporting metadata and placeholders.
- `--text-disabled: #FFFFFF40` — disabled content.
- `--text-on-accent: #FFFFFF` — content on accent fills.
- `--text-on-light: #111111` — content on light fills.

Action and status colors:

- `--accent: #E8341C` — primary actions, active selection, destructive emphasis.
- `--accent-hover: #D02F18` — accent hover.
- `--accent-soft: #E8341C26` — subtle accent fill.
- `--accent-border: #E8341C59` — structural accent border when required.
- `--danger: #E8341C` — destructive text and icons.
- `--danger-soft: #E8341C1F` — destructive secondary action fill.
- `--danger-hover: #E8341C33` — destructive secondary hover fill.
- `--success: #22C55E` — success text and icons.
- `--success-soft: #22C55E26` — success fill.
- `--success-border: #22C55E59` — success border.

Overlay and elevation colors:

- `--scrim: #000000C7` — modal scrim.
- `--floating-control: #0C0C0CB8` — controls floating above media.
- `--shadow-broad: #00000080` — broad elevation shadow.
- `--shadow-tight: #0000004D` — tight elevation shadow.
- `--action-light: #FFFFFFEB` — high-contrast light action.
- `--action-light-hover: #FFFFFF` — light-action hover.

Elevated containers combine `--shadow-broad: #00000080` and `--shadow-tight: #0000004D`. Floating media controls may blur behind `--floating-control: #0C0C0CB8` when supported. Do not use colored glows.

### Typography

- Font family: `Inter`, followed by the system UI sans-serif stack.
- Body and control text: `14px`.
- Titles: `24px`.
- Major headings: `36px`.
- Minimum supporting text: `12px`.
- Default line height: `1.5`.
- Use `12px` only for compact counts, badges, tags, or supporting metadata.
- Section labels use `12px`, `1.5` line height, semibold uppercase text, `0.06em` tracking, and `#FFFFFF66` muted color.

### Shape

- `--radius-sm: 3px` — chips and compact rows.
- `--radius-md: 5px` — buttons, inputs, and selects.
- `--radius-lg: 8px` — cards.
- `--radius-xl: 10px` — dialogs and large elevated containers.

### Spacing

- `--gap-internal: 4px` — tightly related content inside a control or compact component.
- `--gap-compact: 6px` — compact control groups and metadata pairs.
- `--gap-default: 8px` — standard spacing between related sibling elements.
- `--gap-comfortable: 10px` — moderately separated content within a component.
- `--gap-group: 12px` — distinct groups within a section.
- `--gap-section: 16px` — sections and outer component layout.
- Permitted spacing values are the tokenized values above: `4px`, `6px`, `8px`, `10px`, `12px`, and `16px`.
- Dense nested layouts use `--gap-section` for the outer gap, `--gap-default` for group gaps, and `--gap-internal` for internal gaps.
- Do not create one-off spacing values without adding a semantic token here.

### Layout and spacing ownership

- Build layouts with flexbox or grid and use the semantic gap tokens for spacing between sibling UI elements.
- Use a column flex container for vertical stacks and a row flex container for horizontal groups.
- Use nested flex or grid groups when separate relationships require different gap values.
- Fixed desktop shells use a full-height column flex container. Keep chrome as a non-growing flex child and make the primary content region `flex: 1 1 auto` with `min-height: 0`.
- Parent containers own sibling spacing through `gap`; do not use margins to create spacing between siblings.
- Reserve margins for exceptional boundary positioning that cannot be expressed by the parent layout, never for routine component rhythm.

### Sizing

- Standard interactive-control height: `38px`.
- Minimum clickable target: `38px × 38px`.
- Standard icon size inside controls: `16px × 16px`.
- Compact non-button indicators may use `28–30px` height.

## Layout and controls

- Use a full-height flex shell, non-growing header, and scrollable content with `min-height: 0`. Avoid body scrolling and reserved body scrollbar gutters.
- Keep header actions compact and unclipped. Side-by-side editors may stack when their columns are no longer usable; replace side dividers with top dividers.
- Editable fields fill their track with `width: 100%` and `min-width: 0`. Two 38px row actions need an 84px track including the 8px gap. Preserve access to complete truncated values.
- Neutral controls use elevated fill and secondary text; hover uses hover fill and primary text. Primary actions use accent/on-accent and accent-hover. Use fill contrast before structural borders.
- Inputs use elevated fill, primary text, muted placeholders, and a clearly distinguishable focus state. Never hide keyboard focus without a visible replacement.
- Neutral Light/Dark segmented controls use panel fill, 8px radius, and 4px padding/gap; selected segments use hover fill and primary text.
- Menus use panel-2 fill and strong structural borders. Dialogs use elevated fill over the scrim; validation appears inside the active dialog.

## Dropdowns and row actions

Keep native selects when acceptable. Custom triggers use standard control dimensions, 5px radius, and an open/hover fill; menus overlay content 4px below with 4px padding, strong border, and broad shadow. Keep menus inside the panel boundary. Options use standard target height, 8px horizontal padding, and 3px radius; selected primary options use accent/on-accent.

Expose expanded/selected state with the appropriate ARIA semantics. Support arrow traversal, Escape/outside dismissal, and focus return. Session selection and export/delete actions must remain independently operable; secondary actions must not select the row. Match roles to the interaction structure rather than placing interactive buttons inside an option indiscriminately.

## Accessibility and content

- Give icon actions accessible names and dialogs content-specific labels.
- Expose selected/pressed state programmatically; do not rely on color alone.
- Use right/down chevrons for collapsed/expanded content.
- Keep labels concrete, errors actionable, and progress visible without blocking unrelated controls.
- Verify keyboard interaction and focus in Figma; see [manual QA](QA.md). Screenshots alone do not establish accessibility.
