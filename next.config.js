/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*?)', // Adjust this to match your route pattern
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' https://cdnjs.cloudflare.com",
          },
        ],
      },
    ];
  },
  images: {
    domains: ['cdn.sanity.io'], // Add other domains if needed
  },
};

