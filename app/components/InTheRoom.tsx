import { FnLink } from "./FnLink";

interface InTheRoomProps {
  weekOf: string;
}

export function InTheRoom({ weekOf }: InTheRoomProps) {
  const campaign = `week-${weekOf}`;
  const roomLink = `https://www.foundernexus.com?utm_source=founderratio&utm_medium=referral&utm_campaign=${campaign}&utm_content=in-the-room-secondary`;
  const applyLink = `https://platform.foundernexus.com/registration?utm_source=founderratio&utm_medium=referral&utm_campaign=${campaign}&utm_content=in-the-room`;

  return (
    <div
      style={{
        background: "#080810",
        borderTop: "1px solid var(--border-strong)",
        borderBottom: "1px solid var(--border-strong)",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 28,
          }}
        >
          Beyond the index
        </p>

        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          The signal is the public version.
          <br />
          FounderNexus is the room.
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "var(--text-sec)",
            lineHeight: 1.8,
            margin: "0 0 40px",
          }}
        >
          The index is public. The hard calls get better in a room of founders
          who have been through it —{" "}
          <FnLink
            href={roomLink}
            slug={`in-the-room-${weekOf}`}
            style={{
              color: "var(--text-primary)",
              textDecoration: "underline",
              textUnderlineOffset: 3,
              textDecorationColor: "var(--border-strong)",
            }}
          >
            FounderNexus
          </FnLink>
          .
        </p>

        <FnLink
          href={applyLink}
          slug={`in-the-room-apply-${weekOf}`}
          style={{
            display: "inline-block",
            padding: "12px 28px",
            background: "transparent",
            border: "1px solid var(--border-strong)",
            borderRadius: 4,
            color: "var(--text-primary)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "border-color 0.2s",
          }}
        >
          Apply to FounderNexus
        </FnLink>
      </div>
    </div>
  );
}
