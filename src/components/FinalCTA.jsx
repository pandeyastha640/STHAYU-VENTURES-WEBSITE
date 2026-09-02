import { ArrowRight, ArrowUpRight, Check, Sparkles, Zap, ShieldCheck } from "lucide-react"
import { AnimatedSection } from "./ui"

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-white/[0.03] rounded-full blur-[200px] opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="rounded-[2.5rem] border border-[#d4b982]/25 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] p-8 sm:p-12 md:p-16 shadow-[0_20px_80px_rgba(212,185,130,0.06),0_40px_120px_rgba(0,0,0,0.9)] backdrop-blur-3xl overflow-hidden relative">
            
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-8 space-y-6">
                <div className="glass-pill-gold">
                  <Sparkles size={13} />
                  <span>Ready to Get Started?</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                  Stop wasting time on manual work. <br />
                  <span className="text-white/60">Let's build the system that runs it for you.</span>
                </h2>

                <p className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Partner with Sthayu to automate repetitive daily tasks, answer client enquiries in seconds, and scale your operations smoothly without extra hiring stress.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="mailto:hello@sthayuventures.com?subject=Discovery%20Call%20with%20Sthayu"
                    className="btn-primary py-4 px-8 text-xs font-bold shadow-[0_0_20px_rgba(212,185,130,0.2)]"
                  >
                    <span>Book a Free Call</span>
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="#assessment"
                    className="btn-secondary py-4 px-7 text-xs font-bold"
                  >
                    <span>Get a Free Automation Assessment</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-[#d4b982]">
                    <Check size={14} />
                    No Upfront Cost or Risk
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck size={14} className="text-[#d4b982]" />
                    100% Confidential
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Zap size={14} className="text-[#d4b982]" />
                    Fast Turnaround
                  </span>
                </div>
              </div>

              {/* Right Column: Mini Live Console Visual */}
              <div className="lg:col-span-4 rounded-2xl border border-[#d4b982]/20 bg-[#050505]/90 p-6 font-mono space-y-4 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold uppercase tracking-[0.12em] text-slate-300">
                    SYSTEM STATUS
                  </span>
                  <span className="text-[#d4b982]">● READY TO DEPLOY</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Setup Timeline:</span>
                    <span className="text-white font-bold">14 - 30 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Data Security:</span>
                    <span className="text-[#d4b982] font-bold">Private & Encrypted</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Typical Time Saved:</span>
                    <span className="text-white font-bold">20+ Hours / Week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">System Ownership:</span>
                    <span className="text-[#d4b982] font-bold">100% Yours</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#d4b982] text-center tracking-wider">
                  BUILT FOR GROWING BUSINESSES
                </div>
              </div>

            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
