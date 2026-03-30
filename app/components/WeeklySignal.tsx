"use client";

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
    <section style={{ padding: "40px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 6, color: "#22c55e" }}>
              ● Signal
            </div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              This Week&apos;s Signal
            </h2>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              maxWidth: 340,
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            Five items that cleared the bar. Each one includes why it actually
            matters — not just what it says.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {items.map((item, i) => {
            const cat = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.market;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
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
                  {/* Number */}
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
                    {/* Title row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </span>
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
                    </div>

                    {/* Source */}
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

                    {/* Why it matters */}
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

                  {/* Arrow */}
                  <div
                    style={{
                      fontSize: 16,
                      color: "var(--text-muted)",
                      paddingTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
