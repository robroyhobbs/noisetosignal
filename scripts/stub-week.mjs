#!/usr/bin/env node
/**
 * Stubs a new week entry into lib/data.ts with placeholder signal items.
 * Called by the GitHub Action with: node scripts/stub-week.mjs <weekOf> <noiseCount> <issueNum>
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, "../lib/data.ts");

const [weekOf, noiseCount, issueNum] = process.argv.slice(2);

if (!weekOf || !noiseCount || !issueNum) {
  console.error("Usage: stub-week.mjs <weekOf> <noiseCount> <issueNum>");
  process.exit(1);
}

const ratio = (parseInt(noiseCount) / 5).toFixed(1);

const signalPlaceholders = Array.from({ length: 5 }, (_, i) => `      {
        id: "s${issueNum}-${i + 1}",
        title: "TODO: Signal pick ${i + 1}",
        url: "https://example.com",
        source: "TODO",
        whyItMatters: "TODO: Why this matters to founders.",
        category: "market",
        position: ${i + 1},
      }`).join(",\n");

const noisePlaceholders = Array.from({ length: 3 }, (_, i) => `      {
        id: "n${issueNum}-${i + 1}",
        title: "TODO: Noise headline ${i + 1}",
        url: "#",
        source: "TODO",
        offense: "TODO: The offense in 1-2 dry sentences.",
      }`).join(",\n");

const newWeekBlock = `  {
    weekOf: "${weekOf}",
    noiseCount: ${noiseCount},
    signalCount: 5,
    ratio: ${ratio},
    note: "TODO: One-line summary of noise theme this week.",
    signal: [
${signalPlaceholders}
    ],
    noise: [
${noisePlaceholders}
    ],
  },
`;

const dataFile = readFileSync(DATA_FILE, "utf8");
const updated = dataFile.replace(
  "export const weeks: NoiseWeek[] = [",
  `export const weeks: NoiseWeek[] = [\n${newWeekBlock}`
);

writeFileSync(DATA_FILE, updated, "utf8");
console.log(`✓ Stubbed week ${weekOf} with noise count ${noiseCount}, ratio ${ratio}`);
