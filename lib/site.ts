/**
 * 站点根地址。
 * 部署时通过环境变量 NEXT_PUBLIC_SITE_URL 指定正式域名（如 https://www.example.com），
 * 未设置时回退到本地开发地址。
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
