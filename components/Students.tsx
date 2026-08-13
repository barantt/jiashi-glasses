import { IconArrowRight, IconBookOpen, IconShieldCheck, IconSparkle } from "./icons";

const carePoints = [
  {
    icon: IconBookOpen,
    title: "每学期免费视力复查",
    desc: "建立专属视力档案，度数变化一目了然",
  },
  {
    icon: IconSparkle,
    title: "学生证全场 8 折",
    desc: "配镜再送防蓝光膜层升级体验",
  },
  {
    icon: IconShieldCheck,
    title: "近视防控方案",
    desc: "离焦镜片 + 用眼习惯指导，与家长共同守护",
  },
];

const plans = [
  {
    name: "基础清晰套餐",
    price: "¥299",
    suffix: "起",
    desc: "单光镜片 + 轻巧镜架，入门首选",
  },
  {
    name: "近视防控套餐",
    price: "¥599",
    suffix: "起",
    desc: "离焦镜片 + 航空钛架 + 视力档案",
    hot: true,
  },
];

export default function Students() {
  return (
    <section id="students" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        {/* 左侧文案 */}
        <div>
          <p className="flex items-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-sm">
              Student Care
            </span>
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-snug text-navy-900 sm:text-4xl lg:text-[2.6rem]">
            把孩子的眼睛，
            <br />
            交给懂眼睛的人
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            学业压力之下，近视防控是一场持久战。佳视以专业验光为起点，
            用档案化管理与科学用眼指导，陪伴孩子度过每一个用眼高峰。
          </p>

          <ul className="mt-9 space-y-6">
            {carePoints.map((c) => (
              <li key={c.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-300">
                  <c.icon className="h-5.5 w-5.5" />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{c.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-mute">
                    {c.desc}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* 护眼小贴士 */}
          <aside className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
            <p className="font-latin text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold-600">
              Eye Care Tips
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-navy-900">
              护眼小贴士 · 20-20-20 法则
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              每近距离用眼 <strong className="text-navy-800">20</strong>{" "}
              分钟，抬头眺望{" "}
              <strong className="text-navy-800">20 英尺（约 6 米）</strong>
              以外的远处{" "}
              <strong className="text-navy-800">20 秒</strong>
              —— 读写时记得保持「一尺、一拳、一寸」。
            </p>
          </aside>
        </div>

        {/* 右侧卡片 */}
        <div className="space-y-6">
          {/* 8 折大卡 */}
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/50 bg-white p-8 shadow-[0_18px_44px_rgb(30_58_95/0.1)] sm:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-10 font-display text-[9rem] font-black leading-none text-gold-400/15"
            >
              8
            </span>
            <p className="font-latin text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold-600">
              Student Discount
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              学生证
              <span className="ml-3 inline-block rounded-xl bg-gold-400 px-3.5 py-1 align-middle text-2xl font-black text-navy-950 sm:text-3xl">
                8 折
              </span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              全场镜架、镜片通用，凭有效学生证到店即可享受，
              不与验光费折扣同享。
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-700"
            >
              预约到店享优惠
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* 套餐卡 */}
          <div className="grid gap-6 sm:grid-cols-2">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  p.hot
                    ? "border-navy-800 bg-navy-800 text-cream shadow-[0_16px_40px_rgb(20_37_58/0.3)]"
                    : "border-line bg-white shadow-card"
                }`}
              >
                {p.hot && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950">
                    家长首选
                  </span>
                )}
                <h4
                  className={`font-display text-lg font-bold ${
                    p.hot ? "text-gold-300" : "text-navy-900"
                  }`}
                >
                  {p.name}
                </h4>
                <p className="mt-3 font-latin text-3xl font-semibold tabular-nums">
                  {p.price}
                  <span className="ml-1 text-sm font-normal opacity-70">
                    {p.suffix}
                  </span>
                </p>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    p.hot ? "text-navy-100" : "text-ink-mute"
                  }`}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs leading-relaxed text-ink-mute">
            具体套餐价格以实际度数与所选镜片为准，验光后由验光师为您测算。
          </p>
        </div>
      </div>
    </section>
  );
}
