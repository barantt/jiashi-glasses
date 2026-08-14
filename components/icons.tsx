import type { SVGProps } from "react";
import Image from "next/image";

/**
 * E视眼镜图标集 —— 统一线性风格：1.5px 描边、圆角端点
 */

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function IconEye(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
    </svg>
  );
}

export function IconBookOpen(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 6.7C10.1 5 7.2 4.6 3.5 4.9v13.3c3.7-.3 6.6.1 8.5 1.8 1.9-1.7 4.8-2.1 8.5-1.8V4.9c-3.7-.3-6.6.1-8.5 1.8Z" />
      <path d="M12 6.7V20" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 3l7 2.8v5.4c0 4.4-3 7.6-7 9.3-4-1.7-7-4.9-7-9.3V5.8L12 3Z" />
      <path d="m9 11.8 2.2 2.2 4.3-4.5" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 3l1.9 7.1L21 12l-7.1 1.9L12 21l-1.9-7.1L3 12l7.1-1.9L12 3Z" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 21s-6.5-5.3-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.7 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5.2 4h3.6l1.4 4.6-2.1 1.7a13 13 0 0 0 5.6 5.6l1.7-2.1L20.4 15v3.6a1.8 1.8 0 0 1-2 1.8A16.4 16.4 0 0 1 3.4 6a1.8 1.8 0 0 1 1.8-2Z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

export function IconStar({
  filled = true,
  ...props
}: IconProps & { filled?: boolean }) {
  const path =
    "M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.2l-5.7 3 1.2-6.3-4.7-4.4 6.4-.8L12 2.8Z";
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d={path}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="m4.5 12.5 5 5L19.5 6.5" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 2.8V6M16 2.8V6" />
    </svg>
  );
}

export function IconRuler(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="2.5" y="9" width="19" height="6" rx="1.5" transform="rotate(-18 12 12)" />
      <path d="m7.5 10.4 1.6-.5M11.3 9.2l1.6-.5M15.1 8l1.6-.5" />
    </svg>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 3.5V8h-4.5" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}

/**
 * 品牌标志：使用 public/eshiglasses-logo.webp（真实 Logo 锁版，含文字；
 * 由 eshiglasses-logo.png 压缩而来，43KB）。priority 保证首屏立即加载。
 * 用法：固定高度 + w-auto（图是横向锁版，勿设置正方形宽高）。
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/eshiglasses-logo.webp"
      alt="E视眼镜"
      width={768}
      height={512}
      priority
      className={className}
    />
  );
}
