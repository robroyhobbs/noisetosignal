import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FnLink } from "../../components/FnLink";
import { getBenchmark, getBenchmarkPages } from "@/lib/benchmarks";
import { getCurrentWeek } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return getBenchmarkPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getBenchmark(slug);
  if (!p) return { title: "Benchmark" };
  return {
    title: p.title,
    description: p.meta_description || p.claim,
    alternates: { canonical: absoluteUrl(`/benchmarks/${p.slug}`) },
    robots: { index: true, follow: true },
  };
}

function schemaNodes(p: ReturnType<typeof getBenchmark>) {
  if (!p) return [];
  const types = p.schema || [];
  const nodes: Record<string, unknown>[] = [];
  if (types.includes("Dataset")) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: p.title,
      description: p.meta_description || p.claim,
      url: absoluteUrl(`/benchmarks/${p.slug}`),
    });
  }
  if (types.includes("FAQPage")) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What is ${p.metric}?`,
          acceptedAnswer: { "@type": "Answer", text: p.how_to_read || p.claim },
        },
      ],
    });
  }
  return nodes;
}

export default async function BenchmarkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getBenchmark(slug);
  if (!p) notFound();
  const week = getCurrentWeek();
  const nodes = schemaNodes(p);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {nodes.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nodes) }}
        />
      )}
      <Header weekOf={week.weekOf} ratio={week.ratio} noiseCount={week.noiseCount} />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        <p className="eyebrow" style={{ color: "var(--text-muted)", fontSize: 12 }}>
          {p.segment} · {p.period}
        </p>
        <h1 style={{ fontSize: 32, margin: "12px 0 24px", color: "var(--text-primary)" }}>
          {p.title}
        </h1>
        <p style={{ fontSize: 18, color: "var(--text-primary)", lineHeight: 1.6 }}>
          {p.claim}
        </p>
        <dl style={{ marginTop: 32, fontSize: 15, color: "var(--text-sec)", lineHeight: 1.7 }}>
          <dt>Value</dt>
          <dd>
            {p.value ?? "Not published"} {p.unit} ({p.percentile})
          </dd>
          <dt>How to read</dt>
          <dd>{p.how_to_read}</dd>
        </dl>
        {p.fn_link?.href && p.fn_link?.text && (
          <p style={{ marginTop: 32 }}>
            <FnLink href={p.fn_link.href} slug={p.slug}>
              {p.fn_link.text}
            </FnLink>
          </p>
        )}
        {p.source?.url && (
          <p style={{ marginTop: 24, fontSize: 13, color: "var(--text-muted)" }}>
            Source:{" "}
            <a href={p.source.url} style={{ color: "var(--text-sec)" }}>
              {p.source.name || p.source.url}
            </a>{" "}
            · verified {p.last_verified || p.source.date}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
