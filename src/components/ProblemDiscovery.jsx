import { AlertCircle, ArrowRight, CheckCircle2, ShieldAlert, XCircle, Zap } from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui"

export default function ProblemDiscovery() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -70
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const bottlenecks = [
    {
      title: "Manual Data Entry & Copy-Pasting",
      desc: "Staff spending 15+ hours weekly copying data between spreadsheets, CRMs, and email inboxes.",
    },
    {
      title: "Missed Inbound Leads & Slow Response",
      desc: "Inbound customer inquiries sit waiting for hours or days, leading to lost sales and poor conversion.",
    },
    {
      title: "Siloed, Disconnected Software",
      desc: "Paying for modern tools (ERP, billing, messaging) that do not exchange data automatically.",
    },
    {
      title: "Human Bottlenecks in Operations",
      desc: "Repetitive status tracking and invoice reconciliations delaying critical business decisions.",
    },
  ]

  const solutions = [
    {
      title: "Autonomous AI Digital Workers",
      desc: "Intelligent agents that qualify leads, answer customer questions, and triage support 24/7 in < 3 seconds.",
    },
    {
      title: "Connected 2-Way Workflow Pipelines",
      desc: "Instant real-time data synchronization across your CRM, WhatsApp, accounting, and internal databases.",
    },
    {
      title: "Deterministic Zero-Error Processing",
      desc: "Automated business rules handling invoice parsing, customer onboarding, and instant notifications.",
    },
    {
      title: "Live Operational Visibility",
      desc: "Executive dashboards and automated daily summaries that give leadership 100% clarity over company health.",
    },
  ]

  return (
    <section id="problem-solution" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="relative mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: AlertCircle, text: "The Problem & The Solution" }}
            title={
              <>
                Stop losing time to repetitive work. <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#d4b982] bg-clip-text text-transparent">
                  Scale with autonomous systems.
                </span>
              </>
            }
            description="Replace manual operational friction with reliable, always-on AI workflows engineered for measurable output."
          />
        </AnimatedSection>

        {/* 2-Column Comparison Card */}
        <AnimatedSection delay={0.15}>
          <div className="mt-12 rounded-3xl border border-white/10 bg-[#0a0a0a]/90 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              
              {/* Left Column: The Bottleneck */}
              <div className="p-6 sm:p-9 bg-red-950/10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-red-400 font-semibold">Current Reality</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">The Operational Bottlenecks</h3>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {bottlenecks.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-red-500/20 shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                          <XCircle size={14} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                          <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: The Sthayu Fix */}
              <div className="p-6 sm:p-9 bg-[#d4b982]/[0.02]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#d4b982]/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20">
                    <Zap size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#d4b982] font-semibold">The Engineered Outcome</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">The Sthayu Solution</h3>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {solutions.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-[#d4b982]/20 shadow-sm transition-all duration-200 hover:border-[#d4b982]/40"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d4b982]/10 text-[#d4b982]">
                          <CheckCircle2 size={14} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                          <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Action Strip */}
            <div className="px-6 py-4 sm:px-9 bg-[#080808] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 text-center sm:text-left font-medium">
                Ready to turn operational bottlenecks into high-velocity autonomous workflows?
              </span>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b982] hover:text-[#e8d5b5] transition-colors cursor-pointer"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
