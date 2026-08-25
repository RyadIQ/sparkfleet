/** Logo SparkFleet. `tone` bascule la couleur du texte (nav sur paper, footer sur ink). */
export default function Logo({ tone = 'ink', className = '' }) {
  return (
    <svg viewBox="0 0 360 80" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="SparkFleet">
      <polygon points="32,10 55,23 55,51 32,64 9,51 9,23" fill="#F5C842" />
      <polygon points="36,17 23,42 33,42 27,63 43,38 33,38 38,17" fill="#0A0B0D" />
      <text
        x="68"
        y="52"
        fontFamily="'Space Grotesk',Arial,sans-serif"
        fontWeight="700"
        fontSize="36"
        fill={tone === 'light' ? '#FFFFFF' : '#0A0B0D'}
        letterSpacing="-0.5"
      >
        Spark<tspan fontWeight="300">Fleet</tspan>
      </text>
      <rect x="191" y="59" width="99" height="3" fill="#F5C842" rx="1.5" />
    </svg>
  )
}
