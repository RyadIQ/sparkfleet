import { Link } from 'react-router-dom'
import Logo from './Logo'

const LINKS = [
  { href: '#pourquoi', label: 'Pourquoi' },
  { href: '#offres', label: 'Offres' },
  { href: '#sparkscore', label: 'SparkScore' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-100 flex items-center justify-between border-b border-line bg-paper/95 px-12 py-[18px] backdrop-blur-[10px] max-md:px-5 max-md:py-3.5">
      <a href="#" className="flex items-center" aria-label="SparkFleet, retour en haut de page">
        <Logo className="h-9 w-auto max-sm:h-8" />
      </a>

      <nav aria-label="Navigation principale" className="max-md:hidden">
        <ul className="flex list-none gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-mid transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4 max-sm:gap-2.5">
        <Link to="/login" className="text-sm font-medium text-mid transition-colors hover:text-ink max-sm:text-[13px]">
          Espace membre
        </Link>
        <a
          href="#contact"
          className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-hover max-sm:px-3.5 max-sm:py-2 max-sm:text-[13px]"
        >
          Nous contacter
        </a>
      </div>
    </header>
  )
}
