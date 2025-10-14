/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Make asset URLs relative so exported static files in `out/` work when
  // served from a subpath (for example GitHub Pages). This changes links
  // from "/_next/..." to "./_next/..." in the exported HTML.
  assetPrefix: './',
  images: {
    // disable next/image optimizations for static export (safer for exports)
    unoptimized: true,
  },
}

module.exports = nextConfig
