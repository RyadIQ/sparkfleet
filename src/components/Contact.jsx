import { useState } from 'react'
import { supabase } from '../lib/supabase'

const FIELD_CLASS =
  'rounded-lg border-[1.5px] border-ink/20 bg-white/80 px-4 py-3.5 text-sm text-ink outline-none placeholder:text-ink/45 focus:border-ink'

const CONTACTS = [
  {
    icon: '📞',
    label: 'Par téléphone',
    value: '06 52 04 54 48',
    href: 'tel:+33652045448',
  },
  {
    icon: '✉️',
    label: 'Par email',
    value: 'bonjour@sparkfleet.fr',
    href: 'mailto:bonjour@sparkfleet.fr',
  },
]

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
      setError("Votre demande n'a pas pu être envoyée. Appelez-nous ou écrivez-nous directement.")
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
      className="scroll-mt-20 max-md:scroll-mt-16 border-t border-spark-dk bg-spark px-12 py-24 max-md:px-5 max-md:py-15"
    >
      <div className="mx-auto max-w-[1040px]">
        <div className="text-center">
          <p className="label-mono mb-5 flex items-center justify-center gap-2 text-ink/45">
            Parlons de votre flotte
          </p>
          <h2 className="mb-3 text-heading text-ink">Prenons 30 minutes ensemble.</h2>
          <p className="mx-auto mb-12 max-w-[480px] text-[17px] text-ink/65">
            Un échange suffit pour faire le point sur votre parc et vous proposer une première
            analyse. Gratuit, sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] items-start gap-8 text-left max-md:grid-cols-1">
          {/* Coordonnées d'abord dans le DOM : elles passent au-dessus du formulaire en mobile. */}
          <div className="flex flex-col gap-4 rounded-xl border border-ink/15 bg-ink/[0.06] p-7 max-sm:p-5">
            <div>
              <p className="label-mono mb-2 text-ink/50">On vous répond</p>
              <p className="text-[19px] leading-snug font-bold tracking-[-0.02em] text-ink">
                Appelez-nous directement.
              </p>
            </div>

            {CONTACTS.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                className="flex items-center gap-4 rounded-lg border border-ink/10 bg-paper px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-ink/30"
              >
                <span aria-hidden="true" className="text-[22px] leading-none">
                  {contact.icon}
                </span>
                <span className="min-w-0">
                  <span className="label-mono block text-mid">{contact.label}</span>
                  <span className="block truncate text-[17px] font-bold tracking-[-0.01em] text-ink">
                    {contact.value}
                  </span>
                </span>
              </a>
            ))}

            <p className="text-sm leading-[1.6] text-ink/65">
              Un seul interlocuteur, du premier appel au pilotage de votre flotte.
            </p>
          </div>

          {status === 'sent' ? (
            <p className="rounded-xl bg-ink px-6 py-8 text-center text-[15px] font-semibold text-paper">
              Merci, votre demande est bien envoyée. Nous revenons vers vous très vite.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
                <input type="text" name="prenom" placeholder="Nom" required maxLength={100} className={FIELD_CLASS} />
                <input type="text" name="societe" placeholder="Société" required maxLength={200} className={FIELD_CLASS} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Votre message"
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
        </div>
      </div>
    </section>
  )
}
