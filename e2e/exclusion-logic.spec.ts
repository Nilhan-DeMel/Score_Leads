import { test, expect } from "@playwright/test";

test("E2E-02: Exclusion keyword present -> Score shows hard negative", async ({
  page,
}) => {
  // 1. Add exclusion keyword in Profile
  await page.goto("/profile");
  const excludeInput = page.getByTestId("tag-input-exclude-keywords");
  await excludeInput.fill("BlockedCorp");
  await excludeInput.press("Enter");
  await page.getByTestId("save-profile-button").click();

  // 2. Score a lead containing that keyword
  await page.goto("/score");
  const textarea = page.getByTestId("lead-input-textarea");
  await textarea.fill("Working with BlockedCorp.com today.");
  await page.getByTestId("score-leads-button").click();

  // 3. Verify results
  await expect(page).toHaveURL(/\/results/);
  // Hard negative is -100, which results in a red score badge
  const scoreBadge = page.locator(
    "div.text-xl.font-black.text-\\[var\\(--color-danger\\)\\]",
  );
  await expect(scoreBadge).toBeVisible();
  await expect(scoreBadge).toHaveText("-100");
});
