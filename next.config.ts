import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.7.158.157',
        port: '',
        pathname: '/uploads/**',
        search: '',
      },
    ],
  },
  env: {
    BASE_URL: 'http://3.7.158.157/api',
    IMAGE_BASE_URL: 'http://3.7.158.157',
  },
};

export default nextConfig;
