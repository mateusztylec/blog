/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    turbopack: {
        // Keep workspace root at repo root so builds in subdirs (e.g. src/app) resolve Next
        root: __dirname,
    },
}

module.exports = nextConfig
