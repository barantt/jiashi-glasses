import {
  IconArrowRight,
  IconBookOpen,
  IconShieldCheck,
  IconSparkle,
} from "./icons";
import {
  carePoints,
  studentPlans,
  studentsSection,
} from "@/config/students";
import type { CareIconKey } from "@/config/students";

/** 图标名 → 图标组件映射（config/students.ts 的 icon 字段取值） */
const iconMap: Record<CareIconKey, typeof IconBookOpen> = {
  "book-open": IconBookOpen,
  sparkle: IconSparkle,
  "shield-check": IconShieldCheck,
};

export default function Students() {
  const { tips, discountCard } = studentsSection;

  return (
    <section id="students" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        {/* 左侧文案 */}
        <div>
          <p className="flex items-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
              {studentsSection.eyebrow}
            </span>
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-snug text-navy-900 sm:text-4xl lg:text-[2.6rem]">
            {studentsSection.titleLines[0]}
            <br />
            {studentsSection.titleLines[1]}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {studentsSection.subtitle}
          </p>

          <ul className="mt-9 space-y-6">
            {carePoints.map((c) => {
              const Icon = iconMap[c.icon];
              return (
                <li key={c.id} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-300">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{c.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-mute">
                      {c.desc}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          {/* 护眼小贴士 */}
          <aside className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
            <p className="font-latin text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold-600">
              {tips.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-navy-900">
              {tips.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {tips.intro}
              <strong className="text-navy-800">{tips.highlightA}</strong>
              {tips.mid}
              <strong className="text-navy-800">{tips.highlightB}</strong>
              {tips.mid2}
              <strong className="text-navy-800">{tips.highlightC}</strong>
              {tips.outro}
            </p>
          </aside>
        </div>

        {/* 右侧卡片 */}
        <div className="space-y-6">
          {/* 8 折大卡 */}
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/50 bg-white p-8 shadow-[0_18px_44px_rgb(30_58_95/0.1)] sm:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-10 font-display text-[9rem] font-black leading-none text-gold-400/15"
            >
              {discountCard.watermark}
            </span>
            <p className="font-latin text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold-600">
              {discountCard.eyebrow}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              {discountCard.titlePrefix}
              <span className="ml-3 inline-block rounded-xl bg-gold-400 px-3.5 py-1 align-middle text-2xl font-black text-navy-950 sm:text-3xl">
                {discountCard.discount}
              </span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              {discountCard.desc}
            </p>
            <a
              href={discountCard.ctaHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-700"
            >
              {discountCard.cta}
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* 套餐卡 */}
          <div className="grid gap-6 sm:grid-cols-2">
            {studentPlans.map((p) => (
              <div
                key={p.id}
                className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  p.hot
                    ? "border-navy-800 bg-navy-800 text-cream shadow-[0_16px_40px_rgb(20_37_58/0.3)]"
                    : "border-line bg-white shadow-card"
                }`}
              >
                {p.hot && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950">
                    {studentsSection.hotBadge}
                  </span>
                )}
                <h4
                  className={`font-display text-lg font-bold ${
                    p.hot ? "text-gold-300" : "text-navy-900"
                  }`}
                >
                  {p.name}
                </h4>
                <p className="mt-3 font-latin text-3xl font-semibold tabular-nums">
                  {p.price}
                  <span className="ml-1 text-sm font-normal opacity-70">
                    {p.suffix}
                  </span>
                </p>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    p.hot ? "text-navy-100" : "text-ink-mute"
                  }`}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs leading-relaxed text-ink-mute">
            {studentsSection.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
