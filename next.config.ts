import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '/image-vector/**',
      },
    ],
  },
};

export default nextConfig;
