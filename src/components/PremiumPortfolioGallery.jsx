import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const portfolioItems = [
  {
    title: "AI-Powered Sales Flow",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    description: "Lead qualification and routing system",
  },
  {
    title: "Intelligent Operations Hub",
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Real-time operational visibility",
  },
  {
    title: "Workflow Automation Suite",
    category: "Integration",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: "Connected systems and processes",
  },
  {
    title: "Customer Intelligence Platform",
    category: "AI",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: "Predictive customer insights",
  },
]

export default function PremiumPortfolioGallery() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Animate items on scroll
    const items = container.querySelectorAll(".portfolio-item")
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-300/4 blur-[140px]" />

      <div ref={containerRef} className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          Visual showcase
        </div>

        <h2 className="mt-6 text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.6rem] mb-4">
          Explore our
          <span className="block text-slate-300">intelligent systems in motion.</span>
        </h2>

        <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-300 mb-12">
          From AI-powered automations to connected dashboard intelligence, see how we transform business workflows.
        </p>

        {/* Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="portfolio-item group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#091018]/80 transition-all duration-500 hover:border-cyan-300/30 hover:shadow-[0_40px_100px_rgba(34,211,238,0.1)]">
                {/* Image container */}
                <div className="relative h-56 overflow-hidden bg-[#0a1217]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-300 font-semibold">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-[1.1rem] font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowUpRight size={16} className="text-cyan-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <p className="text-[12px] text-slate-400">
                    {item.description}
                  </p>

                  {/* Hover action */}
                  <div className="mt-4 pt-4 border-t border-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <button className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.16em] hover:text-cyan-200">
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/15">
            View complete gallery
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
