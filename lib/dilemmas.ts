import fs from "fs";
import path from "path";

export type FetchedDilemma = {
  id: string;
  title: string;
  stage_label: string;
  situation: string;
  options: string[];
  what_mattered: string[];
  source_url?: string;
  source_date?: string;
};

const DIR = path.join(process.cwd(), "data", ".fetched-dilemmas");

export function getFetchedDilemmas(): FetchedDilemma[] {
  if (!fs.existsSync(DIR)) return [];
  const files = fs.readdirSync(DIR).filter((f) => f.startsWith("dilemma-") && f.endsWith(".json"));
  const rows: FetchedDilemma[] = [];
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as FetchedDilemma;
    if (!data.id) throw new Error(`${f} missing id`);
    rows.push({
      ...data,
      options: Array.isArray(data.options) ? data.options : [],
      what_mattered: Array.isArray(data.what_mattered) ? data.what_mattered : [],
    });
  }
  rows.sort((a, b) => {
    const da = a.source_date || "";
    const db = b.source_date || "";
    if (da !== db) return db.localeCompare(da);
    return b.id.localeCompare(a.id);
  });
  return rows;
}

export function getNewestDilemma(): FetchedDilemma | null {
  return getFetchedDilemmas()[0] ?? null;
}
