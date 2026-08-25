import Logo from './Logo'

const LINK_CLASS = 'text-[13px] transition-colors hover:text-paper'

export default function Footer() {
  return (
    <footer className="bg-ink px-12 py-10 text-[#888] max-md:px-5 max-md:py-8">
      <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-8 max-md:flex-col max-md:items-center max-md:text-center">
        <div className="flex flex-col gap-3">
          <a href="#" className="flex items-center max-md:justify-center">
            <Logo tone="light" className="h-11 w-auto" />
          </a>
          <p className="text-[13px]">Entreprise française basée à Toulouse</p>
          <p className="text-[13px]">Fleet manager externalisé · France entière</p>
        </div>

        <div className="flex flex-col gap-2 max-md:items-center">
          <p className="label-mono text-[#666]">Nous contacter</p>
          <a href="tel:+33652045448" className={LINK_CLASS}>
            06 52 04 54 48
          </a>
          <a href="mailto:bonjour@sparkfleet.fr" className={LINK_CLASS}>
            bonjour@sparkfleet.fr
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-[#1a1b1d] pt-6 text-[13px] max-md:text-center">
        © 2026 SparkFleet. Tous droits réservés.
      </div>
    </footer>
  )
}
