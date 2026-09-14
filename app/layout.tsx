import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://noisetosignal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Noise-to-Signal | 5 stake-oriented picks for venture-backed founders",
    template: "%s | Noise-to-Signal",
  },
  description:
    "Every week: the noise-to-signal ratio plus 5 curated, stake-oriented picks for venture-backed founders — fundraising, hiring, board, runway, GTM. FounderNexus is the room.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Noise-to-Signal | The Founder Attention Index",
    description:
      "5 stake-oriented picks for venture-backed founders — plus the weekly ratio of startup noise to signal. FounderNexus is the room.",
    url: siteUrl,
    siteName: "Noise-to-Signal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noise-to-Signal | The Founder Attention Index",
    description:
      "5 stake-oriented picks for venture-backed founders — plus the weekly ratio. FounderNexus is the room.",
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
