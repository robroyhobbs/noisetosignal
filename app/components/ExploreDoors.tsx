import Link from "next/link";

export function ExploreDoors() {
  const doors = [
    {
      href: "/topics",
      title: "Topics",
      blurb: "Fundraising, hiring, product, leadership, and market hubs.",
    },
    {
      href: "/concepts",
      title: "Concepts",
      blurb: "Short operator definitions — SAFE, option pool, LTV:CAC, and more.",
    },
  ];

  return (
    <section style={{ padding: "48px 0 64px", background: "var(--bg)" }}>
      <div className="shell">
        <p className="eyebrow" style={{ marginBottom: 16 }}>
          Go deeper
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {doors.map((d) => (
            <Link key={d.href} href={d.href} className="door-card">
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                {d.title}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "var(--text-sec)",
                  lineHeight: 1.5,
                  marginBottom: 14,
                }}
              >
                {d.blurb}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                Browse {d.title.toLowerCase()} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
