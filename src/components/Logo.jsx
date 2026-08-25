import { useLayoutEffect, useRef, useState } from 'react'

// Géométrie source du mark (hexagone + éclair), en unités du viewBox d'origine.
const MARK_LEFT = 9
const CONTENT_TOP = 4
const CONTENT_HEIGHT = 66
const FALLBACK_VIEWBOX = `0 ${CONTENT_TOP} 360 ${CONTENT_HEIGHT}`

/**
 * Logo SparkFleet. `tone` bascule la couleur du texte (nav sur paper, footer sur ink).
 *
 * Deux dimensions sont mesurées au lieu d'être codées en dur, parce qu'elles dépendent
 * des métriques de Space Grotesk — donc de son chargement effectif :
 *  - la largeur du trait jaune, qui doit couvrir exactement « Fleet » ;
 *  - la largeur du viewBox, qui doit s'arrêter à la fin du texte. Un viewBox trop
 *    large laisse du vide à droite et le logo paraît décalé à gauche dès qu'on le
 *    centre (cas du footer en mobile).
 */
export default function Logo({ tone = 'ink', className = '' }) {
  const textRef = useRef(null)
  const fleetRef = useRef(null)
  const [metrics, setMetrics] = useState(null)

  useLayoutEffect(() => {
    const measure = () => {
      const text = textRef.current
      const fleet = fleetRef.current
      if (!text || !fleet) return
      try {
        const barX = fleet.getStartPositionOfChar(0).x
        const barWidth = fleet.getComputedTextLength()
        const bbox = text.getBBox()
        // Marge droite symétrique de la marge gauche du mark.
        const right = Math.max(bbox.x + bbox.width, barX + barWidth) + MARK_LEFT
        setMetrics({ barX, barWidth, width: right })
      } catch {
        // Pas encore rendu : la mesure post-chargement des polices prendra le relais.
      }
    }

    measure()
    document.fonts?.ready.then(measure)
  }, [])

  return (
    <svg
      viewBox={metrics ? `0 ${CONTENT_TOP} ${metrics.width} ${CONTENT_HEIGHT}` : FALLBACK_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SparkFleet"
    >
      <polygon points="32,10 55,23 55,51 32,64 9,51 9,23" fill="#F5C842" />
      <polygon points="36,17 23,42 33,42 27,63 43,38 33,38 38,17" fill="#0A0B0D" />
      <text
        ref={textRef}
        x="68"
        y="52"
        fontFamily="'Space Grotesk',Arial,sans-serif"
        fontWeight="700"
        fontSize="36"
        fill={tone === 'light' ? '#FFFFFF' : '#0A0B0D'}
        letterSpacing="-0.5"
      >
        Spark
        <tspan ref={fleetRef} fontWeight="300">
          Fleet
        </tspan>
      </text>
      {metrics && (
        <rect x={metrics.barX} y="59" width={metrics.barWidth} height="3" fill="#F5C842" rx="1.5" />
      )}
    </svg>
  )
}
