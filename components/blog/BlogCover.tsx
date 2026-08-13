/**
 * 博客封面插画 —— 与全站同一线性风格，按 frontmatter 的 cover 字段选择变体。
 * viewBox 400×225（16:9）。
 */

const F = "#1e3a5f";
const G = "#d4af37";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 225"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="225" fill="#fcfbf8" />
      <circle cx="200" cy="112" r="88" fill="none" stroke="#e8e3d7" strokeWidth="1.5" />
      <circle cx="200" cy="112" r="98" fill="none" stroke="#f0ece2" strokeWidth="1" strokeDasharray="2 6" />
      {children}
    </svg>
  );
}

function lensDim() {
  const dots = (r: number, n: number) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      return (
        <circle
          key={i}
          cx={200 + r * Math.cos(a)}
          cy={112 + r * Math.sin(a)}
          r={2.4}
          fill="#365e93"
          opacity={0.32}
        />
      );
    });
  return (
    <Frame>
      <circle cx="200" cy="112" r="58" fill="#ffffff" stroke="#b3c5dd" strokeWidth="2" />
      {dots(48, 18)}
      {dots(36, 12)}
      <circle cx="200" cy="112" r="19" fill="none" stroke="#b3c5dd" strokeWidth="1.2" strokeDasharray="2 5" />
      <path d="M166 78 196 58" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
      <g stroke={G} strokeWidth="2.5" strokeLinecap="round">
        <path d="M244 58v10M239 63h10" />
      </g>
    </Frame>
  );
}

function lensBlue() {
  return (
    <Frame>
      <circle cx="200" cy="112" r="58" fill="#ffffff" stroke="#b3c5dd" strokeWidth="2" />
      <path d="M146 150 176 64 200 72 170 158Z" fill="#365e93" opacity="0.14" />
      <path d="M158 152 184 70 208 78 182 160Z" fill="#8b5cf6" opacity="0.1" />
      <path d="M162 82 192 60" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
      <g stroke={G} strokeWidth="2.5" strokeLinecap="round">
        <path d="M236 66v10M231 71h10" />
      </g>
    </Frame>
  );
}

function eye() {
  return (
    <Frame>
      <path
        d="M132 112S158 72 200 72s68 40 68 40-26 40-68 40-68-40-68-40Z"
        fill="#eaf2fb"
        stroke={F}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="112" r="17" fill="#1e3a5f" />
      <circle cx="206" cy="105" r="4.5" fill="#d4af37" />
      <g stroke={G} strokeWidth="2.5" strokeLinecap="round">
        <path d="M294 52v10M289 57h10" />
        <path d="M110 176v8M106 180h8" />
      </g>
    </Frame>
  );
}

function progressive() {
  return (
    <Frame>
      <rect x="126" y="72" width="64" height="52" rx="14" fill="#eaf2fb" stroke={F} strokeWidth="3.5" />
      <rect x="210" y="72" width="64" height="52" rx="14" fill="#eaf2fb" stroke={F} strokeWidth="3.5" />
      <path d="M158 76v44M242 76v44" stroke={G} strokeWidth="2" strokeDasharray="3 5" />
      <path d="M190 88h20" stroke={F} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M126 94 96 82M274 94l-30-12" stroke={F} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="126" cy="94" r="3.2" fill={G} />
      <circle cx="274" cy="94" r="3.2" fill={G} />
    </Frame>
  );
}

function sun() {
  return (
    <Frame>
      <circle cx="200" cy="112" r="34" fill="none" stroke={G} strokeWidth="3" />
      <g stroke={G} strokeWidth="3" strokeLinecap="round">
        <path d="M200 52v-14M200 172v-14M140 112h-14M260 112h14M158 70l-10-10M242 70l10-10M158 154l-10 10M242 154l10 10" />
      </g>
      <path d="M164 126c8-5 24-5 32 0 8-5 24-5 32 0" stroke={F} strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.55" />
    </Frame>
  );
}

function defaultCover() {
  return (
    <Frame>
      <rect x="106" y="76" width="78" height="56" rx="22" fill="#eaf2fb" stroke={F} strokeWidth="3.5" />
      <rect x="216" y="76" width="78" height="56" rx="22" fill="#eaf2fb" stroke={F} strokeWidth="3.5" />
      <path d="M184 92c10 3 22 3 32 0" stroke={F} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M106 88 82 76M294 88l-24-12" stroke={F} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M122 116l16-12M232 116l16-12" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  );
}

const variants: Record<string, () => React.ReactNode> = {
  "lens-dim": lensDim,
  "lens-blue": lensBlue,
  eye,
  progressive,
  sun,
};

export default function BlogCover({ variant }: { variant: string }) {
  const render = variants[variant] ?? defaultCover;
  return (
    <div className="art-tile h-full w-full">
      <div className="h-full w-full">{render()}</div>
    </div>
  );
}
