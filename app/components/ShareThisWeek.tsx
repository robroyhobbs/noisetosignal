"use client";

import { useState, type CSSProperties } from "react";
import { SITE_URL } from "@/lib/site";

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
    padding: "7px 12px",
    fontSize: 13,
    fontWeight: 550,
    color: "var(--text-sec)",
    background: "transparent",
    border: "1px solid var(--border-strong)",
    borderRadius: 6,
    cursor: "pointer",
    textDecoration: "none",
    lineHeight: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>
        Share this week
      </span>
      <button type="button" onClick={copyLink} style={btnStyle}>
        {copied ? "Copied" : "Copy link"}
      </button>
      <a href={tweetUrl} target="_blank" rel="noopener noreferrer" style={btnStyle}>
        Post on X
      </a>
    </div>
  );
}
