# App Attributes — Score_Leads (Implemented)

> Track all features/capabilities that have been **implemented** in the codebase.
> Update this file with every prompt that adds functionality.

---

## Implemented Features

| ID        | Feature                                                                 | Prompt       | Date       | Status      |
| --------- | ----------------------------------------------------------------------- | ------------ | ---------- | ----------- |
| INIT-001  | Agent-Native Scaffold                                                   | AG_Prompt_01 | 2026-02-12 | ✅ Complete |
| UI-001    | UI Shell (Vite+React+TS + dark theme + glass panels + micro-animations) | AG_Prompt_02 | 2026-02-12 | ✅ Complete |
| INFRA-001 | Vitest Baseline (JSDOM environment + RTB + Sanity tests)                | AG_Prompt_03 | 2026-02-12 | ✅ Complete |
| CORE-001  | Lead Parser v1 (Offline, regex-based, tldts-aware)                      | AG_Prompt_03 | 2026-02-12 | ✅ Complete |
| CORE-002  | Scoring Engine v1 (Deterministic, explainable signals)                  | AG_Prompt_04 | 2026-02-12 | ✅ Complete |
| CORE-003  | Service Profile v1 (ICP-grounded scoring + persistence)                 | AG_Prompt_05 | 2026-02-12 | ✅ Complete |

---

## INFRA-001: Vitest Baseline

- Vitest integrated into Vite configuration
- JSDOM environment for browser API emulation
- `@testing-library/react` and `@testing-library/jest-dom` for component testing
- `globals: true` with implicit/explicit support
- Sanity tests for UI (HomePage) and pure logic
- npm scripts: `test` (run) and `test:watch` (dev)

## CORE-001: Lead Parser v1

- Deterministic, offline extraction engine
- Micro-modular architecture (Extractors -> Normalization -> Deduper)
- Email extraction via regex
- URL/Domain extraction via regex
- Bare domain heuristic extraction (negative lookbehind)
- Public-Suffix awareness using `tldts` (e.g. `co.uk` handling)
- Company name heuristics (Title Case labels)
- Deduping logic with confidence scoring
- Orchestrator returning structured `ParseResult`
- Comprehensive unit tests (100% pass)

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

---

## CORE-002: Scoring Engine v1

- Deterministic, offline rule engine
- Explainable signal architecture: Points + Signal Label + Evidence Snippet
- Rules: Region (TLD based), Intent (Keyword based), Presence (Website/Email), Penalty (.gov/.edu)
- UI: Expandable scoring breakdown cards ("Why this score?")
- Structured logging for scoring performance

---

## CORE-003: Service Delivery Company Profile v1

- Service profile model with schema versioning ("1.0.0")
- LocalStorage persistence layer with Import/Export (JSON)
- Profile-driven scoring signals (Tech, Industry, Region, Hard Negatives)
- UI: Profile Builder with tag editing and offline keyword suggestions
