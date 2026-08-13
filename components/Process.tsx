const steps = [
  {
    title: "预约到店",
    desc: "电话或线上预约，到店免排队等候",
  },
  {
    title: "全面眼检",
    desc: "视力、眼压、眼底健康逐项筛查",
  },
  {
    title: "综合验光",
    desc: "21 步医学验光，度数精准测定",
  },
  {
    title: "镜架试戴",
    desc: "按脸型与用眼习惯挑选试戴",
  },
  {
    title: "精密加工",
    desc: "进口设备研磨，48 小时可取",
  },
  {
    title: "复查无忧",
    desc: "取镜现场复查，全年免费调校",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
              Optical Service
            </span>
            <span className="rule-gold w-10" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            六步验光，每一步都认真
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
            拒绝「十分钟立等可取」的粗略验光 —— 好镜片值得被精确对待。
          </p>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:gap-6">
          {/* 步骤连线（桌面端） */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.35rem] hidden border-t-2 border-dashed border-navy-200 lg:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 lg:flex-col lg:gap-0 lg:text-center">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800 font-latin text-sm font-semibold text-gold-300 shadow-[0_6px_16px_rgb(30_58_95/0.25)] lg:mx-auto">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-5">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
