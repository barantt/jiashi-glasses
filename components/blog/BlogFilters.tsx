"use client";

import { useState } from "react";
import type { PostSummary } from "./PostCard";
import PostCard from "./PostCard";

const ALL = "全部";

/**
 * 博客列表：分类筛选 + 卡片网格（与 Showroom 同一交互模式，
 * 支持键盘左右方向键切换分类）。
 */
export default function BlogFilters({
  posts,
  categories,
}: {
  posts: PostSummary[];
  categories: string[];
}) {
  const [active, setActive] = useState(ALL);
  const tabs = [ALL, ...categories];

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active);
  const [featured, ...rest] = filtered;

  const onTabKey = (e: React.KeyboardEvent) => {
    const i = tabs.indexOf(active);
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    if (next >= 0) {
      e.preventDefault();
      setActive(tabs[next]);
    }
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="文章分类"
        onKeyDown={onTabKey}
        className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
      >
        {tabs.map((c) => (
          <button
            key={c}
            role="tab"
            type="button"
            aria-selected={active === c}
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
        共 {filtered.length} 篇文章
      </p>

      <div key={active} className="mt-10 space-y-7">
        {featured && <PostCard post={featured} featured />}
        {rest.length > 0 && (
          <div className="grid gap-7 md:grid-cols-2">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
