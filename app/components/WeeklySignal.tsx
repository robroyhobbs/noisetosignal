import Link from "next/link";
import type { SignalItem } from "@/lib/types";

interface WeeklySignalProps {
  items: SignalItem[];
}

const CATEGORY_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  fundraising: {
    bg: "rgba(167,139,250,0.1)",
    text: "#a78bfa",
    border: "rgba(167,139,250,0.35)",
  },
  hiring: {
    bg: "rgba(52,211,153,0.1)",
    text: "#34d399",
    border: "rgba(52,211,153,0.35)",
  },
  product: {
    bg: "rgba(96,165,250,0.1)",
    text: "#60a5fa",
    border: "rgba(96,165,250,0.35)",
  },
  leadership: {
    bg: "rgba(245,158,11,0.1)",
    text: "#f59e0b",
    border: "rgba(245,158,11,0.35)",
  },
  market: {
    bg: "rgba(244,114,182,0.1)",
    text: "#f472b6",
    border: "rgba(244,114,182,0.35)",
  },
};

export function WeeklySignal({ items }: WeeklySignalProps) {
  return (
    <section style={{ padding: "40px 0 24px", background: "var(--bg)" }}>
      <div className="shell">
        <div style={{ marginBottom: 28, maxWidth: 640 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: 10, color: "var(--accent-green)" }}
          >
            This week&apos;s signal
          </p>
          <h2 className="section-title">5 picks worth your attention</h2>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              color: "var(--text-sec)",
              lineHeight: 1.5,
            }}
          >
            Fundraising, hiring, board, runway, GTM — open any card for the
            source.
          </p>
        </div>

        <ol
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((item, i) => {
            const cat =
              CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.market;
            const known = item.category in CATEGORY_COLORS;

            return (
              <li key={item.id}>
                <article
                  className="signal-card"
                  style={{ borderLeft: `3px solid ${cat.text}` }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 18,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        minWidth: 28,
                        paddingTop: 4,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          flexWrap: "wrap",
                          marginBottom: 8,
                        }}
                      >
                        {known ? (
                          <Link
                            href={`/topics/${item.category}`}
                            className="category-tag"
                            style={{
                              background: cat.bg,
                              color: cat.text,
                              borderColor: cat.border,
                              textDecoration: "none",
                            }}
                          >
                            {item.category}
                          </Link>
                        ) : (
                          <span
                            className="category-tag"
                            style={{
                              background: cat.bg,
                              color: cat.text,
                              borderColor: cat.border,
                            }}
                          >
                            {item.category}
                          </span>
                        )}
                        <span
                          style={{
                            fontSize: 13,
                            color: "var(--text-muted)",
                            fontWeight: 500,
                          }}
                        >
                          {item.source}
                        </span>
                      </div>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                          fontWeight: 650,
                          color: "var(--text-primary)",
                          lineHeight: 1.35,
                          letterSpacing: "-0.015em",
                          marginBottom: 10,
                          textDecoration: "none",
                        }}
                      >
                        {item.title}
                      </a>

                      <p
                        style={{
                          margin: 0,
                          fontSize: 15,
                          color: "var(--text-sec)",
                          lineHeight: 1.55,
                          maxWidth: 680,
                        }}
                      >
                        <span
                          style={{
                            color: cat.text,
                            fontWeight: 600,
                            fontSize: 13,
                            marginRight: 6,
                          }}
                        >
                          Why it matters
                        </span>
                        {item.whyItMatters}
                      </p>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open: ${item.title}`}
                      style={{
                        fontSize: 18,
                        color: "var(--text-muted)",
                        flexShrink: 0,
                        paddingTop: 4,
                        textDecoration: "none",
                      }}
                    >
                      →
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
