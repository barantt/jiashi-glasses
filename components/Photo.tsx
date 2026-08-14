import Image from "next/image";
import type { Photo } from "@/config/photos";

/**
 * 通用图片组件：宽高固定（防 CLS）、object-cover 填满容器。
 * 数据来自 config/photos.ts，换真实照片只需改该文件。
 */
export default function Photo({
  photo,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
}: {
  photo: Photo;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
