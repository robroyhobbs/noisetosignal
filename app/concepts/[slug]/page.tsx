import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/lib/site";
import { getCurrentWeek } from "@/lib/data";
import {
  concepts,
  getConcept,
  conceptSlugs,
  applyConceptCtaUrl,
} from "@/lib/concepts";
import { getTopic } from "@/lib/topics";
import { SiteShell } from "../../components/SiteShell";
import { PageHeader } from "../../components/PageHeader";

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
    alternates: { canonical: absoluteUrl(`/concepts/${concept.slug}`) },
    openGraph: { url: absoluteUrl(`/concepts/${concept.slug}`) },
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
    <SiteShell weekOf={current.weekOf} ratio={current.ratio}>
      <div className="shell-read" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <PageHeader
          eyebrow="Concept"
          title={concept.title}
          lede={concept.definition}
          accent={cat.text}
          crumbs={[
            { href: "/concepts", label: "← All concepts" },
            { href: "/topics", label: "Topics" },
            { href: "/", label: "Current issue" },
          ]}
        />

        <h2 className="section-title" style={{ marginBottom: 14 }}>
          Where founders get this wrong
        </h2>
        <ul
          style={{
            margin: "0 0 36px",
            paddingLeft: 18,
            color: "var(--text-sec)",
            fontSize: 15,
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

        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: 10,
            }}
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
                  className="quiet-link"
                  style={{ color, fontWeight: 600 }}
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
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: 10,
              }}
            >
              Related concepts
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/concepts/${c.slug}`}
                  className="quiet-link"
                  style={{ fontWeight: 600 }}
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
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              padding: "12px 22px",
              borderRadius: 6,
            }}
          >
            Apply to FounderNexus →
          </a>
        </div>
      </div>
    </SiteShell>
  );
}
