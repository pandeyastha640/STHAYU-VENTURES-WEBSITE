import { useState } from "react"
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Layers, Search, ShieldCheck, Sparkles, Workflow, Zap } from "lucide-react"

const lifecycleSteps = [
  {
    stage: "01",
    phase: "Week 1",
    title: "Discovery & Bottleneck Audit",
    headline: "Deconstruct your operations down to the exact manual friction points.",
    description: "We analyze your current software tools, data pathways, and manual administrative handoffs. We calculate exact time/revenue losses and map the ideal autonomous target state.",
    deliverables: [
      "Process Bottleneck & Cost-Drag Audit",
      "Data Entity & API Integration Map",
      "Measurable ROI & Latency Reduction Targets",
      "Executive Architectural Blueprint"
    ],
    highlight: "Zero disruption to your ongoing operations",
    metric: "100% stack visibility in 5 days",
  },
  {
    stage: "02",
    phase: "Week 2",
    title: "System Design & Agent Modeling",
    headline: "Engineer the cognitive agent prompts, safety guardrails & API routes.",
    description: "We architect the technical blueprint: database schema alignments, webhook routing logic, agent reasoning trees, and deterministic fallbacks to guarantee 0% hallucination risk.",
    deliverables: [
      "Custom Agent Context & Decision Trees",
      "Bidirectional Webhook & ERP Connector Schemas",
      "Security, Privacy & RBAC Protocol Definitions",
      "Interactive High-Fidelity UI/UX Prototypes"
    ],
    highlight: "Deterministic guardrail specifications",
    metric: "Architectural alignment sealed",
  },
  {
    stage: "03",
    phase: "Week 3-4",
    title: "Agent Build & Integration Fabric",
    headline: "Construct high-throughput pipelines and fine-tune domain intelligence.",
    description: "Our engineers build the microservices, index vector knowledge bases, connect your CRM/ERP endpoints, and train agents on real historical conversation transcripts.",
    deliverables: [
      "Vector Embeddings & Private Knowledge Index",
      "Multi-System Event Sync Engine (PostgreSQL/HubSpot/Stripe)",
      "Omnichannel Ingestion (WhatsApp, Web, Telephony)",
      "Complete Staging Environment Deployment"
    ],
    highlight: "Sub-45ms webhook processing performance",
    metric: "All core integrations live in staging",
  },
  {
    stage: "04",
    phase: "Week 5",
    title: "Sandbox Simulation & Guardrail QA",
    headline: "Simulate edge cases, stress-test high throughput & verify compliance.",
    description: "We run thousands of simulated edge-case conversations and high-load traffic bursts to verify that every decision matches human-level accuracy and strict company policies.",
    deliverables: [
      "Automated Edge-Case Stress Testing Suite",
      "Human-in-the-Loop Escalation Verification",
      "SOC2 / Data Privacy Compliance Validation",
      "Team Hand-off & Live Training Sessions"
    ],
    highlight: "Over 2,500 automated verification passes",
    metric: "99.8% deterministic accuracy score",
  },
  {
    stage: "05",
    phase: "Week 6+",
    title: "Live Production & Continuous Optimization",
    headline: "Deploy to live traffic with 24/7 telemetry and ongoing agent tuning.",
    description: "The autonomous operating system is switched on. We monitor real-time throughput, track CSAT and lead conversion rates, and continuously optimize agents as your business scales.",
    deliverables: [
      "Zero-Downtime Production Cutover",
      "Real-Time Telemetry & Anomaly Alerting",
      "Weekly Performance & ROI Impact Briefings",
      "Dedicated Engineering SLA & Continuous Upgrades"
    ],
    highlight: "Backed by 99.98% uptime engineering SLA",
    metric: "Continuous autonomous scaling",
  },
]

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = lifecycleSteps[activeIdx]

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <Workflow size={13} />
            <span>Operational Lifecycle</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            From fragmented operations <br className="hidden sm:block" />
            <span className="text-gradient-cyan">to a deployed autonomous system.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A battle-tested 5-phase engineering methodology designed to deliver tangible operational ROI in under 30 business days without disrupting your team.
          </p>
        </div>

        {/* 5-Step Horizontal Tab Navigator */}
        <div className="mt-16 flex items-center justify-between gap-2 overflow-x-auto pb-4 pt-2">
          {lifecycleSteps.map((step, idx) => {
            const isActive = activeIdx === idx
            return (
              <button
                key={step.stage}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`group flex min-w-[200px] flex-1 flex-col rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-cyan-400/40 bg-gradient-to-b from-[#071329] to-[#040c1e] shadow-[0_15px_35px_rgba(6,182,212,0.2)]"
                    : "border-white/10 bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${isActive ? "text-cyan-300" : "text-slate-500"}`}>
                    PHASE {step.stage}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {step.phase}
                  </span>
                </div>
                <div className="mt-2 text-sm font-bold text-white group-hover:text-cyan-200 transition-colors truncate">
                  {step.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="mt-8 rounded-[2.5rem] border border-cyan-500/25 bg-gradient-to-b from-[#071026] via-[#040816] to-[#02050f] p-8 sm:p-10 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.12)] backdrop-blur-2xl">
          
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Stage Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400/40 font-mono text-xs font-bold text-cyan-300 shadow-md">
                  {current.stage}
                </span>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
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
                <div className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-xs font-mono font-bold text-cyan-300">
                  <Zap size={14} className="text-cyan-400" />
                  <span>Key Result: {current.metric}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Concrete Deliverables Checklist */}
            <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#02050f]/80 p-6 sm:p-8 backdrop-blur-xl">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 pb-4 border-b border-white/10 flex items-center justify-between">
                <span>PHASE {current.stage} DELIVERABLES</span>
                <span className="text-emerald-400 font-bold">● GUARANTEED</span>
              </div>

              <div className="mt-5 space-y-3.5">
                {current.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Next milestone:</span>
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % lifecycleSteps.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200 cursor-pointer"
                >
                  <span>Advance Stage</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

