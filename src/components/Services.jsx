import { ArrowRight, ArrowUpRight, Bot, Code2, FileText, Globe, Sparkles, Workflow, Check } from "lucide-react"
import { AnimatedSection, SectionHeading, GlassCard, Badge } from "./ui"

const servicesList = [
  {
    id: "ai-digital-workers",
    category: "AI Digital Workers",
    title: "AI Assistants for Sales, Support & Ops",
    subtitle: "24/7 intelligent workers trained on your company guidelines",
    description: "AI assistants that answer customer questions on WhatsApp and your website, qualify sales leads, book calendar appointments, and handle routine operational tasks.",
    icon: Bot,
    tags: ["Sales Inquiries", "Customer Support", "WhatsApp AI", "Phone AI"],
    features: [
      "Instant response to new leads on WhatsApp & web (< 3s)",
      "Qualifies budget, timeline, and books calendar meetings",
      "Resolves routine customer support questions with full context",
      "Seamlessly transfers complex cases to your human team"
    ],
  },
  {
    id: "workflow-automation",
    category: "Workflow Automation",
    title: "Connected Tools & Automated Workflows",
    subtitle: "Stop copy-pasting data between different apps & spreadsheets",
    description: "Connect your CRM, spreadsheets, accounting software, WhatsApp, email, and payment gateways so information flows automatically without human error.",
    icon: Workflow,
    tags: ["CRM Sync", "Invoice Matching", "WhatsApp Alerts", "Zero Manual Entry"],
    features: [
      "Auto-syncs leads from website forms directly to CRM & WhatsApp",
      "Matches invoices with bank payments and marks records paid",
      "Sends team alerts when urgent operational tasks need attention",
      "Replaces error-prone manual spreadsheets with automated data flows"
    ],
  },
  {
    id: "custom-portals",
    category: "Custom Business Portals",
    title: "Internal Dashboards & Client Portals",
    subtitle: "Bespoke software built around your exact business operations",
    description: "Internal dashboards, client management portals, operational tracking systems, and custom software designed specifically for your team's workflow.",
    icon: Code2,
    tags: ["Internal Portals", "Client Dashboards", "Team Trackers", "Custom Web Apps"],
    features: [
      "Clean, modern screens designed for your team's exact workflow",
      "Role-based access control with secure employee permissions",
      "Live operational visibility across sales, tasks, and client status",
      "Fully responsive on desktop, tablets, and mobile devices"
    ],
  },
  {
    id: "business-websites",
    category: "Business Websites",
    title: "High-Converting Business Websites",
    subtitle: "Fast, modern websites with built-in lead capture & automation",
    description: "Fast, modern, professional web platforms with built-in instant quote calculators, lead capture forms, and automated routing that passes inquiries directly to your team.",
    icon: Globe,
    tags: ["Fast Websites", "Lead Capture", "Quote Calculators", "Mobile Optimized"],
    features: [
      "Modern, polished design that establishes immediate market authority",
      "Sub-second loading speed optimized for all mobile devices",
      "Interactive inquiry forms and instant estimation calculators",
      "Automatically routes incoming leads to WhatsApp, CRM, and email"
    ],
  },
  {
    id: "document-intelligence",
    category: "AI Document Intelligence",
    title: "Document Search, Extraction & Summaries",
    subtitle: "Search company files and automate document-heavy processes",
    description: "Search contracts, PDFs, policies, invoices, and company records in plain English. Extract structured data automatically and generate executive summaries.",
    icon: FileText,
    tags: ["PDF Search", "Data Extraction", "Contract Lookups", "Private & Secure"],
    features: [
      "Instant plain-English search across thousands of company documents",
      "Automated extraction of invoice numbers, line items, and terms",
      "Generates concise summaries of long reports and agreements",
      "Strict data privacy—your documents are never used for public training"
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient gradient */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Sparkles, text: "What We Build" }}
            title={
              <>
                Practical AI and automation <br className="hidden sm:block" />
                <span className="text-white/60">built for growing businesses.</span>
              </>
            }
            description="We build simple, dependable systems that eliminate repetitive tasks, connect your daily software tools, and help your business scale efficiently."
          />
        </AnimatedSection>

        {/* 5 Core Categories Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((sol, i) => {
            const Icon = sol.icon
            const isWide = i === 3 || i === 4
            return (
              <AnimatedSection
                key={sol.id}
                delay={i * 0.08}
                className={isWide ? "md:col-span-1 lg:col-span-3 lg:w-full lg:max-w-none" : ""}
              >
                <GlassCard
                  hover={true}
                  glow={true}
                  className="h-full group relative flex flex-col justify-between p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#d4b982]/30 hover:shadow-[0_20px_60px_rgba(212,185,130,0.06)]"
                >
                  <div>
                    {/* Top Bar with Icon & Category */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.10] text-[#d4d4d8] group-hover:scale-105 group-hover:border-[#d4b982]/30 group-hover:bg-[#d4b982]/[0.08] group-hover:text-[#d4b982] transition-all">
                        <Icon size={20} />
                      </div>
                      <Badge variant="gold">{sol.category}</Badge>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="mt-5 text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                      {sol.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium text-[#d4b982]/90">
                      {sol.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                      {sol.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                      {sol.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300 font-normal">
                          <Check size={14} className="text-[#d4b982] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tags & Action */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {sol.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.03] text-slate-400 border border-white/[0.06]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#assessment"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:bg-[#d4b982] group-hover:text-[#050505] group-hover:border-[#d4b982] transition-all cursor-pointer"
                      aria-label={`Get started with ${sol.title}`}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </GlassCard>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <AnimatedSection delay={0.3}>
          <div className="mt-14 rounded-3xl border border-[#d4b982]/20 bg-gradient-to-r from-[#d4b982]/[0.05] via-white/[0.02] to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Need a custom combination for your business?</h4>
              <p className="text-xs text-slate-400 mt-1">We can integrate AI agents, connected workflows, and custom portals around the way you work.</p>
            </div>
            <a
              href="#contact"
              className="btn-primary shrink-0 py-3 px-6 text-xs font-semibold"
            >
              <span>Book a Free Call</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
