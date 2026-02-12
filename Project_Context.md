Score_Leads — Project Description & Operating Charter (Agent-Native, Enforceable)
Workspace Root

This project’s canonical local workspace is:

D:\AI-Apps-In-Drive\App_Station\Score_Leads

All code, docs, registries, logs, and evidence artifacts must be designed to support stateless agents that can fly in, understand the system fast, ship changes safely, and fly out.

0) What we’re building (the product)

Score_Leads is a mobile-first, dark-theme sales lead scoring web app that accepts:

One lead (single company)

Many leads (list/table)

Messy text containing leads (emails, domains, company names, URLs)

The app must extract lead entities (company name + website/domain), then score each lead by likelihood of purchasing from the service delivery company (our company), using our website + internal docs as ground truth.

1) Core capability (non-negotiable)
A) Ingest → Extract → Normalize

Detect company identifiers: company names, email domains, URLs, web domains

Normalize into a canonical object:
{ name, domain, website, source_text, confidence }

B) Compare lead vs. our offer

Build/maintain a “Service Delivery Company Profile” from:

Our website

Our internal docs (in-repo / linked)

Produce:

Fit signals (industry, size, geo, stack, budget cues, keywords)

Risk signals (wrong region, too small, mismatch)

Score + rationale (human-readable, evidence-backed)

C) Output

For every lead:

score

confidence

short justification

extracted evidence

Works for both single and batch lead flows.

2) Build environment & roles (definitions)

AG = Antigravity agents (primary build team)

KC = Kilo Code agents (additional build agents)

Architect/QA (us here) = system design, task specs, quality gates, acceptance criteria

The app is built inside Antigravity, primarily by AG + KC.

3) Agent-first, stateless development (non-negotiable)

This repo must be structured so an agent can land with zero prior context and still succeed.

Hard requirements:

Micro-modular code: each file handles 1–2 functions (small, focused, searchable).

AI-readable architecture: directories + registries + docs make it obvious:

where features live

where scoring logic lives

where parsing/extraction lives

where UI/UX lives

Evidence logging: every AG/KC task must produce an Evidence Pack written to:
D:\AI-Apps-In-Drive\App_Station\Score_Leads\Evidence
Evidence packs must be < 10MB and prove what changed + why it works.

4) Git + GitHub workflow (use it hard, but intelligently)

We maintain a clean, reviewable Git history:

One feature per branch

PRs are created and merged into the default branch when complete (GitHub Flow)

If Git ceremony increases risk/slows execution, we can reduce it temporarily — but the exception must be documented inside the Evidence Pack, then hygiene restored.

Initialization (mandatory enforcement):

Enable protected branches + require status checks before merge

Add Issue + PR templates so agents always include the same fields (scope, tests, evidence, risk, rollback)

5) MCP-first + Skills-first operating law (must be enforced)

AG must operate under this policy:

MCP-first: use MCP to ground work in authoritative sources and tool context (especially dev-doc lookups).

If MCP looks broken: refresh/reconnect/retry; if still broken: STOP and report.

If MCP works: use search_documents / get_document / batch_get_documents before acting.

Skills-first: route every task through the strongest available skills; if missing, acquire/import, quality-gate, then execute.

Improvements to MCP-first/skills-first behavior must be logged to:
C:\Users\Nilhan.dev\Documents\AI_Experiments\Skills-First.md

6) UI/UX standard (Feb 12, 2026 target)

Mobile-first and must feel “native” on phones

Dark theme only

“Premium future” style: deep emotive colors + glass/liquid panels + perfect micro-animations
(Glass effects must never reduce readability/usability.)

7) Mandatory product documentation (SRS-in-motion)

These files must be maintained meticulously:

Implemented features log (update after every completed feature):
D:\AI-Apps-In-Drive\App_Station\Score_Leads\App_Attributes\App_Attributes.md

Potential features / living SRS (update whenever an idea appears):
D:\AI-Apps-In-Drive\App_Station\Score_Leads\App_Attributes\Potential_App_Attributes.md

Every potential item must be marked as:

Implemented

Implemented {with changes: ...}

Deleted {reason: ...}

Implemented {with changes: ...} + Deleted {reason: ...}

8) How we task AG (process rule)

Every prompt to AG must:

be numbered

be one single code block (copy/paste safe)

define tasks at granular, verifiable level

force AG to create its own Task Rubric before implementation

require an Evidence Pack written to the Evidence path

9) “Done” definition (a feature is not done until…)

A feature is complete only when:

works end-to-end

Evidence Pack exists (<10MB)

App_Attributes.md updated

Potential_App_Attributes.md updated (idea marked Implemented/Deleted/etc.)

branch PR merged cleanly to default branch

Initialization & Infrastructure Upgrades (material improvements for stateless agents)
A) Agent Onboarding Pack (required)

Create and maintain /.agent/ with:

START_HERE.md (1 page: how this repo works)

MAP.md (feature → folder mapping)

COMMANDS.md (single source of truth for scripts)

DECISIONS/ (ADR decision log)

B) Repo Map (auto-generated comprehension accelerator)

Add an automated “repo map” artifact (file list + key symbols) regenerated on changes and attached to Evidence Packs. This pattern is used explicitly to improve LLM codebase navigation.

Bonus: consider a RepoMap MCP server so agents can fetch maps via MCP when needed.

C) Rules-as-files (no vibes, only policy)

Store enforceable behavior rules as files committed to the repo (ex: /.agent/RULES.md and/or editor rule files like .cursor/rules/*).

D) Trajectory logging (step-by-step, replayable)

Standardize agent run logs as “trajectories” (tool calls + diffs + outputs). This is a proven agent-audit pattern (SWE-agent treats trajectories as the main output).

E) Deterministic environments (Dev Containers)

Add devcontainer.json so agents boot a predictable toolchain and dependencies.

F) Agent reviews in CI (not just inside the IDE)

Add CI checks that behave like automated reviewers. Example: Continue agents can run as GitHub checks and be defined in-repo (.continue/agents/*).

G) Security + bug “ripple scanners” (catch agent mistakes early)

CodeQL scanning via GitHub code scanning

Semgrep rulesets for JS/TS and custom enforcement

H) Observability rules (structured logs + correlation)

Use structured logging so logs become filterable, correlatable, and machine-usable.

I) Ripple-impact detection (don’t break adjacent modules silently)

If/when you move toward monorepo/multi-package:

Nx affected to run only tasks impacted by changes

Turborepo caching to avoid repeating the same work

J) VS Code “spot the ripple” baseline tools (minimum set)

Error Lens (diagnostics loud and obvious)

GitLens (history/blame/PR context fast)

Use built-in Call Hierarchy / Find References aggressively for ripple hunting.

K) Extension supply-chain safety (mandatory policy)

Treat extensions as a high-risk surface:

Maintain an allowlist/manifest of approved extensions

Prefer known publishers, review permissions, keep updates controlled
VS Code explicitly documents extension runtime security considerations.

L) Agent-native orchestration layer (optional, high leverage)

You may integrate “agent mission control” patterns (Agent HQ / agent sessions) to centralize monitoring and handoffs, especially when multiple agents run in parallel.

M) Codex CLI as an additional “local agent runner lane” (optional)

Codex CLI can read/change/run code locally in a directory — useful as a standardized fallback harness alongside AG/KC.

N) Evidence Pack format spec (mandatory)

Evidence Packs must be consistent and boring (that’s the point):

evidence.json (summary, commit hash, PR link, files changed)

patch.diff (or list of diffs)

commands.log (commands run + output)

tests.log (what was validated)

repo-map.md (current repo map snapshot)

This is how stateless work stays trustworthy.