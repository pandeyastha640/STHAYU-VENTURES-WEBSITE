import { ArrowRight, ArrowUpRight, Bot, Check, Sparkles, Zap } from "lucide-react"

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/6 blur-[160px]" />

      <div className="interactive-tilt relative mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(59,130,246,0.04),rgba(255,255,255,0.02))] p-7 shadow-[0_50px_120px_rgba(0,0,0,0.45)] md:p-10 lg:p-14">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />
        <div className="absolute right-8 top-8 h-40 w-40 rounded-full bg-cyan-300/8 blur-[70px]" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-cyan-200">
              <Sparkles size={12} />
              Ready when you are
            </div>

            <h2 className="mt-7 max-w-3xl text-[2.5rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3.2rem] md:text-[4rem]">
              Ready to turn your workflows
              <span className="mt-2 block text-cyan-200">into intelligent systems?</span>
            </h2>

            <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-slate-300">
              Tell us where your business is losing time, creating friction, or depending on manual work. We will help you identify the right automation strategy to start with.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:hello@sthayuventures.com?subject=Discovery%20Call%20with%20Sthayu" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-[13px] font-semibold text-[#041014] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(103,232,249,0.2)]">
                Let&apos;s Build
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a href="#why-sthayu" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/5">
                Explore Sthayu
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-slate-300">
              {['No obligation', 'Business-first strategy', 'Built around your workflow'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={12} className="text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="process-node relative overflow-hidden rounded-[32px] border border-white/10 bg-[#081117]/90 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="media-shell h-[420px] overflow-hidden rounded-[26px]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                  alt="Technology team designing automated systems"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-[26px] bg-gradient-to-t from-[#05070a]/80 via-[#05070a]/30 to-transparent" />

              <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-[#071017]/90 px-3 py-2.5 text-[11px] text-slate-300 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-cyan-300" />
                  AI workflow
                </div>
              </div>

              <div className="absolute bottom-5 right-5 rounded-2xl border border-emerald-300/20 bg-[#08130f]/90 px-3 py-2.5 text-[11px] text-emerald-300 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Check size={12} />
                  System ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
