/**
 * Official Sthayu Ventures Brand Logo Component
 * Uses the uploaded image asset directly
 */

export function SthayuLogo({
  height = 44,
  className = "",
  alt = "Sthayu Ventures",
}) {
  return (
    <div className={`relative inline-flex shrink-0 items-center ${className}`}>
      <img
        src="/sthayu-ventures-logo.png"
        alt={alt}
        style={{ height: `${height}px`, width: "auto" }}
        className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  )
}

export function SthayuSymbol({ size = 38, className = "", alt = "Sthayu Ventures" }) {
  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      <img
        src="/sthayu-ventures-logo.png"
        alt={alt}
        style={{ height: `${size}px`, width: "auto" }}
        className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  )
}

export default function Logo({
  variant = "full",
  height = 44,
  className = "",
  alt = "Sthayu Ventures",
}) {
  if (variant === "symbol") {
    return <SthayuSymbol size={height} className={className} alt={alt} />
  }

  return <SthayuLogo height={height} className={className} alt={alt} />
}
