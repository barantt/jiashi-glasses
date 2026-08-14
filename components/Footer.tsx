import { LogoMark } from "./icons";
import { footerColumns } from "@/config/navigation";
import { brand, copyright, icp } from "@/config/site";
import { store } from "@/config/contact";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* 品牌 */}
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="inline-flex items-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-[0_4px_16px_rgb(0_0_0/0.3)]">
                <LogoMark className="h-11 w-auto" />
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200/80">
              {brand.slogan}
            </p>
            <p className="mt-6 font-latin text-xs uppercase tracking-[0.3em] text-navy-200/50">
              Est. {brand.foundedYear} · Since {brand.foundedYear}
            </p>
          </div>

          {/* 链接列 */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-base font-bold text-cream">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.id}>
                    <a
                      href={l.href}
                      className="text-sm text-navy-200/80 transition-colors duration-200 hover:text-green-300"
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
              <li>门店：{store.addressShort}</li>
              <li>
                电话：
                <a
                  href={store.phoneHref}
                  className="font-latin font-semibold text-green-300 transition-colors duration-200 hover:text-green-400"
                >
                  {store.phoneDisplay}
                </a>
              </li>
              <li>营业：{store.hoursShort}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-navy-200/60">
            © {copyright.year} {brand.name} {brand.nameEn} · {copyright.text}
          </p>
          <p className="text-xs text-navy-200/60">
            <span className="font-latin">ICP</span> 备案号：{icp}
          </p>
        </div>
      </div>
    </footer>
  );
}
