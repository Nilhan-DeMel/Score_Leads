# Extensions Allowlist — Supply Chain Safety Policy

> **Treat every VS Code extension as a supply-chain risk.**
> Only extensions on this allowlist may be installed in the workspace.

---

## Policy

1. **Allowlist-only**: Only install extensions explicitly approved below
2. **Known publishers**: Prefer established, verified publishers (Microsoft, GitKraken, etc.)
3. **Review permissions**: Check what APIs/resources an extension accesses before approving
4. **Minimal set**: Only install what is strictly necessary for the project
5. **Update control**: Pin extension versions when possible; review changelogs before updating
6. **New requests**: To add an extension, create an ADR in `.agent/DECISIONS/` documenting why it's needed

---

## Approved Extensions

| Extension                 | Publisher            | ID                                      | Purpose                                            | Risk Level |
| ------------------------- | -------------------- | --------------------------------------- | -------------------------------------------------- | ---------- |
| Error Lens                | Alexander            | `usernamehw.errorlens`                  | Inline diagnostics — makes errors loud and obvious | Low        |
| GitLens                   | GitKraken            | `eamodio.gitlens`                       | Git history, blame, PR context                     | Low        |
| Prettier                  | Prettier             | `esbenp.prettier-vscode`                | Code formatting (consistent style)                 | Low        |
| ESLint                    | Microsoft            | `dbaeumer.vscode-eslint`                | Linting (catch errors early)                       | Low        |
| Tailwind CSS IntelliSense | Tailwind Labs        | `bradlc.vscode-tailwindcss`             | CSS utility autocomplete (if Tailwind used)        | Low        |
| Code Spell Checker        | Street Side Software | `streetsidesoftware.code-spell-checker` | Catch typos in code and comments                   | Low        |
| Todo Tree                 | Gruntfuggly          | `gruntfuggly.todo-tree`                 | Track TODO/FIXME comments                          | Low        |

---

## Rejected / Not Approved

| Extension  | Reason |
| ---------- | ------ |
| (none yet) | —      |

---

## Review Process

When requesting a new extension:

1. **Identify need**: What problem does it solve?
2. **Check publisher**: Is the publisher trusted? How many downloads?
3. **Review permissions**: What does it access? (files, network, terminal?)
4. **Check alternatives**: Is there a built-in VS Code feature that does the same thing?
5. **Document**: Create an ADR with the decision to approve or reject
6. **Add to allowlist**: If approved, add to this file and `.vscode/extensions.json`
