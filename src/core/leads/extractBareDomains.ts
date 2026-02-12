/**
 * Heuristic extraction of domain-like strings that aren't preceded by @ or ://
 */
export function extractBareDomains(text: string): string[] {
  // Matches things like google.com, acme-corp.co.uk but avoids being part of email or url
  // Negative lookbehind for @ and ://
  const domainRegex =
    /(?<![@/])\b([a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?)\b/g;
  const matches = text.match(domainRegex);
  return matches
    ? [...new Set(matches.map((m) => m.toLowerCase().trim()))]
    : [];
}
