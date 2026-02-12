# AG Task Rubric — Prompt #02: UI-001 Mobile-First Dark UI Shell

**Prompt ID:** AG_Prompt_02
**Branch:** `ui/ui-001-shell`
**Date:** 2026-02-12
**Agent:** Antigravity (AG)

---

## Steps

| #   | Step              | Files / Folders                                               | Acceptance Check                                   |
| --- | ----------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| 0   | Repo prep         | (repo root)                                                   | main up-to-date, scaffold intact, branch created   |
| 1   | MCP Grounding     | `.agent/REFERENCE_NOTES.md`                                   | UI-001 section appended                            |
| 2   | Frontend scaffold | Root Vite+React+TS app                                        | `npm run dev` works, `npm run build` succeeds      |
| 3   | Tailwind + theme  | `tailwind.config.ts`, CSS vars, `.agent/UI_THEME.md`          | Dark tokens resolving, theme doc present           |
| 4   | shadcn/ui         | `src/components/ui/*`                                         | Button, Input, Card, Tabs available                |
| 5   | Animation layer   | `src/ui/motion/*`                                             | Page transitions + glass hover + card enter anims  |
| 6   | UI shell pages    | `src/ui/pages/*`, `src/ui/layout/*`, `src/ui/components/*`    | Home, LeadInput, Results render on mobile viewport |
| 7   | Observability     | `src/core/logging/logger.ts`                                  | Structured log output on button clicks             |
| 8   | Doc updates       | `App_Attributes/*`, `.agent/MAP.md`, `.agent/COMMANDS.md`     | Implemented + Potential updated                    |
| 9   | Quality checks    | (runtime)                                                     | install, dev, build, repo-map all pass             |
| 10  | Commit/PR/Merge   | (git)                                                         | Branch pushed, PR opened, merged                   |
| 11  | Evidence Pack     | `Evidence/AG_Prompt_02_UI001_*.md` + `Evidence/PROMPT#02.zip` | Both present, <10MB                                |

## Acceptance Criteria

- [ ] `npm run dev` starts Vite server
- [ ] `npm run build` succeeds (zero errors)
- [ ] Mobile viewport looks premium dark glass
- [ ] 3 pages render: Home, Lead Input, Results
- [ ] Micro-animations on page transitions + card hovers
- [ ] All doc files updated
- [ ] Evidence Pack complete

## Rollback Plan

1. `git checkout main; git branch -D ui/ui-001-shell`
2. Evidence Pack never deleted
3. Project_Context.md NEVER modified

## Layout Decision

Root = Vite app (Option A). Rationale: simplifies agent onboarding for a single-app repo; can restructure to monorepo later with INIT ADR.
