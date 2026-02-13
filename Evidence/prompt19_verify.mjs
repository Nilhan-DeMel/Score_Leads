import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";

const EVIDENCE_DIR = "D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence";
const URL = "http://localhost:4173"; // Preview port
const LOG = path.join(EVIDENCE_DIR, "prompt19_visual_checks.log");

const log = (msg) => {
  fs.appendFileSync(LOG, `[${new Date().toISOString()}] ${msg}\n`);
  console.log(msg);
};

(async () => {
  fs.writeFileSync(LOG, "");
  const browser = await chromium.launch();

  try {
    log("Verifying Local Preview...");
    const mobileContext = await browser.newContext(devices["iPhone 13"]);
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(URL, { waitUntil: "networkidle" });

    // 1. Screenshot After Mobile
    await mobilePage.screenshot({
      path: path.join(EVIDENCE_DIR, "prompt19_after_home_mobile.jpg"),
      type: "jpeg",
      quality: 75,
    });

    // 2. Computed Checks
    const checks = await mobilePage.evaluate(() => {
      const body = window.getComputedStyle(document.body);
      const nav = window.getComputedStyle(
        document.querySelector(".bottom-nav"),
      );
      return {
        bodyBg: body.backgroundColor,
        navPaddingBottom: nav.paddingBottom,
        navMinHeight: nav.minHeight,
      };
    });

    log(`Checks: ${JSON.stringify(checks, null, 2)}`);

    if (checks.bodyBg !== "rgb(10, 10, 11)") {
      log("WARNING: Body background color mismatch!");
    }

    await mobileContext.close();

    log("Capturing Desktop After...");
    const desktopContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto(URL, { waitUntil: "networkidle" });
    await desktopPage.screenshot({
      path: path.join(EVIDENCE_DIR, "prompt19_after_home_desktop.jpg"),
      type: "jpeg",
      quality: 75,
    });
    await desktopContext.close();

    log("After capture complete.");
  } catch (err) {
    log(`ERROR: ${err.message}`);
  } finally {
    await browser.close();
  }
})();
