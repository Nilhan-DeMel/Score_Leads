# AG Task Rubric — Prompt #04: CORE-002 Scoring Engine v1 + Remediation

**Prompt ID:** AG_Prompt_04
**Branch:** `core/core-002-scoring-v1`
**Date:** 2026-02-12
**Agent:** Antigravity (AG)

---

## Steps

| #   | Step                          | Files / Folders                                        | Acceptance Criteria                                     |
| --- | ----------------------------- | ------------------------------------------------------ | ------------------------------------------------------- |
| 1   | **Remediation: Fix #03 ZIP**  | `Evidence/PROMPT#03.zip`                               | ZIP created and verified with size > 1KB.               |
| 2   | **MCP Grounding (Scoring)**   | `.agent/REFERENCE_NOTES.md`                            | Scoring best practices added to CORE-002.               |
| 3   | **CORE-002: Types & Config**  | `src/core/scoring/types.ts`, `defaultScoringConfig.ts` | Types defined; Config is editable.                      |
| 4   | **CORE-002: Rule Modules**    | `src/core/scoring/rules/*.ts`                          | Modular rules (Region, Intent, Presence, Penalty).      |
| 5   | **CORE-002: Orchestrator**    | `src/core/scoring/scoreLead.ts`                        | Aggregates signals into ScoreBreakdown.                 |
| 6   | **Verification (Unit Tests)** | `src/core/scoring/__tests__/*.test.ts`                 | 100% pass on deterministic scoring + region + keywords. |
| 7   | **UI Wiring (Breakdown)**     | `src/ui/pages/ResultsPage.tsx`                         | Cards show total score + expandable "Why this score?".  |
| 8   | **Logging & Doc Updates**     | `App_Attributes/*.md`, `logger.ts`                     | Scoring events logged; attributes updated.              |
| 9   | **Quality & Git**             | `npm run build`, `git push`, `PR`                      | Zero errors; PR created and ready for merge.            |
| 10  | **Evidence Pack #04**         | `Evidence/PROMPT#04.zip`                               | ZIP < 10MB with all 04 artifacts.                       |

---

## Acceptance Checks (DONE Definition)

- [x] `Evidence/PROMPT#03.zip` exists and is non-empty.
- [ ] `npm test` successful (All scoring tests pass).
- [ ] `npm run build` successful.
- [ ] Results page shows score breakdown (Expandable sections).
- [ ] Evidence Pack #04 produced.
- [ ] PR created for `core/core-002-scoring-v1`.

---

## Rollback Plan

```bash
git checkout main
git branch -D core/core-002-scoring-v1
```
