/**
 * ============================================================
 * 【这是什么数据】首屏 Hero 区块（#top）的文案与数据：
 *   眉题、主标题、副标题、双 CTA 按钮、四组统计数字、
 *   印章文字、右侧学生形象图、两张悬浮信息卡。
 * 【在哪里被使用】components/Hero.tsx
 * 【修改时注意什么】
 *   - 统计数字 value 引用 config/site.ts 的 brandFacts，
 *     改数字去 site.ts（unit 单位在此文件）
 *   - subtitle 是叙述句，句内嵌的「十四年 / 21 步 / 八克」与
 *     brandFacts 对应 —— 改数字时这句也要同步修改
 *   - title.highlight 是金色高亮词（「E视」），与 brand.name 同字，
 *     这是印章式视觉设计，保持现状即可
 *   - 视力表 ROWS 绘图参数不在这里 —— 它是 SVG 装饰图形，
 *     在 Hero.tsx 组件内
 * ============================================================
 */

import { brand, brandFacts } from "./site";

export const hero = {
  /** 眉题（英文品牌名 + 创立年份） */
  eyebrow: `${brand.nameLatin} · Est. ${brand.foundedYear}`,
  /** 主标题：line1 第一行，highlight 金色高亮词，line2 高亮词之后的文字 */
  title: {
    line1: "看清世界，",
    highlight: "E视",
    line2: "开始",
  },
  /** 副标题（叙述句内嵌数字与 brandFacts 对应，改数字同步） */
  subtitle:
    "专注学生近视配镜十四年 —— 21 步医学验光、轻至八克的航空钛镜架、延缓近视加深的功能性镜片，也为您与家人提供时尚太阳镜与精准老花镜。",
  /** 主 CTA（金色按钮） */
  ctaPrimary: { label: "预约免费验光", href: "#contact" },
  /** 次 CTA（描边按钮） */
  ctaSecondary: { label: "探索产品系列", href: "#products" },
  /** 四组统计数字（value 来自 brandFacts，unit 为单位后缀） */
  stats: [
    { value: brandFacts.years, unit: "年", label: "专业视光经验" },
    { value: brandFacts.students, unit: "万+", label: "学生配镜信赖" },
    { value: brandFacts.steps, unit: "步", label: "医学验光流程" },
    { value: brandFacts.rating, unit: "分", label: "家长口碑评分" },
  ],
  /** 金色印章文字（视觉装饰，两行） */
  sealText: ["E视", "验光"],
  /**
   * 右侧学生形象图（透明背景，底部对齐站立构图）。
   * 原图 AI 生成 → public/hero-student.webp（sharp 压缩到 900 宽）。
   * 换图方法：新图放入 public/ 后改 src；width/height 填实际像素（防布局抖动）。
   */
  visual: {
    src: "/hero-student.webp",
    alt: "戴眼镜微笑的学生 — E视眼镜学生近视配镜",
    width: 900,
    height: 1014,
  },
  /** 悬浮信息卡（icon 为图标名，需在 Hero.tsx 映射） */
  floatingCards: [
    { icon: "sparkle", text: `${brandFacts.steps} 步医学验光` },
    { icon: "check", text: "双眼视力 5.2" },
  ],
};
