/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
            //   pathname: "/image/upload/**",
            },
        ],
    },
};

export default nextConfig;
