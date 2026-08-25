import { useState } from 'react'
import { supabase } from '../lib/supabase'

const FIELD_CLASS =
  'rounded-lg border-[1.5px] border-ink/20 bg-white/80 px-4 py-3.5 text-sm text-ink outline-none placeholder:text-ink/45 focus:border-ink'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setError(null)

    const formData = new FormData(event.target)

    // Honeypot : un bot remplit tous les champs, un humain ne voit pas celui-ci.
    // On simule un succès pour ne pas lui signaler la détection.
    if (formData.get('bot-field')) {
      setStatus('sent')
      return
    }

    // Pas de .select() ici : la table n'a qu'une policy INSERT, relire la ligne
    // échouerait sous RLS.
    const { error: insertError } = await supabase.from('contact_requests').insert({
      prenom: formData.get('prenom'),
      societe: formData.get('societe'),
      email: formData.get('email'),
      flotte: formData.get('flotte') || null,
      message: formData.get('message') || null,
    })

    if (insertError) {
      setError("Votre demande n'a pas pu être envoyée. Réessayez ou écrivez-nous directement.")
      console.error('Insertion contact_requests échouée :', insertError)
      setStatus('idle')
      return
    }

    setStatus('sent')
    event.target.reset()
  }

  return (
    <section
      id="contact"
      className="border-t border-spark-dk bg-spark px-12 py-24 text-center max-md:px-5 max-md:py-15"
    >
      <p className="label-mono mb-5 flex items-center justify-center gap-2 text-ink/45">
        Parlons de votre flotte
      </p>
      <h2 className="mb-3 text-heading text-ink">Prenons 30 minutes ensemble.</h2>
      <p className="mx-auto mb-10 max-w-[480px] text-[17px] text-ink/65">
        Un échange suffit pour faire le point sur votre parc et vous proposer une première analyse.
        Gratuit, sans engagement.
      </p>

      {status === 'sent' ? (
        <p className="mx-auto max-w-[520px] rounded-lg bg-ink px-6 py-5 text-[15px] font-semibold text-paper">
          Merci, votre demande est bien envoyée. Nous revenons vers vous sous 36 h.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-[520px] flex-col gap-3.5">
          <p className="hidden">
            <label>
              Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
            <input type="text" name="prenom" placeholder="Prénom" required maxLength={100} className={FIELD_CLASS} />
            <input type="text" name="societe" placeholder="Société" required maxLength={200} className={FIELD_CLASS} />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email professionnel"
            required
            maxLength={320}
            className={FIELD_CLASS}
          />
          <input
            type="text"
            name="flotte"
            placeholder="Nombre de véhicules dans votre flotte"
            maxLength={100}
            className={FIELD_CLASS}
          />
          <textarea
            name="message"
            placeholder="Votre message (optionnel)"
            rows="3"
            maxLength={5000}
            className={`${FIELD_CLASS} resize-y`}
          />

          {error && <p className="text-sm font-semibold text-verdict-red">{error}</p>}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="cursor-pointer rounded-lg bg-ink px-8 py-4 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}
          </button>
        </form>
      )}
    </section>
  )
}
