/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
  images: {
    domains: ['media.graphassets.com', 'picsum.photos', 'loremflickr.com']
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
      {
        source: '/categories/:categoryName',
        destination: '/categories/:categoryName/1',
        permanent: false,
      },
      {
        source: '/search',
        destination: '/search/1',
        permanent: false,
      },
      {
        source: '/collection/:categoryName',
        destination: '/collection/:categoryName/1',
        permanent: false,
      },
      {
        source: '/collections',
        destination: '/collections/1',
        permanent: false,
      },
    ];
  }

};

module.exports = nextConfig;
