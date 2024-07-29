/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'picsum.photos', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
