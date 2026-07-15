# App Attributes — Score_Leads (Implemented)

> Track all features/capabilities that have been **implemented** in the codebase.
> Update this file with every prompt that adds functionality.

---

## Implemented Features

| ID          | Feature                                                                 | Prompt       | Date       | Status      |
| ----------- | ----------------------------------------------------------------------- | ------------ | ---------- | ----------- |
| INIT-001    | Agent-Native Scaffold                                                   | AG_Prompt_01 | 2026-02-12 | ✅ Complete |
| UI-001      | UI Shell (Vite+React+TS + dark theme + glass panels + micro-animations) | AG_Prompt_02 | 2026-02-12 | ✅ Complete |
| INFRA-001   | Vitest Baseline (JSDOM environment + RTB + Sanity tests)                | AG_Prompt_03 | 2026-02-12 | ✅ Complete |
| CORE-001    | Lead Parser v1 (Offline, regex-based, tldts-aware)                      | AG_Prompt_03 | 2026-02-12 | ✅ Complete |
| CORE-002    | Scoring Engine v1 (Deterministic, explainable signals)                  | AG_Prompt_04 | 2026-02-12 | ✅ Complete |
| CORE-003    | Service Profile v1 (ICP-grounded scoring + persistence)                 | AG_Prompt_05 | 2026-02-12 | ✅ Complete |
| CORE-004    | Run History v1 + Batch Import v1 + Exports (CSV/JSON)                   | AG_Prompt_06 | 2026-02-12 | ✅ Complete |
| INFRA-002   | Playwright Mobile E2E Smoke + CI Artifact Reports                       | AG_Prompt_07 | 2026-02-12 | ✅ Complete |
| DEPLOY-001  | Hosting Lane Docs + Firebase/Vercel Configs + Preview Workflows         | AG_Prompt_08 | 2026-02-12 | ✅ Complete |
| INFRA-003   | Security Gates (CodeQL + Dependabot + Dependency Review)                | AG_Prompt_09 | 2026-02-12 | ✅ Complete |
| RELEASE-001 | Launch-ready release hygiene (v0.1.0, changelog, launch checklist)      | AG_Prompt_10 | 2026-02-12 | ✅ Complete |
| INFRA-008   | STATLESS OPS HARDENING v1 (AGENTS.md + Kilo rules + preflight)          | AG_Prompt_30 | 2026-02-14 | ✅ Complete |
| RELEASE-002 | Employer release hardening, typed import bridge, and current docs       | AG_Prompt_31 | 2026-07-15 | ✅ Complete |

---- [x] `UI-HOTFIX-002` (Restore CSS/Theme) — restored missing styles, Tailwind wiring, and dark mode baseline. (2026-02-13)

## RELEASE-002: Employer Release Hardening

- Replaced generic portfolio copy with an architecture- and evidence-led README.
- Removed stale onboarding and repository-map claims.
- Replaced unsafe `any` boundaries with typed export, import, storage-test, and icon contracts.
- Added canonical conversion from permissive CSV/list rows into `LeadCompanyProfile`.
- Corrected asynchronous history loading so the React lint gate passes.
- Re-verified ESLint, all 18 Vitest tests, and the production build.

## RELEASE-001: Launch-Ready Operations

- **Versioning**: Bumped to `v0.1.0` (MVP) in `package.json` and `.agent/VERSION.md`.
- **Changelog**: Human-readable `CHANGELOG.md` with full feature history.
- **Launch Strategy**: Created `.agent/LAUNCH_CHECKLIST.md` covering Vercel/Firebase lanes and post-launch QA.
- **Release Hygiene**: Added `.github/RELEASE_TEMPLATE.md` and `.agent/RELEASING.md` runbook for tagging.
- **Onboarding**: Updated `README.md` with clear local setup and testing instructions.

---

## INFRA-003: Security Gates

- **Code Scanning**: `.github/workflows/codeql.yml` tracks JS/TS vulnerabilities via GitHub CodeQL.
- **Dependency Health**: `.github/dependabot.yml` automates npm and GitHub Actions updates with weekly grouping.
- **PR Security Barrier**: `.github/workflows/dependency-review.yml` blocks PRs introducing high/critical vulnerabilities.
- **Documentation**: `.agent/SECURITY.md` provides a response playbook for security findings.

---

## DEPLOY-001: Multi-Lane Hosting & Previews

- **Vercel Lane:** Zero-config Git integration with automatic PR previews.
- **Firebase Lane:**
  - `firebase.json` + `vercel.json`: Proper SPA routing rewrites to ensure direct URL navigation.
  - GitHub Actions: `.github/workflows/firebase-hosting-preview.yml` for automated preview channels.
  - `.agent/DEPLOY.md`: Comprehensive onboarding for live and preview deployments.
- **Security:** Standard configuration templates (no secrets committed).

---

## INFRA-002: Playwright Mobile E2E Smoke Tests

- **Cross-Browser Mobile Emulation:** Configured for Pixel 5 (Chrome) and iPhone 13 (Safari) plus Desktop Chromium.
- **High-Signal Smoke Suite:**
  - `E2E-01`: Full scoring flow verification (Input -> Process -> Results).
  - `E2E-02`: Exclusion logic and hard-negative score validation.
  - `E2E-03`: Real-time ICP profile update and score sensitivity.
  - `E2E-04`: Auto-save persistence and history browsing flow.
- **CI/CD Integration:** Wired into GitHub Actions with automated browser dependency installation.
- **Reporting:** Automated Playwright HTML report generation and upload as CI build artifacts (30-day retention).
- **Stability:** Instrumented app with `data-testid` attributes for non-fragile E2E selection.

---

## CORE-004: Run History, Batch Import & Exports

- **Run History:** Async persistence via IndexedDB (localForage). Each run includes a profile snapshot for reproducibility.
- **Batch Import:**
  - CSV Parser with auto-detecting core lead column (domain/email/company).
  - List Parser (splitting by newline/comma/semicolon).
  - UI: Segmented input modes (Tape, CSV Paste, File Upload, List) with real-time preview.
- **Exports:**
  - Results to CSV (Papa Parse unparse) containing scores, fit/intent splits, and signals.
  - Results/Runs to JSON for external tool ingestion.
- **UI:** History browser with quick actions (Open/Delete) and Results-viewer for historical data.
- **Reliability:** 100% test pass for storage and import modules in Vitest.

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
