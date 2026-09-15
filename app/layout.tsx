import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Founder Ratio | Weekly picks for venture-backed founders",
    template: "%s | Founder Ratio",
  },
  description:
    "Weekly noise÷signal ratio and five decision-changing picks for venture-backed founders.",
  openGraph: {
    title: "Founder Ratio | The Founder Attention Index",
    description:
      "Five picks that change a real decision, plus the weekly noise÷signal ratio. The ratio is always bad.",
    siteName: "Founder Ratio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Founder Ratio — weekly picks for venture-backed founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Ratio | The Founder Attention Index",
    description:
      "Five decision-changing picks and the weekly noise÷signal ratio.",
    images: ["/og.png"],
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
