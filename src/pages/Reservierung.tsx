import { useState } from 'react'
import Map from '../components/Map'
import AnimateOnScroll from '../components/AnimateOnScroll'

const FORM_ACTION = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Reservierung() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        setSent(false)
        alert('Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut oder rufen Sie uns an.')
      }
    } catch {
      setSent(false)
      alert('Netzwerkfehler. Bitte rufen Sie uns zur Reservierung an: +49 551 291 207 09')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <header className="text-center mb-12">
            <p className="text-gold-400 font-display text-sm uppercase tracking-[0.25em] mb-3">
              Reservierung
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium">
              Tisch reservieren
            </h1>
            <p className="mt-4 text-zinc-400 text-lg max-w-md mx-auto">
              Füllen Sie das Formular aus – wir melden uns zur Bestätigung.
            </p>
          </header>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-[1fr,480px] gap-8 lg:gap-10 items-start">
          <div className="min-w-0">
            <div className="card-premium p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gold-400 font-semibold text-lg">Vielen Dank!</p>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                Ihre Reservierungsanfrage wurde gesendet. Wir bestätigen sie in Kürze per E-Mail oder Telefon.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 btn-outline text-sm"
              >
                Weitere Reservierung
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="_subject" value="Neue Reservierung – Die Große Liebe" readOnly className="hidden" />
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-1.5">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-premium"
                  placeholder="Ihr Name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-premium"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-zinc-300 mb-1.5">
                    Telefon *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="input-premium"
                    placeholder="+49 …"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-zinc-300 mb-1.5">
                    Datum *
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="input-premium"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-zinc-300 mb-1.5">
                    Uhrzeit *
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="input-premium"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-semibold text-zinc-300 mb-1.5">
                  Anzahl Personen *
                </label>
                <select id="guests" name="guests" required className="input-premium">
                  <option value="">Bitte wählen</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>
                  ))}
                  <option value="10+">10+ Personen</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-1.5">
                  Anmerkungen
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="input-premium resize-none"
                  placeholder="z.B. Fensterplatz, Geburtstag, Allergien …"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-4 disabled:opacity-60"
              >
                {loading ? 'Wird gesendet …' : 'Reservierung anfragen'}
              </button>
            </form>
          )}
            </div>
            <p className="mt-6 text-center lg:text-left text-sm text-zinc-500">
              Oder rufen Sie uns an:{' '}
              <a href="tel:+4955129120709" className="text-gold-400 hover:underline font-medium">
                +49 551 291 207 09
              </a>
            </p>
          </div>
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Standort</p>
            <Map />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rote+Str.+28,+37073+Göttingen"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-gold-400 hover:text-gold-300 transition-colors"
            >
              In Google Maps öffnen →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
