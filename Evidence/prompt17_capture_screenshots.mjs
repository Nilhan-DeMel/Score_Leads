import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";

const EVIDENCE_DIR = "D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence";
const RUN_LOG = path.join(EVIDENCE_DIR, "prompt17_run.log");
const BROWSER_LOG = path.join(EVIDENCE_DIR, "prompt17_browser_console.log");
const URL = "https://score-leads.vercel.app";

const log = (msg) => {
  const t = new Date().toISOString();
  fs.appendFileSync(RUN_LOG, `[${t}] ${msg}\n`);
  console.log(msg);
};

const MESSY_TEXT = `Prospects:
- Acme Analytics (acme-analytics.example) contact: maya@acme-analytics.example
- Northwind Traders — https://northwind.example — sales@northwind.example
- Contoso Finance, contoso.example, hello@contoso.example
Notes: looking for Microsoft Dynamics 365 / ERP modernization, budget approved, UK operations.`;

const CSV_TEXT = `company,website,email,notes
Acme Analytics,https://acme-analytics.example,maya@acme-analytics.example,UK team; Dynamics interest
Northwind Traders,https://northwind.example,sales@northwind.example,Needs ERP; finance ops
Contoso Finance,https://contoso.example,hello@contoso.example,Exclude test keyword: DO-NOT-SELL`;

async function takeScreenshot(page, name) {
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(EVIDENCE_DIR, name),
    type: "jpeg",
    quality: 70,
  });
  log(`CAPTURED: ${name}`);
}

(async () => {
  fs.writeFileSync(RUN_LOG, "");
  fs.writeFileSync(BROWSER_LOG, "");

  const browser = await chromium.launch({ headless: true });

  try {
    log("Starting Mobile Session...");
    const mobileContext = await browser.newContext(devices["iPhone 13"]);
    const page = await mobileContext.newPage();
    page.on("console", (msg) =>
      fs.appendFileSync(BROWSER_LOG, `[MOBILE] ${msg.text()}\n`),
    );

    log(`Navigating to ${URL}`);
    await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });

    // 1. Home
    await takeScreenshot(page, "01_home_mobile.jpg");

    // 2. Input
    log("Going to Score page...");
    await page.click('text="Score"');
    await page.fill('[data-testid="lead-input-textarea"]', MESSY_TEXT);
    await takeScreenshot(page, "02_scoreleads_input_mobile.jpg");

    // 3. Results Overview
    log("Scoring...");
    await page.click('[data-testid="score-leads-button"]');
    await page.waitForSelector('text="Analysis Results"', { timeout: 30000 });
    await takeScreenshot(page, "03_results_overview_mobile.jpg");

    // 4. Results Scrolled (Alternative for Breakdown)
    log("Scrolling results...");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await takeScreenshot(page, "04_results_scrolled_mobile.jpg");

    // 5. Export Controls
    log("Checking Export controls...");
    await page.waitForSelector('[data-testid="export-csv-button"]');
    await takeScreenshot(page, "05_export_controls_mobile.jpg");

    // 6. History List
    log("Going to History...");
    await page.click('text="History"');
    await page.waitForSelector('[data-testid="history-item"]', {
      timeout: 10000,
    });
    await takeScreenshot(page, "06_history_list_mobile.jpg");

    // 7. History Reopen
    log("Reopening Run...");
    await page.click('[data-testid="history-item"]:first-child');
    await page.waitForSelector('text="Analysis Results"', { timeout: 10000 });
    await takeScreenshot(page, "07_history_reopen_mobile.jpg");

    // 8. Profile Top
    log("Going to Profile...");
    await page.click('text="Profile"');
    await page.waitForSelector('text="My Profile"', { timeout: 10000 });
    await takeScreenshot(page, "08_profile_builder_mobile.jpg");

    // 9. Profile Suggestions
    log("Showing Profile Suggestions area...");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await takeScreenshot(page, "09_profile_suggestions_mobile.jpg");

    await mobileContext.close();

    log("Starting Desktop Session...");
    const desktopContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const dpage = await desktopContext.newPage();
    await dpage.goto(URL, { waitUntil: "networkidle" });
    await takeScreenshot(dpage, "10_desktop_overview.jpg");
    await desktopContext.close();
  } catch (err) {
    log(`ERROR: ${err.message}`);
  } finally {
    await browser.close();
    log("FINISHED");
  }
})();
