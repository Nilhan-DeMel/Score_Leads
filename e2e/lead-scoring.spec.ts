import { test, expect } from "@playwright/test";

test("E2E-01: Paste messy text -> Score Leads -> Results shows >=1 lead card", async ({
  page,
}) => {
  await page.goto("/score");

  const textarea = page.getByTestId("lead-input-textarea");
  await textarea.fill(
    "Contact us at info@acme.com or visit acme.com for details.",
  );

  await page.getByTestId("score-leads-button").click();

  await expect(page).toHaveURL(/\/results/);
  const resultsList = page.getByTestId("results-list");
  await expect(resultsList).toBeVisible();

  const leadCards = resultsList.locator(".group"); // Lead cards have 'group' class in ResultsPage
  await expect(leadCards).toHaveCount(1);
  await expect(page.getByText("acme.com")).toBeVisible();
});
