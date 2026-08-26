import { useState, useEffect } from "react"
import { ArrowRight, Bot, Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  { label: "Solutions", id: "services" },
  { label: "AI Agents", id: "ai-agents" },
  { label: "Why Sthayu", id: "why-sthayu" },
  { label: "Architecture", id: "system-stack" },
  { label: "Process", id: "how-it-works" },
  { label: "Command Center", id: "showcase" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Pricing", id: "pricing" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean)
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-300 px-4 py-2.5 sm:px-6 ${
          scrolled
            ? "border-cyan-500/20 bg-[#030712]/90 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(6,182,212,0.12)] backdrop-blur-2xl"
            : "border-white/10 bg-[#070d1e]/70 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        }`}
      >
        {/* Brand Logo */}
        <button
          type="button"
          onClick={goHome}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          aria-label="Sthayu Ventures home"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/35 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-transform duration-300 group-hover:scale-105">
            <span className="font-sans text-base font-black tracking-tighter text-white">S</span>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </span>
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5 font-sans text-base font-extrabold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              Sthayu
              <span className="text-[10px] px-1.5 py-0.5 rounded-md font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/25">AI</span>
            </div>
            <div className="text-[9px] font-bold uppercase tracking-[0.26em] text-slate-400 group-hover:text-slate-300">Ventures</div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-cyan-300 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => goTo("assessment")}
            className="text-xs font-semibold text-slate-300 hover:text-cyan-300 px-3 py-2 transition-colors cursor-pointer"
          >
            Assessment
          </button>
          <button
            type="button"
            onClick={() => goTo("contact")}
            className="btn-primary text-xs py-2 px-5 cursor-pointer"
          >
            <span>Book Discovery Call</span>
            <ArrowRight size={13} className="text-slate-950" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-cyan-400/30 hover:text-white lg:hidden cursor-pointer"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#030712]/95 p-4 shadow-[0_30px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl lg:hidden animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-300 cursor-pointer"
              >
                <span>{link.label}</span>
                <ArrowRight size={14} className="text-cyan-400 opacity-60" />
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => goTo("assessment")}
              className="btn-secondary w-full text-xs py-3 justify-center cursor-pointer"
            >
              <Sparkles size={14} className="text-cyan-400" />
              Free Digital Assessment
            </button>
            <button
              type="button"
              onClick={() => goTo("contact")}
              className="btn-primary w-full text-xs py-3 justify-center cursor-pointer"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

