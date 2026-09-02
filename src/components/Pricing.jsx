import { ArrowRight, Check, Crown, Layers3, Rocket, Sparkles } from "lucide-react"
import { AnimatedSection } from "./ui"

const plans = [
  {
    name: "Starter",
    eyebrow: "Small businesses & teams",
    description: "Automate your highest-priority manual tasks and deploy your first AI assistant.",
    price: "₹9,999",
    period: "/ month",
    icon: Sparkles,
    featured: false,
    cta: "Get Started",
    features: [
      "Up to 3 automated task workflows",
      "1 dedicated AI assistant (Sales or Support)",
      "WhatsApp & website lead integration",
      "Fast response & FAQ training",
      "Weekly performance summary report",
      "Standard email & chat support"
    ],
  },
  {
    name: "Growth",
    eyebrow: "Scaling companies",
    description: "Complete workflow automation across sales leads, support, and daily tool syncing.",
    price: "₹24,999",
    period: "/ month",
    icon: Rocket,
    featured: true,
    badge: "RECOMMENDED",
    cta: "Choose Growth",
    features: [
      "Up to 10 automated task workflows",
      "Multiple specialized AI assistants",
      "CRM, accounting, and spreadsheet sync",
      "Trained on company guides & FAQs",
      "Custom notifications & alerts",
      "Priority technical assistance",
      "Monthly reviews & workflow tuning"
    ],
  },
  {
    name: "Enterprise",
    eyebrow: "High-volume operations",
    description: "Custom software, bespoke business dashboards, and specialized multi-tool integrations.",
    price: "₹49,999",
    period: "/ month",
    icon: Crown,
    featured: false,
    cta: "Contact Enterprise",
    features: [
      "Comprehensive multi-step automations",
      "Full suite of AI digital workers",
      "Custom business portal or dashboard",
      "Integrations with custom or legacy software",
      "Strict data isolation & secure setup",
      "Dedicated technical manager",
      "Continuous system improvements"
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="glass-pill-gold mx-auto">
              <Layers3 size={13} />
              <span>Simple & Transparent Pricing</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Clear, predictable plans. <br className="hidden sm:block" />
              <span className="text-white/60">Built for measurable ROI.</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Choose the automation plan that fits your business stage today. Upgrade or customize as your operations scale.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isFeatured = plan.featured
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 ${
                  isFeatured
                    ? "border-[#d4b982]/40 bg-gradient-to-b from-[#0e0e0e] via-[#090909] to-[#050505] shadow-[0_0_0_1px_rgba(212,185,130,0.15),0_20px_60px_rgba(0,0,0,0.7)] lg:-translate-y-2"
                    : "border-white/[0.08] bg-[#0a0a0a]/80 hover:border-white/15"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#d4b982] px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950 shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                      isFeatured
                        ? "bg-[#d4b982]/[0.08] border-[#d4b982]/30 text-[#d4b982]"
                        : "bg-white/[0.04] border-white/[0.08] text-[#d4d4d8]"
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                      {plan.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed min-h-[36px] font-normal">
                    {plan.description}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1 pb-5 border-b border-white/10">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                  </div>

                  {/* Features List */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                      Included:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check size={14} className="text-[#d4b982] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4">
                  <a
                    href="#assessment"
                    className={`w-full py-3 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? "btn-primary shadow-[0_0_20px_rgba(212,185,130,0.15)]"
                        : "btn-secondary"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note on Custom Setup Costs */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          * Note: Bespoke enterprise software and complex legacy database integrations may involve a one-time onboarding setup depending on project scope.
        </div>
      </div>
    </section>
  )
}
