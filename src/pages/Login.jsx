import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { supabase } from '../lib/supabase'
import { usePageMeta } from '../lib/usePageMeta'
import { useSession } from '../lib/useSession'

const FIELD_CLASS =
  'w-full rounded-lg border-[1.5px] border-line bg-white px-4 py-3.5 text-sm text-ink outline-none placeholder:text-mid focus:border-ink'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  usePageMeta({
    title: 'Espace membre | SparkFleet',
    description: 'Connexion à votre espace membre SparkFleet.',
    path: '/login',
  })
  const { session, loading } = useSession()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from ?? '/dashboard'

  if (!loading && session) {
    return <Navigate to={from} replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

    if (signInError) {
      setError(signInError.message)
      setSubmitting(false)
      return
    }

    navigate(from, { replace: true })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 py-16">
      <Link to="/" className="mb-10 flex items-center">
        <Logo className="h-9 w-auto" />
      </Link>

      <div className="w-full max-w-[400px] rounded-xl border border-line bg-white px-8 py-9">
        <p className="label-mono mb-2 text-mid">Espace membre</p>
        <h1 className="mb-7 text-[26px] leading-tight font-bold tracking-[-0.02em]">Connexion</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <label className="flex flex-col gap-1.5">
            <span className="label-mono text-mid">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              placeholder="vous@societe.fr"
              className={FIELD_CLASS}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="label-mono text-mid">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className={FIELD_CLASS}
            />
          </label>

          {error && <p className="text-sm font-semibold text-verdict-red">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 cursor-pointer rounded-lg bg-ink px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>

      <Link to="/" className="mt-8 text-sm font-medium text-mid transition-colors hover:text-ink">
        ← Retour au site
      </Link>
    </div>
  )
}
