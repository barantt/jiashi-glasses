import Image from "next/image";
import { IconArrowRight, IconCheck, IconSparkle } from "./icons";
import { hero } from "@/config/hero";

/** 品牌印章（文字来自 config/hero.ts 的 sealText） */
function Seal({ lines }: { lines: string[] }) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className="h-20 w-20 drop-shadow-[0_6px_16px_rgb(0_0_0/0.35)] sm:h-24 sm:w-24"
    >
      <circle cx="48" cy="48" r="45" fill="#0f1e31" stroke="#58b925" strokeWidth="2.5" />
      <circle cx="48" cy="48" r="35" fill="none" stroke="#58b925" strokeWidth="1" />
      {lines.map((line, i) => (
        <text
          key={line}
          x="48"
          y={i === 0 ? 38 : 64}
          textAnchor="middle"
          fontFamily="var(--font-serif-sc), serif"
          fontSize="21"
          fontWeight="700"
          fill="#58b925"
        >
          {line}
        </text>
      ))}
    </svg>
  );
}

/* ---------------- 悬浮卡图标映射 ---------------- */

const floatingIcons: Record<string, typeof IconSparkle> = {
  sparkle: IconSparkle,
  check: IconCheck,
};

/* ---------------- Hero 区块 ---------------- */

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      {/* 装饰：细网格 + 绿色光晕 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-green-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-navy-600/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-28 lg:pt-44">
        {/* 文案 */}
        <div>
          <p className="flex items-center gap-3">
            <span className="rule-green w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.32em] text-green-300 sm:text-sm">
              {hero.eyebrow}
            </span>
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.18] text-cream sm:text-6xl lg:text-[4.2rem]">
            {hero.title.line1}
            <br />
            从<span className="text-green-300">{hero.title.highlight}</span>
            {hero.title.line2}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-full bg-green-400 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-[0_8px_24px_rgb(88_185_37/0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-300 active:translate-y-0"
            >
              {hero.ctaPrimary.label}
              <IconArrowRight className="h-4.5 w-4.5" />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-cream transition-all duration-200 hover:border-green-300 hover:text-green-300"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>

          {/* 数据 */}
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-latin text-3xl font-semibold tabular-nums text-green-300 sm:text-[2.1rem]">
                  {s.value}
                  <span className="ml-1 text-base font-medium text-green-300/80">
                    {s.unit}
                  </span>
                </dd>
                <dt className="mt-1.5 text-sm text-navy-200">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* 学生形象视觉 */}
        <div className="relative mx-auto mt-16 w-full max-w-md lg:mt-0">
          {/* 人物身后光晕 */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 bottom-6 top-10 rounded-full bg-green-400/15 blur-3xl"
          />

          <Image
            src={hero.visual.src}
            alt={hero.visual.alt}
            width={hero.visual.width}
            height={hero.visual.height}
            priority
            className="relative z-[1] mx-auto h-auto w-full max-w-[26rem] drop-shadow-[0_28px_56px_rgb(0_0_0/0.4)]"
          />

          {/* 品牌印章 */}
          <div className="absolute -left-4 top-4 z-10 -rotate-6 sm:-left-8">
            <Seal lines={hero.sealText} />
          </div>

          {/* 悬浮信息卡 */}
          {hero.floatingCards.map((card, i) => {
            const Icon = floatingIcons[card.icon];
            return (
              <div
                key={card.icon}
                className={`absolute hidden items-center gap-2 rounded-2xl border border-white/15 bg-navy-800/90 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:flex ${
                  i === 0 ? "-right-3 top-[22%]" : "-left-3 bottom-28"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 text-green-300" />}
                <span className="text-sm font-medium text-cream">
                  {card.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
