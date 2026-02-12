# AG Task Rubric — Prompt #09 (INFRA-003)

## Objective

Add security gates (CodeQL, Dependabot, Dependency Review) to ensure code security and dependency health without breaking CI.

## Steps

1. **Pre-flight**: Sync main, create branch `infra/infra-003-security-gates`.
2. **MCP Grounding**: Research CodeQL, Dependabot, and Dependency Review best practices.
3. **CodeQL Workflow**: Implement `.github/workflows/codeql.yml` for JS/TS.
4. **Dependabot Config**: Implement `.github/dependabot.yml` for npm and actions.
5. **Dependency Review**: Implement `.github/workflows/dependency-review.yml` for PR blocking.
6. **Documentation**: Create `.agent/SECURITY.md` and update `.agent/GITHUB_GATES.md`.
7. **Verification**: Run build, tests, and repo-map.
8. **Evidence**: Generate Prompt #09 report and ZIP.

## Acceptance Checks

- [ ] CodeQL workflow exists and targets JS/TS correctly.
- [ ] Dependabot config tracks npm and github-actions.
- [ ] Dependency Review Action blocks PRs with high/critical vulnerabilities.
- [ ] `.agent/SECURITY.md` details all security measures.
- [ ] CI suite (Vitest + Playwright) remains passing.

## Rollback Plan

- Delete `.github/workflows/codeql.yml`, `.github/workflows/dependency-review.yml`, and `.github/dependabot.yml`.
- Revert documentation updates.
