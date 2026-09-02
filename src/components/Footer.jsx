import { Mail, MapPin } from "lucide-react"
import { SthayuLogo } from "./ui/Logo"

const navigationLinks = [
  { label: "Services", id: "services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Results", id: "results" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
]

const servicesList = [
  "Autonomous AI Agents",
  "Workflow Automation",
  "Custom Internal Portals",
  "Modern Websites & Landing Pages",
  "Digital Experiences & Creative",
  "Video Ads & Motion Creative",
]

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[12px] font-semibold text-slate-300 transition-all duration-200 hover:border-[#d4b982]/40 hover:bg-[#d4b982]/10 hover:text-[#d4b982] shadow-sm"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -70
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] px-5 pb-8 pt-16 sm:px-6 md:px-8 md:pt-20 text-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          
          {/* Col 1: Brand Info */}
          <div className="max-w-sm">
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="group flex items-center text-left focus:outline-none cursor-pointer"
            >
              <SthayuLogo height={36} className="py-1" />
            </button>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400">
              Sthayu builds autonomous AI agents, connected workflow pipelines, custom business systems, and high-converting modern digital experiences that eliminate manual busywork and scale operations.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:hello@sthayuventures.com"
                aria-label="Email Sthayu"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-[#d4b982]/40 hover:bg-[#d4b982]/10 hover:text-[#d4b982] shadow-sm"
              >
                <Mail size={14} />
              </a>
              <SocialLink href="https://www.linkedin.com" label="Sthayu on LinkedIn">in</SocialLink>
              <SocialLink href="https://twitter.com" label="Sthayu on X / Twitter">𝕏</SocialLink>
              <SocialLink href="https://github.com" label="Sthayu on GitHub">git</SocialLink>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
              <MapPin size={12} className="text-[#d4b982]" />
              <span>India · Serving ambitious businesses globally</span>
            </div>
          </div>

          {/* Col 2: Capabilities */}
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-white font-bold">Capabilities</p>
            <div className="mt-4 space-y-2.5">
              {servicesList.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollTo("services")}
                  className="block text-left text-xs text-slate-400 transition-colors hover:text-[#d4b982] cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-white font-bold">Navigation</p>
            <div className="mt-4 space-y-2.5">
              {navigationLinks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="block text-left text-xs text-slate-400 transition-colors hover:text-[#d4b982] cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sthayu Ventures. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">AI Agents, Custom Software & Modern Digital Experiences</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
