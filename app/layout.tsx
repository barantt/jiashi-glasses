import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Serif_SC, Outfit } from "next/font/google";
import { ogImage, seo, siteUrl } from "@/config/site";
import "./globals.css";

const serifSC = Noto_Serif_SC({
  variable: "--font-serif-sc",
  weight: ["500", "600", "700", "900"],
  display: "swap",
});

const sansSC = Noto_Sans_SC({
  variable: "--font-sans-sc",
  weight: ["400", "500", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

/** 全站 metadata —— 文案与品牌名来自 config/site.ts 的 seo / ogImage */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: seo.titleDefault,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.og.title,
    description: seo.og.description,
    url: seo.og.url,
    locale: seo.og.locale,
    type: seo.og.type,
    siteName: seo.og.siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: seo.og.imageAlt,
      },
    ],
  },
  twitter: {
    card: seo.twitter.card,
    title: seo.twitter.title,
    description: seo.twitter.description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${serifSC.variable} ${sansSC.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
