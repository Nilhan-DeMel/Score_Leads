# Evidence Pack System

> This folder holds **Evidence Packs** — proof-of-work artifacts for every completed task.

---

## Purpose

Every AG/KC task MUST produce an Evidence Pack proving:

- What changed
- Why it works
- What was tested
- What the risks are
- How to rollback

---

## Naming Convention

```
Evidence/AG_Prompt_XX_ShortDescription_YYYYMMDD-HHMM.md
```

**Examples:**

- `AG_Prompt_01_InitScaffold_20260212-1211.md`
- `AG_Prompt_02_LeadParser_20260215-0930.md`
- `KC_Prompt_01_UIShell_20260218-1400.md`

**Prefix:** `AG_` for Antigravity agents, `KC_` for Kilo Code agents  
**Prompt number:** Matches the prompt that triggered the work  
**Description:** 2-3 word summary, PascalCase  
**Timestamp:** YYYYMMDD-HHMM in local time

---

## Size Limit

**< 10 MB per Evidence Pack.** No exceptions.

If your Evidence Pack exceeds 10 MB:

1. Compress images/logs
2. Link to large artifacts instead of embedding
3. Trim verbose command output to relevant sections

---

## Required Contents

Every Evidence Pack must include (use the templates in `_template/`):

| File             | Required       | Description                                                             |
| ---------------- | -------------- | ----------------------------------------------------------------------- |
| `evidence.json`  | ✅ Yes         | Structured summary: prompt_id, branch, commit, PR, files changed, risks |
| `commands.log`   | ✅ Yes         | Commands run + outputs (trimmed to relevant)                            |
| `tests.log`      | ✅ Yes         | Test results (or "not available yet" + why)                             |
| `trajectory.log` | ⬜ Recommended | Step-by-step agent actions (tool calls, diffs)                          |
| `repo-map.md`    | ✅ Yes         | Snapshot of `.agent/repo-map.md` at time of completion                  |

---

## Templates

See `Evidence/_template/` for blank templates of each file.

---

## Rules

1. **Never delete** Evidence Packs — they are permanent records
2. **Never modify** past Evidence Packs — create corrections as new packs
3. Evidence Packs are **attached to a specific prompt + branch + PR**
4. Keep Evidence Packs **boring and consistent** — that's the point
