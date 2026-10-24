/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (served at the root of nibruad16.github.io).
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
