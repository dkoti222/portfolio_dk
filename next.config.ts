import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
      ignoreDuringBuilds: true, // ✅ This disables linting errors during build
    },
};

export default nextConfig;
