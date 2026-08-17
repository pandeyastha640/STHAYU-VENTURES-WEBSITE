import { useState } from "react"
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"
import AIOrb from "./AIOrb"

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [pulse, setPulse] = useState(false)

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10
    setTilt({ x: y * -1, y: x })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const handleCoreClick = () => {
    setPulse(true)
    window.setTimeout(() => setPulse(false), 900)
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-transparent px-5 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />
        <div className="absolute left-[6%] top-[18%] h-[220px] w-[220px] rounded-full bg-blue-500/8 blur-[120px] float-slow" />
        <div className="absolute right-[8%] top-[12%] h-[240px] w-[240px] rounded-full bg-violet-500/8 blur-[140px] float-mid" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <div className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.22em] text-cyan-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-cyan-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              AI that works
            </div>

            <h1 className="mt-6 max-w-xl text-[2.75rem] font-extrabold leading-[0.96] tracking-[-0.07em] text-slate-950 sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5rem] xl:text-[5.8rem]">
              Turn business problems
              <span className="mt-3 block text-slate-950">
                into
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  {" "}intelligent digital systems.
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-slate-600 md:text-[1.15rem]">
              Are leads getting missed? Are repetitive tasks slowing your team down? Sthayu designs the AI, automation, websites, apps, and operating workflows that turn business friction into connected execution.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_20px_55px_rgba(37,99,235,0.22)]"
              >
                Book Discovery Call
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-blue-900/10 bg-white/70 px-6 py-3.5 text-[13px] font-semibold text-slate-900 shadow-[0_12px_30px_rgba(30,64,175,0.08)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-white"
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
                <div key={label} className="rounded-2xl border border-blue-900/10 bg-white/65 px-4 py-3 shadow-[0_18px_36px_rgba(30,64,175,0.08)] backdrop-blur-md">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
                  <div className="mt-1 text-[1.05rem] font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
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

              <div className="hero-video-layer" aria-label="Interactive 3D AI workflow">
                <AIOrb />
              </div>

              <div className="absolute left-3 top-6 z-20 rounded-full border border-blue-500/15 bg-white/75 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-700 shadow-[0_20px_50px_rgba(30,64,175,0.12)] backdrop-blur-md">
                <span className="text-blue-600">System</span> Online
              </div>

              <button
                type="button"
                aria-label="Activate Sthayu intelligence core"
                onClick={handleCoreClick}
                className={`absolute right-3 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/20 bg-white/80 text-cyan-600 shadow-[0_15px_35px_rgba(6,182,212,0.14)] backdrop-blur-md transition ${pulse ? "scale-125 shadow-[0_0_40px_rgba(6,182,212,0.35)]" : ""}`}
              >
                <Sparkles size={17} strokeWidth={1.7} />
              </button>

              <div className="absolute bottom-8 left-3 z-20 rounded-full border border-blue-500/15 bg-white/75 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-700 shadow-[0_20px_50px_rgba(30,64,175,0.12)] backdrop-blur-md">
                3D <span className="text-cyan-600">Neural Core</span>
              </div>

              <div className="absolute bottom-8 right-3 z-20 rounded-full border border-emerald-500/15 bg-white/75 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-700 shadow-[0_20px_50px_rgba(30,64,175,0.12)] backdrop-blur-md">
                +92.4% <span className="text-emerald-600">Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
