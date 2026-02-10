import { Link } from 'react-router-dom'
import Map from '../components/Map'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function Kontakt() {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <header className="text-center mb-14">
            <p className="text-gold-400 font-display text-sm uppercase tracking-[0.25em] mb-3">
              Kontakt
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium">
              Wir freuen uns auf Euch
            </h1>
          </header>
        </AnimateOnScroll>

        {/* Контакты — основной блок, полноценная ширина */}
        <AnimateOnScroll delay={80}>
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="card-premium p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Adresse</p>
              <p className="font-display text-lg text-white">Die Große Liebe Bar</p>
              <p className="mt-1 text-zinc-400">Rote Str. 28</p>
              <p className="text-zinc-400">37073 Göttingen</p>
            </div>
            <div className="card-premium p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Kontakt</p>
              <a href="mailto:info@diegrosseliebebar.de" className="block text-gold-400 hover:text-gold-300 transition-colors font-medium">
                info@diegrosseliebebar.de
              </a>
              <a href="tel:+4955129120709" className="mt-2 block text-gold-400 hover:text-gold-300 transition-colors font-medium">
                +49 551 291 207 09
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://www.facebook.com/Grosseliebegoettingen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-gold-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/grosseliebeburgerbar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-gold-400 transition-colors"
            >
              Instagram
            </a>
          </div>

          <div className="mt-10 text-center">
            <Link to="/reservierung" className="btn-primary">
              Tisch reservieren
            </Link>
          </div>
        </div>
        </AnimateOnScroll>

        {/* Карта — отдельная секция ниже, не конкурирует с контактами */}
        <AnimateOnScroll delay={120}>
        <section className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 text-center sm:text-left">Standort</p>
          <Map />
          <p className="mt-3 text-center sm:text-left">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rote+Str.+28,+37073+Göttingen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
            >
              In Google Maps öffnen →
            </a>
          </p>
        </section>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
