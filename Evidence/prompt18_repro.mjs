import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";

const EVIDENCE_DIR = "D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence";
const URL = "https://score-leads.vercel.app";
const CSS_LOG = path.join(EVIDENCE_DIR, "prompt18_css_requests_before.csv");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices["iPhone 13"]);
  const page = await context.newPage();

  fs.writeFileSync(CSS_LOG, "url,status,content-type\n");

  page.on("request", (request) => {
    if (
      request.resourceType() === "stylesheet" ||
      request.url().endsWith(".css")
    ) {
      // will log response in 'response' handler
    }
  });

  page.on("response", (response) => {
    const url = response.url();
    if (
      url.includes(".css") ||
      response.request().resourceType() === "stylesheet"
    ) {
      fs.appendFileSync(
        CSS_LOG,
        `"${url}",${response.status()},"${response.headers()["content-type"]}"\n`,
      );
    }
  });

  console.log(`Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: "networkidle" });

  // Capture "Before" Mobile
  await page.screenshot({
    path: path.join(EVIDENCE_DIR, "prompt18_before_mobile.jpg"),
    type: "jpeg",
    quality: 70,
  });

  // In-page checks
  const checks = await page.evaluate(() => {
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    const sheets = document.styleSheets.length;
    const htmlBg = window.getComputedStyle(
      document.documentElement,
    ).backgroundColor;
    return { bgColor, sheets, htmlBg };
  });

  console.log("Checks:", checks);
  fs.writeFileSync(
    path.join(EVIDENCE_DIR, "prompt18_before_checks.json"),
    JSON.stringify(checks, null, 2),
  );

  await context.close();

  // Desktop
  const dContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const dPage = await dContext.newPage();
  await dPage.goto(URL, { waitUntil: "networkidle" });
  await dPage.screenshot({
    path: path.join(EVIDENCE_DIR, "prompt18_before_desktop.jpg"),
    type: "jpeg",
    quality: 70,
  });

  await browser.close();
  console.log("Finished capturing repro receipts.");
})();
