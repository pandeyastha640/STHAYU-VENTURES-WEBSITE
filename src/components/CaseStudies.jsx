import { useState } from "react"
import { ArrowRight, ArrowUpRight, BarChart3, Bot, CheckCircle2, Clock3, Sparkles, TrendingUp, Users, Workflow, Zap } from "lucide-react"

const caseStudies = [
  {
    number: "01",
    client: "FinScale Capital",
    industry: "Financial & Asset Advisory",
    title: "Automated Investor Onboarding & Real-Time Portfolio Sync",
    problem: "Manual KYC verification and multi-broker portfolio reconciliation required 24 hours per client, causing a 35% drop-off during onboarding.",
    solution: "Engineered an autonomous document intake agent + bidirectional SQL ledger sync connecting custodians, Stripe, and customer portals in real time.",
    metric: "-82% Onboarding Time",
    subMetric: "4.8x faster capital deployment · Zero data errors",
    tags: ["KYC AI Agent", "PostgreSQL Sync", "Stripe Billing", "SOC2 Compliant"],
  },
  {
    number: "02",
    client: "Aura Logistics Global",
    industry: "Supply Chain & Fleet Operations",
    title: "Autonomous Dispatch & Vendor Invoice Auto-Correction",
    problem: "15,000+ monthly vendor invoices had discrepancy mismatches against warehouse delivery slips, requiring 6 full-time staff for manual audit.",
    solution: "Deployed Sthayu Operations Agent with OCR parser to automatically cross-reference ERP purchase orders, adjust ledger variances, and approve payments.",
    metric: "99.4% Auto-Resolution",
    subMetric: "120+ monthly hours saved · ₹45L prevented leakage",
    tags: ["OCR AI Engine", "SAP ERP Connector", "Ledger Audit", "Slack Alert Bot"],
  },
  {
    number: "03",
    client: "OmniGrowth Media",
    industry: "High-Volume B2B Lead Generation",
    title: "Sub-3-Second Omnichannel Lead Qualification & Dispatch",
    problem: "Inbound leads across Web and WhatsApp waited an average of 4.5 hours for sales rep contact, leading to severe lead decay and lost revenue.",
    solution: "Trained and deployed Sthayu SDR Agent to engage prospects in real-time, qualify against ideal customer profiles, and book direct executive meetings.",
    metric: "+310% Meeting Volume",
    subMetric: "< 2.8s avg first response · 98.4% qualification accuracy",
    tags: ["Sales SDR Agent", "WhatsApp API", "HubSpot Deal Sync", "Cal.com Integration"],
  },
]

const outcomeHighlights = [
  { value: "74%", label: "Average latency reduction across client operations", icon: Zap },
  { value: "< 2.4s", label: "Autonomous response & routing speed", icon: Clock3 },
  { value: "99.98%", label: "Uptime SLA guaranteed across event pipelines", icon: TrendingUp },
  { value: "100%", label: "Deterministic accuracy on financial & CRM sync", icon: Bot },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 right-[5%] w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <TrendingUp size={13} />
            <span>Proven Business Impact</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Real systems. <br className="hidden sm:block" />
            <span className="text-gradient-cyan">Measurable enterprise outcomes.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            How forward-thinking companies partner with Sthayu to replace operational drag with high-velocity autonomous infrastructure.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="mt-16 space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.number}
              className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#071026] via-[#040816] to-[#02050f] p-8 sm:p-10 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/30"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                
                {/* Left 7 Columns: Story & Solution */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25">
                      CASE {study.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{study.client} · {study.industry}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {study.title}
                  </h3>

                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-red-500/[0.04] border border-red-500/15 text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-red-400 font-mono">THE CHALLENGE: </span>
                      {study.problem}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/20 text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-cyan-400 font-mono">THE STHAYU SYSTEM: </span>
                      {study.solution}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right 5 Columns: Big Metric Highlight */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-cyan-400/25 bg-[#02050f]/90 p-8 shadow-[0_0_30px_rgba(6,182,212,0.15)] text-center lg:text-left">
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                      VERIFIED OUTCOME
                    </div>
                    <div className="mt-3 font-mono text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-400">
                      {study.metric}
                    </div>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed font-medium">
                      {study.subMetric}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 size={14} />
                      Production Deployed
                    </span>
                    <a
                      href="#assessment"
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-cyan-200"
                    >
                      <span>Similar Scope</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global Impact Summary Bar */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeHighlights.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="glass-card p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-5 font-mono text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

