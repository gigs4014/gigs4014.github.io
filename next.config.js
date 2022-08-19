/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix:
      process.env.NODE_ENV === "production"
          ? "https://gigs4014.github.io"
          : "",
}

module.exports = nextConfig
