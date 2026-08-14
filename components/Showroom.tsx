"use client";

import { useState } from "react";
import { IconArrowRight } from "./icons";
import Photo from "./Photo";
import { productPhotos } from "@/config/photos";
import {
  showroomCategories,
  showroomProducts,
  showroomSection,
  tagStyles,
} from "@/config/products";
import type { ShowroomCategory } from "@/config/products";

export default function Showroom() {
  const [active, setActive] = useState<ShowroomCategory>("全部");

  const filtered =
    active === "全部"
      ? showroomProducts
      : showroomProducts.filter((p) => p.category === active);

  const onTabKey = (e: React.KeyboardEvent) => {
    const i = showroomCategories.indexOf(active);
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % showroomCategories.length;
    if (e.key === "ArrowLeft")
      next = (i - 1 + showroomCategories.length) % showroomCategories.length;
    if (next >= 0) {
      e.preventDefault();
      setActive(showroomCategories[next]);
    }
  };

  return (
    <section id="showroom" className="border-y border-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 标题 */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3">
            <span className="rule-green w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-green-600 sm:text-sm">
              {showroomSection.eyebrow}
            </span>
            <span className="rule-green w-10" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            {showroomSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
            {showroomSection.subtitle}
          </p>
        </div>

        {/* 分类筛选 */}
        <div
          role="tablist"
          aria-label="产品分类"
          onKeyDown={onTabKey}
          className="mt-11 flex flex-wrap items-center justify-center gap-2.5"
        >
          {showroomCategories.map((c) => (
            <button
              key={c}
              role="tab"
              type="button"
              id={`tab-${c}`}
              aria-selected={active === c}
              aria-controls="showroom-panel"
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-6 ${
                active === c
                  ? "bg-navy-800 text-green-300 shadow-[0_6px_16px_rgb(30_58_95/0.25)]"
                  : "bg-paper text-ink-soft hover:bg-navy-50 hover:text-navy-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-4 text-center text-xs text-ink-mute">
          {showroomSection.countTemplate(filtered.length)}
        </p>

        {/* 产品网格 */}
        <div
          id="showroom-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          key={active}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((p, i) => (
            <article
              key={p.id}
              style={{ animationDelay: `${i * 45}ms` }}
              className="card-in group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                {p.tag && (
                  <span
                    className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold ${tagStyles[p.tag]}`}
                  >
                    {p.tag}
                  </span>
                )}
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.07]">
                  <Photo
                    photo={productPhotos[p.variant]}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-latin text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-green-600">
                  {p.category}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-navy-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{p.spec}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="font-latin text-base font-semibold tabular-nums text-green-700">
                    {p.price}
                  </span>
                  <a
                    href={showroomSection.ctaHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-green-700"
                  >
                    {showroomSection.ctaLabel}
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-mute">
          {showroomSection.footnote}
        </p>
      </div>
    </section>
  );
}
