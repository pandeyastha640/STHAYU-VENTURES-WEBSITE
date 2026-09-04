import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  ArrowRight, 
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Check,
  Database,
  FileSpreadsheet,
  FileText,
  Layers,
  Maximize2, 
  MessageSquare,
  Play, 
  RefreshCw,
  Send,
  Sparkles, 
  X,
  Zap
} from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui/index.jsx"

// Local image imports
import imgRevenueHub from "../assets/images/portfolio_revenue_hub_1787841972420.jpg"
import imgIntelligenceConsole from "../assets/images/portfolio_intelligence_console_1787841987404.jpg"
import imgWebhookEngine from "../assets/images/portfolio_webhook_engine_1787842003320.jpg"
import imgDigitalFlagship from "../assets/images/portfolio_digital_flagship_1787842021339.jpg"
import imgVectorRag from "../assets/images/portfolio_vector_rag_1787842039189.jpg"
import imgInventoryOrchestrator from "../assets/images/portfolio_inventory_orchestrator_1787842054281.jpg"
import imgHeroBg from "../assets/images/hero_neural_infrastructure_1787842070922.jpg"

// High-speed preview video loop for creative ad previews
const PREVIEW_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-and-dots-loop-42861-large.mp4"

const categories = [
  "All",
  "AI & Automation",
  "Websites",
  "Apps & Portals",
  "Ads & Creative",
  "Video",
  "Branding & Decks",
]

const showcaseAssets = [
  {
    id: "business-website",
    category: "Websites",
    type: "website",
    title: "High-Performance Business Website",
    oneLiner: "Conversion-optimized desktop & mobile web experience with sub-second page loads.",
    badge: "Web Experience",
    image: imgDigitalFlagship,
    metrics: "Sub-second load · 4.8x higher conversions",
    details: {
      headline: "Engineered to convert high-intent traffic into qualified inquiries.",
      deliverables: ["Responsive desktop + mobile UI", "Dynamic CMS integration", "Integrated lead capture forms", "SEO & Core Web Vitals optimization"],
      tech: "React · Tailwind CSS · Motion · Edge CDN",
    }
  },
  {
    id: "ai-sales-agent",
    category: "AI & Automation",
    type: "agent",
    title: "Autonomous Lead & WhatsApp AI Agent",
    oneLiner: "Qualifies inbound inquiries in under 3 seconds and books sales meetings directly on calendar.",
    badge: "Autonomous AI",
    image: imgRevenueHub,
    metrics: "< 3s response · 24/7 autonomous triage",
    details: {
      headline: "Zero-latency qualification across WhatsApp, Instagram, and web chat.",
      deliverables: ["Multi-channel omnichannel agent", "Strict policy guardrails", "Live calendar booking sync", "Instant CRM lead logging"],
      tech: "Claude/Gemini · WhatsApp Cloud API · Webhooks",
    }
  },
  {
    id: "animated-video-ad",
    category: "Video",
    type: "video",
    title: "Animated Promotional Video Ad",
    oneLiner: "Cinematic short-form 3D motion video engineered for high-engagement paid campaigns.",
    badge: "Motion Video",
    video: PREVIEW_VIDEO_URL,
    image: imgHeroBg,
    metrics: "1080p 60fps · 3.2x higher click-through",
    details: {
      headline: "Thumb-stopping motion graphics tailored for YouTube, LinkedIn, and Meta ads.",
      deliverables: ["3D animated product visuals", "Sound design & voiceover track", "16:9, 9:16 & 1:1 aspect ratios", "Campaign performance hooks"],
      tech: "After Effects · 3D Cinema · Audio Mastering",
    }
  },
  {
    id: "executive-portal",
    category: "Apps & Portals",
    type: "portal",
    title: "Executive Operations & Revenue Portal",
    oneLiner: "Real-time leadership control room unifying sales pipelines, billings, and team KPIs.",
    badge: "Custom Software",
    image: imgIntelligenceConsole,
    metrics: "Real-time sync · Role-based security",
    details: {
      headline: "Custom software replacing cluttered spreadsheets with live business intelligence.",
      deliverables: ["Interactive telemetry dashboards", "Granular role-based RBAC", "Automated daily executive digests", "Stripe & bank ledger sync"],
      tech: "React · TypeScript · PostgreSQL · D3/Recharts",
    }
  },
  {
    id: "social-ad-creative",
    category: "Ads & Creative",
    type: "creative",
    title: "Social Media Creative & Ad Suite",
    oneLiner: "High-impact visual creatives and banners built for B2B LinkedIn & Instagram acquisition.",
    badge: "Campaign Creative",
    image: imgWebhookEngine,
    metrics: "Full creative suite · Ready for ad spend",
    details: {
      headline: "Creative systems designed to build authority and lower customer acquisition costs.",
      deliverables: ["Multi-format static & animated banners", "A/B test creative variants", "Carousel ad frameworks", "Complete brand asset toolkit"],
      tech: "Figma · Design Systems · Motion Graphics",
    }
  },
  {
    id: "interactive-deck",
    category: "Branding & Decks",
    type: "deck",
    title: "Interactive Pitch Deck & Digital Catalogue",
    oneLiner: "Modern investor presentations and interactive product catalogues that leave a lasting impression.",
    badge: "Presentation Design",
    image: imgVectorRag,
    metrics: "Interactive slides · Web & PDF formats",
    details: {
      headline: "Dynamic presentations that stand out in high-stakes funding and enterprise sales calls.",
      deliverables: ["Custom typography & layout architecture", "Interactive clickable prototypes", "Sharable web presentation links", "Print-ready high-res decks"],
      tech: "Figma · Pitch · Interactive Web Decks",
    }
  },
  {
    id: "landing-microsite",
    category: "Websites",
    type: "website",
    title: "Promotional Landing Page & Campaign Microsite",
    oneLiner: "Laser-focused single-purpose landing page built for new product launches and paid traffic.",
    badge: "Landing Page",
    image: imgInventoryOrchestrator,
    metrics: "A/B tested layouts · 100% responsive",
    details: {
      headline: "Clean visual storytelling that guides the visitor directly toward the desired call-to-action.",
      deliverables: ["Frictionless single-page narrative", "Interactive ROI calculators", "Custom animated micro-interactions", "CRM webhook event tracking"],
      tech: "Next.js/React · Tailwind CSS · Vercel",
    }
  },
  {
    id: "workflow-engine",
    category: "AI & Automation",
    type: "automation",
    title: "Connected ERP & Billing Automation",
    oneLiner: "Autonomous 2-way background pipeline eliminating manual invoice reconciliation and data entry.",
    badge: "Workflow Sync",
    image: imgWebhookEngine,
    metrics: "Zero manual typing · 100% audit accuracy",
    details: {
      headline: "Background pipelines connecting accounting, WhatsApp alerts, and inventory tools.",
      deliverables: ["Multi-step trigger automation", "Automated PDF invoice data extraction", "Real-time Slack/WhatsApp alerts", "Zero-downtime webhook architecture"],
      tech: "Node.js · Webhooks · OpenAI/Gemini OCR",
    }
  },
]

const WORKFLOW_DEMOS = [
  {
    id: "lead-flow",
    title: "Lead Triage & Calendar Booking",
    description: "Inbound visitor message triggers instant AI qualification, checks rep availability, and locks the calendar.",
    nodes: [
      { name: "Customer Inquiry", sub: "WhatsApp / Web Chat", icon: MessageSquare, status: "Triggered" },
      { name: "AI Agent Triage", sub: "Intent & Budget Filter", icon: Bot, status: "Analyzed (<0.4s)" },
      { name: "Calendar Invite", sub: "Instant Slot Locked", icon: CalendarCheck, status: "Confirmed" },
      { name: "CRM Contact Sync", sub: "Deal & Timeline Created", icon: Database, status: "Synced" },
    ],
  },
  {
    id: "doc-flow",
    title: "AI Document & Invoice Extraction",
    description: "Vendor PDF uploaded, parsed with zero-shot OCR, verified against PO numbers, and ledger updated.",
    nodes: [
      { name: "Vendor PDF Invoice", sub: "Email Attachment", icon: FileText, status: "Received" },
      { name: "AI Extraction Engine", sub: "Line Items & Taxes", icon: Sparkles, status: "Extracted" },
      { name: "3-Way Reconciliation", sub: "PO & Bank Matching", icon: Check, status: "Matched 100%" },
      { name: "ERP Ledger Post", sub: "Accounting Sync", icon: FileSpreadsheet, status: "Recorded" },
    ],
  },
  {
    id: "alert-flow",
    title: "Omnichannel Team Alert Dispatcher",
    description: "Critical business triggers automatically routed to WhatsApp and Slack with priority escalation.",
    nodes: [
      { name: "Business Trigger", sub: "High-Value Cart / SLA", icon: Zap, status: "Event Fired" },
      { name: "Rules Engine", sub: "Routing Matrix", icon: Layers, status: "Categorized" },
      { name: "WhatsApp Notification", sub: "Account Executive", icon: Send, status: "Delivered" },
      { name: "Escalation Monitor", sub: "Auto-Failover Alert", icon: Bot, status: "Armed" },
    ],
  },
]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedAsset, setSelectedAsset] = useState(null)
  
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0)
  const [simulatingStep, setSimulatingStep] = useState(1)
  const [isSimulating, setIsSimulating] = useState(false)

  const activeWorkflow = WORKFLOW_DEMOS[activeWorkflowIndex]

  const handleSelectWorkflow = (idx) => {
    setActiveWorkflowIndex(idx)
    setSimulatingStep(1)
    setIsSimulating(false)
  }

  const runSimulation = () => {
    if (isSimulating) return
    setIsSimulating(true)
    setSimulatingStep(0)

    let step = 0
    const interval = setInterval(() => {
      step += 1
      if (step <= 4) {
        setSimulatingStep(step)
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setIsSimulating(false)
        }, 1200)
      }
    }, 700)
  }

  const filteredAssets = activeFilter === "All"
    ? showcaseAssets
    : showcaseAssets.filter((item) => item.category === activeFilter)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -70
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Sparkles, text: "Technology & Digital Assets Studio" }}
            title={
              <>
                We build the systems behind your business <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#d4b982] bg-clip-text text-transparent">
                  and the digital experiences customers see.
                </span>
              </>
            }
            description="From autonomous AI agents and connected workflow pipelines to modern websites, digital advertising, video assets, and custom portals — we build the technology and creative assets modern businesses need to scale."
          />
        </AnimatedSection>

        {/* Studio Pillars Strip */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 font-mono">
            {["AI Agents", "Workflow Automation", "Custom Software", "Modern Websites", "Digital Experiences", "Creative & Ads"].map((pillar) => (
              <span
                key={pillar}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4b982]" />
                <span className="text-slate-200">{pillar}</span>
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* =========================================================================
           INTERACTIVE WORKFLOW DEMONSTRATION MODULE
           ========================================================================= */}
        <AnimatedSection delay={0.15}>
          <div className="mt-14 rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-6 sm:p-9 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4b982] font-mono">
                  Interactive Technology Demonstrations
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  How Autonomous Data Pipelines Run In Production
                </h3>
              </div>

              {/* Workflow Selectors */}
              <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 shadow-sm overflow-x-auto">
                {WORKFLOW_DEMOS.map((demo, idx) => (
                  <button
                    key={demo.id}
                    type="button"
                    onClick={() => handleSelectWorkflow(idx)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      activeWorkflowIndex === idx
                        ? "bg-[#d4b982] text-black shadow-sm font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Demo {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Workflow description */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">{activeWorkflow.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{activeWorkflow.description}</p>
              </div>

              <button
                type="button"
                onClick={runSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 rounded-full border border-[#d4b982]/30 bg-[#d4b982]/10 px-4 py-2 text-xs font-semibold text-[#d4b982] hover:bg-[#d4b982]/20 transition-colors cursor-pointer shadow-sm"
              >
                <RefreshCw size={13} className={isSimulating ? "animate-spin text-[#d4b982]" : "text-[#d4b982]"} />
                <span>{isSimulating ? "Processing Flow..." : "Trigger Simulation"}</span>
              </button>
            </div>

            {/* Animated Nodes Visualization */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              {activeWorkflow.nodes.map((node, nodeIdx) => {
                const Icon = node.icon
                const isCurrent = simulatingStep === nodeIdx + 1
                const isCompleted = simulatingStep > nodeIdx + 1 || (simulatingStep === 4 && nodeIdx === 3)

                return (
                  <motion.div
                    key={node.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: nodeIdx * 0.08 }}
                    className={`relative rounded-2xl p-5 border transition-all duration-300 bg-white/[0.02] ${
                      isCurrent
                        ? "border-[#d4b982] shadow-[0_0_30px_rgba(212,185,130,0.15)] ring-1 ring-[#d4b982]/40"
                        : isCompleted
                        ? "border-emerald-500/30 shadow-sm"
                        : "border-white/10 shadow-sm"
                    }`}
                  >
                    {/* Step indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-bold text-slate-300">
                        {nodeIdx + 1}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full ${
                          isCurrent
                            ? "bg-[#d4b982]/20 text-[#d4b982] animate-pulse border border-[#d4b982]/30"
                            : isCompleted
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-white/5 text-slate-400 border border-white/5"
                        }`}
                      >
                        {isCurrent ? "Active" : isCompleted ? "Success" : "Ready"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isCurrent ? "bg-[#d4b982] text-black font-bold" : isCompleted ? "bg-emerald-500 text-black font-bold" : "bg-white/5 text-slate-300 border border-white/10"
                      }`}>
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold text-white">{node.name}</div>
                        <div className="truncate text-[11px] text-slate-400">{node.sub}</div>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">Result:</span>
                      <span className={`font-semibold ${isCompleted ? "text-emerald-400" : "text-slate-300"}`}>
                        {node.status}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* =========================================================================
           PORTFOLIO & CAPABILITY SHOWCASE GRID
           ========================================================================= */}

        {/* Interactive Category Filter Tabs */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 flex items-center justify-start sm:justify-center overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar gap-1.5">
            {categories.map((cat) => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#d4b982] text-black shadow-md font-bold"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Showcase Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredAssets.map((item, idx) => {
              const isVideo = item.type === "video"

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]/90 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#d4b982]/40 hover:shadow-[0_20px_50px_rgba(212,185,130,0.1)] hover:-translate-y-1"
                >
                  {/* Visual Top Preview Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border-b border-white/10">
                    {isVideo && item.video ? (
                      <div className="relative h-full w-full">
                        <video
                          src={item.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={item.image}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                        />
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-mono text-white backdrop-blur-md border border-white/20">
                          <Play size={10} className="text-[#d4b982] fill-[#d4b982]" />
                          <span>Motion Preview</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Top Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md font-mono">
                        {item.badge}
                      </span>
                    </div>

                    {/* Quick Expand Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedAsset(item)}
                      aria-label={`View details for ${item.title}`}
                      className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-[#d4b982] hover:text-black cursor-pointer backdrop-blur-md"
                    >
                      <Maximize2 size={12} />
                    </button>
                  </div>

                  {/* Card Content (Visual -> Title -> One-line description -> Explore/View) */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#d4b982] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[34px] line-clamp-2">
                        {item.oneLiner}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-[#d4b982] font-semibold border-t border-white/10 pt-3">
                        <Zap size={12} className="text-[#d4b982] shrink-0" />
                        <span className="truncate">{item.metrics}</span>
                      </div>
                    </div>

                    {/* Card Action Link */}
                    <div className="mt-5 flex items-center justify-between pt-2 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setSelectedAsset(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-[#d4b982] transition-colors cursor-pointer"
                      >
                        <span>Explore / View</span>
                        <ArrowUpRight size={13} className="text-[#d4b982]" />
                      </button>

                      <button
                        type="button"
                        onClick={() => scrollTo("contact")}
                        className="text-[11px] font-semibold text-slate-400 hover:text-[#d4b982] transition-colors cursor-pointer"
                      >
                        Build this →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Bottom studio discovery strip */}
        <AnimatedSection delay={0.25}>
          <div className="mt-14 rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
            <div className="text-center md:text-left">
              <h4 className="text-base sm:lg font-bold text-white tracking-tight">
                Need a tailored combination of automation, software, or digital assets?
              </h4>
              <p className="mt-1 text-xs text-slate-400">
                We design and build customized systems and creative experiences to match your exact business specifications.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="btn-primary shrink-0"
            >
              <span>Book a Free Call</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimatedSection>

      </div>

      {/* Interactive Quick View Modal */}
      <AnimatePresence>
        {selectedAsset && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAsset(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0a] shadow-2xl text-white"
            >
              {/* Modal Image/Video header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                {selectedAsset.video ? (
                  <video
                    src={selectedAsset.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedAsset.image}
                    alt={selectedAsset.title}
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />

                <button
                  type="button"
                  onClick={() => setSelectedAsset(null)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white border border-white/20 hover:bg-[#d4b982] hover:text-black transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="rounded-full bg-[#d4b982] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-black shadow-sm">
                    {selectedAsset.category} · {selectedAsset.badge}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                    {selectedAsset.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white">Overview</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedAsset.details.headline}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#d4b982] font-semibold">Included Deliverables:</h4>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selectedAsset.details.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check size={14} className="text-[#d4b982] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech / Architecture */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                  <span className="text-slate-400 font-mono">Architecture:</span>
                  <span className="font-semibold text-slate-200">{selectedAsset.details.tech}</span>
                </div>

                {/* Modal CTA Buttons */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedAsset(null)}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/10 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAsset(null)
                      scrollTo("contact")
                    }}
                    className="btn-primary flex items-center gap-2 text-xs"
                  >
                    <span>Build a Similar System</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
