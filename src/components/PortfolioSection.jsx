import faztWebsiteImg from '../assets/logofazt.webp'
import faztOrderImg from '../assets/Screenshot 2026-01-11 at 17.31.01.png'
import faztVendorImg from '../assets/Screenshot 2026-01-11 at 17.31.13.png'
import swiftswapImg from '../assets/Screenshot 2026-01-11 at 17.30.53.png'
import foaxImg from '../assets/Screenshot 2026-01-11 at 17.30.33.png'

const display = "'Bricolage Grotesque', sans-serif"

const projects = [
  { no: '01', name: 'Fazt Website', tag: 'Web', bg: '#211d2a', image: faztWebsiteImg, isLogo: true, href: 'https://www.faztorder.net/', desc: 'Delivery platform connecting food vendors, riders & customers with real-time order tracking.', stack: ['react', 'nodejs', 'mongodb', 'websocket'] },
  { no: '02', name: 'Fazt Order', tag: 'iOS', bg: '#1e1a26', image: faztOrderImg, href: 'https://apps.apple.com/ng/app/fazt-order/id6749697862', desc: 'Customer iOS app to order food with live delivery tracking and secure payments.', stack: ['swift', 'ios', 'firebase', 'stripe'] },
  { no: '03', name: 'Fazt Vendor', tag: 'iOS', bg: '#211d2a', image: faztVendorImg, href: 'https://apps.apple.com/ng/app/fazt-vendor/id6749553020', desc: 'Restaurant-owner app to manage orders, deliveries and day-to-day operations.', stack: ['swift', 'ios', 'firebase', 'stripe'] },
  { no: '04', name: 'SwiftSwap', tag: 'Web · Mobile', bg: '#1e1a26', image: swiftswapImg, href: 'https://apps.apple.com/ng/iphone/search?term=swiftswap', desc: 'Crypto exchange platform for fast, secure digital-asset trading across web and mobile.', stack: ['typescript', 'flutter', 'nextjs', 'nodejs'] },
  { no: '05', name: 'Foax Exchange', tag: 'Mobile', bg: '#211d2a', image: foaxImg, href: 'https://apps.apple.com/ng/app/foax-exchange/id6742742934', desc: 'Crypto exchange app with real-time market data and a secure in-app wallet.', stack: ['typescript', 'react-native', 'nodejs', 'redis'] },
]

export default function PortfolioSection() {
  return (
    <section id="work" className="mx-auto" style={{ maxWidth: 1360, padding: '96px clamp(20px,5vw,40px) 40px' }}>
      <div className="flex flex-wrap items-end justify-between" style={{ gap: 20, marginBottom: 44 }}>
        <h2 style={{ margin: 0, fontFamily: display, fontWeight: 800, fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
          Selected work
        </h2>
        <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9b96a6' }}>
          5 shipped products
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 28 }}>
        {projects.map((p) => (
          <a
            key={p.no}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card block"
            style={{ background: '#1c1922', border: '1px solid #2c2833', borderRadius: 20, overflow: 'hidden' }}
          >
            <div style={{ position: 'relative', aspectRatio: '16 / 10', background: p.bg, overflow: 'hidden' }}>
              <img
                src={p.image}
                alt={`${p.name} — ${p.desc}`}
                loading="lazy"
                style={
                  p.isLogo
                    ? { position: 'absolute', inset: 0, margin: 'auto', width: '38%', height: 'auto', objectFit: 'contain' }
                    : { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }
                }
              />
              <span style={{ position: 'absolute', top: 16, left: 16, zIndex: 3, background: '#a06bff', color: '#17131f', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '5px 11px', borderRadius: 100, pointerEvents: 'none' }}>{p.tag}</span>
              <span style={{ position: 'absolute', top: 16, right: 16, zIndex: 3, fontFamily: display, fontSize: 15, fontWeight: 700, color: '#fff', mixBlendMode: 'difference', pointerEvents: 'none' }}>{p.no}</span>
            </div>
            <div style={{ padding: '26px 28px 30px' }}>
              <div className="flex items-baseline justify-between" style={{ gap: 16 }}>
                <h3 style={{ margin: 0, fontFamily: display, fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</h3>
                <span style={{ fontFamily: display, fontSize: 22 }}>↗</span>
              </div>
              <p style={{ margin: '12px 0 20px', fontSize: 16, lineHeight: 1.55, color: '#9b96a6' }}>{p.desc}</p>
              <div className="flex flex-wrap" style={{ gap: 8 }}>
                {p.stack.map((t) => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 600, color: '#b8b3c4', border: '1px solid #37323f', padding: '5px 11px', borderRadius: 100 }}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
