import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不在响应头暴露框架指纹
  poweredByHeader: false,
};

export default nextConfig;
