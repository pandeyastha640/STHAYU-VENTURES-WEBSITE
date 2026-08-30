import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import heroBgImage from "../assets/images/hero_neural_infrastructure_1787842070922.jpg"

const HLS_URL = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8"
const MP4_URL = "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-and-dots-loop-42861-large.mp4"

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = () => {
      video.play().catch(() => {
        const onUserInteraction = () => {
          video.play().catch(() => {})
          window.removeEventListener("click", onUserInteraction)
          window.removeEventListener("touchstart", onUserInteraction)
        }
        window.addEventListener("click", onUserInteraction, { once: true })
        window.addEventListener("touchstart", onUserInteraction, { once: true })
      })
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL
      video.addEventListener("loadedmetadata", tryPlay)
    } else {
      import("hls.js").then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const hls = new Hls({ enableWorker: true, lowLatencyMode: true })
          hls.loadSource(HLS_URL)
          hls.attachMedia(video)
          hls.on(Hls.Events.MANIFEST_PARSED, tryPlay)
          video._hlsInstance = hls
        } else {
          video.src = MP4_URL
          tryPlay()
        }
      }).catch(() => {
        video.src = MP4_URL
        tryPlay()
      })
    }

    tryPlay()

    return () => {
      if (video._hlsInstance) {
        video._hlsInstance.destroy()
        video._hlsInstance = null
      }
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroBgImage}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ filter: "saturate(0.5) brightness(0.55) contrast(1.25)", pointerEvents: "none" }}
        >
          <source src={MP4_URL} type="video/mp4" />
        </video>
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_70%)]" />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
        {/* Cinematic scan lines */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)", mixBlendMode: "screen" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4b982]/25 bg-[#d4b982]/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d4b982] backdrop-blur-md shadow-[0_0_20px_rgba(212,185,130,0.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4b982] shadow-[0_0_6px_#d4b982]" />
              Enterprise AI & Business Automation
            </span>
          </motion.div>

          {/* Headline — High-End Modern Grotesque */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#fafafa]"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
          >
            AI systems that actually
            <br className="hidden sm:block" />
            <span className="text-[#e8d5b5]"> do the work for you.</span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base sm:text-lg text-[#a1a1aa] leading-[1.65] font-normal tracking-[-0.01em]"
          >
            We engineer autonomous AI agents, connected workflow architectures, and custom portals that eliminate manual tasks, unify fragmented data, and scale your operations intelligently.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#assessment"
              className="btn-primary py-3.5 px-8 text-xs sm:text-sm font-semibold tracking-[-0.01em]"
            >
              <span>Find What to Automate</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="#services"
              className="btn-secondary py-3.5 px-8 text-xs sm:text-sm font-medium tracking-[-0.01em]"
            >
              <span>Explore Capabilities</span>
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            variants={fadeUp}
            className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/[0.06]"
          >
            {[
              { value: "74%", label: "Faster Operations" },
              { value: "< 3s", label: "Lead Response Time" },
              { value: "99.4%", label: "Task Accuracy" },
              { value: "Zero", label: "Manual Copy-Pasting" },
            ].map((m, i) => (
              <div
                key={m.label}
                className={`text-center ${i > 0 ? "border-l border-white/[0.06] pl-8" : ""}`}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#fafafa] tabular-nums">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#71717a]">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative horizontal line */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#d4b982]/20 to-transparent z-10 hidden sm:block" />

      {/* Animated accent gradient */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[300px] h-[1px] z-10 hidden sm:block"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,185,130,0.35), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#71717a]">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-[#a1a1aa] to-transparent"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
