import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { getCurrentWeek } from "@/lib/data";
import { topics, getSignalsForTopic } from "@/lib/topics";
import { SiteShell } from "../components/SiteShell";
import { PageHeader } from "../components/PageHeader";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Topics",
  description:
    "Fundraising, hiring, product, leadership, and market signal hubs.",
  alternates: { canonical: absoluteUrl("/topics") },
  openGraph: { url: absoluteUrl("/topics") },
};

const CATEGORY_COLORS: Record<string, string> = {
  fundraising: "#a78bfa",
  hiring: "#34d399",
  product: "#60a5fa",
  leadership: "#f59e0b",
  market: "#f472b6",
};

export default function TopicsIndex() {
  const current = getCurrentWeek();

  return (
    <SiteShell weekOf={current.weekOf} ratio={current.ratio}>
      <div className="shell" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <PageHeader
          eyebrow="Signal by category"
          title="Topics"
          lede="Five hubs of recent decision-changing picks. Open a hub for the latest signal and related concepts."
          crumbs={[{ href: "/", label: "← Current issue" }]}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {topics.map((topic) => {
            const count = getSignalsForTopic(topic.slug, 50).length;
            const color = CATEGORY_COLORS[topic.slug];
            return (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="door-card"
                style={{ borderLeft: `3px solid ${color}` }}
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
                  {topic.title}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "var(--text-sec)",
                    lineHeight: 1.5,
                    marginBottom: 14,
                  }}
                >
                  {topic.blurb}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color }}>
                  {count} recent pick{count === 1 ? "" : "s"} →
                </div>
              </Link>
            );
          })}
        </div>

        <div
          style={{ marginTop: 40, display: "flex", gap: 20, flexWrap: "wrap" }}
        >
          <Link href="/concepts" className="quiet-link">
            Concepts
          </Link>
          <Link href="/archive" className="quiet-link">
            Archive
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
