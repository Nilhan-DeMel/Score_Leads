# 10_GIT_AND_PR — Kilo Repo-Scoped Rules

- Agents MUST use one mission per branch.
- Agents MUST keep commits small, logical, and scoped.
- Agents MUST open exactly one PR per mission branch.
- Agents MUST run required gates before merge: test/build/e2e/preflight + evidence completeness.
- Agents MUST NOT merge with failing required gates.
- Agents MUST NOT mix unrelated changes in the same branch/PR.
