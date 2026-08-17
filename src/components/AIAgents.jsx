import { ArrowRight, Bot, ChevronRight, PhoneCall, Sparkles, Workflow } from "lucide-react"

const agents = [
  { name: "AI Sales Agent", detail: "Qualifies leads, enriches context, and routes opportunities to the right next step." },
  { name: "AI Calling Agent", detail: "Handles outbound or inbound calls, screening, booking, and qualification without losing momentum." },
  { name: "AI Support Agent", detail: "Answers customer questions, triages requests, and escalates when a human touch is needed." },
  { name: "AI Receptionist", detail: "Greets visitors, books appointments, and keeps enquiries flowing across channels." },
  { name: "AI WhatsApp Agent", detail: "Responds to customer messages, sends updates, and captures next actions automatically." },
  { name: "AI Knowledge Assistant", detail: "Uses your business content and systems to answer employee and customer questions quickly." },
]

const flow = [
  "Lead",
  "AI qualification",
  "CRM update",
  "Follow-up",
  "Appointment",
  "Human handoff",
  "Dashboard insight",
]

export default function AIAgents() {
  return (
    <section id="ai-agents" className="relative overflow-hidden bg-[#05070a] px-5 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-[360px] w-[360px] rounded-full bg-blue-500/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-200">
          <Bot size={14} className="text-cyan-300" />
          AI as a workforce
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <h2 className="text-[2.3rem] font-extrabold leading-none tracking-[-0.06em] text-white sm:text-[3rem] md:text-[3.8rem]">
              Smart agents for the work
              <span className="mt-3 block text-slate-300">that keeps your business moving.</span>
            </h2>
          </div>
          <p className="max-w-xl text-[1.02rem] leading-8 text-slate-300">
            Sthayu does not sell an AI chatbot. We design specialized business agents that act as part of the operating system: qualifying, routing, responding, updating systems, and escalating the right work at the right time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {agents.map((agent) => (
              <div key={agent.name} className="rounded-[24px] border border-white/10 bg-[#091018]/80 p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-[#0b131b]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Sparkles size={18} className="text-cyan-300" />
                </div>
                <h3 className="mt-5 text-[1.2rem] font-semibold tracking-[-0.04em] text-white">{agent.name}</h3>
                <p className="mt-3 text-[14px] leading-7 text-slate-300">{agent.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#081117]/90 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">System view</p>
                <h3 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white">Lead to action</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                <Workflow size={18} className="text-cyan-300" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {flow.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="rounded-full border border-white/10 bg-[#0c141a] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-200">{step}</div>
                  {index < flow.length - 1 && <ChevronRight size={14} className="text-cyan-300" />}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-[#0c141a]/80 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <PhoneCall size={16} className="text-cyan-300" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Example workflow</p>
                  <p className="mt-1 text-[15px] text-white">Lead calls in → AI qualifies → appointment booked → CRM updated</p>
                </div>
              </div>
            </div>

            <a href="#assessment" className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/15">
              Explore AI agents
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
