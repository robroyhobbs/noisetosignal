import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/lib/site";
import { getCurrentWeek } from "@/lib/data";
import {
  topics,
  getTopic,
  getSignalsForTopic,
  applyCtaUrl,
  topicSlugs,
} from "@/lib/topics";
import { getConceptsForTopic } from "@/lib/concepts";
import type { Category } from "@/lib/types";
import { SiteShell } from "../../components/SiteShell";
import { PageHeader } from "../../components/PageHeader";
import { FnLink } from "../../components/FnLink";

export const revalidate = 3600;

const CATEGORY_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  fundraising: {
    bg: "rgba(167,139,250,0.08)",
    text: "#a78bfa",
    border: "rgba(167,139,250,0.3)",
  },
  hiring: {
    bg: "rgba(52,211,153,0.08)",
    text: "#34d399",
    border: "rgba(52,211,153,0.3)",
  },
  product: {
    bg: "rgba(96,165,250,0.08)",
    text: "#60a5fa",
    border: "rgba(96,165,250,0.3)",
  },
  leadership: {
    bg: "rgba(245,158,11,0.08)",
    text: "#f59e0b",
    border: "rgba(245,158,11,0.3)",
  },
  market: {
    bg: "rgba(244,114,182,0.08)",
    text: "#f472b6",
    border: "rgba(244,114,182,0.3)",
  },
};

export function generateStaticParams() {
  return topicSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Topic" };
  return {
    title: `${topic.title} signal`,
    description: topic.definition.slice(0, 160),
    alternates: { canonical: absoluteUrl(`/topics/${topic.slug}`) },
    openGraph: { url: absoluteUrl(`/topics/${topic.slug}`) },
  };
}

function formatWeek(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const current = getCurrentWeek();
  const signals = getSignalsForTopic(topic.slug as Category, 15);
  const relatedConcepts = getConceptsForTopic(topic.slug as Category, 5);
  const cat = CATEGORY_COLORS[topic.slug];
  const cta = applyCtaUrl(topic.slug);

  return (
    <SiteShell weekOf={current.weekOf} ratio={current.ratio}>
      <div className="shell" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <PageHeader
          eyebrow="Topic hub"
          title={`${topic.title} signal`}
          lede={topic.definition}
          accent={cat.text}
          crumbs={[
            { href: "/topics", label: "← All topics" },
            { href: "/", label: "Current issue" },
            { href: "/archive", label: "Archive" },
          ]}
        />

        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Recent signal
        </h2>

        {signals.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
            No curated items in this category yet. Check back on the next issue.
          </p>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 40,
            }}
          >
            {signals.map((item) => (
              <a
                key={`${item.weekOf}-${item.id}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="signal-card"
                style={{ borderLeft: `3px solid ${cat.text}` }}
              >
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    marginBottom: 6,
                    fontWeight: 500,
                  }}
                >
                  Week of {formatWeek(item.weekOf)} · {item.source}
                </div>
                <div
                  style={{
                    fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
                    fontWeight: 650,
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    lineHeight: 1.35,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "var(--text-sec)",
                    lineHeight: 1.55,
                    borderLeft: `2px solid ${cat.border}`,
                    paddingLeft: 12,
                  }}
                >
                  <span
                    style={{
                      color: cat.text,
                      fontWeight: 600,
                      fontSize: 13,
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    Why it matters
                  </span>
                  {item.whyItMatters}
                </div>
              </a>
            ))}
          </div>
        )}

        {relatedConcepts.length > 0 && (
          <div style={{ marginBottom: 40 }}>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Related concepts
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 12,
              }}
            >
              {relatedConcepts.map((c) => (
                <Link
                  key={c.slug}
                  href={`/concepts/${c.slug}`}
                  className="door-card"
                  style={{ borderLeft: `3px solid ${cat.text}`, padding: "16px 18px" }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 6,
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-sec)",
                      lineHeight: 1.45,
                    }}
                  >
                    {c.blurb}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 14 }}>
              <Link href="/concepts" className="quiet-link">
                All concepts →
              </Link>
            </div>
          </div>
        )}

        <div
          style={{
            background: cat.bg,
            border: `1px solid ${cat.border}`,
            borderRadius: 8,
            padding: "28px 24px",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: cat.text,
              marginBottom: 10,
            }}
          >
            FounderNexus Apply
          </div>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-primary)",
              maxWidth: 480,
              margin: "0 auto 18px",
              lineHeight: 1.5,
            }}
          >
            Signal is the filter. The room is FounderNexus — apply if you are
            building at venture scale and want operators over feed noise.
          </p>
          <FnLink
            href={cta}
            slug={`topic-${topic.slug}`}
            style={{
              display: "inline-block",
              background: cat.text,
              color: "#0a0a0f",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              padding: "12px 22px",
              borderRadius: 6,
            }}
          >
            Apply to FounderNexus →
          </FnLink>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {topics
            .filter((t) => t.slug !== topic.slug)
            .map((t) => (
              <Link
                key={t.slug}
                href={`/topics/${t.slug}`}
                className="quiet-link"
                style={{ color: CATEGORY_COLORS[t.slug].text, fontWeight: 600 }}
              >
                {t.title}
              </Link>
            ))}
        </div>
      </div>
    </SiteShell>
  );
}
