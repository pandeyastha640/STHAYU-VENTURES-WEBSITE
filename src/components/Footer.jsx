import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { SthayuLogo } from "./ui/Logo"

const serviceLinks = [
  "AI Digital Workers",
  "Workflow Automation",
  "Custom Business Portals",
  "Business Websites",
  "AI Document Intelligence",
]

const companyLinks = [
  { label: "Services", id: "services" },
  { label: "AI Assistants", id: "ai-agents" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "Assessment", id: "assessment" },
]

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[12px] font-semibold text-slate-300 transition-all duration-300 hover:border-[#d4b982]/30 hover:bg-white/[0.04] hover:text-[#d4b982]"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] px-5 pb-8 pt-16 sm:px-6 md:px-8 md:pt-20">
      <div className="pointer-events-none absolute left-[12%] top-0 h-[380px] w-[380px] rounded-full bg-[#d4b982]/[0.02] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-[8%] h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="group flex items-center text-left focus:outline-none cursor-pointer"
            >
              <SthayuLogo height={42} className="py-1" />
            </button>

            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Sthayu builds AI digital workers, connected workflow automations, and custom business portals that help companies eliminate manual busywork and grow faster.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:hello@sthayuventures.com"
                aria-label="Email Sthayu"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-[#d4b982]/30 hover:bg-white/[0.04] hover:text-[#d4b982]"
              >
                <Mail size={14} />
              </a>
              <SocialLink href="https://www.linkedin.com" label="Sthayu on LinkedIn">in</SocialLink>
              <SocialLink href="https://www.instagram.com" label="Sthayu on Instagram">ig</SocialLink>
              <SocialLink href="https://www.youtube.com" label="Sthayu on YouTube">yt</SocialLink>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
              <MapPin size={12} className="text-[#d4b982]" />
              India · Serving clients worldwide
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 font-semibold">Services</p>
            <div className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollTo("services")}
                  className="block text-left text-xs text-slate-300 transition-colors hover:text-[#d4b982] cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 font-semibold">Company</p>
            <div className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="block text-left text-xs text-slate-300 transition-colors hover:text-[#d4b982] cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 font-semibold">Connect</p>
            <div className="mt-5 space-y-3">
              <a
                href="mailto:hello@sthayuventures.com?subject=Discovery%20Call%20with%20Sthayu"
                className="block text-xs text-slate-300 transition-colors hover:text-[#d4b982]"
              >
                Book a Free Call
              </a>
              <button
                type="button"
                onClick={() => scrollTo("assessment")}
                className="block text-left text-xs text-slate-300 transition-colors hover:text-[#d4b982] cursor-pointer"
              >
                Free Assessment
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="block text-left text-xs text-slate-300 transition-colors hover:text-[#d4b982] cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Sthayu Ventures. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4b982]" />
            AI Digital Workers · Workflow Automation · Custom Portals
          </div>

          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#d4b982] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
