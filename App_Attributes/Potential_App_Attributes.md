# Potential App Attributes — Score_Leads (Planned / Not Yet Implemented)

> Features that are identified as next steps but NOT yet built.
> Move items to `App_Attributes.md` only after they are implemented and merged.

---

## Core Engine

| ID       | Feature             | Priority  | Description                                                                     |
| -------- | ------------------- | --------- | ------------------------------------------------------------------------------- |
| CORE-001 | Lead Parser v1      | 🔴 High   | Extract company names, domains, and emails from unstructured text               |
| CORE-002 | Lead Normalizer     | 🔴 High   | Deduplicate, clean, and standardize extracted lead entities                     |
| CORE-003 | Scoring Engine v1   | 🔴 High   | Score leads by fit signals (industry, size, tech stack) and risk signals        |
| CORE-004 | Evidence Extraction | 🟡 Medium | Extract specific evidence snippets backing each score dimension                 |
| CORE-005 | Batch Processing    | 🟡 Medium | Process list/table of leads (CSV, pasted table, multi-line)                     |
| CORE-006 | AI Integration      | 🟡 Medium | Connect scoring engine to LLM API for intelligent entity extraction and scoring |
| CORE-007 | Score Explanations  | 🟡 Medium | Generate human-readable rationale for each lead's score                         |

## UI/UX

| ID     | Feature             | Priority  | Description                                                             |
| ------ | ------------------- | --------- | ----------------------------------------------------------------------- |
| UI-002 | Results Detail View | 🔴 High   | Expanded view per lead with evidence, score breakdown, and risk signals |
| UI-003 | Score Visualization | 🟡 Medium | Radar charts, bar charts, or score breakdown rings                      |
| UI-004 | Export Results      | 🟡 Medium | Download scored results as CSV, JSON, or markdown                       |
| UI-005 | Onboarding Flow     | 🟢 Low    | First-run tutorial or guided walkthrough                                |
| UI-006 | Keyboard Shortcuts  | 🟢 Low    | Power-user shortcuts (Ctrl+Enter to score, etc.)                        |
| UI-007 | Toast Notifications | 🟡 Medium | Success/error/info toasts via Sonner or custom                          |

## Data & Storage

| ID       | Feature              | Priority  | Description                                            |
| -------- | -------------------- | --------- | ------------------------------------------------------ |
| DATA-001 | Local Storage Cache  | 🟡 Medium | Cache recent leads and scores in browser localStorage  |
| DATA-002 | History / Sessions   | 🟡 Medium | Track scoring sessions with timestamps                 |
| DATA-003 | Firebase Integration | 🟢 Low    | Cloud persistence for leads, scores, and user accounts |

## Auth & Security

| ID       | Feature        | Priority | Description                           |
| -------- | -------------- | -------- | ------------------------------------- |
| AUTH-001 | Authentication | 🟢 Low   | User login (Firebase Auth or similar) |
| AUTH-002 | Rate Limiting  | 🟢 Low   | Prevent abuse of scoring API          |

## Infrastructure

| ID        | Feature              | Priority  | Description                                        |
| --------- | -------------------- | --------- | -------------------------------------------------- |
| INFRA-001 | Testing Framework    | 🔴 High   | Vitest setup with component and unit tests         |
| INFRA-002 | Linting & Formatting | 🔴 High   | ESLint + Prettier fully configured and CI-enforced |
| INFRA-003 | CodeQL Workflow      | 🟡 Medium | Security scanning in CI                            |
| INFRA-004 | Semgrep Workflow     | 🟢 Low    | Additional security scanning                       |
| INFRA-005 | Deployment Pipeline  | 🟡 Medium | Deploy to Firebase Hosting or similar              |
| INFRA-006 | E2E Tests            | 🟢 Low    | Playwright or Cypress end-to-end tests             |
| INFRA-007 | Performance Budget   | 🟢 Low    | Lighthouse CI, bundle size limits                  |

## Advanced (Future)

| ID      | Feature                | Priority  | Description                                          |
| ------- | ---------------------- | --------- | ---------------------------------------------------- |
| ADV-001 | Multi-language Support | 🟢 Low    | i18n for interface strings                           |
| ADV-002 | CRM Integration        | 🟢 Low    | Push scored leads to Salesforce, HubSpot, etc.       |
| ADV-003 | API Mode               | 🟡 Medium | REST/GraphQL API endpoint for headless scoring       |
| ADV-004 | Webhook Notifications  | 🟢 Low    | Notify external systems when batch scoring completes |
| ADV-005 | Custom Scoring Models  | 🟢 Low    | Let users define custom fit criteria and weights     |
