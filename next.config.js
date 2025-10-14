/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  // Ensures internal links and asset URLs work correctly on static hosts
  assetPrefix: '',

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
