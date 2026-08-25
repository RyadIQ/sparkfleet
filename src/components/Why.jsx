const CARDS = [
  {
    icon: '🎯',
    title: 'Conseil indépendant',
    text: 'Aucun lien avec un fabricant, un loueur ou un opérateur. Nos recommandations sont dictées par votre situation et vos besoins opérationnels.',
  },
  {
    icon: '📊',
    title: 'Analyse sur mesure',
    text: 'Chaque véhicule de votre flotte est analysé individuellement. Nous ne généralisons pas, nous adaptons notre conseil à votre réalité terrain.',
  },
  {
    icon: '⚡',
    title: 'Expertise mobilité',
    text: 'Électrique, hybride, thermique : nous recommandons ce qui est pertinent pour chaque usage. Pas d’électrification à tout prix, mais une transition intelligente.',
  },
  {
    icon: '🗓️',
    title: 'Accompagnement clé en main',
    text: 'Audit, sélection des véhicules, négociation des contrats, coordination des installations. Un seul interlocuteur de A à Z.',
  },
]

export default function Why() {
  return (
    <section id="pourquoi" className="px-12 py-24 max-md:px-5 max-md:py-15">
      <p className="label-mono mb-5 flex items-center gap-2 text-mid before:inline-block before:h-px before:w-4 before:bg-mid before:content-['']">
        Pourquoi SparkFleet
      </p>
      <h2 className="mb-4 text-heading">Un conseil sans conflit d’intérêt.</h2>
      <p className="mb-14 max-w-[540px] text-[17px] leading-[1.7] text-mid">
        Nous ne vendons pas de véhicules. Nous ne représentons pas de constructeur. Nous défendons
        uniquement vos intérêts.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px overflow-hidden rounded-xl border border-line bg-line">
        {CARDS.map((card) => (
          <div key={card.title} className="flex flex-col gap-3.5 bg-white px-8 py-9">
            <div className="text-[28px]">{card.icon}</div>
            <h3 className="text-[17px] font-semibold">{card.title}</h3>
            <p className="text-sm leading-[1.65] text-mid">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
