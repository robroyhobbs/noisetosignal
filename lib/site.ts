/** Preferred public host. Must match the final URL after Vercel redirects (currently www). */
export const SITE_URL = "https://www.founderratio.com";

/**
 * Meta description from longer copy: whole sentences up to `max` chars,
 * falling back to a word-boundary cut with an ellipsis. Avoids mid-word slices.
 */
export function metaDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const head = text.slice(0, max);
  const lastStop = Math.max(head.lastIndexOf(". "), head.lastIndexOf("? "), head.lastIndexOf("! "));
  if (lastStop >= 90) return head.slice(0, lastStop + 1);
  if (/[.?!]$/.test(head)) return head;
  const lastSpace = head.lastIndexOf(" ", max - 1);
  return `${head.slice(0, lastSpace > 0 ? lastSpace : max - 1).replace(/[,;:]$/, "")}…`;
}

export function absoluteUrl(path: string = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
