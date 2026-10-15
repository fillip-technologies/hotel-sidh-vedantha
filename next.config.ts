import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    // Old WordPress URLs that now live under /rooms. 301 keeps their search ranking.
    return [
      { source: "/rooms-suites", destination: "/rooms", statusCode: 301 },
      { source: "/executive-rooms-in-patna", destination: "/rooms/executive-rooms", statusCode: 301 },
      { source: "/best-club-rooms-in-patna", destination: "/rooms/club-rooms", statusCode: 301 },
      { source: "/luxury-suites-in-patna", destination: "/rooms/vedantha-suite", statusCode: 301 },
    ];
  },
};

export default nextConfig;
