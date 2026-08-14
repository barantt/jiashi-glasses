/**
 * ============================================================
 * 【这是什么数据】验光服务流程区块（#process）的六步流程与文案。
 * 【在哪里被使用】components/Process.tsx
 * 【修改时注意什么】
 *   - 标题「六步验光」里的数字与 processSteps 数组长度耦合：
 *     增减步骤时必须同步修改 processSection.title 里的数字
 *   - 步骤 3 的「21 步」对应 config/site.ts 的 brandFacts.steps，
 *     步骤 5 的「48 小时」对应 brandFacts.shipHours，改数字要同步
 * ============================================================
 */

export interface ProcessStep {
  /** 唯一标识 */
  id: string;
  title: string;
  desc: string;
}

/** 验光流程六步骤（顺序即展示顺序） */
export const processSteps: ProcessStep[] = [
  {
    id: "appointment",
    title: "预约到店",
    desc: "电话或线上预约，到店免排队等候",
  },
  {
    id: "eye-exam",
    title: "全面眼检",
    desc: "视力、眼压、眼底健康逐项筛查",
  },
  {
    id: "refraction",
    title: "综合验光",
    desc: "21 步医学验光，度数精准测定",
  },
  {
    id: "try-on",
    title: "镜架试戴",
    desc: "按脸型与用眼习惯挑选试戴",
  },
  {
    id: "crafting",
    title: "精密加工",
    desc: "进口设备研磨，48 小时可取",
  },
  {
    id: "follow-up",
    title: "复查无忧",
    desc: "取镜现场复查，全年免费调校",
  },
];

/** 流程区块文案（标题里的「六步」与 processSteps 长度耦合） */
export const processSection = {
  eyebrow: "Optical Service",
  title: "六步验光，每一步都认真",
  subtitle: "拒绝「十分钟立等可取」的粗略验光 —— 好镜片值得被精确对待。",
};
