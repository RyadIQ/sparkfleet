import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 bg-ink px-12 py-7 text-[#888] max-md:flex-col max-md:px-5 max-md:py-6 max-md:text-center">
      <a href="#" className="flex items-center">
        <Logo tone="light" className="h-7 w-auto" />
      </a>
      <p className="text-[13px]">Fleet manager externalisé · Toulouse et France entière</p>
      <p className="text-[13px]">© 2026 SparkFleet. Tous droits réservés.</p>
    </footer>
  )
}
