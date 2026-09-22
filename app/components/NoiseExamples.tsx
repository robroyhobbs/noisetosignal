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
        padding: "56px 0",
      }}
    >
      <div className="shell">
        <div style={{ marginBottom: 28, maxWidth: 640 }}>
          <p className="eyebrow" style={{ marginBottom: 10, color: "var(--accent)" }}>
            Noise this week
          </p>
          <h2 className="section-title">What we filtered out</h2>
          <p style={{ margin: 0, fontSize: 15, color: "var(--text-sec)", lineHeight: 1.5 }}>
            Three examples. We don&apos;t name names.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
          }}
        >
          {examples.map((ex) => (
            <div key={ex.id} className="card" style={{ padding: "22px 20px" }}>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: 10,
                  fontWeight: 500,
                }}
              >
                {ex.source}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.4,
                  marginBottom: 12,
                }}
              >
                {ex.title}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text-sec)",
                  lineHeight: 1.55,
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: 12,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--accent)",
                    marginBottom: 4,
                  }}
                >
                  The offense
                </span>
                {ex.offense}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
