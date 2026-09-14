import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentWeek } from "@/lib/data";
import { concepts } from "@/lib/concepts";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Concepts",
  description:
    "Founder Ratio concept pages — short operator definitions for SAFE, liquidation preference, runway, founder-led sales, and more. Links out to FounderNexus Startup Bible.",
  alternates: { canonical: "https://founderratio.com/concepts" },
};

const TOPIC_COLORS: Record<string, string> = {
  fundraising: "#a78bfa",
  hiring: "#34d399",
  product: "#60a5fa",
  leadership: "#f59e0b",
  market: "#f472b6",
};

export default function ConceptsIndex() {
  const current = getCurrentWeek();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header
        weekOf={current.weekOf}
        ratio={current.ratio}
        noiseCount={current.noiseCount}
      />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 8,
          }}
        >
          Operator definitions
        </p>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Concepts
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--text-sec)",
            maxWidth: 640,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          Thin pages for terms venture-backed founders hit this week. Short
          Founder Ratio definitions — then out to FounderNexus Startup Bible
          playbooks when you need the full doctrine. We do not republish Bible
          bodies here.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {concepts.map((concept) => {
            const accent =
              TOPIC_COLORS[concept.relatedTopics[0] ?? "fundraising"] ??
              "#a78bfa";
            return (
              <Link
                key={concept.slug}
                href={`/concepts/${concept.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderLeft: `3px solid ${accent}`,
                  borderRadius: 4,
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: accent,
                    marginBottom: 8,
                  }}
                >
                  {concept.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--text-primary)",
                    lineHeight: 1.5,
                    marginBottom: 12,
                  }}
                >
                  {concept.blurb}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  Read concept →
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ← Current issue
          </Link>
          <Link
            href="/topics"
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Topics
          </Link>
          <Link
            href="/archive"
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Archive
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
