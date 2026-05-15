import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allowedDevOrigins: ['100.80.80.63'],
  output: "export",
  basePath: '/gemini/',
  assetPrefix: '/gemini/',
  images: { unoptimized: true }
};

export default nextConfig;
