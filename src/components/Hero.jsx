import { useState, useEffect } from "react"
import { motion } from "motion/react"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  MessageSquare,
  PhoneCall,
  Sparkles,
  Zap,
} from "lucide-react"

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const LIVE_EVENTS = [
  { id: 1, time: "Just now", type: "Lead Qualified", details: "Enterprise prospect verified via WhatsApp AI (Budget ₹12L+)", status: "Booked" },
  { id: 2, time: "2m ago", type: "Invoice Extracted", details: "Vendor PDF parsed & reconciled with bank ledger (₹2.4L)", status: "Synced" },
  { id: 3, time: "5m ago", type: "Support Triage", details: "Tier-1 billing query resolved autonomously in 2.1s", status: "Resolved" },
]

export default function Hero() {
  const [activeEventIndex, setActiveEventIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % LIVE_EVENTS.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -70
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="glass-pill-gold shadow-[0_0_15px_rgba(212,185,130,0.1)]">
              <Sparkles size={13} className="text-[#d4b982]" />
              AI Agents, Automation & Digital Experiences
            </span>
          </motion.div>

          {/* Bold Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.4rem,5.2vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white max-w-4xl"
          >
            AI Agents & Workflow Automations <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-100 to-[#d4b982] bg-clip-text text-transparent">
              That Scale Your Business Ops
            </span>
          </motion.h1>

          {/* 2-Line Subhead */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-[1.65] font-normal tracking-[-0.01em]"
          >
            Eliminate repetitive manual busywork, connect your daily tools into unified pipelines, and let autonomous AI digital workers run routine operations 24/7.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="btn-primary w-full sm:w-auto"
            >
              <PhoneCall size={14} />
              <span>Book a Free Call</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="btn-secondary w-full sm:w-auto"
            >
              <span>Explore Capabilities</span>
              <ArrowUpRight size={14} className="text-[#d4b982] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Interactive Live Autonomous Pipeline Preview */}
          <motion.div
            variants={fadeUp}
            className="mt-12 w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-4 sm:p-5 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-left"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4b982] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4b982]" />
                </span>
                <span className="text-xs font-semibold text-white">Live Agent Pipeline Telemetry</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">
                Status: Operational (99.98% Uptime)
              </span>
            </div>

            {/* Simulated Live Execution Nodes */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2.5">
              <div className="flex items-center gap-2 rounded-2xl bg-white/[0.03] border border-white/10 p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20">
                  <MessageSquare size={13} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-medium uppercase text-[#d4b982]">Inbound Lead</div>
                  <div className="truncate text-xs font-semibold text-slate-200">WhatsApp / Web</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-white/[0.03] border border-white/10 p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20">
                  <Bot size={13} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-medium uppercase text-[#d4b982]">AI Qualification</div>
                  <div className="truncate text-xs font-semibold text-slate-200">Intent & Budget</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-white/[0.03] border border-white/10 p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20">
                  <CalendarCheck size={13} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-medium uppercase text-[#d4b982]">Auto Booking</div>
                  <div className="truncate text-xs font-semibold text-slate-200">Calendar Locked</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-white/[0.03] border border-white/10 p-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Zap size={13} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-medium uppercase text-emerald-400">CRM Sync</div>
                  <div className="truncate text-xs font-semibold text-slate-200">Deal Created</div>
                </div>
              </div>
            </div>

            {/* Real-time ticker */}
            <div className="mt-3.5 flex items-center justify-between rounded-xl bg-white/[0.02] px-3 py-2 text-xs border border-white/5">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-semibold text-[#d4b982] shrink-0">
                  {LIVE_EVENTS[activeEventIndex].type}:
                </span>
                <span className="truncate text-slate-300">
                  {LIVE_EVENTS[activeEventIndex].details}
                </span>
              </div>
              <span className="shrink-0 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-semibold ml-2">
                {LIVE_EVENTS[activeEventIndex].status}
              </span>
            </div>
          </motion.div>

          {/* 3 Verified Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-2xl"
          >
            {[
              { value: "70%+", label: "Cost Reduction" },
              { value: "24/7", label: "Autonomous Execution" },
              { value: "10x", label: "Ops Velocity" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center ${idx > 0 ? "border-l border-white/10" : ""}`}
              >
                <div className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
