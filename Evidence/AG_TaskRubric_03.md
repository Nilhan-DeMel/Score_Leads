# AG Task Rubric — Prompt #03: INFRA-001 (Vitest) + CORE-001 (Lead Parser v1)

**Prompt ID:** AG_Prompt_03
**Branch:** `core/core-001-parser-v1`
**Date:** 2026-02-12
**Agent:** Antigravity (AG)

---

## Steps

| #   | Step                          | Files / Folders                                            | Acceptance Criteria                                     |
| --- | ----------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| 1   | **Pre-flight & Grounding**    | `.agent/REFERENCE_NOTES.md`                                | Branch created, Vitest/Domain notes added.              |
| 2   | **INFRA-001: Vitest setup**   | `package.json`, `vite.config.ts`, `src/setupTests.ts`      | `npm test` runs with zero errors. Sanity test passes.   |
| 3   | **CORE-001: Types**           | `src/core/leads/types.ts`                                  | Types defined as per Project_Context.                   |
| 4   | **CORE-001: Extractors**      | `src/core/leads/extract*.ts`                               | Regex-based extractors for Email, URL, Bare Domain.     |
| 5   | **CORE-001: Normalization**   | `src/core/leads/normalizeDomain.ts`, `guessCompanyName.ts` | Public-suffix aware parsing + name heuristics.          |
| 6   | **CORE-001: Orchestrator**    | `src/core/leads/dedupeLeads.ts`, `parseLeadText.ts`        | Orchestrator dedupes and builds ParseResult.            |
| 7   | **Verification (Unit Tests)** | `src/core/leads/__tests__/*.test.ts`                       | 100% pass on co.uk, duplicates, messy text.             |
| 8   | **UI Wiring**                 | `src/ui/pages/LeadInputPage.tsx`, `ResultsPage.tsx`        | Parse click navigates to Results; Results render cards. |
| 9   | **Logging & Docs**            | `src/core/logging/logger.ts`, `App_Attributes/*.md`        | Structured logs for parse; Attributes updated.          |
| 10  | **Evidence Pack**             | `Evidence/PROMPT#03.zip`                                   | ZIP < 10MB with all logs, reports, and repo map.        |

---

## Acceptance Checks (DONE Definition)

- [ ] `npm install` successful.
- [ ] `npx tsc -b` successful (0 errors).
- [ ] `npm test` successful (all unit tests pass).
- [ ] `npm run build` successful.
- [ ] `LeadInputPage` correctly triggers parsing and navigation.
- [ ] `ResultsPage` displays lead data correctly.
- [ ] `Evidence/PROMPT#03.zip` produced and < 10MB.
- [ ] `App_Attributes.md` and `Potential_App_Attributes.md` updated.
- [ ] PR merged to `main`.

---

## Rollback Plan

```bash
git checkout main
git branch -D core/core-001-parser-v1
# If merged:
git revert <merge_commit_hash>
git push origin main
```
