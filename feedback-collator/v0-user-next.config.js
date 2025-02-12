/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/feedback-collator",
  basePath: "/feedback-collator",
}

module.exports = nextConfig

