import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noise-to-Signal | The Founder Attention Index",
  description:
    "Every week, we count how much startup content gets published. And how much is actually worth your time. The ratio is always bad.",
  openGraph: {
    title: "Noise-to-Signal",
    description: "The weekly ratio of startup noise to signal. It's always bad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
