import fs from "fs";
import path from "path";

export type BenchmarkPage = {
  id: string;
  slug: string;
  title: string;
  meta_description?: string;
  metric?: string;
  value?: string | number | null;
  unit?: string;
  percentile?: string;
  segment?: string;
  stage_fit?: string[];
  period?: string;
  claim?: string;
  how_to_read?: string;
  source?: { name?: string; url?: string; date?: string };
  last_verified?: string;
  fn_link?: { text: string; href: string };
  schema?: string[];
};

const DIR = path.join(process.cwd(), "data", ".fetched-benchmarks");

export function getBenchmarkPages(): BenchmarkPage[] {
  if (!fs.existsSync(DIR)) return [];
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".json"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(DIR, f), "utf8");
    const data = JSON.parse(raw) as BenchmarkPage;
    if (!data.slug) throw new Error(`${f} missing slug`);
    return data;
  });
}

export function getBenchmark(slug: string): BenchmarkPage | undefined {
  return getBenchmarkPages().find((p) => p.slug === slug);
}
