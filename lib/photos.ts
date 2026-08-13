/**
 * 图片数据数组 —— 目前为 Unsplash 占位图，全部 URL 已验证可用。
 *
 * 【换真实照片的方法】
 * 1. 把照片放进 public/photos/ 目录；
 * 2. 把对应条目的 src 改成 "/photos/你的文件名.jpg"（width/height 填实际像素）；
 * 3. 重新 build 即可，无需改动任何组件代码。
 *
 * 注意：Unsplash 图片服务在中国大陆访问可能不稳定，上线前请替换为自有图床或本地图片。
 */

export interface Photo {
  /** 图片地址（本地路径或 https URL） */
  src: string;
  /** 无障碍描述 + 图片 SEO 关键词 */
  alt: string;
  /** 实际渲染宽度（用于防止布局抖动） */
  width: number;
  /** 实际渲染高度 */
  height: number;
  /** 图片来源（占位期间为 Unsplash） */
  credit: string;
}

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&h=${h}&auto=format&fit=crop`;

/** 产品展示区（Showroom）12 款产品的图片，key 与原插画变体名一致 */
export const productPhotos: Record<string, Photo> = {
  // 镜片
  "lens-dim": {
    src: unsplash("1600180758890-6b94519a8ba6", 800, 600),
    alt: "光学镜片特写，离焦防控镜片",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  "lens-blue": {
    src: unsplash("1553545204-4f7d339aa06a", 800, 600),
    alt: "防蓝光眼镜与镜片",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  "lens-photo": {
    src: unsplash("1473496169904-658ba7c44d8a", 800, 600),
    alt: "户外佩戴的变色镜片太阳镜",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  // 眼镜架
  "titanium-round": {
    src: unsplash("1591076482161-42ce6da69f67", 800, 600),
    alt: "精致的金属眼镜架平铺展示",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  kids: {
    src: unsplash("1471193945509-9ad0617afabf", 800, 600),
    alt: "戴着眼镜的可爱儿童",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  square: {
    src: unsplash("1588776814546-1ffcf47267a5", 800, 600),
    alt: "黑色方形板材眼镜架",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  // 太阳镜
  aviator: {
    src: unsplash("1572635196237-14b3f281503f", 800, 600),
    alt: "经典飞行员款式太阳镜",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  sport: {
    src: unsplash("1577803645773-f96470509666", 800, 600),
    alt: "运动款太阳镜",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  "square-sun": {
    src: unsplash("1605100804763-247f67b3557e", 800, 600),
    alt: "方形潮流太阳镜",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  // 老花镜
  progressive: {
    src: unsplash("1447452001602-7090c7ab2db3", 800, 600),
    alt: "戴着老花镜专注阅读的老人",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  halfrim: {
    src: unsplash("1513475382585-d06e58bcb0e0", 800, 600),
    alt: "放在书本上的经典老花镜",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  folding: {
    src: unsplash("1544027993-37dbfe43562a", 800, 600),
    alt: "佩戴老花镜的长辈",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
};

/** 产品系列（三大业务线）图片 */
export const linePhotos: Record<string, Photo> = {
  student: {
    src: unsplash("1503676260728-1c00da094a0b", 800, 600),
    alt: "背书包上学的学生",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  sun: {
    src: unsplash("1529139574466-a303027c1d8b", 800, 600),
    alt: "佩戴时尚太阳镜的女性",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
  reading: {
    src: unsplash("1509005084666-3cbc75184cbb", 800, 600),
    alt: "佩戴老花镜的长辈",
    width: 800,
    height: 600,
    credit: "Unsplash",
  },
};

/** 博客封面图，key 为文章 frontmatter 的 cover 字段 */
export const blogPhotos: Record<string, Photo> = {
  "lens-dim": {
    src: unsplash("1574258495973-f010dfbb5371", 1200, 675),
    alt: "书本上的眼镜与近视防控主题封面",
    width: 1200,
    height: 675,
    credit: "Unsplash",
  },
  "lens-blue": {
    src: unsplash("1547082299-de196ea013d6", 1200, 675),
    alt: "电脑屏幕前的工作台，防蓝光主题封面",
    width: 1200,
    height: 675,
    credit: "Unsplash",
  },
  eye: {
    src: unsplash("1587145820266-a5951ee6f620", 1200, 675),
    alt: "眼睛特写，护眼习惯主题封面",
    width: 1200,
    height: 675,
    credit: "Unsplash",
  },
  progressive: {
    src: unsplash("1590794056226-79ef3a8147e1", 1200, 675),
    alt: "戴着眼镜微笑的长辈，老花镜主题封面",
    width: 1200,
    height: 675,
    credit: "Unsplash",
  },
  sun: {
    src: unsplash("1556306535-0f09a537f0a3", 1200, 675),
    alt: "沙滩上的太阳镜，紫外线防护主题封面",
    width: 1200,
    height: 675,
    credit: "Unsplash",
  },
  default: {
    src: unsplash("1511499767150-a48a237f0083", 1200, 675),
    alt: "眼镜主题默认封面",
    width: 1200,
    height: 675,
    credit: "Unsplash",
  },
};
