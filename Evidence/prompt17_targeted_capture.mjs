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
    log("Targeted Run for remaining screenshots (7-10)...");
    const mobileContext = await browser.newContext(devices["iPhone 13"]);
    const page = await mobileContext.newPage();
    await page.goto(URL, { waitUntil: "networkidle" });

    // 7. Reopen History
    log("Going to History...");
    await page.click('text="History"');
    await page.waitForSelector('[data-testid="history-item"]');
    log("Clicking historical run...");
    await page.click('[data-testid="history-item"]:first-child');
    // Wait for EITHER "Historical Run" or "Analysis Results"
    await Promise.race([
      page.waitForSelector('text="Historical Run"'),
      page.waitForSelector('text="Analysis Results"'),
    ]);
    await takeScreenshot(page, "07_history_reopen_mobile.jpg");

    // 8. Profile
    log("Going to Profile...");
    await page.click('text="Profile"');
    await page.waitForSelector('text="My Profile"');
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
    await dpage.goto(URL + "/score", { waitUntil: "networkidle" }); // Go to score page for desktop overview
    await takeScreenshot(dpage, "10_desktop_overview.jpg");
    await desktopContext.close();
  } catch (err) {
    log(`ERROR: ${err.message}`);
  } finally {
    await browser.close();
    log("FINISHED TARGETED RUN");
  }
})();
