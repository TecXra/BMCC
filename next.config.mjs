/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This will allow images from any domain
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
