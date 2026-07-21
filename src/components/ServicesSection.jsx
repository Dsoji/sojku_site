const display = "'Bricolage Grotesque', sans-serif"

const services = [
  { no: '01', title: 'Web Development', desc: 'Fast, scalable websites & web apps built with modern frameworks and clean, maintainable code.' },
  { no: '02', title: 'Mobile Apps', desc: 'Native and cross-platform iOS & Android apps your users will actually keep on their home screen.' },
  { no: '03', title: 'UI / UX & Product Design', desc: 'Research, flows, and interfaces that turn complex products into effortless experiences.' },
  { no: '04', title: 'AI / ML Automation', desc: 'Practical AI workflows and automations that save your team hours every single week.' },
  { no: '05', title: 'Branding & Motion', desc: 'Identity systems and motion graphics that make your product feel unmistakably yours.' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto" style={{ maxWidth: 1360, padding: '96px clamp(20px,5vw,40px) 40px' }}>
      <div className="flex flex-wrap items-end justify-between" style={{ gap: 20, marginBottom: 44 }}>
        <h2 style={{ margin: 0, fontFamily: display, fontWeight: 800, fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
          What we do
        </h2>
        <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9b96a6' }}>
          (01 — 05)
        </div>
      </div>

      <div style={{ borderTop: '1px solid #2c2833' }}>
        {services.map((s) => (
          <a key={s.no} href="#contact" className="svc-row">
            <span style={{ fontFamily: display, fontSize: 18, fontWeight: 700, opacity: 0.5 }}>{s.no}</span>
            <span style={{ fontFamily: display, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 700, letterSpacing: '-0.02em' }}>{s.title}</span>
            <span style={{ fontSize: 16, lineHeight: 1.5, color: 'inherit', opacity: 0.75 }}>{s.desc}</span>
            <span className="svc-arrow" style={{ fontFamily: display, fontSize: 26, fontWeight: 700 }}>↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
