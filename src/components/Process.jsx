const STEPS = [
  {
    n: 'ÉTAPE 01',
    title: 'Échange de 30 min',
    text: 'Nous analysons ensemble votre flotte, vos usages et vos contraintes. Gratuit et sans engagement.',
  },
  {
    n: 'ÉTAPE 02',
    title: 'Rapport SparkFleet',
    text: 'Vous recevez le SparkScore de chaque véhicule et votre plan de transition sur 36 mois sous 36 heures.',
  },
  {
    n: 'ÉTAPE 03',
    title: 'Déploiement',
    text: 'Nous négocions les contrats, coordonnons les prestataires et gérons les démarches administratives.',
  },
  {
    n: 'ÉTAPE 04',
    title: 'Pilotage continu',
    text: 'Renouvellements, suivi des coûts, veille réglementaire. Votre flotte tourne, vous vous concentrez sur votre métier.',
  },
]

export default function Process() {
  return (
    <section id="processus" className="bg-ink px-12 py-24 text-paper max-md:px-5 max-md:py-15">
      <p className="label-mono mb-5 flex items-center gap-2 text-[#666] before:inline-block before:h-px before:w-4 before:bg-[#666] before:content-['']">
        Comment ça marche
      </p>
      <h2 className="mb-4 text-heading">Quatre étapes. Un seul interlocuteur.</h2>
      <p className="mb-14 max-w-[540px] text-[17px] leading-[1.7] text-[#888]">
        De l’analyse initiale à la mise en service, SparkFleet gère l’ensemble du projet.
      </p>

      <div className="grid grid-cols-4 overflow-hidden rounded-[10px] border border-[#1a1b1d] max-md:grid-cols-2">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="border-r border-[#1a1b1d] px-7 py-9 last:border-r-0 max-md:border-r-0 max-md:border-b"
          >
            <p className="label-mono mb-4 tracking-[0.1em] text-spark">{step.n}</p>
            <h3 className="mb-2.5 text-base font-semibold">{step.title}</h3>
            <p className="text-[13px] leading-[1.65] text-[#888]">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
