import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { ArrowRight, Menu, X, PhoneCall } from "lucide-react"
import { SthayuLogo } from "./ui/Logo"

const navLinks = [
  { label: "Services", id: "services" },
  { label: "Auto-Replies", id: "omnichannel" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Results", id: "results" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean)
      const scrollPosition = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
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
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border transition-all duration-300 px-4 py-2 sm:px-6 ${
            scrolled
              ? "border-white/10 bg-[#0a0a0a]/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
              : "border-transparent bg-[#050505]/40 backdrop-blur-md"
          }`}
        >
          {/* Brand */}
          <button
            type="button"
            onClick={goHome}
            className="group flex items-center text-left focus:outline-none cursor-pointer"
            aria-label="Sthayu Ventures home"
          >
            <SthayuLogo height={34} className="py-0.5" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => goTo(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#d4b982] bg-[#d4b982]/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://wa.me/916307773640"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp: +91 63077 73640"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-sans font-medium text-slate-200 hover:text-[#d4b982] hover:border-[#d4b982]/40 transition-colors tracking-normal whitespace-nowrap"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span>+91 63077 73640</span>
            </a>
            <button
              type="button"
              onClick={() => goTo("contact")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#d4b982] px-5 py-2 text-[13px] font-bold text-black transition-all duration-200 hover:bg-[#e8d5b5] shadow-[0_0_15px_rgba(212,185,130,0.2)] active:scale-[0.98] cursor-pointer"
            >
              <PhoneCall size={13} />
              <span>Book a Free Call</span>
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors lg:hidden cursor-pointer hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden text-white"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className="rounded-xl px-4 py-2.5 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-[#d4b982] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 border-t border-white/10 pt-4 space-y-2.5">
              <a
                href="https://wa.me/916307773640"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-sm font-sans font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>WhatsApp: +91 63077 73640</span>
              </a>
              <a
                href="mailto:sthayu.ventures@gmail.com"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-sm font-sans font-medium text-slate-200 hover:text-[#d4b982] transition-colors"
              >
                <span>sthayu.ventures@gmail.com</span>
              </a>
              <button
                type="button"
                onClick={() => goTo("contact")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d4b982] py-3 text-sm font-bold text-black shadow-md hover:bg-[#e8d5b5] cursor-pointer"
              >
                <PhoneCall size={14} />
                <span>Book a Free Call</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
