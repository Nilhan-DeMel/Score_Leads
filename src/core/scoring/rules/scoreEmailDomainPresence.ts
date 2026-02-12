import type { ScoreSignal } from "../types";

export function scoreEmailDomainPresence(
  domain: string | undefined,
): ScoreSignal | null {
  if (!domain) return null;

  return {
    id: "presence-domain",
    label: "Domain Extracted",
    points: 5,
    maxPoints: 5,
    confidence: 1.0,
    evidence: `Identified domain: ${domain}`,
  };
}
