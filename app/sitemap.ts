import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** 站点地图 —— 单页落地页，当前仅首页一个 URL */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
