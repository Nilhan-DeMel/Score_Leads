# AG Task Rubric — Prompt #17 (VISUAL-PROOF-001)

## Objective

Generate 10 operational screenshots of the live `score-leads.vercel.app` site using Playwright automation.

## Screenshots Plan

1. **01_home_mobile.jpg**: Landing UI.
2. **02_scoreleads_input_mobile.jpg**: Paste dummy text A.
3. **03_results_overview_mobile.jpg**: Scored results view.
4. **04_results_breakdown_mobile.jpg**: Expanded lead details.
5. **05_export_controls_mobile.jpg**: CSV/JSON buttons.
6. **06_history_list_mobile.jpg**: Run history page.
7. **07_history_reopen_mobile.jpg**: Deterministic re-open check.
8. **08_profile_builder_mobile.jpg**: ICP profile UI.
9. **09_batch_import_mobile.jpg**: CSV dummy B import preview.
10. **10_desktop_overview.jpg**: Desktop layout (1280x800).

## Navigation & Selection Strategy

- **Base URL**: `https://score-leads.vercel.app`
- **Selectors**:
  - Primary: `[data-testid]` (e.g., `lead-input-textarea`, `score-btn`, `nav-history`).
  - Secondary: `getByRole('button', { name: '...' })`, `getByText(...)`.
- **States**:
  - Wait for `networkidle`.
  - Add `waitForTimeout(1000)` to allow animations/transitions to settle.

## Retry & Persistence Strategy

- **Per-step retries**: 3 attempts with `try-catch`.
- **Global strategy**: Restart browser context if 3 retries fail on a single path.
- **Fail-safe**: Log all errors but attempt to continue to next screenshot if one path is blocked.

## Evidence & ZIP Plan

- All logs and screenshots stay in `Evidence/`.
- Zip: `PROMPT#17.zip` containing all artifacts + `prompt17_screenshots_manifest.json`.

## Rollback Plan

- Delete `Evidence/prompt17_*` and the zip. No code changes to revert.
