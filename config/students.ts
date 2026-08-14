/**
 * ============================================================
 * 【这是什么数据】学生专区区块（#students）的全部内容：
 *   - carePoints：左侧三个关怀点
 *   - studentPlans：右侧两个套餐卡
 *   - studentsSection：区块眉题 / 标题 / 副标题、护眼小贴士、
 *     8 折大卡、角标与脚注文案
 * 【在哪里被使用】components/Students.tsx
 * 【修改时注意什么】
 *   - carePoints[].icon 是图标名称字符串（可选值见 CareIconKey 类型），
 *     新增图标需在 Students.tsx 的 iconMap 里注册
 *   - tips 的文案为结构化字段：highlight* 字段会被组件加粗显示，
 *     保持前后普通文本与高亮文本的语义即可，空格也包含在字段里
 *   - 套餐价格为演示占位数据，上线前替换真实价格
 * ============================================================
 */

/** 可用图标名（需与 Students.tsx 的 iconMap 保持一致） */
export type CareIconKey = "book-open" | "sparkle" | "shield-check";

export interface CarePoint {
  /** 唯一标识 */
  id: string;
  icon: CareIconKey;
  title: string;
  desc: string;
}

/** 学生关怀点 */
export const carePoints: CarePoint[] = [
  {
    id: "free-checkup",
    icon: "book-open",
    title: "每学期免费视力复查",
    desc: "建立专属视力档案，度数变化一目了然",
  },
  {
    id: "student-discount",
    icon: "sparkle",
    title: "学生证全场 8 折",
    desc: "配镜再送防蓝光膜层升级体验",
  },
  {
    id: "myopia-control",
    icon: "shield-check",
    title: "近视防控方案",
    desc: "离焦镜片 + 用眼习惯指导，与家长共同守护",
  },
];

export interface StudentPlan {
  /** 唯一标识 */
  id: string;
  name: string;
  /** 价格数字（¥ 符号含在字段里） */
  price: string;
  /** 价格后缀（如「起」） */
  suffix: string;
  desc: string;
  /** 是否主推套餐（深色高亮卡片 + 角标） */
  hot?: boolean;
}

/** 学生套餐（演示数据） */
export const studentPlans: StudentPlan[] = [
  {
    id: "basic-plan",
    name: "基础清晰套餐",
    price: "¥299",
    suffix: "起",
    desc: "单光镜片 + 轻巧镜架，入门首选",
  },
  {
    id: "control-plan",
    name: "近视防控套餐",
    price: "¥599",
    suffix: "起",
    desc: "离焦镜片 + 航空钛架 + 视力档案",
    hot: true,
  },
];

/** 学生专区区块文案 */
export const studentsSection = {
  eyebrow: "Student Care",
  /** 标题两行（组件在 titleLines 之间换行渲染） */
  titleLines: ["把孩子的眼睛，", "交给懂眼睛的人"],
  subtitle:
    "学业压力之下，近视防控是一场持久战。E视以专业验光为起点，用档案化管理与科学用眼指导，陪伴孩子度过每一个用眼高峰。",
  /** 护眼小贴士：highlight* 字段会被加粗显示 */
  tips: {
    eyebrow: "Eye Care Tips",
    title: "护眼小贴士 · 20-20-20 法则",
    intro: "每近距离用眼 ",
    highlightA: "20",
    mid: " 分钟，抬头眺望 ",
    highlightB: "20 英尺（约 6 米）",
    mid2: " 以外的远处 ",
    highlightC: "20 秒",
    outro: " —— 读写时记得保持「一尺、一拳、一寸」。",
  },
  /** 8 折大卡 */
  discountCard: {
    eyebrow: "Student Discount",
    /** 标题前缀（「8 折」徽章之前的部分） */
    titlePrefix: "学生证",
    /** 徽章文字 */
    discount: "8 折",
    /** 背景装饰大字 */
    watermark: "8",
    desc: "全场镜架、镜片通用，凭有效学生证到店即可享受，不与验光费折扣同享。",
    cta: "预约到店享优惠",
    ctaHref: "#contact",
  },
  /** 主推套餐角标 */
  hotBadge: "家长首选",
  /** 区块底部注释 */
  footnote: "具体套餐价格以实际度数与所选镜片为准，验光后由验光师为您测算。",
};
