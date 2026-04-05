import type { BenchmarkStage } from "@/lib/types";

interface HonestBenchmarksProps {
  benchmarks: BenchmarkStage[];
}

const STAGE_COLORS: Record<string, string> = {
  "Pre-Seed": "#a78bfa",
  "Seed": "#60a5fa",
  "Series A": "#34d399",
  "Series B": "#f59e0b",
};

export function HonestBenchmarks({ benchmarks }: HonestBenchmarksProps) {
  return (
    <section
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "64px 0",
        background: "var(--bg-card)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>
            Honest Benchmarks
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", maxWidth: 560 }}>
            Anonymized real metrics from the current raise environment. Not the filtered
            version. Community-sourced, updated quarterly.
          </div>
        </div>

        {/* Stage cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {benchmarks.map((b) => {
            const color = STAGE_COLORS[b.stage] ?? "var(--accent)";
            return (
              <div
                key={b.stage}
                style={{
                  border: "1px solid var(--border)",
                  borderTop: `3px solid ${color}`,
                  background: "var(--bg)",
                  padding: "24px 20px",
                }}
              >
                {/* Stage + period */}
                <div style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color,
                      marginBottom: 4,
                    }}
                  >
                    {b.stage}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    {b.period}
                  </div>
                </div>

                {/* Metrics */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                  {[
                    { label: "Raised", value: b.raised },
                    { label: "ARR", value: b.arr },
                    { label: "Growth", value: b.growth },
                    { label: "Runway", value: b.runway },
                    { label: "Team", value: b.teamSize },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        borderBottom: "1px solid var(--border)",
                        paddingBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--text-muted)",
                          fontWeight: 700,
                        }}
                      >
                        {label}
                      </span>
                      <span
                        className="mono"
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  {b.note}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 11,
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          These are ranges, not guarantees. Outliers exist in both directions.
          Data sourced from community submissions and public deal disclosures.
        </div>
      </div>
    </section>
  );
}
