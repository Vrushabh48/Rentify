import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ahoybikes.com',
        port: '',
        pathname: '/wp-content/uploads/**', // Use a wildcard to cover any subdirectories or files
      },
    ],
  },
};

export default nextConfig;
