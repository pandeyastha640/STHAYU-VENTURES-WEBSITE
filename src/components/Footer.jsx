import { Mail, MapPin, Database, PhoneCall } from "lucide-react"
import { SthayuLogo } from "./ui/Logo"

const navigationLinks = [
  { label: "Services & Capabilities", id: "services" },
  { label: "WhatsApp & Auto-Replies", id: "omnichannel" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Results & ROI", id: "results" },
  { label: "Pricing & Booking", id: "pricing" },
  { label: "Contact", id: "contact" },
]

const servicesList = [
  "WhatsApp Business AI & Bots",
  "Instagram DM & Comment Auto-Replies",
  "AI Email Auto-Responder & Triage",
  "Automated Client CRM & Retention",
  "Autonomous AI Agents & SDRs",
  "Workflow Automation (Make / n8n)",
  "Modern Websites & Web Portals",
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

export default function Footer({ onOpenAdmin }) {
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

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:sthayu.ventures@gmail.com"
                  aria-label="Email Sthayu Ventures"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-[#d4b982]/40 hover:bg-[#d4b982]/10 hover:text-[#d4b982] shadow-sm"
                >
                  <Mail size={14} />
                </a>
                <a
                  href="tel:+916307773640"
                  aria-label="Call Sthayu Ventures"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-[#d4b982]/40 hover:bg-[#d4b982]/10 hover:text-[#d4b982] shadow-sm"
                >
                  <PhoneCall size={14} />
                </a>
                <SocialLink href="https://www.linkedin.com" label="Sthayu on LinkedIn">in</SocialLink>
                <SocialLink href="https://twitter.com" label="Sthayu on X / Twitter">𝕏</SocialLink>
                <SocialLink href="https://github.com" label="Sthayu on GitHub">git</SocialLink>
              </div>

              <div className="space-y-1.5 text-sm font-sans pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 font-medium">Email:</span>
                  <a
                    href="mailto:sthayu.ventures@gmail.com"
                    className="text-slate-200 hover:text-[#d4b982] font-medium transition-colors"
                  >
                    sthayu.ventures@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-slate-400 font-medium">Phone:</span>
                  <a
                    href="tel:+916307773640"
                    className="text-slate-200 hover:text-[#d4b982] font-semibold transition-colors tracking-normal"
                  >
                    +91 63077 73640
                  </a>
                  <span className="text-white/20 mx-1">·</span>
                  <a
                    href="https://wa.me/916307773640"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
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
              {onOpenAdmin && (
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 text-left text-xs text-[#d4b982] hover:underline cursor-pointer pt-1"
                >
                  <Database size={12} />
                  <span>Admin Leads Portal</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sthayu Ventures. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-slate-400 hidden sm:inline">AI Agents, Custom Software &amp; Modern Digital Experiences</span>
            {onOpenAdmin && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-slate-300 hover:text-[#d4b982] hover:border-[#d4b982]/40 transition-colors cursor-pointer"
              >
                <Database size={11} className="text-[#d4b982]" />
                <span>Admin Leads Center</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
