const display = "'Bricolage Grotesque', sans-serif"

const MAILTO =
  'mailto:o.sojku@gmail.com?subject=New%20project%20enquiry%20via%20sojku.dev'

export default function ContactCTA() {
  return (
    <section id="contact" className="mx-auto" style={{ maxWidth: 1360, padding: '96px clamp(20px,5vw,40px)' }}>
      <div style={{ background: '#a06bff', borderRadius: 28, padding: 'clamp(48px,7vw,100px) clamp(32px,5vw,72px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#17131f', opacity: 0.7, marginBottom: 24 }}>
          Let's build something
        </div>
        <h2 style={{ margin: 0, fontFamily: display, fontWeight: 800, fontSize: 'clamp(48px,9vw,132px)', lineHeight: 0.86, letterSpacing: '-0.045em', textTransform: 'uppercase', color: '#17131f' }}>
          Got a project?
        </h2>
        <div className="flex flex-wrap items-end justify-between" style={{ gap: 32, marginTop: 48 }}>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, color: '#241c33', maxWidth: 480 }}>
            Tell us what you're building. We'll come back with a plan, a timeline and a fixed
            quote within 48 hours.
          </p>
          <a
            href={MAILTO}
            className="btn-press"
            style={{ background: '#17131f', color: '#ece8f0', fontFamily: display, fontSize: 22, fontWeight: 700, padding: '20px 40px', borderRadius: 100 }}
          >
            Book a call →
          </a>
        </div>
      </div>
    </section>
  )
}
