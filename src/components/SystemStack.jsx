import { AnimatedSection, SectionHeading } from "./ui"
import { ArrowRight, Building2, Layers3, Workflow, ShoppingBag, Stethoscope, Factory, Laptop } from "lucide-react"

const industryBlueprints = [
  {
    industry: "Professional & Financial Services",
    icon: Building2,
    tagline: "Client intake, document verification & CRM updates",
    stack: ["CRM Software", "Payment Gateway", "AI Intake Agent", "Client Portal"],
    outcome: "78% faster client onboarding",
  },
  {
    industry: "SaaS & Technology",
    icon: Laptop,
    tagline: "Customer onboarding, user helpdesk & automated billing",
    stack: ["Customer Support", "Database", "AI Support Agent", "Billing System"],
    outcome: "3.4x faster customer question resolution",
  },
  {
    industry: "E-Commerce & Retail",
    icon: ShoppingBag,
    tagline: "WhatsApp order updates, cart recovery & inventory sync",
    stack: ["Shopify / Store", "Email Marketing", "WhatsApp Business", "Inventory System"],
    outcome: "+24% recovered sales & instant support",
  },
  {
    industry: "Real Estate & Property",
    icon: Workflow,
    tagline: "Instant lead replies, viewing bookings & phone follow-ups",
    stack: ["Phone AI Agent", "CRM", "Google Calendar", "WhatsApp Messaging"],
    outcome: "92% connection rate on buyer enquiries",
  },
  {
    industry: "Healthcare & Wellness",
    icon: Stethoscope,
    tagline: "Patient bookings, automated appointment reminders & intake",
    stack: ["Secure Records", "Voice Reminders", "Calendar Scheduling", "WhatsApp Alerts"],
    outcome: "40% fewer missed appointments",
  },
  {
    industry: "Manufacturing & Logistics",
    icon: Factory,
    tagline: "PDF invoice reading, inventory alerts & purchase orders",
    stack: ["Inventory Software", "PDF Data Reader", "Team Alerts", "Accounting Sync"],
    outcome: "Zero manual invoice typing",
  },
]

const maturitySteps = [
  { stage: "01", name: "Manual Work", desc: "Staff manually copy-pasting info across spreadsheets and emails." },
  { stage: "02", name: "Basic Triggers", desc: "Simple tool connections that occasionally break and need checking." },
  { stage: "03", name: "Connected Tools", desc: "Reliable system where all your apps update each other in real time." },
  { stage: "04", name: "AI Digital Workers", desc: "Smart AI assistants answering enquiries and handling repetitive tasks." },
  { stage: "05", name: "Custom Software", desc: "Your unique business workflow turned into simple, bespoke software." },
]

export default function SystemStack() {
  return (
    <section id="system-stack" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Layers3, text: "Industry Solutions" }}
            title={<>Built for how your specific <br className="hidden sm:block" /><span className="text-white/60">industry actually works.</span></>}
            description="We do not offer one-size-fits-all templates. We build automations around the exact tools, compliance needs, and daily tasks of your field."
          />
        </AnimatedSection>

        {/* 6 Industry Blueprint Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryBlueprints.map((item, idx) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.industry} delay={idx * 0.1}>
                <div className="glass-card p-7 flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.10] text-[#d4d4d8]">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#86efac]">READY BLUEPRINT</span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-white group-hover:text-[#d4d4d8] transition-colors">
                      {item.industry}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {item.tagline}
                    </p>

                    {/* Connected Stack Pill List */}
                    <div className="mt-5 space-y-1.5 pt-4 border-t border-white/10">
                      <div className="text-[9px] uppercase font-mono text-slate-400">Tools Connected:</div>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {item.stack.map((st) => (
                          <span key={st} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#d4d4d8] border border-white/5">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#86efac] font-bold">{item.outcome}</span>
                    <ArrowRight size={14} className="text-[#a1a1aa] opacity-60 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* The Transformation Staircase */}
        <AnimatedSection className="mt-16">
          <div className="rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] p-8 sm:p-10 backdrop-blur-2xl">
            <div className="max-w-3xl">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a1a1aa]">
                The Automation Journey
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                From manual chaos to a smooth, automated company.
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Step by step, we help you replace messy spreadsheets and manual typing with dependable automations, AI assistants, and software tailored to your team.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {maturitySteps.map((s, idx) => (
                <div key={s.stage} className="relative">
                  <div className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/[0.10] hover:bg-white/[0.04] transition-all h-full">
                    <div>
                      <div className="font-mono text-xs font-bold text-[#a1a1aa]">{s.stage}</div>
                      <div className="mt-2 text-base font-bold text-white">{s.name}</div>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Level {idx + 1}</span>
                      {idx === 4 && <span className="text-[#86efac] font-bold">★ GOAL</span>}
                    </div>
                  </div>

                  {/* Connecting line - hidden on last item, vertical on mobile */}
                  {idx < maturitySteps.length - 1 && (
                    <>
                      {/* Mobile: vertical line (grid-cols-1) */}
                      <div className="block sm:hidden absolute left-1/2 top-full w-[1px] h-4 bg-white/[0.06] -translate-x-1/2" />
                      {/* Desktop: horizontal line (lg:grid-cols-5) */}
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-[1px] bg-white/[0.06] -translate-y-1/2" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
