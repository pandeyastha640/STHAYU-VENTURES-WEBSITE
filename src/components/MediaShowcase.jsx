import { useState } from "react"
import { CheckCircle2, Terminal, Workflow, ArrowRight } from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui"

const scenarios = [
  {
    id: "lead",
    title: "Instant Lead Qualification & Calendar Booking",
    tag: "Sales & Inquiries",
    description: "A prospective client reaches out on WhatsApp or your website. The AI agent immediately answers their questions, confirms their requirements, and books a meeting directly onto your calendar.",
    latency: "1.4s",
    accuracy: "99.8%",
    steps: [
      { name: "Inquiry Received", detail: "Customer sends a message on WhatsApp or your website form", status: "complete" },
      { name: "Requirements Checked", detail: "AI understands what the customer needs and their timeline", status: "complete" },
      { name: "Priority Assigned", detail: "Flags high-value buyer ready for immediate follow-up", status: "complete" },
      { name: "Meeting Booked", detail: "Call scheduled on your calendar and added to your CRM", status: "complete" },
    ],
    payload: {
      event: "new_sales_inquiry",
      source: "whatsapp_business",
      inquiry_topic: "business_automation_setup",
      ai_assistant: "Sales_Assistant",
      action_taken: "calendar_meeting_booked_and_team_notified",
      response_time: "1.4s",
    }
  },
  {
    id: "support",
    title: "24/7 Customer Help & Query Resolution",
    tag: "Customer Support",
    description: "A client reaches out with a common question or request. The AI checks your approved business knowledge base and provides a friendly, accurate answer in seconds.",
    latency: "820ms",
    accuracy: "99.4%",
    steps: [
      { name: "Customer Asks Question", detail: "Customer asks about order status, pricing, or product instructions", status: "complete" },
      { name: "Company Knowledge Checked", detail: "AI looks up your verified company documents and FAQs", status: "complete" },
      { name: "Accurate Answer Sent", detail: "Clear, helpful reply sent back in under 1 second", status: "complete" },
      { name: "Activity Logged", detail: "Conversation record saved for your team to review", status: "complete" },
    ],
    payload: {
      event: "customer_support_query",
      ticket_id: "REQ-8942",
      topic: "order_tracking_and_status",
      query_resolved: true,
      escalation_needed: false,
      response_time: "0.82s",
    }
  },
  {
    id: "ops",
    title: "Automatic Invoice & Payment Sync",
    tag: "Finance & Operations",
    description: "When a payment arrives, the system automatically matches it with the right client invoice and updates your accounting tools without any manual copy-pasting.",
    latency: "2.1s",
    accuracy: "100%",
    steps: [
      { name: "Payment Received", detail: "New client payment confirmed via payment gateway", status: "complete" },
      { name: "Invoice Matched", detail: "Finds matching invoice number and client account", status: "complete" },
      { name: "Accounting Updated", detail: "Marks invoice as paid across your software tools", status: "complete" },
      { name: "Receipt Delivered", detail: "Sends confirmation message and receipt to client", status: "complete" },
    ],
    payload: {
      event: "payment_reconciliation",
      connected_systems: ["Payment_Gateway", "Accounting_Software", "CRM"],
      status: "invoice_matched_and_receipt_sent",
      manual_typing_time: "0 minutes",
      processing_time: "2.1s",
    }
  }
]

export default function MediaShowcase() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0])
  const [activeTab, setActiveTab] = useState("pipeline")

  return (
    <section id="media-showcase" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[160px] opacity-70" />

      <div className="relative mx-auto max-w-7xl">

        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Workflow, text: "Interactive Workflow Example" }}
            title={
              <>
                See automated workflows <br className="hidden sm:block" />
                <span className="text-white/60">in live action.</span>
              </>
            }
            description="Here is how our automations instantly handle customer inquiries, answer questions, and update your software behind the scenes."
          />
        </AnimatedSection>

        {/* Scenario Selectors */}
        <AnimatedSection delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {scenarios.map((sc) => {
              const isSelected = activeScenario.id === sc.id
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveScenario(sc)}
                  className={`flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "border border-[#d4b982]/40 bg-[#d4b982]/[0.08] text-[#d4b982] shadow-[0_0_20px_rgba(212,185,130,0.1)]"
                      : "border border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#d4b982] animate-pulse" : "bg-slate-500"}`} />
                  <span>{sc.tag}</span>
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Interactive Engine Window */}
        <AnimatedSection delay={0.2}>
          <div className="mt-8 rounded-[2.5rem] border border-[#d4b982]/20 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] shadow-[0_40px_120px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden backdrop-blur-2xl">

            {/* Engine Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-4 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d4b982]/[0.06] border border-[#d4b982]/20 text-[#d4b982]">
                  <Workflow size={17} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    {activeScenario.title}
                  </div>
                  <div className="text-[10px] font-mono text-[#d4b982] font-semibold">STATUS: ACTIVE AUTOMATION</div>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/40 p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("pipeline")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "pipeline" ? "bg-[#d4b982]/[0.12] text-[#d4b982] border border-[#d4b982]/30 shadow-[0_0_12px_rgba(212,185,130,0.1)]" : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  Step-by-Step Flow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("telemetry")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "telemetry" ? "bg-[#d4b982]/[0.12] text-[#d4b982] border border-[#d4b982]/30 shadow-[0_0_12px_rgba(212,185,130,0.1)]" : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <Terminal size={12} />
                  Data Log
                </button>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {activeTab === "pipeline" ? (
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

                  {/* Left side: Scenario Description and Stats */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d4b982]">
                        Automation Flow
                      </span>
                      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                        {activeScenario.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {activeScenario.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Response Time</div>
                        <div className="mt-1 text-2xl font-extrabold text-[#d4b982] font-mono">{activeScenario.latency}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Instant customer reply</div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Accuracy</div>
                        <div className="mt-1 text-2xl font-extrabold text-[#d4b982] font-mono">{activeScenario.accuracy}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Verified data matching</div>
                      </div>
                    </div>

                    <a
                      href="#assessment"
                      className="btn-primary w-fit text-xs py-2.5 px-5"
                    >
                      <span>Build a Similar Automation</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>

                  {/* Right side: Step Execution Nodes */}
                  <div className="lg:col-span-7 space-y-3">
                    {activeScenario.steps.map((step, idx) => (
                      <AnimatedSection key={step.name} delay={0.3 + idx * 0.08}>
                        <div
                          className="group relative flex items-center justify-between rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-4 transition-all duration-300 hover:border-[#d4b982]/30 hover:bg-[#0e0e0e]"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d4b982]/[0.06] border border-[#d4b982]/20 text-[#d4b982] font-mono text-xs font-bold">
                              0{idx + 1}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white flex items-center gap-2">
                                {step.name}
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#d4b982]/[0.08] text-[#d4b982] border border-[#d4b982]/20 font-semibold">
                                  DONE
                                </span>
                              </div>
                              <div className="text-xs text-slate-300 mt-0.5">{step.detail}</div>
                            </div>
                          </div>

                          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#d4b982]">
                            <CheckCircle2 size={16} />
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>

                </div>
              ) : (
                /* JSON Telemetry Payload Inspector */
                <div className="rounded-2xl border border-white/[0.06] bg-[#080808] p-5 font-mono text-xs text-[#d4d4d8] overflow-x-auto shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[10px]">
                    <span>SYSTEM_DATA_LOG // Secure Channel</span>
                    <span className="text-[#d4b982]">● LIVE</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed">
                    {JSON.stringify(activeScenario.payload, null, 2)}
                  </pre>
                </div>
              )}
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
