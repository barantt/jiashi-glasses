"use client";

import { useState } from "react";
import { IconArrowRight } from "./icons";
import { ProductArt, type ProductArtVariant } from "./product-art";

type Category = "全部" | "镜片" | "眼镜架" | "太阳镜" | "老花镜";
type ProductCategory = Exclude<Category, "全部">;

const categories: Category[] = ["全部", "镜片", "眼镜架", "太阳镜", "老花镜"];

const tagStyles: Record<string, string> = {
  热卖: "bg-gold-400 text-navy-950",
  新品: "bg-navy-800 text-cream",
  学生优选: "border border-gold-500/60 bg-white text-gold-700",
};

type Product = {
  name: string;
  category: ProductCategory;
  variant: ProductArtVariant;
  tag?: keyof typeof tagStyles;
  spec: string;
  price: string;
};

const products: Product[] = [
  {
    name: "离焦防控镜片",
    category: "镜片",
    variant: "lens-dim",
    tag: "热卖",
    spec: "微透镜阵列设计，专为学生延缓近视加深",
    price: "¥980 起",
  },
  {
    name: "防蓝光镜片",
    category: "镜片",
    variant: "lens-blue",
    tag: "学生优选",
    spec: "网课护眼之选，过滤有害蓝光不偏色",
    price: "¥380 起",
  },
  {
    name: "智能变色镜片",
    category: "镜片",
    variant: "lens-photo",
    spec: "室内通透清晰，户外自动变深防强光",
    price: "¥580 起",
  },
  {
    name: "航空钛轻韧镜架",
    category: "眼镜架",
    variant: "titanium-round",
    tag: "热卖",
    spec: "轻至 8 克，抗过敏不压鼻，学生久戴无负担",
    price: "¥399 起",
  },
  {
    name: "儿童硅胶软腿镜架",
    category: "眼镜架",
    variant: "kids",
    tag: "学生优选",
    spec: "柔软硅胶镜腿，运动防滑防摔不怕折",
    price: "¥299 起",
  },
  {
    name: "TR90 板材镜架",
    category: "眼镜架",
    variant: "square",
    tag: "新品",
    spec: "记忆板材轻盈坚韧，多彩配色随心选",
    price: "¥259 起",
  },
  {
    name: "经典飞行员太阳镜",
    category: "太阳镜",
    variant: "aviator",
    tag: "热卖",
    spec: "UV400 全防护，支持定制近视太阳镜片",
    price: "¥499 起",
  },
  {
    name: "运动偏光太阳镜",
    category: "太阳镜",
    variant: "sport",
    spec: "偏光防眩光，骑行跑步户外好伙伴",
    price: "¥399 起",
  },
  {
    name: "方形潮流太阳镜",
    category: "太阳镜",
    variant: "square-sun",
    tag: "新品",
    spec: "当季流行方框，拍照上镜显脸小",
    price: "¥459 起",
  },
  {
    name: "渐进多焦点老花镜",
    category: "老花镜",
    variant: "progressive",
    tag: "热卖",
    spec: "看远看近一副搞定，长辈生活更从容",
    price: "¥899 起",
  },
  {
    name: "经典半框老花镜",
    category: "老花镜",
    variant: "halfrim",
    spec: "轻便舒适，度数精准验配，即配即取",
    price: "¥159 起",
  },
  {
    name: "折叠便携老花镜",
    category: "老花镜",
    variant: "folding",
    spec: "三折收纳进小盒，随身携带不占地",
    price: "¥199 起",
  },
];

export default function Showroom() {
  const [active, setActive] = useState<Category>("全部");

  const filtered =
    active === "全部" ? products : products.filter((p) => p.category === active);

  const onTabKey = (e: React.KeyboardEvent) => {
    const i = categories.indexOf(active);
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % categories.length;
    if (e.key === "ArrowLeft") next = (i - 1 + categories.length) % categories.length;
    if (next >= 0) {
      e.preventDefault();
      setActive(categories[next]);
    }
  };

  return (
    <section id="showroom" className="border-y border-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 标题 */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
              Showroom
            </span>
            <span className="rule-gold w-10" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            每一副，都经得起细看
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
            镜片、镜架、太阳镜、老花镜 —— 精选在售款式，欢迎到店试戴体验。
          </p>
        </div>

        {/* 分类筛选 */}
        <div
          role="tablist"
          aria-label="产品分类"
          onKeyDown={onTabKey}
          className="mt-11 flex flex-wrap items-center justify-center gap-2.5"
        >
          {categories.map((c) => (
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
                  ? "bg-navy-800 text-gold-300 shadow-[0_6px_16px_rgb(30_58_95/0.25)]"
                  : "bg-paper text-ink-soft hover:bg-navy-50 hover:text-navy-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-4 text-center text-xs text-ink-mute">
          共 {filtered.length} 款精选产品 · 更多款式欢迎到店挑选
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
              key={p.name}
              style={{ animationDelay: `${i * 45}ms` }}
              className="card-in group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="art-tile relative aspect-[5/4]">
                {p.tag && (
                  <span
                    className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold ${tagStyles[p.tag]}`}
                  >
                    {p.tag}
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center p-5 transition-transform duration-500 ease-out group-hover:scale-[1.07]">
                  <ProductArt variant={p.variant} className="h-full max-h-full w-auto max-w-full" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-latin text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
                  {p.category}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-navy-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{p.spec}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="font-latin text-base font-semibold tabular-nums text-gold-700">
                    {p.price}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-700"
                  >
                    到店咨询
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-mute">
          展示价格为示意价，实际以到店验光后测算为准；款式持续上新。
        </p>
      </div>
    </section>
  );
}
