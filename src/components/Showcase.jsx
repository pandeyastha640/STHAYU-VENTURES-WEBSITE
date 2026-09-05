import { useState } from "react"
import { BarChart3, Bot, Clock3, Database, Layers3, Sparkles, Workflow, Zap, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "./ui/index.jsx"

const systemOverviewCards = [
  { icon: Zap, label: "Automated Workflows Active", value: "14", detail: "CRM, WhatsApp, Billing & Spreadsheets" },
  { icon: Clock3, label: "Manual Hours Saved Weekly", value: "24+ hrs", detail: "Data entry & routine follow-ups" },
  { icon: Bot, label: "Inquiries Handled by AI", value: "92%", detail: "Under 3-second instant responses" },
  { icon: Database, label: "Data Accuracy Rate", value: "100%", detail: "Zero sync discrepancies" },
]

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <section id="showcase" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 right-[10%] w-[600px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="glass-pill-gold mx-auto">
              <Layers3 size={13} />
              <span>Operations Visibility</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              One place to see your business <br className="hidden sm:block" />
              <span className="text-white/60">operations in real time.</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Clear visibility across incoming leads, automated tasks, hours saved, and connected tools without compiling manual spreadsheets.
            </p>
          </div>
        </AnimatedSection>

        {/* Dashboard Preview Mockup */}
        <AnimatedSection delay={0.15}>
          <div className="mt-14 rounded-3xl border border-[#d4b982]/20 bg-[#0a0a0a]/90 p-5 sm:p-7 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-3 text-[11px] font-mono text-slate-400 hidden sm:inline">
                  Operations Control Center
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#d4b982]" />
                <span className="text-[10px] font-mono font-semibold text-[#d4b982] uppercase tracking-wider">
                  Connected & Active
                </span>
              </div>
            </div>

            {/* Dashboard Inner Layout */}
            <div className="mt-6 grid gap-6 lg:grid-cols-12">
              {/* Left Navigation */}
              <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    System Views
                  </div>
                  {[
                    { name: "Overview", icon: Sparkles },
                    { name: "Automations", icon: Workflow },
                    { name: "AI Assistants", icon: Bot },
                    { name: "Connected Tools", icon: Database },
                    { name: "Reports", icon: BarChart3 },
                  ].map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setActiveTab(item.name)}
                        className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#d4b982]/10 border border-[#d4b982]/30 text-[#d4b982]"
                            : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <Icon size={14} />
                        <span>{item.name}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400">
                  <span className="block text-white font-semibold">Custom Portal</span>
                  <span className="text-[10px]">Built for your workflow</span>
                </div>
              </div>

              {/* Right Main Panel: Key Metrics & Active Workflows */}
              <div className="lg:col-span-9 space-y-6">
                {/* 4 Metric Cards */}
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                  {systemOverviewCards.map((c) => {
                    const Icon = c.icon
                    return (
                      <div key={c.label} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center justify-between text-[#d4b982]">
                          <Icon size={16} />
                        </div>
                        <div className="mt-2 font-mono text-xl sm:text-2xl font-bold text-white">
                          {c.value}
                        </div>
                        <div className="text-[11px] font-medium text-slate-300 mt-0.5">{c.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Automation Summary Table */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                  <div className="text-xs font-bold text-white mb-3">
                    Active Automated Workflows
                  </div>
                  <div className="space-y-2 text-xs">
                    {[
                      { channel: "WhatsApp AI", task: "Inbound Lead Qualification & Meeting Booking", status: "Active" },
                      { channel: "Accounting Sync", task: "Invoice Reconciliation & Payment Updates", status: "Active" },
                      { channel: "Website Chat", task: "24/7 Customer Support & FAQ Resolution", status: "Active" },
                      { channel: "CRM Sync", task: "Automatic Contact Updates & Lead Scoring", status: "Active" },
                    ].map((row) => (
                      <div key={row.task} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 gap-1.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-[#d4b982] shrink-0" />
                          <span className="font-semibold text-white">{row.task}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300">{row.channel}</span>
                          <span className="text-[#d4b982] font-mono font-semibold">● {row.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
