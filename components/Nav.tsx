"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconMenu, IconX, LogoMark } from "./icons";
import { navLinks, navCta } from "@/config/navigation";
import { brand } from "@/config/site";

export default function Nav({
  variant = "overlay",
}: {
  /** overlay：透明起底（用于深色 Hero 页面）；solid：始终实底（用于浅色页面） */
  variant?: "overlay" | "solid";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  /** 深色 Hero 上的透明起底状态（仅首页顶部） */
  const overlay = variant === "overlay" && !scrolled && !open;

  /**
   * 三种形态：
   * 1. 顶部透明全宽（overlay）—— 深色 Hero 之上
   * 2. 全宽实底栏 —— 浅色页面顶部 / 移动端滚动后 / 菜单打开时
   * 3. 居中浮动胶囊（桌面端滚动后）—— 圆角收拢，悬浮在页面最顶层
   */
  const navShape = scrolled && !open
    ? "h-16 max-w-full rounded-none border-0 border-b border-line bg-white/95 px-5 shadow-[0_2px_16px_rgb(30_58_95/0.06)] backdrop-blur-md sm:px-8 md:mt-4 md:max-w-4xl md:rounded-full md:border md:border-line md:px-7 md:shadow-[0_12px_40px_rgb(30_58_95/0.16)]"
    : open || variant === "solid"
      ? "h-[4.5rem] max-w-7xl border-b border-line bg-white/95 px-5 shadow-[0_2px_16px_rgb(30_58_95/0.06)] backdrop-blur-md sm:px-8"
      : "h-[4.5rem] max-w-7xl px-5 sm:px-8";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-green-400 focus:px-4 focus:py-2 focus:font-medium focus:text-navy-950"
      >
        跳到主要内容
      </a>

      <nav
        aria-label="主导航"
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${navShape}`}
      >
        {/* 品牌 */}
        <Link
          href="/#top"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <LogoMark
            className={`transition-transform duration-300 group-hover:-rotate-6 ${
              scrolled ? "h-8 w-8" : "h-9 w-9"
            }`}
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-lg font-bold tracking-wide ${
                overlay ? "text-cream" : "text-navy-900"
              }`}
            >
              {brand.name}
            </span>
            <span
              className={`font-latin text-[0.6rem] font-medium uppercase tracking-[0.28em] ${
                overlay ? "text-green-300" : "text-green-600"
              }`}
            >
              {brand.nameLatin}
            </span>
          </span>
        </Link>

        {/* 桌面端链接 */}
        <ul
          className={`hidden items-center lg:flex ${
            scrolled ? "gap-4 xl:gap-6" : "gap-4 xl:gap-7"
          }`}
        >
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                href={l.href}
                className={`group relative py-2 font-medium transition-colors duration-200 ${
                  scrolled ? "text-sm" : "text-[0.95rem]"
                } ${overlay ? "text-navy-100 hover:text-white" : "text-ink-soft hover:text-navy-800"}`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-green-400 transition-transform duration-300 group-hover:scale-x-100`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={navCta.href}
            className={`hidden rounded-full bg-green-400 font-semibold text-navy-950 shadow-[0_4px_16px_rgb(212_175_55/0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-300 active:translate-y-0 sm:inline-flex ${
              scrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5 text-[0.95rem]"
            }`}
          >
            {navCta.label}
          </Link>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${
              overlay
                ? "text-cream hover:bg-white/10"
                : "text-navy-900 hover:bg-navy-50"
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
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-navy-50 hover:text-navy-800"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href={navCta.href}
              onClick={() => setOpen(false)}
              className="block rounded-full bg-green-400 px-4 py-3 text-center text-base font-semibold text-navy-950"
            >
              {navCta.label}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
