import { useState, useEffect } from 'react'
import logo from '../assets/IMG_5733.JPG'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
  ]

  return (
    <nav className="fixed top-8 w-full z-50 px-6">
      <div className={`max-w-4xl mx-auto transition-all duration-500 border border-white/5 ${isMenuOpen ? 'rounded-[2.5rem]' : 'rounded-full'
        } ${isScrolled || isMenuOpen
          ? 'bg-gradient-to-r from-black/80 via-[#0a0514]/90 to-black/80 backdrop-blur-xl shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-4'
        }`}>
        <div className="flex justify-between items-center px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors">
              <img src={logo} alt="Sojku Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
              Sojku
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-dark-300 hover:text-white text-sm font-medium transition-all duration-300 group flex flex-col items-center"
              >
                {link.name}
                <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_8px_rgba(82,39,255,0.8)]"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative overflow-hidden bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Connect</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-1 hover:text-accent transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 pb-6 pt-2 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-dark-300 hover:text-accent transition-colors text-center py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-accent/20 border border-accent/30 text-white px-5 py-3 rounded-full text-sm font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
