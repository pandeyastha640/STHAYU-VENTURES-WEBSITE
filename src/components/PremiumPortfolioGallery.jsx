import { useState } from "react"
import { ArrowUpRight, Bot, Code2, Database, Globe, Sparkles, Workflow, Zap, Layers } from "lucide-react"

const filterCategories = ["All Architectures", "AI Agents", "Workflow Engines", "Custom SaaS", "Web Platforms"]

const galleryDeployments = [
  {
    title: "Autonomous Revenue Operations Hub",
    category: "AI Agents",
    tag: "Sales SDR · Multi-Agent",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    description: "Multi-turn WhatsApp and Web intake system connected to CRM with real-time intent scoring.",
    metrics: "1.4s response · 4.8x pipeline lift",
  },
  {
    title: "Executive Operational Intelligence Console",
    category: "Custom SaaS",
    tag: "Next.js · Go Microservices",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Bespoke internal leadership portal unifying Stripe financial records, team capacity, and SLA tracking.",
    metrics: "Zero latency · SOC2 compliant",
  },
  {
    title: "High-Throughput Webhook Synchronization Engine",
    category: "Workflow Engines",
    tag: "PostgreSQL · Redis · Webhooks",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: "Event-driven asynchronous middleware processing over 250,000 daily order reconciliation events.",
    metrics: "100% deterministic · 0% drift",
  },
  {
    title: "High-Converting AI-Powered Digital Flagship",
    category: "Web Platforms",
    tag: "WebGL · Three.js · Edge CDN",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    description: "Cinematic modern web presence built with sub-second TTFB and native lead qualification widgets.",
    metrics: "100/100 Lighthouse score",
  },
  {
    title: "Proprietary Vector RAG Knowledge Assistant",
    category: "AI Agents",
    tag: "Pinecone · OpenAI · Hybrid RAG",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: "Internal AI research assistant indexing 10,000+ corporate PDFs, contracts, and Zendesk tickets.",
    metrics: "Instant citations · 0% hallucination",
  },
  {
    title: "Cross-Platform Inventory & Billing Orchestrator",
    category: "Workflow Engines",
    tag: "SAP ERP · Shopify · Stripe",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    description: "Automated warehouse threshold monitor with instant purchase order generation and ledger alignment.",
    metrics: "18+ hrs saved weekly",
  },
]

export default function PremiumPortfolioGallery() {
  const [selectedFilter, setSelectedFilter] = useState("All Architectures")

  const filteredItems = selectedFilter === "All Architectures"
    ? galleryDeployments
    : galleryDeployments.filter((item) => item.category === selectedFilter)

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <Layers size={13} />
            <span>Deployment Gallery</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Proven architectures <br className="hidden sm:block" />
            <span className="text-gradient-cyan">engineered for production.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore a curated selection of live autonomous workflows, bespoke SaaS platforms, and enterprise AI engines designed by Sthayu.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Deployment Gallery Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#071026]/80 to-[#02050f] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_30px_70px_rgba(6,182,212,0.15)] backdrop-blur-xl"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-[#060b14]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071026] via-transparent to-transparent" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#030712]/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-cyan-300 font-bold">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 uppercase">
                    <span>{item.category}</span>
                    <span className="text-emerald-400">● VERIFIED LIVE</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300 font-bold">{item.metrics}</span>
                  <a
                    href="#assessment"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all cursor-pointer"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="btn-primary py-3.5 px-8 text-xs font-bold"
          >
            <span>Request System Demonstration</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  )
}

