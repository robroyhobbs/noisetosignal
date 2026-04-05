export type Category =
  | "fundraising"
  | "hiring"
  | "product"
  | "leadership"
  | "market";

export interface SignalItem {
  id: string;
  title: string;
  url: string;
  source: string;
  whyItMatters: string;
  category: Category;
  position: number;
}

export interface NoiseExample {
  id: string;
  title: string;
  url: string;
  source: string;
  offense: string;
}

export interface NoiseWeek {
  weekOf: string; // ISO date string, Monday of the week
  noiseCount: number;
  signalCount: number;
  ratio: number;
  note: string;
  signal: SignalItem[];
  noise: NoiseExample[];
}

export interface Dilemma {
  id: string;
  weekOf: string;
  context: string;
  decision: string;
  stakes: string;
  submittedBy: string; // anonymous role, e.g. "Series A founder, B2B SaaS"
}

export interface BenchmarkStage {
  stage: "Pre-Seed" | "Seed" | "Series A" | "Series B";
  period: string; // e.g. "Q1 2026"
  raised: string;
  arr: string;
  growth: string;
  runway: string;
  teamSize: string;
  note: string;
}

export interface NoiseSource {
  rank: number;
  name: string;
  noiseScore: number; // 0–100
  verdict: string;
  tier: "high" | "medium" | "low"; // high = noisy, low = signal
}
