# AG Prompt 30 — Stateless Ops Hardening

## Scope

- Stateless ops hardening only (no product feature changes).
- Added persistent instruction layers, preflight utility, docs updates, and evidence artifacts.

## Branch

- `infra/codex-kilo-stateless-ops-001`

## Implemented Changes

- Updated rubric: `Evidence/AG_TaskRubric_30.md`
- Added root operational policy: `AGENTS.md`
- Added repo-scoped Kilo rules:
  - `.cursor/rules/00_READ_FIRST.md`
  - `.cursor/rules/10_GIT_AND_PR.md`
  - `.cursor/rules/20_EVIDENCE_PACKS.md`
  - `.cursor/rules/30_CONTEXT_MIN_LOOP.md`
  - `.cursor/rules/40_CLOUD_ACCOUNT.md`
- Added one-command preflight:
  - `scripts/preflight.mjs`
  - `package.json` script `preflight`
- Updated docs:
  - `App_Attributes/App_Attributes.md`
  - `App_Attributes/Potential_App_Attributes.md`

## Verification Summary

- `npm ci` → PASS
- `npm test` → PASS
- `npm run build` → PASS (chunk-size warning only)
- `npm run e2e` → PASS
- `npm run preflight` → PASS

## Logs

- `Evidence/prompt30_preflight.log`
- `Evidence/prompt30_commands.log`
- `Evidence/prompt30_tests.log`
- `Evidence/prompt30_trajectory.log`

## Risk & Rollback

- Risk: accidental inclusion of unrelated generated files.
- Mitigation: selective staging by mission scope only.
- Rollback: revert prompt30 commits or revert merge commit.

## Cloud Account Rule

- Enforced: `repository-owner@example.test` only.
