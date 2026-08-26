import { useState } from "react"
import { ArrowUpRight, BarChart3, Bot, Clock3, Database, Gauge, Layers3, Radio, Sparkles, TrendingUp, Workflow, Zap, Activity, CheckCircle2, ShieldCheck } from "lucide-react"

const metrics = [
  { icon: Zap, label: "Tasks Automated / Wk", value: "14,820", delta: "+34%" },
  { icon: Clock3, label: "Manual Hours Reclaimed", value: "640 hrs", delta: "+42%" },
  { icon: Bot, label: "Autonomous AI Actions", value: "9,140", delta: "+28%" },
  { icon: TrendingUp, label: "System Execution Health", value: "99.98%", delta: "Optimal" },
]

export default function Showcase() {
  const [activeMenu, setActiveMenu] = useState("Automations")

  return (
    <section id="showcase" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 right-[10%] w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <Layers3 size={13} />
            <span>Executive Command Center</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            One intelligent cockpit <br className="hidden sm:block" />
            <span className="text-gradient-cyan">for your entire operation.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real-time operational telemetry, live agent queues, automated data flows, and predictive business insights unified in a single high-performance console.
          </p>
        </div>

        {/* Command Center Dashboard Mockup */}
        <div className="mt-16 rounded-[2.5rem] border border-cyan-500/25 bg-gradient-to-b from-[#071026] via-[#040816] to-[#02050f] p-4 sm:p-6 md:p-8 shadow-[0_40px_120px_rgba(0,0,0,0.8),0_0_50px_rgba(6,182,212,0.12)] backdrop-blur-2xl">
          
          {/* Top Window Chrome */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 px-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-[11px] font-mono text-slate-400 hidden sm:inline">
                https://command.sthayu.com/enterprise/orchestration
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                SYSTEM HEALTH: 100%
              </span>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            
            {/* Left Sidebar navigation */}
            <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-[#02050f]/80 p-4 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Operating Modules
                </div>
                {[
                  { name: "Overview", icon: Sparkles },
                  { name: "Automations", icon: Workflow },
                  { name: "AI Workforce", icon: Bot },
                  { name: "Data Streams", icon: Database },
                  { name: "Analytics", icon: BarChart3 },
                ].map((item) => {
                  const Icon = item.icon
                  const isActive = activeMenu === item.name
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveMenu(item.name)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                          : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <Icon size={15} />
                      <span>{item.name}</span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>LATENCY (P99)</span>
                  <span className="text-cyan-300 font-bold">24ms</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[94%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Right Main Analytics Grid */}
            <div className="lg:col-span-9 space-y-6">
              
              {/* 4 Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {metrics.map((m) => {
                  const Icon = m.icon
                  return (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-[#02050f]/80 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                          <Icon size={15} />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400">{m.delta}</span>
                      </div>
                      <div className="mt-3 font-mono text-xl sm:text-2xl font-extrabold text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{m.label}</div>
                    </div>
                  )
                })}
              </div>

              {/* Central Telemetry Chart & Event Stream */}
              <div className="rounded-2xl border border-white/10 bg-[#02050f]/80 p-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-xs font-bold text-white">Live Execution Throughput (Events/Sec)</div>
                    <div className="text-[10px] text-slate-400 font-mono">Continuous webhook orchestration</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                    REAL-TIME STREAM
                  </span>
                </div>

                <div className="mt-4 h-32 w-full">
                  <svg className="h-full w-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="commandChartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="commandLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 100 C40 92 60 70 100 80 C140 90 160 55 200 65 C240 75 260 40 300 50 C340 60 380 20 420 30 C460 40 480 15 500 10 L500 120 L0 120 Z"
                      fill="url(#commandChartGlow)"
                    />
                    <path
                      d="M0 100 C40 92 60 70 100 80 C140 90 160 55 200 65 C240 75 260 40 300 50 C340 60 380 20 420 30 C460 40 480 15 500 10"
                      fill="none"
                      stroke="url(#commandLine)"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}