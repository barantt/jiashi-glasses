# E视眼镜 EVISION OPTICAL · 品牌落地页

蓝绿视光医疗风（学术海军蓝 + 翡翠绿）眼镜品牌落地页。核心客群为学生近视配镜，
同时覆盖时尚太阳镜与老花镜业务。

## 技术栈

- **Next.js 16**（App Router + Turbopack）+ **TypeScript**
- **Tailwind CSS v4**（`@theme` 设计令牌）
- 字体：Noto Serif SC（标题）/ Noto Sans SC（正文）/ Outfit（拉丁与数字），
  经 `next/font` 自托管，无外部请求

## 快速开始

```bash
npm install
npm run dev      # 开发预览 http://localhost:3000
npm run build    # 生产构建
npm run start    # 生产预览
```

## 页面结构

| 区块 | 文件 | 说明 |
|------|------|------|
| 导航（吸顶） | `components/Nav.tsx` | 滚动变实底 + 移动端菜单 |
| Hero | `components/Hero.tsx` | 海军蓝 + 手绘标准视力表 + 蓝绿印章 |
| 信任条 | `components/TrustBar.tsx` | 资质与承诺 |
| 产品系列 | `components/Products.tsx` | 学生近视镜（核心卡）/ 太阳镜 / 老花镜 |
| 产品展示 | `components/Showroom.tsx` | 镜片 / 眼镜架 / 太阳镜 / 老花镜四分类筛选，12 款产品 |
| 验光流程 | `components/Process.tsx` | 六步流程 |
| 学生专区 | `components/Students.tsx` | 8 折卡 + 套餐 + 护眼贴士 |
| 口碑评价 | `components/Testimonials.tsx` | 家长与顾客评价 |
| 预约表单 | `components/Contact.tsx` | 门店信息 + 前端校验表单（演示） |
| 页脚 | `components/Footer.tsx` | — |
| 护眼博客 | `app/blog/` | 列表 + 文章详情（SSG，BlogPosting JSON-LD，RSS） |

## 博客写作指南

文章为 Markdown 文件，放在 `content/blog/*.md`，frontmatter 字段：

```yaml
---
title: 文章标题
description: 一句话摘要（用于列表卡片与 meta description）
category: 近视防控   # 近视防控 / 学生护眼 / 眼镜选购 / 长辈视界
date: 2026-08-12
cover: lens-dim     # 封面变体，见 components/blog/BlogCover.tsx
tags: [离焦镜片, 近视防控]
---
```

- 保存后重新 `npm run build` 即自动生成静态页面、纳入 sitemap 与 RSS
- 正文支持 GFM 表格；站内互链用 `/blog/xxx`、`/#锚点` 绝对路径
- 内容要求：不夸大功效、不做医疗承诺，文末保留科普免责声明

滚动渐入由 `components/Reveal.tsx`（IntersectionObserver）实现，
并尊重 `prefers-reduced-motion`。

产品插画集中在 `components/product-art.tsx`（12 个手绘 SVG 变体），
Showroom 的分类 Tab 支持键盘左右方向键切换。

## 设计令牌

见 `app/globals.css` 的 `@theme` 块（navy / gold / paper 色板、字体变量、
阴影与动效），完整设计系统文档见 `design-system/default/MASTER.md`。

## 上线前待办

- [x] robots.txt / sitemap.xml / canonical（经 `app/robots.ts`、`app/sitemap.ts` 与 `metadataBase` 自动生成）
- [x] LocalBusiness(Optician) 结构化数据、og:image 分享图（`public/og-image.png`）、品牌 favicon
- [ ] **替换占位内容**：门店地址、电话（400-888-6666）、营业时间、套餐价格、以及「14 年 / 10万+ / 4.9 分 / 2,300+ 评价」等信任数据（结构化数据中已刻意不写入这些占位数字）
- [ ] 接入预约表单真实后端（当前为前端模拟提交，见 `Contact.tsx` 注释）
- [ ] 替换页脚 ICP 备案号占位
- [ ] 部署时设置环境变量 `NEXT_PUBLIC_SITE_URL=https://正式域名`（canonical、og:url、robots、sitemap、JSON-LD 均自动跟随）
- [ ] 如需真实产品照片，可替换三款 SVG 眼镜插画与 Showroom 的 `<ProductArt>`

## 品牌资产生成脚本

```bash
node scripts/fetch-og-fonts.mjs      # 更新 OG 图字体子集（需联网，产物已入库）
node scripts/generate-og-image.mjs   # 重新生成 og-image.png / apple-icon.png（离线可跑）
```
