/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    // async headers() {
    //     return [
    //         {
    //             source: "/(.*)",
    //             headers: [
    //                 {
    //                     key: "Cross-Origin-Embedder-Policy",
    //                     value: "require-corp",
    //                 },
    //                 {
    //                     key: "Cross-Origin-Opener-Policy",
    //                     value: "same-origin",
    //                 },
    //             ],
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
