import { useState } from "react"
import { ArrowRight, ArrowUpRight, Bot, Sparkles, Workflow, Zap } from "lucide-react"

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [pulse, setPulse] = useState(false)

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14
    setTilt({ x: y * -1, y: x })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const handleCoreClick = () => {
    setPulse(true)
    window.setTimeout(() => setPulse(false), 900)
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-[#05070a] px-5 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[160px]" />
        <div className="absolute left-[6%] top-[18%] h-[220px] w-[220px] rounded-full bg-blue-500/8 blur-[120px] float-slow" />
        <div className="absolute right-[8%] top-[12%] h-[240px] w-[240px] rounded-full bg-cyan-500/8 blur-[140px] float-mid" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <div className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.22em] text-cyan-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-cyan-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              AI that works
            </div>

            <h1 className="mt-6 max-w-xl text-[2.75rem] font-extrabold leading-[0.96] tracking-[-0.07em] text-white sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5rem] xl:text-[5.8rem]">
              Turn business problems
              <span className="mt-3 block text-white">
                into
                <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {" "}intelligent digital systems.
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-slate-300 md:text-[1.15rem]">
              Are leads getting missed? Are repetitive tasks slowing your team down? Sthayu designs the AI, automation, websites, apps, and operating workflows that turn business friction into connected execution.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-[13px] font-semibold text-[#041014] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_0_45px_rgba(103,232,249,0.2)]"
              >
                Book Discovery Call
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/5"
              >
                Explore Solutions
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                ["Lead flow", "24/7"],
                ["Ops latency", "-62%"],
                ["AI responses", "< 3 sec"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-[#071017]/80 px-4 py-3 shadow-[0_18px_36px_rgba(2,6,23,0.18)] backdrop-blur-sm">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</div>
                  <div className="mt-1 text-[1.05rem] font-semibold tracking-[-0.04em] text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div
              className="hero-shell interactive-tilt"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <div className="hero-glow" />
              <div className="hero-orbit hero-orbit--one" />
              <div className="hero-orbit hero-orbit--two" />
              <div className="hero-orbit hero-orbit--three" />

              <div className="hero-video-layer" aria-label="Business workflow animation">
                <div className="hero-motion-grid" />
                <div className="hero-motion-ring hero-motion-ring--one" />
                <div className="hero-motion-ring hero-motion-ring--two" />
                <div className="hero-motion-core">
                  <div className="hero-core-pulse" />
                  <Sparkles size={30} className="text-cyan-200" strokeWidth={1.2} />
                </div>
                <div className="hero-data-node hero-data-node--one">Manual</div>
                <div className="hero-data-node hero-data-node--two">AI</div>
                <div className="hero-data-node hero-data-node--three">Flow</div>
                <div className="hero-data-node hero-data-node--four">Ops</div>
                <div className="hero-data-connect hero-data-connect--one" />
                <div className="hero-data-connect hero-data-connect--two" />
                <div className="hero-data-connect hero-data-connect--three" />
                <div className="hero-data-connect hero-data-connect--four" />
              </div>

              <div className="orbit-node orbit-node--fast" style={{ top: "18%", left: "50%" }} />
              <div className="orbit-node orbit-node--slow" style={{ top: "56%", left: "17%" }} />
              <div className="orbit-node orbit-node--slow" style={{ top: "58%", right: "18%" }} />
              <div className="orbit-node orbit-node--fast" style={{ top: "24%", right: "23%" }} />

              <button
                type="button"
                aria-label="Activate Sthayu intelligence core"
                onClick={handleCoreClick}
                className={`ai-sphere ${pulse ? "pulse-active" : ""}`}
              >
                <div className="ai-sphere-inner">
                  <Sparkles size={30} className="text-cyan-200" strokeWidth={1.2} />
                </div>
              </button>

              <div className="absolute left-0 top-6 rounded-full border border-cyan-300/20 bg-[#071017]/70 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-200 shadow-[0_25px_60px_rgba(2,6,23,0.45)] backdrop-blur-md">
                <span className="text-cyan-200">System</span> Online
              </div>

              <div className="absolute right-0 bottom-10 rounded-full border border-emerald-300/20 bg-[#08141a]/70 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-200 shadow-[0_25px_60px_rgba(2,6,23,0.45)] backdrop-blur-md">
                +92.4% <span className="text-emerald-300">Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

