import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const securityHeaders = [
  {
  key: 'Content-Security-Policy',
  value:
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:;",
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

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
  minimumCacheTTL: 31536000,

  deviceSizes: [640, 768, 1024, 1280, 1600],
  imageSizes: [16, 32, 48, 64, 96],

  qualities: [40, 55, 60, 75, 80, 90],

  dangerouslyAllowSVG: false,
  contentDispositionType: 'attachment',
},

  experimental: {
  optimizeCss: true,
},

  webpack: (config, { dev }) => {
  if (!dev) {
    config.optimization.minimize = true;
  }

  return config;
},

async headers() {
  return [
    {
  source: '/(.*)',
  headers: securityHeaders,
},

    {
      source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
},

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withBundleAnalyzer(nextConfig);