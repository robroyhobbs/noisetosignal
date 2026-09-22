import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { getCurrentWeek } from "@/lib/data";
import { concepts } from "@/lib/concepts";
import { SiteShell } from "../components/SiteShell";
import { PageHeader } from "../components/PageHeader";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Concepts",
  description:
    "Short operator definitions — SAFE, valuation cap, option pool, LTV:CAC, and more.",
  alternates: { canonical: absoluteUrl("/concepts") },
  openGraph: { url: absoluteUrl("/concepts") },
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
    <SiteShell weekOf={current.weekOf} ratio={current.ratio}>
      <div className="shell" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <PageHeader
          eyebrow="Operator definitions"
          title="Concepts"
          lede="Short definitions founders actually use — SAFE, valuation cap, option pool, LTV:CAC, and more."
          crumbs={[{ href: "/", label: "← Current issue" }]}
        />

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
                className="door-card"
                style={{ borderLeft: `3px solid ${accent}` }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
                >
                  {concept.title}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "var(--text-sec)",
                    lineHeight: 1.5,
                    marginBottom: 14,
                  }}
                >
                  {concept.blurb}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: accent }}>
                  Read concept →
                </div>
              </Link>
            );
          })}
        </div>

        <div
          style={{ marginTop: 40, display: "flex", gap: 20, flexWrap: "wrap" }}
        >
          <Link href="/topics" className="quiet-link">
            Topics
          </Link>
          <Link href="/archive" className="quiet-link">
            Archive
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
