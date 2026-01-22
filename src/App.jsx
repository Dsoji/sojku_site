import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import PartnersSection from './components/PartnersSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import LiquidEther from './components/LiquidEther'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden relative">
      {/* Site-wide Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="relative z-10 pointer-events-auto">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <PartnersSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
