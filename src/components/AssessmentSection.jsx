import { useState } from "react"
import { ArrowRight, Check, CheckCircle2, ClipboardList, Mail, MessageSquareText, Sparkles, ShieldCheck, Zap } from "lucide-react"

export default function AssessmentSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50 Employees",
    primaryFriction: "Lead Qualification & Sales Follow-Up",
    currentStack: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="assessment" className="relative overflow-hidden bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill mx-auto">
            <ClipboardList size={13} />
            <span>Operational Diagnostic</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Receive your customized <br className="hidden sm:block" />
            <span className="text-gradient-cyan">System Architecture Blueprint.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tell us where manual effort is bottlenecking your growth. Our systems architects will analyze your stack and return a concrete implementation roadmap within 24 hours.
          </p>
        </div>

        {/* 2-Column Diagnostic Intake Card */}
        <div className="mt-16 rounded-[2.5rem] border border-cyan-500/25 bg-gradient-to-b from-[#071026] via-[#040816] to-[#02050f] p-8 sm:p-10 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.12)] backdrop-blur-2xl">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: What you receive */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                WHAT HAPPENS NEXT
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Not a sales pitch. <br />
                An actionable engineering audit.
              </h3>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Bottleneck Quantification",
                    desc: "Exact calculation of human hours lost to repetitive tasks and data entry drag."
                  },
                  {
                    title: "Target State Architecture",
                    desc: "System diagram showing recommended agent triggers, webhooks, and databases."
                  },
                  {
                    title: "Timeline & ROI Projection",
                    desc: "Transparent 30-day delivery roadmap with guaranteed SLA milestones."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shrink-0 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 font-mono">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>NDA Protected · 100% Confidential Data</span>
              </div>
            </div>

            {/* Right Column: Diagnostic Form */}
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#02050f]/90 p-6 sm:p-8 backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Diagnostic Request Received</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name || "friend"}. Our lead solutions engineer is analyzing your inputs and will dispatch your custom Architecture Blueprint within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                  >
                    Submit another scenario →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-white/10 flex items-center justify-between">
                    <span>ASSESSMENT INTAKE</span>
                    <span className="text-cyan-400">STEP 1 OF 1</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="input-glass"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="input-glass"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Global"
                        className="input-glass"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Team Size
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="input-glass cursor-pointer"
                      >
                        <option className="bg-slate-900">1 - 10 Employees</option>
                        <option className="bg-slate-900">10 - 50 Employees</option>
                        <option className="bg-slate-900">50 - 250 Employees</option>
                        <option className="bg-slate-900">250+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                      Primary Operational Bottleneck *
                    </label>
                    <select
                      value={formData.primaryFriction}
                      onChange={(e) => setFormData({ ...formData, primaryFriction: e.target.value })}
                      className="input-glass cursor-pointer"
                    >
                      <option className="bg-slate-900">Lead Qualification & Sales Follow-Up</option>
                      <option className="bg-slate-900">Tier-1 Support & Customer Inquiries</option>
                      <option className="bg-slate-900">Multi-System Data Sync & Reconciliation</option>
                      <option className="bg-slate-900">Voice Telephony & Call Qualification</option>
                      <option className="bg-slate-900">Custom Internal SaaS / Dashboard Build</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                      Current Software Stack (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.currentStack}
                      onChange={(e) => setFormData({ ...formData, currentStack: e.target.value })}
                      placeholder="e.g. HubSpot, Shopify, PostgreSQL, WhatsApp"
                      className="input-glass"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-xs font-bold mt-2 shadow-[0_0_25px_rgba(6,182,212,0.4)] cursor-pointer"
                  >
                    <span>Request Custom Blueprint</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="text-center text-[10px] font-mono text-slate-400 pt-1">
                    Guaranteed response within 24 business hours
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

