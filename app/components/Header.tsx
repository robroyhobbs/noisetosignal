"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  weekOf: string;
  ratio: number;
  noiseCount: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  fundraising: "#a78bfa",
  hiring: "#34d399",
  product: "#60a5fa",
  leadership: "#f59e0b",
  market: "#f472b6",
};

function formatWeek(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Header({ weekOf, ratio, noiseCount }: HeaderProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const tickers = [
    `NSI ${ratio.toFixed(1)} ▲`,
    `NOISE COUNT ${noiseCount.toLocaleString()}`,
    `SIGNAL 5 items`,
    `WEEK OF ${formatWeek(weekOf).toUpperCase()}`,
    `RATIO TREND ↑ ALL-TIME HIGH`,
    `NSI ${ratio.toFixed(1)} ▲`,
    `NOISE COUNT ${noiseCount.toLocaleString()}`,
    `SIGNAL 5 items`,
  ].join("    •    ");

  return (
    <header>
      {/* Ticker bar */}
      <div className="ticker-bar">
        <div
          style={{
            display: "inline-block",
            animation: "scroll 30s linear infinite",
            paddingRight: "100%",
          }}
        >
          {tickers}
        </div>
        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Main header */}
      <div
        style={{
          borderBottom: "1px solid var(--border-strong)",
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              The Founder Attention Index
            </div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              NOISE
              <span style={{ color: "var(--accent)" }}>-TO-</span>
              SIGNAL
            </h1>
          </div>

          <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <Link
                href="/archive"
                style={{ fontSize: 11, color: "var(--text-muted)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Archive
              </Link>
              <Link
                href="/#newsletter"
                style={{ fontSize: 11, color: "var(--text-muted)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Subscribe
              </Link>
            </div>
            <div className="mono eyebrow" style={{ color: "var(--text-muted)" }}>
              {time} EST &nbsp;·&nbsp; Week of {formatWeek(weekOf)}
            </div>
          </div>
        </div>
      </div>

      {/* Category legend */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-card)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "8px 24px",
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              marginRight: 4,
            }}
          >
            Signal categories:
          </span>
          {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
            <span
              key={cat}
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: color,
                }}
              />
              {cat}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
