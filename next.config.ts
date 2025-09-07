import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    clientSegmentCache: true,
    nodeMiddleware: true
  },
  images: {
    domains: ['cdn1.iconfinder.com'],
  }
};

export default nextConfig;
