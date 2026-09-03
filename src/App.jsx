import { useState, lazy, Suspense } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cinematic3DBackground from "./components/Cinematic3DBackground"
import AdminModal from "./components/AdminModal"

const ProblemDiscovery = lazy(() => import("./components/ProblemDiscovery"))
const Services = lazy(() => import("./components/Services"))
const OmnichannelAutomation = lazy(() => import("./components/OmnichannelAutomation"))
const HowItWorks = lazy(() => import("./components/HowItWorks"))
const ResultsSection = lazy(() => import("./components/ResultsSection"))
const Pricing = lazy(() => import("./components/Pricing"))
const Footer = lazy(() => import("./components/Footer"))

function SectionDivider() {
  return (
    <div className="relative w-full h-px mx-auto max-w-6xl" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

function App() {
  const [adminOpen, setAdminOpen] = useState(false)

  return (
    <div className="page-shell relative min-h-screen overflow-x-hidden text-slate-100 antialiased bg-[#050505]">
      <Cinematic3DBackground />

      <div className="relative z-10">
        {/* 1. NAVBAR */}
        <Navbar />

        <main className="relative z-10">
          {/* 2. HERO SECTION */}
          <Hero />

          <Suspense fallback={null}>
            {/* 3. THE PROBLEM & THE SOLUTION */}
            <SectionDivider />
            <ProblemDiscovery />

            {/* 4. WHAT STHAYU BUILDS (Capability Groups + Interactive Workflow Demos + Portfolio) */}
            <SectionDivider />
            <Services />

            {/* 5. OMNICHANNEL MESSAGING, AUTO-REPLIES & CLIENT OPS */}
            <SectionDivider />
            <OmnichannelAutomation />

            {/* 6. HOW IT WORKS (3 Simple Steps) */}
            <SectionDivider />
            <HowItWorks />

            {/* 6. VERIFIED RESULTS & CASE STUDIES */}
            <SectionDivider />
            <ResultsSection />

            {/* 7. TRANSPARENT PRICING & BOOKING FORM */}
            <SectionDivider />
            <Pricing />
          </Suspense>
        </main>

        {/* OFFICIAL FOOTER */}
        <Footer onOpenAdmin={() => setAdminOpen(true)} />

        {/* ADMIN LEADS PORTAL MODAL */}
        <AdminModal isOpen={adminOpen} onClose={() => setAdminOpen(false)} />
      </div>
    </div>
  )
}

export default App
