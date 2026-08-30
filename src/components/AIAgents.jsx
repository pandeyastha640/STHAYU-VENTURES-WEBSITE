import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { AnimatedSection, SectionHeading } from "./ui"
import { Bot, CheckCircle2, Database, MessageSquare, Phone, Terminal, UserCheck, ArrowRight, Sparkles } from "lucide-react"

import imgAgentSdr from "../assets/images/agent_sdr_core_1787842135533.jpg"
import imgAgentSupport from "../assets/images/agent_support_core_1787842151764.jpg"
import imgAgentOps from "../assets/images/agent_ops_core_1787842167663.jpg"
import imgAgentVoice from "../assets/images/agent_voice_core_1787842182078.jpg"

const agentSteps = [
  { step: "01", title: "You give it a task", desc: "For example: 'Qualify new leads from WhatsApp and book calls on my calendar.'" },
  { step: "02", title: "It reads the information", desc: "It checks the customer's message, business details, and your availability." },
  { step: "03", title: "It decides what to do", desc: "It follows your business rules to choose the right answer or next step." },
  { step: "04", title: "It uses your tools", desc: "It updates your CRM, sends the WhatsApp reply, and creates the calendar event." },
  { step: "05", title: "It reports back", desc: "Your team gets a notification with the summary and next steps." },
]

const agents = [
  {
    id: "sdr",
    code: "AGENT-01",
    name: "Lead & Sales Agent",
    role: "Captures new enquiries, qualifies leads & books meetings",
    channel: "WhatsApp · Website Chat · Email",
    status: "READY · < 3s Response",
    latency: "1.4s",
    icon: UserCheck,
    imageCore: imgAgentSdr,
    description: "Instead of leads waiting hours for a salesperson to reply, this AI agent answers instantly on WhatsApp or your website, answers questions, checks if they are a fit, and books a call directly on your calendar.",
    capabilities: [
      "Answers customer questions instantly 24/7",
      "Checks customer budget, requirements, and timeline",
      "Books meetings directly on Calendly or Google Calendar",
      "Adds contact details and conversation notes to your CRM",
      "Hands over hot leads to your human sales team seamlessly"
    ],
    telemetry: {
      active_enquiries: 42,
      meetings_booked_today: 14,
      avg_response_time: "under 2 seconds",
      escalation_to_staff: "4.2%"
    }
  },
  {
    id: "support",
    code: "AGENT-02",
    name: "Customer Support Agent",
    role: "Answers routine customer questions & solves common issues",
    channel: "Website · Email · WhatsApp · 90+ Languages",
    status: "READY · 99% Satisfaction",
    latency: "850ms",
    icon: MessageSquare,
    imageCore: imgAgentSupport,
    description: "Handles repetitive customer questions about orders, pricing, policies, and troubleshooting using your company documents. Frees your support team to focus on high-priority customer cases.",
    capabilities: [
      "Answers questions accurately using your guides & FAQs",
      "Looks up live order and invoice status for customers",
      "Helps customers reset passwords and update account details",
      "Speaks politely in over 90 languages",
      "Passes difficult or sensitive cases to human staff with full context"
    ],
    telemetry: {
      questions_answered_24h: 318,
      resolved_without_human: "91.8%",
      customer_satisfaction: "4.9 / 5.0",
      passed_to_team: "8.2%"
    }
  },
  {
    id: "ops",
    code: "AGENT-03",
    name: "Operations & Data Agent",
    role: "Syncs data across tools, matches invoices & catches errors",
    channel: "Accounting · CRM · Spreadsheets · ERP",
    status: "READY · Zero Errors",
    latency: "420ms",
    icon: Database,
    imageCore: imgAgentOps,
    description: "Works silently in the background moving data between your tools, reading PDF invoices, matching payments against bank records, and notifying you if something does not match.",
    capabilities: [
      "Syncs customer and sales data between tools in real time",
      "Reads PDF invoices and receipts automatically",
      "Checks payments against invoices and flags discrepancies",
      "Alerts managers on Slack or WhatsApp when inventory is low",
      "Eliminates hours of manual copy-pasting every week"
    ],
    telemetry: {
      records_synced_today: "14,820",
      errors_caught: 23,
      hours_saved_this_week: "18.5 hrs",
      accuracy_rate: "100%"
    }
  },
  {
    id: "voice",
    code: "AGENT-04",
    name: "Phone & Voice Agent",
    role: "Answers phone calls, collects details & routes hot leads",
    channel: "Phone Calls · Mobile · Web Calling",
    status: "READY · Natural Voice",
    latency: "480ms",
    icon: Phone,
    imageCore: imgAgentVoice,
    description: "Speaks naturally over the phone, answers caller questions, takes down key information, and transfers important callers directly to your team's mobile phones without keeping people on hold.",
    capabilities: [
      "Speaks with clear, natural human-like voice",
      "Understands caller requests and handles interruptions smoothly",
      "Sends call recordings and written summaries to your email",
      "Transfers callers to your team when urgent help is needed",
      "Books appointments directly during the phone conversation"
    ],
    telemetry: {
      calls_handled_today: 184,
      avg_call_length: "2m 14s",
      positive_feedback: "94%",
      transfer_speed: "instant"
    }
  }
]

export default function AIAgents() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  return (
    <section id="ai-agents" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="pointer-events-none absolute top-1/2 right-10 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Bot, text: "AI Digital Workers" }}
            title={<>What is an AI agent? <br className="hidden sm:block" /><span className="text-white/60">Software that does real tasks for you.</span></>}
            description="Think of an AI agent as a reliable digital assistant trained specifically for your business. It reads incoming information, makes decisions based on your rules, and completes work using your existing tools."
          />
        </AnimatedSection>

        {/* How an AI Agent Works Explainer Box */}
        <AnimatedSection delay={0.1}>
          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-[#86efac]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">How an AI Agent Works in 5 Simple Steps:</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {agentSteps.map((s) => (
                <div key={s.step} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#86efac]">{s.step}</span>
                    <h4 className="text-sm font-bold text-white mt-2">{s.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 4 Agent Selection Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, idx) => {
            const isSelected = selectedAgent.id === agent.id
            return (
              <AnimatedSection key={agent.id} delay={idx * 0.1}>
                <div
                  onClick={() => setSelectedAgent(agent)}
                  className={`group relative flex flex-col justify-between rounded-[2rem] border p-6 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-white/[0.12] border-l-2 border-l-[#fafafa]/30 bg-gradient-to-b from-[#0a0a0a] to-[#080808] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] -translate-y-1"
                      : "border-white/10 bg-[#0a0a0a]/70 hover:border-white/20 hover:bg-[#0a0a0a]/90"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <span className="text-[10px] font-mono font-bold text-[#a1a1aa]">{agent.code}</span>
                      <span className="flex items-center gap-1.5 text-[9px] font-mono font-semibold text-[#86efac]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#86efac] animate-pulse" />
                        AVAILABLE
                      </span>
                    </div>

                    <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.10] text-[#d4d4d8] overflow-hidden relative">
                      <img
                        src={agent.imageCore}
                        alt={agent.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-white group-hover:text-[#d4d4d8] transition-colors">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{agent.role}</p>

                    <div className="mt-4 pt-3 border-t border-white/5">
                      <div className="text-[10px] uppercase font-mono text-slate-400">Works On:</div>
                      <div className="text-xs text-[#d4d4d8] font-medium mt-0.5">{agent.channel}</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">Speed: {agent.latency}</span>
                    <span className={`text-xs font-bold ${isSelected ? "text-[#d4d4d8]" : "text-slate-500 group-hover:text-slate-300"}`}>
                      See details →
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Selected Agent Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAgent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-12 rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] p-6 sm:p-8 md:p-10 backdrop-blur-2xl"
          >
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.10] text-[#d4d4d8] overflow-hidden relative">
                  <img
                    src={selectedAgent.imageCore}
                    alt={selectedAgent.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{selectedAgent.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.03] text-[#d4d4d8] border border-white/[0.08]">
                      {selectedAgent.code}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">{selectedAgent.description}</p>
                </div>
              </div>

              <a
                href="#assessment"
                className="btn-primary text-xs py-2.5 px-5"
              >
                <span>Set Up This Agent</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              
              <div className="lg:col-span-7 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  What this agent can do for your business:
                </div>
                {selectedAgent.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 size={16} className="text-[#86efac] shrink-0" />
                    <span className="text-xs font-medium text-slate-200">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#080808]/80 p-5 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={12} className="text-[#a1a1aa]" />
                    LIVE PERFORMANCE STATS
                  </span>
                  <span className="text-[#86efac]">● ACTIVE</span>
                </div>

                <div className="mt-4 space-y-3">
                  {Object.entries(selectedAgent.telemetry).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 capitalize">{key.replace(/_/g, " ")}:</span>
                      <span className="font-bold text-[#d4d4d8]">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Guarded with your business rules</span>
                  <span className="text-[#86efac]">Zero hallucinations</span>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
