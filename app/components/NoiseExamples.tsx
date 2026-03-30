import type { NoiseExample } from "@/lib/types";

interface NoiseExamplesProps {
  examples: NoiseExample[];
}

export function NoiseExamples({ examples }: NoiseExamplesProps) {
  return (
    <section
      style={{
        background: "rgba(239,68,68,0.03)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "40px 0",
      }}
    >
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
            <div className="eyebrow" style={{ marginBottom: 6, color: "var(--accent)" }}>
              ● Noise
            </div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              This Week&apos;s Noise
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
            Three examples of what the ratio is made of. We&apos;re not naming anyone.
            The offense speaks for itself.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {examples.map((ex, i) => (
            <div
              key={ex.id}
              className="card"
              style={{
                padding: "20px",
                borderLeft: "3px solid var(--accent)",
                position: "relative",
              }}
            >
              {/* Noise number */}
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "var(--text-muted)",
                  marginBottom: 12,
                  fontWeight: 700,
                }}
              >
                NOISE #{i + 1}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-sec)",
                  lineHeight: 1.4,
                  marginBottom: 12,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{ex.title}&rdquo;
              </div>

              {/* Source */}
              <div
                style={{
                  fontSize: 10,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                via {ex.source}
              </div>

              {/* Offense */}
              <div
                style={{
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.15)",
                  borderRadius: 3,
                  padding: "10px 12px",
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 5,
                  }}
                >
                  The offense
                </div>
                <div style={{ fontSize: 12, color: "var(--text-sec)", lineHeight: 1.5 }}>
                  {ex.offense}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
