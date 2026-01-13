import { useState } from 'react'

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '21f2401f-6174-47df-90ee-bc3b0daf7376',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} via Sojku website`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setStatusMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Failed to send message. Please try again later.')
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle')
      setStatusMessage('')
    }, 5000)
  }

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyber/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-cyber rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <p className="text-dark-400 text-lg mb-8 max-w-md">
              Have a project in mind? Let's discuss how we can help bring your ideas to life. 
              We're always excited to work on new challenges.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:o.sojku@gmail.com" className="text-dark-300 hover:text-accent transition-colors duration-300">
                  o.sojku@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-dark-300">
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card-glow p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-dark-400 text-sm mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3.5 text-white placeholder-dark-500 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-dark-400 text-sm mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3.5 text-white placeholder-dark-500 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-dark-400 text-sm mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3.5 text-white placeholder-dark-500 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Status message */}
              {statusMessage && (
                <div className={`p-4 rounded-xl text-sm ${
                  status === 'success' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/30'
                }`}>
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-accent to-cyber text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
