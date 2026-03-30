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
