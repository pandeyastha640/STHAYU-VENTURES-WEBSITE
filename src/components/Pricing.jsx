import { useState } from "react"
import { ArrowRight, Check, CheckCircle2, Crown, Layers3, Lock, PhoneCall, Rocket, Sparkles } from "lucide-react"
import { AnimatedSection, SectionHeading } from "./ui/index.jsx"

const plans = [
  {
    name: "Starter",
    eyebrow: "Small businesses & teams",
    description: "Automate your highest-priority manual bottlenecks and deploy your first production AI agent.",
    price: "₹9,999",
    period: "/ month",
    icon: Sparkles,
    featured: false,
    cta: "Select Starter",
    features: [
      "1 Core Autonomous AI Agent (WhatsApp or Web)",
      "Standard CRM & Google Sheets 2-way sync",
      "Instant lead triage & FAQ qualification (< 3s)",
      "Automated appointment scheduling",
      "Weekly performance summary report",
      "Standard email & chat technical support",
    ],
  },
  {
    name: "Growth",
    eyebrow: "Scaling operations",
    description: "Complete workflow automation across sales leads, client support, and multi-app data pipelines.",
    price: "₹24,999",
    period: "/ month",
    icon: Rocket,
    featured: true,
    badge: "MOST POPULAR",
    cta: "Select Growth",
    features: [
      "Up to 3 Specialized Autonomous AI Agents",
      "Full CRM, ERP, Billing & WhatsApp synchronization",
      "Custom business rules & multi-step pipelines",
      "Document parsing & invoice extraction",
      "Custom internal dashboard & live tracking",
      "Priority 24/7 technical assistance & monitoring",
      "Monthly architecture reviews & system tuning",
    ],
  },
  {
    name: "Custom",
    eyebrow: "High-volume enterprises",
    description: "Bespoke internal software, multi-department autonomous agent networks, and dedicated engineering.",
    price: "Custom",
    period: "tailored scope",
    icon: Crown,
    featured: false,
    cta: "Talk to Us",
    features: [
      "Unlimited autonomous agents & multi-tool workflows",
      "Custom internal operations portals & control rooms",
      "Proprietary model fine-tuning on company data",
      "Strict data isolation & on-premise/VPC options",
      "Dedicated Solutions Architect & 99.9% uptime SLA",
      "Custom legacy system integrations & migrations",
      "Continuous system enhancements & maintenance",
    ],
  },
]

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    goal: "",
  })
  const [selectedPlan, setSelectedPlan] = useState("")
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = "Please enter your full name."
    if (!formData.contact.trim()) {
      errs.contact = "Please enter your work email or WhatsApp phone number."
    }
    return errs
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitError) setSubmitError("")
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstError = Object.values(validationErrors)[0]
      setSubmitError(firstError)
      return
    }

    setSubmitting(true)
    setSubmitError("")

    const payload = {
      name: formData.name.trim(),
      contact: formData.contact.trim(),
      goal: formData.goal.trim() || undefined,
      planInterest: selectedPlan || undefined,
      source: "website_strategy_call",
    }

    const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "")

    try {
      let response = await fetch(`${apiBase}/api/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      // If /api/inquiry returned 404 (e.g. on Netlify without proxy rewrite), retry directly to Netlify function
      if (response.status === 404 && !apiBase) {
        console.warn("Direct /api/inquiry returned 404. Falling back to /.netlify/functions/inquiry...")
        response = await fetch("/.netlify/functions/inquiry", {
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
        throw new Error(data.message || "Failed to submit inquiry. Please check the form and try again.")
      }

      setSubmitted(true)
    } catch (err) {
      console.error("Submission error:", err)
      setSubmitError(err.message || "Unable to send inquiry. Please try again or email sthayu.ventures@gmail.com or WhatsApp +91 63077 73640 directly.")
    } finally {
      setSubmitting(false)
    }
  }

  const scrollToContact = (planName) => {
    setSelectedPlan(planName)
    setFormData((prev) => ({
      ...prev,
      goal: prev.goal || `Interested in the ${planName} plan. Looking to automate: `,
    }))
    const element = document.getElementById("contact")
    if (element) {
      const yOffset = -70
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <AnimatedSection>
          <SectionHeading
            pill={{ icon: Layers3, text: "Transparent Pricing" }}
            title={
              <>
                Predictable plans. <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#d4b982] bg-clip-text text-transparent">
                  Engineered for positive ROI.
                </span>
              </>
            }
            description="Choose the right automation tier for your current stage. Upgrade seamlessly as your team operations grow."
          />
        </AnimatedSection>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon
            const isFeatured = plan.featured
            return (
              <AnimatedSection key={plan.name} delay={idx * 0.08}>
                <div
                  className={`relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 h-full bg-[#0a0a0a]/90 backdrop-blur-2xl ${
                    isFeatured
                      ? "border-[#d4b982] shadow-[0_20px_60px_rgba(212,185,130,0.15)] lg:-translate-y-2 ring-1 ring-[#d4b982]/40"
                      : "border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-[#d4b982]/40"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#d4b982] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isFeatured ? "bg-[#d4b982]/20 text-[#d4b982] border border-[#d4b982]/30" : "bg-white/5 text-slate-300 border border-white/10"
                      }`}>
                        <Icon size={18} />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-slate-400 font-semibold">
                        {plan.eyebrow}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-white/10">
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {plan.period}
                      </span>
                    </div>

                    {/* Feature list */}
                    <div className="mt-6 space-y-3">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono">
                        What's Included:
                      </div>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check
                            size={14}
                            className={`mt-0.5 shrink-0 ${isFeatured ? "text-[#d4b982] font-bold" : "text-slate-500"}`}
                          />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => scrollToContact(plan.name)}
                      className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                        isFeatured
                          ? "bg-[#d4b982] text-black font-bold hover:bg-[#e8d5b5] shadow-[0_0_20px_rgba(212,185,130,0.25)]"
                          : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Integrated 3-Field Booking / Inquiry Form */}
        <div id="contact" className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#0a0a0a]/95 p-7 sm:p-10 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d4b982]/30 bg-[#d4b982]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#d4b982] font-mono">
                  <PhoneCall size={12} />
                  <span>Free Automation Discovery</span>
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Book Your Free 30-Min Strategy Call
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  Tell us about your team and what manual tasks you'd like to eliminate. We will analyze your workflows and give you an actionable automation roadmap.
                </p>

                {/* Direct quick-connect contact links */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 pt-1">
                  <a
                    href="https://wa.me/916307773640"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm text-emerald-400 hover:bg-emerald-500/20 transition-all font-sans font-medium"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0"></span>
                    <span>WhatsApp: +91 63077 73640</span>
                  </a>
                  <a
                    href="tel:+916307773640"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-slate-200 hover:text-[#d4b982] hover:border-[#d4b982]/40 transition-all font-sans font-medium"
                  >
                    <PhoneCall size={13} className="text-[#d4b982]" />
                    <span>Call: +91 63077 73640</span>
                  </a>
                  <a
                    href="mailto:sthayu.ventures@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-slate-200 hover:text-[#d4b982] hover:border-[#d4b982]/40 transition-all font-sans font-medium"
                  >
                    <span>Email: sthayu.ventures@gmail.com</span>
                  </a>
                </div>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center animate-fade-in">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Discovery Call Request Received!</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our solutions team will review your requirements and email you within 2 business hours to schedule your strategy session.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", contact: "", goal: "" })
                    }}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#d4b982] hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Field 1: Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Your Full Name <span className="text-[#d4b982]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-red-500 focus:ring-red-400"
                          : "border-white/15 focus:border-[#d4b982] focus:ring-[#d4b982]/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Field 2: Work Email or Phone */}
                  <div>
                    <label htmlFor="contact-input" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Work Email or WhatsApp Phone <span className="text-[#d4b982]">*</span>
                    </label>
                    <input
                      id="contact-input"
                      type="text"
                      placeholder="e.g. rahul@company.com or +91 63077 73640"
                      value={formData.contact}
                      onChange={(e) => handleChange("contact", e.target.value)}
                      className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.contact
                          ? "border-red-500 focus:ring-red-400"
                          : "border-white/15 focus:border-[#d4b982] focus:ring-[#d4b982]/20"
                      }`}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-[11px] text-red-400 font-medium">{errors.contact}</p>
                    )}
                  </div>

                  {/* Field 3: Automation Goal / Message */}
                  <div>
                    <label htmlFor="goal" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      What would you like to build or automate? <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="goal"
                      rows={3}
                      placeholder="e.g. WhatsApp business bot, Instagram DM comment-to-lead automation, AI email auto-replies, client CRM pipeline..."
                      value={formData.goal}
                      onChange={(e) => handleChange("goal", e.target.value)}
                      className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.goal
                          ? "border-red-500 focus:ring-red-400"
                          : "border-white/15 focus:border-[#d4b982] focus:ring-[#d4b982]/20"
                      }`}
                    />
                    {errors.goal && (
                      <p className="mt-1 text-[11px] text-red-400 font-medium">{errors.goal}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-center gap-2">
                      <span>⚠️ {submitError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {submitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <PhoneCall size={14} />
                          <span>Book a Free Call</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 font-medium">
                    <Lock size={11} className="text-[#d4b982]" />
                    <span>Strict privacy. No spam. 100% confidential operational audit.</span>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
