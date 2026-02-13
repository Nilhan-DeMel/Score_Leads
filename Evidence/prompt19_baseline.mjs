import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";

const EVIDENCE_DIR = "D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence";
const URL = "https://score-leads.vercel.app";
const LOG = path.join(EVIDENCE_DIR, "prompt19_before_run.log");

const log = (msg) => {
  fs.appendFileSync(LOG, `[${new Date().toISOString()}] ${msg}\n`);
  console.log(msg);
};

(async () => {
  fs.writeFileSync(LOG, "");
  const browser = await chromium.launch();

  try {
    log("Capturing Mobile Baseline...");
    const mobileContext = await browser.newContext(devices["iPhone 13"]);
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(URL, { waitUntil: "networkidle" });
    await mobilePage.screenshot({
      path: path.join(EVIDENCE_DIR, "prompt19_before_home_mobile.jpg"),
      type: "jpeg",
      quality: 75,
    });
    await mobileContext.close();

    log("Capturing Desktop Baseline...");
    const desktopContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto(URL, { waitUntil: "networkidle" });
    await desktopPage.screenshot({
      path: path.join(EVIDENCE_DIR, "prompt19_before_home_desktop.jpg"),
      type: "jpeg",
      quality: 75,
    });
    await desktopContext.close();

    log("Baseline capture complete.");
  } catch (err) {
    log(`ERROR: ${err.message}`);
  } finally {
    await browser.close();
  }
})();
