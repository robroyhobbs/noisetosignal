import Link from "next/link";
import { FnLink } from "./FnLink";

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
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 8,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/founder-ratio-mark.png"
              alt=""
              width={28}
              height={36}
              style={{ height: 36, width: "auto", display: "block", objectFit: "contain" }}
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              Founder Ratio
            </div>
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
            <FnLink
              href="https://www.foundernexus.com?utm_source=founderratio&utm_medium=referral&utm_campaign=week-2026-09-14&utm_content=footer"
              slug="footer"
              style={{ color: "var(--text-sec)", textDecoration: "none" }}
            >
              FounderNexus
            </FnLink>{" "}
            — a curated network for venture-scale founders who value rooms over
            noise.
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 16 }}>
            <Link
              href="/topics"
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Topics
            </Link>
            <Link
              href="/concepts"
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Concepts
            </Link>
            <Link
              href="/archive"
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Archive
            </Link>
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
            and The Information. Signal is human-curated. The ratio is always bad.
          </div>
          <div style={{ marginTop: 12, fontSize: 11, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Founder Ratio
          </div>
        </div>
      </div>
    </footer>
  );
}
