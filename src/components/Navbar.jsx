import { useState } from "react"

const navLinks = [
  ["Solutions", "services"],
  ["AI Agents", "ai-agents"],
  ["Industries", "system-stack"],
  ["How It Works", "how-it-works"],
  ["Gallery", "portfolio"],
  ["Showcase", "interactive-showcase"],
  ["Pricing", "pricing"],
  ["Assessment", "assessment"],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const goTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[22px] border border-white/10 bg-[#05070a]/85 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-5">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3 text-left"
          aria-label="Sthayu Ventures home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 text-base font-extrabold text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.15)]">
            S
          </div>
          <div className="leading-none">
            <div className="text-[1.25rem] font-extrabold tracking-[-0.06em] text-white">Sthayu</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300">Ventures</div>
          </div>
        </button>

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className="rounded-full px-3 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white/5 hover:text-cyan-200"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <button
            type="button"
            onClick={() => goTo("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/15"
          >
            Book Discovery Call
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[22px] border border-white/10 bg-[#05070a]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:hidden">
          {navLinks.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[14px] font-medium text-white transition-colors hover:bg-white/5"
            >
              <span>{label}</span>
              <span className="text-cyan-300">→</span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo("contact")}
            className="mt-2 w-full rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-[14px] font-semibold text-white"
          >
            Let&apos;s Talk
          </button>
        </div>
      )}
    </header>
  )
}
