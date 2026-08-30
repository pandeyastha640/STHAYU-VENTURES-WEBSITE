import { useState, useCallback } from "react"
import { ArrowRight, Check, CheckCircle2, ClipboardList, ShieldCheck } from "lucide-react"
import { AnimatedSection } from "./ui"

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function AssessmentSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50 Employees",
    primaryFriction: "Instant Lead Replies & Sales Follow-Up",
    currentStack: "",
  })

  const validate = useCallback(() => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    return newErrors
  }, [formData.name, formData.email])

  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      if (prev[field]) {
        const next = { ...prev }
        delete next[field]
        return next
      }
      return prev
    })
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const newErrors = validate()
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }
      setSubmitting(true)
      // Simulated delay — replace with actual API call when backend is ready
      setTimeout(() => {
        setSubmitting(false)
        setSubmitted(true)
      }, 800)
    },
    [validate]
  )

  const handleReset = useCallback(() => {
    setSubmitted(false)
    setFormData({
      name: "",
      email: "",
      company: "",
      teamSize: "10-50 Employees",
      primaryFriction: "Instant Lead Replies & Sales Follow-Up",
      currentStack: "",
    })
    setErrors({})
  }, [])

  return (
    <section id="assessment" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="glass-pill-gold mx-auto">
              <ClipboardList size={13} />
              <span>Free Automation Assessment</span>
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Get a custom automation plan <br className="hidden sm:block" />
              <span className="text-white/60">for your business.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Tell us where your team spends the most manual time. We will review your tools and send you a practical, step-by-step automation recommendation within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 rounded-[2.5rem] border border-[#d4b982]/20 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#050505] p-8 sm:p-10 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d4b982]">
                WHAT HAPPENS NEXT
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Practical advice. <br />
                No pushy sales calls.
              </h3>
              <div className="space-y-4 pt-2">
                {[
                  { title: "Identify Repetitive Tasks", desc: "We pinpoint exactly where your team loses hours to manual typing, answering repetitive questions, or copy-pasting." },
                  { title: "Tailored Automation Roadmap", desc: "A simple diagram showing which AI assistants and automations will save you the most time." },
                  { title: "Clear Timeline & Pricing", desc: "A transparent project plan with clear milestones and no hidden surprises." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#d4b982]/[0.08] border border-[#d4b982]/25 text-[#d4b982] shrink-0 mt-0.5">
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
                <ShieldCheck size={16} className="text-[#d4b982]" />
                <span>100% Confidential & Secure</span>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#050505]/90 p-6 sm:p-8 backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4b982]/[0.08] border border-[#d4b982]/30 text-[#d4b982] mx-auto shadow-[0_0_25px_rgba(212,185,130,0.15)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Assessment Request Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name || "friend"}. Our team is reviewing your requirements and will send your personalized automation plan within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 text-xs font-mono text-[#d4b982] hover:underline cursor-pointer"
                  >
                    Submit another request →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-white/10 flex items-center justify-between">
                    <span>ASSESSMENT DETAILS</span>
                    <span className="text-[#d4b982] font-semibold">FREE REVIEW</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    <div>
                      <label htmlFor="assess-name" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="assess-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "assess-name-error" : undefined}
                        className={`input-glass ${errors.name ? "!border-red-500/60 focus:!border-red-400" : ""}`}
                      />
                      {errors.name && (
                        <p id="assess-name-error" className="mt-1 text-[10px] text-red-400 font-mono" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="assess-email" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="assess-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="rahul@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "assess-email-error" : undefined}
                        className={`input-glass ${errors.email ? "!border-red-500/60 focus:!border-red-400" : ""}`}
                      />
                      {errors.email && (
                        <p id="assess-email-error" className="mt-1 text-[10px] text-red-400 font-mono" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="assess-company" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="assess-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="e.g. Apex Global"
                        autoComplete="organization"
                        className="input-glass"
                      />
                    </div>

                    <div>
                      <label htmlFor="assess-team" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Team Size
                      </label>
                      <select
                        id="assess-team"
                        value={formData.teamSize}
                        onChange={(e) => handleChange("teamSize", e.target.value)}
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
                    <label htmlFor="assess-friction" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                      Main Challenge to Automate *
                    </label>
                    <select
                      id="assess-friction"
                      value={formData.primaryFriction}
                      onChange={(e) => handleChange("primaryFriction", e.target.value)}
                      className="input-glass cursor-pointer"
                    >
                      <option className="bg-slate-900">Instant Lead Replies & Sales Follow-Up</option>
                      <option className="bg-slate-900">24/7 Customer Support & FAQs</option>
                      <option className="bg-slate-900">Automatic Invoice, Order & Data Sync</option>
                      <option className="bg-slate-900">Phone Call Answering & Voice Support</option>
                      <option className="bg-slate-900">Custom Dashboard / Client Portal</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="assess-stack" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                      Current Software Tools (Optional)
                    </label>
                    <input
                      id="assess-stack"
                      type="text"
                      value={formData.currentStack}
                      onChange={(e) => handleChange("currentStack", e.target.value)}
                      placeholder="e.g. WhatsApp, Zoho, Shopify, Google Sheets, Tally"
                      className="input-glass"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-4 text-xs font-bold mt-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Get My Free Automation Plan</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[10px] font-mono text-slate-400 pt-1">
                    We will reply within 24 business hours
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
