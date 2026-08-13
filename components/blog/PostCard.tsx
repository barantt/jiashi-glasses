import Link from "next/link";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { IconArrowRight, IconClock } from "@/components/icons";
import BlogCover from "./BlogCover";

export type PostSummary = Omit<Post, "content">;

export default function PostCard({
  post,
  featured = false,
}: {
  post: PostSummary;
  featured?: boolean;
}) {
  return (
    <article
      className={`group flex overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 ${
        featured
          ? "flex-col shadow-card hover:shadow-card-hover md:flex-row"
          : "flex-col shadow-card hover:shadow-card-hover"
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`block overflow-hidden ${featured ? "md:w-[46%]" : ""}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className={`h-full transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
            featured ? "min-h-[13rem]" : "aspect-[16/9]"
          }`}
        >
          <BlogCover variant={post.cover} />
        </div>
      </Link>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? "md:p-9" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-800">
            {post.category}
          </span>
          <time
            dateTime={post.date}
            className="font-latin text-xs font-medium tabular-nums text-ink-mute"
          >
            {formatDate(post.date)}
          </time>
        </div>

        <h3
          className={`mt-3 font-display font-bold leading-snug text-navy-900 transition-colors duration-200 group-hover:text-navy-700 ${
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p
          className={`mt-2.5 leading-relaxed text-ink-mute ${
            featured ? "line-clamp-3 text-base" : "line-clamp-2 text-sm"
          }`}
        >
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-mute">
            <IconClock className="h-3.5 w-3.5" />
            阅读约 {post.readMinutes} 分钟
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-700"
          >
            阅读全文
            <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
