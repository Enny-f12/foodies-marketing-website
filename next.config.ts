import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "toppng.com",
      },
      {
        protocol: "https",
        hostname: "www.liblogo.com",
      }
    ],
  },
};

export default nextConfig;