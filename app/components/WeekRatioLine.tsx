interface WeekRatioLineProps {
  ratio: number;
  weekOf: string;
  note?: string;
}

function formatWeek(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** One calm line: this week's ratio + week date. Above-the-fold only. */
export function WeekRatioLine({ ratio, weekOf, note }: WeekRatioLineProps) {
  return (
    <section style={{ padding: "28px 0 8px", background: "var(--bg)" }}>
      <div className="shell" style={{ maxWidth: 820 }}>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-sec)",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          <span style={{ color: "var(--text-muted)" }}>This week · </span>
          <span
            className="mono"
            style={{
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: "-0.01em",
            }}
          >
            {ratio.toFixed(1)}
          </span>
          <span style={{ color: "var(--text-muted)" }}> noise÷signal</span>
          <span style={{ color: "var(--text-muted)" }}> · </span>
          <span style={{ color: "var(--text-primary)" }}>
            Week of {formatWeek(weekOf)}
          </span>
        </p>
        {note && (
          <p
            style={{
              margin: "10px 0 0",
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.5,
              maxWidth: 520,
            }}
          >
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
