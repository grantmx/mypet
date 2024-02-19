/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        google: {
            apiKey: "AIzaSyBNDF8TAgcX7kSlS6MonMj8LEP-7Ub8yn0"
        },
    },
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            },
        ]
    }
};

export default nextConfig;
