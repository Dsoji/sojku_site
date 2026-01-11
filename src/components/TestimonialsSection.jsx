export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Sojku delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise made all the difference in our product launch.",
      author: "Adebayo",
      role: "CEO, Fazt Order"
    },
    {
      quote: "Working with Sojku was a game-changer for our fintech platform. They understood our vision and built a secure, scalable solution that our users love.",
      author: "Emmanuel",
      role: "Founder, Foax Exchange"
    },
    {
      quote: "The team at Sojku is passionate and committed to excellence. They built our SwiftSwap platform with precision and delivered ahead of schedule.",
      author: "Oluwaseun",
      role: "CTO, SwiftSwap"
    },
    {
      quote: "Professional, reliable, and incredibly skilled. Sojku transformed our ideas into a polished product that's driving real business results.",
      author: "Chioma",
      role: "Product Manager"
    }
  ]

  return (
    <section id="reviews" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reviews
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-cyber rounded-full"></div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group card-glow p-8 hover-lift hover:border-accent/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="text-accent/20 mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-dark-300 text-lg leading-relaxed mb-8 group-hover:text-dark-200 transition-colors duration-300">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-cyber flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-dark-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
