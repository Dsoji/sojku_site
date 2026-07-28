import { useState } from 'react'
import { CALENDLY_URL, openCalendly } from '../lib/calendly'
import ContactForm from './ContactForm'

const display = "'Bricolage Grotesque', sans-serif"

const cardBtn = {
  width: '100%',
  fontFamily: display,
  fontSize: 19,
  fontWeight: 700,
  padding: '18px 28px',
  borderRadius: 100,
  border: 'none',
  cursor: 'pointer',
  textAlign: 'center',
}

const primaryBtn = { ...cardBtn, background: '#17131f', color: '#ece8f0' }
const secondaryBtn = {
  ...cardBtn,
  background: 'transparent',
  color: '#17131f',
  border: '2px solid #17131f',
  textDecoration: 'none',
  display: 'block',
}

export default function ContactCTA() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="contact" className="mx-auto" style={{ maxWidth: 1360, padding: '96px clamp(20px,5vw,40px)' }}>
      <div style={{ background: '#a06bff', borderRadius: 28, padding: 'clamp(40px,6vw,80px) clamp(28px,5vw,64px)', position: 'relative', overflow: 'hidden' }}>
        <div
          className="grid"
          style={{ gap: 'clamp(40px,5vw,72px)', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center' }}
        >
          {/* Left: copy */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#17131f', opacity: 0.7, marginBottom: 24 }}>
              Let's build something
            </div>
            <h2 style={{ margin: 0, fontFamily: display, fontWeight: 800, fontSize: 'clamp(44px,7vw,104px)', lineHeight: 0.86, letterSpacing: '-0.045em', textTransform: 'uppercase', color: '#17131f' }}>
              Got a project?
            </h2>
            <p style={{ margin: '28px 0 0', fontSize: 19, lineHeight: 1.5, color: '#241c33', maxWidth: 480 }}>
              Send us the details and we'll come back with a plan, a timeline and a fixed
              quote within 48 hours — or book a call and talk it through.
            </p>
          </div>

          {/* Right: chooser card, swaps to the form when "Send a message" is picked */}
          {showForm ? (
            <div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{ background: 'none', border: 'none', padding: 0, marginBottom: 16, color: '#17131f', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
              >
                ← Back to options
              </button>
              <ContactForm />
            </div>
          ) : (
            <div
              style={{
                background: '#ece8f0',
                borderRadius: 20,
                padding: 'clamp(28px,4vw,40px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7a4fd0' }}>
                Start here
              </div>
              <div style={{ fontFamily: display, fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', color: '#17131f', lineHeight: 1.05 }}>
                How would you like to reach us?
              </div>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="btn-press"
                style={{ ...primaryBtn, marginTop: 8 }}
              >
                Send a message
              </button>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openCalendly}
                className="btn-press"
                style={secondaryBtn}
              >
                Book a call
              </a>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: '#6a6574', textAlign: 'center' }}>
                We reply within 48 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
