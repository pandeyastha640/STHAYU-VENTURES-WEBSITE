import { ArrowUpRight, BarChart3, Bot, BrainCircuit, Check, Database, GitBranch, Sparkles, Workflow } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent agents that understand context, triage requests, and take action across business workflows without constant oversight.",
    tags: ["Research", "Support", "Sales"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect repetitive operations across your people, tools, and systems so the right step happens automatically every time.",
    tags: ["Operations", "Approvals", "Execution"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI Operations",
    description: "Give teams a smarter operating layer by turning scattered information into decisions, next steps, and clear priorities.",
    tags: ["Decision Support", "AI", "Ops"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Turn fragmented business data into dashboards, performance metrics, and live reporting that teams can trust and act on.",
    tags: ["Analytics", "Dashboards", "Insights"],
  },
  {
    number: "05",
    icon: Database,
    title: "CRM Automation",
    description: "Keep every stage of the customer journey moving with synced records, lead handling, follow-ups, and connected updates.",
    tags: ["CRM", "Leads", "Sync"],
  },
  {
    number: "06",
    icon: GitBranch,
    title: "Connected Business Systems",
    description: "Build one intelligent ecosystem where websites, CRM, internal tools, and reporting all share the same source of truth.",
    tags: ["Integrations", "Systems", "APIs"],
  },
]

function AgentVisual() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#060b10] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_52%)]" />

      <div className="pointer-events-none absolute left-[10%] top-[22%] h-14 w-14 rounded-full border border-white/10 bg-[#0a1217]/80 shadow-[0_12px_28px_rgba(2,6,23,0.35)]" />
      <div className="pointer-events-none absolute right-[10%] top-[22%] h-14 w-14 rounded-full border border-white/10 bg-[#0a1217]/80 shadow-[0_12px_28px_rgba(2,6,23,0.35)]" />

      <div className="absolute left-1/2 top-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/5 shadow-[0_0_50px_rgba(34,211,238,0.12)]">
        <div className="absolute inset-4 rounded-full border border-cyan-300/10">
          <div className="flex h-full w-full items-center justify-center">
            <Bot size={22} className="text-cyan-300" strokeWidth={1.3} />
          </div>
        </div>
      </div>

      <div className="absolute left-[8%] top-[18%] z-20 rounded-xl border border-white/10 bg-[#0a1217]/90 px-3 py-2 text-[10px] text-slate-300 whitespace-nowrap">
        Understand
      </div>
      <div className="absolute right-[8%] top-[18%] z-20 rounded-xl border border-white/10 bg-[#0a1217]/90 px-3 py-2 text-[10px] text-slate-300 whitespace-nowrap">
        Decide
      </div>
      <div className="absolute bottom-[15%] left-1/2 z-20 -translate-x-1/2 rounded-xl border border-emerald-300/20 bg-emerald-300/5 px-3 py-2 text-[10px] text-emerald-300 whitespace-nowrap">
        <span className="inline-flex items-center gap-2"><Check size={12} />Execute</span>
      </div>

      <div className="absolute inset-x-[19%] top-[46%] z-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
    </div>
  )
}

function WorkflowVisual() {
  const nodes = [
    { label: "Trigger", x: "20%", y: "24%" },
    { label: "AI", x: "42%", y: "50%" },
    { label: "Action", x: "70%", y: "24%" },
    { label: "Done", x: "82%", y: "72%" },
  ]

  return (
    <div className="relative h-44 overflow-hidden rounded-[24px] border border-white/10 bg-[#060b10] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 180" preserveAspectRatio="none">
        <path d="M90 55 L200 95 L330 55 L410 120" fill="none" stroke="rgba(103,232,249,.28)" strokeWidth="1.5" strokeDasharray="5 6" />
      </svg>
      {nodes.map((node, index) => (
        <div key={node.label} className="absolute z-10" style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}>
          <div className={`rounded-xl border px-3 py-2 shadow-[0_12px_28px_rgba(2,6,23,0.28)] ${index === 1 ? "border-cyan-300/20 bg-cyan-300/5" : "border-white/10 bg-[#0a1217]/90"} whitespace-nowrap`}>
            <span className={`text-[10px] ${index === 1 ? "text-cyan-300" : "text-slate-300"}`}>{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function OperationsVisual() {
  return (
    <div className="relative h-44 overflow-hidden rounded-[24px] border border-white/10 bg-[#060b10] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-300">
        <span>Operations</span>
        <span className="inline-flex items-center gap-2 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Live</span>
      </div>

      <div className="absolute inset-x-5 bottom-14 top-12 z-10 flex items-end justify-center gap-1.5 px-2">
        {[22, 34, 42, 28, 48, 32, 56, 40].map((height, index) => (
          <div key={index} className="w-2 rounded-full bg-gradient-to-t from-blue-500/30 to-cyan-300" style={{ height: `${height}px` }} />
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-3 gap-2">
        {[['Tasks', '1,248'], ['Auto', '87%'], ['Saved', '42h']].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-[#0a1217]/80 p-3">
            <p className="text-[9px] text-slate-400">{label}</p>
            <p className="mt-1 text-[15px] font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsVisual() {
  return (
    <div className="relative h-44 overflow-hidden rounded-[24px] border border-white/10 bg-[#060b10] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.16em] text-slate-300">
        <p>Performance</p>
        <p className="mt-2 text-[1.2rem] font-bold text-white">+42.8%</p>
      </div>
      <svg className="absolute bottom-4 left-4 right-4 h-24 w-[calc(100%-32px)]" viewBox="0 0 500 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="serviceChart" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path d="M0 100 C55 92 70 75 120 82 C165 89 190 62 230 70 C280 82 300 42 350 53 C400 64 420 24 500 10" fill="none" stroke="url(#serviceChart)" strokeWidth="3" />
        <path d="M0 100 C55 92 70 75 120 82 C165 89 190 62 230 70 C280 82 300 42 350 53 C400 64 420 24 500 10 L500 120 L0 120 Z" fill="url(#serviceChart)" opacity="0.08" />
      </svg>
    </div>
  )
}

function DataVisual() {
  return (
    <div className="relative h-44 overflow-hidden rounded-[24px] border border-white/10 bg-[#060b10] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_55%)]" />

      <div className="absolute inset-x-4 top-4 flex justify-between gap-2">
        <div className="rounded-lg border border-white/10 bg-[#0a1217]/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.12em] text-slate-300 whitespace-nowrap">SOURCE</div>
        <div className="rounded-lg border border-white/10 bg-[#0a1217]/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.12em] text-slate-300 whitespace-nowrap">VALIDATE</div>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex justify-between gap-2">
        <div className="rounded-lg border border-white/10 bg-[#0a1217]/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.12em] text-slate-300 whitespace-nowrap">CLEAN</div>
        <div className="rounded-lg border border-white/10 bg-[#0a1217]/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.12em] text-slate-300 whitespace-nowrap">SYNC</div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-24 w-24 rounded-[26px] border border-cyan-300/20 bg-cyan-300/5">
          <div className="absolute inset-3 rounded-[18px] border border-cyan-300/10" />
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-cyan-300/10">
            <Database size={18} className="text-cyan-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceVisual({ type }) {
  if (type === "AI Agents") return <AgentVisual />
  if (type === "Workflow Automation") return <WorkflowVisual />
  if (type === "AI Operations") return <OperationsVisual />
  if (type === "Data & Analytics") return <AnalyticsVisual />
  if (type === "CRM Automation") return <DataVisual />
  return <WorkflowVisual />
}

// Enhanced service item with image background
function EnhancedServiceCard({ number, icon: Icon, title, description, tags, image }) {
  const imageUrls = {
    "AI Agents": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    "Workflow Automation": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    "AI Operations": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    "Data & Analytics": "https://images.unsplash.com/photo-1518716281560-ec2ead6ce9ee?auto=format&fit=crop&w=400&q=80",
    "CRM Automation": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    "Connected Business Systems": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  }

  return (
    <div className="group rounded-[28px] border border-white/10 bg-[#091018]/80 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:border-cyan-300/20 transition-all duration-500 hover:shadow-[0_40px_100px_rgba(34,211,238,0.1)]">
      {/* Image section */}
      <div className="relative h-40 overflow-hidden bg-[#0a1217]">
        <img
          src={imageUrls[title]}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091018] via-[#091018]/30 to-transparent" />
      </div>

      {/* Content section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-[1.8rem] font-extrabold text-white/20">{number}</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
            <Icon size={18} className="text-cyan-300" />
          </div>
        </div>

        <h3 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-white mb-2">
          {title}
        </h3>
        <p className="text-[14px] leading-7 text-slate-300 mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/5 group-hover:text-cyan-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover graphic */}
      <div className="border-t border-white/10 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <ServiceVisual type={title} />
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-[8%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Sparkles size={14} className="text-cyan-300" />
          Intelligent systems
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.7rem]">
            We do not bolt on AI.
            <span className="mt-3 block text-cyan-200">We redesign how work flows.</span>
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-8 text-slate-300">
            Sthayu brings together AI, automation, and business systems into one operating layer that moves work forward without manual bottlenecks.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.number} className="group relative isolate flex h-full min-h-[520px] flex-col gap-5 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(2,6,23,0.28)]">
                <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full bg-cyan-300/10 opacity-0 blur-[70px] transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 shadow-[0_12px_25px_rgba(34,211,238,0.08)]">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">{service.number}</span>
                </div>

                {service.image && (
                  <div className="media-shell relative z-10 overflow-hidden rounded-[20px] border border-white/10 bg-[#0a1217]">
                    <img src={service.image} alt={service.title} className="h-40 w-full object-cover object-center opacity-85 md:h-44" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b10]/90 via-[#060b10]/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-cyan-300/20 bg-[#091218]/80 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-sm">
                      Live operations
                    </div>
                  </div>
                )}

                <div className="relative z-10 mt-1 flex-1 overflow-hidden rounded-[20px] interactive-tilt">
                  <ServiceVisual type={service.title} />
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-white">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-300">{service.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      Sthayu system
                    </div>
                    <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-cyan-300/20 hover:text-cyan-200" aria-label={`Explore ${service.title}`}>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
