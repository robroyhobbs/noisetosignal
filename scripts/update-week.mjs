#!/usr/bin/env node
/**
 * Weekly update script for Noise-to-Signal
 * Run every Monday: node scripts/update-week.mjs
 *
 * What it does:
 *   1. Fetches RSS feeds and counts posts from the past 7 days (noise count)
 *   2. Prompts you for 5 signal picks interactively
 *   3. Generates the new week object and prepends it to lib/data.ts
 */

import { createInterface } from "readline";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import https from "https";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, "../lib/data.ts");

// RSS feeds to count (noise sources)
const RSS_FEEDS = [
  { name: "TechCrunch", url: "https://techcrunch.com/feed/" },
  { name: "Product Hunt", url: "https://www.producthunt.com/feed" },
  { name: "Hacker News", url: "https://hnrss.org/frontpage" },
  { name: "The Information", url: "https://www.theinformation.com/feed" },
];

const CATEGORIES = ["fundraising", "hiring", "product", "leadership", "market"];

// ── helpers ──────────────────────────────────────────────────────────────────

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function fetchRSS(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 5000 }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        const matches = data.match(/<item>/g) || [];
        resolve(matches.length);
      });
    });
    req.on("error", () => resolve(0));
    req.on("timeout", () => { req.destroy(); resolve(0); });
  });
}

function getMondayISO() {
  const now = new Date();
  const day = now.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diff);
  return monday.toISOString().split("T")[0];
}

function getWeekId(weekOf) {
  return `w${weekOf.replace(/-/g, "")}`;
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  console.log("\n\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m");
  console.log("\x1b[1m  NOISE-TO-SIGNAL — Weekly Update Script\x1b[0m");
  console.log("\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n");

  const weekOf = getMondayISO();
  console.log(`\x1b[90mWeek of: ${weekOf}\x1b[0m\n`);

  // Step 1: Count noise from RSS
  console.log("Counting noise from RSS feeds...\n");
  let totalNoise = 0;
  for (const feed of RSS_FEEDS) {
    process.stdout.write(`  ${feed.name}... `);
    const count = await fetchRSS(feed.url);
    totalNoise += count;
    console.log(`\x1b[33m${count} posts\x1b[0m`);
  }

  // Add a realistic multiplier (RSS only captures a fraction of total posts)
  const estimatedTotal = Math.round(totalNoise * 4.2 + Math.floor(Math.random() * 80));
  console.log(`\n  Estimated total (with multiplier): \x1b[31m${estimatedTotal}\x1b[0m posts\n`);

  const noiseOverride = await ask(rl, `  Use ${estimatedTotal} as noise count? (enter to confirm, or type a number): `);
  const noiseCount = noiseOverride.trim() ? parseInt(noiseOverride.trim()) : estimatedTotal;

  // Step 2: Load previous ratio to calculate new one
  const dataFile = readFileSync(DATA_FILE, "utf8");
  const prevRatioMatch = dataFile.match(/ratio:\s*([\d.]+)/);
  const prevRatio = prevRatioMatch ? parseFloat(prevRatioMatch[1]) : 240;
  const newRatio = parseFloat((noiseCount / 5).toFixed(1));
  const change = (((newRatio - prevRatio) / prevRatio) * 100).toFixed(1);

  console.log(`\n  New ratio: \x1b[31m${newRatio}\x1b[0m (${change > 0 ? "+" : ""}${change}% vs last week)\n`);

  // Step 3: Week note
  const weekNote = await ask(rl, "  Week note (one line summary of noise theme this week):\n  > ");

  // Step 4: Collect 5 signal picks
  console.log("\n\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m");
  console.log("\x1b[1m  Signal picks (5 items)\x1b[0m");
  console.log("\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n");
  console.log(`  Categories: ${CATEGORIES.join(", ")}\n`);

  const signal = [];
  for (let i = 0; i < 5; i++) {
    console.log(`\x1b[1m  Pick ${i + 1} of 5\x1b[0m`);
    const title = await ask(rl, "    Title: ");
    const url = await ask(rl, "    URL: ");
    const source = await ask(rl, "    Source (publication name): ");
    const whyItMatters = await ask(rl, "    Why it matters (1-2 sentences): ");
    const catInput = await ask(rl, `    Category (${CATEGORIES.join("/")}): `);
    const category = CATEGORIES.includes(catInput.trim()) ? catInput.trim() : "market";

    const weekNum = weekOf.replace(/-/g, "").slice(2);
    signal.push({ id: `s${weekNum}-${i + 1}`, title, url, source, whyItMatters, category, position: i + 1 });
    console.log();
  }

  // Step 5: Collect 3 noise picks
  console.log("\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m");
  console.log("\x1b[1m  Noise picks (3 examples)\x1b[0m");
  console.log("\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n");

  const noise = [];
  for (let i = 0; i < 3; i++) {
    console.log(`\x1b[1m  Noise ${i + 1} of 3\x1b[0m`);
    const title = await ask(rl, "    Headline (in quotes): ");
    const source = await ask(rl, "    Platform (LinkedIn/Medium/Substack/etc): ");
    const offense = await ask(rl, "    The offense (1-2 sentences, dry): ");
    const weekNum = weekOf.replace(/-/g, "").slice(2);
    noise.push({ id: `n${weekNum}-${i + 1}`, title, url: "#", source, offense });
    console.log();
  }

  // Step 6: Generate and prepend the new week object
  const signalStr = signal.map((s) => `      {
        id: "${s.id}",
        title: "${s.title.replace(/"/g, '\\"')}",
        url: "${s.url}",
        source: "${s.source.replace(/"/g, '\\"')}",
        whyItMatters: "${s.whyItMatters.replace(/"/g, '\\"')}",
        category: "${s.category}",
        position: ${s.position},
      }`).join(",\n");

  const noiseStr = noise.map((n) => `      {
        id: "${n.id}",
        title: "${n.title.replace(/"/g, '\\"')}",
        url: "#",
        source: "${n.source.replace(/"/g, '\\"')}",
        offense: "${n.offense.replace(/"/g, '\\"')}",
      }`).join(",\n");

  const newWeekBlock = `  {
    weekOf: "${weekOf}",
    noiseCount: ${noiseCount},
    signalCount: 5,
    ratio: ${newRatio},
    note: "${weekNote.replace(/"/g, '\\"')}",
    signal: [
${signalStr}
    ],
    noise: [
${noiseStr}
    ],
  },
`;

  const updated = dataFile.replace(
    "export const weeks: NoiseWeek[] = [",
    `export const weeks: NoiseWeek[] = [\n${newWeekBlock}`
  );

  writeFileSync(DATA_FILE, updated, "utf8");

  console.log("\x1b[32m\n✓ Week added to lib/data.ts\x1b[0m");
  console.log("\x1b[90m\nNext steps:\x1b[0m");
  console.log("  git add lib/data.ts && git commit -m \"Add week of " + weekOf + "\" && git push");
  console.log("  (Vercel will auto-deploy)\n");

  rl.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
