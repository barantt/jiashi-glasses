import {
  IconClock,
  IconRefresh,
  IconRuler,
  IconShieldCheck,
} from "./icons";

const items = [
  {
    icon: IconShieldCheck,
    title: "国家认证验光师",
    desc: "持证视光师一对一服务",
  },
  {
    icon: IconRuler,
    title: "全进口视光设备",
    desc: "精准检测，数据可溯源",
  },
  {
    icon: IconClock,
    title: "48 小时快速取镜",
    desc: "精密加工，绝不将就",
  },
  {
    icon: IconRefresh,
    title: "终身免费服务",
    desc: "清洗、调校、换鼻托",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="品牌资质与承诺" className="border-b border-line bg-cream">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {items.map((it) => (
          <li key={it.title} className="flex items-center gap-4 px-8 py-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
              <it.icon className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-semibold text-ink">{it.title}</span>
              <span className="mt-0.5 block text-sm text-ink-mute">
                {it.desc}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
