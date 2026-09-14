import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://founderratio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Founder Ratio | 5 stake-oriented picks for venture-backed founders",
    template: "%s | Founder Ratio",
  },
  description:
    "Founder Ratio: the weekly founder attention filter. Every week we publish the noise÷signal ratio plus 5 curated, stake-oriented picks for venture-backed founders — fundraising, hiring, board, runway, GTM. FounderNexus is the room.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Founder Ratio | The Founder Attention Index",
    description:
      "Founder Ratio — weekly founder attention filter. 5 stake-oriented picks plus the ratio of startup noise to signal. The ratio is always bad. FounderNexus is the room.",
    url: siteUrl,
    siteName: "Founder Ratio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Ratio | The Founder Attention Index",
    description:
      "Founder Ratio — 5 stake-oriented picks for venture-backed founders, plus the weekly noise÷signal ratio. FounderNexus is the room.",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/brand/founder-ratio-mark.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
