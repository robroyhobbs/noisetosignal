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
        <p
          style={{
            fontSize: 16,
            color: "var(--text-sec)",
            lineHeight: 1.7,
            maxWidth: 620,
            margin: 0,
          }}
        >
          Every week, thousands of things get published about startups, building
          companies, and founder life. Most of it is noise.{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            We track the volume, find the 5 pieces actually worth reading, and
            publish the ratio.
          </span>{" "}
          The ratio is always bad. It keeps getting worse.
        </p>

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
              — the 5 pieces worth your time, curated by hand
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
