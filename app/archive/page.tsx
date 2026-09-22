import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { weeks, getRatioHistory } from "@/lib/data";
import { SiteShell } from "../components/SiteShell";
import { PageHeader } from "../components/PageHeader";
import { ArchiveChart } from "../components/ArchiveChart";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Past Founder Ratio weekly indexes — noise counts, ratios, and signal picks.",
  alternates: { canonical: absoluteUrl("/archive") },
  openGraph: { url: absoluteUrl("/archive") },
};

export const revalidate = 3600;

const categoryColors: Record<string, string> = {
  fundraising: "#a78bfa",
  hiring: "#34d399",
  product: "#60a5fa",
  leadership: "#f59e0b",
  market: "#f472b6",
};

export default function ArchivePage() {
  const current = weeks[0];
  const history = getRatioHistory();

  return (
    <SiteShell weekOf={current.weekOf} ratio={current.ratio}>
      <div className="shell" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <PageHeader
          eyebrow="All issues"
          title="Archive"
          lede="A simple week list with each Founder Ratio — open a week for its five picks."
          crumbs={[{ href: "/", label: "← Current issue" }]}
        />

        <div
          className="card"
          style={{ padding: "24px 20px 16px", marginBottom: 40 }}
        >
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginBottom: 12,
            }}
          >
            Ratio trend
          </p>
          <ArchiveChart data={history} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {weeks.map((week, i) => {
            const prev = weeks[i + 1];
            const change =
              prev != null
                ? ((week.ratio - prev.ratio) / prev.ratio) * 100
                : null;
            const label = new Date(week.weekOf + "T12:00:00Z").toLocaleDateString(
              "en-US",
              { month: "long", day: "numeric", year: "numeric" }
            );

            return (
              <div
                key={week.weekOf}
                className="card"
                style={{
                  padding: "22px 24px",
                  borderColor:
                    i === 0 ? "var(--border-strong)" : "var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 24,
                    marginBottom: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        marginBottom: 4,
                        fontWeight: 500,
                      }}
                    >
                      {i === 0 ? "Latest issue" : `Issue ${weeks.length - i}`}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                      }}
                    >
                      Week of {label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--text-sec)",
                        marginTop: 6,
                        lineHeight: 1.5,
                        maxWidth: 560,
                      }}
                    >
                      {week.note}
                    </div>
                  </div>

                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div
                      className="mono"
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: i === 0 ? "var(--accent)" : "var(--text-primary)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {week.ratio.toFixed(1)}
                    </div>
                    {change != null && (
                      <div
                        style={{
                          fontSize: 13,
                          color:
                            change > 0 ? "var(--accent)" : "var(--accent-green)",
                        }}
                      >
                        {change > 0 ? "+" : ""}
                        {change.toFixed(1)}% vs prior
                      </div>
                    )}
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--text-muted)",
                        marginTop: 2,
                      }}
                    >
                      {week.noiseCount.toLocaleString()} noise ·{" "}
                      {week.signalCount} signal
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {week.signal.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13,
                        color: "var(--text-sec)",
                        textDecoration: "none",
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        padding: "6px 10px",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background:
                            categoryColors[item.category] || "#888",
                          flexShrink: 0,
                        }}
                      />
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SiteShell>
  );
}
