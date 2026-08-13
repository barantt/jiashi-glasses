import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlogCover from "@/components/blog/BlogCover";
import PostCard from "@/components/blog/PostCard";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { IconArrowRight, IconChevronDown, IconClock } from "@/components/icons";
import { formatDate, getPost, getPosts, getRelatedPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "zh-CN",
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "佳视眼镜",
      url: `${siteUrl}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "佳视眼镜",
      url: `${siteUrl}/`,
    },
    image: `${siteUrl}/og-image.png`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Nav variant="solid" />
      <main id="main">
      <article className="bg-paper pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* 面包屑 */}
          <nav aria-label="面包屑" className="flex flex-wrap items-center gap-2 text-sm text-ink-mute">
            <Link href="/" className="transition-colors duration-200 hover:text-navy-800">
              首页
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="transition-colors duration-200 hover:text-navy-800">
              护眼博客
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-navy-800">{post.category}</span>
          </nav>

          {/* 文章头 */}
          <header className="mt-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-navy-800 px-3.5 py-1.5 text-xs font-bold text-gold-300">
                {post.category}
              </span>
              <time dateTime={post.date} className="font-latin text-sm tabular-nums text-ink-mute">
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-snug text-navy-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
              {post.description}
            </p>
            <div className="mt-5 flex items-center gap-4 border-b border-line pb-6 text-sm text-ink-mute">
              <span className="inline-flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-800 text-[0.7rem] font-bold text-gold-300"
                >
                  佳
                </span>
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconClock className="h-4 w-4" />
                阅读约 {post.readMinutes} 分钟
              </span>
            </div>
          </header>

          {/* 封面 */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-line shadow-card">
            <div className="aspect-[16/8]">
              <BlogCover variant={post.cover} />
            </div>
          </div>

          {/* 正文 */}
          <div className="article-body mt-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {/* 标签 */}
          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-8">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs text-ink-mute"
                >
                  # {t}
                </span>
              ))}
            </div>
          )}

          {/* 预约 CTA */}
          <aside className="mt-12 overflow-hidden rounded-3xl bg-navy-900 p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              眼睛的问题，值得当面聊一聊
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-100 sm:text-base">
              文章能讲清道理，验光才能看清状况。预约免费验光，让专业人士为你的眼睛做一次完整评估。
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-[0_8px_24px_rgb(212_175_55/0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300"
              >
                预约免费验光
                <IconArrowRight className="h-4.5 w-4.5" />
              </Link>
              <a
                href="tel:4008886666"
                className="font-latin text-base font-semibold text-gold-300 transition-colors duration-200 hover:text-gold-400"
              >
                400-888-6666
              </a>
            </div>
          </aside>
        </div>

        {/* 相关文章 */}
        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
            <h2 className="text-center font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              继续阅读
            </h2>
            <div className="mt-8 grid gap-7 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}

        {/* 返回 */}
        <div className="mx-auto mt-14 max-w-3xl px-5 text-center sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-700"
          >
            <IconChevronDown className="h-4 w-4 rotate-90" />
            返回全部文章
          </Link>
        </div>
      </article>
      </main>
      <Footer />
    </>
  );
}
