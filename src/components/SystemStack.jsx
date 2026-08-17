import { ArrowRight, Building2, Database, Layers3, LineChart, Sparkles, Workflow } from "lucide-react"

const stacks = [
  {
    industry: "Professional Services",
    detail: "Website + lead capture + CRM + AI follow-up + reporting",
    icon: Building2,
  },
  {
    industry: "D2C / E-commerce",
    detail: "Orders + customer journeys + WhatsApp + retention flows + analytics",
    icon: LineChart,
  },
  {
    industry: "Education / Coaching",
    detail: "Admissions + onboarding + automations + support + dashboards",
    icon: Layers3,
  },
  {
    industry: "Real Estate",
    detail: "Lead qualification + AI calling + CRM + follow-up + sales visibility",
    icon: Workflow,
  },
  {
    industry: "Healthcare Ops",
    detail: "Scheduling + contact + intake + retention + operations workflows",
    icon: Database,
  },
  {
    industry: "Manufacturing / Logistics",
    detail: "Operations visibility + alerts + document workflows + reporting",
    icon: Sparkles,
  },
]

export default function SystemStack() {
  return (
    <section id="system-stack" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-[320px] w-[320px] rounded-full bg-cyan-300/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Layers3 size={14} className="text-cyan-300" />
          Integrated systems
        </div>

        <div className="mt-8 max-w-4xl">
          <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem]">
            Built for the way real businesses operate.
            <span className="mt-3 block text-slate-300">Not a one-size-fits-all automation template.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stacks.map((stack) => {
            const Icon = stack.icon
            return (
              <div key={stack.industry} className="group rounded-[24px] border border-white/10 bg-[#091018]/80 p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#0b131b]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon size={18} className="text-cyan-300" />
                </div>
                <h3 className="mt-5 text-[1.2rem] font-semibold tracking-[-0.04em] text-white">{stack.industry}</h3>
                <p className="mt-3 text-[14px] leading-7 text-slate-300">{stack.detail}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-[30px] border border-white/10 bg-[#081117]/90 p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">SaaS vision</p>
              <h3 className="mt-3 text-[2.2rem] font-semibold tracking-[-0.05em] text-white">From service work to reusable systems.</h3>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300">
                Every workflow Sthayu creates can become a reusable business capability: a dashboard, an agent, a workflow, a product function, and eventually a digital operating layer for growth.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#0d141a]/80 p-5">
              <div className="space-y-3">
                {['Service', 'Automation', 'Workflow', 'Product', 'SaaS'].map((item, idx) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-[10px] font-medium uppercase tracking-[0.12em] text-cyan-200">{idx + 1}</div>
                    <div className="flex-1 text-[14px] text-slate-200">{item}</div>
                    {idx < 4 && <ArrowRight size={14} className="text-cyan-300" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
