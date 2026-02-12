# AG Evidence Report — Prompt #09 (INFRA-003)

## Mission

Add “don’t ship known-bad stuff” gates: CodeQL, Dependabot, and Dependency Review Action.

## Delivered Features

### 1. CodeQL Static Analysis

- Added `.github/workflows/codeql.yml`.
- Scans `javascript-typescript` code for vulnerabilities and quality issues.
- Triggers: PRs, pushes to `main`, and weekly Saturday scans.

### 2. Dependabot Configuration

- Added `.github/dependabot.yml`.
- Monitors `npm` and `github-actions` for updates.
- Grouping: Bundles minor/patch updates into single PRs to reduce noise.

### 3. Dependency Review (PR Gate)

- Added `.github/workflows/dependency-review.yml`.
- Blocks PRs that introduce dependencies with `high` or `critical` vulnerabilities.

### 4. Security Framework

- **SECURITY.md**: Response playbook for scan findings and vulnerability management.
- **GITHUB_GATES.md**: Updated to include CodeQL and Dependency Review as required status checks.

## Verification Results

### Build & Stability

- Production build passed.
- All 18 unit tests passed.
- Repo-map successfully updated with new CI/security files.

## Files Changed

- `.github/workflows/codeql.yml` [NEW]
- `.github/workflows/dependency-review.yml` [NEW]
- `.github/dependabot.yml` [NEW]
- `.agent/SECURITY.md` [NEW]
- `.agent/GITHUB_GATES.md` [MODIFY]
- `.agent/REFERENCE_NOTES.md` [MODIFY]
- `App_Attributes/*` [MODIFY]
