import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { siteUrl } from "@/config/site";

// 静态导出（output: "export"）要求路由显式声明静态
export const dynamic = "force-static";

/** 站点地图 —— 首页 + 博客列表 + 全部文章 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T08:00:00+08:00`),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}
