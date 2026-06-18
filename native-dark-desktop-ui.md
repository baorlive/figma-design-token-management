# System Skill: Native Dark Desktop UI Engineering

Use this skill when modifying or generating product UI that must feel like a native, high-productivity dark desktop tool (e.g., modern IDEs, desktop audio workstations, advanced developer tools) rather than a generic SaaS web dashboard.

## 1. Visual Intent & Aesthetic Architecture

* **Layered Charcoal Chiaroscuro:** Utilize a low-chroma charcoal color space with layered panels rather than flat pure black (`#000000`).
* **Hairline Division:** Enforce structural separation via thin, low-contrast separators and quiet borders instead of heavy card shadows or wide margins.
* **Information Density:** Default to a compact, data-dense layout. Maximize screen real estate efficiently without causing overlapping text or visual crowding.
* **Quiet Typography:** Establish semantic hierarchy through font weight variations, subtle value (opacity) shifts, and intentional tracking/letter-spacing rather than dramatic font size jumps.
* **Restrained Selections:** Indicate selection or focus states via filled charcoal pills, subtle underline accents, or high-contrast text shifts. Avoid highly saturated color blocks.
* **Sparse Accents:** Treat accent colors as a scarce resource. Use them strictly for critical functional alerts (e.g., errors, processing states) or minimal focal indicators. Primary emphasis must come from structural contrast and spatial positioning.

---

## 2. Token Baseline (CSS Custom Properties)

You must normalize or map existing design tokens to this strict baseline before modifying component classes or markup. Do not inject pure white, bright gradients, glossy skeletal layers, or vivid brand identity unless explicitly commanded.

```css
:root {
  /* Surface Layers */
  --bg-app: #121212;          /* Main application base frame */
  --bg-panel: #181818;        /* Primary sidebar, navigation, or rail base */
  --bg-panel-2: #1e1e1e;      /* Secondary view surfaces, nested panels */
  --bg-elevated: #242424;     /* Dropdowns, context menus, floating dialogs */
  
  /* Interactive Overlays */
  --bg-hover: rgba(255, 255, 255, 0.04);
  --bg-selected: rgba(255, 255, 255, 0.08);
  --bg-active: rgba(255, 255, 255, 0.12);

  /* Borders & Rules */
  --border-subtle: rgba(255, 255, 255, 0.07);  /* Default hairline separators */
  --border-strong: rgba(255, 255, 255, 0.15);  /* Interactive/focused element borders */

  /* Typography Contrast Spectrum */
  --text-primary: rgba(255, 255, 255, 0.92);   /* Code, headers, active labels */
  --text-secondary: rgba(255, 255, 255, 0.65); /* Sub-headers, metadata, body text */
  --text-muted: rgba(255, 255, 255, 0.40);     /* Placeholders, disabled states, line numbers */

  /* Monochromatic Accent System */
  --accent: #ffffff;
  --accent-soft: rgba(255, 255, 255, 0.20);

  /* Layout Constants */
  --radius-sm: 3px;
  --radius-md: 5px;
  --radius-lg: 8px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
}
```

---

## 3. Mandatory Workflow

1.  **Token Normalization Audit:** Parse the current code or framework variables. Map these system variables onto existing infrastructure or write a global reset. Do not create parallel, un-tokenized styling rules.
2.  **Structural Integrity Check:** If the existing HTML structure lacks native desktop containers (e.g., clear rail, nested navigation, content views), prioritize structural rewriting over raw string preservation. Construct the semantic core (`<aside>`, `<main>`, `<header>`) first.
3.  **Primitive Consistency Pass:** Apply global token classes to application components before working on specific pages. Interventions on specific screens must only leverage pre-established primitives.
4.  **Polish & Rhythm Audit:** Perform a final execution sweep to eliminate visual friction: check for mismatched border radii, varying padding patterns, uneven row configurations, or rogue un-tokenized color declarations.

---

## 4. Component Patterns & Layout Rules

### Layout Architecture
* **App Shell:** Enforce a strict desktop application structure layout. Implement a fixed navigation rail or collapsible side-panel system flanking a scrollable central content canvas.
* **Control Spacing Bounds:** Use a systematic spacing model. Internal control items default to 12-16px padding. Content section boundaries rely on 20-24px padding. Major layout panels require 28-32px padding margins.
* **Data Lists & Rows:** Enforce structural height regularity across iterative rows via vertical flex positioning and symmetric padding, never hardcoded pixel heights. Individual provider or data list rows should sit loosely around 64-84px in effective scale.

### Primitives
* **Sidebar & Navigation:** Render section headers as compact, highly subdued labels. Active line items must utilize a low-contrast filled block (`--bg-selected`) paired with elevated text value. Keep status icons entirely monochrome.
* **Tabs:** Keep tab sets flat, compact, and completely decoupled from heavy button backgrounds. Use a thin inline underline or micro pill selector to indicate the active state.
* **Inputs:** Utilize a dark-filled style surface (`--bg-panel-2`) with an inset border. Placeholder strings must match `--text-muted`. On focus, elevate the border definition (`--border-strong`) without utilizing generic glowing neon dropshadow rings.
* **Buttons:** Render primary desktop actions as clean, low-contrast fills or minimal outlines. Repeated list actions (e.g., action grids, connectivity triggers) must maintain matching operational widths.
* **Modals & Dialogs:** Treat modals as deeply isolated application windows. Center them precisely, provide deep internal spacing paddings, and clearly step up their layer values (`--bg-elevated`). Group internal sub-fields using white space padding first, utilizing borders only when spacing layout limits are reached.

---

## 5. Interaction States & Transitions

* **Hover:** Transition background fields to `--bg-hover`.
* **Selected:** Apply `--bg-selected` and transition text values upward to `--text-primary`.
* **Disabled:** Drop text value to `--text-muted` and lock cursor interaction. Do not adjust layout properties or spacing widths when changing state.
* **Transitions:** Apply rapid, hyper-clean hardware-accelerated transitions for dynamic states (`transition: background-color 120ms cubic-bezier(0.4, 0, 0.2, 1), border-color 120ms;`). Avoid dramatic bounces or slow ease curves.

---

## 6. Architectural Reference (Before vs. After)

### Before (SaaS Marketing/Web Dashboard Style)
```html
<div class="card" style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 16px;">
  <span style="color: #3b82f6; font-size: 12px; font-weight: 700; text-transform: uppercase;">Active Node</span>
  <h2 style="color: #111827; font-size: 24px; font-weight: 800; margin-top: 4px;">AWS Production East</h2>
  <p style="color: #4b5563; font-size: 14px;">Connected smoothly via primary cloud api integration pipeline.</p>
  <button style="background: linear-gradient(180deg, #3b82f6, #2563eb); color: white; padding: 10px 20px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer;">Manage Database Connection</button>
</div>
```

### After (Native Desktop System Style)
```html
<div class="ds-panel-row" style="background: var(--bg-panel); border-bottom: 1px solid var(--border-subtle); padding: var(--space-4) var(--space-5); display: flex; align-items: center; justify-content: space-between;">
  <div class="ds-meta-group" style="display: flex; flex-direction: column; gap: var(--space-1);">
    <div class="ds-title-line" style="display: flex; align-items: center; gap: var(--space-2);">
      <span style="width: 6px; height: 6px; background: var(--accent); border-radius: 50%;"></span>
      <span style="color: var(--text-primary); font-size: 14px; font-weight: 500; letter-spacing: -0.01em;">AWS Production East</span>
      <span style="color: var(--text-muted); font-size: 11px; font-family: monospace; background: var(--bg-panel-2); padding: 2px 6px; border-radius: var(--radius-sm);">us-east-1</span>
    </div>
    <span style="color: var(--text-secondary); font-size: 12px;">Connected via primary API integration gateway.</span>
  </div>
  <button class="ds-btn-secondary" style="background: var(--bg-panel-2); color: var(--text-primary); border: 1px solid var(--border-subtle); padding: var(--space-2) var(--space-4); border-radius: var(--radius-sm); font-size: 12px; font-weight: 500; transition: background-color 120ms, border-color 120ms;">Manage</button>
</div>
```

---

## 7. Execution Finish Checklist

Before providing final rewritten code, you must pass these alignment parameters:
1.  Are all custom CSS variable declarations mapped completely to the architecture guidelines?
2.  Do all background steps proceed logically up from background framework (`--bg-app`) to floating modules (`--bg-elevated`)?
3.  Are all border radii restrained, sharp, and consistent across components?
4.  Does typography leverage no more than 4 distinct, cohesive contrast values without utilizing massive marketing size scales?
5.  Are repeated inline operations configured using uniform, structurally identical secondary button components?
