/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
}

nextConfig.webpack = (config, options) => {
  config.plugins.push(
    new NextFederationPlugin({
      name: 'next-app',
      remotes: {
        home: `home@http://localhost:8002/remoteEntry.js`,
      },
      filename: 'static/chunks/remoteEntry.js',
      shared: {},
      extraOptions:{
        automaticAsyncBoundary: true
      }
    }),
  );

  return config;
}

module.exports = nextConfig
