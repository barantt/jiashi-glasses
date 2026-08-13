import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/** 博客内容目录 */
const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export const categories = ["近视防控", "学生护眼", "眼镜选购", "长辈视界"] as const;
export type Category = (typeof categories)[number];

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: Category;
  date: string; // YYYY-MM-DD
  author: string;
  cover: string;
  tags: string[];
  content: string;
  readMinutes: number;
}

/** 中文阅读速度约 400 字/分钟 */
function readMinutes(text: string): number {
  const chars = text.replace(/\s+/g, "").length;
  return Math.max(1, Math.round(chars / 400));
}

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, "");
  // js-yaml 会把未加引号的 YYYY-MM-DD 解析成 Date 对象，统一归一化为日期字符串
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? "");
  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    category: data.category as Category,
    date,
    author: String(data.author ?? "佳视视光团队"),
    cover: String(data.cover ?? "default"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
    readMinutes: readMinutes(content),
  };
}

/** 全部文章，按日期倒序 */
export function getPosts(): Post[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"));
  return files
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 按 slug 取单篇（含正文）；不存在返回 null */
export function getPost(slug: string): Post | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return readPost(`${slug}.md`);
}

/** 列表用摘要（不含正文，减小序列化体积） */
export function getPostSummaries() {
  return getPosts().map((post) => {
    const { content, ...rest } = post;
    void content;
    return rest;
  });
}

/** 同分类相关文章（不含当前篇），最多 3 篇 */
export function getRelatedPosts(slug: string, category: Category, limit = 3) {
  return getPosts()
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

/** 日期格式化（转发自纯函数模块，便于客户端组件直接引用） */
export { formatDate } from "./format";
