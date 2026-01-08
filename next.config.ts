import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.notion.so",
      "resources.jetbrains.com",
      "cdn.worldvectorlogo.com",
      "cdn.jsdelivr.net"
    ],
  },
  devIndicators: false
};

export default nextConfig;
