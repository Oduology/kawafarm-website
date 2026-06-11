import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sdgs.un.org"
      }
    ]
  }
};

export default nextConfig;
