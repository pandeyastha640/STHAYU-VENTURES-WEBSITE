import InteractiveMetricsCard from "./InteractiveMetricsCard"
import InteractiveDataViz from "./InteractiveDataViz"
import Animated3DBox from "./Animated3DBox"
import AnimatedVisualization from "./AnimatedVisualization"
import Advanced3DVisualization from "./Advanced3DVisualization"
import { Sparkles, Zap } from "lucide-react"

export default function InteractiveShowcase() {
  return (
    <section id="interactive-showcase" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-[6%] top-[8%] h-[420px] w-[420px] rounded-full bg-cyan-300/5 blur-[140px]" />
      <div className="pointer-events-none absolute right-[8%] bottom-[12%] h-[360px] w-[360px] rounded-full bg-blue-500/4 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Sparkles size={14} className="text-cyan-300" />
          Premium visualizations
        </div>

        <h2 className="mt-8 text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem] mb-6">
          See your systems
          <span className="mt-3 block text-slate-300">in real-time 3D.</span>
        </h2>

        <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-300 mb-12">
          Interactive visualizations, live metrics, and animated intelligence dashboards that bring your business operations to life with stunning 3D clarity.
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
              title: "Interactive 3D",
              description: "Rotate, zoom, and explore your system architecture with mouse-driven 3D controls.",
            },
            {
              icon: Sparkles,
              title: "Live Metrics",
              description: "Real-time performance data with animated transitions and trend indicators.",
            },
            {
              icon: Sparkles,
              title: "Network View",
              description: "Visualize all connected systems and data flows with dynamic connection visualization.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[24px] border border-white/10 bg-[#091018]/80 p-6 hover:border-cyan-300/20 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 mb-4">
                <Icon size={18} className="text-cyan-300" />
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
