import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Reveal from "@/components/Reveal";
import Showroom from "@/components/Showroom";
import Students from "@/components/Students";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import { siteUrl } from "@/lib/site";

/**
 * LocalBusiness 结构化数据。
 * 注意：仅写入可核实的字段 —— 页面上「14 年 / 4.9 分 / 2,300+ 评价」等
 * 为演示占位数据，在替换为真实数据前不写入 aggregateRating 等字段，
 * 避免向搜索引擎提交虚假声明。
 */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Optician", "LocalBusiness"],
  name: "佳视眼镜",
  alternateName: "JIASHI OPTICAL",
  description:
    "专注学生近视配镜的眼镜店，提供医学验光、近视防控镜片、时尚太阳镜与老花镜验配服务。",
  url: `${siteUrl}/`,
  image: `${siteUrl}/og-image.png`,
  telephone: "+86-400-888-6666",
  address: {
    "@type": "PostalAddress",
    streetAddress: "幸福路 88 号（第一中学对面）",
    addressCountry: "CN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <TrustBar />
        <Reveal>
          <Products />
        </Reveal>
        <Reveal>
          <Showroom />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Students />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
