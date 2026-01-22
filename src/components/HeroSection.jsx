import DecryptedText from './DecryptedText'
import LiquidEther from './LiquidEther'

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* LiquidEther Background */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
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

      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" style={{ zIndex: 1 }}></div>

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
            <span className="block text-white animate-fade-in-up opacity-0 delay-100">
              <DecryptedText
                text="We are"
                speed={50}
                maxIterations={20}
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
                className="revealed"
              />
            </span>
            <span className="block gradient-text animate-fade-in-up opacity-0 delay-200">
              <DecryptedText
                text="Sojku"
                speed={65}
                maxIterations={20}
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
                className="revealed"
              />
            </span>
            <span className="block text-dark-400 text-4xl md:text-5xl lg:text-6xl mt-4 animate-fade-in-up opacity-0 delay-300">
              <DecryptedText
                text="Engineering Company."
                speed={70}
                maxIterations={20}
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
                className="revealed"
              />
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-dark-400 leading-relaxed max-w-2xl mb-12 animate-fade-in-up opacity-0 delay-400">
            <DecryptedText
              text="A pioneering software engineering company building innovative mobile apps, websites, and AI solutions that create sustainable impact across Africa."
              speed={75}
              maxIterations={15}
              animateOn="view"
              revealDirection="start"
              sequential
              useOriginalCharsOnly={false}
              className="revealed"
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-500">
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
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent"></div>
    </section>
  )
}
