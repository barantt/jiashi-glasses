import { IconStar } from "./icons";

const reviews = [
  {
    quote:
      "孩子配了离焦镜一年，复查度数零增长。验光师特别耐心，还会手把手教孩子做护眼操，这份用心很难得。",
    name: "李女士",
    role: "初二学生家长",
  },
  {
    quote:
      "镜架轻到几乎感觉不到，打球戴着也不滑。学习累了去店里，还能免费清洗调整眼镜，服务真的没话说。",
    name: "张同学",
    role: "高三毕业生 · 四年老顾客",
  },
  {
    quote:
      "带父亲来配老花镜，店员全程搀扶讲解。渐进片适应得很快，父亲说看报纸终于不费劲了，还常念叨要去谢谢你们。",
    name: "王先生",
    role: "为父亲配镜",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
              Testimonials
            </span>
            <span className="rule-gold w-10" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            每一句认可，都是我们的动力
          </h2>
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-1 text-gold-500">
              {Array.from({ length: 5 }, (_, i) => (
                <IconStar key={i} className="h-4.5 w-4.5" />
              ))}
            </span>
            <span className="font-latin text-sm font-semibold text-ink">
              4.9 / 5.0
            </span>
            <span className="text-sm text-ink-mute">
              · 来自 2,300+ 条家长与顾客的真实评价
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3 lg:mt-16">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl font-black leading-none text-gold-400/70"
              >
                “
              </span>
              <blockquote className="mt-2 flex-1 text-[0.95rem] leading-loose text-ink-soft">
                {r.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line-soft pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 font-display text-base font-bold text-gold-300"
                >
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {r.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-mute">
                    {r.role}
                  </span>
                </span>
                <span className="ml-auto flex items-center gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
