import { Link } from 'react-router-dom'

const links = [
  { path: '/', label: 'Home' },
  { path: '/speisekarte', label: 'Speisekarte' },
  { path: '/reservierung', label: 'Reservierung' },
  { path: '/oeffnungszeiten', label: 'Öffnungszeiten' },
  { path: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900/80 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 text-center md:text-left">
          <div className="md:col-span-4">
            <p className="font-display text-xl text-gold-400 font-semibold">Die Große Liebe</p>
            <p className="mt-1 text-zinc-500">Burger · Cocktail · Bar</p>
            <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
              Rote Str. 28<br />37073 Göttingen
            </p>
            <div className="mt-4 flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/Grosseliebegoettingen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-gold-400 transition-colors p-1"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/grosseliebeburgerbar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-gold-400 transition-colors p-1"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Navigation</p>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {links.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-zinc-400 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Kontakt</p>
            <a href="mailto:info@diegrosseliebebar.de" className="block text-sm text-zinc-400 hover:text-gold-400 transition-colors">
              info@diegrosseliebebar.de
            </a>
            <a href="tel:+4955129120709" className="mt-1 block text-sm text-zinc-400 hover:text-gold-400 transition-colors">
              +49 551 291 207 09
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Öffnungszeiten</p>
            <p className="text-sm text-zinc-400">Mo – Sa ab 11 Uhr</p>
            <p className="text-xs text-zinc-500 mt-1">Küche bis 21:30 / 22:00</p>
            <p className="text-xs text-zinc-500">Sonntag geschlossen</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <p className="text-sm text-zinc-600 text-center md:text-left">
            © {new Date().getFullYear()} Die Große Liebe Bar. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
