/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Disable turbopack for Cloudflare - it's not fully supported yet
    experimental: {
        turbo: false,
    },
}

module.exports = nextConfig