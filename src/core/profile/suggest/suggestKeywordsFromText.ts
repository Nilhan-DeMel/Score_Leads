/**
 * Simple offline utility to suggest keywords from text.
 * Tokenizes, removes common stopwords, and returns top candidates.
 */
export function suggestKeywordsFromText(
  text: string,
  limit: number = 10,
): string[] {
  if (!text) return [];

  const stopwords = new Set([
    "the",
    "and",
    "a",
    "of",
    "to",
    "in",
    "is",
    "it",
    "with",
    "for",
    "on",
    "as",
    "at",
    "by",
    "an",
    "be",
    "this",
    "that",
    "from",
    "or",
    "are",
    "we",
    "our",
    "your",
    "us",
    "can",
    "will",
    "about",
    "more",
    "has",
    "have",
    "all",
    "any",
    "been",
    "was",
    "were",
    "if",
  ]);

  // Basic tokenization
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((t) => t.length > 3 && !stopwords.has(t));

  const counts: Record<string, number> = {};
  tokens.forEach((t) => {
    counts[t] = (counts[t] || 0) + 1;
  });

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map((entry) => entry[0]);
}
