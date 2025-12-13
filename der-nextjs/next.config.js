/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/widtest" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/widtest/" : "",
};

module.exports = nextConfig;
