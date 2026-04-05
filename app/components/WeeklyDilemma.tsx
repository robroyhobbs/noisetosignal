import type { Dilemma } from "@/lib/types";

interface WeeklyDilemmaProps {
  dilemma: Dilemma;
}

export function WeeklyDilemma({ dilemma }: WeeklyDilemmaProps) {
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
            The Weekly Dilemma
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", maxWidth: 560 }}>
            One real founder decision, submitted anonymously. No answer given.
            Just the context, the stakes, and the thing you actually have to decide.
          </div>
        </div>

        {/* Dilemma card */}
        <div
          style={{
            border: "1px solid var(--border-strong)",
            borderLeft: "3px solid var(--accent)",
            background: "var(--bg-card)",
            padding: "32px 36px",
            maxWidth: 760,
          }}
        >
          {/* Context */}
          <div
            style={{
              fontSize: 15,
              color: "var(--text-sec)",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            {dilemma.context}
          </div>

          {/* The decision */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: 20,
              marginBottom: 20,
            }}
          >
            <div
              className="eyebrow"
              style={{ color: "var(--accent)", marginBottom: 8 }}
            >
              The Decision
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.5,
              }}
            >
              {dilemma.decision}
            </div>
          </div>

          {/* Stakes */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: 20,
              marginBottom: 24,
            }}
          >
            <div
              className="eyebrow"
              style={{ color: "var(--text-muted)", marginBottom: 8 }}
            >
              What's at stake
            </div>
            <div
              style={{
                fontSize: 14,
                color: "var(--text-sec)",
                lineHeight: 1.6,
              }}
            >
              {dilemma.stakes}
            </div>
          </div>

          {/* Submitted by */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Submitted anonymously · {dilemma.submittedBy}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                fontStyle: "italic",
              }}
            >
              No answer provided. That's the point.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 20, fontSize: 13, color: "var(--text-muted)" }}>
          Facing a decision like this?{" "}
          <a
            href="https://www.foundernexus.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-green)", textDecoration: "none" }}
          >
            FounderNexus
          </a>{" "}
          is where founders work through these in rooms that don't end up on LinkedIn.
        </div>
      </div>
    </section>
  );
}
