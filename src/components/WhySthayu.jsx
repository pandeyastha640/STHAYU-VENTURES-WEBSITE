import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, Bot, Cpu, Network, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react"
import { AnimatedSection, SectionHeading, GlassCard } from "./ui"

const pillars = [
  {
    id: "agents",
    number: "01",
    title: "AI Digital Workers",
    subtitle: "Trained on your business rules & tools",
    description: "Unlike generic chat widgets, our AI agents understand your exact business workflow. They answer customer questions, qualify new buyer leads, update your software, and know when to alert your staff.",
    icon: Bot,
    accent: "from-cyan-400 to-blue-500",
    features: ["Works on WhatsApp, Website, Email & Phone", "Answers questions in under 3 seconds", "Follows your exact company guidelines"],
    metrics: "94% routine tasks handled",
  },
  {
    id: "fabric",
    number: "02",
    title: "Connected Business Tools",
    subtitle: "Your software working together as one",
    description: "Stop moving data manually. Sthayu connects your accounting software, CRM, website forms, and payment gateways so information flows automatically with zero copy-pasting.",
    icon: Network,
    accent: "from-blue-400 to-indigo-500",
    features: ["Connects all popular software tools", "Instant updates between apps", "Zero manual data entry errors"],
    metrics: "100% accurate data sync",
  },
  {
    id: "engine",
    number: "03",
    title: "Live Business Reports",
    subtitle: "Know what's happening without manual work",
    description: "Stop spending hours creating weekly spreadsheets. Get live updates on sales, customer questions, and operational tasks delivered straight to your WhatsApp, email, or Slack.",
    icon: Cpu,
    accent: "from-indigo-400 to-purple-500",
    features: ["Live overview of sales & enquiries", "Instant alerts when tasks need attention", "Daily or weekly summaries on WhatsApp/Email"],
    metrics: "70% faster business decisions",
  },
  {
    id: "security",
    number: "04",
    title: "Complete Data Privacy",
    subtitle: "Your company information stays protected",
    description: "Your customer data and company records are strictly protected. We never use your private data to train public AI models, and all connections use secure, encrypted channels.",
    icon: ShieldCheck,
    accent: "from-emerald-400 to-cyan-500",
    features: ["Bank-grade data encryption", "Strict access control per employee", "Private and isolated business setup"],
    metrics: "100% private & secure",
  },
]

export default function WhySthayu() {
  const [selectedPillar, setSelectedPillar] = useState(pillars[0])

  return (
    <section id="why-sthayu" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-white/[0.03] rounded-full blur-[170px] opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Sparkles, text: "Why Choose Sthayu" }}
            title={
              <>
                Built to make your business run smoother. <br className="hidden sm:block" />
                <span className="text-white/60">Not just another complicated tool.</span>
              </>
            }
            description="We connect your tools, automate your busywork, and give your team reliable digital assistants so your business can grow without adding more overhead."
            className="max-w-3xl mx-auto"
          />
        </AnimatedSection>

        {/* 4 Pillars Interactive Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left 4 Pillar Selector Cards */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              const isSelected = selectedPillar.id === pillar.id
              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`group relative p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-white/[0.12] bg-gradient-to-r from-[#0a0a0a] to-[#080808] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_40px_-8px_rgba(255,255,255,0.04)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors ${
                          isSelected
                            ? "bg-white/[0.04] border-white/[0.12] text-[#d4d4d8] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                            : "bg-white/5 border-white/10 text-slate-400 group-hover:text-white"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#a1a1aa]">{pillar.number}</span>
                          <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{pillar.subtitle}</p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono font-bold transition-transform duration-300 ${
                        isSelected ? "text-[#d4d4d8] translate-x-1" : "text-slate-500"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Pillar Deep Dive Showcase */}
          <div className="lg:col-span-6 sticky top-28">
            <GlassCard hover={false} glow={false} className="rounded-[2.5rem] p-8 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPillar.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.10] text-[#d4d4d8]">
                        <selectedPillar.icon size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[#a1a1aa] font-bold uppercase tracking-wider">
                          PILLAR {selectedPillar.number}
                        </div>
                        <div className="text-lg font-bold text-white">{selectedPillar.title}</div>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#86efac]/[0.06] text-[#86efac] text-[10px] font-mono font-bold border border-[#86efac]/[0.12]">
                      {selectedPillar.metrics}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedPillar.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="mt-8 space-y-3">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </div>
                    {selectedPillar.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <CheckCircle2 size={16} className="text-[#86efac] shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Want this for your business?</span>
                    <a
                      href="#assessment"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#d4d4d8] hover:text-white transition-colors"
                    >
                      <span>Get Your Free Plan</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  )
}
