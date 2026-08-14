import Photo from "@/components/Photo";
import { blogPhotos } from "@/config/photos";

/**
 * 博客封面 —— 按文章 frontmatter 的 cover 字段从 config/photos.ts 取图。
 * 换真实封面图只需改 config/photos.ts 中 blogPhotos 的对应条目。
 */
export default function BlogCover({ variant }: { variant: string }) {
  const photo = blogPhotos[variant] ?? blogPhotos.default;
  return (
    <Photo
      photo={photo}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
    />
  );
}
