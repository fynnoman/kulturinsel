type Props = {
  className?: string;
  width?: number;
  height?: number;
  tone?: "gold" | "pilger" | "ink";
};

// Stilisierte Jakobsmuschel als Vereinsmarke.
export default function ShellMark({
  className,
  width = 36,
  height = 36,
  tone = "gold",
}: Props) {
  const stroke =
    tone === "gold"
      ? "url(#kjk-gold)"
      : tone === "pilger"
        ? "#1f3a5f"
        : "#1b1a17";

  return (
    <svg
      viewBox="0 0 48 48"
      width={width}
      height={height}
      role="img"
      aria-label="Jakobsmuschel"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="kjk-gold" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d8b86a" />
          <stop offset="1" stopColor="#8d6b24" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={stroke} strokeWidth="1.1" strokeLinecap="round">
        {/* Shell outer curve */}
        <path d="M24 42c-10 0-18-8-18-18 0-3 1-6 3-8h30c2 2 3 5 3 8 0 10-8 18-18 18z" />
        {/* Ribs */}
        <path d="M24 16v26" />
        <path d="M18 17l-4 24" strokeOpacity="0.8" />
        <path d="M30 17l4 24" strokeOpacity="0.8" />
        <path d="M13 18l-5 20" strokeOpacity="0.6" />
        <path d="M35 18l5 20" strokeOpacity="0.6" />
        <path d="M9 19l-2 14" strokeOpacity="0.4" />
        <path d="M39 19l2 14" strokeOpacity="0.4" />
        {/* Top edge */}
        <path d="M6 16h36" strokeOpacity="0.9" />
        {/* Hinge dots */}
        <circle cx="20" cy="14" r="1.2" fill={stroke} stroke="none" />
        <circle cx="28" cy="14" r="1.2" fill={stroke} stroke="none" />
      </g>
    </svg>
  );
}
