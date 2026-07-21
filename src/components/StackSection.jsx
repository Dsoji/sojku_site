const display = "'Bricolage Grotesque', sans-serif"

const stack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Swift', 'Flutter', 'React Native', 'MongoDB', 'Firebase', 'Redis', 'Stripe', 'WebSocket', 'iOS']

export default function StackSection() {
  return (
    <section id="stack" style={{ background: '#1c1922', borderTop: '1px solid #2c2833', borderBottom: '1px solid #2c2833', marginTop: 96 }}>
      <div className="mx-auto" style={{ maxWidth: 1360, padding: '96px clamp(20px,5vw,40px)' }}>
        <div className="flex flex-wrap items-end justify-between" style={{ gap: 20, marginBottom: 48 }}>
          <h2 style={{ margin: 0, fontFamily: display, fontWeight: 800, fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
            Our stack
          </h2>
          <p style={{ margin: 0, fontSize: 16, color: '#9b96a6', maxWidth: 380 }}>
            Modern, boring-where-it-counts tools we ship to production every week.
          </p>
        </div>
        <div className="flex flex-wrap" style={{ gap: 12 }}>
          {stack.map((t) => (
            <span key={t} style={{ fontFamily: display, fontSize: 'clamp(20px,2.6vw,34px)', fontWeight: 600, letterSpacing: '-0.02em', color: '#ece8f0', border: '1px solid #37323f', padding: '12px 22px', borderRadius: 100 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
