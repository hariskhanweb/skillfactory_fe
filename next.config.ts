import type { NextConfig } from "next";

/**
 * Static export config for S3 (and other static hosting).
 * Build output goes to ./out — upload that folder to your S3 bucket.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
