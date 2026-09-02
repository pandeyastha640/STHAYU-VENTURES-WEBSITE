import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { AnimatedSection, SectionHeading } from "./ui"
import { CheckCircle2, Workflow, ArrowRight } from "lucide-react"

const processSteps = [
  {
    number: "01",
    name: "Discover",
    title: "Understand the business & identify repetitive work",
    description: "We review your daily operations, find the tasks wasting staff hours, and map out where automation and AI assistants will provide the highest return.",
    deliverables: [
      "Breakdown of repetitive daily tasks and time wasted",
      "Identification of software tools to connect",
      "Clear, 1-page automation roadmap",
    ],
  },
  {
    number: "02",
    name: "Design",
    title: "Create the automation architecture",
    description: "We design how data will flow between your tools, draft the exact guidelines and tone for your AI assistants, and get your approval before building.",
    deliverables: [
      "Visual workflow diagram connecting your tools",
      "Drafted questions, responses, and rules for AI assistants",
      "Security and human-approval safety checks",
    ],
  },
  {
    number: "03",
    name: "Build & Connect",
    title: "Build AI agents, workflows, integrations & software",
    description: "We connect your CRM, WhatsApp, accounting, email, spreadsheets, and databases into one unified system with zero disruption to daily work.",
    deliverables: [
      "Custom AI assistants trained on your documents",
      "Automated connections between all your daily tools",
      "Private preview system ready for team review",
    ],
  },
  {
    number: "04",
    name: "Test & Train",
    title: "Test everything & train the team",
    description: "We rigorously test real customer questions, lead forms, and invoices to verify accuracy, then provide simple video guides to train your staff.",
    deliverables: [
      "End-to-end scenario testing with real data",
      "Seamless human-handoff verification",
      "Short, practical video guides for your staff",
    ],
  },
  {
    number: "05",
    name: "Launch & Improve",
    title: "Deploy & continuously improve the system",
    description: "We deploy the system smoothly, monitor real-time execution, and continuously fine-tune performance as your business operations grow.",
    deliverables: [
      "Smooth, zero-downtime live rollout",
      "Continuous monitoring and error alerting",
      "Regular adjustments and ongoing support",
    ],
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const current = processSteps[activeStep]

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Workflow, text: "How It Works" }}
            title={
              <>
                A simple 5-step process <br className="hidden sm:block" />
                <span className="text-white/60">from idea to a working system.</span>
              </>
            }
            description="We manage the technical architecture and setup from start to finish so your team can focus on serving clients and growing the business."
          />
        </AnimatedSection>

        {/* 5-Step Navigator */}
        <div className="mt-14 grid gap-3 grid-cols-2 sm:grid-cols-5">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-[#d4b982]/40 bg-[#0d0d0d] shadow-[0_0_0_1px_rgba(212,185,130,0.15)]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <span className={`font-mono text-xs font-bold block ${isActive ? "text-[#d4b982]" : "text-slate-500"}`}>
                  {step.number}
                </span>
                <span className="text-sm font-bold text-white mt-1 block">
                  {step.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Step Card */}
        <div className="mt-6 rounded-[2.5rem] border border-[#d4b982]/25 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] p-7 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#d4b982] px-2.5 py-0.5 rounded-full bg-[#d4b982]/10 border border-[#d4b982]/20">
                    STEP {current.number}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Phase {activeStep + 1} of 5</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-5 sm:p-6 space-y-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Key Deliverables:
                </div>
                {current.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={15} className="text-[#d4b982] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Process CTA */}
        <div className="mt-10 text-center">
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b982] hover:text-[#e8d5b5] transition-colors"
          >
            <span>Start with a Free Automation Assessment</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
