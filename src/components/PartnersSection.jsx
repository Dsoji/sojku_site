import opensauceryLogo from '../assets/image.webp'

export default function PartnersSection() {
  return (
    <section id="partners" className="section-padding relative">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partners
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-cyber rounded-full"></div>
        </div>

        {/* Partner card */}
        <a
          href="https://www.opensaucery.africa/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block card-glow p-8 md:p-12 max-w-3xl hover-lift hover:border-accent/30 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-white p-3 group-hover:scale-105 transition-transform duration-300">
              <img
                src={opensauceryLogo}
                alt="OpenSaucery Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                Opensaucery
              </h3>
              <p className="text-dark-400 mb-4 max-w-md group-hover:text-dark-300 transition-colors duration-300">
                We partner with Opensaucery, a pioneering African engineering company,
                to build innovative products and digital solutions that drive growth across the continent.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-accent group-hover:gap-4 transition-all duration-300">
                <span className="text-sm font-semibold uppercase tracking-wider">Visit Partner</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Decorative gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
      </div>
    </section>
  )
}
