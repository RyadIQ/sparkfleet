const OFFERS = [
  {
    name: 'Découverte',
    title: 'SparkFleet Check',
    price: 'Gratuit',
    desc: 'Première analyse de 30 minutes de votre flotte. Vous donnez le nombre de véhicules, motorisations, kilométrage, échéances et usages. Nous identifions les véhicules qui méritent une analyse approfondie.',
    cta: 'Réserver mon Check',
  },
  {
    name: 'Diagnostic',
    title: 'SparkFleet Audit',
    price: 'à partir de 790 € HT',
    desc: 'Analyse complète véhicule par véhicule avec SparkScore sur 100, calcul du TCO, identification des aides et recommandations concrètes.',
  },
  {
    name: 'Transition',
    title: 'SparkFleet Transition',
    price: 'à partir de 1 490 € HT',
    badge: 'Le plus choisi',
    featured: true,
    desc: 'Plan complet sur 36 mois : sélection des véhicules, TCO détaillé, montage financier, calendrier de renouvellement, stratégie de recharge, politique automobile et recommandations opérationnelles.',
  },
  {
    name: 'Pilotage',
    title: 'SparkFleet Manager',
    price: 'à partir de 490 € HT/mois',
    desc: 'Votre interlocuteur flotte au quotidien. Gestion des renouvellements, négociation des contrats, suivi des échéances, coordination des prestataires et reporting régulier.',
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
        Du premier échange gratuit au pilotage complet, SparkFleet s’adapte à la taille de votre
        parc et à vos objectifs.
      </p>

      <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {OFFERS.map((offer) => (
          <div
            key={offer.title}
            className={`relative flex flex-col gap-4 rounded-[10px] border-[1.5px] px-7 py-9 transition-colors ${
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

            <p className={`label-mono tracking-[0.1em] ${offer.featured ? 'text-[#888]' : 'text-mid'}`}>
              {offer.name}
            </p>
            <p className="text-[22px] leading-tight font-bold tracking-[-0.02em]">{offer.title}</p>

            <p
              className={`font-mono text-[15px] font-bold ${
                offer.featured ? 'text-spark' : 'text-spark-dk'
              }`}
            >
              {offer.price}
            </p>

            <p className={`text-sm leading-[1.65] ${offer.featured ? 'text-[#aaa]' : 'text-mid'}`}>
              {offer.desc}
            </p>

            <a
              href="#contact"
              className={`mt-auto block rounded-[7px] border-[1.5px] px-5 py-3.5 text-center text-sm font-semibold transition-all ${
                offer.featured
                  ? 'border-spark bg-spark text-ink hover:border-spark-dk hover:bg-spark-dk'
                  : 'border-line text-ink hover:border-ink'
              }`}
            >
              {offer.cta ?? 'Nous contacter'}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
