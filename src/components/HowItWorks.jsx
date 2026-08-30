import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { AnimatedSection, SectionHeading } from "./ui"
import { CheckCircle2, ChevronRight, Workflow, Zap } from "lucide-react"

const lifecycleSteps = [
  {
    stage: "01",
    phase: "Phase 1",
    title: "Review & Discovery",
    headline: "We learn how your business currently works and where time is lost.",
    description: "We talk to your team, look at the tools you use every day, and find the repetitive tasks, manual copy-pasting, and communication bottlenecks that slow you down.",
    deliverables: [
      "Breakdown of repetitive daily tasks and time wasted",
      "List of software tools to connect",
      "Expected hours and cost savings",
      "Clear, simple 1-page automation roadmap"
    ],
    highlight: "Zero disruption to your daily work",
    metric: "Completed in 3-5 days",
  },
  {
    stage: "02",
    phase: "Phase 2",
    title: "System Design",
    headline: "We design the AI assistants and automated workflows around your rules.",
    description: "We outline how data should move between your tools, draft the exact rules and tone your AI agents should follow, and show you a preview before writing any code.",
    deliverables: [
      "Visual map of how data will flow between your tools",
      "Drafted questions and answers for your AI agents",
      "Clear business safety rules and guidelines",
      "Simple walkthrough preview for your approval"
    ],
    highlight: "Customized to your exact company tone",
    metric: "Plan approved by your team",
  },
  {
    stage: "03",
    phase: "Phase 3",
    title: "Build & Connect",
    headline: "We build the automations and connect your existing software tools.",
    description: "We connect your CRM, WhatsApp, spreadsheets, accounting software, and databases so information flows automatically without any manual typing.",
    deliverables: [
      "Custom AI assistants connected to your business documents",
      "Automated connections between all your daily tools",
      "Instant notification alerts for your team on WhatsApp/Slack",
      "Private testing version ready for review"
    ],
    highlight: "Works with the tools you already pay for",
    metric: "Working test system delivered",
  },
  {
    stage: "04",
    phase: "Phase 4",
    title: "Testing & Training",
    headline: "We test every scenario thoroughly and show your team how to use it.",
    description: "We simulate hundreds of real customer questions, lead forms, and invoices to verify that the system is 100% accurate. Then we walk your team through simple instructions.",
    deliverables: [
      "Full accuracy testing with real sample data",
      "Verification of human handoff when staff are needed",
      "Short 15-minute video guide for your team",
      "Simple checklist for daily use"
    ],
    highlight: "Thorough testing before going live",
    metric: "100% test accuracy passed",
  },
  {
    stage: "05",
    phase: "Phase 5",
    title: "Launch & Ongoing Support",
    headline: "We turn the system on and provide ongoing monitoring and help.",
    description: "Your automated workflows and AI assistants go live. We monitor performance daily, check error logs, and make adjustments as your business grows.",
    deliverables: [
      "Smooth, zero-downtime live launch",
      "Daily automated monitoring and error alerts",
      "Monthly performance and time-saved summary",
      "Fast, direct founder and engineering support"
    ],
    highlight: "Ongoing peace of mind and maintenance",
    metric: "Smooth live operations",
  },
]

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = lifecycleSteps[activeIdx]
  const tabsRef = useRef(null)
  const tabRefs = useRef([])

  const getTabCenter = (idx) => {
    const container = tabsRef.current
    const tab = tabRefs.current[idx]
    if (!container || !tab) return { left: 0, width: 0 }
    const containerRect = container.getBoundingClientRect()
    const tabRect = tab.getBoundingClientRect()
    return {
      left: tabRect.left - containerRect.left + tabRect.width / 2,
      width: tabRect.width,
    }
  }

  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const measure = () => {
      const pos = getTabCenter(activeIdx)
      setIndicator({ left: pos.left - pos.width / 2, width: pos.width })
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [activeIdx])

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Workflow, text: "How We Work With You" }}
            title={<>A simple, step-by-step process <br className="hidden sm:block" /><span className="text-white/60">from idea to working system.</span></>}
            description="We handle the technical build from start to finish so your team can focus on serving customers and running the business."
          />
        </AnimatedSection>

        {/* 5-Step Horizontal Tab Navigator with progress line */}
        <AnimatedSection delay={0.15} className="mt-16">
          <div ref={tabsRef} className="relative flex items-stretch gap-2 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
            {/* Background track line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.06] -translate-y-1/2 pointer-events-none" />
            
            {/* Active progress indicator */}
            <motion.div
              className="absolute top-1/2 h-[2px] bg-white/[0.25] -translate-y-1/2 rounded-full pointer-events-none"
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {lifecycleSteps.map((step, idx) => {
              const isActive = activeIdx === idx
              return (
                <button
                  key={step.stage}
                  type="button"
                  ref={(el) => (tabRefs.current[idx] = el)}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative z-10 flex min-w-[170px] sm:min-w-[200px] flex-1 flex-col rounded-2xl border p-3 sm:p-4 text-left transition-all duration-300 cursor-pointer snap-start shrink-0 ${
                    isActive
                      ? "border-white/[0.10] bg-gradient-to-b from-[#0a0a0a] to-[#080808]"
                      : "border-white/10 bg-[#050505] hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-[#d4d4d8]" : "text-slate-500"}`}>
                      PHASE {step.stage}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {step.phase}
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-bold text-white group-hover:text-[#d4d4d8] transition-colors truncate">
                    {step.title}
                  </div>
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Active Stage Deep-Dive Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-8 rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] p-8 sm:p-10 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              
              {/* Left Column: Stage Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.10] font-mono text-xs font-bold text-[#d4d4d8] shadow-md">
                    {current.stage}
                  </span>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#a1a1aa]">
                      {current.phase} · {current.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{current.highlight}</div>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  {current.headline}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {current.description}
                </p>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-2 text-xs font-mono font-bold text-[#d4d4d8]">
                    <Zap size={14} className="text-[#a1a1aa]" />
                    <span>Key Result: {current.metric}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Concrete Deliverables Checklist */}
              <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#080808]/80 p-6 sm:p-8 backdrop-blur-xl">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 pb-4 border-b border-white/10 flex items-center justify-between">
                  <span>WHAT YOU RECEIVE IN THIS PHASE</span>
                  <span className="text-[#86efac] font-bold">● INCLUDED</span>
                </div>

                <div className="mt-5 space-y-3.5">
                  {current.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 size={16} className="text-[#86efac] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-[#d4d4d8]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">See next step:</span>
                  <button
                    type="button"
                    onClick={() => setActiveIdx((prev) => (prev + 1) % lifecycleSteps.length)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4d4d8] hover:text-white cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
