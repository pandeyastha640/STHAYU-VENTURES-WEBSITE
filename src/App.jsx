import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MediaShowcase from "./components/MediaShowcase"
import ProblemDiscovery from "./components/ProblemDiscovery"
import WhySthayu from "./components/WhySthayu"
import Services from "./components/Services"
import AIAgents from "./components/AIAgents"
import SystemStack from "./components/SystemStack"
import HowItWorks from "./components/HowItWorks"
import Showcase from "./components/Showcase"
import CaseStudies from "./components/CaseStudies"
import Pricing from "./components/Pricing"
import InteractiveShowcase from "./components/InteractiveShowcase"
import PremiumPortfolioGallery from "./components/PremiumPortfolioGallery"
import AssessmentSection from "./components/AssessmentSection"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import AIOrb from "./components/AIOrb"
import "./premium-restyle.css"
import "./global-theme.css"

function App() {
  return (
    <div className="page-shell sv-v2 relative min-h-screen bg-[#05070A] text-white antialiased">
      <div className="persistent-3d-environment pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb--one" />
        <div className="ambient-orb ambient-orb--two" />
        <div className="ambient-orb ambient-orb--three" />
        <div className="ambient-ring ambient-ring--one" />
        <div className="ambient-ring ambient-ring--two" />
        <div className="ambient-node ambient-node--one" />
        <div className="ambient-node ambient-node--two" />
        <div className="ambient-node ambient-node--three" />
        <div className="ambient-node ambient-node--four" />
        <div className="ambient-node ambient-node--five" />
        <div className="ambient-node ambient-node--six" />
        <div className="ambient-rail ambient-rail--one" />
        <div className="ambient-rail ambient-rail--two" />
        <div className="ambient-rail ambient-rail--three" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="relative z-10">
          <section id="hero">
            <Hero />
          </section>
          <section id="media-showcase"><MediaShowcase /></section>
          <section id="problem-discovery"><ProblemDiscovery /></section>
          <section id="why-sthayu"><WhySthayu /></section>
          <section id="services"><Services /></section>
          <section id="ai-agents"><AIAgents /></section>
          <section id="system-stack"><SystemStack /></section>
          <section id="how-it-works"><HowItWorks /></section>
          <section id="showcase"><Showcase /></section>
          <section id="case-studies"><CaseStudies /></section>
          <InteractiveShowcase />
          <PremiumPortfolioGallery />
          <section id="pricing"><Pricing /></section>
          <AssessmentSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
