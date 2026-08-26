import { useState } from "react"
import { Bot, CheckCircle2, ChevronRight, Cpu, Database, Play, Sparkles, Terminal, Workflow, Zap, ArrowRight } from "lucide-react"

const scenarios = [
  {
    id: "lead",
    title: "Omnichannel Lead Qualification & Dispatch",
    tag: "Sales & Growth",
    description: "Inbound inquiry on WhatsApp or Web is parsed by the Sthayu Sales Agent, matched with CRM records, enriched via data providers, and dispatched to executive calendars.",
    latency: "1.4s",
    accuracy: "99.8%",
    steps: [
      { name: "Inbound Capture", detail: "WhatsApp / Webform payload received", status: "complete" },
      { name: "Context Enrichment", detail: "Company revenue, stack, role matched", status: "complete" },
      { name: "Cognitive Scoring", detail: "Intent score: 94/100 (Enterprise Tier)", status: "complete" },
      { name: "Calendar & CRM Dispatch", detail: "Meeting scheduled + HubSpot deal created", status: "complete" },
    ],
    payload: {
      event: "lead.enterprise_qualification",
      source: "whatsapp_business_api",
      intent: "ai_infrastructure_deployment",
      ai_agent: "Sthayu-SDR-Alpha",
      action_taken: "hubspot_deal_created_and_rep_assigned",
      execution_time: "1.42s",
    }
  },
  {
    id: "support",
    title: "Autonomous Tier-1 Customer Resolution",
    tag: "Customer Operations",
    description: "Customer service request triaged, authenticated against internal knowledge base and ERP databases, and resolved with human-grade empathy and precise technical instructions.",
    latency: "820ms",
    accuracy: "99.4%",
    steps: [
      { name: "Intent Analysis", detail: "API key rate limit inquiry identified", status: "complete" },
      { name: "Knowledge Search", detail: "Vector DB queried for custom tenant policy", status: "complete" },
      { name: "Solution Generation", detail: "Actionable fix + temporary tier boost applied", status: "complete" },
      { name: "Ticket Resolution", detail: "Zendesk ticket closed with 5-star CSAT", status: "complete" },
    ],
    payload: {
      event: "support.ticket_auto_resolution",
      ticket_id: "STH-8942",
      sentiment: "neutral_to_delighted",
      vector_search_score: 0.984,
      escalation_needed: false,
      execution_time: "0.82s",
    }
  },
  {
    id: "ops",
    title: "Real-Time Multi-System Data Reconciliation",
    tag: "Enterprise ERP",
    description: "Cross-platform data discrepancy detected between warehouse logistics, billing software, and customer invoices. Auto-corrected and verified without human data entry.",
    latency: "2.1s",
    accuracy: "100%",
    steps: [
      { name: "Discrepancy Trigger", detail: "Invoice #4102 mismatch detected", status: "complete" },
      { name: "Cross-Database Audit", detail: "PostgreSQL & Stripe ledgers reconciled", status: "complete" },
      { name: "Adjustment Execution", detail: "Credit note drafted & ERP synced", status: "complete" },
      { name: "Audit Trail Logged", detail: "SOC2 compliance cryptographic log sealed", status: "complete" },
    ],
    payload: {
      event: "ops.ledger_reconciliation",
      entities: ["PostgreSQL_Cluster", "Stripe_Billing", "SAP_ERP"],
      discrepancy_resolved: "₹1,42,000 variance aligned",
      human_intervention: "0 hours",
      execution_time: "2.14s",
    }
  }
]

export default function MediaShowcase() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0])
  const [activeTab, setActiveTab] = useState("pipeline")

  return (
    <section id="media-showcase" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <Sparkles size={13} />
            <span>Interactive Workflow Engine</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            See autonomous execution <br className="hidden sm:block" />
            <span className="text-gradient-cyan">in live real-time motion.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Sthayu eliminates manual coordination by running end-to-end cognitive pipelines that ingest, decide, and execute across your enterprise software stack.
          </p>
        </div>

        {/* Scenario Selectors */}
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
                    ? "border border-cyan-400/40 bg-cyan-500/15 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                    : "border border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-cyan-400 animate-pulse" : "bg-slate-500"}`} />
                <span>{sc.tag}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Engine Window */}
        <div className="mt-8 rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-b from-[#070e24] via-[#040816] to-[#02050f] shadow-[0_40px_120px_rgba(0,0,0,0.7),0_0_50px_rgba(6,182,212,0.12)] overflow-hidden backdrop-blur-2xl">
          
          {/* Engine Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                <Workflow size={17} />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  {activeScenario.title}
                </div>
                <div className="text-[10px] font-mono text-slate-400">STATUS: EXECUTING PIPELINE</div>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/40 p-1">
              <button
                type="button"
                onClick={() => setActiveTab("pipeline")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === "pipeline" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/20" : "text-slate-400 hover:text-white"
                }`}
              >
                Visual Pipeline
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("telemetry")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === "telemetry" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/20" : "text-slate-400 hover:text-white"
                }`}
              >
                <Terminal size={12} />
                JSON Payload
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
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                      Execution Scenario
                    </span>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                      {activeScenario.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {activeScenario.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Execution Speed</div>
                      <div className="mt-1 text-2xl font-extrabold text-cyan-300 font-mono">{activeScenario.latency}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">End-to-end processing</div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400">Deterministic Accuracy</div>
                      <div className="mt-1 text-2xl font-extrabold text-emerald-400 font-mono">{activeScenario.accuracy}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Verified outputs</div>
                    </div>
                  </div>

                  <a
                    href="#assessment"
                    className="btn-primary w-fit text-xs py-2.5 px-5"
                  >
                    <span>Build This Workflow</span>
                    <ArrowRight size={13} />
                  </a>
                </div>

                {/* Right side: Step Execution Nodes */}
                <div className="lg:col-span-7 space-y-3">
                  {activeScenario.steps.map((step, idx) => (
                    <div
                      key={step.name}
                      className="group relative flex items-center justify-between rounded-2xl border border-white/10 bg-[#070e24]/80 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0c1738]"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold">
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white flex items-center gap-2">
                            {step.name}
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                              PASS
                            </span>
                          </div>
                          <div className="text-xs text-slate-300 mt-0.5">{step.detail}</div>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <CheckCircle2 size={16} />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ) : (
              /* JSON Telemetry Payload Inspector */
              <div className="rounded-2xl border border-cyan-500/20 bg-[#02050f] p-5 font-mono text-xs text-cyan-300 overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[10px]">
                  <span>EVENT_STREAM_INSPECTOR // TLSv1.3 Encrypted</span>
                  <span className="text-emerald-400">● LIVE_STREAM</span>
                </div>
                <pre className="text-slate-300 leading-relaxed">
                  {JSON.stringify(activeScenario.payload, null, 2)}
                </pre>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}