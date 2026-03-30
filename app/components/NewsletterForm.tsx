"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("done");
        setEmail("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section
      style={{
        padding: "56px 0",
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          The Signal — Weekly Edition
        </div>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 10,
            color: "var(--text-primary)",
          }}
        >
          The signal, weekly.
          <br />
          <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
            No noise.
          </span>
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-sec)",
            marginBottom: 28,
            lineHeight: 1.6,
          }}
        >
          Five items worth your attention. Every Monday. The ratio tells you why
          this matters.
        </p>

        {state === "done" ? (
          <div
            style={{
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 4,
              padding: "16px 24px",
              color: "#22c55e",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            You&apos;re in. Signal arrives Monday.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                background: "var(--bg)",
                border: "1px solid var(--border-strong)",
                borderRadius: 4,
                padding: "12px 16px",
                color: "var(--text-primary)",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={state === "loading"}
              style={{
                background: "var(--accent)",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "12px 24px",
                fontSize: 13,
                fontWeight: 700,
                cursor: state === "loading" ? "wait" : "pointer",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {state === "loading" ? "..." : "Get the signal"}
            </button>
          </form>
        )}

        {state === "error" && (
          <div
            style={{
              marginTop: 10,
              fontSize: 12,
              color: "var(--accent)",
            }}
          >
            Something went wrong. Try again.
          </div>
        )}

        <div
          style={{
            marginTop: 16,
            fontSize: 11,
            color: "var(--text-muted)",
          }}
        >
          No ads. No sponsored content. Unsubscribe anytime.
        </div>
      </div>
    </section>
  );
}
