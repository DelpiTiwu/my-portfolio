import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // serverActions: { ... }
  },
  // @ts-ignore
  allowedDevOrigins: ["192.168.137.1", "localhost"],
};

export default nextConfig;
