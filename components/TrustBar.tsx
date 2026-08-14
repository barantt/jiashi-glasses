import {
  IconClock,
  IconRefresh,
  IconRuler,
  IconShieldCheck,
} from "./icons";
import { trustItems } from "@/config/trustbar";
import type { TrustIconKey } from "@/config/trustbar";

/** 图标名 → 图标组件映射（config/trustbar.ts 的 icon 字段取值） */
const iconMap: Record<TrustIconKey, typeof IconShieldCheck> = {
  "shield-check": IconShieldCheck,
  ruler: IconRuler,
  clock: IconClock,
  refresh: IconRefresh,
};

export default function TrustBar() {
  return (
    <section aria-label="品牌资质与承诺" className="border-b border-line bg-cream">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {trustItems.map((it) => {
          const Icon = iconMap[it.icon];
          return (
            <li key={it.id} className="flex items-center gap-4 px-8 py-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-semibold text-ink">{it.title}</span>
                <span className="mt-0.5 block text-sm text-ink-mute">
                  {it.desc}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
