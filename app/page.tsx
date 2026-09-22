import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import {
  getCurrentWeek,
  getRatioHistory,
  weeks,
  getCurrentDilemma,
} from "@/lib/data";
import { getNewestDilemma } from "@/lib/dilemmas";
import { SiteShell } from "./components/SiteShell";
import { HeroExplainer } from "./components/HeroExplainer";
import { WeekRatioLine } from "./components/WeekRatioLine";
import { WeeklySignal } from "./components/WeeklySignal";
import { ExploreDoors } from "./components/ExploreDoors";
import { NoiseIndex } from "./components/NoiseIndex";
import { NoiseExamples } from "./components/NoiseExamples";
import { WeeklyDilemma } from "./components/WeeklyDilemma";
import { ContrastSection } from "./components/ContrastSection";
import { InTheRoom } from "./components/InTheRoom";

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { url: absoluteUrl("/") },
};

export const revalidate = 3600;

export default function Home() {
  const current = getCurrentWeek();
  const history = getRatioHistory();
  const previous = weeks[1] ?? weeks[0];
  const dilemma = getNewestDilemma() ?? getCurrentDilemma();

  return (
    <SiteShell weekOf={current.weekOf} ratio={current.ratio}>
      {/* Above the fold: plain English → calm ratio → 5 picks → doors */}
      <HeroExplainer />
      <WeekRatioLine
        ratio={current.ratio}
        weekOf={current.weekOf}
        note={current.note}
      />
      <WeeklySignal items={current.signal} />
      <ExploreDoors />

      {/* Below the fold */}
      <NoiseIndex
        currentRatio={current.ratio}
        previousRatio={previous.ratio}
        noiseCount={current.noiseCount}
        signalCount={current.signalCount}
        note={current.note}
        weekOf={current.weekOf}
        history={history}
      />
      <NoiseExamples examples={current.noise} />
      <WeeklyDilemma dilemma={dilemma} />
      <ContrastSection />
      <InTheRoom weekOf={current.weekOf} />
    </SiteShell>
  );
}
