/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  // Prevent Next.js from inferring a different workspace root when multiple lockfiles exist
  // Use the current project directory as the tracing root to avoid Windows path mismatch issues
  outputFileTracingRoot: process.cwd()
};
export default nextConfig;
