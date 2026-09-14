export function HeroExplainer() {
  return (
    <div
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border-strong)",
        padding: "28px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        <div style={{ maxWidth: 620 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "0.01em",
              margin: "0 0 12px",
              lineHeight: 1.4,
            }}
          >
            For venture-backed founders who are drowning in startup content.
          </p>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-sec)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              Founder Ratio
            </span>{" "}
            is a weekly filter for what actually matters when you are raising,
            hiring, running a board, watching runway, or fixing GTM. Thousands
            of startup posts land every week. Most of it is noise. We count that
            volume, divide by five hand-picked items that change a real decision,
            and publish the{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              Founder Ratio (noise ÷ signal)
            </span>
            . The ratio is always bad.{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              FounderNexus is the room
            </span>{" "}
            where the conversation goes further.
          </p>
        </div>

        <div
          style={{
            flexShrink: 0,
            borderLeft: "1px solid var(--border)",
            paddingLeft: 48,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13, color: "var(--text-sec)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Noise</strong>{" "}
              — everything published about startups this week
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13, color: "var(--text-sec)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Signal</strong>{" "}
              — 5 picks that change a real decision
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#60a5fa",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13, color: "var(--text-sec)" }}>
              <strong style={{ color: "var(--text-primary)" }}>The ratio</strong>{" "}
              — noise ÷ signal. Tracked weekly.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
