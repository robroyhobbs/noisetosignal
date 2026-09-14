/** Preferred public host. Must match the final URL after Vercel redirects (currently www). */
export const SITE_URL = "https://www.founderratio.com";

export function absoluteUrl(path: string = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
