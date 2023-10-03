/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        remotePatterns: [
          {
            hostname: 'randomuser.me',
          },
        ],
      },
}

module.exports = nextConfig
