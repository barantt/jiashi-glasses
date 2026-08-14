/**
 * ============================================================
 * 【这是什么数据】品牌信任条（首页 Hero 下方）的四项承诺。
 * 【在哪里被使用】components/TrustBar.tsx
 * 【修改时注意什么】
 *   - icon 是图标名称字符串（可选值见 TrustIconKey 类型），
 *     组件内维护「名称 → 图标」的映射；新增图标需同时在
 *     TrustBar.tsx 的 iconMap 里注册
 *   - 「48 小时」对应 config/site.ts 的 brandFacts.shipHours，
 *     改数字要同步
 * ============================================================
 */

/** 可用图标名（需与 TrustBar.tsx 的 iconMap 保持一致） */
export type TrustIconKey = "shield-check" | "ruler" | "clock" | "refresh";

export interface TrustItem {
  /** 唯一标识 */
  id: string;
  icon: TrustIconKey;
  title: string;
  desc: string;
}

/** 四项品牌承诺 */
export const trustItems: TrustItem[] = [
  {
    id: "certified",
    icon: "shield-check",
    title: "国家认证验光师",
    desc: "持证视光师一对一服务",
  },
  {
    id: "equipment",
    icon: "ruler",
    title: "全进口视光设备",
    desc: "精准检测，数据可溯源",
  },
  {
    id: "fast-delivery",
    icon: "clock",
    title: "48 小时快速取镜",
    desc: "精密加工，绝不将就",
  },
  {
    id: "lifetime-service",
    icon: "refresh",
    title: "终身免费服务",
    desc: "清洗、调校、换鼻托",
  },
];
