import { ArrowRight, Bot, Check, Crown, Gauge, Headphones, Layers3, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react"

const plans = [
  {
    name: "Starter",
    eyebrow: "For small teams",
    description: "A lean automation layer for the processes that slow people down every day.",
    price: "₹9,999",
    period: "/ month",
    icon: Sparkles,
    featured: false,
    features: ["Up to 3 automation workflows", "1 AI-powered workflow", "Basic integrations", "Monthly performance report", "Email support"],
  },
  {
    name: "Growth",
    eyebrow: "For scaling businesses",
    description: "A connected operating layer for sales, ops, support, and reporting across critical workflows.",
    price: "₹24,999",
    period: "/ month",
    icon: Rocket,
    featured: true,
    features: ["Up to 10 automation workflows", "5 AI-powered workflows", "CRM and business integrations", "Custom workflow logic", "Priority support", "Monthly optimization review"],
  },
  {
    name: "Scale",
    eyebrow: "For automation-led teams",
    description: "Advanced deployment across your business with deeper intelligence and broader orchestration.",
    price: "₹49,999",
    period: "/ month",
    icon: Crown,
    featured: false,
    features: ["Unlimited core workflows", "Advanced AI agents", "Multi-system integrations", "Advanced analytics", "Dedicated automation strategy", "Priority implementation support"],
  },
]

const comparison = [
  ["AI workflows", "1", "5", "Advanced"],
  ["Automation workflows", "3", "10", "Unlimited"],
  ["Integrations", "Basic", "Advanced", "Custom"],
  ["Analytics", "Basic", "Advanced", "Enterprise"],
  ["Optimization", "Monthly", "Monthly", "Dedicated"],
]

function PlanCard({ plan }) {
  const Icon = plan.icon

  return (
    <div className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 md:p-7 ${plan.featured ? "border-cyan-300/20 bg-cyan-300/5 shadow-[0_30px_80px_rgba(34,211,238,0.1)]" : "border-white/10 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"}`}>
      {plan.featured && (
        <div className="absolute right-5 top-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-cyan-200">
          Most popular
        </div>
      )}

      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon size={18} className={plan.featured ? "text-cyan-300" : "text-slate-300"} />
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-slate-400">{plan.eyebrow}</p>
        <h3 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] text-white">{plan.name}</h3>
        <p className="mt-3 min-h-[56px] text-[15px] leading-7 text-slate-300">{plan.description}</p>

        <div className="mt-7 flex items-end gap-1">
          <span className="text-[2.3rem] font-semibold tracking-[-0.05em] text-white">{plan.price}</span>
          <span className="mb-1 text-[11px] text-slate-400">{plan.period}</span>
        </div>

        <button type="button" className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${plan.featured ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-300/15" : "border-white/10 bg-white/5 text-slate-200 hover:border-white/15 hover:bg-white/10"}`}>
          Start with {plan.name}
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="my-7 h-px bg-white/10" />

      <div className="relative flex-1">
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">What&apos;s included</p>
        <div className="mt-5 space-y-3.5">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300"><Check size={10} /></div>
              <span className="text-[14px] leading-6 text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ComparisonRow({ row, index }) {
  return (
    <div className={`grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-3 px-5 py-4 ${index % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
      {row.map((item, itemIndex) => (
        <div key={`${item}-${itemIndex}`} className={`text-[12px] ${itemIndex === 0 ? "text-slate-300" : itemIndex === 3 ? "text-cyan-200" : "text-slate-400"}`}>
          {item}
        </div>
      ))}
    </div>
  )
}

function EnterpriseCard() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.06),transparent_35%)]" />
      <div className="relative grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
            <ShieldCheck size={14} className="text-cyan-300" />
            Custom automation
          </div>
          <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-white">Need a system built around your business?</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-300">
            For larger organizations, Sthayu can design custom AI agents, integrations, workflow logic, and reporting around your exact operational model.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-slate-300">
            {['Custom AI agents', 'Private workflows', 'Advanced integrations', 'Dedicated support'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={12} className="text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/15">
          Talk to Sthayu
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-300/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Layers3 size={14} className="text-cyan-300" />
          Simple, scalable pricing
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem]">
            Start small.
            <span className="mt-3 block text-slate-300">Scale the intelligence.</span>
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-8 text-slate-300">
            Choose the level of automation that matches your business today, and grow into a more connected, intelligent operating model as your systems mature.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            ["Workflow design included", "Workflow"],
            ["AI configuration included", "Bot"],
            ["Ongoing support available", "Headphones"],
          ].map(([label, iconName]) => {
            const Icon = iconName === "Workflow" ? Workflow : iconName === "Bot" ? Bot : Headphones
            return (
              <div key={label} className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.02] px-5 py-4 text-[13px] text-slate-300">
                <Icon size={14} className="text-cyan-300" />
                {label}
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#091019] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_55%)]" />
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Platform architecture</p>
              <h3 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white">Built for scale, not sprawl.</h3>

              <div className="relative mt-8 h-52">
                <div className="absolute left-8 right-8 top-10 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
                <div className="absolute left-10 right-10 bottom-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[26px] border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_40px_rgba(34,211,238,0.14)]">
                  <Sparkles size={22} className="text-cyan-300" />
                </div>

                {[
                  ["Data", "left-4 top-6"],
                  ["Workflow", "right-4 top-10"],
                  ["AI", "left-2 bottom-8"],
                  ["Ops", "right-2 bottom-8"],
                ].map(([label, position]) => (
                  <div key={label} className={`absolute ${position} rounded-2xl border border-white/10 bg-[#0b1116]/90 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-slate-300`}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Compare capabilities</p>
              <h3 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] text-white">More automation. More leverage.</h3>
            </div>

            <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.02]">
              <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-4 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                <div>Capability</div>
                <div>Starter</div>
                <div className="text-cyan-200">Growth</div>
                <div>Scale</div>
              </div>
              {comparison.map((row, index) => <ComparisonRow key={row[0]} row={row} index={index} />)}
            </div>
          </div>
        </div>

        <div className="mt-8"><EnterpriseCard /></div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-slate-400">
            <Gauge size={13} className="text-cyan-300" />
            Built for measurable efficiency
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-slate-300">
            <span>No unnecessary complexity</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-500 sm:block" />
            <span>Scale when you&apos;re ready</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-500 sm:block" />
            <span>Designed around your workflows</span>
          </div>
        </div>
      </div>
    </section>
  )
}
