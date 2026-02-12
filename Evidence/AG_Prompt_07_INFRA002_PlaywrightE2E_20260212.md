# AG Evidence Report — Prompt #07 (INFRA-002)

## Mission

Add mobile-first E2E smoke tests that catch regressions across the main user journeys, and wire them into GitHub Actions as a required check.

## Delivered Features

### 1. Playwright E2E Suite

- **Specs**: 4 high-signal smoke tests covering lead scoring, exclusion logic, profile sensitivity, and run history.
- **Project Configuration**:
  - `Mobile Chrome` (Pixel 5 emulation)
  - `Mobile Safari` (iPhone 13 emulation)
  - `Desktop Chromium`
- **Instrumentation**: Added `data-testid` attributes to key UI elements for stable selection.

### 2. CI/CD Integration

- **GitHub Actions**: Updated `.github/workflows/ci.yml` to automatically install browsers and run E2E tests on every PR.
- **Reporting**: Automated HTML report generation and artifact upload.

### 3. Engine Enhancements

- Refined the scoring engine to handle **Hard Exclusions** (-100 points) which bypass standard aggregation.
- Added `Excluded` label mapping for negative scores.

## Verification Results

### Vitest Unit Tests

- 18/18 tests passed.
- Verified hard-exclusion signal with new engine logic.

### Playwright E2E Tests

- 12/12 tests passed (4 specs × 3 browsers).
- Verified responsive layout and dark mode compatibility.

### Local Build

- Clean production build (tsc + vite).

## Files Changed

- `playwright.config.ts` [NEW]
- `e2e/*.spec.ts` [NEW]
- `src/core/scoring/scoreLead.ts` [MODIFY]
- `src/core/scoring/labelScore.ts` [MODIFY]
- `src/ui/pages/*.tsx` [MODIFY] (data-testid + declaration fixes)
- `.github/workflows/ci.yml` [MODIFY]
- `package.json` [MODIFY]

## CI Artifact Note

Playwright HTML reports are available in GitHub Actions under the name `playwright-report`.
