# 佳视眼镜 JIASHI OPTICAL · 品牌落地页

精致学院风（学术海军蓝 + 暖金）眼镜品牌落地页。核心客群为学生近视配镜，
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
| Hero | `components/Hero.tsx` | 海军蓝 + 手绘标准视力表 + 金色印章 |
| 信任条 | `components/TrustBar.tsx` | 资质与承诺 |
| 产品系列 | `components/Products.tsx` | 学生近视镜（核心卡）/ 太阳镜 / 老花镜 |
| 产品展示 | `components/Showroom.tsx` | 镜片 / 眼镜架 / 太阳镜 / 老花镜四分类筛选，12 款产品 |
| 验光流程 | `components/Process.tsx` | 六步流程 |
| 学生专区 | `components/Students.tsx` | 8 折卡 + 套餐 + 护眼贴士 |
| 口碑评价 | `components/Testimonials.tsx` | 家长与顾客评价 |
| 预约表单 | `components/Contact.tsx` | 门店信息 + 前端校验表单（演示） |
| 页脚 | `components/Footer.tsx` | — |

滚动渐入由 `components/Reveal.tsx`（IntersectionObserver）实现，
并尊重 `prefers-reduced-motion`。

产品插画集中在 `components/product-art.tsx`（12 个手绘 SVG 变体），
Showroom 的分类 Tab 支持键盘左右方向键切换。

## 设计令牌

见 `app/globals.css` 的 `@theme` 块（navy / gold / paper 色板、字体变量、
阴影与动效），完整设计系统文档见 `design-system/default/MASTER.md`。

## 上线前待办

- [ ] 替换占位内容：门店地址、电话（400-888-6666）、营业时间、套餐价格
- [ ] 接入预约表单真实后端（当前为前端模拟提交，见 `Contact.tsx` 注释）
- [ ] 替换页脚 ICP 备案号占位
- [ ] 如需真实产品照片，可替换三款 SVG 眼镜插画
