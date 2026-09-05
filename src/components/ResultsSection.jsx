import { ArrowRight, Award, CheckCircle2, MessageSquare, Receipt, Zap } from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui/index.jsx"

const caseStudies = [
  {
    id: "lead-agent",
    tag: "Inbound Sales Automation",
    title: "Inbound Lead & WhatsApp Agent",
    client: "High-Growth Real Estate & Advisory",
    metricValue: "5x",
    metricLabel: "Lead Conversion Rate",
    secondaryMetric: "< 3s average response time",
    challenge: "Inbound inquiries through website and ad campaigns experienced 4+ hour delays before sales rep follow-up, causing high drop-offs.",
    solution: "Deployed an autonomous WhatsApp AI Agent that instantly qualifies incoming leads, answers project queries, verifies buyer budget, and books meetings directly into calendars.",
    outcomes: [
      "94% of inquiries engaged within 3 seconds 24/7",
      "5x increase in qualified calendar appointments",
      "Zero manual data entry for the sales team",
    ],
    icon: MessageSquare,
  },
  {
    id: "billing-pipeline",
    tag: "Financial Operations",
    title: "Automated Billing & Invoice Pipeline",
    client: "National Logistics & Supply Chain Fleet",
    metricValue: "₹14.8L",
    metricLabel: "Annual Overhead Saved",
    secondaryMetric: "99.8% extraction accuracy",
    challenge: "Accounting staff spent 30+ hours weekly manually extracting data from 800+ vendor PDF invoices, matching bank line items, and updating the ERP.",
    solution: "Engineered an AI document extraction pipeline with automated 3-way reconciliation, bank transaction matching, and auto-posting directly to their ERP ledger.",
    outcomes: [
      "Cut invoice processing time from 4 days to 45 seconds",
      "₹14.8 Lakhs direct operational overhead saved per year",
      "100% audit-trail compliance and zero data-entry errors",
    ],
    icon: Receipt,
  },
  {
    id: "support-automation",
    tag: "Customer Operations",
    title: "Operations & Support Automation",
    client: "B2B SaaS & Services Platform",
    metricValue: "74%",
    metricLabel: "Faster Resolution Time",
    secondaryMetric: "65% automated first-contact resolution",
    challenge: "Support desk overwhelmed with repetitive status checks, order tracking, and account provisioning tickets, causing SLA breaches.",
    solution: "Architected an intelligent support triage agent connected to internal databases that autonomously validates client identity, resolves tier-1 tickets, and routes complex edge cases.",
    outcomes: [
      "74% reduction in average ticket resolution time",
      "Support team freed to handle high-value enterprise accounts",
      "Customer satisfaction CSAT increased from 3.8 to 4.9 / 5.0",
    ],
    icon: Zap,
  },
]

export default function ResultsSection() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -70
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section id="results" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Award, text: "Real Results & Case Studies" }}
            title={
              <>
                Verified operational impact <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#d4b982] bg-clip-text text-transparent">
                  delivered in production.
                </span>
              </>
            }
            description="Explore how autonomous AI agents and connected workflow pipelines eliminate manual overhead and multiply team output."
          />
        </AnimatedSection>

        {/* 3 Verified Cards Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, idx) => {
            const Icon = study.icon
            return (
              <AnimatedSection key={study.id} delay={idx * 0.08}>
                <div className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-7 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#d4b982]/40 hover:shadow-[0_20px_50px_rgba(212,185,130,0.1)] hover:-translate-y-1 h-full group">
                  <div>
                    {/* Header Pill & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300 font-mono">
                        {study.tag}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d4b982]/10 border border-[#d4b982]/20 text-[#d4b982]">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 font-medium">
                      {study.client}
                    </p>

                    {/* Metric Highlight Box */}
                    <div className="my-6 rounded-2xl border border-[#d4b982]/20 bg-[#d4b982]/[0.03] p-4 text-center">
                      <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {study.metricValue}
                      </div>
                      <div className="mt-0.5 text-xs font-bold uppercase tracking-wider text-[#d4b982] font-mono">
                        {study.metricLabel}
                      </div>
                      <div className="mt-1 text-[11px] text-slate-400 font-mono">
                        {study.secondaryMetric}
                      </div>
                    </div>

                    {/* Problem & Solution Summary */}
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="font-semibold text-red-400 font-mono uppercase text-[11px]">The Problem: </span>
                        <span className="text-slate-300">{study.challenge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#d4b982] font-mono uppercase text-[11px]">The Sthayu Solution: </span>
                        <span className="text-slate-300">{study.solution}</span>
                      </div>
                    </div>

                    {/* Outcomes checklist */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                      {study.outcomes.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 size={13} className="text-[#d4b982] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => scrollTo("contact")}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4b982] hover:text-[#e8d5b5] transition-colors cursor-pointer"
                    >
                      <span>Deploy a similar system</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
