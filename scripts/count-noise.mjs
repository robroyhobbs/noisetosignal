#!/usr/bin/env node
/**
 * Fetches RSS/Atom feeds and outputs noise_count for GitHub Actions.
 * Uses global fetch (Node 18+) with redirects — no randomness so reruns match.
 * Writes: noise_count=<number> to stdout (captured as step output).
 */

const RSS_FEEDS = [
  "https://techcrunch.com/feed/",
  "https://www.producthunt.com/feed",
  "https://hnrss.org/frontpage",
  "https://www.theinformation.com/feed",
];

function countFeedItems(xml) {
  const items = (xml.match(/<item[\s>]/gi) || []).length;
  const entries = (xml.match(/<entry[\s>]/gi) || []).length;
  return Math.max(items, entries);
}

async function fetchCount(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) return 0;
    const text = await res.text();
    return countFeedItems(text);
  } catch {
    return 0;
  }
}

const counts = await Promise.all(RSS_FEEDS.map(fetchCount));
const total = counts.reduce((a, b) => a + b, 0);
// Deterministic scale from aggregate feed volume (no RNG — same inputs ⇒ same NSI input).
const estimated = Math.max(0, Math.round(total * 4.2));

console.log(`noise_count=${estimated}`);
