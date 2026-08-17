import { useState } from "react"
import { ArrowRight, ArrowUpRight, Sparkles, Activity, Bot, Database, Workflow, Zap } from "lucide-react"
import AIOrb from "./AIOrb"

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
      <style>{`
        .hero-ai-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1.08 / 0.92;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(103,232,249,.14);
          background:
            radial-gradient(circle at 50% 48%, rgba(34,211,238,.12), transparent 24%),
            radial-gradient(circle at 72% 22%, rgba(59,130,246,.10), transparent 28%),
            linear-gradient(145deg, #061a2c 0%, #030c17 72%, #020812 100%);
          box-shadow: 0 45px 110px rgba(0,0,0,.48), inset 0 1px 0 rgba(255,255,255,.04);
        }
        .hero-ai-grid {
          position:absolute; inset:0; opacity:.38;
          background-image: linear-gradient(rgba(103,232,249,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.045) 1px, transparent 1px);
          background-size:36px 36px;
          mask-image: radial-gradient(circle at center, black 10%, transparent 90%);
        }
        .hero-ai-stars {
          position:absolute; inset:0;
          background-image: radial-gradient(circle, rgba(103,232,249,.65) 0 1px, transparent 1.5px);
          background-size:74px 74px;
          opacity:.25;
          animation: heroStars 18s linear infinite;
        }
        .hero-ai-lines { position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .hero-flow { stroke-dasharray: 7 12; animation: heroFlow 2.6s linear infinite; }
        .hero-flow.delay-1 { animation-delay:-.8s; }
        .hero-flow.delay-2 { animation-delay:-1.5s; }
        .hero-node { animation: heroNode 3s ease-in-out infinite; transform-box: fill-box; transform-origin:center; }
        .hero-node.delay-1 { animation-delay:-.7s; }
        .hero-node.delay-2 { animation-delay:-1.4s; }
        .hero-node.delay-3 { animation-delay:-2.1s; }
        .hero-pulse-ring { animation: heroPulse 3.5s ease-out infinite; transform-origin:center; transform-box:fill-box; }
        .hero-pulse-ring.delay-1 { animation-delay:1.2s; }
        .hero-core-shell { animation: heroCore 7s ease-in-out infinite; transform-origin:center; }
        .hero-dashboard { animation: heroDashboard 5s ease-in-out infinite; }
        .hero-dashboard.delay-1 { animation-delay:-2.5s; }
        .hero-scanline { animation: heroScan 5s ease-in-out infinite; }
        @keyframes heroFlow { to { stroke-dashoffset:-38; } }
        @keyframes heroStars { to { transform:translate3d(-36px,36px,0); } }
        @keyframes heroNode { 0%,100% { transform:scale(1); opacity:.7 } 50% { transform:scale(1.45); opacity:1 } }
        @keyframes heroPulse { 0% { transform:scale(.65); opacity:.6 } 75%,100% { transform:scale(1.65); opacity:0 } }
        @keyframes heroCore { 0%,100% { transform:rotate(-2deg) scale(1) } 50% { transform:rotate(2deg) scale(1.035) } }
        @keyframes heroDashboard { 0%,100% { opacity:.72; transform:translateY(0) } 50% { opacity:1; transform:translateY(-3px) } }
        @keyframes heroScan { 0%,100% { transform:translateY(-180px); opacity:0 } 18%,70% { opacity:.55 } 82% { transform:translateY(180px); opacity:0 } }
        .hero-tech-badge { position:absolute; z-index:30; border:1px solid rgba(103,232,249,.14); background:rgba(3,16,29,.78); box-shadow:0 18px 45px rgba(0,0,0,.28); backdrop-filter:blur(16px); }
        .hero-tech-label { position:absolute; z-index:30; border:1px solid rgba(103,232,249,.12); background:rgba(3,15,27,.76); backdrop-filter:blur(14px); }
        @media (max-width: 640px) { .hero-ai-visual { border-radius:26px; aspect-ratio:1 / .94; } }
      `}</style>

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
                <div key={label} className="rounded-2xl border border-cyan-300/10 bg-slate-950/40 px-3 py-3.5 backdrop-blur-xl">
                  <div className="text-[9px] uppercase tracking-[0.16em] text-slate-400">{label}</div>
                  <div className="mt-1 text-base font-bold tracking-[-0.04em] text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[650px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <div className="absolute inset-[8%] rounded-full bg-cyan-400/[0.10] blur-[90px]" />

              <div className="hero-ai-visual">
                <div className="hero-ai-grid" />
                <div className="hero-ai-stars" />

                <svg className="hero-ai-lines" viewBox="0 0 760 650" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#67e8f9" stopOpacity="0" />
                      <stop offset=".48" stopColor="#67e8f9" stopOpacity=".72" />
                      <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="heroCoreGlow">
                      <stop offset="0" stopColor="#e0fbff" />
                      <stop offset=".25" stopColor="#67e8f9" stopOpacity=".95" />
                      <stop offset=".7" stopColor="#0891b2" stopOpacity=".34" />
                      <stop offset="1" stopColor="#0891b2" stopOpacity="0" />
                    </radialGradient>
                    <filter id="heroGlow">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  <g opacity=".65" filter="url(#heroGlow)">
                    <path className="hero-flow" d="M90 120 C210 165 220 280 365 325 S535 470 680 520" fill="none" stroke="url(#heroLine)" strokeWidth="2" />
                    <path className="hero-flow delay-1" d="M55 500 C190 430 250 390 365 325 S525 190 700 135" fill="none" stroke="url(#heroLine)" strokeWidth="1.7" />
                    <path className="hero-flow delay-2" d="M145 70 C260 190 300 210 365 325 S510 525 630 570" fill="none" stroke="url(#heroLine)" strokeWidth="1.4" />
                  </g>

                  <g opacity=".8">
                    <line x1="365" y1="325" x2="145" y2="145" stroke="#67e8f9" strokeOpacity=".18" />
                    <line x1="365" y1="325" x2="625" y2="150" stroke="#67e8f9" strokeOpacity=".16" />
                    <line x1="365" y1="325" x2="135" y2="500" stroke="#3b82f6" strokeOpacity=".18" />
                    <line x1="365" y1="325" x2="635" y2="500" stroke="#3b82f6" strokeOpacity=".18" />
                  </g>

                  <circle className="hero-pulse-ring" cx="365" cy="325" r="105" fill="none" stroke="#67e8f9" strokeOpacity=".32" />
                  <circle className="hero-pulse-ring delay-1" cx="365" cy="325" r="105" fill="none" stroke="#3b82f6" strokeOpacity=".24" />
                  <circle cx="365" cy="325" r="118" fill="url(#heroCoreGlow)" opacity=".24" />

                  {[
                    [145,145,"delay-1"], [625,150,"delay-2"], [135,500,"delay-3"], [635,500,"delay-1"], [365,95,""], [365,555,"delay-2"]
                  ].map(([cx, cy, cls], index) => (
                    <g key={index} className={`hero-node ${cls}`}>
                      <circle cx={cx} cy={cy} r="8" fill="#071c2e" stroke="#67e8f9" strokeWidth="1.5" />
                      <circle cx={cx} cy={cy} r="3" fill="#a5f3fc" />
                    </g>
                  ))}

                  <g className="hero-core-shell">
                    <circle cx="365" cy="325" r="66" fill="#061b2d" stroke="#67e8f9" strokeOpacity=".34" strokeWidth="1.5" />
                    <circle cx="365" cy="325" r="49" fill="none" stroke="#22d3ee" strokeOpacity=".22" strokeDasharray="4 7" />
                    <circle cx="365" cy="325" r="31" fill="url(#heroCoreGlow)" opacity=".8" />
                    <circle cx="365" cy="325" r="13" fill="#dffcff" filter="url(#heroGlow)" />
                  </g>
                </svg>

                <div className="hero-dashboard absolute left-5 top-5 z-20 w-[150px] rounded-2xl border border-cyan-300/10 bg-[#041321]/80 p-3 backdrop-blur-xl sm:left-7 sm:top-7 sm:w-[170px]">
                  <div className="flex items-center justify-between text-[8px] uppercase tracking-[.18em] text-slate-500">
                    <span>AI orchestration</span><Activity size={11} className="text-cyan-300" />
                  </div>
                  <div className="mt-3 flex items-end gap-1.5">
                    {[22,34,27,48,38,55,46,64,51,70].map((height, i) => (
                      <span key={i} className="w-1.5 rounded-full bg-cyan-300/60" style={{ height }} />
                    ))}
                  </div>
                  <div className="mt-2 text-[9px] text-cyan-200">Agents processing · 08</div>
                </div>

                <div className="hero-dashboard delay-1 absolute right-5 top-[30%] z-20 w-[145px] rounded-2xl border border-blue-300/10 bg-[#041321]/80 p-3 backdrop-blur-xl sm:right-7 sm:w-[165px]">
                  <div className="flex items-center gap-2 text-[8px] uppercase tracking-[.18em] text-slate-500"><Database size={11} className="text-blue-300" /> Data flow</div>
                  <div className="mt-3 space-y-2">
                    {["CRM → AI", "AI → WhatsApp", "ERP → Dashboard"].map((item) => (
                      <div key={item} className="flex items-center justify-between text-[9px] text-slate-300"><span>{item}</span><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(103,232,249,.8)]" /></div>
                    ))}
                  </div>
                </div>

                <div className="hero-dashboard absolute bottom-6 left-6 z-20 w-[155px] rounded-2xl border border-cyan-300/10 bg-[#041321]/80 p-3 backdrop-blur-xl sm:left-8 sm:w-[175px]">
                  <div className="flex items-center gap-2 text-[8px] uppercase tracking-[.18em] text-slate-500"><Workflow size={11} className="text-cyan-300" /> Workflow engine</div>
                  <div className="mt-3 flex items-center gap-1.5 text-[9px] text-slate-300">
                    <span className="rounded-md bg-cyan-300/10 px-2 py-1 text-cyan-200">Input</span><span className="text-cyan-400">→</span><span className="rounded-md bg-cyan-300/10 px-2 py-1 text-cyan-200">AI</span><span className="text-cyan-400">→</span><span className="rounded-md bg-blue-300/10 px-2 py-1 text-blue-200">Action</span>
                  </div>
                </div>

                <div className="hero-dashboard delay-1 absolute bottom-6 right-6 z-20 w-[140px] rounded-2xl border border-blue-300/10 bg-[#041321]/80 p-3 backdrop-blur-xl sm:right-8 sm:w-[155px]">
                  <div className="flex items-center gap-2 text-[8px] uppercase tracking-[.18em] text-slate-500"><Zap size={11} className="text-cyan-300" /> Automation</div>
                  <div className="mt-2 text-xl font-bold tracking-[-.06em] text-white">92.4%</div>
                  <div className="mt-1 text-[8px] text-slate-500">system flow efficiency</div>
                </div>

                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative h-[155px] w-[155px] sm:h-[180px] sm:w-[180px]">
                    <div className="absolute inset-0 rounded-full bg-cyan-300/[0.06] blur-2xl" />
                    <AIOrb />
                  </div>
                </div>

                <div className="hero-scanline pointer-events-none absolute left-0 right-0 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

                <div className="hero-tech-badge left-5 top-1/2 z-40 -translate-y-1/2 rounded-full px-3 py-2 text-[8px] font-semibold uppercase tracking-[.18em] text-cyan-200 sm:left-7">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.9)]" />
                  Live intelligence
                </div>

                <div className="hero-tech-badge right-5 top-5 z-40 flex items-center gap-2 rounded-full px-3 py-2 text-[8px] font-semibold uppercase tracking-[.18em] text-slate-300 sm:right-7 sm:top-7">
                  <Bot size={11} className="text-cyan-300" /> AI CORE ONLINE
                </div>

                <div className="hero-tech-label bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full px-4 py-2 text-[8px] uppercase tracking-[.22em] text-slate-400">
                  Input <span className="mx-2 text-cyan-300">→</span> Intelligence <span className="mx-2 text-cyan-300">→</span> Automation <span className="mx-2 text-cyan-300">→</span> Outcome
                </div>
              </div>

              <div className="absolute -bottom-4 left-[12%] hidden rounded-2xl border border-cyan-300/10 bg-[#071b2d]/90 px-4 py-3 text-[9px] uppercase tracking-[.16em] text-slate-400 shadow-xl backdrop-blur-xl sm:block">
                <span className="text-cyan-300">24/7</span> Automation
              </div>

              <button
                type="button"
                aria-label="Activate Sthayu intelligence core"
                onClick={handleCoreClick}
                className={`absolute right-[12%] -top-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-[#071b2d]/90 text-cyan-300 shadow-xl backdrop-blur-xl transition ${pulse ? "scale-125 shadow-[0_0_45px_rgba(34,211,238,.42)]" : ""}`}
              >
                <Sparkles size={17} strokeWidth={1.7} />
              </button>
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
