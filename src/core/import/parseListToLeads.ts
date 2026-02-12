import type { ImportResult } from "./types";

/**
 * Parses a simple newline/delimiter list.
 */
export function parseListToLeads(listText: string): ImportResult {
  const lines = listText
    .split(/[\n\r,;]/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  return {
    rowsParsed: lines.length,
    leads: lines.map((l) => ({ text: l })),
    warnings: [],
  };
}
