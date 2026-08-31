import { IconStar } from "./icons";
import { reviews, testimonialsSection } from "@/config/testimonials";
import type { Review } from "@/config/testimonials";

/** 评价卡片 */
function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex w-[20rem] shrink-0 flex-col rounded-3xl border border-line bg-white p-8 shadow-card sm:w-[22rem]">
      <span
        aria-hidden="true"
        className="font-display text-5xl font-black leading-none text-green-400/70"
      >
        “
      </span>
      <blockquote className="mt-2 flex-1 text-[0.95rem] leading-loose text-ink-soft">
        {r.quote}
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line-soft pt-6">
        <span className="h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-green-400/40">
          <img
            src={r.avatar}
            alt=""
            width={44}
            height={44}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{r.name}</span>
          <span className="mt-0.5 block text-xs text-ink-mute">{r.role}</span>
        </span>
        <span className="ml-auto flex items-center gap-0.5 text-green-500">
          {Array.from({ length: 5 }, (_, i) => (
            <IconStar key={i} className="h-3.5 w-3.5" />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

/** 一行轮播：内容复制两份实现无缝循环，hover 暂停 */
function MarqueeRow({
  items,
  durationS,
  reverse = false,
}: {
  items: Review[];
  durationS: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div
        className={`flex w-max gap-7 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
        style={{ animationDuration: `${durationS}s` }}
      >
        {doubled.map((r, i) => (
          <div key={`${r.id}-${i}`} aria-hidden={i >= items.length}>
            <ReviewCard r={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  // 前 5 条第一行，其余第二行（config/testimonials.ts 注释有说明）
  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(5);

  return (
    <section id="testimonials" className="overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3">
            <span className="rule-green w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-green-600 sm:text-sm">
              {testimonialsSection.eyebrow}
            </span>
            <span className="rule-green w-10" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            {testimonialsSection.title}
          </h2>
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-1 text-green-500">
              {Array.from({ length: 5 }, (_, i) => (
                <IconStar key={i} className="h-4.5 w-4.5" />
              ))}
            </span>
            <span className="font-latin text-sm font-semibold text-ink">
              {testimonialsSection.rating} / {testimonialsSection.ratingMax}
            </span>
            <span className="text-sm text-ink-mute">
              · {testimonialsSection.reviewCountText}
            </span>
          </div>
        </div>
      </div>

      {/* 两行自动滚动轮播（hover 暂停） */}
      <div className="mt-14 space-y-7">
        <MarqueeRow items={row1} durationS={testimonialsSection.marquee.row1DurationS} />
        <MarqueeRow
          items={row2}
          durationS={testimonialsSection.marquee.row2DurationS}
          reverse
        />
      </div>
    </section>
  );
}
