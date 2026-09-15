import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getBenchmarkPages } from "@/lib/benchmarks";
import { getCurrentWeek } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Benchmarks",
  description: "Benchmark pages rendered from foundernexus/fn-content.",
  alternates: { canonical: absoluteUrl("/benchmarks") },
  robots: { index: true, follow: true },
};

export default function BenchmarksIndex() {
  const pages = getBenchmarkPages();
  const week = getCurrentWeek();
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header weekOf={week.weekOf} ratio={week.ratio} noiseCount={week.noiseCount} />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ fontSize: 32, color: "var(--text-primary)" }}>Benchmarks</h1>
        <p style={{ color: "var(--text-sec)", marginTop: 12 }}>
          One page per JSON file in fn-content/renders/founderratio.
        </p>
        {pages.length === 0 ? (
          <p style={{ marginTop: 32, color: "var(--text-muted)" }}>
            No benchmark pages from fn-content yet.
          </p>
        ) : (
          <ul style={{ marginTop: 32, padding: 0, listStyle: "none" }}>
            {pages.map((p) => (
              <li key={p.slug} style={{ marginBottom: 16 }}>
                <Link href={`/benchmarks/${p.slug}`} style={{ color: "var(--text-primary)" }}>
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
