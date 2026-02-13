# AG Task Rubric — Prompt #19 (UI-POLISH-003)

## Objective

Polish the Home page for a "complete + premium" feel on mobile and desktop. Fix layout clipping, upgrade icons, improve hierarchy, and refine the bottom nav with safe-area support.

## Phase 0: Baseline & Analysis

- [ ] Capture `prompt19_before_home_mobile.jpg` (iPhone 13) from PROD.
- [ ] Capture `prompt19_before_home_desktop.jpg` (1280x800) from PROD.
- [ ] Identify root causes for CTA clipping and spacing issues in `Evidence/prompt19_home_issues.md`.

## Phase 1: Implementation (ui/ui-polish-003-home-finish)

- [ ] **Hero + CTA**: Fix clipping, add focus/motion.
- [ ] **Feature Cards**: Standardize icons with Lucide, fix spacing/borders.
- [ ] **Stats Tiles**: Deliberate placeholder style for empty states, alignment fix.
- [ ] **Bottom Nav**: Safe-area-inset-bottom, tap target >= 44px, spacing fix.
- [ ] **Micro-modularization**: Move components to `src/pages/home/components/`.

## Phase 2: Verification

- [ ] `npm test`
- [ ] `npm run build`
- [ ] Playwright smoke checks (Local & Prod).
- [ ] Capture `after` screenshots.

## Phase 3: Documentation & Evidence

- [ ] Update `App_Attributes.md` and `Potential_App_Attributes.md`.
- [ ] Create `Evidence/AG_Prompt_19_UIPolishHome_YYYYMMDD-HHMM.md`.
- [ ] Package `Evidence/PROMPT#19.zip`.

## Risk & Rollback

- Risk: CSS env variables might break older layout if not handled with fallback.
- Rollback: Revert to `main` branch.
