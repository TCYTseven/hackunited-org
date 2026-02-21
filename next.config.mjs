/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/v7', destination: 'https://unitedhacks.hackunited.org/', permanent: true },
      { source: '/v6', destination: 'https://unitedhacksv6.hackunited.org/', permanent: true },
      { source: '/v5', destination: 'https://unitedhacksv5.hackunited.org/', permanent: true },
      { source: '/v4', destination: 'https://unitedhacksv4.hackunited.org/', permanent: true },
      { source: '/v3', destination: 'https://unitedhacksv3.hackunited.org/', permanent: true },
      { source: '/v2', destination: 'https://unitedhacksv2.hackunited.org/', permanent: true },
      { source: '/v1', destination: 'https://unitedhacksv1.hackunited.org/', permanent: true },
    ]
  },
}

export default nextConfig
