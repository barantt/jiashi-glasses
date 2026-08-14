/**
 * ============================================================
 * 【这是什么数据】品牌与站点全局信息：品牌名、标语、创立年份、
 *   版权、ICP 备案号、品牌核心数字（brandFacts）、全站 SEO 元信息。
 * 【在哪里被使用】
 *   - brand / slogan / foundedYear：导航栏、页脚、首屏 Hero、
 *     app/layout.tsx 的 metadata、首页与博客页的 JSON-LD
 *   - copyright / icp：页脚 Footer
 *   - brandFacts：首屏统计、评价区评分、信任条、流程步骤等处的数字
 *   - seo / ogImage：app/layout.tsx 全站 metadata
 * 【修改时注意什么】
 *   - 改品牌名后，seo.titleTemplate / seo.og.siteName 等含品牌名的字段
 *     也要同步修改（见各字段旁的注释）
 *   - brandFacts 的数字在多个区块的「叙述句」里也内嵌出现（例如
 *     Hero 副标题里的「21 步」），改数字前先看 brandFacts 注释里
 *     列出的引用清单，逐处同步
 * ============================================================
 */

/**
 * 站点根地址。
 * 部署时通过环境变量 NEXT_PUBLIC_SITE_URL 指定正式域名（如 https://eshiglasses.com），
 * 未设置时回退到本地开发地址。
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** 品牌基础信息 */
export const brand = {
  /** 中文名（导航栏 / 页脚 / 标题等） */
  name: "E视眼镜",
  /** 英文大写（版权行、JSON-LD 结构化数据） */
  nameEn: "EVISION OPTICAL",
  /** 英文首字母大写（导航栏副标、Hero 眉题） */
  nameLatin: "Evision Optical",
  /** 品牌标语（页脚展示） */
  slogan: "看见，更美的世界。专注学生近视配镜十四年，用心对待每一双眼睛。",
  /** 创立年份 */
  foundedYear: "2012",
};

/**
 * 版权信息。
 * 【年份维护方式二选一】
 *   1. 每年年初手动改下面的 year 字段（当前方案，可控）
 *   2. 把 year 改成 `new Date().getFullYear()` 自动取当前年份
 *      （静态导出站点在构建时定值，不重建就不会更新）
 */
export const copyright = {
  year: "2026",
  text: "保留所有权利",
};

/** ICP 备案号（当前为占位，拿到备案号后替换） */
export const icp = "粤ICP备XXXXXXXX号（占位）";

/**
 * 品牌核心数字 —— 全站数字的唯一出处（演示占位数据，上线前替换真实数据）。
 * 【引用位置清单，改数字必须逐处同步】
 *   - years: Hero 统计「14 年」、Hero 副标题「十四年」、页脚标语「十四年」
 *   - students: Hero 统计「10 万+」
 *   - steps: Hero 统计/悬浮卡/副标题、产品系列 features、流程步骤 3 的「21 步」
 *   - rating: Hero 统计「4.9 分」、评价区「4.9 / 5.0」
 *   - reviews: 评价区「2,300+ 条真实评价」
 *   - shipHours: 信任条「48 小时快速取镜」、流程步骤 5 的「48 小时」
 *   - titaniumWeight: 产品系列/展示产品 spec 的「轻至 8 克」
 */
export const brandFacts = {
  /** 专业视光经验年数 */
  years: "14",
  /** 学生配镜信赖人数（单位「万+」在 config/hero.ts 中） */
  students: "10",
  /** 医学验光步骤数 */
  steps: "21",
  /** 家长口碑评分 */
  rating: "4.9",
  /** 真实评价条数 */
  reviews: "2,300+",
  /** 取镜时效（小时） */
  shipHours: "48",
  /** 航空钛镜架重量（克） */
  titaniumWeight: "8",
};

/**
 * 全站 SEO 元信息（app/layout.tsx 的 metadata 直接引用）。
 * 【注意】titleTemplate / og.title / og.siteName / og.imageAlt 中含品牌名，
 * 改 brand.name 时这些字段要一起改。
 */
export const seo = {
  /** 默认页面标题（首页等未单独设置标题的页面） */
  titleDefault: "E视眼镜 EVISION OPTICAL｜学生近视配镜 · 专业验光",
  /** 子页面标题模板，%s 会被页面自身标题替换 */
  titleTemplate: "%s｜E视眼镜",
  description:
    "E视眼镜专注学生近视配镜十四年，21 步医学验光、轻至 8 克的航空钛镜架、延缓近视加深的功能性镜片，同时提供时尚太阳镜与精准老花镜验配。",
  keywords: [
    "E视眼镜",
    "学生配镜",
    "近视眼镜",
    "医学验光",
    "太阳镜",
    "老花镜",
  ],
  og: {
    title: "E视眼镜 EVISION OPTICAL｜看清世界，从E视开始",
    description:
      "专注学生近视配镜十四年：医学验光、轻盈镜架、近视防控，也为您与家人提供时尚太阳镜与老花镜。",
    url: "/",
    locale: "zh_CN",
    type: "website",
    siteName: "E视眼镜 EVISION OPTICAL",
    imageAlt: "E视眼镜 EVISION OPTICAL — 看清世界，从E视开始",
  },
  twitter: {
    card: "summary_large_image",
    title: "E视眼镜 EVISION OPTICAL｜看清世界，从E视开始",
    description:
      "专注学生近视配镜十四年：医学验光、轻盈镜架、近视防控，也为您与家人提供时尚太阳镜与老花镜。",
  },
} satisfies {
  // 保持 og.type / twitter.card 的字面量类型，供 app/layout.tsx 的 Metadata 使用
  titleDefault: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  og: {
    title: string;
    description: string;
    url: string;
    locale: string;
    type: "website";
    siteName: string;
    imageAlt: string;
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
  };
};

/** LocalBusiness JSON-LD 用业务描述（首页结构化数据，与 seo.description 不同） */
export const businessDescription =
  "专注学生近视配镜的眼镜店，提供医学验光、近视防控镜片、时尚太阳镜与老花镜验配服务。";

/** 全站社交分享图（public/og-image.png，由 scripts/generate-og-image.mjs 生成） */
export const ogImage = "/og-image.png";
