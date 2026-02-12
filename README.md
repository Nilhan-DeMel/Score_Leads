# Score_Leads

> **Deterministic Lead Scoring for ICP-Grounded Performance.**

Score_Leads is a premium utility designed to help sales and marketing teams score leads based on their Ideal Customer Profile (ICP). It extracts business context from messy text or list imports and applies deterministic, explainable scoring signals.

## 🚀 Quick Start

### 1. Prerequisites

- **Node.js**: v20+ (LTS recommended)
- **npm**: v10+

### 2. Local Setup

```bash
# Clone the repo
git clone <repo-url>
cd Score_Leads

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Testing

```bash
# Run unit & component tests (Vitest)
npm test

# Run E2E Smoke Tests (Playwright)
npm run e2e
```

## 🛠️ Tech Stack

- **Frontend**: Vite + React 19 + TypeScript
- **Styling**: Vanilla CSS (Modern)
- **Animations**: Motion (Framer Motion)
- **Persistence**: Local IndexedDB via `localforage`
- **Infrastructure**: Vitest, Playwright, GitHub Actions

## 📦 Features

- **Lead Parser**: Extract domains, emails, and company names from raw text.
- **Scoring Engine**: Deterministic rules with fit/intent signals and evidence.
- **ICP Profiles**: Customizable profiles for specific service delivery targets.
- **Batch Processing**: Import from lists or CSV files.
- **History**: Local storage of previous runs with export to CSV/JSON.

## 🚢 Deployment

Deployment instructions for Vercel and Firebase can be found in [.agent/DEPLOY.md](file:///.agent/DEPLOY.md).
Launch readiness checklist is located in [.agent/LAUNCH_CHECKLIST.md](file:///.agent/LAUNCH_CHECKLIST.md).

## 📄 Evidence & History

Development progress and evidence of work are documented in the [Evidence/](file:///Evidence/) directory.
For a detailed history of changes, see [CHANGELOG.md](file:///CHANGELOG.md).

---

© 2026 Score_Leads. Agent-Native Development.
