const nextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    images: {
        remotePatterns: [
            { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
        ],
    },
};
export default nextConfig;
