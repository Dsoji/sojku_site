import { useState } from 'react'
import foaxImg from '../assets/Screenshot 2026-01-11 at 17.30.33.png'
import swiftswapImg from '../assets/Screenshot 2026-01-11 at 17.30.53.png'
import faztOrderImg from '../assets/Screenshot 2026-01-11 at 17.31.01.png'
import faztVendorImg from '../assets/Screenshot 2026-01-11 at 17.31.13.png'
import faztWebsiteImg from '../assets/logofazt.webp'

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      number: '01',
      title: 'Fazt Website',
      description: 'A comprehensive delivery platform website connecting food vendors, riders, and customers with real-time tracking and seamless ordering.',
      tags: ['react', 'nodejs', 'mongodb', 'websocket'],
      link: 'https://www.faztorder.net/',
      image: faztWebsiteImg,
      status: 'completed',
      isLogo: true
    },
    {
      number: '02',
      title: 'Fazt Order',
      description: 'iOS app for customers to order food from local restaurants with real-time delivery tracking and secure payments.',
      tags: ['swift', 'ios', 'firebase', 'stripe'],
      link: 'https://apps.apple.com/ng/app/fazt-order/id6749697862',
      image: faztOrderImg,
      status: 'completed',
      isLogo: false
    },
    {
      number: '03',
      title: 'Fazt Vendor',
      description: 'Business management app for restaurant owners to manage orders, track deliveries, and monitor operations.',
      tags: ['swift', 'ios', 'firebase', 'stripe'],
      link: 'https://apps.apple.com/ng/app/fazt-vendor/id6749553020',
      image: faztVendorImg,
      status: 'completed',
      isLogo: false
    },
    {
      number: '04',
      title: 'SwiftSwap',
      description: 'Fast and secure cryptocurrency exchange platform enabling seamless digital asset trading with competitive rates.',
      tags: ['typescript', 'flutter', 'nextjs', 'nodejs'],
      link: 'https://apps.apple.com/ng/iphone/search?term=swiftswap',
      image: swiftswapImg,
      status: 'completed',
      isLogo: false
    },
    {
      number: '05',
      title: 'Foax Exchange',
      description: 'Advanced cryptocurrency exchange application with real-time market data and secure wallet integration.',
      tags: ['typescript', 'react-native', 'nodejs', 'redis'],
      link: 'https://apps.apple.com/ng/app/foax-exchange/id6742742934',
      image: foaxImg,
      status: 'completed',
      isLogo: false
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const project = projects[currentIndex]

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-cyber rounded-full"></div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-105"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-105"
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slideshow */}
        <div className="relative">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-glow overflow-hidden transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row min-h-[400px]">
              {/* Image */}
              <div className={`lg:w-1/2 h-72 lg:h-auto overflow-hidden bg-dark-800 flex items-center justify-center relative ${project.isLogo ? 'p-12' : ''}`}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-cyber/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`relative z-10 ${project.isLogo ? 'w-40 h-40 object-contain' : 'w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700'}`}
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Status badge */}
                    <span className={`text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${
                      project.status === 'completed' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'Coming Soon'}
                    </span>
                  </div>
                  <span className="text-7xl lg:text-8xl font-bold text-dark-800 group-hover:text-accent/20 transition-colors duration-500">
                    {project.number}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-dark-400 mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1.5 rounded-full bg-dark-800/80 text-dark-400 border border-dark-700 group-hover:border-accent/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Preview link */}
                <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all duration-300">
                  <span className="text-sm font-semibold uppercase tracking-wider">View Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-accent to-cyber' 
                  : 'w-2 bg-dark-700 hover:bg-dark-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project counter */}
        <div className="flex items-center justify-center gap-2 mt-6 text-dark-500 text-sm">
          <span className="text-accent font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
