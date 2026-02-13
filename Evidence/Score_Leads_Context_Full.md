# Score_Leads Context Full (v0.1.0 Snapshot)

This document provides a comprehensive deep-dive into the Score_Leads application architecture, flows, and operations as of the v0.1.0 "Launch Ready" milestone.

## 1. Executive Summary (Prompt #01–#10)

Score_Leads has been built over 10 iterative prompts, evolving from a scaffold to a production-ready scoring utility.

- **Foundation**: Vite + React 19 + TypeScript + Tailwind v4.
- **Logic**: Deterministic Lead Parser (regex/tldts) and Scoring Engine (Fit/Intent signals).
- **Features**: Service Profiles (ICP), Batch Import (CSV/List), Run History (IndexedDB), and Exports (CSV/JSON).
- **Quality**: 100% pass on Vitest unit suite and Playwright E2E smoke suite (Mobile + Desktop).
- **Ops**: Multi-lane deployment (Vercel/Firebase) and hard security gates (CodeQL/Dependabot).

## 2. Repo Map & Directory Walkthrough

- **`.agent/`**: The "Agent-Native" brain. Contains rules, commands, deployment docs, and the repo map.
- **`App_Attributes/`**: The SRS source of truth. Tracks what is built (`App_Attributes.md`) and what is next (`Potential_App_Attributes.md`).
- **`Evidence/`**: Trajectory logs and work artifacts (ZIPs).
- **`src/`**:
  - `core/`: Pure logic. `parser/` (extraction), `scoring/` (rules), `runs/` (persistence), `import/` (batch).
  - `ui/`: React components. `pages/` (View layer), `layout/` (App shell), `motion/` (Animations).
  - `App.tsx`: Routing (React Router v7) and global state.
- **`.github/`**: Automation. CI workflows, security scans, and PR templates.

## 3. Data Models & Contracts

- **Lead**: `{ id, email, domain, company, confidence }`.
- **Score Breakdown**:
  - `signals`: `[{ id, label, points, evidence }]`.
  - `totalScore`: Clamped between -100 (Excluded) and 100 (Hot).
- **Profile**: `{ id, name, regions, keywords, excludeKeywords }`.
- **Run**: `{ id, timestamp, profileSnapshot, results }`.

## 4. Runtime Flows

1. **Scoring Pipeline**: Raw Text -> Extraction (Regex) -> Normalization (tldts) -> Scoring (Rule Engine) -> UI Feedback.
2. **Rescoring**: Profile change triggers a recalculation of signals for the current lead set without re-parsing raw text.
3. **Autosave**: Every successful scoring run is persisted to `localforage`. The `HistoryPage` retrieves the index to allow reopening specific runs.

## 5. Testing & CI

- **Vitest**: Unit testing for parser, scoring rules, and storage logic.
- **Playwright**: Cross-browser E2E testing for the "Golden Path" (Input -> Score -> Result -> Export).
- **CI**: GitHub Actions runs `lint`, `type-check`, `build`, and `e2e` on every PR.

## 6. Deployment Lanes

- **Vercel**: Primary. URL: `score-leads.vercel.app`. Uses Git integration for zero-manual-action deploys.
- **Firebase**: Secondary/Backup. Used for preview channels and hosting reliability.
- **Rewrites**: Configured in both `vercel.json` and `firebase.json` to handle SPA client-side routing.

## 7. Security Gates

- **CodeQL**: Static analysis for security vulnerabilities.
- **Dependency Review**: Blocks PRs introducing vulnerable npm packages.
- **Dependabot**: Weekly audits and auto-grouping of minor/patch updates.

## 8. Evidence & Trajectory

- This project follows the **Trajectory Standard**: Agents log their thoughts and actions into `promptNN_trajectory.log` files inside Evidence Packs.
- **PROMPT#NN.zip** is the non-negotiable proof of work for every feature.

## 9. Known Limits (v0.1.0)

- **Offline**: No external enrichment (e.g., Clearbit/Apolo).
- **Local-only**: No team sharing; data is per-device.
- **Heuristics**: Basic regex-based extraction; may miss edge-case company names in signatures.

## 10. Next Build Plan

1. **CORE-007 (SaaS Mode)**: Auth + Teams + Cloud Sync.
2. **CORE-008 (Shareable Runs)**: Unique public/private run links.
3. **UI-009 (Polish)**: A11y pass and dark-mode refinement.
4. **API-001 (LLM Enrichment)**: Optional AI-powered intent extraction.
