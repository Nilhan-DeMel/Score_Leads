/**
 * Extracts URLs and domains from text using regex.
 * Handles http, https, and www.
 */
export function extractUrls(text: string): string[] {
  const urlRegex = /(https?:\/\/[^\s/$.?#].[^\s]*)|(www\.[^\s/$.?#].[^\s]*)/gi;
  const matches = text.match(urlRegex);
  return matches ? [...new Set(matches.map((m) => m.trim()))] : [];
}
