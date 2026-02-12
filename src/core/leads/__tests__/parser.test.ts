import { describe, it, expect } from "vitest";
import { parseLeadText } from "../parseLeadText";

describe("Lead Parser v1", () => {
  it("should extract leads from messy text", () => {
    const text = `
      Hey, I met Sarah from TechnoSoft (technosoft.io) at the conference.
      Also check out megacorp.com and innovate@futurelab.com.
      Wayne Enterprises might be a good fit too: https://www.wayneent.com/contact
    `;
    const result = parseLeadText(text);

    expect(result.leads.length).toBe(4);

    const domains = result.leads.map((l) => l.domain).sort();
    expect(domains).toEqual([
      "futurelab.com",
      "megacorp.com",
      "technosoft.io",
      "wayneent.com",
    ]);
  });

  it("should dedupe leads correctly and prefer higher confidence", () => {
    const text = `
      Check out acme.com.
      You can also reach them at sales@acme.com or visit http://www.acme.com
    `;
    const result = parseLeadText(text);

    expect(result.leads.length).toBe(1);
    expect(result.leads[0].domain).toBe("acme.com");
    expect(result.leads[0].confidence).toBe(1.0); // preferred URL over bare domain
  });

  it("should handle complex TLDs correctly using tldts", () => {
    const text = "contact info@acme.co.uk and visit bbc.co.uk";
    const result = parseLeadText(text);

    expect(result.leads.map((l) => l.domain)).toContain("acme.co.uk");
    expect(result.leads.map((l) => l.domain)).toContain("bbc.co.uk");
  });

  it("should guess company names correctly", () => {
    const text = "acme-corp.com and BIG-TECH.net";
    const result = parseLeadText(text);

    const acme = result.leads.find((l) => l.domain === "acme-corp.com");
    const bigtech = result.leads.find((l) => l.domain === "big-tech.net");

    expect(acme?.name).toBe("Acme Corp");
    expect(bigtech?.name).toBe("Big Tech");
  });

  it("should handle empty or no-match input gracefully", () => {
    const result = parseLeadText("just some random text without leads");
    expect(result.leads.length).toBe(0);
    expect(result.stats.total_found).toBe(0);
  });
});
