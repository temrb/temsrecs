/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com', 'temsrecs.s3.us-east-2.amazonaws.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
