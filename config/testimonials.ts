/**
 * ============================================================
 * 【这是什么数据】顾客评价区块（#testimonials）的评价内容与文案。
 * 【在哪里被使用】components/Testimonials.tsx
 * 【修改时注意什么】
 *   - 评分数字 testimonialsSection.rating 引用 config/site.ts 的
 *     brandFacts.rating，改评分去 site.ts 改
 *   - 评价为演示占位内容，上线前替换为真实顾客评价
 * ============================================================
 */

import { brandFacts } from "./site";

export interface Review {
  /** 唯一标识 */
  id: string;
  /** 评价正文 */
  quote: string;
  /** 顾客称呼 */
  name: string;
  /** 顾客身份描述 */
  role: string;
}

/** 顾客评价（演示数据） */
export const reviews: Review[] = [
  {
    id: "parent-li",
    quote:
      "孩子配了离焦镜一年，复查度数零增长。验光师特别耐心，还会手把手教孩子做护眼操，这份用心很难得。",
    name: "李女士",
    role: "初二学生家长",
  },
  {
    id: "student-zhang",
    quote:
      "镜架轻到几乎感觉不到，打球戴着也不滑。学习累了去店里，还能免费清洗调整眼镜，服务真的没话说。",
    name: "张同学",
    role: "高三毕业生 · 四年老顾客",
  },
  {
    id: "mr-wang",
    quote:
      "带父亲来配老花镜，店员全程搀扶讲解。渐进片适应得很快，父亲说看报纸终于不费劲了，还常念叨要去谢谢你们。",
    name: "王先生",
    role: "为父亲配镜",
  },
];

/** 评价区块文案 */
export const testimonialsSection = {
  eyebrow: "Testimonials",
  title: "每一句认可，都是我们的动力",
  /** 评分（对应 brandFacts.rating） */
  rating: brandFacts.rating,
  ratingMax: "5.0",
  /** 评分右侧的评价条数文案（对应 brandFacts.reviews） */
  reviewCountText: `来自 ${brandFacts.reviews} 条家长与顾客的真实评价`,
};
