import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ArrowUpRight,
  Bot,
  Check,
  Maximize2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function MediaShowcase() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    const glow = glowRef.current;

    if (!section || !media || !glow) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        media,
        {
          opacity: 0,
          y: 70,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: media,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.to(glow, {
        scale: 1.15,
        opacity: 0.65,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="media-showcase"
      className="relative overflow-hidden bg-[#05070a] px-5 py-28 md:px-8 md:py-36"
    >
      {/* Background atmosphere */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">
            <Sparkles size={13} />
            See intelligence in motion
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            Don't just imagine
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              what's possible.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Your business has a hidden layer of repetitive work. We turn that
            layer into intelligent infrastructure that works quietly in the
            background.
          </p>
        </div>

        {/* Cinematic media */}
        <div
          ref={mediaRef}
          className="group relative mt-16 overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#070b10] shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
        >
          <div className="business-showcase-scene" aria-label="Business transformation motion graphic">
            <div className="showcase-scene-glow" />
            <div className="showcase-scene-grid" />
            <div className="showcase-scene-node showcase-scene-node--one">Manual</div>
            <div className="showcase-scene-node showcase-scene-node--two">Ops</div>
            <div className="showcase-scene-node showcase-scene-node--three">AI</div>
            <div className="showcase-scene-node showcase-scene-node--four">Scale</div>
            <div className="showcase-scene-center">
              <div className="showcase-scene-core">
                <Sparkles size={26} className="text-cyan-300" strokeWidth={1.2} />
              </div>
            </div>
            <div className="showcase-scene-line showcase-scene-line--one" />
            <div className="showcase-scene-line showcase-scene-line--two" />
            <div className="showcase-scene-line showcase-scene-line--three" />
            <div className="showcase-scene-line showcase-scene-line--four" />
          </div>

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,0.92)_0%,rgba(5,7,10,0.6)_45%,rgba(5,7,10,0.35)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(34,211,238,0.12),transparent_35%)]" />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-[560px] flex-col justify-between p-7 md:p-10 lg:p-14">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-200 backdrop-blur-xl">
                  <Bot size={21} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-medium text-white">
                    Sthayu Intelligence
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    AI + Automation Infrastructure
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-black/20 text-slate-400 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/25 hover:text-cyan-300"
                aria-label="Expand media"
              >
                <Maximize2 size={15} />
              </button>
            </div>

            {/* Main copy */}
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300/80">
                  Intelligent operations
                </span>
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
                Let your systems
                <span className="block text-cyan-300">
                  do the repetitive work.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                From customer acquisition to internal operations, Sthayu
                connects the moving parts of your business and lets intelligent
                workflows execute them automatically.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "AI agents",
                  "Automated workflows",
                  "Connected data",
                  "Real-time insights",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/20 px-3.5 py-2 backdrop-blur-xl"
                  >
                    <Check size={12} className="text-cyan-300" />
                    <span className="text-[10px] text-slate-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom controls */}
            <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                  <Zap size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Workflow in motion
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600">
                    Manual tasks → automated system
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20 text-cyan-300">
                  <Zap size={15} />
                </div>

                <div>
                  <p className="text-xs font-medium text-white">
                    Always running
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600">
                    No manual intervention required
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating metric cards */}
          <div className="absolute right-6 top-[32%] z-20 hidden w-44 rounded-2xl border border-white/[0.08] bg-black/40 p-4 backdrop-blur-2xl lg:block">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.16em] text-slate-600">
                Automation
              </span>

              <span className="text-[9px] text-emerald-300">LIVE</span>
            </div>

            <p className="mt-3 text-2xl font-semibold text-white">87%</p>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            <p className="mt-2 text-[9px] text-slate-600">
              repetitive work automated
            </p>
          </div>

          <div className="absolute bottom-[22%] right-8 z-20 hidden w-48 rounded-2xl border border-cyan-300/10 bg-black/40 p-4 backdrop-blur-2xl lg:block">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

              <span className="text-[10px] text-slate-400">
                Workflow executed
              </span>
            </div>

            <p className="mt-3 text-xs font-medium text-white">
              Lead → AI → CRM → Follow-up
            </p>

            <div className="mt-3 flex items-center gap-1">
              <span className="text-[9px] text-emerald-300">
                Completed successfully
              </span>

              <Check size={11} className="text-emerald-300" />
            </div>
          </div>
        </div>

        {/* Media note */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.018] px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
              <Sparkles size={14} className="text-cyan-300" />
            </div>

            <p className="text-xs leading-5 text-slate-500">
              Replace the placeholder media with your real Sthayu product,
              team, workflow or client footage.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium text-white transition-colors hover:text-cyan-300"
          >
            Explore the platform
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}