import { Link } from 'react-router-dom'

const display = "'Bricolage Grotesque', sans-serif"

const heading = { fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 12, color: '#6a6574' }
const colStyle = { display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, color: '#b8b3c4' }

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #2c2833' }}>
      <div
        className="mx-auto flex flex-wrap items-start justify-between"
        style={{ maxWidth: 1360, padding: '56px clamp(20px,5vw,40px)', gap: 40 }}
      >
        <div style={{ maxWidth: 320 }}>
          <div style={{ fontFamily: display, fontSize: 26, fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 14 }}>
            SOJKU<span style={{ color: '#a06bff' }}>°</span>
          </div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: '#9b96a6' }}>
            A software studio building websites, apps, brand, motion and AI automation.
            Lagos → worldwide.
          </p>
        </div>

        <div className="flex flex-wrap" style={{ gap: 64 }}>
          <div style={colStyle}>
            <span style={heading}>Menu</span>
            <a className="link-hover" href="#work">Work</a>
            <a className="link-hover" href="#services">Services</a>
            <a className="link-hover" href="#stack">Stack</a>
            <a className="link-hover" href="#contact">Contact</a>
          </div>
          <div style={colStyle}>
            <span style={heading}>Elsewhere</span>
            <a className="link-hover" href="#contact">Instagram</a>
            <a className="link-hover" href="#contact">X / Twitter</a>
            <a className="link-hover" href="#contact">LinkedIn</a>
            <a className="link-hover" href="mailto:o.sojku@gmail.com">Email</a>
          </div>
          <div style={colStyle}>
            <span style={heading}>Legal</span>
            <Link className="link-hover" to="/terms">Terms</Link>
            <Link className="link-hover" to="/privacy">Privacy</Link>
            <Link className="link-hover" to="/refund">Refund</Link>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #2c2833' }}>
        <div
          className="mx-auto flex flex-wrap justify-between"
          style={{ maxWidth: 1360, padding: '22px clamp(20px,5vw,40px)', gap: 12, fontSize: 13, color: '#6a6574' }}
        >
          <span>© 2026 Sojku · Est. 2024. All rights reserved.</span>
          <span>Designed &amp; built in-house.</span>
        </div>
      </div>
    </footer>
  )
}
