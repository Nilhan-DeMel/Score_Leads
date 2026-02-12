# Potential App Attributes — Score_Leads (Planned / Not Yet Implemented)

> Features that are identified as next steps but NOT yet built.
> Move items to `App_Attributes.md` only after they are implemented and merged.

---

## Core Engine

| ID       | Feature            | Priority  | Description                                                       | Status         |
| -------- | ------------------ | --------- | ----------------------------------------------------------------- | -------------- |
| CORE-001 | Lead Parser v1     | 🔴 High   | Extract company names, domains, and emails from unstructured text | ✅ Implemented |
| CORE-002 | Scoring Engine v1  | 🔴 High   | Deterministic, explainable scoring with fit/intent signals        | ✅ Implemented |
| CORE-003 | Profile Builder v1 | 🔴 High   | Ground scoring in ICP context with LocalStorage persistence       | ✅ Implemented |
| CORE-004 | Document Ingestion | 🟡 Medium | Ingest target profiles from PDF/DOCX (future)                     | Planned        |
| CORE-005 | Online Enrichment  | 🟡 Medium | Connect scoring engine to LLM API for intelligent enrichment      | Planned        |
| CORE-006 | AI Integration     | 🟡 Medium | Use LLM for intelligent entity extraction and scoring             | Planned        |

## UI/UX

| ID     | Feature             | Priority  | Description                                                             |
| ------ | ------------------- | --------- | ----------------------------------------------------------------------- | -------------- |
| UI-002 | Results Detail View | 🔴 High   | Expanded view per lead with evidence, score breakdown, and risk signals | ✅ Implemented |
| UI-003 | Profile Wizard      | 🟡 Medium | Guided onboarding for profile creation                                  | Planned        |
| UI-004 | Export Results      | 🟡 Medium | Download scored results as CSV, JSON, or markdown                       | Planned        |
| UI-007 | Toast Notifications | 🟡 Medium | Success/error/info toasts via Framer Motion                             | ✅ Implemented |

## Infrastructure

| ID         | Feature             | Priority  | Description                                | Status         |
| ---------- | ------------------- | --------- | ------------------------------------------ | -------------- |
| INFRA-001  | Testing Framework   | 🔴 High   | Vitest setup with component and unit tests | ✅ Implemented |
| INFRA-002  | Playwright E2E      | 🟢 Low    | End-to-end browser tests                   | ✅ Implemented |
| INFRA-003  | Code Scanning       | 🟡 Medium | CodeQL + dependency auditing               | Planned        |
| UI-008     | Accessibility Check | 🟡 Medium | Automated A11y (axe) test suite            | Planned        |
| DEPLOY-001 | Production Deploy   | 🔴 High   | Deploy to stable hosting (Vercel/Firebase) | ✅ Implemented |
