/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const path = require('path')

const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias.Images = path.join(__dirname, 'images')
    return config
  },
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
  ],
  nextConfig,
)
