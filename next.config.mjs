/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "images.unsplash.com", "assets.aceternity.com", "ap-south-1.graphassets.com"],
    remotePatterns: [
      { hostname: "unsplash.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "i.pravatar.cc" },
    ] // Add any other domains you plan to use here
  },
  pageExtensions: ["ts", "tsx", "mdx"]
};

export default nextConfig;
