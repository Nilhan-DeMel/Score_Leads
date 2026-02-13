# Home Page Issues Analysis — Prompt #19

## Hero & CTA

- **Clipping**: The `btn-primary` lacks a `display` property that ensures it handles its internal SVG icons and text reliably across all wrap scenarios. On very narrow mobile screens, the large `btn-primary` padding might cause overflow if not contained.
- **Hierarchy**: The Hero `pt-8` might feel too close to the top on some viewports, and the `mb-8` before the CTA creates a large gap that separates the action too much from the context.

## Feature Cards

- **Icons**: Currently using mixed emoji (📝, ⚡, 📊) which feels non-premium compared to the rest of the Glass UI.
- **Consistency**: Stroke weights and sizing are not uniform.

## Stats Tiles (Quick Stats)

- **Placeholders**: Using a simple "—" in white-ish text feels "empty" or "data-binding-failed" rather than a deliberate "No data yet" state.
- **Layout**: The 3-column grid on mobile can feel cramped if the labels are long.

## Bottom Nav

- **Safe-Area**: Missing `env(safe-area-inset-bottom)`. This causes the nav to sit right on top of the iOS home bar, making accidental wipes likely.
- **Tap Targets**: The `NavLink` has `py-1` and `flex-1`. In a 64px (`h-16`) container, this might technically meet but practically feels "thin" for thumb taps.
- **Labels**: `text-[10px]` is too small for accessibility and premium readability.

## Component Structure

- **Monolith**: `HomePage.tsx` contains all sections. This violates the micro-modular rule for this prompt.
