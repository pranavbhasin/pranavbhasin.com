import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "substackcdn.com" },
      { protocol: "https", hostname: "*.substack.com" },
    ],
  },
};

export default nextConfig;
