/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'github.com',
//           port: '',
//           pathname: '/TruongHoaiLinh3103/**',
//         },
//       ],
//     },
// }
  