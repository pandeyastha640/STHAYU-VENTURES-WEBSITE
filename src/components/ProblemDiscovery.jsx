import { ArrowRight, Check, MessageSquareText, Search, Sparkles } from "lucide-react"

const painPoints = [
  "Missed leads and weak follow-up",
  "Manual reporting and delayed decisions",
  "Customers waiting too long for answers",
  "Disconnected tools and duplicate admin",
  "Slow sales and service operations",
  "No clear digital system behind growth",
]

const problemMatrix = [
  { label: "Leads lost", outcome: "AI qualification + CRM routing" },
  { label: "Calls missed", outcome: "Voice agents + automated replies" },
  { label: "Support delayed", outcome: "AI support + human handoff" },
  { label: "Reporting slow", outcome: "Dashboards + AI summaries" },
  { label: "Sales reactive", outcome: "Sales workflow automation" },
  { label: "Systems fragmented", outcome: "Connected business infrastructure" },
]

export default function ProblemDiscovery() {
  return (
    <section id="problem-discovery" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-[340px] w-[340px] rounded-full bg-cyan-300/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Search size={14} className="text-cyan-300" />
          Your business problem
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem]">
              Your business does not need more software.
              <span className="mt-3 block text-slate-300">It needs systems that work together.</span>
            </h2>
          </div>

          <p className="max-w-xl text-[1.02rem] leading-8 text-slate-300">
            Most teams are not failing because they lack effort. They are losing time because work is spread across disconnected tools, manual follow-up, and slow decision-making.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-[#091018]/80 p-5 shadow-[0_18px_40px_rgba(2,6,23,0.18)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                <MessageSquareText size={18} className="text-cyan-300" />
              </div>
              <p className="mt-4 text-[1.05rem] font-medium leading-7 text-white">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[30px] border border-white/10 bg-[#081117]/90 p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">From friction to flow</p>
              <h3 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white">Problem → connected system</h3>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-300/20 via-cyan-300/40 to-transparent md:block" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problemMatrix.map((item) => (
              <div key={item.label} className="rounded-[22px] border border-white/10 bg-[#0d141a]/80 p-5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                  {item.label}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                    <Check size={15} />
                  </div>
                  <p className="text-[14px] leading-6 text-slate-200">{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200">
              <Sparkles size={12} />
              Business-first strategy
            </div>

            <a href="#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-white transition-colors hover:text-cyan-200">
              Find the right solution
              <ArrowRight size={14} className="text-cyan-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
