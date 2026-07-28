import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tell Next.js which directory is the workspace root so it stops guessing
  // from nearby lockfiles during build output tracing.
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
