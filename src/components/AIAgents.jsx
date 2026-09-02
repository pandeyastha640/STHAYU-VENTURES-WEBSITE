import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { AnimatedSection, SectionHeading } from "./ui"
import { Bot, CheckCircle2, Database, MessageSquare, Phone, UserCheck, ArrowRight } from "lucide-react"

import imgAgentSdr from "../assets/images/agent_sdr_core_1787842135533.jpg"
import imgAgentSupport from "../assets/images/agent_support_core_1787842151764.jpg"
import imgAgentOps from "../assets/images/agent_ops_core_1787842167663.jpg"
import imgAgentVoice from "../assets/images/agent_voice_core_1787842182078.jpg"

const agents = [
  {
    id: "sdr",
    code: "AGENT-01",
    name: "Lead & Sales Agent",
    role: "Captures new enquiries, qualifies buyer leads & books meetings",
    channel: "WhatsApp · Website · Email",
    icon: UserCheck,
    imageCore: imgAgentSdr,
    description: "Instead of leads waiting hours for a salesperson to reply, this AI assistant answers in seconds on WhatsApp or your website, answers questions, checks budget/timeline, and books calls directly on your calendar.",
    capabilities: [
      "Answers customer questions instantly 24/7",
      "Qualifies budget, project requirements, and timeline",
      "Books meetings directly on Calendly or Google Calendar",
      "Syncs contact details and notes to your CRM automatically",
      "Hands off hot leads to your human sales team with full context"
    ],
    highlightMetric: "< 3s Lead Response Time",
  },
  {
    id: "support",
    code: "AGENT-02",
    name: "Customer Support Agent",
    role: "Answers routine customer questions & resolves common tickets",
    channel: "Website · WhatsApp · Email",
    icon: MessageSquare,
    imageCore: imgAgentSupport,
    description: "Resolves repetitive customer questions about orders, pricing, company policies, and troubleshooting using your exact company guides. Frees your team to focus on VIP clients.",
    capabilities: [
      "Answers customer questions accurately using your guides & FAQs",
      "Looks up live order, shipping, and invoice status",
      "Supports customers smoothly in over 90 languages",
      "Passes complex or sensitive cases to your team with notes",
      "Maintains a consistent, professional brand tone day and night"
    ],
    highlightMetric: "90%+ Routine Queries Handled",
  },
  {
    id: "ops",
    code: "AGENT-03",
    name: "Operations & Data Agent",
    role: "Syncs data across apps, matches invoices & alerts staff",
    channel: "Accounting · CRM · Spreadsheets · ERP",
    icon: Database,
    imageCore: imgAgentOps,
    description: "Works silently in the background moving information between your tools, reading PDF invoices, matching payments against records, and alerting managers when action is required.",
    capabilities: [
      "Syncs customer and sales data between tools in real time",
      "Extracts invoice totals and details from PDF documents",
      "Checks incoming payments against invoices and flags discrepancies",
      "Alerts team members on WhatsApp or Slack when tasks need review",
      "Eliminates hours of manual copy-pasting every week"
    ],
    highlightMetric: "Zero Manual Copy-Pasting",
  },
  {
    id: "voice",
    code: "AGENT-04",
    name: "Phone & Voice Agent",
    role: "Answers inbound phone calls, collects details & routes urgent callers",
    channel: "Phone Calls · Mobile · Web Calling",
    icon: Phone,
    imageCore: imgAgentVoice,
    description: "Speaks naturally over the phone, answers caller questions, collects key information, and transfers important callers directly to your team without keeping people waiting on hold.",
    capabilities: [
      "Natural, clear human-like voice conversations",
      "Collects inquiry details and answers company FAQs",
      "Sends call recordings and written summaries to your email",
      "Transfers callers to team members when human help is needed",
      "Books appointments directly during the phone conversation"
    ],
    highlightMetric: "Zero Missed Inbound Calls",
  }
]

export default function AIAgents() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  return (
    <section id="ai-agents" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="pointer-events-none absolute top-1/2 right-10 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Bot, text: "AI Assistants" }}
            title={
              <>
                Specialized AI workers <br className="hidden sm:block" />
                <span className="text-white/60">trained on your business rules.</span>
              </>
            }
            description="Unlike generic chatbots, our AI agents understand your exact business workflow. They read incoming inquiries, take actions across your software, and know exactly when to alert your staff."
          />
        </AnimatedSection>

        {/* 4 Agent Selection Cards + Deep Dive Showcase */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: 4 Agent Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {agents.map((ag) => {
              const Icon = ag.icon
              const isSelected = selectedAgent.id === ag.id
              return (
                <div
                  key={ag.id}
                  onClick={() => setSelectedAgent(ag)}
                  className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-[#d4b982]/40 bg-gradient-to-r from-[#0d0d0d] to-[#080808] shadow-[0_0_0_1px_rgba(212,185,130,0.15)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                          isSelected
                            ? "bg-[#d4b982]/[0.08] border-[#d4b982]/30 text-[#d4b982]"
                            : "bg-white/5 border-white/10 text-slate-400 group-hover:text-white"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-semibold text-[#d4b982]">{ag.code}</span>
                          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">
                            {ag.name}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{ag.channel}</p>
                      </div>
                    </div>

                    <span className={`text-xs font-mono font-bold transition-transform duration-300 ${
                      isSelected ? "text-[#d4b982] translate-x-1" : "text-slate-500"
                    }`}>
                      →
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Selected Agent Deep-Dive */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] p-7 sm:p-9 border border-[#d4b982]/25 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] shadow-[0_20px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAgent.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4b982]/[0.08] border border-[#d4b982]/25 text-[#d4b982]">
                        <selectedAgent.icon size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono font-bold text-[#d4b982] uppercase tracking-wider">
                          {selectedAgent.code} · {selectedAgent.channel}
                        </div>
                        <h4 className="text-lg font-bold text-white">{selectedAgent.name}</h4>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#d4b982]/[0.08] text-[#d4b982] text-[11px] font-mono font-semibold border border-[#d4b982]/20">
                      {selectedAgent.highlightMetric}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedAgent.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      What It Does:
                    </div>
                    {selectedAgent.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <CheckCircle2 size={15} className="text-[#d4b982] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Ready to deploy this assistant?</span>
                    <a
                      href="#assessment"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4b982] hover:text-[#e8d5b5] transition-colors"
                    >
                      <span>Get Started with {selectedAgent.name}</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
