/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  redirects: async () => {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: false,
      },
      {
        source: '/categories',
        destination: '/products/1',
        permanent: false,
      },
    ];
  }

};

module.exports = nextConfig;
