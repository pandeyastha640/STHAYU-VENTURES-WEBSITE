import { useState, useRef } from "react"
import { ArrowRight, ArrowUpRight, Sparkles, Activity, Bot, Database, Workflow, ShieldCheck, Cpu, Zap } from "lucide-react"
import AIOrb from "./AIOrb"

const liveMetrics = [
  { label: "Operational Latency", value: "-74%", detail: "Avg turnaround time" },
  { label: "Lead Response Time", value: "< 2.8s", detail: "24/7 autonomous triage" },
  { label: "Workflow Automation", value: "99.4%", detail: "Execution accuracy" },
  { label: "Data Synchronization", value: "Real-time", detail: "Multi-system unified" },
]

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState("neural")
  const [pulse, setPulse] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8
    setTilt({ x: -y, y: x })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const triggerPulse = () => {
    setPulse(true)
    setTimeout(() => setPulse(false), 800)
  }

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 bg-[#030712]">
      {/* Background Lighting & Spatial Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.18)_0%,rgba(99,102,241,0.12)_35%,transparent_70%)] blur-3xl opacity-75" />
        <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-[5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-mesh-grid opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Strategic Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent px-4 py-1.5 backdrop-blur-xl w-fit shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                Sthayu Intelligence Suite 2.0
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4rem] leading-[1.08]">
              Architecting <br className="hidden sm:block" />
              <span className="text-gradient-cyan">autonomous systems</span> <br className="hidden sm:block" />
              for modern enterprise.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We design specialized AI agents, resilient workflow automation, and custom software infrastructure that unify fragmented operations into one intelligent, self-executing system.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#assessment"
                className="btn-primary py-3.5 px-7 text-sm justify-center shadow-[0_10px_30px_rgba(6,182,212,0.4)]"
              >
                <span>Deploy Autonomous AI</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#services"
                className="btn-secondary py-3.5 px-7 text-sm justify-center"
              >
                <span>Explore Architecture</span>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-cyan-300" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {liveMetrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-cyan-300">
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-200 mt-0.5">
                    {metric.label}
                  </span>
                  <span className="text-[9px] text-slate-400">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-End Interactive AI Core Visual */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className="relative w-full max-w-[560px] aspect-[4/4.2] rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-b from-[#070e24] via-[#040816] to-[#02050f] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-2xl"
            >
              {/* Internal Mesh & Glow */}
              <div className="absolute inset-0 bg-mesh-grid opacity-20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

              {/* Header HUD Bar */}
              <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/25 text-cyan-300">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                      Autonomous Neural Core
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">MODEL: Sthayu-Orchestrator-v2</div>
                  </div>
                </div>

                {/* Quick Trigger Button */}
                <button
                  type="button"
                  onClick={triggerPulse}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <Sparkles size={11} className={pulse ? "animate-spin" : ""} />
                  <span>Pulse Neural</span>
                </button>
              </div>

              {/* 3D Sphere & Particle Core Container */}
              <div className="relative h-[240px] sm:h-[280px] w-full flex items-center justify-center my-2">
                <div className="absolute inset-0 z-0">
                  <AIOrb />
                </div>

                {/* Floating Telemetry Nodes */}
                <div className="absolute top-2 left-2 z-10 p-2.5 rounded-2xl border border-white/10 bg-[#070e24]/90 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-mono text-slate-400">
                    <Activity size={10} className="text-cyan-300" />
                    <span>Lead Agent</span>
                  </div>
                  <div className="text-[11px] font-bold text-white mt-0.5">Triage active · 98.6%</div>
                </div>

                <div className="absolute bottom-2 right-2 z-10 p-2.5 rounded-2xl border border-white/10 bg-[#070e24]/90 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-mono text-slate-400">
                    <Database size={10} className="text-blue-400" />
                    <span>CRM Stream</span>
                  </div>
                  <div className="text-[11px] font-bold text-white mt-0.5">HubSpot ⇄ ERP Synced</div>
                </div>
              </div>

              {/* Bottom Integrated Operating Pipeline */}
              <div className="relative z-20 mt-auto rounded-2xl border border-cyan-400/20 bg-[#050b1c]/95 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center justify-between text-[11px] mb-2.5">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Workflow size={14} className="text-cyan-300" />
                    <span>Continuous Execution Pipeline</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-300 font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-400/20">
                    100% OPERATIONAL
                  </span>
                </div>

                {/* Micro Step Trace */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {[
                    { step: "01 Ingest", desc: "Omnichannel" },
                    { step: "02 Reason", desc: "Cognitive AI" },
                    { step: "03 Execute", desc: "API Actions" },
                    { step: "04 Sync", desc: "Live Storage" },
                  ].map((s, i) => (
                    <div key={s.step} className="rounded-xl border border-white/5 bg-white/[0.03] p-2 text-center">
                      <div className="text-[9px] font-bold text-cyan-300">{s.step}</div>
                      <div className="text-[8px] text-slate-400 mt-0.5 truncate">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

