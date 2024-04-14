/** @type {import('next').NextConfig} */


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        
      },
    ],
  },
  // transpilePackages: ['three'],
}

// const withTM = require('next-transpile-modules')(['three'])
// module.exports = withTM()

