import { AnimatedSection, SectionHeading } from "./ui"
import { Building2, Layers3, ShoppingBag, Stethoscope, Factory, Laptop, Check } from "lucide-react"

const industryList = [
  {
    industry: "Professional & Financial Services",
    icon: Building2,
    sentence: "Automate client intake, document collection, compliance verification, and CRM syncing.",
    automations: [
      "Instant client onboarding & document collection",
      "Automated invoice matching & accounting sync",
      "24/7 inquiry qualification & consultation booking"
    ],
  },
  {
    industry: "SaaS & Technology",
    icon: Laptop,
    sentence: "Streamline user trial onboarding, product support helpdesk, and billing workflows.",
    automations: [
      "AI tier-1 technical support & FAQ resolution",
      "Automated trial user follow-up & CRM tracking",
      "Subscription renewal & payment failure alerts"
    ],
  },
  {
    industry: "E-Commerce & Retail",
    icon: ShoppingBag,
    sentence: "Drive higher repeat orders with instant WhatsApp customer support and inventory synchronization.",
    automations: [
      "WhatsApp order tracking & customer support",
      "Automated abandoned cart & lead recovery",
      "Multi-channel inventory sync across systems"
    ],
  },
  {
    industry: "Real Estate & Property",
    icon: Building2,
    sentence: "Capture high-intent buyer inquiries instantly, qualify budgets, and book property viewings.",
    automations: [
      "Instant WhatsApp & web lead response (< 3s)",
      "Automated calendar booking for property visits",
      "CRM follow-up reminders & agent routing"
    ],
  },
  {
    industry: "Healthcare & Wellness",
    icon: Stethoscope,
    sentence: "Reduce no-shows and administrative workload with automated scheduling and patient reminders.",
    automations: [
      "Automated WhatsApp & SMS appointment reminders",
      "Patient intake forms & digital record sync",
      "Routine inquiries & clinic hours assistance"
    ],
  },
  {
    industry: "Manufacturing & Logistics",
    icon: Factory,
    sentence: "Eliminate manual data entry across supplier invoices, order dispatches, and inventory alerts.",
    automations: [
      "PDF invoice reading & automated ERP entry",
      "Real-time shipment status & dispatch notices",
      "Low inventory & reorder threshold alerts"
    ],
  },
]

export default function IndustrySolutions() {
  return (
    <section id="industries" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Layers3, text: "Industry Solutions" }}
            title={
              <>
                Built for how your specific <br className="hidden sm:block" />
                <span className="text-white/60">industry actually works.</span>
              </>
            }
            description="We build customized automations around the exact tools, daily tasks, and workflows of your industry."
          />
        </AnimatedSection>

        {/* 6 Industry Blueprint Compact Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industryList.map((item, idx) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={item.industry} delay={idx * 0.07}>
                <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/80 p-6 flex flex-col justify-between group h-full hover:border-[#d4b982]/30 transition-all duration-300">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4b982]/[0.06] border border-[#d4b982]/20 text-[#d4b982]">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#d4b982] transition-colors">
                        {item.industry}
                      </h3>
                    </div>

                    <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
                      {item.sentence}
                    </p>

                    <div className="mt-4 space-y-2 pt-3 border-t border-white/5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        Example Automations:
                      </div>
                      {item.automations.map((auto) => (
                        <div key={auto} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check size={13} className="text-[#d4b982] shrink-0 mt-0.5" />
                          <span>{auto}</span>
                        </div>
                      ))}
                    </div>
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
