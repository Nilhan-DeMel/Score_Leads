/**
 * v1 Heuristic: Guess company name from domain label.
 * e.g. acme.com -> Acme
 * acme-corp.co.uk -> Acme Corp
 */
export function guessCompanyName(domain: string): string {
  if (!domain) return "Unknown Company";

  // Get the first part (label) before the first dot
  const label = domain.split(".")[0];

  // Replace dashes/underscores with spaces
  const name = label.replace(/[-_]/g, " ");

  // Title Case
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
