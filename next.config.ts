import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "noisetosignal.vercel.app" }],
        destination: "https://www.founderratio.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
