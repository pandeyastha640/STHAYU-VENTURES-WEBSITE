import { ArrowRight, Check, ClipboardList, Mail, MessageSquareText, Sparkles } from "lucide-react"

const formFields = [
  { label: "Business type" },
  { label: "Current challenge" },
  { label: "Tools you use" },
  { label: "What you want to build" },
  { label: "Team size" },
  { label: "Email" },
]

export default function AssessmentSection() {
  return (
    <section id="assessment" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-[8%] top-[16%] h-[360px] w-[360px] rounded-full bg-cyan-300/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <ClipboardList size={14} className="text-cyan-300" />
          Free digital assessment
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem]">
              Tell us what is slowing your business down.
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-slate-300">
              This is not a generic lead form. It is a strategic diagnostic built to identify where the right automation, AI, app, workflow, or digital system could create measurable relief.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Diagnose the highest-value opportunity",
                "Find the best-fit system strategy",
                "Understand what should be automated first",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-[#091018]/80 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                    <Check size={14} />
                  </div>
                  <span className="text-[15px] text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#081117]/90 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.35)] md:p-7">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Discovery intake</p>
                <h3 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.05em] text-white">Business assessment</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                <MessageSquareText size={18} className="text-cyan-300" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {formFields.map((field) => (
                <label key={field.label} className="block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  <span className="mb-2 block">{field.label}</span>
                  <input
                    type={field.label === "Email" ? "email" : "text"}
                    placeholder={field.label}
                    className="w-full rounded-2xl border border-white/10 bg-[#0d141a] px-4 py-3 text-[14px] text-white placeholder:text-slate-500 focus:border-cyan-300/30 focus:outline-none"
                  />
                </label>
              ))}
            </div>

            <div className="mt-5">
              <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                <span className="mb-2 block">Preferred solution</span>
                <select className="w-full rounded-2xl border border-white/10 bg-[#0d141a] px-4 py-3 text-[14px] text-white focus:border-cyan-300/30 focus:outline-none">
                  <option>Website / app</option>
                  <option>AI agents</option>
                  <option>Automation workflow</option>
                  <option>CRM + sales automation</option>
                  <option>Dashboard + analytics</option>
                  <option>Custom digital system</option>
                </select>
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                <Sparkles size={12} />
                Business review
              </div>

              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#041014] transition-all duration-300 hover:bg-cyan-200">
                Send assessment
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-[12px] text-slate-400">
              <Mail size={13} className="text-cyan-300" />
              hello@sthayuventures.com
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
