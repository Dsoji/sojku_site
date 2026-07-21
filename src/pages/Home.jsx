import HeroSection from '../components/HeroSection'
import LogoMarquee from '../components/LogoMarquee'
import ServicesSection from '../components/ServicesSection'
import PortfolioSection from '../components/PortfolioSection'
import StackSection from '../components/StackSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactCTA from '../components/ContactCTA'

function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <PortfolioSection />
      <StackSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  )
}

export default Home
