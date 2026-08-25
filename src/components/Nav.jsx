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
    <nav className="fixed inset-x-0 top-0 z-100 flex items-center justify-between border-b border-line bg-paper/95 px-12 py-[18px] backdrop-blur-[10px] max-md:px-5 max-md:py-3.5">
      <a href="#" className="flex items-center">
        <Logo className="h-9 w-auto" />
      </a>

      <ul className="flex list-none gap-8 max-md:hidden">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm font-medium text-mid transition-colors hover:text-ink">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm font-medium text-mid transition-colors hover:text-ink">
          Espace membre
        </Link>
        <a
          href="#contact"
          className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-hover"
        >
          Nous contacter
        </a>
      </div>
    </nav>
  )
}
