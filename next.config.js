const dotenv = require('dotenv');
const path = require('path'); 
dotenv.config();

module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/users?page=1',
        permanent: true,
        basePath: false,
      }
    ]
  },
  env: {
    REQUESRS_API_ENDPOINT_USERS: process.env.REQUESRS_API_ENDPOINT_USERS,
  },
  webpack: (config) => {
    config.resolve.alias['@customTypes'] = path.join(__dirname, 'Types');
    config.resolve.alias['@api'] = path.join(__dirname, 'API');
    config.resolve.alias['@icon'] = path.join(__dirname, 'app');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in'
      }
    ]
  }
};
