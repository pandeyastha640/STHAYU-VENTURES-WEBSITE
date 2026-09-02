import { ArrowRight, CheckCircle2, Workflow } from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui"

const steps = [
  {
    step: "01",
    title: "Process Audit",
    subtitle: "Identify high-ROI automation targets",
    description: "We analyze your day-to-day operations, uncover manual time sinks, and map out where autonomous AI agents and automated pipelines will yield the fastest financial and operational return.",
    deliverables: [
      "Operational bottleneck analysis",
      "Tool ecosystem & integration map",
      "Prioritized ROI automation plan",
    ],
  },
  {
    step: "02",
    title: "Custom Architecture",
    subtitle: "Build & integrate with your tools",
    description: "We engineer customized AI agents, prompt safeguards, and API pipelines that connect directly with your existing CRM, WhatsApp, accounting, database, and internal systems.",
    deliverables: [
      "Autonomous agent workflow logic",
      "Seamless 2-way API connections",
      "Staging preview for team testing",
    ],
  },
  {
    step: "03",
    title: "Deployment & Monitoring",
    subtitle: "24/7 execution with human oversight",
    description: "We deploy the automated system into production with comprehensive error logging, automated fallbacks, human-in-the-loop escalation paths, and continuous performance tuning.",
    deliverables: [
      "Zero-downtime production rollout",
      "Live execution health monitoring",
      "Ongoing optimization & support",
    ],
  },
]

export default function HowItWorks() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -70
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Workflow, text: "How It Works" }}
            title={
              <>
                From manual bottleneck <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#d4b982] bg-clip-text text-transparent">
                  to autonomous execution in 3 steps.
                </span>
              </>
            }
            description="We manage the complete engineering and deployment lifecycle so your team experiences immediate productivity gains without technical headaches."
          />
        </AnimatedSection>

        {/* 3 Step Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((item, idx) => (
            <AnimatedSection key={item.step} delay={idx * 0.08}>
              <div className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-7 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#d4b982]/40 hover:shadow-[0_20px_50px_rgba(212,185,130,0.1)] hover:-translate-y-1 h-full group">
                <div>
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d4b982]/10 border border-[#d4b982]/20 font-mono text-sm font-bold text-[#d4b982]">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-slate-400 font-semibold">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#d4b982] tracking-wide">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-6 space-y-2 pt-5 border-t border-white/10">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                      Key Deliverables:
                    </div>
                    {item.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 size={13} className="text-[#d4b982] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b982] hover:text-[#e8d5b5] transition-colors cursor-pointer"
                  >
                    <span>Start Step {item.step}</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
