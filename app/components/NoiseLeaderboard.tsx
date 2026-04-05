import type { NoiseSource } from "@/lib/types";

interface NoiseLeaderboardProps {
  sources: NoiseSource[];
}

function NoiseBar({ score, tier }: { score: number; tier: NoiseSource["tier"] }) {
  const color =
    tier === "high" ? "var(--accent)" : tier === "medium" ? "#f59e0b" : "var(--accent-green)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        minWidth: 140,
      }}
    >
      <div
        style={{
          flex: 1,
          height: 4,
          background: "var(--border)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: color,
            borderRadius: 2,
          }}
        />
      </div>
      <span
        className="mono"
        style={{
          fontSize: 12,
          fontWeight: 700,
          color,
          minWidth: 32,
          textAlign: "right",
        }}
      >
        {score}%
      </span>
    </div>
  );
}

export function NoiseLeaderboard({ sources }: NoiseLeaderboardProps) {
  return (
    <section
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "64px 0",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>
            Noise Leaderboard
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", maxWidth: 560 }}>
            Ranked by estimated noise-to-signal ratio. Editorial judgment, not algorithm.
            Updated when the internet earns a new verdict.
          </div>
        </div>

        {/* Table */}
        <div style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
          {/* Column headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr 180px 1fr",
              gap: 16,
              padding: "10px 20px",
              borderBottom: "1px solid var(--border-strong)",
              background: "var(--bg)",
            }}
          >
            {["#", "Source", "Noise %", "Verdict"].map((h) => (
              <div
                key={h}
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          {sources.map((s, i) => (
            <div
              key={s.rank}
              style={{
                display: "grid",
                gridTemplateColumns: "36px 1fr 180px 1fr",
                gap: 16,
                padding: "14px 20px",
                borderBottom:
                  i < sources.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "center",
              }}
            >
              {/* Rank */}
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  fontWeight: 700,
                }}
              >
                {s.rank}
              </div>

              {/* Name */}
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {s.name}
              </div>

              {/* Bar */}
              <NoiseBar score={s.noiseScore} tier={s.tier} />

              {/* Verdict */}
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                {s.verdict}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 11,
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          Lower scores indicate higher signal density. These are editorial ratings, not computed metrics.
          Disagree? That's probably a good sign.
        </div>
      </div>
    </section>
  );
}
