/**
 * Official Sthayu Ventures Brand Logo Component
 * Renders the authentic golden emblem & wordmark
 */

export function SthayuLogo({
  height = 42,
  className = "",
  alt = "Sthayu Ventures",
}) {
  return (
    <div className={`relative inline-flex shrink-0 items-center ${className}`}>
      <img
        src="/sthayu-official-logo.svg"
        alt={alt}
        style={{ height: `${height}px`, width: "auto" }}
        className="max-h-full w-auto object-contain drop-shadow-[0_2px_16px_rgba(212,185,130,0.22)] transition-transform duration-300 group-hover:scale-[1.03]"
        referrerPolicy="no-referrer"
      />
    </div>
  )
}

export function SthayuSymbol({ size = 36, className = "" }) {
  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <img
        src="/sthayu-symbol.svg"
        alt="Sthayu Ventures Emblem"
        width={size}
        height={size}
        className="h-full w-full object-contain drop-shadow-[0_2px_10px_rgba(212,185,130,0.25)] transition-transform duration-300 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  )
}

export default function Logo({
  variant = "full",
  height = 42,
  className = "",
}) {
  if (variant === "symbol") {
    return <SthayuSymbol size={height} className={className} />
  }

  return <SthayuLogo height={height} className={className} />
}
