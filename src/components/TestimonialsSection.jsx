const display = "'Bricolage Grotesque', sans-serif"

const testimonials = [
  { quote: 'Amazing application — thank you, I love it.', initial: 'F', name: 'Favour Akinkunmi', project: 'Foax Exchange' },
  { quote: 'Sojku delivered exactly what we needed, on time and beautifully done.', initial: 'F', name: 'Fifehanmi', project: 'Fazt Order' },
]

export default function TestimonialsSection() {
  return (
    <section className="mx-auto" style={{ maxWidth: 1360, padding: '96px clamp(20px,5vw,40px) 40px' }}>
      <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9b96a6', marginBottom: 40 }}>
        Kind words
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 28 }}>
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between"
            style={{ margin: 0, background: '#1c1922', border: '1px solid #2c2833', borderRadius: 20, padding: 40, gap: 32 }}
          >
            <blockquote style={{ margin: 0, fontFamily: display, fontSize: 'clamp(26px,3vw,38px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#ece8f0' }}>
              “{t.quote}”
            </blockquote>
            <figcaption className="flex items-center justify-between" style={{ gap: 16 }}>
              <div className="flex items-center" style={{ gap: 14 }}>
                <div className="flex items-center justify-center" style={{ width: 44, height: 44, borderRadius: '50%', background: '#a06bff', color: '#17131f', fontFamily: display, fontWeight: 800, fontSize: 18 }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{t.name}</div>
                  <div style={{ fontSize: 14, color: '#9b96a6' }}>{t.project}</div>
                </div>
              </div>
              <div style={{ fontSize: 15, color: '#c9a2ff', letterSpacing: 2 }}>★★★★★</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
