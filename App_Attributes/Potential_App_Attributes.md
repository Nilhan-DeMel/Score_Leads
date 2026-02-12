# Score_Leads — Potential Features (Living SRS)

> Updated whenever an idea appears.
> Each item must be marked with a status. This is the **Potential** features log.

---

## Status Legend

- 🔲 **Planned** — Not started yet
- ✅ **Implemented** — Done and shipped
- ✅ **Implemented {with changes: ...}** — Done but modified from original spec
- ❌ **Deleted {reason: ...}** — Removed, with justification

---

## Infrastructure & Tooling

| ID       | Feature                                                    | Status         | Notes                        |
| -------- | ---------------------------------------------------------- | -------------- | ---------------------------- |
| INIT-001 | Agent-Native Scaffold                                      | ✅ Implemented | AG_Prompt_01 — full scaffold |
| INIT-002 | Node.js / TypeScript project init (package.json, tsconfig) | 🔲 Planned     | Next logical step            |
| INIT-003 | ESLint + Prettier setup                                    | 🔲 Planned     | Code quality tooling         |
| INIT-004 | Vitest / Jest test framework setup                         | 🔲 Planned     | Testing infrastructure       |
| INIT-005 | CodeQL scanning workflow                                   | 🔲 Planned     | Security scanning            |
| INIT-006 | Semgrep rules for JS/TS                                    | 🔲 Planned     | Custom enforcement rules     |
| INIT-007 | Structured logging setup                                   | 🔲 Planned     | Observability                |

## Core Features

| ID       | Feature                                  | Status     | Notes                                                                       |
| -------- | ---------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| CORE-001 | Lead Parser v1 (single lead)             | 🔲 Planned | Extract company name + domain from text                                     |
| CORE-002 | Lead Parser v2 (batch/list)              | 🔲 Planned | Parse multiple leads from table/list                                        |
| CORE-003 | Lead Parser v3 (messy text)              | 🔲 Planned | Extract entities from unstructured text                                     |
| CORE-004 | Lead Normalizer                          | 🔲 Planned | Normalize to canonical `{ name, domain, website, source_text, confidence }` |
| CORE-005 | Service Delivery Company Profile Builder | 🔲 Planned | Build profile from website + internal docs                                  |
| CORE-006 | Lead Scoring Engine v1                   | 🔲 Planned | Fit signals, risk signals, score + rationale                                |
| CORE-007 | Scoring Output Formatter                 | 🔲 Planned | Human-readable, evidence-backed results                                     |

## UI/UX

| ID     | Feature                      | Status     | Notes                             |
| ------ | ---------------------------- | ---------- | --------------------------------- |
| UI-001 | UI Shell (Vite + dark theme) | 🔲 Planned | Mobile-first, dark theme entry    |
| UI-002 | Single Lead Input Component  | 🔲 Planned | Form for one company              |
| UI-003 | Batch Lead Input Component   | 🔲 Planned | Table/list input                  |
| UI-004 | Text Paste Input Component   | 🔲 Planned | Messy text input area             |
| UI-005 | Score Card Component         | 🔲 Planned | Display single lead score         |
| UI-006 | Score List Component         | 🔲 Planned | Display batch results             |
| UI-007 | Navigation (mobile-first)    | 🔲 Planned | Bottom nav or hamburger           |
| UI-008 | Glass/liquid panel effects   | 🔲 Planned | Premium visual style              |
| UI-009 | Micro-animations             | 🔲 Planned | Smooth transitions, hover effects |

## Authentication & Security

| ID       | Feature             | Status     | Notes                            |
| -------- | ------------------- | ---------- | -------------------------------- |
| AUTH-001 | User authentication | 🔲 Planned | Method TBD (Firebase Auth, etc.) |
| AUTH-002 | API key management  | 🔲 Planned | Secure storage of API keys       |
| AUTH-003 | Input sanitization  | 🔲 Planned | Protect against injection        |

## Data & API

| ID       | Feature                             | Status     | Notes                       |
| -------- | ----------------------------------- | ---------- | --------------------------- |
| DATA-001 | Data models (TypeScript interfaces) | 🔲 Planned | Lead, Score, CompanyProfile |
| DATA-002 | API routes (if server-based)        | 🔲 Planned | REST or tRPC                |
| DATA-003 | Database integration                | 🔲 Planned | Storage for leads + scores  |

---

## Adding New Potential Features

1. Add a new row to the appropriate section
2. Use the next sequential ID (e.g., CORE-008, UI-010)
3. Status starts as 🔲 Planned
4. Update status as work progresses
