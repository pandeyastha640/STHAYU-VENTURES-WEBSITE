import { Clock, MessageSquare, RefreshCw, Layers, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui"

const painPoints = [
  {
    icon: RefreshCw,
    title: "Manual Data Entry",
    before: "Hours spent copy-pasting data across spreadsheets, CRM, and email.",
    after: "Instant, automated 2-way sync with zero human data entry.",
  },
  {
    icon: MessageSquare,
    title: "Slow Lead Replies",
    before: "Inbound customer inquiries sit waiting for hours, losing deals.",
    after: "Instant 24/7 AI replies on WhatsApp and web in under 3 seconds.",
  },
  {
    icon: Layers,
    title: "Disconnected Apps",
    before: "Paying for software that doesn't talk to each other.",
    after: "One unified workflow connecting CRM, accounting, and messaging.",
  },
  {
    icon: Clock,
    title: "Manual Reporting",
    before: "Managers spending days compiling weekly status sheets.",
    after: "Live operational visibility and automated daily summaries.",
  },
]

export default function ProblemDiscovery() {
  return (
    <section id="problem-discovery" className="relative overflow-hidden bg-[#050505] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: AlertCircle, text: "The Problem We Solve" }}
            title="Stop losing time to repetitive work."
            description="Growing teams lose hundreds of hours each month bridging the gaps between their software tools. We turn those manual bottlenecks into smooth, automated systems."
          />
        </AnimatedSection>

        {/* 4 Compact, Visual Friction-to-Flow Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, idx) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.title} delay={idx * 0.06}>
                <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/90 p-5 sm:p-6 backdrop-blur-xl hover:border-[#d4b982]/30 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Card Header Icon & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4b982]/[0.08] border border-[#d4b982]/20 text-[#d4b982] group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Before & After comparison */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-red-500/[0.04] border border-red-500/10 text-slate-300 leading-relaxed">
                        <span className="text-red-400 font-medium block text-[11px] mb-0.5">Without Sthayu:</span>
                        {item.before}
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#d4b982]/[0.05] border border-[#d4b982]/20 text-slate-200 leading-relaxed">
                        <span className="text-[#d4b982] font-medium block text-[11px] mb-0.5 flex items-center gap-1">
                          <CheckCircle2 size={11} className="inline" /> With Automation:
                        </span>
                        {item.after}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Simple inline bridge to Services */}
        <AnimatedSection delay={0.25}>
          <div className="mt-10 text-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b982] hover:text-[#e8d5b5] transition-colors"
            >
              <span>Explore what we build to fix these bottlenecks</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
