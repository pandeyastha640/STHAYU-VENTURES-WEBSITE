import { ArrowRight, ArrowUpRight, Bot, Code2, Cpu, Database, Globe, Sparkles, Workflow, Check } from "lucide-react"
import { AnimatedSection, SectionHeading, GlassCard, Badge } from "./ui"

const solutions = [
  {
    id: "ai-agents",
    category: "AI Digital Workers",
    title: "AI Agents for Repetitive Tasks",
    subtitle: "24/7 digital assistants for sales, customer queries & support",
    description: "Digital workers that handle customer questions on WhatsApp and your website, qualify sales enquiries, book calendar appointments, and pass important requests to your team.",
    icon: Bot,
    tags: ["Sales Inquiries", "Customer Support", "WhatsApp AI", "Phone AI"],
    metrics: "< 3s response · 24/7 availability",
    features: [
      "Answers customer messages instantly day and night",
      "Qualifies new buyer leads and books meetings",
      "Looks up order status and answers common questions",
      "Passes urgent or complex cases to your staff with notes"
    ],
  },
  {
    id: "workflow-automation",
    category: "Business Automation",
    title: "Automated Workflows & Tool Sync",
    subtitle: "Stop copy-pasting data between different apps and spreadsheets",
    description: "We connect your everyday tools so that when something happens in one place (like a new website form or paid invoice), your other tools update automatically.",
    icon: Workflow,
    tags: ["Spreadsheet Sync", "Invoice Automation", "CRM Updates", "Zero Data Entry"],
    metrics: "15+ hours saved per week · Zero manual typing",
    features: [
      "Syncs new leads directly from website to CRM & WhatsApp",
      "Matches invoices with payments automatically",
      "Sends team alerts when an important task needs attention",
      "Replaces messy manual spreadsheet updates"
    ],
  },
  {
    id: "saas-platforms",
    category: "Custom Software",
    title: "Custom Business Portals & Tools",
    subtitle: "Software built specifically around the way your company operates",
    description: "Generic software often feels bloated and doesn't fit your exact workflow. We build clean, simple internal portals, client dashboards, and custom tools tailored to your business.",
    icon: Code2,
    tags: ["Internal Portals", "Client Dashboards", "Team Trackers", "Custom Web Apps"],
    metrics: "Ready in 3-6 weeks · Fast & easy to use",
    features: [
      "Clean, modern screens designed for your team's exact workflow",
      "Secure login with specific permissions for each employee",
      "Live dashboards showing sales, tasks, and client status",
      "Works smoothly on desktop, tablets, and phones"
    ],
  },
  {
    id: "digital-experience",
    category: "Web Platforms",
    title: "High-Converting Business Websites",
    subtitle: "Modern websites designed to turn visitors into paying clients",
    description: "Fast, professional website experiences with built-in lead capture, instant quote calculators, and automated routing that sends enquiries straight to your sales team.",
    icon: Globe,
    tags: ["Fast Websites", "Lead Capture", "Interactive Calculators", "Mobile-Ready"],
    metrics: "Top-tier speed · High conversion rates",
    features: [
      "Modern, polished design that builds instant trust",
      "Fast page loading on all mobile and desktop devices",
      "Interactive forms and enquiry calculators",
      "Automatically passes enquiries to your WhatsApp and email"
    ],
  },
  {
    id: "data-ai",
    category: "Data & Reports",
    title: "AI Document Search & Reports",
    subtitle: "Find answers in your company files and get automatic summaries",
    description: "Turn piles of PDFs, contracts, past customer messages, and spreadsheets into an instant search engine. Ask questions in plain English and get immediate, accurate answers.",
    icon: Database,
    tags: ["PDF Search", "Instant Summaries", "Contract Lookups", "Private & Secure"],
    metrics: "100% private data · Instant search",
    features: [
      "Search thousands of company documents in under a second",
      "Extract numbers and invoice details automatically",
      "Keeps your business data private and secure",
      "Generate clean executive summaries without reading 50-page files"
    ],
  },
  {
    id: "transformation",
    category: "Consulting & Planning",
    title: "Automation Audit & Strategy",
    subtitle: "Find where automation will save you the most time and money",
    description: "We review your current tools and daily tasks, pinpoint exactly where your team is wasting time, and give you a clear 1-page roadmap of what to automate first for the highest return.",
    icon: Cpu,
    tags: ["Workflow Audit", "Tool Review", "Cost Savings", "Step-by-Step Plan"],
    metrics: "Clear action plan delivered in 24-48 hours",
    features: [
      "Detailed breakdown of repetitive tasks and time wasted",
      "Suggestions to cancel unnecessary software subscriptions",
      "Step-by-step roadmap prioritized by cost savings and ease",
      "Zero technical jargon — just practical business steps"
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient gradient */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Sparkles, text: "What We Offer" }}
            title={
              <>
                Practical AI and automation <br className="hidden sm:block" />
                <span className="text-white/60">built for growing businesses.</span>
              </>
            }
            description="We build simple, dependable systems that eliminate repetitive tasks, connect your software tools, and help your team get more work done each day."
          />
        </AnimatedSection>

        {/* 6 Solutions Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol, i) => {
            const Icon = sol.icon
            return (
              <AnimatedSection key={sol.id} delay={i * 0.08}>
                <GlassCard hover={true} glow={true} className="h-full group relative flex flex-col justify-between p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#d4b982]/30 hover:shadow-[0_20px_60px_rgba(212,185,130,0.06)]">
                  <div>
                    {/* Top Bar with Icon & Category */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.10] text-[#d4d4d8] group-hover:scale-105 group-hover:border-[#d4b982]/30 group-hover:bg-[#d4b982]/[0.08] group-hover:text-[#d4b982] transition-all">
                        <Icon size={22} />
                      </div>
                      <Badge variant="gold">{sol.category}</Badge>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-[13px] font-medium text-[#d4b982]/90">
                      {sol.subtitle}
                    </p>
                    <p className="mt-4 text-xs sm:text-[13px] text-slate-300 leading-[1.65] font-normal">
                      {sol.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="mt-6 space-y-2 pt-4 border-t border-white/10">
                      {sol.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300 font-normal">
                          <Check size={14} className="text-[#d4b982] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tags & Action */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
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
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </GlassCard>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 rounded-3xl border border-[#d4b982]/20 bg-gradient-to-r from-[#d4b982]/[0.05] via-white/[0.02] to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
            <div>
              <h4 className="text-lg font-bold text-white">Need something custom for your business?</h4>
              <p className="text-xs text-slate-400 mt-1">We can combine AI agents, automated workflows, and custom portals to fit the exact way you work.</p>
            </div>
            <a
              href="#contact"
              className="btn-primary shrink-0 py-3 px-6 text-xs"
            >
              <span>Talk to Our Team</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
