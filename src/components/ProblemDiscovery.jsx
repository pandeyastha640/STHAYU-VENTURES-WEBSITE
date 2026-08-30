import { ArrowRight, CheckCircle2, Search, XCircle, Zap } from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui"

const frictionPoints = [
  {
    title: "Leads Waiting Too Long",
    problem: "When new customer enquiries sit in inboxes for hours, up to 70% of potential sales are lost.",
    solution: "AI answers in under 3 seconds on WhatsApp or your website, answers questions, and books a call.",
    metric: "3.8x faster customer response",
  },
  {
    title: "Endless Manual Data Entry",
    problem: "Staff spend 15+ hours every week copy-pasting customer details, matching invoices, and typing reports.",
    solution: "Data syncs automatically between your accounting, CRM, and spreadsheet tools in real time.",
    metric: "15+ hours saved per person/wk",
  },
  {
    title: "Tools That Don't Talk to Each Other",
    problem: "You pay for 10+ different apps, but staff still have to manually move information between them.",
    solution: "We connect your existing tools into one smooth workflow where data flows without human effort.",
    metric: "100% connected workflow",
  },
  {
    title: "Repetitive Customer Support",
    problem: "Staff spend half their day answering the exact same routine questions instead of helping high-value clients.",
    solution: "AI handles common questions instantly 24/7 and passes complex issues to your team with full context.",
    metric: "90% routine questions handled",
  },
]

export default function ProblemDiscovery() {
  return (
    <section id="problem-discovery" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-[160px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">

        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Search, text: "The Core Problem" }}
            title={
              <>
                Your business does not need more apps. <br className="hidden sm:block" />
                <span className="text-white/60">It needs your tools to work together.</span>
              </>
            }
            description="Most companies do not have a work ethic problem. They have a connection problem: time is lost when employees have to manually copy data, switch between tools, and do repetitive administrative chores."
          />
        </AnimatedSection>

        {/* 2-Column Comparison Architecture */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Column 1: The Fragmented Enterprise (Before) */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-[2.5rem] border border-red-500/[0.12] bg-gradient-to-b from-[#140608]/70 via-[#0d0406]/50 to-[#050505] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 border-b border-red-500/[0.10]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/[0.06] border border-red-500/[0.12] text-[#fca5a5]">
                    <XCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">How Most Businesses Work Today</h3>
                    <p className="text-xs text-[#fca5a5] font-mono">SLOW · MANUAL · REPETITIVE</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-red-500/[0.06] text-[#fca5a5] text-[10px] font-bold uppercase tracking-wider border border-red-500/[0.12]">
                  Before Sthayu
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { title: "Manual data entry & copy-pasting", desc: "Staff spend hours moving data between website forms, spreadsheets, and emails." },
                  { title: "Enquiries wait hours for a reply", desc: "Potential customers reach out, but staff are too busy to respond immediately." },
                  { title: "Reports prepared by hand every week", desc: "Managers spend days compiling spreadsheets instead of making quick decisions." },
                  { title: "Paying for apps that do not communicate", desc: "Your team has to manually bridge the gap between all the software you pay for." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-red-500/[0.10]">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/[0.08]">
                      <XCircle size={12} className="text-[#fca5a5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-red-500/[0.10] flex items-center justify-between text-xs font-mono text-[#fca5a5]">
                <span>Time lost to manual tasks:</span>
                <span className="font-bold">20–30 hrs/employee/month</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Column 2: The Sthayu Connected System (After) */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-[2.5rem] border border-white/[0.10] bg-gradient-to-b from-[#0a0a0a]/80 via-[#080808]/60 to-[#050505] p-6 sm:p-8 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl relative">
              <div className="absolute -top-3 right-8 px-3.5 py-1 rounded-full bg-white/[0.08] text-[#fafafa] border border-white/[0.12] font-sans text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                The Sthayu Solution
              </div>

              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.10] text-[#d4d4d8]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">How Your Business Runs With Sthayu</h3>
                    <p className="text-xs text-[#d4d4d8] font-mono">AUTOMATED · CONNECTED · INSTANT</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/[0.03] text-[#d4d4d8] text-[10px] font-bold uppercase tracking-wider border border-white/[0.08]">
                  After Sthayu
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { title: "Data moves automatically", desc: "Information syncs between your tools instantly with zero manual typing." },
                  { title: "Instant response to new enquiries", desc: "AI answers customer questions in seconds and books calls on your calendar." },
                  { title: "Live business reports anytime", desc: "See your sales, leads, and operational numbers updated live, without compiling sheets." },
                  { title: "One connected system", desc: "All your software tools work together smoothly, so your team can focus on real work." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                      <CheckCircle2 size={12} className="text-[#d4d4d8]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/06 flex items-center justify-between text-xs font-mono text-[#d4d4d8]">
                <span>Speed improvement:</span>
                <span className="font-bold text-[#86efac]">+74% faster task completion</span>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Detailed Friction-to-Flow Matrix Cards */}
        <div className="mt-16">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Everyday Business Problems We Solve</h3>
              <p className="text-sm text-slate-400 mt-1">Simple automations that replace manual busywork with smooth digital processes.</p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {frictionPoints.map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.1}>
                <div
                  className="glass-card p-6 flex flex-col justify-between group hover:border-white/[0.08] transition"
                >
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#d4d4d8] mb-4">
                      <Zap size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">{item.problem}</p>
                    <p className="text-xs text-[#d4d4d8] mt-2 font-medium">{item.solution}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#86efac] font-bold">{item.metric}</span>
                    <ArrowRight size={13} className="text-[#a1a1aa] opacity-60 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
