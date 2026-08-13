/**
 * 纯格式化工具 —— 无任何 Node 依赖，可安全用于客户端组件。
 */

/** 日期格式化：2026-08-12 → 2026 年 8 月 12 日 */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${y} 年 ${m} 月 ${d} 日`;
}
