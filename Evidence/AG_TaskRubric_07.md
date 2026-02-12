# AG Task Rubric — Prompt #07 (INFRA-002)

## Objective

Add mobile-first E2E smoke tests that catch regressions across the main user journeys, and wire them into GitHub Actions as a required check.

## Steps

1. **Pre-flight**: Checkout branch, confirm app structure.
2. **MCP Grounding**: Research Playwright + Vite + CI best practices.
3. **Installation**: Install Playwright and setup scripts.
4. **Configuration**: Mobile-first Playwright config (iPhone/Pixel + Desktop Chromium).
5. **Specs**: 4 high-signal smoke tests with `data-testid` support.
6. **CI/CD**: GitHub Actions workflow for Playwright with artifact uploads.
7. **Quality Checks**: Build, Vitest, and E2E verification.
8. **Submission**: Merge PR and create evidence pack.

## Files to Touch

- `playwright.config.ts` [NEW]
- `e2e/lead-scoring.spec.ts` [NEW]
- `e2e/exclusion-logic.spec.ts` [NEW]
- `e2e/profile-update.spec.ts` [NEW]
- `e2e/history.spec.ts` [NEW]
- `.github/workflows/ci.yml` [MODIFY]
- `package.json` [MODIFY]
- `src/ui/pages/LeadInputPage.tsx` [MODIFY] (data-testid)
- `src/ui/pages/ResultsPage.tsx` [MODIFY] (data-testid)
- `src/ui/pages/ProfilePage.tsx` [MODIFY] (data-testid)
- `src/ui/pages/HistoryPage.tsx` [MODIFY] (data-testid)

## Acceptance Checks

- [ ] `npm run e2e` passes locally across 3 browser projects.
- [ ] CI workflow runs Playwright on PR and logs success.
- [ ] Playwright HTML report is uploaded as a build artifact in GitHub.
- [ ] Mobile emulation works (dark mode + viewports).

## Rollback Plan

- Delete `e2e/` and `playwright.config.ts`.
- Revert `package.json` and CI workflow changes.
- Remove `data-testid` (minor overhead, can stay).

## Evidence + ZIP Plan

- Evidence/AG_Prompt_07_INFRA002_PlaywrightE2E_20260212.md
- Evidence/PROMPT#07.zip
- Include: HTML report (if available locally), test logs, build logs, repo-map.
