import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
