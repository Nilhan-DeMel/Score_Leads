# AG Task Rubric — Prompt #01: Init Agent-Native Scaffold

**Prompt ID:** AG_Prompt_01  
**Branch:** `init/agent-native-scaffold`  
**Date:** 2026-02-12  
**Agent:** Antigravity (AG)

---

## Steps

| #   | Step                        | Files / Folders                                                                                                | Acceptance Check                                             |
| --- | --------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 0   | Pre-flight checks           | (repo root)                                                                                                    | Git initialized, remote verified, existing files inventoried |
| 1   | MCP Grounding               | `.agent/REFERENCE_NOTES.md`                                                                                    | Key takeaways from MCP docs saved with citations             |
| 2   | Agent Onboarding Pack       | `.agent/START_HERE.md`, `MAP.md`, `COMMANDS.md`, `RULES.md`, `DECISIONS/0001-adr-template.md`, `REGISTRY_*.md` | All files present, structured, correct info                  |
| 3   | Evidence Pack System        | `Evidence/README.md`, `Evidence/_template/*`                                                                   | Template files present, naming convention documented         |
| 4   | Repo Map Script             | `scripts/generate_repo_map.py`, `.agent/repo-map.md`                                                           | Script runs successfully, output is valid                    |
| 5   | Dev Container               | `.devcontainer/devcontainer.json`                                                                              | Valid JSON, Node/TS compatible                               |
| 6   | GitHub CI / Templates       | `.github/workflows/ci.yml`, `.github/pull_request_template.md`, `.github/ISSUE_TEMPLATE/*`                     | Files present, valid YAML/MD                                 |
| 7   | VS Code Extensions + Safety | `.vscode/extensions.json`, `.vscode/settings.json`, `.agent/EXTENSIONS_ALLOWLIST.md`                           | Recommendations only, no disruptive settings                 |
| 8   | SRS-in-Motion Docs          | `App_Attributes/App_Attributes.md`, `App_Attributes/Potential_App_Attributes.md`                               | Initialization items logged, potential features listed       |
| 9   | Quality Checks              | (runtime)                                                                                                      | Repo map script runs, git diff reviewed                      |
| 10  | Commit / Push / PR / Merge  | (git)                                                                                                          | Branch pushed, PR opened, merged                             |
| 11  | Evidence Pack               | `Evidence/AG_Prompt_01_InitScaffold_*.md`                                                                      | <10MB, full proof of work                                    |

## Acceptance Criteria (Global)

- [ ] All files listed above exist and are non-empty
- [ ] Repo map script runs without errors
- [ ] Git history is clean with logical commits
- [ ] PR opened and merged to default branch
- [ ] Evidence Pack complete with all required fields

## Rollback Plan

1. If scaffold breaks existing files: `git stash` or `git reset --hard` to pre-scaffold state
2. If branch is problematic: delete branch, re-create from default
3. Evidence Pack always preserved (never deleted)
4. Project_Context.md and Project_Context.txt are NEVER modified

## Risks

- No existing toolchain (lint/test) — will stub with TODOs
- No GitHub remote yet — will need to create repo and add remote
- PowerShell compatibility for scripts — will use Python for cross-platform
