import { Link } from 'react-router-dom'
import { CALENDLY_URL, openCalendly } from '../lib/calendly'

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(20,17,23,0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: '#2c2833',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1360, padding: '20px clamp(20px, 5vw, 40px)' }}
      >
        <Link
          to="/"
          className="flex items-center"
          style={{
            gap: 2,
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#ece8f0',
          }}
        >
          SOJKU<span style={{ color: '#a06bff' }}>°</span>
        </Link>

        <nav
          className="flex flex-wrap items-center justify-end"
          style={{
            columnGap: 6,
            rowGap: 8,
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          <a href="#work" className="pill-ghost" style={pill}>Work</a>
          <a href="#services" className="pill-ghost" style={pill}>Services</a>
          <a href="#stack" className="pill-ghost" style={pill}>Stack</a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openCalendly}
            className="btn-press"
            style={{ padding: '9px 17px', background: '#a06bff', color: '#17131f', borderRadius: 100 }}
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  )
}

const pill = {
  padding: '9px 15px',
  border: '1px solid #37323f',
  borderRadius: 100,
}
