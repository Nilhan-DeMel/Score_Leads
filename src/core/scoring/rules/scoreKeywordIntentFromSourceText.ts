import type { ScoreSignal, ScoringConfig } from "../types";

/**
 * Scores intent based on keywords in lead text.
 */
export function scoreKeywordIntentFromSourceText(
  text: string,
  config: ScoringConfig,
): ScoreSignal[] {
  const signals: ScoreSignal[] = [];
  const lowerText = text.toLowerCase();

  // High intent
  config.intentKeywords.high.forEach((kw) => {
    if (lowerText.includes(kw.toLowerCase())) {
      signals.push({
        id: `intent-high-${kw}`,
        label: `High Intent: ${kw}`,
        points: 20,
        maxPoints: 20,
        confidence: 0.9,
        evidence: `Found keyword "${kw}" in source text.`,
      });
    }
  });

  // Medium intent
  config.intentKeywords.medium.forEach((kw) => {
    if (lowerText.includes(kw.toLowerCase())) {
      signals.push({
        id: `intent-medium-${kw}`,
        label: `Interest: ${kw}`,
        points: 10,
        maxPoints: 10,
        confidence: 0.8,
        evidence: `Found keyword "${kw}" in source text.`,
      });
    }
  });

  return signals;
}
