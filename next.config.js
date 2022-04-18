/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
