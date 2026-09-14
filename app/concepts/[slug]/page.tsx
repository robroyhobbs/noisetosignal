import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentWeek } from "@/lib/data";
import {
  concepts,
  getConcept,
  conceptSlugs,
  applyConceptCtaUrl,
} from "@/lib/concepts";
import { getTopic } from "@/lib/topics";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const revalidate = 3600;

const TOPIC_COLORS: Record<
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
  return conceptSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return { title: "Concept" };
  return {
    title: concept.title,
    description: concept.definition.slice(0, 160),
    alternates: {
      canonical: `https://founderratio.com/concepts/${concept.slug}`,
    },
  };
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  const current = getCurrentWeek();
  const primaryTopic = concept.relatedTopics[0] ?? "fundraising";
  const cat = TOPIC_COLORS[primaryTopic] ?? TOPIC_COLORS.fundraising;
  const cta = applyConceptCtaUrl(concept.slug);
  const related = concepts
    .filter((c) => c.slug !== concept.slug)
    .filter((c) =>
      c.relatedTopics.some((t) => concept.relatedTopics.includes(t))
    )
    .slice(0, 3);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header
        weekOf={current.weekOf}
        ratio={current.ratio}
        noiseCount={current.noiseCount}
      />

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ marginBottom: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link
            href="/concepts"
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ← All concepts
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
          Concept
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
          {concept.title}
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-sec)",
            lineHeight: 1.65,
            marginBottom: 32,
          }}
        >
          {concept.definition}
        </p>

        <h2
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 14px",
            letterSpacing: "-0.01em",
          }}
        >
          Where founders get this wrong
        </h2>
        <ul
          style={{
            margin: "0 0 36px",
            paddingLeft: 18,
            color: "var(--text-sec)",
            fontSize: 14,
            lineHeight: 1.65,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {concept.wrong.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {concept.bibleLinks.length > 0 && (
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "16px 20px",
              marginBottom: 28,
            }}
          >
            <div
              className="eyebrow"
              style={{ marginBottom: 8, color: "var(--text-muted)" }}
            >
              Go deeper · FounderNexus Startup Bible
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-sec)",
                lineHeight: 1.6,
                margin: "0 0 12px",
              }}
            >
              Playbooks from the room — we link out.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {concept.bibleLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: cat.text,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: 36 }}>
          <div
            className="eyebrow"
            style={{ marginBottom: 10, color: "var(--text-muted)" }}
          >
            Related topic hubs
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {concept.relatedTopics.map((slug) => {
              const topic = getTopic(slug);
              const color = TOPIC_COLORS[slug]?.text ?? cat.text;
              return (
                <Link
                  key={slug}
                  href={`/topics/${slug}`}
                  style={{
                    fontSize: 12,
                    color,
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {topic?.title ?? slug} →
                </Link>
              );
            })}
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            <div
              className="eyebrow"
              style={{ marginBottom: 10, color: "var(--text-muted)" }}
            >
              Related concepts
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/concepts/${c.slug}`}
                  style={{
                    fontSize: 13,
                    color: "var(--text-sec)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {c.title}
                </Link>
              ))}
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
            Definitions filter the feed. The room is FounderNexus — apply if you
            are building at venture scale and want operators over noise.
          </p>
          <a
            href={cta}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
