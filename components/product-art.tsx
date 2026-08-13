/**
 * 产品展示插画 —— 12 款产品手绘 SVG，与全站插画保持同一线性风格。
 * 所有眼镜统一 viewBox 0 0 240 170；镜片统一 viewBox 0 0 160 160。
 */

const F = "#1e3a5f"; // 海军蓝镜架
const G = "#d4af37"; // 金色点缀
const LENS = "#eaf2fb"; // 浅镜片

function Art({
  viewBox,
  className,
  children,
}: {
  viewBox: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg viewBox={viewBox} aria-hidden="true" className={className}>
      {children}
    </svg>
  );
}

function FloorShadow() {
  return <ellipse cx="120" cy="152" rx="70" ry="7" fill="#1e3a5f" opacity="0.08" />;
}

function GoldGlint({
  d,
  w = 2.2,
  o = 0.85,
}: {
  d: string;
  w?: number;
  o?: number;
}) {
  return (
    <path d={d} stroke={G} strokeWidth={w} strokeLinecap="round" fill="none" opacity={o} />
  );
}

/* ---------------- 眼镜架 ---------------- */

/** 航空钛轻韧镜架（圆框） */
function titaniumRound() {
  return (
    <>
      <FloorShadow />
      <circle cx="76" cy="86" r="32" fill={LENS} stroke={F} strokeWidth="3.5" />
      <circle cx="164" cy="86" r="32" fill={LENS} stroke={F} strokeWidth="3.5" />
      <path d="M108 84Q120 79 132 84" stroke={F} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M44 86 16 75M196 86l-28-11" stroke={F} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <GoldGlint d="M58 98Q76 88 94 98" />
      <GoldGlint d="M146 98Q164 88 182 98" />
      <circle cx="44" cy="86" r="3" fill={G} />
      <circle cx="196" cy="86" r="3" fill={G} />
    </>
  );
}

/** 儿童硅胶软腿镜架 */
function kids() {
  return (
    <>
      <FloorShadow />
      <circle cx="74" cy="88" r="30" fill={LENS} stroke={F} strokeWidth="4.5" />
      <circle cx="166" cy="88" r="30" fill={LENS} stroke={F} strokeWidth="4.5" />
      <path d="M104 86Q120 82 136 86" stroke={F} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M44 88 16 78M196 88l-28-10" stroke={F} strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="78" r="4.5" fill={G} />
      <circle cx="224" cy="78" r="4.5" fill={G} />
      <circle cx="44" cy="88" r="3" fill={G} />
      <circle cx="196" cy="88" r="3" fill={G} />
      <g stroke={G} strokeWidth="2" strokeLinecap="round">
        <path d="M60 56v12M54 62h12" />
        <path d="M180 56v12M174 62h12" />
      </g>
    </>
  );
}

/** TR90 板材镜架（方形） */
function square({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "#0f1e31" : F;
  const sw = dark ? 4.5 : 4;
  const lens = dark ? "url(#squareSunGrad)" : LENS;
  return (
    <>
      {dark && (
        <defs>
          <linearGradient id="squareSunGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#365e93" />
            <stop offset="1" stopColor="#0f1e31" />
          </linearGradient>
        </defs>
      )}
      <FloorShadow />
      <rect x="44" y="58" width="64" height="48" rx="12" fill={lens} stroke={stroke} strokeWidth={sw} />
      <rect x="132" y="58" width="64" height="48" rx="12" fill={lens} stroke={stroke} strokeWidth={sw} />
      <path d="M108 78h24" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      <path d="M44 80 16 69M196 80l-28-11" stroke={stroke} strokeWidth={sw} strokeLinecap="round" fill="none" />
      {dark ? (
        <>
          <GoldGlint d="M60 94l15-12" o={0.7} />
          <GoldGlint d="M150 94l15-12" o={0.7} />
          <g stroke={G} strokeWidth="2" strokeLinecap="round" opacity="0.85">
            <circle cx="202" cy="36" r="8" fill="none" />
            <path d="M202 20v-6M202 52v6M186 36h-6M218 36h6M190 24l-4-4M214 24l4-4M190 48l-4 4M214 48l4 4" />
          </g>
        </>
      ) : (
        <>
          <GoldGlint d="M60 94l15-12" />
          <GoldGlint d="M150 94l15-12" />
        </>
      )}
      <circle cx="44" cy="80" r="3.2" fill={G} />
      <circle cx="196" cy="80" r="3.2" fill={G} />
    </>
  );
}

/* ---------------- 太阳镜 ---------------- */

/** 经典飞行员款 */
function aviator() {
  const lens =
    "M102 56 Q78 50 66 72 Q57 94 74 109 Q85 118 101 111 L101 59 Q101 57 102 56 Z";
  return (
    <>
      <defs>
        <linearGradient id="aviGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#365e93" />
          <stop offset="1" stopColor="#0f1e31" />
        </linearGradient>
      </defs>
      <FloorShadow />
      <path d={lens} fill="url(#aviGrad)" stroke="#0f1e31" strokeWidth="4" strokeLinejoin="round" />
      <g transform="translate(240 0) scale(-1 1)">
        <path d={lens} fill="url(#aviGrad)" stroke="#0f1e31" strokeWidth="4" strokeLinejoin="round" />
      </g>
      <path d="M102 62Q120 54 138 62M102 68Q120 60 138 68" stroke="#0f1e31" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M76 54 48 44M164 54l-28-10" stroke="#0f1e31" strokeWidth="4" strokeLinecap="round" fill="none" />
      <GoldGlint d="M70 84l16-14" w={2.2} o={0.6} />
      <GoldGlint d="M170 84l-16-14" w={2.2} o={0.6} />
      <circle cx="76" cy="54" r="3" fill={G} />
      <circle cx="164" cy="54" r="3" fill={G} />
    </>
  );
}

/** 运动偏光镜（一体盾形） */
function sport() {
  return (
    <>
      <defs>
        <linearGradient id="sportGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#365e93" />
          <stop offset="1" stopColor="#0f1e31" />
        </linearGradient>
      </defs>
      <FloorShadow />
      <path
        d="M24 82 Q54 50 120 54 Q186 50 216 82 Q222 90 216 96 L190 104 Q120 118 50 104 L24 96 Q18 90 24 82 Z"
        fill="url(#sportGrad)"
        stroke="#0f1e31"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M24 86 6 76M216 86l-18-10" stroke="#0f1e31" strokeWidth="4" strokeLinecap="round" fill="none" />
      <GoldGlint d="M64 88l22-14" w={2.5} o={0.7} />
      <GoldGlint d="M176 88l-22-14" w={2.5} o={0.7} />
      <g stroke={G} strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <path d="M104 107h9M127 107h9" />
      </g>
    </>
  );
}

/* ---------------- 老花镜 ---------------- */

/** 经典半框老花镜 */
function halfRim() {
  return (
    <>
      <FloorShadow />
      <rect x="46" y="60" width="64" height="50" rx="20" fill="#eef3f9" stroke="#b3c5dd" strokeWidth="1.5" />
      <rect x="130" y="60" width="64" height="50" rx="20" fill="#eef3f9" stroke="#b3c5dd" strokeWidth="1.5" />
      <path d="M48 82Q78 52 110 74" stroke={F} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M192 82Q162 52 130 74" stroke={F} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <GoldGlint d="M48 86Q78 114 110 90" w={1.8} o={0.75} />
      <GoldGlint d="M192 86Q162 114 130 90" w={1.8} o={0.75} />
      <path d="M110 76Q120 72 130 76" stroke={F} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M46 80 20 70M194 80l-26-10" stroke={F} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="46" cy="80" r="3" fill={G} />
      <circle cx="194" cy="80" r="3" fill={G} />
    </>
  );
}

/** 折叠便携老花镜 */
function folding() {
  return (
    <>
      <FloorShadow />
      <circle cx="72" cy="88" r="26" fill={LENS} stroke={F} strokeWidth="3.5" />
      <circle cx="150" cy="88" r="26" fill={LENS} stroke={F} strokeWidth="3.5" />
      <path d="M98 86h26" stroke={F} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M46 88 30 76 42 60M176 88l-16-12 12-16" stroke={F} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="30" cy="76" r="3" fill={G} />
      <circle cx="192" cy="76" r="3" fill={G} />
      <circle cx="46" cy="88" r="2.8" fill={G} />
      <circle cx="176" cy="88" r="2.8" fill={G} />
      <GoldGlint d="M58 96q14-8 28 0" w={2} o={0.8} />
      <GoldGlint d="M136 96q14-8 28 0" w={2} o={0.8} />
    </>
  );
}

/** 渐进多焦点老花镜 */
function progressive() {
  return (
    <>
      <FloorShadow />
      <rect x="44" y="58" width="64" height="50" rx="14" fill={LENS} stroke={F} strokeWidth="3.5" />
      <rect x="132" y="58" width="64" height="50" rx="14" fill={LENS} stroke={F} strokeWidth="3.5" />
      <path d="M76 62V104M164 62V104" stroke={G} strokeWidth="1.8" strokeDasharray="3 4" />
      <path d="M108 78h24" stroke={F} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M44 80 16 69M196 80l-28-11" stroke={F} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="44" cy="80" r="3" fill={G} />
      <circle cx="196" cy="80" r="3" fill={G} />
    </>
  );
}

/* ---------------- 镜片 ---------------- */

/** 离焦防控镜片：微透镜阵列 */
function DotRing({ r, n, o = 0 }: { r: number; n: number; o?: number }) {
  return (
    <g fill="#365e93" opacity="0.32">
      {Array.from({ length: n }, (_, i) => {
        const a = (i / n) * Math.PI * 2 + o;
        return <circle key={i} cx={80 + r * Math.cos(a)} cy={80 + r * Math.sin(a)} r={2} />;
      })}
    </g>
  );
}

function lensDim() {
  return (
    <>
      <defs>
        <linearGradient id="dimGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dce9f7" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="54" fill="url(#dimGrad)" stroke="#b3c5dd" strokeWidth="1.5" />
      <DotRing r={43} n={20} />
      <DotRing r={31} n={14} o={0.35} />
      <circle cx="80" cy="80" r="17" fill="none" stroke="#b3c5dd" strokeWidth="1" strokeDasharray="2 4" opacity="0.8" />
      <path d="M52 58 76 34" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
      <g stroke={G} strokeWidth="2" strokeLinecap="round">
        <path d="M118 38v8M114 42h8" />
      </g>
    </>
  );
}

/** 防蓝光镜片：增透膜反光 */
function lensBlue() {
  return (
    <>
      <defs>
        <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eaf1fb" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="54" fill="url(#blueGrad)" stroke="#b3c5dd" strokeWidth="1.5" />
      <path d="M34 112 58 52 78 58 54 118Z" fill="#365e93" opacity="0.16" />
      <path d="M44 114 66 56 86 62 64 120Z" fill="#8b5cf6" opacity="0.1" />
      <path d="M48 62 72 38" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
      <g stroke={G} strokeWidth="2" strokeLinecap="round">
        <path d="M112 42v8M108 46h8" />
      </g>
    </>
  );
}

/** 智能变色镜片：室内外渐变 */
function lensPhoto() {
  return (
    <>
      <defs>
        <linearGradient id="photoGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#eaf2fb" />
          <stop offset="1" stopColor="#365e93" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="54" fill="url(#photoGrad)" stroke="#b3c5dd" strokeWidth="1.5" />
      <rect x="75" y="28" width="5" height="104" rx="2.5" fill="#ffffff" opacity="0.35" />
      <g stroke={G} strokeWidth="2" strokeLinecap="round">
        <circle cx="116" cy="44" r="9" fill="none" />
        <path d="M116 27v-6M116 61v6M99 44h-6M133 44h6M104 32l-4-4M128 32l4-4M104 56l-4 4M128 56l4 4" />
      </g>
      <path d="M48 106 66 88" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    </>
  );
}

/* ---------------- 出口 ---------------- */

export type ProductArtVariant =
  | "titanium-round"
  | "kids"
  | "square"
  | "square-sun"
  | "aviator"
  | "sport"
  | "halfrim"
  | "folding"
  | "progressive"
  | "lens-dim"
  | "lens-blue"
  | "lens-photo";

const LENS_VARIANTS: ProductArtVariant[] = ["lens-dim", "lens-blue", "lens-photo"];

export function ProductArt({
  variant,
  className = "h-full w-full",
}: {
  variant: ProductArtVariant;
  className?: string;
}) {
  const isLens = LENS_VARIANTS.includes(variant);
  const content = (() => {
    switch (variant) {
      case "titanium-round":
        return titaniumRound();
      case "kids":
        return kids();
      case "square":
        return square({});
      case "square-sun":
        return square({ dark: true });
      case "aviator":
        return aviator();
      case "sport":
        return sport();
      case "halfrim":
        return halfRim();
      case "folding":
        return folding();
      case "progressive":
        return progressive();
      case "lens-dim":
        return lensDim();
      case "lens-blue":
        return lensBlue();
      case "lens-photo":
        return lensPhoto();
    }
  })();

  return (
    <Art viewBox={isLens ? "0 0 160 160" : "0 0 240 170"} className={className}>
      {content}
    </Art>
  );
}
