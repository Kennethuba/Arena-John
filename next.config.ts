import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.e2b.app", "*.arena.ai"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
