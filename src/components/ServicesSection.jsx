export default function ServicesSection() {
  const services = [
    {
      title: 'Mobile',
      subtitle: 'Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        'iOS & Android Apps',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Real-time Features'
      ]
    },
    {
      title: 'Web',
      subtitle: 'Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      items: [
        'Custom Web Applications',
        'E-commerce Platforms',
        'Progressive Web Apps',
        'Cloud Infrastructure'
      ]
    },
    {
      title: 'AI',
      subtitle: 'Solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      items: [
        'Machine Learning Models',
        'AI Chatbots & Assistants',
        'Process Automation',
        'Predictive Systems'
      ]
    },
    {
      title: '3D & 2D',
      subtitle: 'Design & Animation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      items: [
        '3D Modeling & Rendering',
        '2D Illustrations',
        'Motion Graphics',
        'Product Visualization'
      ]
    },
    {
      title: 'Product',
      subtitle: 'Design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      items: [
        'UI/UX Design',
        'Brand Identity',
        'Prototyping',
        'Design Systems'
      ]
    }
  ]

  return (
    <section id="services" className="section-padding bg-dark-900 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-cyber rounded-full animate-line"></div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-glow p-8 hover-lift hover:border-accent/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-cyber/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                <div className="w-full h-px bg-dark-700 my-3"></div>
                <h4 className="text-lg font-medium text-cyber">{service.subtitle}</h4>
              </div>
              
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-dark-400 text-sm flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
