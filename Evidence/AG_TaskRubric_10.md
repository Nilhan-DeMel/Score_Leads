# AG Task Rubric — Prompt #10 (RELEASE-001)

## Objective

Make the repo “launch ready” for v0.1.0 with full versioning, documentation, and go-live checklists.

## Steps

1. **Pre-flight**: Sync main, create `release/release-001-v0.1.0`.
2. **MCP Grounding**: Research GitHub release notes automation and templates.
3. **Versioning**: Bump `package.json`, create `.agent/VERSION.md` and `CHANGELOG.md`.
4. **Docs**: Update `README.md` and create `.agent/LAUNCH_CHECKLIST.md`.
5. **Release Hygiene**: Add `.github/RELEASE_TEMPLATE.md` and `.agent/RELEASING.md`.
6. **QA**: Run build, tests, E2E, and update repo map.
7. **Attributes**: Update implemented/potential attribute logs.
8. **Finalize**: PR, merge, and output tagging instructions + ZIP.

## Acceptance Checks

- [ ] `package.json` version is `0.1.0`.
- [ ] `CHANGELOG.md` exists with feature highlights.
- [ ] `LAUNCH_CHECKLIST.md` contains clear Vercel/Firebase steps.
- [ ] `README.md` describes local dev and testing correctly.
- [ ] RELEASING runbook is clear and actionable.
- [ ] All QA checks (build/test/e2e) are passing.

## Rollback Plan

- Revert version bump in `package.json`.
- Delete release-specific doc files.
- Revert attribute updates.
