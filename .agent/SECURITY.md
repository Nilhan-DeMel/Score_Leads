# Security Policy — Score_Leads

This project implements multi-layered security gates to prevent vulnerabilities from entering the codebase.

## 🛡️ Security Gates

| Gate                  | Tool                     | Scope               | Trigger                  |
| --------------------- | ------------------------ | ------------------- | ------------------------ |
| **Code Scanning**     | CodeQL                   | Source Code (JS/TS) | PRs, Pushes, Weekly Scan |
| **Dependency Alerts** | Dependabot               | `package.json`, GHA | Weekly Checks            |
| **PR Security Gate**  | Dependency Review Action | PR Dependencies     | Pull Requests            |

---

## 🔍 How to View Results

1. Go to the **Security** tab in the GitHub repository.
2. Select **Code scanning alerts** for CodeQL findings.
3. Select **Dependabot alerts** for vulnerability reports in existing dependencies.

---

## 🛑 Responding to Findings

### 1. CodeQL Alerts

- **Fix**: Modify the code to address the vulnerability (e.g., sanitize input).
- **Dismiss**: If it's a false positive, dismiss the alert with a clear justification.

### 2. Dependabot PRs

- **Merge**: If tests pass, merge the Dependabot PR to keep dependencies fresh.
- **Close**: If an update breaks the build, close the PR and document why.

### 3. Dependency Review (PR Failing)

If the **Dependency Review** check fails on your PR:

- **Upgrade**: Check if a newer version of the dependency fixes the issue.
- **Remove**: Consider an alternative library if the current one is vulnerable.
- **Exception**: If the risk is acceptable (e.g., dev-only tool), follow organizational policy for risk acceptance.

---

## 🔒 Best Practices

- Never commit secrets (API keys, service accounts) to the repository.
- Use `npm audit` locally before adding new packages.
- Keep GitHub Actions updated periodically.
