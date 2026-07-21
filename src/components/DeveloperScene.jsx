/**
 * Pure-CSS animated "developer at a PC" scene from the design handoff.
 * All motion is CSS keyframes (sj-*) defined in index.css. No JS, no assets.
 */

// One scrolling code line: colored bars of set widths.
function CodeLine({ pad = 0, bars }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center', paddingLeft: pad }}>
      {bars.map(([w, bg], i) => (
        <span key={i} style={{ width: w, height: 7, borderRadius: 3, background: bg }} />
      ))}
    </div>
  )
}

const P = '#a06bff'
const L = '#c9a2ff'
const D = '#3a3543'
const D2 = '#4a4453'

// Six lines, duplicated once for a seamless -50% loop.
const lines = [
  { pad: 0, bars: [[26, P], [70, D]] },
  { pad: 16, bars: [[44, L], [52, D]] },
  { pad: 16, bars: [[30, D], [88, D2]] },
  { pad: 32, bars: [[60, P], [20, D]] },
  { pad: 0, bars: [[40, D]] },
  { pad: 16, bars: [[80, D2], [24, L]] },
]

export default function DeveloperScene() {
  return (
    <div style={{ position: 'relative', width: 'min(440px, 100%)', height: 360, flex: '0 0 auto' }} aria-hidden="true">
      {/* ambient glow */}
      <div
        style={{
          position: 'absolute', left: '50%', top: '38%', width: 340, height: 220,
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(ellipse at center,#a06bff 0%,transparent 70%)',
          filter: 'blur(30px)', opacity: 0.5,
          animation: 'sj-glow 4s ease-in-out infinite', pointerEvents: 'none',
        }}
      />

      {/* floating brackets */}
      <div style={{ position: 'absolute', top: 16, right: 6, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 38, fontWeight: 800, color: P, opacity: 0.55, animation: 'sj-float 5s ease-in-out infinite' }}>&lt;/&gt;</div>
      <div style={{ position: 'absolute', top: 120, left: 0, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 26, fontWeight: 800, color: P, opacity: 0.4, animation: 'sj-float2 6s ease-in-out infinite' }}>{'{ }'}</div>

      {/* monitor */}
      <div style={{ position: 'absolute', left: '50%', top: 8, transform: 'translateX(-50%)', width: 300 }}>
        <div style={{ width: 300, height: 186, background: '#0d0b11', border: '2px solid #37323f', borderRadius: 12, padding: '14px 16px', overflow: 'hidden', boxShadow: '0 20px 50px -18px rgba(0,0,0,0.8)' }}>
          {/* window dots */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            <span style={dot} /><span style={dot} /><span style={dot} />
          </div>
          {/* scrolling code */}
          <div style={{ height: 120, overflow: 'hidden', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, animation: 'sj-code 7s linear infinite' }}>
              {[...lines, ...lines].map((l, i) => (
                <CodeLine key={i} pad={l.pad} bars={l.bars} />
              ))}
            </div>
            {/* blinking cursor */}
            <span style={{ position: 'absolute', left: 32, bottom: 2, width: 9, height: 14, background: P, animation: 'sj-blink 1.1s step-end infinite' }} />
          </div>
        </div>
        {/* stand */}
        <div style={{ width: 60, height: 22, background: '#2c2833', margin: '0 auto', clipPath: 'polygon(24% 0,76% 0,100% 100%,0 100%)' }} />
        <div style={{ width: 110, height: 8, background: '#37323f', borderRadius: 4, margin: '0 auto' }} />
      </div>

      {/* coffee + steam */}
      <div style={{ position: 'absolute', left: 32, top: 150 }}>
        <div style={{ position: 'absolute', left: 8, top: -16, width: 5, height: 16, background: L, borderRadius: 3, filter: 'blur(2px)', animation: 'sj-steam 2.6s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', left: 18, top: -16, width: 5, height: 16, background: L, borderRadius: 3, filter: 'blur(2px)', animation: 'sj-steam 2.6s ease-in-out infinite 0.9s' }} />
        <div style={{ width: 30, height: 24, background: P, borderRadius: '0 0 8px 8px' }} />
        <div style={{ position: 'absolute', right: -9, top: 3, width: 11, height: 11, border: '3px solid #a06bff', borderRadius: '50%' }} />
      </div>

      {/* developer (over the shoulder).
          Centered via `left: calc(50% - 110px)` (half of the 220px width) rather
          than translateX(-50%), because the sj-bob animation's `transform` would
          otherwise override the centering transform and shove it off-center. */}
      <div style={{ position: 'absolute', left: 'calc(50% - 110px)', bottom: 2, width: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'sj-bob 4.5s ease-in-out infinite', transformOrigin: 'bottom center' }}>
        {/* head */}
        <div style={{ width: 70, height: 70, background: '#1b1822', border: '2px solid #37323f', borderRadius: '50%', position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'absolute', left: -8, top: 22, width: 12, height: 24, background: P, borderRadius: 6 }} />
          <div style={{ position: 'absolute', right: -8, top: 22, width: 12, height: 24, background: P, borderRadius: 6 }} />
          <div style={{ position: 'absolute', left: 6, top: -6, right: 6, height: 18, border: '3px solid #a06bff', borderBottom: 'none', borderRadius: '40px 40px 0 0' }} />
        </div>
        {/* shoulders */}
        <div style={{ width: 220, height: 88, background: '#1b1822', border: '2px solid #37323f', borderBottom: 'none', borderRadius: '80px 80px 0 0', marginTop: -14 }} />
      </div>
    </div>
  )
}

const dot = { width: 8, height: 8, borderRadius: '50%', background: '#5a5462' }
