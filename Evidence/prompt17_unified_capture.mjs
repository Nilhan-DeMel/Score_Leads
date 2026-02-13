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

async function takeScreenshot(page, name) {
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(EVIDENCE_DIR, name),
    type: "jpeg",
    quality: 70,
  });
  log(`CAPTURED: ${name}`);
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  try {
    log("Unified Run (Populate + Capture 7-10)...");
    const mobileContext = await browser.newContext(devices["iPhone 13"]);
    const page = await mobileContext.newPage();
    await page.goto(URL, { waitUntil: "networkidle" });

    // Ensure we have a run
    log("Scoring a lead to create history...");
    await page.click('text="Score"');
    await page.fill('[data-testid="lead-input-textarea"]', MESSY_TEXT);
    await page.click('[data-testid="score-leads-button"]');
    await page.waitForSelector('text="Analysis Results"', { timeout: 30000 });

    // 7. History Reopen
    log("Going to History...");
    await page.click('text="History"');
    await page.waitForSelector('[data-testid="history-item"]', {
      timeout: 10000,
    });
    await page.click('[data-testid="history-item"]:first-child');
    await Promise.race([
      page.waitForSelector('text="Historical Run"'),
      page.waitForSelector('text="Analysis Results"'),
    ]);
    await takeScreenshot(page, "07_history_reopen_mobile.jpg");

    // 8. Profile
    log("Going to Profile...");
    await page.click('text="Profile"');
    await page.waitForSelector('text="My Profile"', { timeout: 10000 });
    await takeScreenshot(page, "08_profile_builder_mobile.jpg");

    // 9. Suggestions
    log("Scrolling to suggestions...");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await takeScreenshot(page, "09_profile_suggestions_mobile.jpg");

    await mobileContext.close();

    // 10. Desktop
    log("Starting Desktop context...");
    const desktopContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const dpage = await desktopContext.newPage();
    await dpage.goto(URL + "/score", { waitUntil: "networkidle" });
    await takeScreenshot(dpage, "10_desktop_overview.jpg");
    await desktopContext.close();
  } catch (err) {
    log(`ERROR: ${err.message}`);
  } finally {
    await browser.close();
    log("FINISHED UNIFIED RUN");
  }
})();
