export function HeroExplainer() {
  return (
    <section
      style={{
        padding: "56px 0 8px",
        background: "var(--bg)",
      }}
    >
      <div className="shell" style={{ maxWidth: 820 }}>
        <p
          className="eyebrow"
          style={{ marginBottom: 16, color: "var(--text-muted)" }}
        >
          For venture-backed founders
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            fontWeight: 750,
            letterSpacing: "-0.035em",
            lineHeight: 1.12,
            color: "var(--text-primary)",
            margin: "0 0 20px",
            maxWidth: 640,
          }}
        >
          Five picks that change a real decision.
          <span style={{ color: "var(--text-sec)", fontWeight: 500 }}>
            {" "}
            The rest is noise.
          </span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--text-sec)",
            lineHeight: 1.65,
            margin: 0,
            maxWidth: 560,
          }}
        >
          Each week we count the startup feed, publish five signal picks, and
          track the{" "}
          <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            Founder Ratio
          </strong>{" "}
          (noise ÷ signal). The ratio is always bad.
        </p>
      </div>
    </section>
  );
}
