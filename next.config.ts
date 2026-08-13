import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不在响应头暴露框架指纹
  poweredByHeader: false,
  images: {
    // 占位图来源：Unsplash CDN；换成自有图片（public/ 本地路径）后无需此项
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
