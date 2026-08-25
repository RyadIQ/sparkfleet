import { Navigate, useLocation } from 'react-router-dom'
import { useSession } from '../lib/useSession'

export default function ProtectedRoute({ children }) {
  const { session, loading } = useSession()
  const location = useLocation()

  // Sans cet état, la session initiale (asynchrone) ferait clignoter la page de login.
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper">
        <p className="label-mono text-mid">Chargement…</p>
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
