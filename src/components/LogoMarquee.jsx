const items = ['Fazt', 'Fazt Order', 'Fazt Vendor', 'SwiftSwap', 'Foax Exchange']

function Row({ k }) {
  return (
    <>
      {items.map((name, i) => (
        <span key={`${k}-${i}`} className="flex items-center" style={{ gap: 64 }}>
          <span>{name}</span>
          <span style={{ color: '#a06bff' }}>✦</span>
        </span>
      ))}
    </>
  )
}

export default function LogoMarquee() {
  return (
    <section style={{ borderTop: '1px solid #2c2833', borderBottom: '1px solid #2c2833', overflow: 'hidden', padding: '22px 0', marginTop: 20 }}>
      <div
        className="flex items-center"
        style={{
          gap: 64, whiteSpace: 'nowrap', width: 'max-content',
          animation: 'marq 26s linear infinite',
          fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 30, fontWeight: 700, color: '#4a4552',
        }}
      >
        {/* duplicated once for a seamless -50% loop */}
        <Row k="a" />
        <Row k="b" />
      </div>
    </section>
  )
}
