/**
 * 下载 OG 分享图所需的字体子集（仅包含图中用到的文字，单文件几 KB）。
 * 生成产物提交入库（scripts/assets/fonts/），此后生成分享图无需联网。
 * 重新运行：node scripts/fetch-og-fonts.mjs
 */

import { writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "scripts/assets/fonts");

// family:weight 与所需文字
const REQUESTS = [
  { family: "Noto+Serif+SC", weight: 700, text: "E视眼镜看清世界从开始，" },
  { family: "Noto+Sans+SC", weight: 500, text: "学生配镜专业验光太阳镜老花镜·" },
  { family: "Outfit", weight: 600, text: "EVISION OPTICAL EST. 2012 ·" },
];

const cssUrl = (family, weight, text) =>
  `https://fonts.googleapis.com/css?family=${family}:${weight}&text=${encodeURIComponent(text)}`;

for (const { family, weight, text } of REQUESTS) {
  const css = await fetch(cssUrl(family, weight, text)).then((r) => r.text());
  // 解析每个 @font-face 块：font-family、font-weight、src url(...)
  const blocks = [...css.matchAll(/@font-face\s*\{([^}]+)\}/g)].map((m) => {
    const body = m[1];
    return {
      family: body.match(/font-family:\s*'([^']+)'/)?.[1],
      weight: body.match(/font-weight:\s*(\d+)/)?.[1],
      url: body.match(/url\((https:[^)]+)\)/)?.[1],
    };
  });

  for (const [i, b] of blocks.entries()) {
    const data = await fetch(b.url).then((r) => r.arrayBuffer());
    const file = `${family}-${weight}-${i}.ttf`;
    await writeFile(path.join(OUT_DIR, file), Buffer.from(data));
    console.log(`✓ ${file}  (${Math.round(data.byteLength / 1024)} KB)`);
  }
}

console.log("\n字体子集已保存到 scripts/assets/fonts/");
