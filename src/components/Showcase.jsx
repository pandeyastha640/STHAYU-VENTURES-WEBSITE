import { ArrowUpRight, BarChart3, Bot, Clock3, Database, Gauge, Layers3, Radio, Sparkles, TrendingUp, Workflow, Zap } from "lucide-react"

const metrics = [
  { icon: Zap, label: "Tasks automated", value: "12.8K", delta: "+24%" },
  { icon: Clock3, label: "Hours saved", value: "486", delta: "+31%" },
  { icon: Bot, label: "AI actions", value: "8.4K", delta: "+18%" },
  { icon: TrendingUp, label: "Efficiency", value: "92.4%", delta: "+12%" },
]

function ProductDashboard() {
  return (
    <div className="interactive-tilt relative overflow-hidden rounded-[30px] border border-white/10 bg-[#070b10] shadow-[0_60px_120px_rgba(0,0,0,0.5)]">
      <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/75" />
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-300">
          <Bot size={11} className="text-cyan-300" />
          Sthayu Command Center
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
          LIVE
        </div>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-[0.7fr_1.3fr] md:p-5">
        <div className="rounded-[22px] border border-white/10 bg-[#0a1217] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10">
              <Sparkles size={14} className="text-cyan-300" />
            </div>
            <div>
              <p className="text-[12px] text-white">Intelligence</p>
              <p className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Core system</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            {[["Overview", Sparkles], ["Automations", Workflow], ["AI Agents", Bot], ["Data", Database], ["Analytics", BarChart3]].map(([label, Icon], index) => (
              <div key={label} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] ${index === 0 ? "bg-cyan-300/10 text-cyan-200" : "text-slate-300"}`}>
                <Icon size={12} />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-emerald-300/20 bg-emerald-300/5 p-3">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
              <Gauge size={12} />
              System health
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[96%] rounded-full bg-emerald-300" />
            </div>
            <p className="mt-2 text-[10px] text-slate-300">96% operational</p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Overview</p>
              <h3 className="mt-1 text-[1.5rem] font-semibold tracking-[-0.04em] text-white">Business automation</h3>
            </div>
            <div className="hidden items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-[10px] text-slate-300 sm:flex">
              <Clock3 size={11} />
              Last 7 days
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map(({ icon: Icon, label, value, delta }) => (
              <div key={label} className="metric-badge rounded-[18px] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={14} className="text-cyan-300" />
                  </div>
                  <span className="text-[10px] text-emerald-300">{delta}</span>
                </div>
                <p className="mt-4 text-[1.5rem] font-semibold tracking-[-0.04em] text-white">{value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-[20px] border border-white/10 bg-[#091017] p-4">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-400">
              <span>Automation efficiency</span>
              <span className="text-emerald-300">+18.7%</span>
            </div>
            <div className="mt-4 h-24">
              <svg className="h-full w-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="showcaseChart" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M0 102 C35 96 50 82 85 88 C125 95 140 72 180 78 C220 85 240 60 275 67 C315 75 335 45 365 53 C410 65 435 28 500 13" fill="none" stroke="url(#showcaseChart)" strokeWidth="3" />
                <path d="M0 102 C35 96 50 82 85 88 C125 95 140 72 180 78 C220 85 240 60 275 67 C315 75 335 45 365 53 C410 65 435 28 500 13 L500 120 L0 120 Z" fill="url(#showcaseChart)" opacity="0.08" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute right-[5%] top-[25%] h-[420px] w-[420px] rounded-full bg-cyan-300/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Layers3 size={14} className="text-cyan-300" />
          The Sthayu layer
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem]">
            One intelligent system
            <span className="mt-3 block text-slate-300">behind your business.</span>
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-8 text-slate-300">
            Sthayu enables organisations to see what is happening across the business, decide what needs to happen next, and automate the execution without friction.
          </p>
        </div>

        <div className="mt-10">
          <ProductDashboard />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="media-shell relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-3">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Leadership team reviewing operational performance"
              className="h-64 w-full rounded-[22px] object-cover object-center"
            />
          </div>
          <div className="flex items-center rounded-[28px] border border-white/10 bg-[#0a1217]/80 p-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Operational visibility</p>
              <h3 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.05em] text-white">See the business in motion.</h3>
              <p className="mt-3 text-[15px] leading-7 text-slate-300">
                From operations and sales to service delivery, Sthayu connects the workforce, systems, and decisions behind each outcome.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            <Radio size={12} className="text-cyan-300" />
            Concept interface · Sthayu intelligence
          </div>
          <button type="button" className="flex items-center gap-2 text-[13px] font-medium text-slate-300 transition-colors hover:text-cyan-200">
            Explore the platform
            <ArrowUpRight size={14} className="text-cyan-300" />
          </button>
        </div>
      </div>
    </section>
  )
}