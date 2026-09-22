import Link from "next/link";

interface HeaderProps {
  weekOf: string;
  ratio: number;
  /** @deprecated kept for call-site compatibility; unused after magazine refresh */
  noiseCount?: number;
}

function formatWeek(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Header({ weekOf, ratio }: HeaderProps) {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(10,10,15,0.92)",
      }}
    >
      <div
        className="shell"
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/founder-ratio-wordmark.png"
              alt="Founder Ratio"
              height={44}
              style={{
                height: 44,
                width: "auto",
                maxHeight: 44,
                objectFit: "contain",
                display: "block",
                flexShrink: 0,
              }}
            />
          </Link>
          <div
            className="mono"
            title={`Founder Ratio (noise ÷ signal) — week of ${formatWeek(weekOf)}`}
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "var(--accent)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "4px 11px",
              whiteSpace: "nowrap",
              opacity: 0.9,
            }}
          >
            {ratio.toFixed(1)}
          </div>
        </div>

        <nav
          aria-label="Primary"
          style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}
        >
          <Link href="/topics" className="nav-link">
            Topics
          </Link>
          <Link href="/concepts" className="nav-link">
            Concepts
          </Link>
          <Link href="/archive" className="nav-link">
            Archive
          </Link>
        </nav>
      </div>
    </header>
  );
}
