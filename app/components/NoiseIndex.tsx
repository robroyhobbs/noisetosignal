"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface NoiseIndexProps {
  currentRatio: number;
  previousRatio: number;
  noiseCount: number;
  signalCount: number;
  note: string;
  weekOf: string;
  history: { week: string; ratio: number }[];
}

function formatWeekShort(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function NoiseIndex({
  currentRatio,
  previousRatio,
  noiseCount,
  signalCount,
  note,
  weekOf,
  history,
}: NoiseIndexProps) {
  const change = currentRatio - previousRatio;
  const changePct = previousRatio > 0 ? ((change / previousRatio) * 100).toFixed(1) : "N/A";
  const changeDisplay = changePct === "N/A" ? "N/A" : `${Number(changePct) >= 0 ? "▲ +" : "▼ "}${changePct}%`;
  const chartData = history.map((h) => ({
    week: formatWeekShort(h.week),
    ratio: h.ratio,
  }));

  return (
    <section
      style={{
        background: "var(--bg-card)",
        borderBottom: "1px solid var(--border)",
        padding: "40px 0 0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Index label */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Noise-to-Signal Index (NSI) — Week of {formatWeekShort(weekOf)}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <span
                className="mono"
                style={{
                  fontSize: 72,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {currentRatio.toFixed(1)}
              </span>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 18,
                    color: "var(--accent)",
                    fontWeight: 700,
                  }}
                >
                  {changeDisplay}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  vs. last week
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 12,
                fontSize: 14,
                color: "var(--text-sec)",
                maxWidth: 480,
                lineHeight: 1.5,
              }}
            >
              {note}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 32, textAlign: "right" }}>
            <div>
              <div
                className="mono eyebrow"
                style={{ color: "var(--text-muted)", marginBottom: 4 }}
              >
                Noise this week
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--accent)",
                }}
              >
                {noiseCount.toLocaleString()}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                posts tracked
              </div>
            </div>
            <div>
              <div
                className="mono eyebrow"
                style={{ color: "var(--text-muted)", marginBottom: 4 }}
              >
                Signal this week
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--accent-green)",
                }}
              >
                {signalCount}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                items worth reading
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div style={{ height: 120, marginBottom: 0, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 4, right: 0, bottom: 0, left: 0 }}
            >
              <XAxis
                dataKey="week"
                tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
              <Tooltip
                contentStyle={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: 4,
                  color: "var(--text-primary)",
                  fontSize: 12,
                }}
                formatter={(v) => [typeof v === 'number' ? v.toFixed(1) : v, "NSI"]}
              />
              <Line
                type="monotone"
                dataKey="ratio"
                stroke="var(--accent)"
                strokeWidth={2}
                dot={{ fill: "var(--accent)", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Always trending note */}
        <div
          style={{
            padding: "10px 0 16px",
            fontSize: 11,
            color: "var(--text-muted)",
            fontStyle: "italic",
            borderTop: "1px solid var(--border)",
            marginTop: 8,
          }}
        >
          The NSI has increased every week since we started tracking. We wish
          this surprised us.
        </div>
      </div>
    </section>
  );
}
