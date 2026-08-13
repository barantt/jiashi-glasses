import Link from "next/link";
import { IconArrowRight, IconCheck, IconSparkle } from "./icons";
import Photo from "./Photo";
import { linePhotos } from "@/lib/photos";

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
    photo: linePhotos.student,
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
    photo: linePhotos.sun,
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
    photo: linePhotos.reading,
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

              <div className="relative mx-auto mb-6 w-full max-w-[15rem] overflow-hidden rounded-2xl border border-line shadow-card">
                <div className="aspect-[6/5] transition-transform duration-500 ease-out group-hover:scale-[1.05]">
                  <Photo
                    photo={p.photo}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>

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
                <Link
                  href="/#showroom"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                    p.featured
                      ? "text-cream hover:text-gold-300"
                      : "text-navy-800 hover:text-gold-700"
                  }`}
                >
                  了解详情
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
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
