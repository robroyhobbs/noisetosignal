const archetypes = [
  {
    name: "The AI Ghost",
    description:
      "Written by ChatGPT. Edited by no one. Published in four minutes. Usually contains the phrase 'in today's fast-paced world.' Has 847 likes.",
  },
  {
    name: "The Humble Brag",
    description:
      "Opens with 'I almost didn't share this.' Closes with a screenshot of a Stripe dashboard. The lesson is vague. The flex is not.",
  },
  {
    name: "The Framework Slide",
    description:
      "A 2x2 matrix that names a problem you already had a word for. Shared without context by 14 VCs. Filed under 'thought leadership.'",
  },
  {
    name: "The Quit My Job Story",
    description:
      "Left a well-paying role for purpose. Three thousand words. Zero product details. Eight mentions of 'authentic.' One affiliate link.",
  },
  {
    name: "The Hot Take",
    description:
      "Cold take with confident punctuation. Contradicts itself in paragraph three. Gets ratio'd. Author calls it 'starting a conversation.'",
  },
];

export function NoiseArchetypes() {
  return (
    <div
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "64px 0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 8,
            }}
          >
            A field guide
          </p>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--text-primary)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            The Five Types of Noise
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-sec)",
              marginTop: 10,
              lineHeight: 1.6,
            }}
          >
            You have seen all of these. Probably this week.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {archetypes.map((a, i) => (
            <div
              key={i}
              style={{
                background: "#0d0d14",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "24px 24px 28px",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 10,
                  fontWeight: 600,
                }}
              >
                Archetype {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {a.name}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-sec)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
