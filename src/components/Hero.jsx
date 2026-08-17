import { useState } from "react"
import { ArrowRight, ArrowUpRight, Sparkles, Play } from "lucide-react"
import AIOrb from "./AIOrb"

const TECH_VIDEO = "https://www.youtube.com/embed/FVcCIPJO410?autoplay=1&mute=1&loop=1&playlist=FVcCIPJO410&controls=0&modestbranding=1&rel=0&playsinline=1"

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [pulse, setPulse] = useState(false)

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8
    setTilt({ x: y * -1, y: x })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const handleCoreClick = () => {
    setPulse(true)
    window.setTimeout(() => setPulse(false), 900)
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-transparent px-5 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[28%] top-[-80px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[170px]" />
        <div className="absolute right-[4%] top-[12%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.08] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          <div className="relative z-20 max-w-2xl">
            <div className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              Sthayu Ventures · AI + Automation
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/80">
              Intelligent systems for real-world business
            </p>

            <h1 className="mt-4 max-w-2xl text-[2.8rem] font-extrabold leading-[0.94] tracking-[-0.065em] text-white sm:text-[3.8rem] md:text-[4.7rem] lg:text-[4.9rem] xl:text-[5.5rem]">
              Turn business problems into
              <span className="mt-3 block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                intelligent digital systems.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[1rem] leading-8 text-slate-300/90 md:text-[1.08rem]">
              We design AI agents, automation, SaaS products, websites and operating workflows that connect fragmented business processes into one intelligent system.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-[13px] font-bold text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(34,211,238,0.26)]"
              >
                Book Discovery Call
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/45 px-6 py-3.5 text-[13px] font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-900/70"
              >
                Explore Solutions
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-3 gap-2.5 sm:gap-3">
              {[
                ["Lead flow", "24/7"],
                ["Ops latency", "-62%"],
                ["AI responses", "< 3 sec"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-cyan-300/10 bg-slate-950/40 px-3 py-3.5 backdrop-blur-xl"
                >
                  <div className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-1 text-base font-bold tracking-[-0.04em] text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div
              className="hero-tech-stage"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <div className="hero-tech-glow" />

              <div className="hero-video-frame">
                <iframe
                  className="hero-tech-video"
                  src={TECH_VIDEO}
                  title="Futuristic artificial intelligence technology background"
                  loading="eager"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                />

                <div className="hero-video-vignette" />
                <div className="hero-video-scan" />

                <div className="hero-video-label hero-video-label--top">
                  <span className="hero-live-dot" />
                  LIVE SYSTEM VISUALIZATION
                </div>

                <div className="hero-video-label hero-video-label--bottom">
                  <Play size={11} fill="currentColor" />
                  AI · DATA · AUTOMATION
                </div>
              </div>

              <div className="hero-ai-core" aria-hidden="true">
                <AIOrb />
              </div>

              <div className="hero-orbit hero-orbit--one" />
              <div className="hero-orbit hero-orbit--two" />
              <div className="hero-orbit hero-orbit--three" />

              <div className="hero-data-card hero-data-card--top">
                <span>AI CORE</span>
                <strong>ONLINE</strong>
              </div>

              <button
                type="button"
                aria-label="Activate Sthayu intelligence core"
                onClick={handleCoreClick}
                className={`hero-spark-button ${pulse ? "is-active" : ""}`}
              >
                <Sparkles size={17} strokeWidth={1.7} />
              </button>

              <div className="hero-data-card hero-data-card--bottom">
                <span>CONNECTED FLOWS</span>
                <strong>+92.4%</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.28em] text-slate-500">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-300/30" />
          AI · Automation · SaaS · Digital Operations
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-300/30" />
        </div>
      </div>
    </section>
  )
}
