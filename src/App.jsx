import { lazy, Suspense } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cinematic3DBackground from "./components/Cinematic3DBackground"

const ProblemDiscovery = lazy(() => import("./components/ProblemDiscovery"))
const Services = lazy(() => import("./components/Services"))
const AIAgents = lazy(() => import("./components/AIAgents"))
const HowItWorks = lazy(() => import("./components/HowItWorks"))
const IndustrySolutions = lazy(() => import("./components/IndustrySolutions"))
const Showcase = lazy(() => import("./components/Showcase"))
const Pricing = lazy(() => import("./components/Pricing"))
const AssessmentSection = lazy(() => import("./components/AssessmentSection"))
const FinalCTA = lazy(() => import("./components/FinalCTA"))
const Footer = lazy(() => import("./components/Footer"))

import "./premium-restyle.css"

function SectionDivider() {
  return (
    <div className="relative w-full h-px mx-auto max-w-6xl" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  )
}

function App() {
  return (
    <div className="page-shell sv-v2 relative min-h-screen overflow-x-hidden text-white antialiased">
      <Cinematic3DBackground />

      <div
        className="persistent-3d-environment pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ambient-depth" />
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb--one" />
        <div className="ambient-orb ambient-orb--two" />
        <div className="ambient-orb ambient-orb--three" />
        <div className="ambient-light ambient-light--one" />
        <div className="ambient-light ambient-light--two" />
        <div className="ambient-vignette" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={null}>
            <SectionDivider />
            <ProblemDiscovery />
            <SectionDivider />
            <Services />
            <SectionDivider />
            <AIAgents />
            <SectionDivider />
            <HowItWorks />
            <SectionDivider />
            <IndustrySolutions />
            <SectionDivider />
            <Showcase />
            <SectionDivider />
            <Pricing />
            <SectionDivider />
            <AssessmentSection />
            <FinalCTA />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
