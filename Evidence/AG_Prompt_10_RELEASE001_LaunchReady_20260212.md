# AG Evidence Report — Prompt #10 (RELEASE-001)

## Mission

Prepare Score_Leads for its first public launch (v0.1.0).

## Delivered Features

### 1. Versioning & Identity

- **Version**: Bumped to `v0.1.0` (MVP) in `package.json`.
- **Source of Truth**: Added `.agent/VERSION.md` with release metadata.
- **History**: Initial `CHANGELOG.md` created with feature categorization (Parser, Scoring, UI, CI/CD, Security).

### 2. Documentation & Onboarding

- **README.md**: Comprehensive guide for local development, testing, and tech stack overview.
- **LAUNCH_CHECKLIST.md**: Step-by-step go-live verification for Vercel and Firebase lanes.
- **RELEASING.md**: Actionable runbook for GitHub tagging and release drafting.

### 3. Release Hygiene

- **RELEASE_TEMPLATE.md**: Standardized GitHub release notes structure.
- **Status Checks**: Integrated CodeQL and Dependency Review into the mandatory merge flow.

## Verification Results

### Final QA Run

- **Build**: Production build succeeded (captured in `prompt10_build.log`).
- **Vitest**: 18/18 tests passed.
- **Playwright**: 12/12 E2E tests passed (Mobile + Desktop).
- **Repo Map**: Updated to reflect final release structure.

## Files Changed/Added

- `package.json` [MODIFY]
- `README.md` [NEW]
- `CHANGELOG.md` [NEW]
- `.agent/VERSION.md` [NEW]
- `.agent/LAUNCH_CHECKLIST.md` [NEW]
- `.agent/RELEASING.md` [NEW]
- `.github/RELEASE_TEMPLATE.md` [NEW]
- `App_Attributes/*` [MODIFY]
