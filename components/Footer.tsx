import { LogoMark } from "./icons";

const columns = [
  {
    title: "快速导航",
    links: [
      { label: "产品系列", href: "/#products" },
      { label: "产品展示", href: "/#showroom" },
      { label: "验光服务", href: "/#process" },
      { label: "学生专区", href: "/#students" },
      { label: "护眼博客", href: "/blog" },
    ],
  },
  {
    title: "服务项目",
    links: [
      { label: "学生近视配镜", href: "#contact" },
      { label: "近视防控方案", href: "#contact" },
      { label: "太阳镜选购", href: "#products" },
      { label: "老花镜验配", href: "#products" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* 品牌 */}
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-cream">
                  佳视眼镜
                </span>
                <span className="font-latin text-[0.6rem] font-medium uppercase tracking-[0.28em] text-gold-300">
                  Jiashi Optical
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200/80">
              看见，更美的世界。专注学生近视配镜十四年，
              用心对待每一双眼睛。
            </p>
            <p className="mt-6 font-latin text-xs uppercase tracking-[0.3em] text-navy-200/50">
              Est. 2012 · Since 2012
            </p>
          </div>

          {/* 链接列 */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-base font-bold text-cream">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-navy-200/80 transition-colors duration-200 hover:text-gold-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* 联系信息 */}
          <div>
            <h3 className="font-display text-base font-bold text-cream">
              联系我们
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-navy-200/80">
              <li>门店：幸福路 88 号 · 第一中学对面</li>
              <li>
                电话：
                <a
                  href="tel:4008886666"
                  className="font-latin font-semibold text-gold-300 transition-colors duration-200 hover:text-gold-400"
                >
                  400-888-6666
                </a>
              </li>
              <li>营业：每日 9:00 – 21:00（寒暑假无休）</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-navy-200/60">
            © 2026 佳视眼镜 JIASHI OPTICAL · 保留所有权利
          </p>
          <p className="text-xs text-navy-200/60">
            <span className="font-latin">ICP</span> 备案号：粤ICP备XXXXXXXX号（占位）
          </p>
        </div>
      </div>
    </footer>
  );
}
