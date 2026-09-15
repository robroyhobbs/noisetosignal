import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
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
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header
        weekOf={current.weekOf}
        ratio={current.ratio}
        noiseCount={current.noiseCount}
      />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ marginBottom: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
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
            ← All topics
          </Link>
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
            Current issue
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

        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: cat.text,
            marginBottom: 8,
            fontWeight: 700,
          }}
        >
          Topic hub
        </p>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: "var(--text-primary)",
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
          }}
        >
          {topic.title} signal
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-sec)",
            lineHeight: 1.65,
            maxWidth: 720,
            marginBottom: 28,
          }}
        >
          {topic.definition}
        </p>

        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 16px",
            letterSpacing: "-0.01em",
          }}
        >
          Recent signal
        </h2>

        {signals.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
            No curated items in this category yet. Check back on the next issue.
          </p>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              marginBottom: 40,
            }}
          >
            {signals.map((item) => (
              <a
                key={`${item.weekOf}-${item.id}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderLeft: `3px solid ${cat.text}`,
                  padding: "18px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                    marginBottom: 6,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Week of {formatWeek(item.weekOf)} · {item.source}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text-sec)",
                    lineHeight: 1.55,
                    borderLeft: `1px solid ${cat.border}`,
                    paddingLeft: 12,
                  }}
                >
                  <span
                    style={{
                      color: cat.text,
                      fontWeight: 700,
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
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
          <div style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "0 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
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
                  style={{
                    display: "block",
                    textDecoration: "none",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderLeft: `3px solid ${cat.text}`,
                    borderRadius: 4,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 6,
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text-sec)",
                      lineHeight: 1.45,
                    }}
                  >
                    {c.blurb}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>
              <Link
                href="/concepts"
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                All concepts →
              </Link>
            </div>
          </div>
        )}

        <div
          style={{
            background: cat.bg,
            border: `1px solid ${cat.border}`,
            borderRadius: 6,
            padding: "28px 24px",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
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
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "12px 22px",
              borderRadius: 4,
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
                style={{
                  fontSize: 12,
                  color: CATEGORY_COLORS[t.slug].text,
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {t.title}
              </Link>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
