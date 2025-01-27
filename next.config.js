/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },

  output: "export",
  trailingSlash: true,
  distDir: "dist/supercharged",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
