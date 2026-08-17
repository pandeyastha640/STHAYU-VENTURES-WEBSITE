import { ArrowUpRight, BarChart3, Bot, Clock3, Sparkles, TrendingUp, Users, Workflow, Zap } from "lucide-react"

const caseStudies = [
  {
    number: "01",
    industry: "Operations",
    title: "Turn repetitive work into a continuous operating system.",
    description: "A fragmented process becomes a connected workflow that captures information, routes decisions, updates records, and keeps the team moving without manual coordination drag.",
    result: "70%",
    resultLabel: "less manual coordination",
    icon: Workflow,
    tags: ["Workflow automation", "AI routing", "Operations"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    industry: "Sales & CRM",
    title: "Move every lead from first touch to action faster.",
    description: "Incoming opportunities are qualified, enriched, routed, and followed up without waiting on people to remember each step or update the pipeline by hand.",
    result: "3.2×",
    resultLabel: "faster lead response",
    icon: Users,
    tags: ["AI qualification", "CRM automation", "Follow-ups"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    industry: "Data & Reporting",
    title: "Replace spreadsheet chaos with decision-ready reporting.",
    description: "Data from multiple sources is normalized, compared, and surfaced in real time so reporting, alerts, and business decisions are based on current information.",
    result: "80%",
    resultLabel: "less reporting effort",
    icon: BarChart3,
    tags: ["Data automation", "AI reporting", "Analytics"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
]

const outcomeCards = [
  { icon: Clock3, value: "486+", label: "hours saved" },
  { icon: Zap, value: "12.8K", label: "tasks automated" },
  { icon: TrendingUp, value: "92.4%", label: "workflow efficiency" },
  { icon: Bot, value: "8.4K", label: "AI actions" },
]

function CaseVisual({ study, index }) {
  const Icon = study.icon

  return (
    <div className={`deep-panel relative min-h-[360px] overflow-hidden border-b border-white/10 lg:min-h-full lg:border-b-0 ${index % 2 === 1 ? "lg:border-l" : "lg:border-r"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[100px]" />

      <div className="relative flex h-full min-h-[360px] flex-col justify-between p-6 md:p-7">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">Case {study.number}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">{study.industry}</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1217]/80">
            <Icon size={18} className="text-cyan-300" />
          </div>
        </div>

        <div className="media-shell relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1217]/80">
          <img src={study.image} alt={study.title} className="h-56 w-full object-cover object-center opacity-85 md:h-64" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/90 via-[#05070a]/20 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full border border-cyan-300/20 bg-[#091218]/80 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-sm">
            Live result
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[18rem]">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-[#0b1116]/80 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-slate-300">IN</div>
              <p className="mt-3 text-[10px] text-slate-400">Input</p>
              <p className="mt-1 text-[12px] text-white">Data</p>
            </div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><Sparkles size={14} /></div>
              <p className="mt-3 text-[10px] text-cyan-100">AI</p>
              <p className="mt-1 text-[12px] text-cyan-200">Decide</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1116]/80 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-sky-300"><Zap size={14} /></div>
              <p className="mt-3 text-[10px] text-slate-400">Output</p>
              <p className="mt-1 text-[12px] text-white">Action</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              Workflow active
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-slate-400">
          <span>Automation visual</span>
          <span>{index + 1}</span>
        </div>
      </div>
    </div>
  )
}

function ResultCard({ result }) {
  const Icon = result.icon
  return (
    <div className="metric-badge interactive-tilt rounded-[22px] border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5">
          <Icon size={16} className="text-cyan-300" />
        </div>
        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
      </div>
      <p className="mt-5 text-[2rem] font-semibold tracking-[-0.05em] text-white">{result.value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{result.label}</p>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-300/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <TrendingUp size={14} className="text-cyan-300" />
          What changes
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.68fr] lg:items-end">
          <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem]">
            Automation is not the outcome.
            <span className="mt-3 block text-slate-300">Business impact is.</span>
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-8 text-slate-300">
            The best automation is often invisible to the customer. It makes the business faster, more reliable, and easier to scale without extra operational strain.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {caseStudies.map((study, index) => (
            <article key={study.number} className="interactive-tilt overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] shadow-[0_18px_50px_rgba(2,6,23,0.18)]">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <CaseVisual study={study} index={index} />
                </div>

                <div className={`flex flex-col justify-between p-6 md:p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <study.icon size={18} className="text-cyan-300" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-cyan-200">{study.industry}</span>
                    </div>

                    <h3 className="mt-7 max-w-xl text-[2rem] font-semibold tracking-[-0.05em] text-white">{study.title}</h3>
                    <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-300">{study.description}</p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-slate-300">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="rounded-[24px] border border-cyan-300/20 bg-cyan-300/5 p-5">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Potential outcome</p>
                          <p className="mt-2 text-[2.3rem] font-semibold tracking-[-0.05em] text-white">{study.result}</p>
                          <p className="mt-1 text-[11px] text-cyan-200">{study.resultLabel}</p>
                        </div>
                        <div className="hidden items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/5 p-3 sm:flex">
                          <TrendingUp size={22} className="text-cyan-300" />
                        </div>
                      </div>
                    </div>

                    <button type="button" className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-slate-300 transition-colors hover:text-cyan-200">
                      Explore workflow
                      <ArrowUpRight size={14} className="text-cyan-300" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">System-level outcomes</p>
              <h3 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] text-white">What intelligent operations can unlock.</h3>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-slate-300 sm:flex">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300/10"><Sparkles size={12} className="text-cyan-300" /></div>
              Illustrative metrics
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outcomeCards.map((result) => <ResultCard key={result.label} result={result} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
