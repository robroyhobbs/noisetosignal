import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://founderratio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Founder Ratio | Weekly picks for venture-backed founders",
    template: "%s | Founder Ratio",
  },
  description:
    "Weekly noise÷signal ratio and five decision-changing picks for venture-backed founders.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Founder Ratio | The Founder Attention Index",
    description:
      "Five picks that change a real decision, plus the weekly noise÷signal ratio. The ratio is always bad.",
    url: siteUrl,
    siteName: "Founder Ratio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Ratio | The Founder Attention Index",
    description:
      "Five decision-changing picks and the weekly noise÷signal ratio.",
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
