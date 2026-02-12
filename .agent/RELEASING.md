# Releasing Runbook — Score_Leads

Follow these steps to create a formal GitHub Release for v0.1.0.

## 1. Finalize main

1. Ensure the `release/release-001-v0.1.0` branch is merged into `main`.
2. Delete the remote release branch after merge.

## 2. Tag the Release

Run these commands from your local machine (on `main` branch):

```bash
git checkout main
git pull
git tag -a v0.1.0 -m "Release v0.1.0 - MVP Launch"
git push origin v0.1.0
```

## 3. Create GitHub Release

1. Go to **GitHub Repo → Releases → Draft a new release**.
2. Select the tag `v0.1.0`.
3. **Release Title**: `v0.1.0 MVP Launch`.
4. **Description**:
   - Click "Generate release notes" to capture PR history.
   - Or paste from [CHANGELOG.md](file:///CHANGELOG.md).
5. Review the content using `.github/RELEASE_TEMPLATE.md` as a guide.
6. Click **Publish release**.

## 4. Verification

- Verify the build is live on the Vercel/Firebase URL.
- Share the link!
