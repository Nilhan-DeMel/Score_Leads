import Papa from "papaparse";
import type { ImportResult, ImportedLead } from "./types";

/**
 * Parses CSV text into imported leads.
 * v1: Auto-detects column for lead text/domain.
 */
export function parseCsvToLeads(csvText: string): ImportResult {
  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: "greedy",
  });

  if (results.errors.length > 0) {
    return {
      rowsParsed: results.data.length,
      leads: [],
      warnings: results.errors.map((e) => `${e.row}: ${e.message}`),
    };
  }

  const data = results.data as Record<string, string>[];
  const leads: ImportedLead[] = [];
  const warnings: string[] = [];

  // Heuristic for finding the primary "lead" column
  const headers = results.meta.fields || [];

  // Prioritize domain/website over name/company
  const leadCol =
    headers.find((h) => /domain|website|site/i.test(h)) ||
    headers.find((h) => /email/i.test(h)) ||
    headers.find((h) => /company|name|lead/i.test(h)) ||
    headers[0];

  data.forEach((row, idx) => {
    const value = row[leadCol]?.trim();
    if (value) {
      leads.push({
        text: value,
        name:
          row["name"] ||
          row["Name"] ||
          row["company"] ||
          row["Company"] ||
          row["Company Name"],
        domain:
          row["domain"] || row["Domain"] || row["website"] || row["Website"],
        email: row["email"] || row["Email"],
      });
    } else {
      // Only warn if the row isn't completely empty (greedy skipped empty but might be sparse)
      if (Object.values(row).some((v) => v?.trim())) {
        warnings.push(
          `Row ${idx + 1}: Missing primary value in column "${leadCol}"`,
        );
      }
    }
  });

  return {
    rowsParsed: data.length,
    leads,
    warnings,
  };
}
