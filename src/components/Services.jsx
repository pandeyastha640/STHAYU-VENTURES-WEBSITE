import { useState } from "react"
import { ArrowRight, ArrowUpRight, Bot, Code2, Cpu, Database, Globe, Layers, Sparkles, Workflow, Zap, Check } from "lucide-react"

const solutions = [
  {
    id: "ai-agents",
    category: "Autonomous Intelligence",
    title: "Autonomous Enterprise AI Agents",
    subtitle: "24/7 self-executing workforce across voice, chat & email",
    description: "Deploy domain-specific AI agents that qualify inbound sales, resolve multi-step customer inquiries, execute backend API commands, and seamlessly escalate edge cases to human reps.",
    icon: Bot,
    tags: ["Sales SDR Agents", "Voice Agents", "WhatsApp Automation", "Support Tier-1"],
    metrics: "2.4s avg response · 94% autonomous completion",
    features: [
      "Omnichannel intake (WhatsApp, Web, Telephony, Email)",
      "Multi-agent reasoning with tool execution & API calling",
      "Dynamic CRM & calendar sync (HubSpot, Salesforce, Cal.com)",
      "Zero hallucinations via deterministic guardrail engines"
    ],
  },
  {
    id: "workflow-automation",
    category: "Operational Orchestration",
    title: "End-to-End Workflow Automation",
    subtitle: "Eliminate repetitive human handoffs and administrative drag",
    description: "We architect resilient event-driven pipelines that link your marketing, billing, logistics, and internal operations so data flows instantly and flawlessly between platforms.",
    icon: Workflow,
    tags: ["Zapier / Make Replacement", "Webhook Routing", "Custom Microservices", "ERP Sync"],
    metrics: "85% admin time eliminated · Zero manual double entry",
    features: [
      "Custom high-throughput asynchronous webhook processors",
      "Automated invoice reconciliation and financial ledgers",
      "Cross-platform inventory & supply chain synchronization",
      "Real-time event logging and automated error recovery"
    ],
  },
  {
    id: "saas-platforms",
    category: "Custom Software",
    title: "Custom SaaS & Internal Operations Portals",
    subtitle: "Tailor-made software built for your exact operational model",
    description: "Off-the-shelf software forces you to adapt your workflow. We design scalable, intuitive web applications and internal command portals crafted specifically for your team's processes.",
    icon: Code2,
    tags: ["Internal Portals", "Partner Portals", "Executive Command Dashboards", "Cloud APIs"],
    metrics: "Production-ready in 4-8 weeks · High availability",
    features: [
      "Modern React / Next.js / TypeScript frontends",
      "Scalable Node.js / Python / Go backend microservices",
      "Role-Based Access Control (RBAC) & Single Sign-On (SSO)",
      "Automated CI/CD deployment pipelines on AWS / GCP"
    ],
  },
  {
    id: "digital-experience",
    category: "Digital Growth",
    title: "High-Performance Web Platforms",
    subtitle: "Cinematic design engineered for enterprise conversion",
    description: "A world-class digital presence that positions your company at the apex of your industry. Blazing fast, visually stunning, and integrated directly into your automated lead capture engine.",
    icon: Globe,
    tags: ["Enterprise Websites", "3D WebGL Experiences", "Design Systems", "Conversion Engine"],
    metrics: "100/100 Lighthouse speed · 3.2x conversion lift",
    features: [
      "Apple / Linear-grade visual polish & interactive animations",
      "Headless CMS integration with instant visual editing",
      "Interactive product calculators and lead intake wizards",
      "Global edge CDN deployment with sub-50ms TTFB"
    ],
  },
  {
    id: "data-ai",
    category: "Data Infrastructure",
    title: "RAG & Custom AI Knowledge Systems",
    subtitle: "Unlock your company's proprietary data for intelligent querying",
    description: "Connect your enterprise documents, Notion workspaces, databases, and transcripts into private, vector-indexed neural knowledge bases that power internal teams and client agents.",
    icon: Database,
    tags: ["Vector Databases", "Enterprise RAG", "Fine-Tuning", "Secure Local AI"],
    metrics: "Strict tenant data privacy · Instant search retrieval",
    features: [
      "Hybrid vector + semantic search architectures",
      "Private air-gapped or dedicated enterprise cloud deployments",
      "Automated document ingestion and chunking pipelines",
      "Strict RBAC data permission compliance (SOC2-ready)"
    ],
  },
  {
    id: "transformation",
    category: "Strategic Advisory",
    title: "Enterprise AI & Operations Advisory",
    subtitle: "Blueprint your 2-year autonomous transformation roadmap",
    description: "We audit your existing tech stack, identify high-ROI automation targets, calculate operational cost savings, and provide an executable architectural blueprint for scalable AI adoption.",
    icon: Cpu,
    tags: ["Tech Stack Audit", "ROI Modeling", "AI Readiness Roadmap", "Security & Governance"],
    metrics: "Clear ROI roadmap delivered in 10 business days",
    features: [
      "Comprehensive bottleneck and manual cost breakdown",
      "Vendor consolidation and tool redundancy elimination",
      "Security, privacy, and compliance risk assessments",
      "Phased implementation timeline with clear KPIs"
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient gradient */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <Sparkles size={13} />
            <span>Full-Spectrum Solutions</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Transforming every layer <br className="hidden sm:block" />
            <span className="text-gradient-cyan">of modern business operations.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From autonomous front-office AI agents to deep backend database orchestrations, we build reliable digital systems that scale without adding headcount.
          </p>
        </div>

        {/* 6 Solutions Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol) => {
            const Icon = sol.icon
            return (
              <div
                key={sol.id}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#070e24]/80 via-[#040816]/70 to-[#02050f] p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_30px_70px_rgba(6,182,212,0.15)] backdrop-blur-xl"
              >
                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                      {sol.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-cyan-300/90">
                    {sol.subtitle}
                  </p>
                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-2 pt-4 border-t border-white/10">
                    {sol.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags & Action */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {sol.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#assessment"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all cursor-pointer"
                    aria-label={`Get started with ${sol.title}`}
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div>
            <h4 className="text-lg font-bold text-white">Need a custom integrated solution?</h4>
            <p className="text-xs text-slate-400 mt-1">We architect hybrid combinations of AI agents, software portals, and workflow pipelines tailored to your stack.</p>
          </div>
          <a
            href="#contact"
            className="btn-primary shrink-0 py-3 px-6 text-xs"
          >
            <span>Request Custom Architecture</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}

