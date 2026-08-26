import { useState } from "react"
import { ArrowRight, Bot, Cpu, Database, Network, ShieldCheck, Sparkles, Workflow, Zap, Lock, CheckCircle2 } from "lucide-react"

const pillars = [
  {
    id: "agents",
    number: "01",
    title: "Autonomous Cognitive Agents",
    subtitle: "Specialized intelligence across touchpoints",
    description: "Unlike generic chatbots, Sthayu agents possess deep context about your business operations. They evaluate customer intent, query databases, execute multi-step workflows, and know exactly when to escalate.",
    icon: Bot,
    accent: "from-cyan-400 to-blue-500",
    features: ["Voice, WhatsApp & Web Omnichannel", "Sub-2.4s contextual reasoning", "Deterministic action guardrails"],
    metrics: "94% autonomous task completion",
  },
  {
    id: "fabric",
    number: "02",
    title: "Event-Driven Integration Fabric",
    subtitle: "Real-time bidirectional synchronization",
    description: "Eliminate data silos permanently. Sthayu connects your legacy ERP, modern cloud CRM, payment gateways, and databases into one continuous nervous system with zero manual double-entry.",
    icon: Network,
    accent: "from-blue-400 to-indigo-500",
    features: ["200+ native enterprise connectors", "Sub-45ms webhook propagation", "Automatic conflict resolution"],
    metrics: "100% data consistency",
  },
  {
    id: "engine",
    number: "03",
    title: "Continuous Decision Engine",
    subtitle: "From passive reporting to active execution",
    description: "Transform your data from static historical graphs into live operational intelligence that triggers automated interventions, highlights bottlenecks, and guides leadership decisions.",
    icon: Cpu,
    accent: "from-indigo-400 to-purple-500",
    features: ["Live operational anomaly detection", "Predictive bottleneck alerts", "Executive Slack/Email summaries"],
    metrics: "70% faster decision velocity",
  },
  {
    id: "security",
    number: "04",
    title: "Enterprise Governance & Security",
    subtitle: "Bank-grade data privacy and reliability",
    description: "Engineered with strict tenant isolation, zero training on customer data without consent, cryptographic audit logging, and ready for SOC2 / HIPAA / ISO compliance audits.",
    icon: ShieldCheck,
    accent: "from-emerald-400 to-cyan-500",
    features: ["End-to-end TLS 1.3 encryption", "Role-based access controls (RBAC)", "Complete audit trail logs"],
    metrics: "99.98% guaranteed uptime SLA",
  },
]

export default function WhySthayu() {
  const [selectedPillar, setSelectedPillar] = useState(pillars[0])

  return (
    <section id="why-sthayu" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="glass-pill">
            <Sparkles size={13} />
            <span>The Sthayu Advantage</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Built as an operating system. <br className="hidden sm:block" />
            <span className="text-gradient-cyan">Not a patchwork of point tools.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We engineer resilient digital infrastructure that treats your business as a unified machine — combining autonomous agents, real-time data pipelines, and executive intelligence.
          </p>
        </div>

        {/* 4 Pillars Interactive Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left 4 Pillar Selector Cards */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              const isSelected = selectedPillar.id === pillar.id
              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`group relative p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-cyan-400/40 bg-gradient-to-r from-[#071329] to-[#040c1e] shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
                      : "border-white/10 bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors ${
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                            : "bg-white/5 border-white/10 text-slate-400 group-hover:text-white"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-cyan-400">{pillar.number}</span>
                          <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{pillar.subtitle}</p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono font-bold transition-transform duration-300 ${
                        isSelected ? "text-cyan-300 translate-x-1" : "text-slate-500"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Pillar Deep Dive Showcase */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-[2.5rem] border border-cyan-500/25 bg-gradient-to-b from-[#071026] via-[#040916] to-[#02050f] p-8 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.12)] backdrop-blur-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                    <selectedPillar.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      PILLAR {selectedPillar.number}
                    </div>
                    <div className="text-lg font-bold text-white">{selectedPillar.title}</div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-400/20">
                  {selectedPillar.metrics}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm text-slate-300 leading-relaxed font-normal">
                {selectedPillar.description}
              </p>

              {/* Key Capabilities */}
              <div className="mt-8 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Enterprise Features:
                </div>
                {selectedPillar.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to integrate this layer?</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <span>Talk to an Architect</span>
                  <ArrowRight size={13} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

