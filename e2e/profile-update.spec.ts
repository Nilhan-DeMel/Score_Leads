import { test, expect } from "@playwright/test";

test("E2E-03: Change Profile keywords -> Re-score -> score changes", async ({
  page,
}) => {
  // 1. Initial score for 'acme.com'
  await page.goto("/score");
  const textarea = page.getByTestId("lead-input-textarea");
  await textarea.fill("acme.com");
  await page.getByTestId("score-leads-button").click();
  await expect(page).toHaveURL(/\/results/);

  const score1 = await page.locator("div.text-xl.font-black").innerText();

  // 2. Update Profile to include 'acme' as intent keyword
  await page.goto("/profile");
  const intentInput = page.getByTestId("tag-input-intent-keywords");
  await intentInput.fill("acme");
  await intentInput.press("Enter");
  await page.getByTestId("save-profile-button").click();

  // 3. Re-score
  await page.goto("/score");
  await textarea.fill("acme.com");
  await page.getByTestId("score-leads-button").click();

  // 4. Verify score increased
  await expect(page).toHaveURL(/\/results/);
  const score2 = await page.locator("div.text-xl.font-black").innerText();

  expect(Number(score2)).toBeGreaterThan(Number(score1));
});
