import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Database,
  Gauge,
  Network,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react"

const reasons = [
  {
    icon: BrainCircuit,
    title: "Manual work is draining your team",
    description: "Repetitive admin, handoffs, and updates are consuming capacity that should go toward growth, service, and decision-making.",
  },
  {
    icon: Network,
    title: "Systems are disconnected",
    description: "Sales, CRM, operations, and customer communications are fragmented, creating delays, missed follow-ups, and limited visibility.",
  },
  {
    icon: Workflow,
    title: "Everything is too slow",
    description: "Slow processes create bottlenecks, longer customer response times, and teams trapped in reactive operations instead of proactive execution.",
  },
  {
    icon: Gauge,
    title: "Data is scattered and hard to trust",
    description: "When information sits across tools, teams operate from stale context and lose confidence in the decisions they make.",
  },
]

const transformation = [
  { label: "Manual", active: false },
  { label: "Fragmented", active: false },
  { label: "Slow", active: false },
  { label: "Reactive", active: false },
  { label: "Automated", active: true },
  { label: "Connected", active: true },
  { label: "Intelligent", active: true },
  { label: "Scalable", active: true },
]

function SystemOrb() {
  return (
    <div className="relative h-[330px] w-[330px]">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-[18px] rounded-full border border-cyan-300/18" />
      <div className="absolute inset-[36px] rounded-full border border-cyan-300/12" />
      <div className="absolute inset-[54px] rounded-full border border-blue-400/15" />
      <div className="absolute inset-[28px] animate-[spin-slow_18s_linear_infinite] rounded-full border border-transparent border-t-cyan-300/30 border-r-cyan-300/10" />
      <div className="absolute inset-[70px] animate-[spin-slow_12s_linear_infinite_reverse] rounded-full border border-transparent border-b-blue-400/30 border-l-blue-400/10" />

      <div className="absolute inset-[18%] rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-cyan-300/20 bg-[#071017] shadow-[0_0_80px_rgba(34,211,238,0.12)] orbital-core">
        <div className="absolute inset-3 rounded-[25px] border border-cyan-300/10" />
        <Sparkles size={26} className="text-cyan-300" strokeWidth={1.2} />
      </div>

      {[
        { icon: Cpu, pos: "left-1/2 top-0 -translate-x-1/2" },
        { icon: Database, pos: "right-0 top-1/2 -translate-y-1/2" },
        { icon: Workflow, pos: "left-1/2 bottom-0 -translate-x-1/2" },
        { icon: Network, pos: "left-0 top-1/2 -translate-y-1/2" },
      ].map(({ icon: Icon, pos }) => (
        <div key={pos} className={`absolute ${pos} z-30`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#080d12] shadow-[0_15px_35px_rgba(2,6,23,0.45)]">
            <Icon size={16} className="text-cyan-300" />
          </div>
        </div>
      ))}

      <span className="data-node left-[20%] top-[16%]" />
      <span className="data-node right-[18%] top-[22%]" />
      <span className="data-node right-[17%] bottom-[18%]" />
      <span className="data-node left-[18%] bottom-[20%]" />
    </div>
  )
}

export default function WhySthayu() {
  return (
    <section id="why-sthayu" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-300/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Target size={14} className="text-cyan-300" />
          Why Sthayu
        </div>

        <div className="mt-8 max-w-4xl">
          <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem] lg:text-[4.3rem]">
            Businesses need more than AI tools.
            <span className="mt-3 block text-slate-300">They need an operating system for execution.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-slate-300">
            Most operational drag is not caused by a single task. It comes from disconnected systems, endless handoffs, and work that depends on people remembering what happens next.
          </p>
        </div>

        <div className="cinematic-panel mt-10 overflow-hidden rounded-[32px]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex w-full min-h-[420px] items-center justify-center overflow-hidden border-b border-white/10 lg:min-h-[520px] lg:border-b-0 lg:border-r">
              <div className="business-video-shell absolute inset-0">
                <div className="business-flow-scene" aria-label="Business transformation flow visualization">
                  <div className="flow-scene-glow" />
                  <div className="flow-scene-node flow-scene-node--manual">Manual</div>
                  <div className="flow-scene-node flow-scene-node--data">Data</div>
                  <div className="flow-scene-node flow-scene-node--systems">Systems</div>
                  <div className="flow-scene-node flow-scene-node--ai">AI</div>
                  <div className="flow-scene-center">
                    <div className="flow-scene-core">
                      <Sparkles size={26} className="text-cyan-300" strokeWidth={1.2} />
                    </div>
                  </div>
                  <div className="flow-scene-line flow-scene-line--one" />
                  <div className="flow-scene-line flow-scene-line--two" />
                  <div className="flow-scene-line flow-scene-line--three" />
                  <div className="flow-scene-line flow-scene-line--four" />
                </div>
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,0.82),rgba(5,7,10,0.24),rgba(5,7,10,0.68))]" />
              <div className="absolute inset-4 rounded-[28px] border border-white/10 bg-[#071017]/35 backdrop-blur-[2px]" />

              <div className="absolute left-5 top-5 z-10 rounded-full border border-cyan-300/25 bg-[#071017]/70 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">
                Manual work → intelligent flow
              </div>

              <div className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-[#071017]/70 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-slate-200 backdrop-blur-sm">
                Complex → connected
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
                <div className="max-w-[220px] rounded-[18px] border border-white/10 bg-[#071017]/70 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">Before</p>
                  <p className="mt-2 text-[13px] text-white">Disconnected tasks, delayed decisions, scattered data</p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-[#071017]/75 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-sm">
                  <ArrowUpRight size={16} className="text-cyan-200" />
                </div>
              </div>

              <div className="relative z-10">
                <SystemOrb />
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_15px_35px_rgba(34,211,238,0.12)]">
                  <ArrowUpRight size={18} className="text-cyan-300" />
                </div>
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-slate-400">From</p>
                  <p className="text-[13px] text-white">Manual to intelligent</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => {
                  const Icon = reason.icon
                  return (
                    <div key={reason.title} className="rounded-[22px] border border-white/10 bg-[#091018]/70 p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#0b131b] hover:shadow-[0_16px_36px_rgba(2,6,23,0.28)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon size={18} className="text-cyan-300" />
                      </div>
                      <h3 className="mt-5 text-[1.05rem] font-semibold tracking-[-0.03em] text-white">{reason.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-slate-300">{reason.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[26px] border border-white/10 bg-[#091018]/80 p-5 sm:p-6 shadow-[0_25px_60px_rgba(2,6,23,0.25)]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-slate-400">Transformation</p>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-300/20 via-cyan-300/40 to-transparent sm:block" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {transformation.map((item) => (
              <span
                key={item.label}
                className={`rounded-full border px-3 py-2 text-[13px] font-medium ${
                  item.active
                    ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
                    : "border-white/10 bg-white/5 text-slate-400"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
