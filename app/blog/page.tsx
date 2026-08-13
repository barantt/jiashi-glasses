import type { Metadata } from "next";
import BlogFilters from "@/components/blog/BlogFilters";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { getPostSummaries, categories } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "护眼博客｜眼镜与眼健康科普",
  description:
    "佳视眼镜护眼博客：近视防控、学生护眼、眼镜选购、长辈视界 —— 用专业验光师的知识，讲清楚每一件和眼睛有关的小事。",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "护眼博客｜佳视眼镜",
    description: "近视防控、学生护眼、眼镜选购、长辈视界 —— 眼镜与眼健康的实用科普。",
    url: "/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "佳视眼镜护眼博客",
  description: "眼镜与眼健康科普：近视防控、学生护眼、眼镜选购、长辈视界。",
  url: `${siteUrl}/blog`,
  publisher: {
    "@type": "Organization",
    name: "佳视眼镜",
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
          className="absolute -right-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-gold-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="flex items-center gap-3">
            <span className="rule-gold w-10" />
            <span className="font-latin text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 sm:text-sm">
              Eye Health Blog
            </span>
          </p>
          <h1 className="mt-5 font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            护眼博客
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            近视防控、学生护眼、眼镜选购、长辈视界 ——
            用验光师的知识，讲清楚每一件和眼睛有关的小事。
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
