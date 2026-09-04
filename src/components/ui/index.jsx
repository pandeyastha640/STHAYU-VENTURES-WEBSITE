import { useRef } from "react"
import { motion, useInView } from "motion/react"

export function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ pill, title, description, className = "", align = "center" }) {
  const alignmentClass = align === "left" ? "items-start text-left" : "items-center text-center"

  return (
    <div className={`flex flex-col ${alignmentClass} ${className}`}>
      {pill && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4b982]/30 bg-[#d4b982]/[0.08] px-4 py-1.5 text-[11px] font-mono font-semibold text-[#d4b982] uppercase tracking-[0.14em] backdrop-blur-sm shadow-[0_0_15px_rgba(212,185,130,0.1)]">
          {pill.icon && <pill.icon className="h-3.5 w-3.5 text-[#d4b982]" />}
          <span>{pill.text}</span>
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl leading-[1.14]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300 leading-[1.65] font-normal tracking-[-0.01em]">
          {description}
        </p>
      )}
    </div>
  )
}

export function GlassCard({ children, className = "", hover = true, glow = false }) {
  return (
    <div
      className={`relative rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.7)] ${
        hover
          ? "transition-all duration-300 hover:border-[#d4b982]/30 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
          : ""
      } ${className}`}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#d4b982]/[0.04] to-transparent" />
      )}
      {children}
    </div>
  )
}

export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "border-white/10 bg-white/5 text-slate-300",
    accent: "border-[#d4b982]/30 bg-[#d4b982]/[0.08] text-[#d4b982]",
    cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-[0.12em] ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  )
}

export function Button({ variant = "primary", children, className = "", href, ...props }) {
  const variants = {
    primary: "bg-[#d4b982] text-black hover:bg-[#e8d5b5] shadow-[0_0_20px_rgba(212,185,130,0.2)] active:scale-[0.98]",
    secondary: "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm",
    blue: "bg-[#d4b982] text-black hover:bg-[#e8d5b5] shadow-[0_0_20px_rgba(212,185,130,0.2)]",
  }

  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 px-6 py-3 text-xs sm:text-sm cursor-pointer ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  )
}

export function SectionDivider({ className = "" }) {
  return (
    <div className={`relative w-full py-4 ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

import { SthayuLogo, SthayuSymbol, default as Logo } from "./Logo"
export { ErrorBoundary } from "./ErrorBoundary"

export {
  SthayuLogo,
  SthayuSymbol,
  Logo,
}

export default {
  AnimatedSection,
  SectionHeading,
  GlassCard,
  Badge,
  Button,
  SectionDivider,
  Logo,
  SthayuLogo,
  SthayuSymbol,
}
