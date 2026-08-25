import { useEffect, useRef, useState } from 'react'

/**
 * Logo SparkFleet. `tone` bascule la couleur du texte (nav sur paper, footer sur ink).
 *
 * Le trait jaune doit couvrir exactement « Fleet ». Sa largeur dépend des métriques
 * de Space Grotesk, donc on la mesure sur le tspan rendu plutôt que de la coder en dur :
 * une valeur fixe déborde dès que la police de repli est utilisée (avant chargement du
 * webfont, ou si Google Fonts est bloqué).
 */
export default function Logo({ tone = 'ink', className = '' }) {
  const fleetRef = useRef(null)
  const [bar, setBar] = useState(null)

  useEffect(() => {
    const measure = () => {
      const el = fleetRef.current
      if (!el) return
      try {
        setBar({ x: el.getStartPositionOfChar(0).x, width: el.getComputedTextLength() })
      } catch {
        // Le tspan n'est pas encore rendu : la mesure post-chargement des polices suffira.
      }
    }

    measure()
    // Le webfont change les métriques : on remesure une fois qu'il est chargé.
    document.fonts?.ready.then(measure)
  }, [])

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
        Spark
        <tspan ref={fleetRef} fontWeight="300">
          Fleet
        </tspan>
      </text>
      {bar && <rect x={bar.x} y="59" width={bar.width} height="3" fill="#F5C842" rx="1.5" />}
    </svg>
  )
}
