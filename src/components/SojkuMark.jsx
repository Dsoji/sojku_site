// Sojku crystal mark — a six-point geometric snowflake built from a single
// triangular facet arm rotated 6× (60° increments) around a shared center.
// Per the brand handoff, detail simplifies at small sizes so the mark stays legible:
//   ≥64px  full detail (spokes + both branch pairs)
//   32–44px spokes + single branch pair
//   ≤28px  spokes + center dot only
const ANGLES = [0, 60, 120, 180, 240, 300]

export default function SojkuMark({
  size = 28,
  stroke = '#a06bff',
  dot = '#c9a2ff',
  strokeWidth,
  'aria-label': ariaLabel = 'Sojku crystal mark',
  ...rest
}) {
  const full = size >= 64
  const branches = size >= 32

  // Stroke thickens as the mark shrinks to hold visual weight.
  const sw = strokeWidth ?? (full ? 9 : branches ? 12 : 16)
  const dotR = full ? 12 : branches ? 11 : 10
  const spokeTop = full ? 26 : branches ? 30 : 34

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
      {...rest}
    >
      <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        {ANGLES.map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <line x1="100" y1="100" x2="100" y2={spokeTop} />
            {branches && !full && <path d="M100 56 L86 44 M100 56 L114 44" />}
            {full && (
              <>
                <path d="M100 52 L84 40 M100 52 L116 40" />
                <path d="M100 74 L86 64 M100 74 L114 64" />
              </>
            )}
          </g>
        ))}
      </g>
      <circle cx="100" cy="100" r={dotR} fill={dot} />
    </svg>
  )
}
