import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { getCurrentWeek, getRatioHistory, weeks, getCurrentDilemma } from "@/lib/data";
import { Header } from "./components/Header";
import { HeroExplainer } from "./components/HeroExplainer";
import { NoiseIndex } from "./components/NoiseIndex";
import { WeeklySignal } from "./components/WeeklySignal";
import { NoiseExamples } from "./components/NoiseExamples";
// Demoted from homepage for first-time clarity (components remain in repo):
// import { NoiseArchetypes } from "./components/NoiseArchetypes";
// import { NoiseLeaderboard } from "./components/NoiseLeaderboard";
// import { HonestBenchmarks } from "./components/HonestBenchmarks";
import { WeeklyDilemma } from "./components/WeeklyDilemma";
import { ContrastSection } from "./components/ContrastSection";
import { InTheRoom } from "./components/InTheRoom";
// NewsletterForm hidden until subscribe is wired — do not delete the component.
import { Footer } from "./components/Footer";


export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { url: absoluteUrl("/") },
};

export const revalidate = 3600;

export default function Home() {
  const current = getCurrentWeek();
  const history = getRatioHistory();
  const previous = weeks[1] ?? weeks[0];
  const dilemma = getCurrentDilemma();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header
        weekOf={current.weekOf}
        ratio={current.ratio}
        noiseCount={current.noiseCount}
      />
      <HeroExplainer />
      <main>
        <NoiseIndex
          currentRatio={current.ratio}
          previousRatio={previous.ratio}
          noiseCount={current.noiseCount}
          signalCount={current.signalCount}
          note={current.note}
          weekOf={current.weekOf}
          history={history}
        />
        <WeeklySignal items={current.signal} />
        <NoiseExamples examples={current.noise} />
        <WeeklyDilemma dilemma={dilemma} />
        <ContrastSection />
        <InTheRoom weekOf={current.weekOf} />
      </main>
      <Footer />
    </div>
  );
}