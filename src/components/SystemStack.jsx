import { AnimatedSection, SectionHeading } from "./ui/index.jsx"
import { Building2, Layers3, ShoppingBag, Stethoscope, Factory, Laptop, Check } from "lucide-react"

const industryBlueprints = [
  {
    industry: "Professional & Financial Services",
    icon: Building2,
    sentence: "Streamline client onboarding, document compliance, and financial records.",
    automations: [
      "Automated client intake & identity verification",
      "Instant invoice matching with accounting software",
      "Secure client portal for status and document sharing",
    ],
  },
  {
    industry: "SaaS & Technology",
    icon: Laptop,
    sentence: "Accelerate user support, trials, product onboarding, and billing operations.",
    automations: [
      "AI support assistant resolving technical questions",
      "Automated user trial tracking & CRM syncing",
      "Subscription renewal alerts & churn recovery",
    ],
  },
  {
    industry: "E-Commerce & Retail",
    icon: ShoppingBag,
    sentence: "Drive repeat sales with instant WhatsApp updates and inventory tracking.",
    automations: [
      "WhatsApp order status & shipping notifications",
      "Abandoned cart recovery & product recommendations",
      "Multi-channel inventory sync across store systems",
    ],
  },
  {
    industry: "Real Estate & Property",
    icon: Building2,
    sentence: "Convert property inquiries into booked viewings in seconds.",
    automations: [
      "Instant response to buyer/renter inquiries 24/7",
      "Automated calendar booking for site viewings",
      "Lead qualification & CRM follow-up sequences",
    ],
  },
  {
    industry: "Healthcare & Wellness",
    icon: Stethoscope,
    sentence: "Reduce no-shows and simplify appointment booking and patient check-ins.",
    automations: [
      "Automated WhatsApp & SMS appointment reminders",
      "Digital patient intake forms & calendar scheduling",
      "Routine clinic FAQs answered in plain language",
    ],
  },
  {
    industry: "Manufacturing & Logistics",
    icon: Factory,
    sentence: "Automate supply chain data entry, PO generation, and delivery alerts.",
    automations: [
      "PDF invoice & delivery slip data extraction",
      "Automated purchase order creation & vendor notifications",
      "Low-inventory team alerts on Slack & WhatsApp",
    ],
  },
]

export default function SystemStack() {
  return (
    <section id="industry-solutions" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Layers3, text: "Industry Solutions" }}
            title={
              <>
                Tailored for how your specific <br className="hidden sm:block" />
                <span className="text-white/60">industry operates.</span>
              </>
            }
            description="We build automations configured for the exact tools, compliance needs, and daily workflows of your sector."
          />
        </AnimatedSection>

        {/* 6 Industry Compact Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryBlueprints.map((item, idx) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.industry} delay={idx * 0.08}>
                <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-6 sm:p-7 backdrop-blur-xl hover:border-[#d4b982]/30 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d4b982]/[0.08] border border-[#d4b982]/25 text-[#d4b982]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {item.industry}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                      {item.sentence}
                    </p>

                    {/* 2-3 Example Automations */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-white/5">
                      <div className="text-[10px] uppercase font-mono font-semibold text-slate-400">Example Automations:</div>
                      {item.automations.map((auto) => (
                        <div key={auto} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check size={13} className="text-[#d4b982] shrink-0 mt-0.5" />
                          <span>{auto}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <a
                      href="#assessment"
                      className="text-xs font-semibold text-[#d4b982] hover:text-[#e8d5b5] transition-colors"
                    >
                      Get an industry plan →
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

