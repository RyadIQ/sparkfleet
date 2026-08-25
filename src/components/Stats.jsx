const STATS = [
  { num: '30 %', label: 'de réduction des coûts de flotte en moyenne sur 3 ans' },
  { num: '100 %', label: 'indépendant, sans lien avec un constructeur ou opérateur' },
  { num: '36 h', label: 'pour recevoir votre rapport complet et votre plan d’action' },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-3 bg-ink max-md:grid-cols-1">
      {STATS.map((stat) => (
        <div
          key={stat.num}
          className="flex flex-col gap-1.5 border-r border-[#1a1b1d] px-12 py-9 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:px-5 max-md:py-7 max-md:last:border-b-0"
        >
          <span className="font-mono text-[40px] leading-none font-bold text-spark">{stat.num}</span>
          <p className="text-[13px] leading-[1.5] text-[#888]">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
