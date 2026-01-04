/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  // GH Pages usually serves from a subdirectory (repo name), unless a custom domain is used.
  // We use an environment variable to set this during build time if needed.
  // If undefined, it falls back to empty string (root), which is correct for custom domains or localhost.
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',

  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,

  // Disable Next.js image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optional: suppress warnings about unsupported features during export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
