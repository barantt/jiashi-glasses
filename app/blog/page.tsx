import type { Metadata } from "next";
import BlogFilters from "@/components/blog/BlogFilters";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { getPostSummaries, categories } from "@/lib/blog";
import { blogPage, blogSeo } from "@/config/blog";
import { brand, ogImage, siteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: blogSeo.title,
  description: blogSeo.description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: blogSeo.ogTitle,
    description: blogSeo.ogDescription,
    url: "/blog",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: blogSeo.jsonLd.blogName,
  description: blogSeo.jsonLd.blogDesc,
  url: `${siteUrl}/blog`,
  publisher: {
    "@type": "Organization",
    name: brand.name,
    url: `${siteUrl}/`,
  },
};

export default function BlogPage() {
  const posts = getPostSummaries();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Nav />
      <main id="main">
      <section className="relative overflow-hidden bg-navy-900 pb-14 pt-32 sm:pt-36">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-green-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="flex items-center gap-3">
            <span className="rule-green w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-green-300 sm:text-sm">
              {blogPage.eyebrow}
            </span>
          </p>
          <h1 className="mt-5 font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            {blogPage.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            {blogPage.subtitle}
          </p>
        </div>
      </section>

      {/* 列表 */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BlogFilters posts={posts} categories={[...categories]} />
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
