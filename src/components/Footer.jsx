import Logo from './Logo'

const LINK_CLASS = 'text-[13px] transition-colors hover:text-paper'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 bg-ink px-12 py-7 text-[#888] max-md:flex-col max-md:px-5 max-md:py-6 max-md:text-center">
      <a href="#" className="flex items-center">
        <Logo tone="light" className="h-7 w-auto" />
      </a>

      <div className="flex items-center gap-x-5 gap-y-1 max-md:flex-col">
        <a href="mailto:bonjour@sparkfleet.fr" className={LINK_CLASS}>
          bonjour@sparkfleet.fr
        </a>
        <span aria-hidden="true" className="text-[13px] opacity-40 max-md:hidden">
          ·
        </span>
        <a href="tel:+33652045448" className={LINK_CLASS}>
          06 52 04 54 48
        </a>
      </div>

      <p className="text-[13px]">Fleet manager externalisé · Toulouse et France entière</p>
      <p className="text-[13px]">© 2026 SparkFleet. Tous droits réservés.</p>
    </footer>
  )
}
