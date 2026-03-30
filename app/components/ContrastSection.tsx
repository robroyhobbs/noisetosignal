const published = [
  "10 AI tools every founder needs right now",
  "Why I quit my $500K job to chase my dream",
  "The ultimate founder morning routine",
  "How I got 10,000 LinkedIn followers in 30 days",
  "Thread: what nobody tells you about building in public",
  "My framework for frameworks",
  "The 5 mistakes founders make (and how to avoid them)",
  "Why product-market fit is actually about mindset",
];

const needed = [
  "How do I handle a cofounder who's checked out?",
  "My Series A lead wants a board seat. What should I negotiate?",
  "We missed our Q1 number. How do I tell the team?",
  "Which of these two candidates do I actually hire?",
  "Our top engineer just got poached. Now what?",
  "I think we're building the wrong thing. How do I know?",
  "My investors are pushing for growth I don't believe in.",
  "How do I have the conversation about equity with my early hires?",
];

export function ContrastSection() {
  return (
    <div
      style={{
        background: "#0d0d14",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "64px 0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 40,
          }}
        >
          The gap
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          {/* Left — what gets published */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-sec)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                What gets published
              </h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {published.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 14,
                    color: "#555570",
                    lineHeight: 1.5,
                    paddingLeft: 16,
                    borderLeft: "2px solid #2a2a3a",
                    textDecoration: "line-through",
                    textDecorationColor: "#3a3a4a",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — what founders actually need */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                }}
              />
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-sec)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                What founders actually need
              </h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {needed.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 14,
                    color: "var(--text-primary)",
                    lineHeight: 1.5,
                    paddingLeft: 16,
                    borderLeft: "2px solid #22c55e40",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          style={{
            fontSize: 15,
            color: "var(--text-sec)",
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            lineHeight: 1.7,
            maxWidth: 640,
          }}
        >
          The gap between those two columns is where founders lose the most time.
          Content fills the feed. The real questions stay unanswered.
        </p>
      </div>
    </div>
  );
}
