/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },
  images: {
    remotePatterns: [
      {
        hostname: 'sscdn.co'
      }
    ]
  }
}

module.exports = nextConfig
