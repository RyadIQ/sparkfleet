import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { supabase } from '../lib/supabase'
import { useSession } from '../lib/useSession'

/**
 * Données de démonstration : aucun schéma Supabase n'existe encore.
 * À remplacer par des requêtes (`supabase.from('reports').select()`, etc.)
 * une fois les tables et les policies RLS créées.
 */
const REPORTS = [
  { id: 1, title: 'Rapport SparkFleet — T3 2026', date: '12 août 2026', status: 'Disponible' },
  { id: 2, title: 'Rapport SparkFleet — T2 2026', date: '14 mai 2026', status: 'Disponible' },
  { id: 3, title: 'Rapport SparkFleet — T1 2026', date: '11 février 2026', status: 'Archivé' },
]

const FLEET = [
  { model: 'Renault Clio diesel 2021', usage: 'Commercial terrain', score: 91, tone: 'high', next: 'Renouvellement mars 2027' },
  { model: 'Renault Kangoo diesel 2020', usage: 'Livraison locale', score: 87, tone: 'high', next: 'Électrification juin 2026' },
  { model: 'Peugeot 3008 diesel 2021', usage: 'Grands déplacements', score: 58, tone: 'mid', next: 'À étudier 2027' },
  { model: 'Ford Transit diesel 2022', usage: 'Chantier · 290 km/jour', score: 24, tone: 'low', next: 'Conserver' },
]

const DOCUMENTS = [
  { name: 'Contrat LLD — Renault Clio', type: 'PDF', size: '240 Ko' },
  { name: 'Cartes grises — flotte complète', type: 'ZIP', size: '1,8 Mo' },
  { name: 'Attestation assurance flotte 2026', type: 'PDF', size: '112 Ko' },
]

const PILL_TONES = {
  high: 'bg-verdict-green-bg text-verdict-green',
  mid: 'bg-verdict-orange-bg text-verdict-orange',
  low: 'bg-verdict-red-bg text-verdict-red',
}

function Panel({ title, subtitle, children }) {
  return (
    <section className="overflow-hidden rounded-xl border border-line bg-white">
      <header className="flex items-baseline justify-between gap-4 border-b border-line px-6 py-4">
        <h2 className="text-[15px] font-semibold">{title}</h2>
        {subtitle && <span className="label-mono text-mid">{subtitle}</span>}
      </header>
      {children}
    </section>
  )
}

export default function Dashboard() {
  const { session } = useSession()

  return (
    <div className="min-h-screen bg-paper">
      <header className="flex items-center justify-between border-b border-line bg-paper/95 px-12 py-[18px] backdrop-blur-[10px] max-md:px-5">
        <Link to="/" className="flex items-center">
          <Logo className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-mid max-md:hidden">{session?.user?.email}</span>
          <button
            type="button"
            onClick={() => supabase.auth.signOut()}
            className="cursor-pointer rounded-md border-[1.5px] border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Se déconnecter
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-6 px-12 py-12 max-md:px-5 max-md:py-8">
        <div>
          <p className="label-mono mb-3 flex items-center gap-2 text-mid before:inline-block before:h-px before:w-4 before:bg-mid before:content-['']">
            Espace membre
          </p>
          <h1 className="text-[32px] leading-tight font-bold tracking-[-0.025em]">Votre flotte</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {[
            { num: '4', label: 'véhicules suivis' },
            { num: '65', label: 'SparkScore moyen de la flotte' },
            { num: '18 400 €', label: 'économie potentielle sur 3 ans' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-ink px-6 py-6">
              <p className="font-mono text-[32px] leading-none font-bold text-spark">{stat.num}</p>
              <p className="mt-2 text-[13px] text-[#888]">{stat.label}</p>
            </div>
          ))}
        </div>

        <Panel title="Suivi de flotte" subtitle={`${FLEET.length} véhicules`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {['Véhicule', 'Usage', 'SparkScore', 'Prochaine échéance'].map((header) => (
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
                {FLEET.map((vehicle) => (
                  <tr key={vehicle.model}>
                    <td className="border-b border-line px-5 py-3.5 text-sm last:border-b-0">{vehicle.model}</td>
                    <td className="border-b border-line px-5 py-3.5 text-sm text-mid">{vehicle.usage}</td>
                    <td className="border-b border-line px-5 py-3.5 text-sm whitespace-nowrap">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${PILL_TONES[vehicle.tone]}`}>
                        <span className="font-mono">{vehicle.score}</span>
                        <span className="opacity-70">/100</span>
                      </span>
                    </td>
                    <td className="border-b border-line px-5 py-3.5 text-sm text-mid">{vehicle.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <Panel title="Rapports">
            <ul className="list-none">
              {REPORTS.map((report) => (
                <li
                  key={report.id}
                  className="flex items-center justify-between gap-4 border-b border-line px-6 py-4 last:border-b-0"
                >
                  <div>
                    <p className="text-sm font-semibold">{report.title}</p>
                    <p className="mt-0.5 text-xs text-mid">{report.date}</p>
                  </div>
                  <span className="label-mono shrink-0 text-mid">{report.status}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Documents">
            <ul className="list-none">
              {DOCUMENTS.map((doc) => (
                <li
                  key={doc.name}
                  className="flex items-center justify-between gap-4 border-b border-line px-6 py-4 last:border-b-0"
                >
                  <p className="text-sm font-semibold">{doc.name}</p>
                  <span className="label-mono shrink-0 text-mid">
                    {doc.type} · {doc.size}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </main>
    </div>
  )
}
