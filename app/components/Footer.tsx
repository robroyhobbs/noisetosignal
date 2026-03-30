export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 0",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        {/* Left: brand + attribution */}
        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              marginBottom: 6,
            }}
          >
            NOISE-TO-SIGNAL
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: 380,
            }}
          >
            Curated by{" "}
            <a
              href="https://www.linkedin.com/in/robroyhobbs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-sec)", textDecoration: "none" }}
            >
              Rob Roy Hobbs
            </a>
            {" "}in partnership with{" "}
            <a
              href="https://www.foundernexus.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-sec)", textDecoration: "none" }}
            >
              FounderNexus
            </a>{" "}
            — a curated network for venture-scale founders who value rooms over
            noise.
          </div>
        </div>

        {/* Right: methodology note */}
        <div style={{ textAlign: "right" }}>
          <div
            className="eyebrow"
            style={{ marginBottom: 6, color: "var(--text-muted)" }}
          >
            Methodology
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: 280,
            }}
          >
            Noise is counted weekly from TechCrunch, Product Hunt, Hacker News,
            and Substack. Signal is human-curated. The ratio is always bad.
          </div>
          <div style={{ marginTop: 12, fontSize: 11, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Noise-to-Signal
          </div>
        </div>
      </div>
    </footer>
  );
}
