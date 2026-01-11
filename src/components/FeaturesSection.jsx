export default function FeaturesSection() {
  const features = [
    {
      title: 'Cutting-Edge Technology',
      description: 'We use the latest frameworks, tools, and methodologies to build future-proof solutions.',
      icon: '🚀'
    },
    {
      title: 'Expert Team',
      description: 'Our team of experienced developers, designers, and AI specialists bring years of expertise.',
      icon: '👥'
    },
    {
      title: 'Agile Development',
      description: 'Fast iterations, continuous feedback, and transparent communication throughout the project.',
      icon: '⚡'
    },
    {
      title: 'Scalable Solutions',
      description: 'Build once, scale infinitely. Our solutions grow with your business needs.',
      icon: '📈'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support and maintenance to keep your solutions running smoothly.',
      icon: '🛡️'
    },
    {
      title: 'Cost-Effective',
      description: 'Competitive pricing without compromising on quality or functionality.',
      icon: '💰'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-dark p-8 rounded-2xl hover:border-primary-700/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
