/**
 * ============================================================
 * 【这是什么数据】产品相关的全部数据：
 *   - productSeries：产品系列区块（#products）三大业务线卡片
 *   - productsSection：该区块的眉题 / 标题 / 副标题 / 按钮 / 脚注文案
 *   - showroomCategories / showroomProducts / tagStyles：产品展示区
 *     （#showroom）的分类 Tab、12 款在售产品、角标样式
 *   - showroomSection：该区块的眉题 / 标题 / 副标题 / 文案模板 / 脚注
 * 【在哪里被使用】
 *   - components/Products.tsx、components/Showroom.tsx
 * 【修改时注意什么】
 *   - productSeries[].photo 引用 config/photos.ts 的 linePhotos key；
 *     showroomProducts[].variant 引用 productPhotos 的 key ——
 *     改 key 必须两边同步
 *   - showroomProducts[].tag 引用 tagStyles 的 key，新增角标文案
 *     需同时在 tagStyles 加样式（Tailwind class 字符串）
 *   - features / spec 里内嵌的「21 步」「8 克」数字对应
 *     config/site.ts 的 brandFacts.steps / titaniumWeight，改数字要同步
 *   - 价格为演示占位数据，上线前替换真实价格
 * ============================================================
 */

import type { Photo } from "./photos";
import { linePhotos, productPhotos } from "./photos";

/* ---------------- 产品系列区块（#products） ---------------- */

export interface ProductSeries {
  /** 唯一标识 */
  id: string;
  /** 英文眉题（卡片内小字） */
  en: string;
  title: string;
  desc: string;
  /** 卖点列表（含「21 步」「8 克」，对应 brandFacts，改数字同步 config/site.ts） */
  features: string[];
  /** 价格文案 */
  price: string;
  /** 顶部通栏大图（linePhotos 的 key） */
  photo: Photo;
  /** 是否核心推荐（金色高亮卡片样式） */
  featured: boolean;
}

export const productSeries: ProductSeries[] = [
  {
    id: "student-glasses",
    en: "MYOPIA · 学生配镜",
    title: "学生近视眼镜",
    desc: "为课业繁重的孩子设计：医学验光配镜一体化，度数精准、佩戴轻盈，让清晰与专注常伴课堂。",
    features: [
      "21 步医学验光，度数精确到 0.25D",
      "离焦镜片可选，有效延缓近视加深",
      "航空钛镜架，轻至 8 克，防摔耐磨",
    ],
    price: "学生套餐 ¥299 起",
    photo: linePhotos.student,
    featured: true,
  },
  {
    id: "sunglasses",
    en: "SUNWEAR · 时尚单品",
    title: "时尚太阳镜",
    desc: "遮阳不只是防护，更是一种态度。当季潮流款式月月上新，亦支持定制近视太阳镜片。",
    features: [
      "UV400 全波段紫外线防护",
      "当季潮流款式，月月上新",
      "可定制近视镜片，度数也能凹造型",
    ],
    price: "精选款 ¥199 起",
    photo: linePhotos.sun,
    featured: false,
  },
  {
    id: "reading-glasses",
    en: "READING · 长辈关怀",
    title: "老花镜",
    desc: "为父母长辈精准验配：渐进多焦点看远看近一副搞定，轻便舒适，让阅读回归轻松。",
    features: [
      "渐进多焦点，看远看近一副搞定",
      "度数精准验配，无需将就",
      "轻便舒适，长辈佩戴无负担",
    ],
    price: "基础款 ¥159 起",
    photo: linePhotos.reading,
    featured: false,
  },
];

/** 产品系列区块文案 */
export const productsSection = {
  eyebrow: "Our Collection",
  title: "一副好眼镜，不止于清晰",
  subtitle:
    "从课堂到旅途，从青春到从容 —— E视为每个年龄段的眼睛，准备恰到好处的答案。",
  /** 核心推荐卡片的角标文案 */
  featuredBadge: "核心推荐",
  /** 卡片底部按钮 */
  ctaLabel: "了解详情",
  ctaHref: "/#showroom",
  /** 区块底部注释 */
  footnote: "所有镜片均可按需升级防蓝光 / 抗疲劳膜层，详情请咨询店内验光师。",
};

/* ---------------- 产品展示区（#showroom） ---------------- */

/** 分类 Tab（第一项「全部」为聚合筛选） */
export const showroomCategories = [
  "全部",
  "镜片",
  "眼镜架",
  "太阳镜",
  "老花镜",
] as const;

export type ShowroomCategory = (typeof showroomCategories)[number];
/** 产品所属分类（不含「全部」） */
export type ShowroomProductCategory = Exclude<ShowroomCategory, "全部">;

/**
 * 角标样式（Tailwind class 字符串）。
 * key 即角标文案，showroomProducts[].tag 引用这里的 key。
 */
export const tagStyles: Record<string, string> = {
  热卖: "bg-green-400 text-navy-950",
  新品: "bg-navy-800 text-cream",
  学生优选: "border border-green-500/60 bg-white text-green-700",
};

export interface ShowroomProduct {
  /** 唯一标识 */
  id: string;
  name: string;
  category: ShowroomProductCategory;
  /** 对应 config/photos.ts 中 productPhotos 的 key */
  variant: keyof typeof productPhotos;
  /** 角标（对应 tagStyles 的 key，可省略） */
  tag?: keyof typeof tagStyles;
  /** 一句话卖点（含「8 克」对应 brandFacts.titaniumWeight） */
  spec: string;
  price: string;
}

/** 12 款在售产品（演示数据，上线前替换） */
export const showroomProducts: ShowroomProduct[] = [
  {
    id: "defocus-lens",
    name: "离焦防控镜片",
    category: "镜片",
    variant: "lens-dim",
    tag: "热卖",
    spec: "微透镜阵列设计，专为学生延缓近视加深",
    price: "¥980 起",
  },
  {
    id: "blue-light-lens",
    name: "防蓝光镜片",
    category: "镜片",
    variant: "lens-blue",
    tag: "学生优选",
    spec: "网课护眼之选，过滤有害蓝光不偏色",
    price: "¥380 起",
  },
  {
    id: "photochromic-lens",
    name: "智能变色镜片",
    category: "镜片",
    variant: "lens-photo",
    spec: "室内通透清晰，户外自动变深防强光",
    price: "¥580 起",
  },
  {
    id: "titanium-frame",
    name: "航空钛轻韧镜架",
    category: "眼镜架",
    variant: "titanium-round",
    tag: "热卖",
    spec: "轻至 8 克，抗过敏不压鼻，学生久戴无负担",
    price: "¥399 起",
  },
  {
    id: "kids-silicone-frame",
    name: "儿童硅胶软腿镜架",
    category: "眼镜架",
    variant: "kids",
    tag: "学生优选",
    spec: "柔软硅胶镜腿，运动防滑防摔不怕折",
    price: "¥299 起",
  },
  {
    id: "tr90-frame",
    name: "TR90 板材镜架",
    category: "眼镜架",
    variant: "square",
    tag: "新品",
    spec: "记忆板材轻盈坚韧，多彩配色随心选",
    price: "¥259 起",
  },
  {
    id: "aviator-sunglasses",
    name: "经典飞行员太阳镜",
    category: "太阳镜",
    variant: "aviator",
    tag: "热卖",
    spec: "UV400 全防护，支持定制近视太阳镜片",
    price: "¥499 起",
  },
  {
    id: "sport-sunglasses",
    name: "运动偏光太阳镜",
    category: "太阳镜",
    variant: "sport",
    spec: "偏光防眩光，骑行跑步户外好伙伴",
    price: "¥399 起",
  },
  {
    id: "square-sunglasses",
    name: "方形潮流太阳镜",
    category: "太阳镜",
    variant: "square-sun",
    tag: "新品",
    spec: "当季流行方框，拍照上镜显脸小",
    price: "¥459 起",
  },
  {
    id: "progressive-reading",
    name: "渐进多焦点老花镜",
    category: "老花镜",
    variant: "progressive",
    tag: "热卖",
    spec: "看远看近一副搞定，长辈生活更从容",
    price: "¥899 起",
  },
  {
    id: "halfrim-reading",
    name: "经典半框老花镜",
    category: "老花镜",
    variant: "halfrim",
    spec: "轻便舒适，度数精准验配，即配即取",
    price: "¥159 起",
  },
  {
    id: "folding-reading",
    name: "折叠便携老花镜",
    category: "老花镜",
    variant: "folding",
    spec: "三折收纳进小盒，随身携带不占地",
    price: "¥199 起",
  },
];

/** 产品展示区文案 */
export const showroomSection = {
  eyebrow: "Showroom",
  title: "每一副，都经得起细看",
  subtitle:
    "镜片、镜架、太阳镜、老花镜 —— 精选在售款式，欢迎到店试戴体验。",
  /** 筛选结果计数文案，{n} 为当前筛选下的产品数 */
  countTemplate: (n: number) => `共 ${n} 款精选产品 · 更多款式欢迎到店挑选`,
  /** 产品卡片底部链接 */
  ctaLabel: "到店咨询",
  ctaHref: "#contact",
  /** 区块底部注释 */
  footnote: "展示价格为示意价，实际以到店验光后测算为准；款式持续上新。",
};
