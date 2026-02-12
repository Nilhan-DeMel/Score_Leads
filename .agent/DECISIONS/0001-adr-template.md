# ADR-0001: ADR Template & Naming Rules

**Status:** Accepted  
**Date:** 2026-02-12  
**Author:** AG (Antigravity)

---

## Context

We need a consistent format for recording architectural decisions so that any agent or developer can understand why choices were made.

## Decision

Use this template for all Architectural Decision Records (ADRs).

### Naming Convention

- File: `XXXX-short-description.md` (e.g., `0002-use-vite-for-bundling.md`)
- Number: Sequential, zero-padded to 4 digits
- Description: Lowercase, hyphen-separated, max 5 words

### Template

```markdown
# ADR-XXXX: [Title]

**Status:** [Proposed | Accepted | Deprecated | Superseded by ADR-YYYY]  
**Date:** YYYY-MM-DD  
**Author:** [AG | KC | Human]

---

## Context

[What is the issue or question that prompted this decision?]

## Options Considered

1. [Option A] — [pros/cons]
2. [Option B] — [pros/cons]
3. [Option C] — [pros/cons]

## Decision

[What was decided and why.]

## Consequences

- [Positive consequence]
- [Negative consequence or trade-off]
- [Follow-up actions needed]

## References

- [Links, docs, MCP sources]
```

## Consequences

- Every significant decision gets a permanent, searchable record
- Agents can understand historical context without asking
- Low overhead — only write an ADR for decisions that affect architecture, tooling, or policy

## References

- [Lightweight ADR format](https://adr.github.io/)
- Project_Context.md section on agent-first development
