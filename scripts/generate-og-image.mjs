/**
 * 生成品牌分享图与 Apple 图标（无需联网，字体子集已提交入库）。
 * 重新运行：node scripts/generate-og-image.mjs
 * 产物：public/og-image.png（1200×630）、public/apple-icon.png（180×180）
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

const root = process.cwd();
const fontDir = path.join(root, "scripts/assets/fonts");

// 家族名 → 子集字体文件（由 scripts/fetch-og-fonts.mjs 生成）
// resvg-js 通过 fontFiles 显式加载，不依赖系统字体，任何机器可复现
const FONTS = {
  "Noto Serif SC": "Noto+Serif+SC-700-0.ttf",
  "Noto Sans SC": "Noto+Sans+SC-500-0.ttf",
  Outfit: "Outfit-600-0.ttf",
};

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1e3a5f"/>
      <stop offset="1" stop-color="#0f1e31"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="#ffffff" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="28" y="28" width="1144" height="574" rx="24" fill="none" stroke="#2fa06e" stroke-opacity="0.55" stroke-width="2"/>

  <!-- 左侧文案 -->
  <text x="80" y="168" font-family="Outfit" font-size="30" letter-spacing="9" fill="#2fa06e">EVISION OPTICAL · EST. 2012</text>
  <text x="76" y="300" font-family="Noto Serif SC" font-weight="700" font-size="132" fill="#fcfbf8">E视眼镜</text>
  <text x="80" y="404" font-family="Noto Serif SC" font-weight="700" font-size="58" fill="#2fa06e">看清世界，从E视开始</text>
  <text x="80" y="468" font-family="Noto Sans SC" font-weight="500" font-size="30" letter-spacing="6" fill="#d9e2ee">学生配镜 · 专业验光 · 太阳镜 · 老花镜</text>

  <!-- 右侧眼镜插画 -->
  <circle cx="902" cy="330" r="196" fill="none" stroke="#2fa06e" stroke-opacity="0.28" stroke-width="2"/>
  <circle cx="902" cy="330" r="176" fill="none" stroke="#2fa06e" stroke-opacity="0.18" stroke-width="1.5" stroke-dasharray="3 10"/>
  <g transform="rotate(-5 902 330)">
    <rect x="656" y="258" width="200" height="130" rx="55" fill="#eaf2fb" fill-opacity="0.96" stroke="#fcfbf8" stroke-width="7"/>
    <rect x="948" y="258" width="200" height="130" rx="55" fill="#eaf2fb" fill-opacity="0.96" stroke="#fcfbf8" stroke-width="7"/>
    <path d="M856 294c26 8 40 8 66 0" stroke="#fcfbf8" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M656 306l-110-44M1148 306l-110-44" stroke="#fcfbf8" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M706 350l36-30M1002 350l36-30" stroke="#2fa06e" stroke-width="6" stroke-linecap="round"/>
    <circle cx="656" cy="296" r="8" fill="#2fa06e"/>
    <circle cx="1148" cy="296" r="8" fill="#2fa06e"/>
  </g>

  <!-- 金色星点 -->
  <g stroke="#2fa06e" stroke-width="4" stroke-linecap="round">
    <path d="M1120 84v28M1106 98h28"/>
    <path d="M226 508v24M214 520h24"/>
  </g>
</svg>`;

const iconSvg = readFileSync(path.join(root, "app/icon.svg"), "utf8");

const fontFiles = Object.values(FONTS).map((f) => path.join(fontDir, f));

const pngBuffer = new Resvg(ogSvg, {
  font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "Noto Sans SC" },
}).render().asPng();
await sharp(pngBuffer).toFile(path.join(root, "public/og-image.png"));
console.log("✓ public/og-image.png (1200×630)");

await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile(
  path.join(root, "public/apple-icon.png")
);
console.log("✓ public/apple-icon.png (180×180)");
