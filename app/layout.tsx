import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Serif_SC, Outfit } from "next/font/google";
import { siteUrl } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "佳视眼镜 JIASHI OPTICAL｜学生近视配镜 · 专业验光",
    template: "%s｜佳视眼镜",
  },
  description:
    "佳视眼镜专注学生近视配镜十四年，21 步医学验光、轻至 8 克的航空钛镜架、延缓近视加深的功能性镜片，同时提供时尚太阳镜与精准老花镜验配。",
  keywords: [
    "佳视眼镜",
    "学生配镜",
    "近视眼镜",
    "医学验光",
    "太阳镜",
    "老花镜",
  ],
  openGraph: {
    title: "佳视眼镜 JIASHI OPTICAL｜看清世界，从佳视开始",
    description:
      "专注学生近视配镜十四年：医学验光、轻盈镜架、近视防控，也为您与家人提供时尚太阳镜与老花镜。",
    url: "/",
    locale: "zh_CN",
    type: "website",
    siteName: "佳视眼镜 JIASHI OPTICAL",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "佳视眼镜 JIASHI OPTICAL — 看清世界，从佳视开始",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "佳视眼镜 JIASHI OPTICAL｜看清世界，从佳视开始",
    description:
      "专注学生近视配镜十四年：医学验光、轻盈镜架、近视防控，也为您与家人提供时尚太阳镜与老花镜。",
    images: ["/og-image.png"],
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
