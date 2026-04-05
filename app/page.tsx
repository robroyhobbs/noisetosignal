import { getCurrentWeek, getRatioHistory, weeks, getCurrentDilemma, benchmarks, noiseSources } from "@/lib/data";
import { Header } from "./components/Header";
import { HeroExplainer } from "./components/HeroExplainer";
import { NoiseIndex } from "./components/NoiseIndex";
import { WeeklySignal } from "./components/WeeklySignal";
import { NoiseExamples } from "./components/NoiseExamples";
import { NoiseArchetypes } from "./components/NoiseArchetypes";
import { NoiseLeaderboard } from "./components/NoiseLeaderboard";
import { WeeklyDilemma } from "./components/WeeklyDilemma";
import { HonestBenchmarks } from "./components/HonestBenchmarks";
import { ContrastSection } from "./components/ContrastSection";
import { InTheRoom } from "./components/InTheRoom";
import { NewsletterForm } from "./components/NewsletterForm";
import { Footer } from "./components/Footer";

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
        <NoiseArchetypes />
        <NoiseLeaderboard sources={noiseSources} />
        <WeeklyDilemma dilemma={dilemma} />
        <HonestBenchmarks benchmarks={benchmarks} />
        <ContrastSection />
        <InTheRoom />
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
}

