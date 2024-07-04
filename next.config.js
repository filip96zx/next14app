/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    ppr: true
  },
  images: {
    remotePatterns: [{ hostname: 'nxt13masters.shop' }, { hostname: 'www.nxt13masters.shop' }]
  },
  redirects: async () => {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true,
      },
      {
        source: '/categories',
        destination: '/products/1',
        permanent: true,
      },
      {
        source: '/categories/:categoryName',
        destination: '/categories/:categoryName/1',
        permanent: true,
      },
      {
        source: '/collection/:categoryName',
        destination: '/collection/:categoryName/1',
        permanent: true,
      },
      {
        source: '/collections',
        destination: '/collections/1',
        permanent: true,
      },
      {
        source: '/category-list',
        destination: '/category-list/1',
        permanent: true,
      },
    ];
  }

};

module.exports = nextConfig;
