# AG Task Rubric — Prompt #18 (CSS-HOTFIX-001)

## Objective

Restore missing CSS/Tailwind theme in production.

## Repro Strategy

1. **Playwright against PROD**:
   - Capture `01_before_mobile.jpg` and `02_before_desktop.jpg`.
   - Log all CSS requests (CSV).
   - Evaluate `window.getComputedStyle(document.body).backgroundColor`.
   - Count `document.styleSheets.length`.

## Root Cause Check

1. **Entry**: Verify `src/main.tsx` imports `index.css`.
2. **Tailwind v4**:
   - `vite.config.ts`: verify `@tailwindcss/vite` plugin.
   - `index.css`: verify `@import "tailwindcss"`.
3. **Build**:
   - Run `npm run build`.
   - Check `dist/index.html` for `<link rel="stylesheet" ...>`.

## Fix & Verification

- Minimal fix in entry/bundle wiring.
- Local `npm run build` + `npm run preview`.
- Capture `after_mobile.jpg` and `after_desktop.jpg`.
- Confirm computed background is DARK (not white).

## ZIP Plan

- Include all 'before'/'after' screenshots.
- Include CSV request logs.
- Include `prompt18_rootcause.md`.
