const ROWS = [
  { model: 'Renault Clio diesel 2021', usage: 'Commercial terrain', score: 91, reco: 'Électrifier en mars 2026', tone: 'high' },
  { model: 'Renault Kangoo diesel 2020', usage: 'Livraison locale', score: 87, reco: 'Électrifier en juin 2026', tone: 'high' },
  { model: 'Peugeot 308 diesel 2022', usage: 'Direction générale', score: 74, reco: 'Électrifier en 2027', tone: 'high' },
  { model: 'Peugeot 3008 diesel 2021', usage: 'Commercial grands déplacements', score: 58, reco: 'À étudier en 2027', tone: 'mid' },
  { model: 'Ford Transit diesel 2022', usage: 'Chantier · 290 km/jour', score: 24, reco: 'Conserver en thermique', tone: 'low' },
]

const PILL_TONES = {
  high: 'bg-verdict-green-bg text-verdict-green',
  mid: 'bg-verdict-orange-bg text-verdict-orange',
  low: 'bg-verdict-red-bg text-verdict-red',
}

export default function SparkScoreTable() {
  return (
    <section id="sparkscore" className="bg-paper px-12 py-24 max-md:px-5 max-md:py-15">
      <p className="label-mono mb-5 flex items-center gap-2 text-mid before:inline-block before:h-px before:w-4 before:bg-mid before:content-['']">
        SparkScore
      </p>
      <h2 className="mb-4 text-heading">Une note. Une décision.</h2>
      <p className="mb-14 max-w-[540px] text-[17px] leading-[1.7] text-mid">
        Chaque véhicule de votre flotte reçoit un SparkScore sur 100. Un indicateur clair pour une
        décision immédiate.
      </p>

      <div className="overflow-hidden rounded-xl border border-line bg-white">
        <div className="flex items-center justify-between gap-4 bg-ink px-7 py-5 text-paper max-md:flex-col max-md:items-start">
          <h3 className="text-[15px] font-semibold">Rapport SparkFleet — Flotte exemple · 8 véhicules</h3>
          <span className="font-mono text-xs opacity-50">Économie potentielle : 18 400 € / 3 ans</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {['Véhicule', 'Usage', 'SparkScore', 'Recommandation SparkFleet'].map((header) => (
                  <th
                    key={header}
                    className="label-mono border-b border-line bg-[#FAFAF8] px-5 py-3.5 text-left tracking-[0.08em] text-mid"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.model}>
                  <td className="border-b border-line px-5 py-3.5 text-sm">{row.model}</td>
                  <td className="border-b border-line px-5 py-3.5 text-sm">{row.usage}</td>
                  <td className="border-b border-line px-5 py-3.5 text-sm whitespace-nowrap">
                    <span className="font-mono font-bold">{row.score}</span>
                    <span className="text-[11px] text-mid">/100</span>
                  </td>
                  <td className="border-b border-line px-5 py-3.5 text-sm">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${PILL_TONES[row.tone]}`}
                    >
                      {row.reco}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
