import type { ScoreSignal } from "../types";

export function scoreWebsitePresence(
  website: string | undefined,
): ScoreSignal | null {
  if (!website) return null;

  return {
    id: "presence-website",
    label: "Website Found",
    points: 10,
    maxPoints: 10,
    confidence: 1.0,
    evidence: `Verified website: ${website}`,
  };
}
