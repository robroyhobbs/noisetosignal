import { weeks, getRatioHistory } from "@/lib/data";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArchiveChart } from "../components/ArchiveChart";
import Link from "next/link";

export const revalidate = 3600;

const categoryColors: Record<string, string> = {
  fundraising: "#a78bfa",
  hiring: "#34d399",
  product: "#60a5fa",
  leadership: "#f59e0b",
  market: "#f472b6",
};

export default function Archive() {
  const current = weeks[0];
  const history = getRatioHistory();
  const allTimeHigh = Math.max(...weeks.map((w) => w.ratio));
  const firstWeek = weeks[weeks.length - 1];
  const totalNoise = weeks.reduce((sum, w) => sum + w.noiseCount, 0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header
        weekOf={current.weekOf}
        ratio={current.ratio}
        noiseCount={current.noiseCount}
      />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
        <Link
          href="/"
          style={{
            fontSize: 12,
            color: "var(--text-muted)",
            textDecoration: "none",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 40,
          }}
        >
          &larr; Back to current issue
        </Link>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>
            All issues
          </p>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "var(--text-primary)", margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Archive
          </h1>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Issues tracked", value: String(weeks.length) },
              { label: "All-time high NSI", value: allTimeHigh.toFixed(1) },
              { label: "Total noise posts counted", value: totalNoise.toLocaleString() },
              { label: "Tracking since", value: new Date(firstWeek.weekOf).toLocaleDateString("en-US", { month: "short", year: "numeric" }) },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: "#0d0d14",
          border: "1px solid var(--border)",
          borderRadius: 6,
          padding: "28px 24px 20px",
          marginBottom: 48,
        }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            NSI trend &mdash; all time
          </p>
          <ArchiveChart data={history} />
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12, textAlign: "right" }}>
            The ratio has increased every week since tracking began.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {weeks.map((week, i) => {
            const prev = weeks[i + 1];
            const change = prev ? ((week.ratio - prev.ratio) / prev.ratio) * 100 : null;
            const date = new Date(week.weekOf);
            const label = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

            return (
              <div
                key={week.weekOf}
                style={{
                  background: i === 0 ? "#0d0d14" : "transparent",
                  border: `1px solid ${i === 0 ? "var(--border-strong)" : "var(--border)"}`,
                  borderRadius: 6,
                  padding: "20px 24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, marginBottom: 16 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        {i === 0 ? "Current issue" : `Issue ${weeks.length - i}`}
                      </span>
                      {i === 0 && (
                        <span style={{ fontSize: 10, background: "var(--accent)", color: "white", padding: "1px 6px", borderRadius: 2, fontWeight: 700, letterSpacing: "0.08em" }}>
                          LATEST
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>Week of {label}</div>
                    <div style={{ fontSize: 13, color: "var(--text-sec)", marginTop: 4, lineHeight: 1.5 }}>{week.note}</div>
                  </div>

                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: i === 0 ? "var(--accent)" : "var(--text-primary)", letterSpacing: "-0.02em" }}>
                      {week.ratio.toFixed(1)}
                    </div>
                    {change !== null && (
                      <div style={{ fontSize: 12, color: change > 0 ? "var(--accent)" : "#22c55e" }}>
                        {change > 0 ? "▲" : "▼"} {Math.abs(change).toFixed(1)}% vs prior week
                      </div>
                    )}
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                      {week.noiseCount.toLocaleString()} posts / {week.signalCount} signal
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {week.signal.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "var(--text-sec)",
                        textDecoration: "none",
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: 4,
                        padding: "4px 10px",
                      }}
                    >
                      <span style={{
                        display: "inline-block",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: categoryColors[item.category] || "#888",
                        flexShrink: 0,
                      }} />
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
