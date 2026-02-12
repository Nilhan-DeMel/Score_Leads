# RULES — Non-Negotiable Development Rules

> These rules apply to ALL agents (AG, KC) and developers working in Score_Leads.  
> Violations must be documented and justified in the Evidence Pack.

---

## 1. Micro-Modular Code

- Each file handles **1–2 functions** (small, focused, searchable)
- Each folder handles **1 concern**
- No god files, no mega-modules
- If a file exceeds ~150 lines, consider splitting

## 2. Evidence Packs (Mandatory)

- Every completed task **MUST** produce an Evidence Pack in `Evidence/`
- Evidence Packs must be **< 10 MB**
- Follow the naming convention: `AG_Prompt_XX_Description_YYYYMMDD-HHMM.md`
- Include: commit hash, PR link, files changed, commands run, tests run, risks, rollback
- See `Evidence/README.md` for the full spec

## 3. Documentation Updates

- After every feature: update `App_Attributes/App_Attributes.md` (implemented)
- After every feature: update `App_Attributes/Potential_App_Attributes.md` (mark status)
- After structural changes: update `.agent/MAP.md`
- After new scripts: update `.agent/COMMANDS.md`
- After decisions: add ADR to `.agent/DECISIONS/`

## 4. Git Discipline

- **One feature per branch** (e.g., `feat/lead-parser`, `fix/score-calc`)
- **Small, clear commits** with descriptive messages
- **PRs required** for merging to `main`
- Use PR template (scope, tests, evidence, risk, rollback, checklist)
- If Git ceremony is reduced temporarily: document the exception in the Evidence Pack

## 5. Source of Truth

- `Project_Context.md` is the **canonical product spec** — do NOT modify without explicit instruction
- `.agent/START_HERE.md` is the agent landing page — keep it current
- `.agent/COMMANDS.md` is the script registry — every script must be listed here

## 6. MCP-First + Skills-First

- Use MCP to ground work in authoritative sources before acting
- Route tasks through available skills
- If MCP is broken: STOP and report
- Log improvements to: `C:\Users\Nilhan.dev\Documents\AI_Experiments\Skills-First.md`

## 7. UI/UX Standards

- **Mobile-first** — must feel native on phones
- **Dark theme only** — no light mode
- **Premium quality** — deep emotive colors, glass/liquid panels, micro-animations
- Glass effects must **never** reduce readability/usability

## 8. Testing

- Write tests for all scoring logic and parsing logic
- Tests must be runnable from `npm test`
- CI must run tests on every PR

## 9. Security

- Treat extensions as supply-chain risk (see `.agent/EXTENSIONS_ALLOWLIST.md`)
- Sanitize all inputs
- No secrets in code — use environment variables
- Review dependencies before adding

## 10. Agent Handoff

- Leave the repo in a state where the **next agent can succeed with zero prior context**
- Update `.agent/repo-map.md` after structural changes
- Keep `.agent/START_HERE.md` accurate
