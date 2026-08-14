/**
 * ============================================================
 * 【这是什么数据】博客板块的全部配置：
 *   - categories：文章分类枚举（content/blog/*.md 的 category 字段
 *     必须取自这里，lib/blog.ts 读取时使用该枚举做类型校验）
 *   - defaultAuthor / defaultCover / readingSpeedCpm：文章缺省值与
 *     阅读时长计算参数
 *   - blogPage：博客列表页顶部 Hero 文案
 *   - blogUi：列表筛选、卡片、详情页的界面文案
 *   - blogSeo：博客列表页 metadata、RSS feed、JSON-LD 文案
 * 【在哪里被使用】
 *   - lib/blog.ts（categories/defaultAuthor/defaultCover/readingSpeedCpm）
 *   - app/blog/page.tsx、app/blog/[slug]/page.tsx、app/feed.xml/route.ts
 *   - components/blog/BlogFilters.tsx、PostCard.tsx
 * 【修改时注意什么】
 *   - 本文件是纯数据，不能 import 任何含 node API 的模块
 *     （会被客户端组件引用）
 *   - 新增分类：改 categories 数组即可；已有文章的 category
 *     写成其他值会在类型层报错
 *   - defaultCover 的取值必须是 config/photos.ts 里 blogPhotos 的 key
 * ============================================================
 */

/** 博客分类枚举（新增分类改这里） */
export const categories = [
  "近视防控",
  "学生护眼",
  "眼镜选购",
  "长辈视界",
] as const;

export type Category = (typeof categories)[number];

/** 文章未写 author 时的默认作者 */
export const defaultAuthor = "E视视光团队";

/** 文章未写 cover 时的默认封面（config/photos.ts 中 blogPhotos 的 key） */
export const defaultCover = "default";

/** 中文阅读速度约 400 字/分钟（用于计算阅读时长） */
export const readingSpeedCpm = 400;

/** 博客列表页顶部 Hero 文案 */
export const blogPage = {
  eyebrow: "Eye Health Blog",
  title: "护眼博客",
  subtitle:
    "近视防控、学生护眼、眼镜选购、长辈视界 —— 用验光师的知识，讲清楚每一件和眼睛有关的小事。",
};

/** 博客界面文案 */
export const blogUi = {
  /** 分类筛选的「全部」标签 */
  allLabel: "全部",
  /** 筛选结果计数，{n} 为文章数 */
  postCount: (n: number) => `共 ${n} 篇文章`,
  /** 阅读时长，{n} 为分钟数 */
  readMinutes: (n: number) => `阅读约 ${n} 分钟`,
  /** 卡片链接文案 */
  readMore: "阅读全文",
  /** 详情页面包屑 */
  breadcrumbHome: "首页",
  breadcrumbBlog: "护眼博客",
  /** 详情页作者头像占位字 */
  authorAvatarChar: "E",
  /** 详情页底部预约 CTA */
  cta: {
    title: "眼睛的问题，值得当面聊一聊",
    desc: "文章能讲清道理，验光才能看清状况。预约免费验光，让专业人士为你的眼睛做一次完整评估。",
    button: "预约免费验光",
    buttonHref: "/#contact",
  },
  /** 详情页相关文章标题 */
  relatedTitle: "继续阅读",
  /** 详情页返回按钮 */
  backLabel: "返回全部文章",
};

/** 博客列表页 SEO 与 RSS 文案 */
export const blogSeo = {
  /** 列表页页面标题 */
  title: "护眼博客｜眼镜与眼健康科普",
  description:
    "E视眼镜护眼博客：近视防控、学生护眼、眼镜选购、长辈视界 —— 用专业验光师的知识，讲清楚每一件和眼睛有关的小事。",
  ogTitle: "护眼博客｜E视眼镜",
  ogDescription:
    "近视防控、学生护眼、眼镜选购、长辈视界 —— 眼镜与眼健康的实用科普。",
  /** RSS feed（/feed.xml）的标题与描述 */
  feedTitle: "E视眼镜 · 护眼博客",
  feedDescription:
    "近视防控、学生护眼、眼镜选购、长辈视界 —— 眼镜与眼健康的实用科普。",
  /** 列表页 Blog JSON-LD */
  jsonLd: {
    blogName: "E视眼镜护眼博客",
    blogDesc: "眼镜与眼健康科普：近视防控、学生护眼、眼镜选购、长辈视界。",
  },
};
