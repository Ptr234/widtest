/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/widtest',
  trailingSlash: true, // Add this line
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
