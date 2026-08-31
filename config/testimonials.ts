/**
 * ============================================================
 * 【这是什么数据】顾客评价区块（#testimonials）的评价内容与文案：
 *   - reviews：顾客评价列表（单行轮播展示）
 *   - testimonialsSection：区块文案 + 评分 + 轮播参数
 * 【在哪里被使用】components/Testimonials.tsx
 * 【修改时注意什么】
 *   - 评分数字 testimonialsSection.rating 引用 config/site.ts 的
 *     brandFacts.rating，改评分去 site.ts 改
 *   - 评价为演示占位内容，上线前替换为真实顾客评价
 *   - 头像：public/avatars/avatar-*.jpg（AI 生成的九宫格按 3×3 顺序裁切，
 *     顺序与下方 reviews 一致：格1=李女士…格9=张先生）；换头像直接替换
 *     对应文件即可（128×128，正方形）
 *   - 轮播速度：marquee.durationS（秒，越大越慢）；hover 自动暂停由组件实现
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
  /** 头像图片地址（public/avatars/ 下的本地文件） */
  avatar: string;
}

/**
 * 顾客评价（演示数据），单行轮播展示。
 * 头像为 AI 生成的亚洲面孔（九宫格裁切），上线前可替换真实顾客照片。
 */
export const reviews: Review[] = [
  {
    id: "parent-li",
    quote:
      "孩子配了离焦镜一年，复查度数零增长。验光师特别耐心，还会手把手教孩子做护眼操，这份用心很难得。",
    name: "李女士",
    role: "初二学生家长",
    avatar:
      "/avatars/avatar-li.jpg",
  },
  {
    id: "student-zhang",
    quote:
      "镜架轻到几乎感觉不到，打球戴着也不滑。学习累了去店里，还能免费清洗调整眼镜，服务真的没话说。",
    name: "张同学",
    role: "高三毕业生 · 四年老顾客",
    avatar:
      "/avatars/avatar-zhang.jpg",
  },
  {
    id: "mr-wang",
    quote:
      "带父亲来配老花镜，店员全程搀扶讲解。渐进片适应得很快，父亲说看报纸终于不费劲了，还常念叨要去谢谢你们。",
    name: "王先生",
    role: "为父亲配镜",
    avatar:
      "/avatars/avatar-wang.jpg",
  },
  {
    id: "parent-chen",
    quote:
      "孩子一年级就查出近视，在E视配的防控镜。每学期都来复查，度数一直控制得很好，选这里我们放心。",
    name: "陈女士",
    role: "小学二年级家长",
    avatar:
      "/avatars/avatar-chen.jpg",
  },
  {
    id: "student-liu",
    quote:
      "高二学习紧张，眼镜坏了都是下课冲过去修。店员每次都很快帮我调好，还不收钱，真的很感谢。",
    name: "刘同学",
    role: "高二学生 · 三年老顾客",
    avatar:
      "/avatars/avatar-liu.jpg",
  },
  {
    id: "teacher-zhou",
    quote:
      "给学生讲了一上午课，下午来配太阳镜。验光师特别专业，开车戴的偏光镜片看路牌都清晰了。",
    name: "周老师",
    role: "中学教师",
    avatar:
      "/avatars/avatar-zhou.jpg",
  },
  {
    id: "aunt-wu",
    quote:
      "我的渐进片是闺女陪着来配的，刚开始不习惯，店里约我回来调了好几次，现在看手机看报纸都舒服。",
    name: "吴阿姨",
    role: "渐进片顾客",
    avatar:
      "/avatars/avatar-wu.jpg",
  },
  {
    id: "student-sun",
    quote:
      "配镜送的视力档案挺有意思，妈妈手机上就能看我的复查记录，同学都羡慕我眼镜轻。",
    name: "孙同学",
    role: "初一学生",
    avatar:
      "/avatars/avatar-sun.jpg",
  },
  {
    id: "dad-zhang",
    quote:
      "从验光到取镜只用了两天，周六上午来正好赶上孩子下午的课。效率高还不糊弄，值得推荐。",
    name: "张先生",
    role: "学生家长",
    avatar:
      "/avatars/avatar-zhang2.jpg",
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
  /** 轮播参数：单行自动滚动速度（秒，越大越慢），hover 暂停 */
  marquee: {
    durationS: 70,
  },
};
