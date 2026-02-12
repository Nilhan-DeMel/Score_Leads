# App Attributes — Score_Leads (Implemented)

> Track all features/capabilities that have been **implemented** in the codebase.
> Update this file with every prompt that adds functionality.

---

## Implemented Features

| ID       | Feature                                                                 | Prompt       | Date       | Status      |
| -------- | ----------------------------------------------------------------------- | ------------ | ---------- | ----------- |
| INIT-001 | Agent-Native Scaffold                                                   | AG_Prompt_01 | 2026-02-12 | ✅ Complete |
| UI-001   | UI Shell (Vite+React+TS + dark theme + glass panels + micro-animations) | AG_Prompt_02 | 2026-02-12 | ✅ Complete |

---

## INIT-001: Agent-Native Scaffold

- `.agent/` onboarding pack (START_HERE, MAP, COMMANDS, RULES, registries)
- Evidence Pack system with templates and naming convention
- Repo map auto-generator (`scripts/generate_repo_map.js`)
- Dev Container config (Node 20 LTS)
- GitHub CI workflow + PR/issue templates
- VS Code extension manifest + allowlist policy
- ADR template + decision log system
- `.gitignore` for Node.js/TypeScript

## UI-001: UI Shell

- Vite + React 19 + TypeScript project scaffold
- Tailwind CSS v4 with dark-only design tokens
- Motion (Framer Motion) animation layer
- Mobile-first layout with bottom navigation
- Glass panel components with backdrop blur
- 3 pages: Home (hero + feature cards), Lead Input (mode switcher + textarea), Results (empty state + score guide)
- Structured JSON logger (`src/core/logging/logger.ts`)
- Page transition animations with blur/fade
- Ambient background glow effects
- Inter typography via Google Fonts
