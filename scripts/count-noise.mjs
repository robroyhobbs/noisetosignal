#!/usr/bin/env node
/**
 * Fetches RSS feeds and outputs noise_count for GitHub Actions.
 * Writes: noise_count=<number> to stdout (captured as step output).
 */

import https from "https";

const RSS_FEEDS = [
  "https://techcrunch.com/feed/",
  "https://www.producthunt.com/feed",
  "https://hnrss.org/frontpage",
  "https://www.theinformation.com/feed",
];

function fetchCount(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 6000 }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve((data.match(/<item>/g) || []).length));
    });
    req.on("error", () => resolve(0));
    req.on("timeout", () => { req.destroy(); resolve(0); });
  });
}

const counts = await Promise.all(RSS_FEEDS.map(fetchCount));
const total = counts.reduce((a, b) => a + b, 0);
const estimated = Math.round(total * 4.2 + Math.floor(Math.random() * 80));

// GitHub Actions output format
console.log(`noise_count=${estimated}`);
