import { IconArrowRight, IconCheck, IconSparkle } from "./icons";
import { hero } from "@/config/hero";

/* ---------------- 标准视力表（E 字表） ---------------- */
/* 视力表行数据为 SVG 绘图参数（装饰图形），非业务数据，保留在组件内 */

const ROWS = [
  { size: 56, count: 1, acuity: "0.1" },
  { size: 38, count: 2, acuity: "0.3" },
  { size: 26, count: 3, acuity: "0.5" },
  { size: 19, count: 4, acuity: "0.8" },
  { size: 14, count: 5, acuity: "1.0" },
];

/** 单个 E 字，可旋转四个朝向（斯耐伦表样式） */
function EChar({
  cx,
  cy,
  size,
  rot,
}: {
  cx: number;
  cy: number;
  size: number;
  rot: number;
}) {
  const hw = size * 0.34;
  const hh = size / 2;
  const t = size * 0.15;
  const x0 = cx - hw;
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <path d={`M${x0} ${cy - hh} V${cy + hh}`} />
      <path
        d={`M${x0} ${cy - hh} H${cx + hw} M${x0} ${cy} H${cx + hw - t} M${x0} ${cy + hh} H${cx + hw}`}
      />
    </g>
  );
}

function EyeChart() {
  const yPos = [104, 186, 254, 312, 358];
  return (
    <svg
      viewBox="0 0 340 424"
      role="img"
      aria-label="佳视标准视力表插画"
      className="h-auto w-full"
    >
      {ROWS.map((row, ri) => {
        const totalW =
          row.count * row.size * 0.86 + (row.count - 1) * row.size * 0.3;
        const startX = 152 - totalW / 2;
        return (
          <g key={ri}>
            {Array.from({ length: row.count }, (_, ci) => (
              <EChar
                key={ci}
                cx={startX + ci * row.size * 1.16 + row.size * 0.43}
                cy={yPos[ri]}
                size={row.size}
                rot={((ri * 7 + ci * 5) % 4) * 90}
              />
            ))}
            <text
              x={318}
              y={yPos[ri] + 4}
              textAnchor="end"
              fontFamily="var(--font-outfit), sans-serif"
              fontSize="13"
              fill="#d4af37"
            >
              {row.acuity}
            </text>
          </g>
        );
      })}
      <text
        x={152}
        y={408}
        textAnchor="middle"
        fontFamily="var(--font-outfit), sans-serif"
        fontSize="16"
        letterSpacing="4"
        fill="#d4af37"
      >
        5.0
      </text>
    </svg>
  );
}

/** 悬浮眼镜插画 */
function HeroGlasses() {
  return (
    <svg viewBox="0 0 260 150" aria-hidden="true" className="h-auto w-full">
      <g transform="rotate(-6 130 80)">
        <rect
          x="10"
          y="44"
          width="98"
          height="66"
          rx="26"
          fill="#eaf2fb"
          fillOpacity="0.96"
          stroke="#0f1e31"
          strokeWidth="5"
        />
        <rect
          x="152"
          y="44"
          width="98"
          height="66"
          rx="26"
          fill="#eaf2fb"
          fillOpacity="0.96"
          stroke="#0f1e31"
          strokeWidth="5"
        />
        <path
          d="M108 66c10 2 34 2 44 0"
          fill="none"
          stroke="#0f1e31"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M10 58 0 50M250 58l-10-8"
          stroke="#0f1e31"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M28 92l16-16"
          stroke="#d4af37"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M170 92l16-16"
          stroke="#d4af37"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="10" cy="62" r="3.2" fill="#d4af37" />
        <circle cx="250" cy="62" r="3.2" fill="#d4af37" />
      </g>
    </svg>
  );
}

/** 金色印章（文字来自 config/hero.ts 的 sealText） */
function Seal({ lines }: { lines: string[] }) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className="h-20 w-20 drop-shadow-[0_6px_16px_rgb(0_0_0/0.35)] sm:h-24 sm:w-24"
    >
      <circle cx="48" cy="48" r="45" fill="#0f1e31" stroke="#d4af37" strokeWidth="2.5" />
      <circle cx="48" cy="48" r="35" fill="none" stroke="#d4af37" strokeWidth="1" />
      {lines.map((line, i) => (
        <text
          key={line}
          x="48"
          y={i === 0 ? 38 : 64}
          textAnchor="middle"
          fontFamily="var(--font-serif-sc), serif"
          fontSize="21"
          fontWeight="700"
          fill="#d4af37"
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
      {/* 装饰：细网格 + 金色光晕 */}
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
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-navy-600/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-28 lg:pt-44">
        {/* 文案 */}
        <div>
          <p className="flex items-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.32em] text-gold-300 sm:text-sm">
              {hero.eyebrow}
            </span>
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.18] text-cream sm:text-6xl lg:text-[4.2rem]">
            {hero.title.line1}
            <br />
            从<span className="text-gold-300">{hero.title.highlight}</span>
            {hero.title.line2}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-[0_8px_24px_rgb(212_175_55/0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300 active:translate-y-0"
            >
              {hero.ctaPrimary.label}
              <IconArrowRight className="h-4.5 w-4.5" />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-cream transition-all duration-200 hover:border-gold-300 hover:text-gold-300"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>

          {/* 数据 */}
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-latin text-3xl font-semibold tabular-nums text-gold-300 sm:text-[2.1rem]">
                  {s.value}
                  <span className="ml-1 text-base font-medium text-gold-300/80">
                    {s.unit}
                  </span>
                </dd>
                <dt className="mt-1.5 text-sm text-navy-200">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* 视力表视觉 */}
        <div className="relative mx-auto mt-16 w-full max-w-md lg:mt-0">
          <div className="absolute -left-4 -top-6 z-10 -rotate-6 sm:-left-8">
            <Seal lines={hero.sealText} />
          </div>

          <div className="relative rounded-3xl border border-gold-400/25 bg-navy-950/80 p-5 shadow-[0_24px_64px_rgb(0_0_0/0.4)] backdrop-blur-sm sm:p-7">
            <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-cream">
                {hero.chartCard.title}
              </p>
              <p className="font-latin text-[0.65rem] uppercase tracking-[0.3em] text-gold-300/80">
                {hero.chartCard.en}
              </p>
            </div>
            <EyeChart />
          </div>

          {/* 悬浮眼镜 */}
          <div className="absolute -bottom-10 -right-2 w-44 animate-float sm:-right-8 sm:w-56">
            <HeroGlasses />
          </div>

          {/* 悬浮信息卡 */}
          {hero.floatingCards.map((card, i) => {
            const Icon = floatingIcons[card.icon];
            return (
              <div
                key={card.icon}
                className={`absolute hidden items-center gap-2 rounded-2xl border border-white/15 bg-navy-800/90 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:flex ${
                  i === 0 ? "-right-3 top-1/4" : "-left-3 bottom-24"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 text-gold-300" />}
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
