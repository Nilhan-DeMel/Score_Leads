import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";

const EVIDENCE_DIR = "D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence";
const URL = "https://score-leads.vercel.app";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices["iPhone 13"]);
  const page = await context.newPage();

  console.log(`Navigating to Production ${URL} with clean cache...`);
  await page.goto(URL, { waitUntil: "load", timeout: 30000 });

  // Evaluate more deeply
  const diagnostics = await page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    const htmlStyle = window.getComputedStyle(html);
    const bodyStyle = window.getComputedStyle(body);

    // Find the injected stylesheet
    const styles = Array.from(document.styleSheets).map((s) => {
      try {
        return s.href;
      } catch (e) {
        return "inline";
      }
    });

    return {
      htmlBg: htmlStyle.backgroundColor,
      bodyBg: bodyStyle.backgroundColor,
      isDark: html.classList.contains("dark"),
      sheets: styles,
    };
  });

  console.log("Production Diagnostics:", diagnostics);
  fs.writeFileSync(
    path.join(EVIDENCE_DIR, "prompt18_prod_diagnostics.json"),
    JSON.stringify(diagnostics, null, 2),
  );

  await page.screenshot({
    path: path.join(EVIDENCE_DIR, "prompt18_after_mobile_prod.jpg"),
    fullPage: true,
  });

  await browser.close();
  console.log("Finished deep diagnostics.");
})();
