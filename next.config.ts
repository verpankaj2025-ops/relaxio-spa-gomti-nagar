import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  eslint: {
    ignoreDuringBuilds: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],

    qualities: [55, 60, 65, 70, 75, 80, 85, 90],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        
        pathname: '/**',
      },
    ],
  },

  output: 'standalone',

  webpack: (config, { dev }) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);