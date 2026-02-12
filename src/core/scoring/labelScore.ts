export function labelScore(total: number): string {
  if (total >= 80) return "Hot";
  if (total >= 50) return "Warm";
  return "Cold";
}
