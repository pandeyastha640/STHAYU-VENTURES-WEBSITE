import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  MessageSquare,
  Instagram,
  Mail,
  Users,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Smartphone,
  RefreshCw,
  TrendingUp,
  UserCheck,
  Maximize2,
  X
} from "lucide-react"
import { SectionHeading, AnimatedSection } from "./ui"

// Static Image imports from assets
import imgWhatsapp from "../assets/images/whatsapp_ai_automation_1788362900141.jpg"
import imgInstagram from "../assets/images/instagram_dm_automation_1788362916415.jpg"
import imgEmail from "../assets/images/ai_email_inbox_reply_1788362932392.jpg"
import imgClientCrm from "../assets/images/client_crm_automation_1788362948161.jpg"

const PILLARS = [
  {
    id: "whatsapp",
    title: "WhatsApp Business AI",
    subtitle: "24/7 Conversational Sales & Support",
    image: imgWhatsapp,
    badge: "Official Meta Cloud API",
    tag: "Instant 3s Response",
    metric: "< 3s",
    metricLabel: "Average Auto-Reply Latency",
    description:
      "Transform your WhatsApp into an autonomous sales closer and customer support agent that answers questions, sends catalogs, and locks appointments around the clock.",
    features: [
      "24/7 intelligent instant replies trained on your company knowledge base",
      "Interactive product catalogs, quotes, and payment link delivery",
      "Automated appointment booking synced with Google/Outlook calendars",
      "Broadcast campaigns with smart opt-in management and zero spam penalties",
      "Seamless human escalation with Slack / CRM team alerts"
    ],
    tech: "WhatsApp Cloud API · LangChain / LlamaIndex · Webhooks · Stripe / Razorpay"
  },
  {
    id: "instagram",
    title: "Instagram DM & Story Automation",
    subtitle: "Turn Engagement & Reels into Revenue",
    image: imgInstagram,
    badge: "Meta Verified Architecture",
    tag: "3.8x More Qualified Leads",
    metric: "100%",
    metricLabel: "Comment-to-DM Capture Rate",
    description:
      "Automatically convert post comments, Reel interactions, and Story mentions into high-value private DM conversations with instant link delivery and lead qualification.",
    features: [
      "Instant DM trigger when followers comment specific keywords (e.g. 'PRICING', 'DEMO')",
      "Automated Story mention appreciation & promotional discount delivery",
      "Conversational qualification questions before routing to sales reps",
      "Safe Meta Graph API rate-limiting compliant workflows",
      "Link click tracking and direct attribution to closed revenue"
    ],
    tech: "Instagram Messaging Graph API · Node.js · Vector DB · CRM Webhooks"
  },
  {
    id: "email",
    title: "AI Email Auto-Responder & Inbox Triage",
    subtitle: "Zero Inbox Backlog with Contextual AI Replies",
    image: imgEmail,
    badge: "Smart Inbox Automation",
    tag: "95% Reduction in Email Lag",
    metric: "24/7",
    metricLabel: "Autonomous Inbox Coverage",
    description:
      "Stop spending 3+ hours a day typing routine emails. Our AI triages your incoming email in real-time, drafts personalized brand-aligned replies, and syncs actionable items.",
    features: [
      "Instant contextual auto-replies to inquiries, quote requests, and FAQs",
      "Smart priority tagging: VIP Clients, Urgent Support, New Inbound Deals",
      "Automated calendar booking links and attachments dispatched automatically",
      "Human-in-the-loop review mode: 1-click approve AI generated drafts",
      "Bi-directional sync with Gmail, Google Workspace, Outlook & Zoho"
    ],
    tech: "Gmail / MS Graph API · Semantic Triage Embeddings · GPT-4o / Claude 3.5 Sonnet"
  },
  {
    id: "crm",
    title: "Automated Client Lifecycle Management",
    subtitle: "Unified CRM & Proactive Retention Engine",
    image: imgClientCrm,
    badge: "360° Client Intelligence",
    tag: "Zero Dropped Follow-ups",
    metric: "40%+",
    metricLabel: "Higher Client Retention Rate",
    description:
      "Unify all WhatsApp chats, Instagram DMs, and customer emails into a single automated client management hub that triggers onboarding, check-ins, and invoices automatically.",
    features: [
      "Unified client activity timeline aggregating WhatsApp, IG DMs, and Emails",
      "Automated client onboarding flows, NDA/contract delivery, and asset collection",
      "Proactive health scoring & automated check-in triggers for dormant accounts",
      "Automated recurring invoice reminders and payment receipts",
      "Native sync with HubSpot, Salesforce, Zoho, Notion, and PostgreSQL"
    ],
    tech: "HubSpot / Zoho REST APIs · Custom Postgres Engine · Automated Cron Workers"
  }
]

// SIMULATOR DATA
const SIMULATOR_TABS = [
  { id: "whatsapp", name: "WhatsApp Bot", icon: MessageSquare, badge: "Live Chat" },
  { id: "instagram", name: "Instagram DMs", icon: Instagram, badge: "Comment-to-DM" },
  { id: "email", name: "AI Email Triage", icon: Mail, badge: "Smart Inbox" },
  { id: "crm", name: "Client CRM Hub", icon: Users, badge: "Unified Timeline" }
]

export default function OmnichannelAutomation() {
  const [activeTab, setActiveTab] = useState("whatsapp")
  const [selectedPillar, setSelectedPillar] = useState(null)

  // WHATSAPP SIMULATOR STATE
  const [waMessages, setWaMessages] = useState([
    { from: "bot", text: "Hello! Welcome to Sthayu Ventures. How can we assist your business operations today?", time: "10:02 AM" }
  ])
  const [waIsTyping, setWaIsTyping] = useState(false)

  // INSTAGRAM SIMULATOR STATE
  const [igTriggered, setIgTriggered] = useState(false)
  const [igMessages, setIgMessages] = useState([
    { from: "user", text: "Commented on Reel: 'SEND LINK' 🔥", time: "Just now" },
    { from: "bot", text: "Hey Alex! 👋 Here is your instant access to our Workflow Automation Architecture Guide + 2026 Strategy Template:", time: "Just now", isLink: true }
  ])

  // EMAIL SIMULATOR STATE
  const [selectedEmail, setSelectedEmail] = useState(0)
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "Marcus Vance",
      company: "Vance Logistics Global",
      subject: "Urgent: Automating dispatch notifications & driver WhatsApp bot",
      snippet: "We handle 500+ shipments daily and our team is drowning in manual status queries...",
      time: "2 mins ago",
      tag: "High Value Lead",
      tagColor: "bg-[#d4b982]/20 text-[#d4b982] border-[#d4b982]/30",
      sentiment: "High Intent",
      aiDraft: "Hi Marcus,\n\nThanks for reaching out! We can integrate a WhatsApp Cloud Dispatch Agent with your logistics software to automate real-time status updates and driver dispatch alerts within 5 business days.\n\nI have prepared a quick architecture breakdown. Would tomorrow at 2:30 PM IST work for a 20-minute live demonstration?\n\nBest,\nSthayu AI Solutions Team"
    },
    {
      id: 2,
      sender: "Elena Rostova",
      company: "Aura Creative Studio",
      subject: "Inquiry regarding Instagram DM automation + Client Onboarding flow",
      snippet: "We get over 200 DMs a week on Instagram asking for service pricing and portfolio links...",
      time: "14 mins ago",
      tag: "Qualified Prospect",
      tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      sentiment: "Positive",
      aiDraft: "Hi Elena,\n\nOur Instagram Comment-to-DM automation captures 100% of Reel/Story engagement and automatically qualifies prospective clients before routing high-intent deals to your calendar.\n\nTake a look at our live interactive case study, or choose a slot directly on our calendar to discuss setup.\n\nCheers,\nSthayu Automations"
    },
    {
      id: 3,
      sender: "David Miller",
      company: "Nexus Finance Group",
      subject: "Billing confirmation & quarterly client review meeting",
      snippet: "Please share the invoice for Phase 2 milestone delivery and let's set up the monthly review...",
      time: "1 hr ago",
      tag: "Existing VIP Client",
      tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      sentiment: "Operational",
      aiDraft: "Hi David,\n\nPhase 2 milestone invoice has been generated and synchronized with your portal. I've also reserved Thursday at 4:00 PM for our quarterly KPI review.\n\nLooking forward to speaking!\n\nBest,\nSthayu Client Operations"
    }
  ])

  // CRM SIMULATOR STATE
  const [crmClient, setCrmClient] = useState({
    name: "Aarav Mehta",
    role: "VP of Growth · Apex Retail",
    status: "Active Enterprise Client",
    healthScore: 98,
    channels: ["WhatsApp", "Instagram", "Gmail", "HubSpot"],
    timeline: [
      { channel: "WhatsApp", action: "Triggered catalog query & booked discovery call", time: "Aug 28, 2026" },
      { channel: "Gmail", action: "AI Auto-responder dispatched customized NDA & contract", time: "Aug 29, 2026" },
      { channel: "Instagram", action: "Commented on product launch Reel, auto-sent VIP code", time: "Aug 30, 2026" },
      { channel: "CRM Sync", action: "Milestone 1 invoice generated and auto-synced with QuickBooks", time: "Yesterday" }
    ]
  })

  // WHATSAPP INTERACTION HANDLER
  const handleWaOption = (optionText, botReply) => {
    if (waIsTyping) return
    const newMsg = { from: "user", text: optionText, time: "Just now" }
    setWaMessages((prev) => [...prev, newMsg])
    setWaIsTyping(true)

    setTimeout(() => {
      setWaMessages((prev) => [
        ...prev,
        { from: "bot", text: botReply, time: "Just now" }
      ])
      setWaIsTyping(false)
    }, 900)
  }

  const resetWa = () => {
    setWaMessages([
      { from: "bot", text: "Hello! Welcome to Sthayu Ventures. How can we assist your business operations today?", time: "10:02 AM" }
    ])
    setWaIsTyping(false)
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section id="omnichannel" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <AnimatedSection>
          <SectionHeading
            badge="Omnichannel AI & Client Automations"
            title={
              <>
                WhatsApp, Instagram, Email & Client Ops <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#d4b982] bg-clip-text text-transparent">
                  Automated Into High-Converting Systems.
                </span>
              </>
            }
            subtitle="Never let a customer wait again. Connect WhatsApp Cloud API, Instagram DM automation, AI email auto-replies, and unified client CRM workflows to capture leads, answer questions, and retain clients 24/7."
          />
        </AnimatedSection>

        {/* 4 Feature Pillars Grid with Rich Visual Cards */}
        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {PILLARS.map((pillar, idx) => (
            <AnimatedSection key={pillar.id} delay={idx * 0.08}>
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]/90 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#d4b982]/40 hover:shadow-[0_20px_60px_rgba(212,185,130,0.1)] hover:-translate-y-1 h-full">
                
                {/* Visual Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border-b border-white/10">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#d4b982]/30 bg-[#d4b982]/10 px-2.5 py-1 text-[10px] font-mono font-bold text-[#d4b982] backdrop-blur-md">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Bottom Metric Callout */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Key Metric</div>
                      <div className="text-xl font-extrabold text-white font-mono">{pillar.metric}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-medium text-slate-300 bg-black/60 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                        {pillar.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#d4b982] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#d4b982] tracking-wide mt-0.5">
                      {pillar.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                      {pillar.features.slice(0, 4).map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 size={13} className="text-[#d4b982] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Actions */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedPillar(pillar)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-[#d4b982] transition-colors cursor-pointer"
                    >
                      <span>Explore Deliverables</span>
                      <Maximize2 size={12} className="text-[#d4b982]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollTo("contact")}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#d4b982] hover:text-[#e8d5b5] transition-colors cursor-pointer"
                    >
                      <span>Deploy System →</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* =========================================================================
           INTERACTIVE OMNICHANNEL SUITE SIMULATOR
           ========================================================================= */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 sm:mt-24 rounded-3xl border border-white/10 bg-[#0a0a0a]/95 p-6 sm:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
            
            {/* Header with Switcher Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d4b982] font-semibold">
                  <Sparkles size={13} />
                  <span>Interactive Live Suite Simulator</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  Test Autonomous Conversations & Client Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Interact with real simulated customer touchpoints across WhatsApp, Instagram, Email, and Client CRM.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                {SIMULATOR_TABS.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#d4b982] text-black font-bold shadow-md"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon size={14} />
                      <span>{tab.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* TAB CONTENT PANELS */}
            <div className="mt-8">
              
              {/* 1. WHATSAPP SIMULATOR */}
              {activeTab === "whatsapp" && (
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: WhatsApp Phone Simulation */}
                  <div className="lg:col-span-6 mx-auto w-full max-w-md">
                    <div className="rounded-[36px] border-[3px] border-white/20 bg-[#111b21] p-3 shadow-2xl relative">
                      {/* Phone Speaker Notch */}
                      <div className="mx-auto h-3.5 w-24 rounded-full bg-white/20 mb-2" />
                      
                      {/* WhatsApp Header */}
                      <div className="flex items-center justify-between rounded-2xl bg-[#202c33] px-3.5 py-2.5 text-white border border-white/5">
                        <div className="flex items-center gap-2.5">
                          <div className="relative">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00a884] text-white font-bold text-xs">
                              S
                            </div>
                            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#202c33]" />
                          </div>
                          <div>
                            <div className="text-xs font-bold flex items-center gap-1">
                              <span>Sthayu Verified AI</span>
                              <ShieldCheck size={12} className="text-[#00a884]" />
                            </div>
                            <div className="text-[10px] text-emerald-400 font-mono">Official Business Account · 24/7</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={resetWa}
                          aria-label="Reset simulation"
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <RefreshCw size={12} />
                        </button>
                      </div>

                      {/* Chat Messages Body */}
                      <div className="my-3 h-[280px] overflow-y-auto space-y-2.5 px-2 py-1 scrollbar-thin">
                        <div className="text-center">
                          <span className="rounded-md bg-[#182229] px-2.5 py-0.5 text-[9px] text-slate-400 font-mono">
                            Messages are end-to-end encrypted · AI Agent Active
                          </span>
                        </div>

                        {waMessages.map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                                msg.from === "user"
                                  ? "bg-[#005c4b] text-white rounded-tr-none shadow-sm"
                                  : "bg-[#202c33] text-slate-100 rounded-tl-none border border-white/5 shadow-sm"
                              }`}
                            >
                              <p className="whitespace-pre-line">{msg.text}</p>
                              <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-400 font-mono">
                                <span>{msg.time}</span>
                                {msg.from === "user" && <span className="text-[#53bdeb]">✓✓</span>}
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {waIsTyping && (
                          <div className="flex justify-start">
                            <div className="rounded-2xl rounded-tl-none bg-[#202c33] px-3.5 py-2.5 text-xs text-slate-400 flex items-center gap-1.5 border border-white/5">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00a884] animate-bounce" />
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00a884] animate-bounce [animation-delay:0.2s]" />
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00a884] animate-bounce [animation-delay:0.4s]" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Prompt Quick Actions */}
                      <div className="border-t border-white/10 pt-2.5 space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold px-1">
                          Click to trigger live agent response:
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              handleWaOption(
                                "What services and automations do you build?",
                                "We engineer 3 core pillars:\n1. Autonomous AI Agents (SDR, Support, Triage)\n2. End-to-End Workflow Automations (Make, n8n, CRM)\n3. Modern Websites & Custom Web Portals.\n\nWould you like a custom architecture audit?"
                              )
                            }
                            className="rounded-xl bg-[#202c33] px-2.5 py-2 text-[11px] text-left text-slate-200 hover:bg-[#005c4b] hover:text-white transition-colors border border-white/5 cursor-pointer line-clamp-1"
                          >
                            🚀 What do you build?
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleWaOption(
                                "Can I book a 20-min strategy call?",
                                "Confirmed! 🗓️ Here are our next available executive slots:\n• Today: 3:30 PM IST\n• Tomorrow: 11:00 AM IST\n\nClick here to lock your slot: [sthayu.com/book-call]. Syncing with Google Calendar..."
                              )
                            }
                            className="rounded-xl bg-[#202c33] px-2.5 py-2 text-[11px] text-left text-slate-200 hover:bg-[#005c4b] hover:text-white transition-colors border border-white/5 cursor-pointer line-clamp-1"
                          >
                            📅 Book a Strategy Call
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleWaOption(
                                "Can you send the pricing & deliverables deck?",
                                "📄 PDF Sent: [Sthayu_Automation_Pricing_2026.pdf] (2.4 MB)\n\nIncludes our Growth Plan ($1,850/mo) and Custom Enterprise Engine. Shall we schedule a walk-through?"
                              )
                            }
                            className="rounded-xl bg-[#202c33] px-2.5 py-2 text-[11px] text-left text-slate-200 hover:bg-[#005c4b] hover:text-white transition-colors border border-white/5 cursor-pointer line-clamp-1"
                          >
                            💰 Get Pricing Deck
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleWaOption(
                                "How does WhatsApp connect to our CRM?",
                                "Seamlessly! Every conversation, contact tag, and qualified deal status automatically pushes via webhook into HubSpot, Zoho, Salesforce, or Notion in <1 second."
                              )
                            }
                            className="rounded-xl bg-[#202c33] px-2.5 py-2 text-[11px] text-left text-slate-200 hover:bg-[#005c4b] hover:text-white transition-colors border border-white/5 cursor-pointer line-clamp-1"
                          >
                            🔄 CRM Integration Flow
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Highlights */}
                  <div className="lg:col-span-6 space-y-5 text-left">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#00a884]/10 border border-[#00a884]/30 px-3 py-1 text-xs font-mono font-bold text-[#00a884]">
                      <Smartphone size={13} />
                      <span>WhatsApp Business Cloud API Engine</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Convert Inbound WhatsApp Traffic Into Closed Deals In Real Time
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      More than 80% of business in high-growth markets happens on WhatsApp. Sthayu builds intelligent bots that don't sound robotic — they comprehend nuanced customer questions, check inventory or booking slots, and guide buyers straight to checkout.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00a884]/10 text-[#00a884] border border-[#00a884]/20">
                          <Zap size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Sub-3 Second Instant Auto-Reply</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">Zero customer drop-off. Instant response during peak hours, weekends, and holidays.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20">
                          <Bot size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Contextual Memory & Human Handoff</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">Remembers client history and flags human managers in Slack when high-value negotiations begin.</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => scrollTo("contact")}
                        className="btn-primary flex items-center gap-2 text-xs"
                      >
                        <span>Build Your WhatsApp Bot</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. INSTAGRAM SIMULATOR */}
              {activeTab === "instagram" && (
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: IG DM Phone Mockup */}
                  <div className="lg:col-span-6 mx-auto w-full max-w-md">
                    <div className="rounded-[36px] border-[3px] border-white/20 bg-[#000] p-3 shadow-2xl relative text-white">
                      <div className="mx-auto h-3.5 w-24 rounded-full bg-white/20 mb-2" />
                      
                      {/* IG DM Top Bar */}
                      <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3.5 py-2.5 border border-white/10">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
                            <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold">
                              ST
                            </div>
                          </div>
                          <div>
                            <div className="text-xs font-bold flex items-center gap-1">
                              <span>sthayu.ventures</span>
                              <span className="text-blue-400 text-xs">✓</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">Automated Direct Messages</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          Active Trigger
                        </span>
                      </div>

                      {/* Chat Messages */}
                      <div className="my-3 h-[260px] overflow-y-auto space-y-3 px-2 py-1">
                        <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10 text-center">
                          <div className="text-[10px] text-slate-400 font-mono">Instagram Post / Reel Trigger</div>
                          <div className="text-xs font-bold text-white mt-1">"Comment 'AUTOMATE' to get our 2026 AI Ops Blueprint"</div>
                        </div>

                        {igMessages.map((msg, i) => (
                          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                              msg.from === "user" ? "bg-[#3797f0] text-white rounded-tr-none" : "bg-[#262626] text-slate-100 rounded-tl-none border border-white/10"
                            }`}>
                              <p>{msg.text}</p>
                              {msg.isLink && (
                                <div className="mt-2 rounded-xl bg-white/10 p-2 border border-white/10">
                                  <div className="text-[11px] font-bold text-[#d4b982]">📄 Sthayu_Automation_Framework.pdf</div>
                                  <div className="text-[9px] text-slate-300">Click to view private resource link</div>
                                </div>
                              )}
                              <span className="text-[9px] text-slate-400 block text-right mt-1">{msg.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Triggers */}
                      <div className="border-t border-white/10 pt-2.5 space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold px-1">
                          Test Instagram Automation Actions:
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIgMessages((prev) => [
                                ...prev,
                                { from: "user", text: "Commented 'PRICING' on your latest Story", time: "Just now" },
                                { from: "bot", text: "Hey! We've sent you our full rate card + custom calculator link in this DM. What type of workflow are you looking to automate first?", time: "Just now" }
                              ])
                            }}
                            className="flex-1 rounded-xl bg-white/10 hover:bg-[#d4b982] hover:text-black py-2 px-2 text-[11px] font-semibold text-slate-200 transition-colors border border-white/10 cursor-pointer"
                          >
                            💬 Trigger 'PRICING'
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIgMessages((prev) => [
                                ...prev,
                                { from: "user", text: "Mentioned you in their Story: 'Great automation teardown!'", time: "Just now" },
                                { from: "bot", text: "Thank you for the shoutout! 🔥 We really appreciate your support. Here is a private 15% discount token for your next project kickoff.", time: "Just now" }
                              ])
                            }}
                            className="flex-1 rounded-xl bg-white/10 hover:bg-[#d4b982] hover:text-black py-2 px-2 text-[11px] font-semibold text-slate-200 transition-colors border border-white/10 cursor-pointer"
                          >
                            ⭐ Story Mention Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Description */}
                  <div className="lg:col-span-6 space-y-5 text-left">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 px-3 py-1 text-xs font-mono font-bold text-pink-400">
                      <Instagram size={13} />
                      <span>Meta Verified Instagram Growth Engine</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Turn Every Follower, Comment & Reel Into A Direct Sales Pipeline
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Stop losing organic social engagement. When viewers comment on your Reels or reply to your Stories, our automation immediately fires a personalized DM with download links, booking invitations, and lead qualification queries.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                          <TrendingUp size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">100% Comment-to-DM Delivery</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">Captures high-intent social traffic without manual DM copy-pasting.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20">
                          <UserCheck size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Lead Qualification & CRM Logging</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">Captures customer emails and phone numbers inside DMs and pushes them to your CRM.</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => scrollTo("contact")}
                        className="btn-primary flex items-center gap-2 text-xs"
                      >
                        <span>Automate Your Instagram DMs</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. EMAIL AUTO-REPLY SIMULATOR */}
              {activeTab === "email" && (
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Email Triage Inbox */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono text-slate-400">
                      <span>Incoming Inquiries ({emails.length})</span>
                      <span className="text-[#d4b982] flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        AI Auto-Responder: Active
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {emails.map((em, idx) => (
                        <div
                          key={em.id}
                          onClick={() => setSelectedEmail(idx)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                            selectedEmail === idx
                              ? "bg-white/[0.06] border-[#d4b982] shadow-[0_0_20px_rgba(212,185,130,0.15)]"
                              : "bg-white/[0.02] border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-white truncate">{em.sender}</span>
                            <span className="text-[10px] font-mono text-slate-400">{em.time}</span>
                          </div>
                          <div className="text-[11px] font-medium text-slate-200 truncate">{em.subject}</div>
                          <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{em.snippet}</p>
                          
                          <div className="mt-3 flex items-center justify-between">
                            <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${em.tagColor}`}>
                              {em.tag}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">{em.sentiment}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: AI Auto-Generated Response Preview */}
                  <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-left">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4b982]">Autonomous AI Draft & Auto-Responder</span>
                        <h4 className="text-base font-bold text-white mt-0.5">{emails[selectedEmail].subject}</h4>
                        <div className="text-xs text-slate-400 mt-0.5">To: {emails[selectedEmail].sender} · {emails[selectedEmail].company}</div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        Ready to Auto-Send
                      </span>
                    </div>

                    <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                      {emails[selectedEmail].aiDraft}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Bot size={13} className="text-[#d4b982]" />
                        <span>Grounded on Sthayu Knowledge Base & Pricing Catalog</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            alert("Draft dispatched autonomously and logged in CRM!")
                          }}
                          className="btn-primary text-xs py-2 px-4"
                        >
                          <span>Auto-Approve & Send</span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* 4. CLIENT CRM HUB SIMULATOR */}
              {activeTab === "crm" && (
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Client Profile Card */}
                  <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4b982]/20 border border-[#d4b982]/30 text-[#d4b982] font-bold text-base">
                          AM
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">{crmClient.name}</h4>
                          <p className="text-xs text-slate-400">{crmClient.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Account Health</div>
                        <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">{crmClient.healthScore}% Optimal</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Status</div>
                        <div className="text-xs font-bold text-[#d4b982] font-mono mt-1">Enterprise Retainer</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">Connected Channels:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {crmClient.channels.map((ch) => (
                          <span key={ch} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium">
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => scrollTo("contact")}
                        className="btn-primary w-full text-xs justify-center"
                      >
                        <span>Set Up Client Automation</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Unified Activity Timeline */}
                  <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-left">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4b982]">Omnichannel Client Sync</span>
                        <h4 className="text-base font-bold text-white mt-0.5">360° Automated Interaction Log</h4>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        Live Webhook Feed
                      </span>
                    </div>

                    <div className="mt-5 space-y-4">
                      {crmClient.timeline.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 relative">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d4b982]/10 text-[#d4b982] border border-[#d4b982]/20 mt-0.5">
                            <Clock size={14} />
                          </div>
                          <div className="flex-1 p-3.5 rounded-2xl bg-black/40 border border-white/10">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">{item.channel}</span>
                              <span className="text-[10px] font-mono text-slate-400">{item.time}</span>
                            </div>
                            <p className="text-xs text-slate-300 mt-1">{item.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA Strip */}
        <AnimatedSection delay={0.25}>
          <div className="mt-14 rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Want custom WhatsApp, Instagram, Email & CRM automations for your business?
              </h4>
              <p className="mt-1 text-xs text-slate-400">
                We design, configure, and maintain your entire conversational infrastructure with guaranteed uptime and 24/7 coverage.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="btn-primary shrink-0"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimatedSection>

      </div>

      {/* DETAILED PILLAR MODAL */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0a] shadow-2xl text-white my-8"
            >
              {/* Modal Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={selectedPillar.image}
                  alt={selectedPillar.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />

                <button
                  type="button"
                  onClick={() => setSelectedPillar(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white border border-white/20 hover:bg-[#d4b982] hover:text-black transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="rounded-full bg-[#d4b982] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-black shadow-sm">
                    {selectedPillar.badge} · {selectedPillar.tag}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <div>
                  <h4 className="text-sm font-bold text-white">System Architecture & Overview</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedPillar.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#d4b982] font-semibold">
                    Full Deliverables & Capabilities:
                  </h4>
                  <div className="mt-3 grid gap-2.5">
                    {selectedPillar.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 size={14} className="text-[#d4b982] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                  <span className="text-slate-400 font-mono">Tech Stack:</span>
                  <span className="font-semibold text-slate-200 font-mono">{selectedPillar.tech}</span>
                </div>

                {/* Modal CTA Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedPillar(null)}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/10 cursor-pointer"
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPillar(null)
                      scrollTo("contact")
                    }}
                    className="btn-primary flex items-center gap-2 text-xs"
                  >
                    <span>Deploy This System</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
