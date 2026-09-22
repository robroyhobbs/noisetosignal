"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ShareThisWeek } from "./ShareThisWeek";

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

/** Below-the-fold methodology + trend. Calm — not a market terminal. */
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
  const changePct =
    previousRatio > 0 ? ((change / previousRatio) * 100).toFixed(1) : "N/A";
  const changeDisplay =
    changePct === "N/A"
      ? "N/A"
      : `${Number(changePct) >= 0 ? "+" : ""}${changePct}% vs last week`;
  const chartData = history.map((h) => ({
    week: formatWeekShort(h.week),
    ratio: h.ratio,
  }));

  return (
    <section
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "64px 0",
      }}
    >
      <div className="shell">
        <div style={{ maxWidth: 820, marginBottom: 36 }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>
            Methodology
          </p>
          <h2 className="section-title">How the Founder Ratio works</h2>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: 16,
              color: "var(--text-sec)",
              lineHeight: 1.6,
            }}
          >
            Noise is counted weekly from TechCrunch, Product Hunt, Hacker News,
            and The Information. Signal is five human-curated picks. The ratio is
            noise ÷ signal — and it is always bad.
          </p>
          <p
            style={{
              margin: "0 0 24px",
              fontSize: 15,
              color: "var(--text-muted)",
              lineHeight: 1.5,
            }}
          >
            Week of {formatWeekShort(weekOf)}:{" "}
            <span className="mono" style={{ color: "var(--accent)", fontWeight: 700 }}>
              {currentRatio.toFixed(1)}
            </span>
            {" · "}
            {noiseCount.toLocaleString()} noise / {signalCount} signal
            {" · "}
            {changeDisplay}
          </p>
          {note && (
            <p
              style={{
                margin: "0 0 20px",
                fontSize: 15,
                color: "var(--text-sec)",
                lineHeight: 1.5,
              }}
            >
              {note}
            </p>
          )}
          <ShareThisWeek weekOf={weekOf} ratio={currentRatio} />
        </div>

        <div
          className="card"
          style={{
            padding: "24px 20px 12px",
            maxWidth: 820,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginBottom: 12,
            }}
          >
            Ratio trend
          </p>
          <div style={{ height: 140, minWidth: 0, width: "100%" }}>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart
                data={chartData}
                margin={{ top: 4, right: 4, bottom: 0, left: 0 }}
              >
                <XAxis
                  dataKey="week"
                  tick={{ fill: "var(--text-muted)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                <Tooltip
                  contentStyle={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: 6,
                    color: "var(--text-primary)",
                    fontSize: 13,
                  }}
                  formatter={(v) => [
                    typeof v === "number" ? v.toFixed(1) : v,
                    "Founder Ratio",
                  ]}
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
          <p
            style={{
              padding: "8px 0 4px",
              fontSize: 13,
              color: "var(--text-muted)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Up every week since we started.
          </p>
        </div>
      </div>
    </section>
  );
}
