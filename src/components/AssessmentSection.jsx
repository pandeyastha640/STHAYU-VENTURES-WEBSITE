import { useState, useCallback } from "react"
import { ArrowRight, Check, CheckCircle2, ClipboardList, ShieldCheck } from "lucide-react"
import { AnimatedSection } from "./ui/index.jsx"

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function AssessmentSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "1-10 Employees",
    mainChallenge: "Manual Data Entry & Copy-Pasting",
    currentTools: "",
  })

  const validate = useCallback(() => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required"
    return newErrors
  }, [formData.name, formData.email, formData.company])

  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setSubmitError("")
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
    async (e) => {
      e.preventDefault()
      if (submitting) return

      const newErrors = validate()
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        const firstError = Object.values(newErrors)[0]
        setSubmitError(firstError)
        return
      }

      setSubmitting(true)
      setSubmitError("")

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        teamSize: formData.teamSize,
        mainChallenge: formData.mainChallenge,
        currentTools: formData.currentTools.trim(),
      }

      const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "")

      try {
        let response = await fetch(`${apiBase}/api/assessment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        // If /api/assessment returned 404 (e.g. on Netlify without proxy rewrite), retry directly to Netlify function
        if (response.status === 404 && !apiBase) {
          console.warn("Direct /api/assessment returned 404. Falling back to /.netlify/functions/assessment...")
          response = await fetch("/.netlify/functions/assessment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          })
        }

        const contentType = response.headers.get("content-type") || ""
        let data = {}
        if (contentType.includes("application/json")) {
          data = await response.json()
        } else {
          const text = await response.text()
          throw new Error(`Server returned unexpected response (status ${response.status}): ${text.slice(0, 100)}`)
        }

        if (!response.ok) {
          if (data.errors && typeof data.errors === "object") {
            setErrors(data.errors)
          }
          throw new Error(data.message || "Failed to submit assessment request. Please try again.")
        }

        setSubmitted(true)
      } catch (err) {
        console.error("Assessment submission error:", err)
        setSubmitError(err.message || "Unable to submit assessment request. Please try again.")
      } finally {
        setSubmitting(false)
      }
    },
    [validate, submitting, formData]
  )

  const handleReset = useCallback(() => {
    setSubmitted(false)
    setSubmitError("")
    setFormData({
      name: "",
      email: "",
      company: "",
      teamSize: "1-10 Employees",
      mainChallenge: "Manual Data Entry & Copy-Pasting",
      currentTools: "",
    })
    setErrors({})
  }, [])

  return (
    <section id="assessment" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="glass-pill-gold mx-auto">
              <ClipboardList size={13} />
              <span>Free Automation Assessment</span>
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Get a custom automation plan <br className="hidden sm:block" />
              <span className="text-white/60">for your business.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Tell us where your team spends manual time. We will review your tools and send you a practical, step-by-step automation recommendation.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 rounded-3xl border border-[#d4b982]/20 bg-[#0a0a0a]/90 p-6 sm:p-9 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Benefits */}
            <div className="lg:col-span-5 space-y-5">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#d4b982]">
                WHAT YOU RECEIVE
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Clear recommendations. <br />
                No pushy sales calls.
              </h3>
              <div className="space-y-3 pt-1">
                {[
                  { title: "Task Breakdown", desc: "Pinpoints exactly where your team loses hours to repetitive typing or slow replies." },
                  { title: "Automation Blueprint", desc: "A simple diagram showing which AI assistants and tool connections will save the most time." },
                  { title: "Timeline & Budget", desc: "A transparent project plan with clear milestones and expected ROI." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#d4b982]/[0.08] border border-[#d4b982]/25 text-[#d4b982] shrink-0 mt-0.5">
                      <Check size={13} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck size={15} className="text-[#d4b982]" />
                <span>100% Confidential & Secure</span>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#050505]/95 p-6 sm:p-8 backdrop-blur-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4b982]/[0.08] border border-[#d4b982]/30 text-[#d4b982] mx-auto shadow-[0_0_25px_rgba(212,185,130,0.15)]">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Assessment Request Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name || "there"}. We are reviewing your requirements and will prepare your custom automation plan.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary text-xs py-2 px-5 mt-4"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Sarah Jenkins"
                        className={`w-full rounded-xl bg-white/[0.03] border px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4b982] transition-colors ${
                          errors.name ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="sarah@company.com"
                        className={`w-full rounded-xl bg-white/[0.03] border px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4b982] transition-colors ${
                          errors.email ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Acme Corp"
                        className={`w-full rounded-xl bg-white/[0.03] border px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4b982] transition-colors ${
                          errors.company ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Team Size
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => handleChange("teamSize", e.target.value)}
                        className="w-full rounded-xl bg-[#111] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4b982] transition-colors"
                      >
                        <option value="1-10 Employees">1-10 Employees</option>
                        <option value="11-50 Employees">11-50 Employees</option>
                        <option value="51-200 Employees">51-200 Employees</option>
                        <option value="200+ Employees">200+ Employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Main Operational Challenge
                    </label>
                    <select
                      value={formData.mainChallenge}
                      onChange={(e) => handleChange("mainChallenge", e.target.value)}
                      className="w-full rounded-xl bg-[#111] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4b982] transition-colors"
                    >
                      <option value="Manual Data Entry & Copy-Pasting">Manual Data Entry & Copy-Pasting</option>
                      <option value="Slow Lead / Customer Response">Slow Lead / Customer Response</option>
                      <option value="Repetitive Support Inquiries">Repetitive Support Inquiries</option>
                      <option value="Tools That Don't Communicate">Tools That Don't Communicate</option>
                      <option value="Document Search & Invoice Processing">Document Search & Invoice Processing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Current Tools Used (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.currentTools}
                      onChange={(e) => handleChange("currentTools", e.target.value)}
                      placeholder="e.g. WhatsApp, HubSpot, QuickBooks, Google Sheets"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4b982] transition-colors"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-center gap-2">
                      <span>⚠️ {submitError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3.5 px-6 text-xs font-semibold justify-center mt-3 cursor-pointer shadow-[0_0_20px_rgba(212,185,130,0.15)]"
                  >
                    <span>{submitting ? "Processing..." : "Get My Free Automation Plan"}</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
