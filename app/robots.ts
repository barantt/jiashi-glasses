import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

// 静态导出（output: "export"）要求路由显式声明静态
export const dynamic = "force-static";

/**
 * 爬虫访问规则。
 * - 搜索爬虫（Google / Bing / 百度 / AI 搜索）全部放行；
 * - GPTBot（OpenAI 模型训练爬虫）默认禁止 —— 若希望内容可用于
 *   OpenAI 模型训练，将其改为 allow 即可。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Baiduspider", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
