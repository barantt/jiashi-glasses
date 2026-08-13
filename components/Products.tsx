import { IconArrowRight, IconCheck, IconSparkle } from "./icons";

/* ---------------- 三款眼镜插画（统一线性风格） ---------------- */

function GlassesBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 240 200"
      aria-hidden="true"
      className="mx-auto mb-6 h-auto w-full max-w-[15rem]"
    >
      <circle cx="120" cy="100" r="86" fill="#fcfbf8" stroke="#e8e3d7" strokeWidth="1.5" />
      <circle cx="120" cy="100" r="78" fill="none" stroke="#f0ece2" strokeWidth="1" strokeDasharray="2 6" />
      {children}
    </svg>
  );
}

function SparkleGlyph({ x, y, s = 9 }: { x: number; y: number; s?: number }) {
  const k = s / 8;
  return (
    <g stroke="#c9a227" strokeWidth="1.8" strokeLinecap="round">
      <path d={`M${x} ${y - k * 8} L${x} ${y + k * 8} M${x - k * 8} ${y} L${x + k * 8} ${y}`} />
      <path d={`M${x - k * 5} ${y - k * 5} L${x + k * 5} ${y + k * 5} M${x - k * 5} ${y + k * 5} L${x + k * 5} ${y - k * 5}`} opacity="0.55" />
    </g>
  );
}

/** 学生近视镜：圆框、轻盈、护目蓝 */
function StudentGlasses() {
  return (
    <GlassesBackdrop>
      <g className="animate-float origin-[120px_100px]">
        <rect x="50" y="76" width="58" height="46" rx="19" fill="#dce9f7" stroke="#1e3a5f" strokeWidth="3.5" />
        <rect x="132" y="76" width="58" height="46" rx="19" fill="#dce9f7" stroke="#1e3a5f" strokeWidth="3.5" />
        <path d="M108 88c9 2.5 15 2.5 24 0" fill="none" stroke="#1e3a5f" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M50 84 32 75M190 84l-18-9" fill="none" stroke="#1e3a5f" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M62 108l15-13M146 108l15-13" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <circle cx="50" cy="80" r="3.2" fill="#d4af37" />
        <circle cx="190" cy="80" r="3.2" fill="#d4af37" />
      </g>
      <SparkleGlyph x={196} y={44} />
      <SparkleGlyph x={44} y={142} s={7} />
    </GlassesBackdrop>
  );
}

/** 时尚太阳镜：厚框、深色镜片、金色日芒 */
function SunGlasses() {
  return (
    <GlassesBackdrop>
      {/* 日芒 */}
      <g stroke="#d4af37" strokeWidth="2" strokeLinecap="round" opacity="0.5">
        <circle cx="172" cy="42" r="12" fill="none" />
        <path d="M172 18v-8M172 66v8M148 42h-8M196 42h8M155 25l-6-6M189 25l6-6M155 59l-6 6M189 59l6 6" />
      </g>
      <g className="animate-float-slow origin-[120px_100px]">
        <defs>
          <linearGradient id="lensGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#365e93" />
            <stop offset="1" stopColor="#0f1e31" />
          </linearGradient>
        </defs>
        <path
          d="M58 -4 L34 -12 Q29 -13.5 28 -8 L24 20 Q23.5 26 29.5 26 L53 26 Q59 26 59 20 L59 2 Q59 -4 58 -4 Z"
          transform="translate(32 74)"
          fill="url(#lensGrad)"
          stroke="#0f1e31"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M58 -4 L34 -12 Q29 -13.5 28 -8 L24 20 Q23.5 26 29.5 26 L53 26 Q59 26 59 20 L59 2 Q59 -4 58 -4 Z"
          transform="translate(208 74) scale(-1 1)"
          fill="url(#lensGrad)"
          stroke="#0f1e31"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M90 66c8 2 16 2 24 0" fill="none" stroke="#0f1e31" strokeWidth="5" strokeLinecap="round" />
        <path d="M94 64 78 54M146 64l16-10" fill="none" stroke="#0f1e31" strokeWidth="5" strokeLinecap="round" />
        <path d="M102 88l14-11M130 88l14-11" stroke="#d4af37" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
        <circle cx="94" cy="62" r="3" fill="#d4af37" />
        <circle cx="146" cy="62" r="3" fill="#d4af37" />
      </g>
      <text
        x="120"
        y="182"
        textAnchor="middle"
        fontFamily="var(--font-outfit), sans-serif"
        fontSize="11"
        letterSpacing="3"
        fill="#a8841b"
      >
        UV400
      </text>
    </GlassesBackdrop>
  );
}

/** 老花镜：半框、金色下缘、案头书卷 */
function ReadingGlasses() {
  return (
    <GlassesBackdrop>
      <g className="animate-float origin-[120px_100px]">
        {/* 镜片 */}
        <rect x="50" y="74" width="58" height="46" rx="19" fill="#eef3f9" stroke="#b3c5dd" strokeWidth="1.5" />
        <rect x="132" y="74" width="58" height="46" rx="19" fill="#eef3f9" stroke="#b3c5dd" strokeWidth="1.5" />
        {/* 半框上缘 */}
        <path d="M52 92 Q79 60 108 82" fill="none" stroke="#1e3a5f" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M188 92 Q161 60 132 82" fill="none" stroke="#1e3a5f" strokeWidth="3.5" strokeLinecap="round" />
        {/* 桥与腿 */}
        <path d="M108 84c8 2 16 2 24 0" fill="none" stroke="#1e3a5f" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M50 82 32 73M190 82l-18-9" fill="none" stroke="#1e3a5f" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M64 102l14-11M144 102l14-11" stroke="#d4af37" strokeWidth="2.2" strokeLinecap="round" opacity="0.8" />
        <circle cx="50" cy="78" r="3.2" fill="#d4af37" />
        <circle cx="190" cy="78" r="3.2" fill="#d4af37" />
      </g>
      {/* 案头书卷 */}
      <g fill="none" stroke="#8aa5c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <path d="M120 146c-9-4.5-21-6-31-4v22c10-2 22 0 31 4Z" />
        <path d="M120 146c9-4.5 21-6 31-4v22c-10-2-22 0-31 4Z" />
        <path d="M120 146v22M89 148h62" opacity="0.5" />
      </g>
    </GlassesBackdrop>
  );
}

/* ---------------- 产品系列区块 ---------------- */

const products = [
  {
    en: "MYOPIA · 学生配镜",
    title: "学生近视眼镜",
    desc: "为课业繁重的孩子设计：医学验光配镜一体化，度数精准、佩戴轻盈，让清晰与专注常伴课堂。",
    features: [
      "21 步医学验光，度数精确到 0.25D",
      "离焦镜片可选，有效延缓近视加深",
      "航空钛镜架，轻至 8 克，防摔耐磨",
    ],
    price: "学生套餐 ¥299 起",
    illustration: <StudentGlasses />,
    featured: true,
  },
  {
    en: "SUNWEAR · 时尚单品",
    title: "时尚太阳镜",
    desc: "遮阳不只是防护，更是一种态度。当季潮流款式月月上新，亦支持定制近视太阳镜片。",
    features: [
      "UV400 全波段紫外线防护",
      "当季潮流款式，月月上新",
      "可定制近视镜片，度数也能凹造型",
    ],
    price: "精选款 ¥199 起",
    illustration: <SunGlasses />,
    featured: false,
  },
  {
    en: "READING · 长辈关怀",
    title: "老花镜",
    desc: "为父母长辈精准验配：渐进多焦点看远看近一副搞定，轻便舒适，让阅读回归轻松。",
    features: [
      "渐进多焦点，看远看近一副搞定",
      "度数精准验配，无需将就",
      "轻便舒适，长辈佩戴无负担",
    ],
    price: "基础款 ¥159 起",
    illustration: <ReadingGlasses />,
    featured: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 标题 */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
              Our Collection
            </span>
            <span className="rule-gold w-10" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            一副好眼镜，不止于清晰
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
            从课堂到旅途，从青春到从容 —— 佳视为每个年龄段的眼睛，准备恰到好处的答案。
          </p>
        </div>

        {/* 卡片 */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {products.map((p, i) => (
            <article
              key={p.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                p.featured
                  ? "border border-gold-400/40 bg-navy-800 shadow-[0_20px_48px_rgb(20_37_58/0.35)] hover:shadow-[0_28px_64px_rgb(20_37_58/0.45)]"
                  : "border border-line bg-white shadow-card hover:shadow-card-hover"
              } ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {p.featured && (
                <span className="absolute left-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3.5 py-1.5 text-xs font-bold tracking-wide text-navy-950 shadow-md">
                  <IconSparkle className="h-3.5 w-3.5" />
                  核心推荐
                </span>
              )}

              {p.illustration}

              <p
                className={`font-latin text-[0.68rem] font-semibold uppercase tracking-[0.26em] ${
                  p.featured ? "text-gold-300" : "text-gold-600"
                }`}
              >
                {p.en}
              </p>
              <h3
                className={`mt-2 font-display text-2xl font-bold ${
                  p.featured ? "text-cream" : "text-navy-900"
                }`}
              >
                {p.title}
              </h3>
              <p
                className={`mt-3 text-[0.95rem] leading-relaxed ${
                  p.featured ? "text-navy-100" : "text-ink-soft"
                }`}
              >
                {p.desc}
              </p>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <IconCheck
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.featured ? "text-gold-300" : "text-gold-600"
                      }`}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        p.featured ? "text-navy-100" : "text-ink-soft"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between pt-8">
                <span
                  className={`font-latin text-sm font-semibold ${
                    p.featured ? "text-gold-300" : "text-navy-800"
                  }`}
                >
                  {p.price}
                </span>
                <a
                  href="#showroom"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                    p.featured
                      ? "text-cream hover:text-gold-300"
                      : "text-navy-800 hover:text-gold-700"
                  }`}
                >
                  了解详情
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-mute">
          所有镜片均可按需升级防蓝光 / 抗疲劳膜层，详情请咨询店内验光师。
        </p>
      </div>
    </section>
  );
}
