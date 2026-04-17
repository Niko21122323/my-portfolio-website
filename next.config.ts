import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["gsap"],
  experimental: {
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
