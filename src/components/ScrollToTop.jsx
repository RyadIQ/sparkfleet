import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** React Router conserve la position de scroll entre les routes : on la réinitialise. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
