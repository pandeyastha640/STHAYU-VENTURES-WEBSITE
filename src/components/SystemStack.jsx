import { useState } from "react"
import { ArrowRight, Building2, Database, Layers3, LineChart, Sparkles, Workflow, ShoppingBag, Stethoscope, Factory, Laptop, CheckCircle2 } from "lucide-react"

const industryBlueprints = [
  {
    industry: "Professional & Financial Services",
    icon: Building2,
    tagline: "Client intake, KYC document validation & CRM deal sync",
    stack: ["HubSpot Enterprise", "Stripe Billing", "AI Compliance Agent", "Secure Client Portal"],
    outcome: "78% faster client onboarding cycle",
  },
  {
    industry: "High-Growth SaaS & Tech",
    icon: Laptop,
    tagline: "Self-serve onboarding, churn warning alerts & telemetry",
    stack: ["Segment / Mixpanel", "PostgreSQL Cluster", "Tier-1 Support Agent", "Stripe Billing"],
    outcome: "3.4x faster resolution for developer inquiries",
  },
  {
    industry: "E-Commerce & Global Brands",
    icon: ShoppingBag,
    tagline: "Omnichannel WhatsApp cart recovery, returns & inventory sync",
    stack: ["Shopify Plus", "Klaviyo", "WhatsApp Business API", "ERP Warehouse Sync"],
    outcome: "+24% cart recovery & zero manual ticket handling",
  },
  {
    industry: "Real Estate & Commercial PropTech",
    icon: Workflow,
    tagline: "Instant sub-3s lead qualification, voice bookings & CRM updates",
    stack: ["Voice AI Telephony", "Salesforce CRM", "Google Calendar Sync", "SMS Nurture"],
    outcome: "92% connection rate on inbound inquiries",
  },
  {
    industry: "Healthcare & Wellness Operations",
    icon: Stethoscope,
    tagline: "Patient intake, automated appointment reminders & records",
    stack: ["HIPAA-Compliant DB", "Voice Dispatch", "Calendar Routing", "WhatsApp Reminders"],
    outcome: "40% reduction in clinic appointment no-shows",
  },
  {
    industry: "Manufacturing & Supply Chain",
    icon: Factory,
    tagline: "Purchase order OCR parsing, inventory thresholds & supplier alerts",
    stack: ["SAP / Oracle ERP", "Automated PDF Parser", "Slack Anomaly Bot", "SQL Ledger"],
    outcome: "100% automated invoice-to-inventory matching",
  },
]

const maturitySteps = [
  { stage: "01", name: "Manual Ops", desc: "Humans manually copy-pasting data across disjointed tools." },
  { stage: "02", name: "Basic Webhooks", desc: "Fragile Zapier recipes that break without monitoring." },
  { stage: "03", name: "Event Fabric", desc: "Deterministic microservice pipelines syncing databases in real-time." },
  { stage: "04", name: "Autonomous AI", desc: "Cognitive agents resolving customer inquiries and taking actions." },
  { stage: "05", name: "Proprietary SaaS", desc: "Your unique operations codified into custom scalable software." },
]

export default function SystemStack() {
  return (
    <section id="system-stack" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <Layers3 size={13} />
            <span>Industry Architecture Blueprints</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Architected for the realities <br className="hidden sm:block" />
            <span className="text-gradient-cyan">of your specific industry.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don't deploy cookie-cutter automation templates. We map the exact data dependencies, software APIs, and compliance standards of your vertical.
          </p>
        </div>

        {/* 6 Industry Blueprint Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryBlueprints.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.industry}
                className="glass-card p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">VERIFIED BLUEPRINT</span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.industry}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Connected Stack Pill List */}
                  <div className="mt-5 space-y-1.5 pt-4 border-t border-white/10">
                    <div className="text-[9px] uppercase font-mono text-slate-400">Integrated Stack:</div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.stack.map((st) => (
                        <span key={st} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-cyan-300 border border-white/5">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">{item.outcome}</span>
                  <ArrowRight size={14} className="text-cyan-400 opacity-60 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* The Transformation Staircase: From Chaos to Proprietary SaaS */}
        <div className="mt-16 rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-b from-[#071026] via-[#040816] to-[#02050f] p-8 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="max-w-3xl">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
              The Sthayu Maturity Framework
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              From manual operations to proprietary software IP.
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Every workflow Sthayu engineers turns your internal operational logic into an intangible asset — starting as connected pipelines, evolving into autonomous agents, and culminating in bespoke proprietary software.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {maturitySteps.map((s, idx) => (
              <div
                key={s.stage}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-cyan-400">{s.stage}</div>
                  <div className="mt-2 text-base font-bold text-white">{s.name}</div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Level {idx + 1}</span>
                  {idx === 4 && <span className="text-emerald-400 font-bold">★ GOAL</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

