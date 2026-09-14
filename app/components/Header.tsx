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
    `FOUNDER RATIO ${ratio.toFixed(1)}`,
    `NOISE COUNT ${noiseCount.toLocaleString()}`,
    `SIGNAL 5 items`,
    `WEEK OF ${formatWeek(weekOf).toUpperCase()}`,
    `FOUNDER RATIO ${ratio.toFixed(1)}`,
    `NOISE COUNT ${noiseCount.toLocaleString()}`,
    `SIGNAL 5 items`,
  ].join("    •    ");

  const navLinkStyle = {
    fontSize: 11,
    color: "var(--text-muted)",
    textDecoration: "none",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  };

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
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
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
                height={48}
                style={{ height: 48, width: "auto", display: "block" }}
              />
            </Link>
            <div
              className="mono"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "var(--accent)",
                border: "1px solid var(--border-strong)",
                borderRadius: 999,
                padding: "4px 10px",
                whiteSpace: "nowrap",
              }}
              title={`Founder Ratio (noise ÷ signal) — week of ${formatWeek(weekOf)}`}
            >
              {ratio.toFixed(1)}
            </div>
          </div>

          <div
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <Link href="/topics" style={navLinkStyle}>
                Topics
              </Link>
              <Link href="/concepts" style={navLinkStyle}>
                Concepts
              </Link>
              <Link href="/archive" style={navLinkStyle}>
                Archive
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
            flexWrap: "wrap",
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
            <Link
              key={cat}
              href={`/topics/${cat}`}
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color,
                display: "flex",
                alignItems: "center",
                gap: 5,
                textDecoration: "none",
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
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
