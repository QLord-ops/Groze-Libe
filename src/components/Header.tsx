import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/speisekarte', label: 'Speisekarte' },
  { to: '/reservierung', label: 'Reservierung' },
  { to: '/oeffnungszeiten', label: 'Öffnungszeiten' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink-950/85 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="font-display text-xl sm:text-2xl text-gold-400 font-semibold tracking-tight hover:text-gold-300 transition-colors"
        >
          Die Große Liebe
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
                  ? 'text-gold-400 bg-gold-500/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/reservierung" className="btn-primary text-sm py-2.5 px-5">
            Tisch reservieren
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-ink-950/98 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
            {nav.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`py-3 px-3 rounded-xl text-sm font-medium ${
                  location.pathname === to ? 'text-gold-400 bg-gold-500/10' : 'text-zinc-300'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/reservierung"
              className="mt-4 btn-primary text-sm text-center py-3"
              onClick={() => setOpen(false)}
            >
              Tisch reservieren
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
