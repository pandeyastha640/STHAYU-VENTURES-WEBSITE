import { useState } from "react"
import { ArrowRight, ArrowUpRight, Sparkles, Activity, Bot, Database, Workflow } from "lucide-react"
import AIOrb from "./AIOrb"

const metrics = [["Lead flow", "24/7"], ["Ops latency", "-62%"], ["AI responses", "< 3 sec"]]

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [pulse, setPulse] = useState(false)

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * 5
    const y = ((e.clientY - r.top) / r.height - 0.5) * 5
    setTilt({ x: -y, y: x })
  }
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })
  const handleCoreClick = () => {
    setPulse(true)
    window.setTimeout(() => setPulse(false), 900)
  }

  return (
    <section id="hero" className="relative isolate w-full overflow-hidden px-5 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
      <style>{`
        .sv-field{position:absolute;inset:0;overflow:hidden;pointer-events:none}
        .sv-orbit{position:absolute;border:1px solid rgba(103,232,249,.10);border-radius:9999px;box-shadow:inset 0 0 35px rgba(34,211,238,.025),0 0 35px rgba(34,211,238,.025);animation:svOrbit 24s linear infinite}
        .sv-orbit:before{content:"";position:absolute;width:4px;height:4px;left:14%;top:18%;border-radius:50%;background:#67e8f9;box-shadow:0 0 14px rgba(103,232,249,.9)}
        .sv-orbit:after{content:"";position:absolute;width:3px;height:3px;right:16%;bottom:20%;border-radius:50%;background:#60a5fa;box-shadow:0 0 12px rgba(96,165,250,.9)}
        .sv-o1{width:420px;height:420px;left:-120px;top:8%;animation-duration:24s}.sv-o2{width:560px;height:560px;right:-190px;top:18%;animation-duration:30s;animation-direction:reverse}.sv-o3{width:300px;height:300px;left:42%;bottom:-150px;animation-duration:20s}
        .sv-flow{position:absolute;height:1px;background:linear-gradient(90deg,transparent,rgba(103,232,249,.18),transparent);transform-origin:left center;animation:svFlow 7s ease-in-out infinite}.sv-f1{width:38%;left:2%;top:31%;transform:rotate(11deg)}.sv-f2{width:34%;right:3%;top:43%;transform:rotate(-14deg);animation-delay:-2s}.sv-f3{width:42%;left:29%;top:74%;transform:rotate(-5deg);animation-delay:-4s}
        .sv-p{position:absolute;width:3px;height:3px;border-radius:50%;background:#67e8f9;box-shadow:0 0 12px rgba(103,232,249,.9);animation:svParticle 8s ease-in-out infinite}.sv-p1{left:17%;top:23%}.sv-p2{left:73%;top:18%;animation-delay:-2s}.sv-p3{left:83%;top:69%;animation-delay:-4s}.sv-p4{left:31%;top:82%;animation-delay:-6s}
        @keyframes svOrbit{to{transform:rotate(360deg)}}
        @keyframes svFlow{0%,100%{opacity:.15;transform:translateX(-8px)}50%{opacity:.7;transform:translateX(20px)}}
        @keyframes svParticle{0%,100%{transform:translate3d(0,0,0);opacity:.25}50%{transform:translate3d(20px,-24px,0);opacity:1}}
        .hero-ai-visual{position:relative;width:100%;height:clamp(500px,48vw,650px);overflow:hidden;border-radius:34px;border:1px solid rgba(103,232,249,.14);background:radial-gradient(circle at 50% 46%,rgba(34,211,238,.12),transparent 25%),linear-gradient(145deg,#061a2c,#030c17 72%,#020812);box-shadow:0 45px 110px rgba(0,0,0,.48),inset 0 1px 0 rgba(255,255,255,.04)}
        .hero-ai-grid{position:absolute;inset:0;opacity:.38;background-image:linear-gradient(rgba(103,232,249,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(103,232,249,.045) 1px,transparent 1px);background-size:36px 36px;mask-image:radial-gradient(circle at center,black 10%,transparent 90%)}
        .hero-ai-stars{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(103,232,249,.65) 0 1px,transparent 1.5px);background-size:74px 74px;opacity:.25;animation:heroStars 18s linear infinite}
        .hero-ai-lines{position:absolute;inset:0;width:100%;height:100%}.hero-flow-line{stroke-dasharray:7 12;animation:heroFlow 2.6s linear infinite}.hero-flow-line.d1{animation-delay:-.8s}.hero-flow-line.d2{animation-delay:-1.5s}
        .hero-node{animation:heroNode 3s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.hero-node.d1{animation-delay:-.7s}.hero-node.d2{animation-delay:-1.4s}.hero-node.d3{animation-delay:-2.1s}.hero-pulse-ring{animation:heroPulse 3.5s ease-out infinite;transform-origin:center;transform-box:fill-box}.hero-pulse-ring.d1{animation-delay:1.2s}.hero-core-shell{animation:heroCore 7s ease-in-out infinite;transform-origin:center}.hero-dashboard{animation:heroDashboard 5s ease-in-out infinite}.hero-dashboard.d1{animation-delay:-2.5s}.hero-scanline{animation:heroScan 5s ease-in-out infinite}
        @keyframes heroFlow{to{stroke-dashoffset:-38}}@keyframes heroStars{to{transform:translate3d(-36px,36px,0)}}@keyframes heroNode{0%,100%{transform:scale(1);opacity:.7}50%{transform:scale(1.45);opacity:1}}@keyframes heroPulse{0%{transform:scale(.65);opacity:.6}75%,100%{transform:scale(1.65);opacity:0}}@keyframes heroCore{0%,100%{transform:rotate(-2deg) scale(1)}50%{transform:rotate(2deg) scale(1.035)}}@keyframes heroDashboard{0%,100%{opacity:.72;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}@keyframes heroScan{0%,100%{transform:translateY(-180px);opacity:0}18%,70%{opacity:.55}82%{transform:translateY(180px);opacity:0}}
        .hero-tech-badge{position:absolute;z-index:30;border:1px solid rgba(103,232,249,.14);background:rgba(3,16,29,.88);box-shadow:0 18px 45px rgba(0,0,0,.28);backdrop-filter:blur(16px)}
        @media(max-width:640px){.hero-ai-visual{height:500px;border-radius:26px}.hero-dashboard{transform:scale(.88);transform-origin:top left}.hero-dashboard.d1{transform-origin:top right}}
      `}</style>

      <div className="sv-field" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.08),transparent_34%)]" />
        <div className="sv-orbit sv-o1" /><div className="sv-orbit sv-o2" /><div className="sv-orbit sv-o3" />
        <div className="sv-flow sv-f1" /><div className="sv-flow sv-f2" /><div className="sv-flow sv-f3" />
        <span className="sv-p sv-p1" /><span className="sv-p sv-p2" /><span className="sv-p sv-p3" /><span className="sv-p sv-p4" />
        <div className="absolute left-[28%] top-[-80px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[170px]" />
        <div className="absolute right-[4%] top-[12%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.07] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          <div className="relative z-20 max-w-2xl lg:pt-8">
            <div className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300"><span className="relative flex h-2 w-2"><span className="absolute h-2 w-2 animate-ping rounded-full bg-cyan-400 opacity-60"/><span className="relative h-2 w-2 rounded-full bg-cyan-300"/></span>Sthayu Ventures · AI + Automation</div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/80">Intelligent systems for real-world business</p>
            <h1 className="mt-4 max-w-2xl text-[2.8rem] font-extrabold leading-[0.94] tracking-[-0.065em] text-white sm:text-[3.8rem] md:text-[4.7rem] lg:text-[4.9rem] xl:text-[5.5rem]">Turn business problems into<span className="mt-3 block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">intelligent digital systems.</span></h1>
            <p className="mt-7 max-w-xl text-[1rem] leading-8 text-slate-300/90 md:text-[1.08rem]">We design AI agents, automation, SaaS products, websites and operating workflows that connect fragmented business processes into one intelligent system.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#assessment" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-[13px] font-bold text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.18)] transition-all hover:-translate-y-1">Book Discovery Call<ArrowRight size={16}/></a><a href="#services" className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/45 px-6 py-3.5 text-[13px] font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-300/35">Explore Solutions<ArrowUpRight size={16}/></a></div>
            <div className="mt-9 grid max-w-xl grid-cols-3 gap-2.5 sm:gap-3">{metrics.map(([label,value])=><div key={label} className="rounded-2xl border border-cyan-300/10 bg-slate-950/40 px-3 py-3.5 backdrop-blur-xl"><div className="text-[9px] uppercase tracking-[0.16em] text-slate-400">{label}</div><div className="mt-1 text-base font-bold text-white">{value}</div></div>)}</div>
          </div>

          <div className="relative z-10 flex min-w-0 justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px]" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:`perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}>
              <div className="pointer-events-none absolute inset-[8%] rounded-full bg-cyan-400/[0.10] blur-[90px]" />
              <div className="hero-ai-visual">
                <div className="hero-ai-grid"/><div className="hero-ai-stars"/>
                <svg className="hero-ai-lines" viewBox="0 0 760 650" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#67e8f9" stopOpacity="0"/><stop offset=".48" stopColor="#67e8f9" stopOpacity=".72"/><stop offset="1" stopColor="#3b82f6" stopOpacity="0"/></linearGradient><radialGradient id="heroCoreGlow"><stop offset="0" stopColor="#e0fbff"/><stop offset=".25" stopColor="#67e8f9" stopOpacity=".95"/><stop offset=".7" stopColor="#0891b2" stopOpacity=".34"/><stop offset="1" stopColor="#0891b2" stopOpacity="0"/></radialGradient><filter id="heroGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g opacity=".65" filter="url(#heroGlow)"><path className="hero-flow-line" d="M90 120 C210 165 220 280 365 325 S535 470 680 520" fill="none" stroke="url(#heroLine)" strokeWidth="2"/><path className="hero-flow-line d1" d="M55 500 C190 430 250 390 365 325 S525 190 700 135" fill="none" stroke="url(#heroLine)" strokeWidth="1.7"/><path className="hero-flow-line d2" d="M145 70 C260 190 300 210 365 325 S510 525 630 570" fill="none" stroke="url(#heroLine)" strokeWidth="1.4"/></g><g opacity=".8"><line x1="365" y1="325" x2="145" y2="145" stroke="#67e8f9" strokeOpacity=".18"/><line x1="365" y1="325" x2="625" y2="150" stroke="#67e8f9" strokeOpacity=".16"/><line x1="365" y1="325" x2="135" y2="500" stroke="#3b82f6" strokeOpacity=".18"/><line x1="365" y1="325" x2="635" y2="500" stroke="#3b82f6" strokeOpacity=".18"/></g><circle className="hero-pulse-ring" cx="365" cy="325" r="105" fill="none" stroke="#67e8f9" strokeOpacity=".32"/><circle className="hero-pulse-ring d1" cx="365" cy="325" r="105" fill="none" stroke="#3b82f6" strokeOpacity=".24"/><circle cx="365" cy="325" r="118" fill="url(#heroCoreGlow)" opacity=".24"/>{[[145,145,"d1"],[625,150,"d2"],[135,500,"d3"],[635,500,"d1"],[365,95,""],[365,555,"d2"]].map(([cx,cy,cls],i)=><g key={i} className={`hero-node ${cls}`}><circle cx={cx} cy={cy} r="8" fill="#071c2e" stroke="#67e8f9" strokeWidth="1.5"/><circle cx={cx} cy={cy} r="3" fill="#a5f3fc"/></g>)}<g className="hero-core-shell"><circle cx="365" cy="325" r="66" fill="#061b2d" stroke="#67e8f9" strokeOpacity=".34" strokeWidth="1.5"/><circle cx="365" cy="325" r="49" fill="none" stroke="#22d3ee" strokeOpacity=".22" strokeDasharray="4 7"/><circle cx="365" cy="325" r="31" fill="url(#heroCoreGlow)" opacity=".8"/><circle cx="365" cy="325" r="13" fill="#dffcff" filter="url(#heroGlow)"/></g></svg>

                <div className="hero-dashboard absolute left-5 top-5 z-20 w-[150px] rounded-2xl border border-cyan-300/10 bg-[#041321]/90 p-3 backdrop-blur-xl sm:left-7 sm:top-7 sm:w-[170px]"><div className="flex items-center justify-between text-[8px] uppercase tracking-[.18em] text-slate-500"><span>AI orchestration</span><Activity size={11} className="text-cyan-300"/></div><div className="mt-3 flex items-end gap-1.5">{[22,34,27,48,38,55,46,64,51,70].map((h,i)=><span key={i} className="w-1.5 rounded-full bg-cyan-300/60" style={{height:h}}/>)}</div><div className="mt-2 text-[9px] text-cyan-200">Agents processing · 08</div></div>
                <div className="hero-dashboard d1 absolute right-5 top-[30%] z-20 w-[145px] rounded-2xl border border-blue-300/10 bg-[#041321]/90 p-3 backdrop-blur-xl sm:right-7 sm:w-[165px]"><div className="flex items-center gap-2 text-[8px] uppercase tracking-[.18em] text-slate-500"><Database size={11} className="text-blue-300"/>Data flow</div><div className="mt-3 space-y-2">{["CRM → AI","AI → WhatsApp","ERP → Dashboard"].map(item=><div key={item} className="flex items-center justify-between text-[9px] text-slate-300"><span>{item}</span><span className="h-1.5 w-1.5 rounded-full bg-cyan-300"/></div>)}</div></div>

                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"><div className="relative h-[155px] w-[155px] sm:h-[180px] sm:w-[180px]"><div className="absolute inset-0 rounded-full bg-cyan-300/[0.06] blur-2xl"/><AIOrb/></div></div>
                <div className="hero-scanline pointer-events-none absolute left-0 right-0 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"/>
                <div className="hero-tech-badge left-5 top-1/2 z-40 -translate-y-1/2 rounded-full px-3 py-2 text-[8px] font-semibold uppercase tracking-[.18em] text-cyan-200 sm:left-7"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300"/>Live intelligence</div>
                <button type="button" aria-label="Activate Sthayu intelligence core" onClick={handleCoreClick} className={`hero-tech-badge right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-cyan-300 transition sm:right-7 ${pulse ? "scale-125 shadow-[0_0_45px_rgba(34,211,238,.42)]" : "hover:scale-110"}`}><Sparkles size={15}/></button>

                {/* Fixed bottom footer: it has its own reserved 60px zone and never sits underneath the cards. */}
                <div className="absolute bottom-0 left-0 right-0 z-40 h-[66px] border-t border-white/10 bg-[#041321]/95 px-4 backdrop-blur-xl sm:px-6"><div className="flex h-full min-w-0 items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300"><Workflow size={14}/></div><div className="min-w-0"><p className="truncate text-[10px] font-semibold text-white sm:text-[11px]">Connected business system</p><p className="truncate text-[8px] text-slate-500 sm:text-[9px]">Leads → AI → CRM → Follow-up</p></div></div><span className="hidden shrink-0 items-center gap-2 text-[8px] uppercase tracking-[.16em] text-slate-500 sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300"/>Running</span></div></div>
              </div>

              <div className="mt-4 grid w-full grid-cols-2 gap-3 sm:mt-5 sm:gap-4"><MiniValueCard label="Your team" title="Focus on decisions"/><MiniValueCard label="Sthayu" title="Runs repetitive work" blue/></div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 text-center text-[10px] uppercase tracking-[0.28em] text-slate-500"><span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-cyan-300/30 sm:block"/>AI · Automation · SaaS · Digital Operations<span className="hidden h-px w-12 bg-gradient-to-l from-transparent to-cyan-300/30 sm:block"/></div>
      </div>
    </section>
  )
}

function MiniValueCard({ label, title, blue = false }) {
  return <div className={`rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${blue ? "border-blue-300/10 bg-[#071b2d]/90 hover:border-blue-300/20" : "border-cyan-300/10 bg-[#071b2d]/90 hover:border-cyan-300/20"}`}><p className="text-[8px] uppercase tracking-[0.15em] text-slate-500">{label}</p><p className="mt-1 text-[10px] font-semibold text-white sm:text-[11px]">{title}</p></div>
}
