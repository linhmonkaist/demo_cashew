type Tone = "gold" | "cream" | "green" | "split" | "factory" | "pack" | "cert" | "news";

const tones: Record<Tone, [string, string]> = {
  gold: ["#f3d48a", "#c9842a"],
  cream: ["#f7efe2", "#d7b899"],
  green: ["#d9f0df", "#2fa949"],
  split: ["#f6e7c1", "#8c6239"],
  factory: ["#e7f6eb", "#1d6b32"],
  pack: ["#efe6d6", "#8a5a2b"],
  cert: ["#e8f5ec", "#1f7a3a"],
  news: ["#f8f1e6", "#2fa949"],
};

export function Scene({
  tone,
  label,
  className = "",
}: {
  tone: Tone;
  label: string;
  className?: string;
}) {
  const [from, to] = tones[tone];
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={label} className={className}>
      <rect width="640" height="420" fill={from} />
      <ellipse cx="470" cy="250" rx="180" ry="90" fill={to} opacity="0.18" />
      <path d="M120 250c40-90 150-120 210-70 30 24 28 70-8 96-50 36-150 28-202-26z" fill={to} />
      <path d="M250 190c30 10 48 48 28 78" fill="none" stroke="#fff8ea" strokeWidth="8" strokeLinecap="round" />
      {tone === "split" && (
        <path d="M300 170c20 40 10 90-20 120" fill="none" stroke="#fff8ea" strokeWidth="6" />
      )}
      <rect x="48" y="300" width="180" height="16" rx="8" fill="#ffffff" opacity="0.7" />
      <rect x="48" y="328" width="120" height="10" rx="5" fill="#ffffff" opacity="0.5" />
    </svg>
  );
}
