"use client";

import Link from "next/link";
import type { SignalItem } from "@/lib/types";

interface WeeklySignalProps {
  items: SignalItem[];
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  fundraising: { bg: "rgba(167,139,250,0.08)", text: "#a78bfa", border: "rgba(167,139,250,0.3)" },
  hiring: { bg: "rgba(52,211,153,0.08)", text: "#34d399", border: "rgba(52,211,153,0.3)" },
  product: { bg: "rgba(96,165,250,0.08)", text: "#60a5fa", border: "rgba(96,165,250,0.3)" },
  leadership: { bg: "rgba(245,158,11,0.08)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  market: { bg: "rgba(244,114,182,0.08)", text: "#f472b6", border: "rgba(244,114,182,0.3)" },
};

export function WeeklySignal({ items }: WeeklySignalProps) {
  return (
    <section
      style={{
        padding: "56px 0",
        background: "rgba(34, 197, 94, 0.03)",
        borderTop: "1px solid rgba(34, 197, 94, 0.25)",
        borderBottom: "1px solid rgba(34, 197, 94, 0.25)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 28,
            gap: 24,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 8, color: "#22c55e" }}>
              ● Primary — This week&apos;s signal
            </div>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              5 stake-oriented picks
            </h2>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: 13,
                color: "var(--text-sec)",
                maxWidth: 520,
                lineHeight: 1.5,
              }}
            >
              Curated for venture-backed founders. Each pick clears a stake bar —
              fundraising, hiring, board, runway, or GTM — not vanity volume.
            </p>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              maxWidth: 280,
              textAlign: "right",
              lineHeight: 1.5,
              flexShrink: 0,
            }}
          >
            Why it matters is the product. Headlines alone do not make the cut.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.15)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {items.map((item, i) => {
            const cat = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.market;
            const categoryTag = (
              <span
                className="category-tag"
                style={{
                  background: cat.bg,
                  color: cat.text,
                  borderColor: cat.border,
                  flexShrink: 0,
                }}
              >
                {item.category}
              </span>
            );

            return (
              <div
                key={item.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderLeft: `3px solid ${cat.text}`,
                  padding: "20px 24px",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--bg-card-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--bg-card)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      minWidth: 20,
                      paddingTop: 3,
                      fontWeight: 700,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                          textDecoration: "none",
                        }}
                      >
                        {item.title}
                      </a>
                      {item.category in CATEGORY_COLORS ? (
                        <Link
                          href={`/topics/${item.category}`}
                          style={{ textDecoration: "none" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {categoryTag}
                        </Link>
                      ) : (
                        categoryTag
                      )}
                    </div>

                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        marginBottom: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontWeight: 600,
                      }}
                    >
                      {item.source}
                    </div>

                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text-sec)",
                        lineHeight: 1.6,
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
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 16,
                      color: "var(--text-muted)",
                      paddingTop: 2,
                      flexShrink: 0,
                      textDecoration: "none",
                    }}
                    aria-label={`Open: ${item.title}`}
                  >
                    →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
