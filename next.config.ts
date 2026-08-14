import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不在响应头暴露框架指纹
  poweredByHeader: false,
  // 纯静态站：Cloudflare Pages 静态托管（next build 输出 out/ 目录）
  output: "export",
  // 允许通过公网 IP 访问 dev server（仅开发环境生效，生产构建不受影响）
  allowedDevOrigins: ["124.222.121.200"],
  images: {
    // 静态导出没有服务端图片优化（/_next/image 不存在），图片由浏览器直连源站；
    // 当前为 Unsplash 占位图，后期换成国内 OSS/CDN 域名后无需任何配置
    unoptimized: true,
  },
};

export default nextConfig;
