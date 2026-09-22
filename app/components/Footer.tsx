import Link from "next/link";
import { FnLink } from "./FnLink";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 0 48px",
        background: "var(--bg)",
      }}
    >
      <div
        className="shell"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/founder-ratio-mark.png"
              alt=""
              width={28}
              height={36}
              style={{
                height: 36,
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              Founder Ratio
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: 400,
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
            </a>{" "}
            in partnership with{" "}
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
          <div style={{ marginTop: 16, display: "flex", gap: 20 }}>
            <Link href="/topics" className="quiet-link">
              Topics
            </Link>
            <Link href="/concepts" className="quiet-link">
              Concepts
            </Link>
            <Link href="/archive" className="quiet-link">
              Archive
            </Link>
          </div>
        </div>

        <div style={{ maxWidth: 300 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-sec)",
              marginBottom: 8,
            }}
          >
            Methodology
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              lineHeight: 1.6,
            }}
          >
            Noise is counted weekly from TechCrunch, Product Hunt, Hacker News,
            and The Information. Signal is human-curated. The ratio is always
            bad.
          </div>
          <div
            style={{ marginTop: 14, fontSize: 12, color: "var(--text-muted)" }}
          >
            © {new Date().getFullYear()} Founder Ratio
          </div>
        </div>
      </div>
    </footer>
  );
}
