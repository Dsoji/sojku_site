import DeveloperScene from './DeveloperScene'

const display = "'Bricolage Grotesque', sans-serif"

const stats = [
  { n: '30+', label: 'Products shipped' },
  { n: '5★', label: 'Average client rating' },
  { n: '5', label: 'Core services' },
]

export default function HeroSection() {
  return (
    <section id="top" className="mx-auto" style={{ maxWidth: 1360, padding: '70px clamp(20px,5vw,40px) 60px' }}>
      {/* eyebrow */}
      <div
        className="flex items-center"
        style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#9b96a6', marginBottom: 26, gap: 12 }}
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a06bff', display: 'inline-block' }} />
        A software studio — est. Lagos, building worldwide
      </div>

      {/* headline */}
      <h1
        style={{
          margin: 0, fontFamily: display, fontWeight: 800,
          fontSize: 'clamp(64px,12vw,178px)', lineHeight: 0.84,
          letterSpacing: '-0.045em', textTransform: 'uppercase',
        }}
      >
        Design.<br />Build.<br />
        <span style={{ WebkitTextStroke: '2.5px #ece8f0', WebkitTextFillColor: '#141117' }}>Ship</span>{' '}
        <span style={{ background: '#a06bff', color: '#17131f', padding: '0 18px', display: 'inline-block', transform: 'rotate(-2deg)' }}>fast.</span>
      </h1>

      {/* copy + scene */}
      <div className="flex flex-wrap items-center justify-between" style={{ gap: 48, marginTop: 52 }}>
        <div className="flex flex-col" style={{ gap: 32, maxWidth: 560, flex: '1 1 420px' }}>
          <p style={{ margin: 0, fontSize: 21, lineHeight: 1.5, color: '#b8b3c4' }}>
            Sojku is a senior team building websites, mobile apps, brand, motion and AI
            automation — designed and shipped end-to-end for founders who care how it feels,
            not just how it works.
          </p>
          <div className="flex flex-wrap" style={{ gap: 12 }}>
            <a
              href="#contact"
              className="btn-press"
              style={{ background: '#a06bff', color: '#17131f', fontSize: 16, fontWeight: 700, padding: '16px 30px', borderRadius: 100 }}
            >
              Book a call →
            </a>
            <a
              href="#work"
              className="pill-ghost"
              style={{ border: '1px solid #ece8f0', fontSize: 16, fontWeight: 700, padding: '16px 30px', borderRadius: 100 }}
            >
              Selected work
            </a>
          </div>
        </div>

        <DeveloperScene />
      </div>

      {/* stat row */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: 1, background: '#2c2833', border: '1px solid #2c2833', marginTop: 60 }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ background: '#141117', padding: '26px 24px' }}>
            <div style={{ fontFamily: display, fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em' }}>{s.n}</div>
            <div style={{ fontSize: 14, color: '#9b96a6', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
        <div style={{ background: '#a06bff', color: '#17131f', padding: '26px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, lineHeight: 1.4, fontWeight: 500 }}>Web · Mobile · Design · Motion · AI</div>
          <a href="#services" className="link-hover" style={{ fontWeight: 700, fontSize: 14, marginTop: 14, color: '#17131f' }}>What we do →</a>
        </div>
      </div>
    </section>
  )
}
