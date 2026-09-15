#!/usr/bin/env node
/**
 * Fetch foundernexus/fn-content renders/founderratio JSON files from main.
 * Requires FN_CONTENT_TOKEN. 404 on the directory means zero pages.
 * Exits non-zero on any other failure.
 */
const fs = require("fs");
const path = require("path");

const token = process.env.FN_CONTENT_TOKEN;
if (!token) {
  console.error(
    "FN_CONTENT_TOKEN is required. Fine-grained PAT, foundernexus/fn-content, contents: read."
  );
  process.exit(1);
}

const ROOT = "renders/founderratio";
const outDir = path.join(__dirname, "..", "data", ".fetched-benchmarks");

async function github(pathname, accept) {
  const url = `https://api.github.com/repos/foundernexus/fn-content/contents/${pathname}?ref=main`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: accept,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "founderratio-build",
    },
  });
  return res;
}

async function listJson(dir) {
  const res = await github(dir, "application/vnd.github+json");
  if (res.status === 404) return [];
  if (!res.ok) {
    const body = await res.text();
    console.error(`fetch ${dir} failed: ${res.status} ${body.slice(0, 400)}`);
    process.exit(1);
  }
  const items = await res.json();
  if (!Array.isArray(items)) {
    console.error(`${dir} is not a directory listing`);
    process.exit(1);
  }
  const files = [];
  for (const item of items) {
    if (item.type === "dir" && item.path) {
      files.push(...(await listJson(item.path)));
    } else if (item.name && item.name.endsWith(".json") && item.path) {
      files.push(item);
    }
  }
  return files;
}

async function main() {
  const files = await listJson(ROOT);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  for (const item of files) {
    const res = await github(item.path, "application/vnd.github.raw");
    if (!res.ok) {
      const body = await res.text();
      console.error(`fetch ${item.path} failed: ${res.status} ${body.slice(0, 400)}`);
      process.exit(1);
    }
    const text = await res.text();
    if (!text.trim()) {
      console.error(`${item.path} was empty`);
      process.exit(1);
    }
    JSON.parse(text);
    const dest = path.join(outDir, path.basename(item.path));
    fs.writeFileSync(dest, text);
  }
  console.log(`wrote ${files.length} benchmark JSON file(s) to ${outDir}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
