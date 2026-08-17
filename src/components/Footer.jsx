import { ArrowUpRight, Mail, MapPin } from "lucide-react"

const serviceLinks = ["AI Automation", "AI Agents", "Workflow Automation", "Data & Analytics"]
const companyLinks = [
  { label: "Why Sthayu", id: "why-sthayu" },
  { label: "Services", id: "services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Pricing", id: "pricing" },
  { label: "Assessment", id: "assessment" },
]

function SocialLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[12px] font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200">
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030507] px-5 pb-8 pt-20 sm:px-6 md:px-8 md:pt-28">
      <div className="pointer-events-none absolute left-[12%] top-0 h-[380px] w-[380px] rounded-full bg-cyan-300/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-[8%] h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="interactive-tilt relative overflow-hidden rounded-[30px] border border-cyan-300/20 bg-cyan-300/5 p-7 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.08),transparent_40%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-200">Build what’s next</p>
              <h2 className="mt-5 max-w-3xl text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.6rem]">
                Ready to make your business
                <span className="mt-2 block text-slate-300">work smarter?</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300">Tell us where repetitive work, fragmented systems, or slow decisions are holding your team back.</p>
            </div>

            <a href="mailto:hello@sthayuventures.com?subject=Discovery%20Call%20with%20Sthayu" className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/15">
              Start a conversation
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] md:py-20">
          <div className="max-w-sm">
            <button type="button" onClick={() => scrollTo("hero")} className="flex items-center gap-3 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-lg font-extrabold text-cyan-300">S</div>
              <div className="leading-none">
                <div className="text-[1.2rem] font-extrabold tracking-[-0.06em] text-white">Sthayu</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300">Ventures</div>
              </div>
            </button>

            <p className="mt-7 text-[15px] leading-7 text-slate-300">
              Building intelligent systems that connect AI, automation, and business operations into one high-performance layer.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:hello@sthayuventures.com" aria-label="Email Sthayu" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200">
                <Mail size={14} />
              </a>
              <SocialLink href="https://www.linkedin.com" label="Sthayu on LinkedIn">in</SocialLink>
              <SocialLink href="https://www.instagram.com" label="Sthayu on Instagram">ig</SocialLink>
              <SocialLink href="https://www.youtube.com" label="Sthayu on YouTube">yt</SocialLink>
            </div>

            <div className="mt-7 flex items-center gap-2 text-[12px] text-slate-300">
              <MapPin size={12} className="text-cyan-300" />
              India · Building globally
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Solutions</p>
            <div className="mt-6 space-y-3.5">
              {serviceLinks.map((item) => (
                <button key={item} type="button" onClick={() => scrollTo("services")} className="block text-left text-[13px] text-slate-300 transition-colors hover:text-cyan-200">{item}</button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Company</p>
            <div className="mt-6 space-y-3.5">
              {companyLinks.map((item) => (
                <button key={item.label} type="button" onClick={() => scrollTo(item.id)} className="block text-left text-[13px] text-slate-300 transition-colors hover:text-cyan-200">{item.label}</button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Connect</p>
            <div className="mt-6 space-y-3.5">
              <button type="button" onClick={() => scrollTo("contact")} className="block text-left text-[13px] text-slate-300 transition-colors hover:text-cyan-200">Contact</button>
              <a href="mailto:hello@sthayuventures.com?subject=Discovery%20Call%20with%20Sthayu" className="block text-[13px] text-slate-300 transition-colors hover:text-cyan-200">Book a Discovery Call</a>
              <button type="button" className="block text-left text-[13px] text-slate-300 transition-colors hover:text-cyan-200">Privacy</button>
              <button type="button" className="block text-left text-[13px] text-slate-300 transition-colors hover:text-cyan-200">Terms</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10"><Mail size={13} className="text-cyan-300" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Let&apos;s build</p>
              <a href="mailto:hello@sthayuventures.com" className="mt-1 block text-[14px] text-slate-300 transition-colors hover:text-cyan-200">hello@sthayuventures.com</a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
            AI · Automation · Intelligence
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">© {new Date().getFullYear()} Sthayu Ventures. All rights reserved.</p>
          <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.15em] text-slate-500">
            <button type="button" className="transition-colors hover:text-slate-200">Privacy</button>
            <button type="button" className="transition-colors hover:text-slate-200">Terms</button>
            <button type="button" onClick={() => scrollTo("hero")} className="group inline-flex items-center gap-2 transition-colors hover:text-cyan-200">
              Back to top
              <ArrowUpRight size={11} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
