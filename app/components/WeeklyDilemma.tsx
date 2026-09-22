import type { Dilemma } from "@/lib/types";
import type { FetchedDilemma } from "@/lib/dilemmas";
import { FnLink } from "./FnLink";

interface WeeklyDilemmaProps {
  dilemma: Dilemma | FetchedDilemma;
}

function isFetched(d: Dilemma | FetchedDilemma): d is FetchedDilemma {
  return "situation" in d;
}

export function WeeklyDilemma({ dilemma }: WeeklyDilemmaProps) {
  const fetched = isFetched(dilemma);
  const context = fetched ? dilemma.situation : dilemma.context;
  const decision = fetched ? dilemma.title : dilemma.decision;
  const stakes = fetched ? null : dilemma.stakes;
  const options = fetched ? dilemma.options : [];
  const mattered = fetched ? dilemma.what_mattered : [];
  const byline = fetched
    ? dilemma.stage_label
    : `Submitted anonymously · ${dilemma.submittedBy}`;

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
            One anonymous founder decision. Context, stakes, no answer.
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
            {context}
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
              {decision}
            </div>
          </div>

          {options.length > 0 && (
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 20,
                marginBottom: 20,
              }}
            >
              <div
                className="eyebrow"
                style={{ color: "var(--text-muted)", marginBottom: 8 }}
              >
                Options
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  fontSize: 14,
                  color: "var(--text-sec)",
                  lineHeight: 1.6,
                }}
              >
                {options.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          )}

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
            {mattered.length > 0 ? (
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  fontSize: 14,
                  color: "var(--text-sec)",
                  lineHeight: 1.6,
                }}
              >
                {mattered.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            ) : (
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text-sec)",
                  lineHeight: 1.6,
                }}
              >
                {stakes}
              </div>
            )}
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
                textTransform: "none",
              }}
            >
              {byline}
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
          Facing one?{" "}
          <FnLink
            href="https://www.foundernexus.com?utm_source=founderratio&utm_medium=referral&utm_campaign=dilemma&utm_content=facing-one"
            slug="dilemma"
            style={{ color: "var(--accent-green)", textDecoration: "none" }}
          >
            FounderNexus
          </FnLink>{" "}
          is the room.
        </div>
      </div>
    </section>
  );
}
