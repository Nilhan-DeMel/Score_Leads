import { describe, it, expect } from "vitest";
import { parseCsvToLeads } from "../parseCsvToLeads";
import { parseListToLeads } from "../parseListToLeads";

describe("Import Parsers", () => {
  describe("CSV Parser", () => {
    it("should parse a valid CSV with headers", () => {
      const csv =
        "Company,Website,Email\nAcme,acme.com,info@acme.com\nGlobex,globex.co,hr@globex.co";
      const result = parseCsvToLeads(csv);

      expect(result.leads).toHaveLength(2);
      expect(result.leads[0].text).toBe("acme.com");
      expect(result.leads[0].name).toBe("Acme");
    });

    it("should handle missing values with warnings", () => {
      const csv = "Name,Website\nAcme,acme.com\nMissing,";
      const result = parseCsvToLeads(csv);

      // The second row has "Missing" but empty Website.
      // Our logic should pick Website as leadCol and warn about the second row.
      expect(result.leads).toHaveLength(1);
      expect(result.warnings).toHaveLength(1);
    });

    it("should auto-detect header column", () => {
      const csv = "id,target_domain\n1,google.com\n2,apple.com";
      const result = parseCsvToLeads(csv);
      expect(result.leads[0].text).toBe("google.com");
    });
  });

  describe("List Parser", () => {
    it("should split by newline, comma, or semicolon", () => {
      const list = "acme.com\nglobex.co;umbrella.io,soylent.com";
      const result = parseListToLeads(list);

      expect(result.rowsParsed).toBe(4);
      expect(result.leads.map((l) => l.text)).toEqual([
        "acme.com",
        "globex.co",
        "umbrella.io",
        "soylent.com",
      ]);
    });
  });
});
