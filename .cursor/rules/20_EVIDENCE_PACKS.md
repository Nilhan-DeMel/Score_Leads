# 20_EVIDENCE_PACKS — Kilo Repo-Scoped Rules

- Every prompt execution MUST produce `Evidence/PROMPT#NN.zip`.
- Zip names MUST be canonical and MUST NOT contain spaces.
- Evidence packs MUST include required artifacts:
  - evidence report markdown
  - machine-readable metadata (`evidence.json`)
  - commands log
  - tests/build/e2e/preflight log
  - trajectory log
  - repo-map snapshot
  - patch/diff (when required)
- Evidence zip MUST remain under 10MB.
