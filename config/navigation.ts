/**
 * ============================================================
 * 【这是什么数据】导航栏与页脚的链接、按钮文案。
 *   - navLinks：导航栏（桌面 + 移动端菜单）链接
 *   - navCta：导航栏右侧「预约免费验光」按钮
 *   - footerColumns：页脚链接列（两列）
 * 【在哪里被使用】
 *   - components/Nav.tsx（navLinks / navCta）
 *   - components/Footer.tsx（footerColumns）
 * 【修改时注意什么】
 *   - 链接 href 指向页面锚点，锚点 id 定义在各 section 组件里，
 *     见下方对照表 —— 改 section 的 id 时必须同步改这里
 *   - 首页锚点 href 用 "/#xxx" 写法（从博客页也能跳回首页对应位置）；
 *     "/blog" 是独立路由，不要加 # 前缀
 *
 * ============================================================
 * 锚点 id ↔ 组件对照表（改 id 必须同步）
 *   top          → components/Hero.tsx          （品牌 logo 回首页顶部）
 *   products     → components/Products.tsx
 *   showroom     → components/Showroom.tsx
 *   process      → components/Process.tsx
 *   students     → components/Students.tsx
 *   testimonials → components/Testimonials.tsx  （导航未引用，仅 id 存在）
 *   contact      → components/Contact.tsx
 *   main         → app 层 <main id="main">      （无障碍「跳到主要内容」）
 * ============================================================
 */

export interface NavLink {
  /** 唯一标识（组件渲染用，勿与其他项重复） */
  id: string;
  /** 显示文字 */
  label: string;
  /** 跳转地址（首页锚点用 /#xxx，独立路由直接写路径） */
  href: string;
}

/** 导航栏链接（顺序即显示顺序） */
export const navLinks: NavLink[] = [
  { id: "products", label: "产品系列", href: "/#products" },
  { id: "showroom", label: "产品展示", href: "/#showroom" },
  { id: "process", label: "验光服务", href: "/#process" },
  { id: "students", label: "学生专区", href: "/#students" },
  { id: "blog", label: "护眼博客", href: "/blog" },
  { id: "contact", label: "联系我们", href: "/#contact" },
];

/** 导航栏右侧 CTA 按钮（桌面端显示；移动端菜单里也有一个同样的按钮） */
export const navCta = {
  label: "预约免费验光",
  href: "/#contact",
};

/** 页脚链接列 */
export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "快速导航",
    links: [
      { id: "products", label: "产品系列", href: "/#products" },
      { id: "showroom", label: "产品展示", href: "/#showroom" },
      { id: "process", label: "验光服务", href: "/#process" },
      { id: "students", label: "学生专区", href: "/#students" },
      { id: "blog", label: "护眼博客", href: "/blog" },
    ],
  },
  {
    title: "服务项目",
    links: [
      { id: "myopia", label: "学生近视配镜", href: "#contact" },
      { id: "control", label: "近视防控方案", href: "#contact" },
      { id: "sunglasses", label: "太阳镜选购", href: "#products" },
      { id: "reading", label: "老花镜验配", href: "#products" },
    ],
  },
];
