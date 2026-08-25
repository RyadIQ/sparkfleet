const OFFERS = [
  {
    name: 'Diagnostic',
    title: 'SparkFleet Audit',
    desc: 'Un état des lieux complet de votre flotte avec le SparkScore de chaque véhicule et un plan d’action sur 36 mois.',
    features: [
      'Analyse véhicule par véhicule',
      'SparkScore sur 100 pour chaque véhicule',
      'Calcul du TCO sur 3 ans',
      'Plan de transition personnalisé',
      'Identification des aides disponibles',
    ],
  },
  {
    name: 'Pilotage',
    title: 'SparkFleet Manager',
    desc: 'Votre fleet manager externalisé. Nous pilotons votre flotte au quotidien, de A à Z, sans que vous ayez à vous en occuper.',
    badge: 'Le plus choisi',
    featured: true,
    features: [
      'Audit inclus au démarrage',
      'Gestion des renouvellements',
      'Sélection et négociation des offres',
      'Suivi des contrats et des échéances',
      'Coordination des installations',
      'Reporting mensuel',
    ],
  },
  {
    name: 'Premium',
    title: 'SparkFleet Pro',
    desc: 'Pour les flottes de 20 véhicules et plus avec des enjeux réglementaires, RSE et de performance avancés.',
    features: [
      'Tout SparkFleet Manager',
      'Interlocuteur dédié senior',
      'Reporting RSE trimestriel',
      'Veille réglementaire permanente',
      'Formation des conducteurs incluse',
    ],
  },
]

export default function Offers() {
  return (
    <section
      id="offres"
      className="border-y border-line bg-white px-12 py-24 max-md:px-5 max-md:py-15"
    >
      <p className="label-mono mb-5 flex items-center gap-2 text-mid before:inline-block before:h-px before:w-4 before:bg-mid before:content-['']">
        Nos offres
      </p>
      <h2 className="mb-4 text-heading">Un accompagnement adapté à votre flotte.</h2>
      <p className="mb-14 max-w-[540px] text-[17px] leading-[1.7] text-mid">
        De l’analyse ponctuelle au pilotage complet, SparkFleet s’adapte à la taille de votre parc et
        à vos objectifs.
      </p>

      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {OFFERS.map((offer) => (
          <div
            key={offer.title}
            className={`relative flex flex-col gap-5 rounded-[10px] border-[1.5px] px-7 py-9 transition-colors ${
              offer.featured
                ? 'border-ink bg-ink text-paper'
                : 'border-line bg-paper hover:border-spark-dk'
            }`}
          >
            {offer.badge && (
              <span className="label-mono absolute -top-3 left-6 rounded bg-spark px-2.5 py-1 text-[10px] tracking-[0.08em] text-ink">
                {offer.badge}
              </span>
            )}
            <p
              className={`label-mono tracking-[0.1em] ${offer.featured ? 'text-[#888]' : 'text-mid'}`}
            >
              {offer.name}
            </p>
            <p className="text-[22px] font-bold tracking-[-0.02em]">{offer.title}</p>
            <p className={`text-sm leading-[1.65] ${offer.featured ? 'text-[#aaa]' : 'text-mid'}`}>
              {offer.desc}
            </p>
            <ul className="flex list-none flex-col gap-2.5">
              {offer.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start gap-2.5 text-sm before:mt-px before:shrink-0 before:font-mono before:text-xs before:content-['→'] ${
                    offer.featured ? 'before:text-spark' : 'before:text-spark-dk'
                  }`}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-auto block rounded-[7px] border-[1.5px] px-5 py-3.5 text-center text-sm font-semibold transition-all ${
                offer.featured
                  ? 'border-spark bg-spark text-ink hover:border-spark-dk hover:bg-spark-dk'
                  : 'border-line text-ink hover:border-ink'
              }`}
            >
              Nous contacter
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
