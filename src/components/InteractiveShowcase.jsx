import { lazy } from "react"
import { Sparkles, Zap } from "lucide-react"

const InteractiveMetricsCard = lazy(() => import("./InteractiveMetricsCard"))
const InteractiveDataViz = lazy(() => import("./InteractiveDataViz"))
const Animated3DBox = lazy(() => import("./Animated3DBox"))
const AnimatedVisualization = lazy(() => import("./AnimatedVisualization"))
const Advanced3DVisualization = lazy(() => import("./Advanced3DVisualization"))

export default function InteractiveShowcase() {
  return (
    <section id="interactive-showcase" className="relative overflow-hidden bg-[#050505] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-[6%] top-[8%] h-[420px] w-[420px] rounded-full bg-white/[0.02] blur-[140px]" />
      <div className="pointer-events-none absolute right-[8%] bottom-[12%] h-[360px] w-[360px] rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4b982]/30 bg-[#d4b982]/[0.06] px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4b982]">
          <Sparkles size={14} className="text-[#d4b982]" />
          Interactive Technology
        </div>

        <h2 className="mt-8 text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem] mb-6">
          See how your connected systems
          <span className="mt-3 block text-slate-300">work together in real time.</span>
        </h2>

        <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-300 mb-12">
          Explore interactive models of your business automations, connected tools, and performance metrics in clear visual displays.
        </p>

        {/* Main visualization grid */}
        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {/* Metrics card - full width on mobile */}
          <div className="lg:col-span-2">
            <InteractiveMetricsCard />
          </div>

          {/* 3D Box visualization */}
          <div>
            <Animated3DBox />
          </div>

          {/* Data Network visualization */}
          <div>
            <InteractiveDataViz />
          </div>

          {/* Advanced 3D Architecture */}
          <div className="lg:col-span-2">
            <Advanced3DVisualization />
          </div>
        </div>

        {/* Canvas-based animation */}
        <div className="mb-6">
          <AnimatedVisualization />
        </div>

        {/* Feature cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Interactive System Models",
              description: "Explore how data moves between your software, CRM, and communication tools.",
            },
            {
              icon: Sparkles,
              title: "Real-Time Stats",
              description: "Check live response times, completed tasks, and system uptime in real time.",
            },
            {
              icon: Sparkles,
              title: "Connected Network",
              description: "See how all your business tools link together seamlessly without data silos.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[24px] border border-white/10 bg-[#050505]/80 p-6 hover:border-[#d4b982]/30 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4b982]/20 bg-[#d4b982]/[0.06] mb-4">
                <Icon size={18} className="text-[#d4b982]" />
              </div>
              <h3 className="text-[1.1rem] font-semibold text-white mb-2">{title}</h3>
              <p className="text-[14px] text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
