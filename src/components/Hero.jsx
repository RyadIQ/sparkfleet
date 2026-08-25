const VEHICLES = [
  {
    model: 'Renault Clio diesel 2021',
    detail: '18 400 km/an · LLD 320 €/mois',
    verdict: 'Électrifier',
    tone: 'green',
    score: 91,
  },
  {
    model: 'Peugeot 3008 diesel 2020',
    detail: '24 000 km/an · Achat 28 000 €',
    verdict: 'À étudier',
    tone: 'orange',
    score: 58,
  },
  {
    model: 'Ford Transit diesel 2022',
    detail: '290 km/jour · sans recharge site',
    verdict: 'Conserver',
    tone: 'red',
    score: 24,
  },
]

const VERDICT_TONES = {
  green: 'bg-verdict-green-bg text-verdict-green',
  orange: 'bg-verdict-orange-bg text-verdict-orange',
  red: 'bg-verdict-red-bg text-verdict-red',
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-titre" className="grid min-h-screen grid-cols-2 pt-[72px] max-md:grid-cols-1 max-sm:pt-16">
      <div className="flex flex-col justify-center border-r border-line px-16 py-20 max-md:border-r-0 max-md:px-5 max-md:pt-15 max-md:pb-10">
        <p className="label-mono mb-8 inline-flex items-center gap-2 text-mid before:inline-block before:h-px before:w-5 before:bg-mid before:content-['']">
          Fleet manager externalisé
        </p>
        <h1 id="hero-titre" className="mb-6 text-display">
          Votre flotte.
          <br />
          <mark className="rounded bg-spark px-1.5 text-ink">Optimisée.</mark>
          <br />
          Pilotée.
        </h1>
        <p className="mb-12 max-w-[440px] text-[17px] leading-[1.7] text-mid">
          SparkFleet prend en charge la gestion complète de votre parc automobile. Nous analysons,
          conseillons et pilotons votre transition vers une flotte plus performante et plus
          responsable.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-[7px] bg-ink px-7 py-4 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-hover"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#offres"
            className="rounded-[7px] border-[1.5px] border-line px-7 py-4 text-[15px] font-medium text-ink transition-colors hover:border-ink"
          >
            Nos offres
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 px-16 py-20 max-md:px-5 max-md:pt-0 max-md:pb-15">
        <p className="label-mono mb-2 text-mid">Exemple de rapport SparkFleet</p>
        {VEHICLES.map((vehicle) => (
          <div
            key={vehicle.model}
            className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-white px-6 py-5 max-sm:flex-wrap max-sm:gap-3 max-sm:px-5"
          >
            <div className="flex-1 max-sm:w-full max-sm:flex-none">
              <p className="text-[13px] font-semibold">{vehicle.model}</p>
              <p className="mt-0.5 text-xs text-mid">{vehicle.detail}</p>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${VERDICT_TONES[vehicle.tone]}`}>
              {vehicle.verdict}
            </span>
            <div className="flex min-w-16 flex-col items-center rounded-lg bg-ink px-3.5 py-2.5 text-paper">
              <span className="font-mono text-[22px] leading-none font-bold text-spark">{vehicle.score}</span>
              <span className="mt-0.5 text-[9px] tracking-[0.1em] uppercase opacity-60">SparkScore</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
