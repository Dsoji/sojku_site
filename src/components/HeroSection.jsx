export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyber/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="animate-fade-in-up opacity-0 mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-dark-800/80 border border-dark-700 text-dark-300 text-sm font-medium backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Welcome to the future
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
            <span className="block text-white animate-fade-in-up opacity-0 delay-100">We are</span>
            <span className="block gradient-text animate-fade-in-up opacity-0 delay-200">Sojku</span>
            <span className="block text-dark-400 text-4xl md:text-5xl lg:text-6xl mt-4 animate-fade-in-up opacity-0 delay-300">
              Engineering Company.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-dark-400 leading-relaxed max-w-2xl mb-12 animate-fade-in-up opacity-0 delay-400">
            A pioneering software engineering company building innovative mobile apps, 
            websites, and AI solutions that create sustainable impact across Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up opacity-0 delay-500">
            <a
              href="#portfolio"
              className="group relative overflow-hidden bg-gradient-to-r from-accent to-cyber text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 rounded-full font-semibold border border-dark-700 text-dark-300 hover:border-accent hover:text-white transition-all duration-300"
            >
              Start a Project
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up opacity-0 delay-600">
            {[
              { value: '50+', label: 'Projects' },
              { value: '20+', label: 'Clients' },
              { value: '5+', label: 'Years' },
              { value: '99%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-dark-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent"></div>
    </section>
  )
}
