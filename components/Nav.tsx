"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconMenu, IconX, LogoMark } from "./icons";

const links = [
  { href: "/#products", label: "产品系列" },
  { href: "/#showroom", label: "产品展示" },
  { href: "/#process", label: "验光服务" },
  { href: "/#students", label: "学生专区" },
  { href: "/blog", label: "护眼博客" },
  { href: "/#contact", label: "联系我们" },
];

export default function Nav({
  variant = "overlay",
}: {
  /** overlay：透明起底（用于深色 Hero 页面）；solid：始终实底（用于浅色页面） */
  variant?: "overlay" | "solid";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 菜单打开时锁定背景滚动
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = variant === "solid" || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 border-b border-line shadow-[0_2px_16px_rgb(30_58_95/0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-navy-950 focus:font-medium"
      >
        跳到主要内容
      </a>

      <nav
        aria-label="主导航"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        {/* 品牌 */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-6" />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-lg font-bold tracking-wide ${
                solid ? "text-navy-900" : "text-cream"
              }`}
            >
              佳视眼镜
            </span>
            <span
              className={`font-latin text-[0.6rem] font-medium uppercase tracking-[0.28em] ${
                solid ? "text-gold-600" : "text-gold-300"
              }`}
            >
              Jiashi Optical
            </span>
          </span>
        </a>

        {/* 桌面端链接 */}
        <ul className="hidden items-center gap-4 lg:flex xl:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative py-2 text-[0.95rem] font-medium transition-colors duration-200 ${
                  solid
                    ? "text-ink-soft hover:text-navy-800"
                    : "text-navy-100 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-400 transition-transform duration-300 group-hover:scale-x-100`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-gold-400 px-6 py-2.5 text-[0.95rem] font-semibold text-navy-950 shadow-[0_4px_16px_rgb(212_175_55/0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300 active:translate-y-0 sm:inline-flex"
          >
            预约免费验光
          </Link>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${
              solid
                ? "text-navy-900 hover:bg-navy-50"
                : "text-cream hover:bg-white/10"
            }`}
          >
            {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* 移动端菜单面板 */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-line bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-navy-50 hover:text-navy-800"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold-400 px-4 py-3 text-center text-base font-semibold text-navy-950"
            >
              预约免费验光
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
