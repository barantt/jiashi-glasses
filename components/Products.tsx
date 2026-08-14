import Link from "next/link";
import { IconArrowRight, IconCheck, IconSparkle } from "./icons";
import Photo from "./Photo";
import { productSeries, productsSection } from "@/config/products";

/* ---------------- 产品系列区块 ---------------- */

export default function Products() {
  return (
    <section id="products" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 标题 */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
              {productsSection.eyebrow}
            </span>
            <span className="rule-gold w-10" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            {productsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
            {productsSection.subtitle}
          </p>
        </div>

        {/* 卡片 */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {productSeries.map((p, i) => (
            <article
              key={p.id}
              className={`group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 ${
                p.featured
                  ? "border border-gold-400/40 bg-navy-800 shadow-[0_20px_48px_rgb(20_37_58/0.35)] hover:shadow-[0_28px_64px_rgb(20_37_58/0.45)]"
                  : "border border-line bg-white shadow-card hover:shadow-card-hover"
              } ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {p.featured && (
                <span className="absolute left-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3.5 py-1.5 text-xs font-bold tracking-wide text-navy-950 shadow-md">
                  <IconSparkle className="h-3.5 w-3.5" />
                  {productsSection.featuredBadge}
                </span>
              )}

              {/* 顶部通栏大图 */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.05]">
                  <Photo
                    photo={p.photo}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
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
                    href={productsSection.ctaHref}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                      p.featured
                        ? "text-cream hover:text-gold-300"
                        : "text-navy-800 hover:text-gold-700"
                    }`}
                  >
                    {productsSection.ctaLabel}
                    <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-mute">
          {productsSection.footnote}
        </p>
      </div>
    </section>
  );
}
