# UI Theme — Score_Leads Dark Design System

> Dark-only. No light-mode fallback. Premium glass aesthetic.
> **Update this file whenever you change color tokens or add new theme values.**

---

## Color Palette

### Background Layers

| Token                | Hex/Value                | Usage                          |
| -------------------- | ------------------------ | ------------------------------ |
| `--color-bg-deep`    | `#07070e`                | Root background, deepest layer |
| `--color-bg-base`    | `#0a0a14`                | Page-level background          |
| `--color-bg-raised`  | `#10101e`                | Cards, inputs, raised surfaces |
| `--color-bg-surface` | `#16162a`                | Active/selected surfaces       |
| `--color-bg-overlay` | `rgba(16, 16, 30, 0.85)` | Modals, overlays               |

### Glass Surfaces

| Token                     | Value                       | Usage                           |
| ------------------------- | --------------------------- | ------------------------------- |
| `--color-glass-bg`        | `rgba(22, 22, 52, 0.45)`    | Glass panel base                |
| `--color-glass-border`    | `rgba(120, 100, 255, 0.12)` | Glass panel border              |
| `--color-glass-highlight` | `rgba(160, 140, 255, 0.08)` | Hover / active glass highlights |

### Text

| Token                    | Hex       | Usage                   |
| ------------------------ | --------- | ----------------------- |
| `--color-text-primary`   | `#eae8ff` | Headings, primary text  |
| `--color-text-secondary` | `#a09cc0` | Body text, descriptions |
| `--color-text-muted`     | `#6b6590` | Labels, captions        |
| `--color-text-ghost`     | `#3d3760` | Disabled, placeholder   |

### Accent: Violet (Primary)

| Token                   | Value                      | Usage                         |
| ----------------------- | -------------------------- | ----------------------------- |
| `--color-accent`        | `#8b5cf6`                  | Buttons, links, active states |
| `--color-accent-hover`  | `#a78bfa`                  | Hover states                  |
| `--color-accent-glow`   | `rgba(139, 92, 246, 0.35)` | Glow effects, shadows         |
| `--color-accent-subtle` | `rgba(139, 92, 246, 0.12)` | Badges, subtle fills          |

### Accent: Cyan

| Token                 | Value                      | Usage                      |
| --------------------- | -------------------------- | -------------------------- |
| `--color-cyan`        | `#22d3ee`                  | Secondary accent, data viz |
| `--color-cyan-glow`   | `rgba(34, 211, 238, 0.30)` | Ambient glow               |
| `--color-cyan-subtle` | `rgba(34, 211, 238, 0.10)` | Badges, highlights         |

### Accent: Rose

| Token               | Value                       | Usage                     |
| ------------------- | --------------------------- | ------------------------- |
| `--color-rose`      | `#fb7185`                   | Warnings, risk indicators |
| `--color-rose-glow` | `rgba(251, 113, 133, 0.30)` | Risk glow                 |

### Accent: Amber

| Token                  | Value                      | Usage                       |
| ---------------------- | -------------------------- | --------------------------- |
| `--color-amber`        | `#fbbf24`                  | Warm leads, medium priority |
| `--color-amber-subtle` | `rgba(251, 191, 36, 0.12)` | Badges                      |

### State Colors

| Token             | Value     | Usage                     |
| ----------------- | --------- | ------------------------- |
| `--color-success` | `#34d399` | Hot leads, success states |
| `--color-danger`  | `#f87171` | Cold leads, errors        |

---

## Shadows

| Token              | Usage                        |
| ------------------ | ---------------------------- |
| `--shadow-glass`   | Glass panel default shadow   |
| `--shadow-glow-sm` | Subtle accent glow           |
| `--shadow-glow-md` | Medium glow (hover states)   |
| `--shadow-glow-lg` | Strong glow (focused/active) |

---

## Typography

- Font: **Inter** (Google Fonts), fallback to system-ui
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Anti-aliasing: `-webkit-font-smoothing: antialiased`
- Color scheme: `dark` (tells browsers to use dark scrollbars, etc.)

---

## Usage Rules

1. **Never use light mode** — all surfaces must use `--color-bg-*` or `--color-glass-*`
2. **Use token variables** — never hardcode hex colors in components
3. **Glass panels** — apply `glass` + `glass-hover` classes, not manual backdrop-filter
4. **Accent hierarchy** — Violet > Cyan > Amber > Rose (in visual weight)
5. **Text hierarchy** — primary > secondary > muted > ghost
6. **Glow responsibly** — use glow effects only on focus/hover/active, never ambient
7. **Animations** — use Motion presets from `src/ui/motion/presets.ts`
