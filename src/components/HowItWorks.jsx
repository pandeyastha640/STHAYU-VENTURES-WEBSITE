import { useState } from "react"
import { BrainCircuit, Gauge, Search, Settings2, Sparkles, Workflow } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Map the reality",
    description: "We study your workflows, bottlenecks, and data flow to find the biggest opportunities for automation and AI leverage.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Architect the system",
    description: "We define the processes, AI logic, routing, and integrations needed to deliver a system that fits the way your business actually works.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Automate",
    subtitle: "Turn it on",
    description: "The workflows are connected and the repetitive work starts running automatically, with the right checks and approvals in place.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Integrate",
    subtitle: "Connect the stack",
    description: "We connect your CRM, data sources, tools, and decision layers into a single operational flow that reduces manual labor.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Optimize",
    subtitle: "Keep improving",
    description: "We measure performance, tighten weak points, and refine the system as your business scales and changes over time.",
    icon: Gauge,
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const currentStep = steps[activeStep]
  const CurrentIcon = currentStep.icon

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-[18%] top-[25%] h-[420px] w-[520px] rounded-full bg-cyan-300/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Settings2 size={14} className="text-cyan-300" />
          How Sthayu works
        </div>

        <div className="mt-8 max-w-4xl">
          <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem]">
            From manual effort
            <span className="mt-3 block text-slate-300">to a system that executes.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-slate-300">
            We design AI and automation around your real processes — not generic templates — so the system becomes a business advantage instead of another layer of complexity.
          </p>
        </div>

        <div className="mt-10 hidden items-center gap-4 md:flex">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-1 items-center gap-4">
              <button type="button" onClick={() => setActiveStep(index)} className="group flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-semibold ${activeStep === index ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200" : "border-white/10 bg-white/5 text-slate-400"}`}>
                  {step.number}
                </span>
                <span className={`text-[11px] font-medium uppercase tracking-[0.18em] ${activeStep === index ? "text-white" : "text-slate-400"}`}>{step.title}</span>
              </button>
              {index < steps.length - 1 && <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-300/30 via-cyan-300/60 to-transparent md:block" />}
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 md:hidden">
          {steps.map((step, index) => (
            <button key={step.number} type="button" onClick={() => setActiveStep(index)} className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] ${activeStep === index ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200" : "border-white/10 bg-white/5 text-slate-400"}`}>
              {step.number} {step.title}
            </button>
          ))}
        </div>

        <div className="interactive-tilt mt-8 overflow-hidden rounded-[34px] border border-white/10 bg-[#071015]/90 shadow-[0_30px_90px_rgba(2,6,23,0.35)]">
          <div className="relative p-6 md:p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">System flow</p>
                <h3 className="mt-4 text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white">Map the reality</h3>
              </div>
              <div className="relative h-5 w-5 rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_20px_rgba(103,232,249,0.8)]">
                <span className="absolute inset-1.5 rounded-full bg-cyan-300" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 right-6 top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent md:block" />

              <div className="grid gap-4 md:grid-cols-5">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative z-10 flex flex-col items-center md:items-center">
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border text-[11px] font-semibold transition-all duration-300 ${activeStep === index ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.18)]" : "border-white/10 bg-white/5 text-slate-400 hover:border-cyan-300/20 hover:text-cyan-200"}`}
                    >
                      {step.number}
                    </button>
                    <span className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="process-node rounded-[26px] border border-white/10 bg-[#081117]/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-200">Step {currentStep.number}</p>
                    <h3 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white">{currentStep.title}</h3>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-[26px] border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_60px_rgba(34,211,238,0.08)]">
                    <CurrentIcon size={28} className="text-cyan-300" />
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-300">{currentStep.description}</p>

                <div className="mt-6 space-y-3">
                  {[
                    "Process mapping and context gathering",
                    "AI logic and workflow design",
                    "Automation that runs with control and visibility",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] text-slate-200">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="deep-panel rounded-[26px] border border-white/10 bg-[#091019] p-5 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Operational outcome</p>
                    <h3 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.05em] text-white">Fewer handoffs. More momentum.</h3>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/5 md:flex">
                    <Sparkles size={18} className="text-cyan-300" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    ["Context", "Live intelligence"],
                    ["Design", "Decision logic"],
                    ["Automation", "Connected system"],
                    ["Optimize", "Measured learning"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[18px] border border-white/10 bg-white/[0.02] p-3">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{label}</p>
                      <p className="mt-2 text-[12px] text-slate-200">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
