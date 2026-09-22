# MegaMind — Codenaim Design Spec

Implementation direction for the Electron app. Paste this into Claude Code with the repo. Build the token layer first, then retrofit components.

---

## 1. Principles

1. Nothing in the UI may read as Claude, ChatGPT, or a generic AI wrapper. No centered chat-bubble column, no default system font, no purple/violet, no gradient mesh.
2. **Light theme is the default and the design target.** Dark is a supported secondary theme, not the primary.
3. Neutral carries the interface. Orange marks meaning only — active state, live state, the changed value, the one primary action. If more than ~5% of a screen is orange, it's wrong.
4. Swiss/Tufte discipline: high information density, hairlines instead of shadows, no decorative chrome, generous alignment, tight but not cramped spacing.
5. One theme system, tokenized. Customer instances are a variable swap, never a fork.

---

## 2. Tokens

Light is `:root`. Dark overrides under `[data-theme="dark"]`. Drop in as-is.

```css
:root {
  /* Surfaces — light (default) */
  --bg:          #FFFFFF;  /* app background */
  --surface:     #F4F4F4;  /* sidebar, panels, cards */
  --surface-2:   #FAFAFA;  /* raised: menus, popovers, inputs */
  --rule:        #DEDEDE;  /* hairlines */
  --rule-strong: #C8C8C8;

  /* Text — light */
  --text:        #0A0A0A;  /* primary        19.8:1 */
  --text-2:      #525252;  /* secondary       7.8:1 */
  --text-3:      #737373;  /* tertiary        4.7:1 */

  /* Brand orange — identical in both themes. Mark, and large graphic accents only. */
  --brand:       #D9480F;  /* 4.30:1 on white, 4.60:1 on ink */
  --on-brand:    #FFFFFF;  /* 4.30:1 — large/bold text only */

  /* UI accent — must shift per theme (see note below) */
  --signal:      #C2410C;  /* 5.18:1 on white, 4.71:1 on --surface */
  --signal-dim:  rgba(194,65,12,0.10);  /* active-row wash, selection */
  --signal-edge: rgba(194,65,12,0.35);  /* focus ring, subtle borders */
  --on-signal:   #FFFFFF;  /* text on a filled accent — 5.18:1 */

  /* Status — orange is never a status color */
  --ok:     #197A3D;
  --warn:   #8A6100;
  --danger: #B3261E;

  /* Type */
  --ui:      'Manrope', system-ui, -apple-system, sans-serif;
  --mono:    'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
  --measure: 72ch;

  /* Space — 4px base, use only these */
  --s1: 4px;  --s2: 8px;  --s3: 12px; --s4: 16px;
  --s5: 24px; --s6: 32px; --s7: 48px; --s8: 64px;

  --radius:    6px;
  --radius-lg: 10px;

  /* Motion */
  --t-fast: 120ms;
  --t-base: 200ms;
  --ease:   cubic-bezier(0.2, 0, 0, 1);
}

[data-theme="dark"] {
  --bg:          #0A0A0A;
  --surface:     #141414;
  --surface-2:   #1F1F1F;
  --rule:        #262626;
  --rule-strong: #333333;

  --text:        #F4F4F4;  /* 18.0:1 */
  --text-2:      #A3A3A3;  /*  7.9:1 */
  --text-3:      #737373;  /*  4.2:1 — tertiary/disabled only */

  --signal:      #FF6B00;  /* 6.9:1 on --bg, 6.5:1 on --surface */
  --signal-dim:  rgba(255,107,0,0.12);
  --signal-edge: rgba(255,107,0,0.32);
  --on-signal:   #0A0A0A;  /* 6.9:1 */

  --ok:     #3FB950;
  --warn:   #D29922;
  --danger: #F85149;
}
```

Every pair above is verified at 4.5:1 or better for text. Do not substitute `#FF6B00` into light mode — it only reaches 2.9:1 on white.

**Why there are two oranges.** `--brand` is one fixed colour so the mark is identical in both themes. `--signal` has to change per theme because no single colour can be AA-legible text on both white and near-black: passing 4.5:1 on white caps luminance at 0.183, passing it on `#0A0A0A` requires at least 0.186. Use `--brand` for the mark and for large graphic accents where the 3:1 threshold applies; use `--signal` for accent text, links and fine UI detail.

---

## 3. Type

**Manrope** for UI. **JetBrains Mono** for anything numeric, tabular, or ID-like. No serif anywhere in the app. Bundle both as woff2 locally — no CDN, must render offline.

| Role | Face | px / line-height | Weight |
|---|---|---|---|
| Display | Manrope | 32 / 38 | 700 |
| H1 | Manrope | 24 / 32 | 700 |
| H2 | Manrope | 19 / 28 | 600 |
| H3 | Manrope | 16 / 24 | 600 |
| Body | Manrope | 15 / 24 | 400 |
| UI / label | Manrope | 13 / 20 | 500 |
| Eyebrow | Manrope | 11 / 16 | 600, `letter-spacing: .08em`, uppercase |
| Caption / meta | Manrope | 12 / 18 | 400 |
| Data / mono | JetBrains Mono | 13 / 20 | 400 |

`font-feature-settings: "tnum" 1` on all numerics. Cap prose at `--measure` (72ch). One Display per view.

---

## 4. Accent rules

**Use `--signal` for:** active sidebar/nav item (2px left bar + `--signal-dim` wash; label stays `--text`) · focus ring · live/processing indicator · the single primary action per view · inline citation markers and source links in generated answers · changed/delta values in data views · text selection.

**Never use `--signal` for:** headings · body text · ordinary borders or dividers · generic hover · large filled areas · non-state icons · decoration.

Hover = surface step (`--bg` → `--surface`), not color.

---

## 5. Layout & components

**Window.** Frameless macOS window, custom titlebar. No system chrome.

**Frame.** Fixed left sidebar 240px on `--surface`, `1px solid var(--rule)` right edge. Main column on `--bg`, centered, capped at `--measure` for prose, full-bleed for tables and data views.

**Elevation.** Surface steps plus a 1px `--rule` edge. In light mode a card is `--bg` on a `--surface` field, or `--surface` on `--bg` — never both plus a shadow. Shadows only on menus and modals: `0 4px 16px rgba(0,0,0,0.10)`.

**Density.** 36px default row height, 32px in dense tables. Whitespace comes from consistent gutters, not tall rows.

**Answer surface — the most important component.** Do not build a chat. Render MegaMind answers as documents: left-aligned, typographic, headings in the scale above, citations as inline superscript markers in `--signal` that expand to the source page link. Input docked at the bottom of the content column on `--surface-2`, `1px solid var(--rule)`, border → `--signal-edge` on focus.

**Buttons.** Primary: `--signal` fill, `--on-signal` text, `--radius`, 13/20 weight 500. Secondary: transparent, `1px solid var(--rule-strong)`, `--text`. Ghost: text only, `--text-2` → `--text` on hover. One primary per view.

**Inputs.** `--surface-2` fill, `1px solid var(--rule-strong)`, `--radius`, 36px height, `--text`, `--text-3` placeholder.

**Tables.** Mono for figures, right-aligned numerics, `--rule` hairline row separators, no zebra striping, no vertical rules. Header row in Eyebrow style, `--text-2`.

**Focus.** `2px solid var(--signal)` at `2px` offset on every interactive element. Always visible on keyboard focus. Non-negotiable.

**Motion.** `--t-fast` for hover/focus, `--t-base` for panels and disclosure, `--ease` throughout. Ingestion state: a slow `--signal` progress hairline along the top edge of the panel while a call is being transcribed and written. Honor `prefers-reduced-motion`.

---

## 6. Codenaim wordmark

Asset: `codenaim.com/assets/wordmark.png` (1848×252, ~7.3:1, transparent). Get the vector from Kurt — don't scale the PNG.

Placement: sidebar header, top-left, 132×18, 16px gutter, vertically centered in a 56px band. Customer instance name in Eyebrow style at the opposite end of the same row. Clear space ≥ half the wordmark's cap height on all sides. Never recolor it, never place it on orange, never lock it beside a customer logo as an equal.

---

## 7. MegaMind mark

Split mark on a 64×64 grid. Left half is a brain in line art — finely scalloped outline, white matter, dense short C-hook gyri. Right half is a circuit fan: orthogonal traces with 45° jogs, terminal dots at 1.85r, junction dots at 1.05r. A filled `--signal` circle (r 13, centred 34.6/32) straddles the seam and carries a white **M** set in Manrope ExtraBold, converted to outlines so the SVG carries no font dependency.

The orange circle is the only colour in the mark. Everything else is `--text` in light, `--bg`-coloured in dark.

Files in `megamind-icon/`:

- `megamind-logo.svg` — primary, light theme
- `megamind-logo-dark.svg` — dark theme
- `megamind-logo-small.svg` / `-small-dark.svg` — under 24px; gyri halved, strokes thickened, junction dots dropped
- `megamind-logo-mono.svg` — one-colour for print and stamps
- `megamind-appicon.svg` — on an ink tile, 14px radius, for dock and titlebar
- `logo-preview.png` — all variants plus the small-size test
- `Manrope-Variable.ttf` — the bundled UI typeface (SIL OFL)

Rules: 2.0px outline, 0.85px gyri, 1.5px traces at 64px, scaling proportionally. The circle stays `--signal` in every state — it is the mark's signal, not a hover effect. Never recolour the brain or traces to orange. Never set the M in anything but Manrope ExtraBold. Minimum 16px; switch to the small variant below 24px. Clear space = one terminal-dot diameter on all sides.

Placement: titlebar at 20px left of the instance name · dock icon · empty state of an unseeded instance · ingestion indicator, where the circle pulses while a call is being written.

**Full wordmark.** "MEGAMIND" set on one line inside the circle only reaches ~3px cap height at 64px, so it is not usable as an icon. Where the full name is needed, set it in Manrope ExtraBold beside the mark as a horizontal lockup, not inside the circle.

---

## 8. Build order

1. Tokens (§2), Manrope + JetBrains Mono bundled as woff2.
2. Reset, type scale (§3), light theme applied to the existing shell; dark theme behind `[data-theme]`.
3. Frameless window, custom titlebar, sidebar header lockup (§6).
4. Components: buttons, inputs, nav items, tables, cards, focus rings (§5).
5. Answer surface rebuilt as documents with inline citations (§5).
6. Mark placement (§7), ingestion progress state, motion.
7. Accessibility pass: every text/background pair ≥4.5:1 in both themes, focus visible everywhere, full keyboard navigation.

Steps 1–3 alone change the read of the product more than the rest combined. Ship those first if time is short.

---

## 9. Open items

**Theming architecture.** Build the theme as a token layer with Codenaim light as the default skin. Customer instances stay Codenaim-branded; a future white-label is a variable override, not a fork.

**Role-based UI.** Tiered access and SSO are coming. Leave the slots now: a role badge position in the header, a permission-scoped empty state ("not available to your role", distinct from "no results"), and the instance name in the header built so it can become a switcher.

**Mark artwork.** The current SVGs are original linework drawn to match the proportions of the reference comp, not a trace of it. Before this ships on a commercial product it should get a designer pass — the brainstem-to-cerebellum junction is the weakest part of the drawing.

**Product name.** "MegaMind" needs a trademark clearance search before it ships on a customer-facing interface — *Megamind* is a DreamWorks property and there are existing marks in software classes. Not legal advice; flagging it as an open item. If it doesn't clear, MegaMind stays the internal engine name and the customer-facing product takes a Codenaim-owned name. Settle this before the wordmark is baked into the app chrome.

**Partner memo template.** Currently running `#CC785C` as its accent, which is Anthropic's brand clay. Swap to `--signal` (`#C2410C`).
