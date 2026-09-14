"use client";

import { useState, type CSSProperties } from "react";

const SITE_URL = "https://founderratio.com";

interface ShareThisWeekProps {
  weekOf: string;
  ratio: number;
}

function formatWeekShort(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ShareThisWeek({ weekOf, ratio }: ShareThisWeekProps) {
  const [copied, setCopied] = useState(false);
  const weekLabel = formatWeekShort(weekOf);
  const tweetText = `This week's Founder Ratio: ${ratio.toFixed(1)} noise÷signal (week of ${weekLabel}). 5 picks that change a real decision for venture-backed founders.`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(SITE_URL)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const btnStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--text-sec)",
    background: "transparent",
    border: "1px solid var(--border-strong)",
    borderRadius: 4,
    cursor: "pointer",
    textDecoration: "none",
    lineHeight: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontSize: 10,
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        Share this week
      </span>
      <button type="button" onClick={copyLink} style={btnStyle}>
        {copied ? "Copied" : "Copy link"}
      </button>
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
      >
        Post on X
      </a>
    </div>
  );
}
