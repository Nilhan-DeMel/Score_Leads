import { test, expect } from "@playwright/test";

test("E2E-04: Run auto-saved -> History page shows the run -> reopen", async ({
  page,
}) => {
  // 1. Run a scoring session
  await page.goto("/score");
  const textarea = page.getByTestId("lead-input-textarea");
  const timestamp = new Date().getTime();
  await textarea.fill(`test-batch-${timestamp}.com`);
  await page.getByTestId("score-leads-button").click();
  await expect(page).toHaveURL(/\/results/);

  // 2. Go to History
  await page.goto("/history");
  const historyItem = page.getByTestId("history-item").first();
  await expect(historyItem).toBeVisible();

  // 3. Reopen
  await historyItem.click();

  // 4. Verify we are on a detail page and data is there
  await expect(page).toHaveURL(/\/run\//);
  await expect(page.getByText(`test-batch-${timestamp}.com`)).toBeVisible();
});
