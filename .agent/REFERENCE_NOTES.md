# Reference Notes — MCP-Grounded (Step 1)

> Generated: 2026-02-12 via `google-developer-knowledge` MCP server  
> These are authoritative takeaways used to inform the Score_Leads scaffold.

---

## 1. GitHub Flow + Protected Branches + Required Status Checks

**Source:** Google Cloud Secure Source Manager docs  
**Ref:** `docs.cloud.google.com/secure-source-manager/docs/configure-branch-protection`

### Key Takeaways

- **Branch protection rules** can enforce: requiring PRs before merge, minimum reviewers/approvers, blocking merge on stale reviews, requiring conversation resolution, requiring linear history, requiring status checks.
- **Required status checks** ensure CI builds/tests must pass before a PR can be merged to the protected branch.
- **Branch name patterns** can be specific (`main`) or wildcard (`.*`), but specific names override wildcards.
- **Pull request requirement** blocks direct commits to protected branches — a PR must be opened and approved first.
- **Stale review blocking** invalidates approvals when new commits are pushed (enabled by default).
- **Linear history** prevents merge commits, keeping `git log` cleaner and easier for agent navigation.

### Policy for Score_Leads

- Protect `main` branch: require PR, at least 1 reviewer, require conversation resolution, require status checks (CI).
- Keep linear history preferred but not enforced initially (to reduce friction during init phase).

---

## 2. Dev Containers (`devcontainer.json`) Basics

**Source:** Google Cloud Code + VS Code Dev Containers docs  
**Ref:** `docs.cloud.google.com/code/docs/vscode/develop-k8s-remote-dev`

### Key Takeaways

- **devcontainer.json** instructs VS Code Remote Containers extension how to build and run a development container.
- **Dockerfile** paired with devcontainer.json defines the container image with dev tools.
- **Extensions** can be installed inside the container via the `customizations.vscode.extensions` array.
- **Port forwarding** configured via `forwardPorts` array for dev servers.
- **Mounts** can bind-mount host directories into the container.
- **postCreateCommand** runs after container creation (e.g., `npm install`).

### Policy for Score_Leads

- Minimal devcontainer.json targeting Node 20 LTS.
- Include recommended extensions for the project.
- Run `npm install` as postCreateCommand.
- No heavy extras — keep boot time fast.

---

## 3. VS Code Extension Runtime Security / Extension Trust

**Source:** Chrome Extensions Security docs (analogous principles) + VS Code trust model  
**Ref:** `developer.chrome.com/docs/extensions/develop/security-privacy/stay-secure`

### Key Takeaways

- **Extensions are a supply-chain attack surface** — compromised extensions affect all users.
- **Minimal permissions** — only install extensions that are strictly needed.
- **Known publishers** — prefer established, verified publishers (Microsoft, GitKraken, etc.).
- **Allowlist model** — maintain an explicit list of approved extensions; do not install arbitrary extensions.
- **Review permissions** — check what APIs/resources an extension accesses before approving.
- **Two-factor auth on developer accounts** — prevents hijacking of extension publisher accounts.
- **Content Security Policy** — extensions should declare strict CSP to prevent XSS.
- **Input sanitization** — extensions should validate and sanitize all inputs.

### Policy for Score_Leads

- Maintain `.agent/EXTENSIONS_ALLOWLIST.md` as the single source of truth for approved extensions.
- `.vscode/extensions.json` contains ONLY recommended (not required) extensions from the allowlist.
- Any new extension must be reviewed for publisher trust, permissions, and necessity before being added.
- Treat every extension as a potential supply-chain risk — document why each is approved.
