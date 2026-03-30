import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dailyecho_lp',
  assetPrefix: '/dailyecho_lp',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
