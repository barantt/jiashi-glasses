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
import { brand, businessDescription, siteUrl } from "@/config/site";
import { store } from "@/config/contact";

/**
 * LocalBusiness 结构化数据 —— 名称 / 电话 / 地址 / 营业时间来自 config/。
 * 注意：仅写入可核实的字段 —— 页面上「14 年 / 4.9 分 / 2,300+ 评价」等
 * 为演示占位数据，在替换为真实数据前不写入 aggregateRating 等字段，
 * 避免向搜索引擎提交虚假声明。
 */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Optician", "LocalBusiness"],
  name: brand.name,
  alternateName: brand.nameEn,
  description: businessDescription,
  url: `${siteUrl}/`,
  image: `${siteUrl}/og-image.png`,
  telephone: store.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: store.addressShort,
    addressCountry: "CN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: store.geo.lat,
    longitude: store.geo.lng,
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
    opens: store.hoursOpen,
    closes: store.hoursClose,
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
