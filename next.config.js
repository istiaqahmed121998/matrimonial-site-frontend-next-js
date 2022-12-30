/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/assets/sass')],
  },
  poweredByHeader: false,
}
module.exports = nextConfig
