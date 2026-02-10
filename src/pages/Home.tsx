import { Link } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function Home() {
  return (
    <div>
      {/* Hero — full viewport, premium feel */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=85')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 pb-24">
          <p
            className="font-display text-gold-400 text-sm sm:text-base tracking-[0.35em] uppercase opacity-0 animate-fade-in-up"
            style={{ animationFillMode: 'forwards' }}
          >
            Göttingen · Rote Straße
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-[1.1] mt-6 opacity-0 animate-fade-in-up-delay">
            Deine Bar in
            <br />
            <span className="text-gold-400 italic">Großer Liebe</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-zinc-300 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in-up-delay-2">
            Burger · Cocktail · Bar. Große Portionen, groß(artiger) Service und eine Atmosphäre zum Wohlfühlen.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up-delay-2" style={{ animationDelay: '0.4s' }}>
            <Link to="/speisekarte" className="btn-primary min-w-[200px]">
              Zur Speisekarte
            </Link>
            <Link to="/reservierung" className="btn-outline min-w-[200px]">
              Tisch reservieren
            </Link>
          </div>
          <p className="mt-10 text-zinc-500 text-sm">
            Mo – Sa ab 11 Uhr · Küche bis 21:30 / 22:00
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Philosophie — Große Liebe */}
      <section className="py-24 sm:py-32 relative">
        <div className="section-divider" />
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-gold-400 font-display text-sm uppercase tracking-[0.25em] mb-4">
              Was wir meinen
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-8">
              „Große Liebe“
            </h2>
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Die Liebe zur Gastronomie, zum Umgang mit Menschen, Spaß bei der Arbeit, die Liebe zum Genuss, 
              gutes Essen und coole Drinks, große Portionen die satt und glücklich machen, groß(artiger) Service 
              und eine groß(herzige) Atmosphäre zum Wohlfühlen – und natürlich ein bisschen echte große Liebe!
            </p>
            <p className="mt-8 text-gold-400 font-semibold text-lg">
              Das ist Deine Bar in Göttingen – die Große Liebe.
            </p>
            <p className="mt-2 text-zinc-500">
              burger. cocktail. bar.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="section-divider mt-24 sm:mt-32" />
      </section>

      {/* Featured: Burger, Flammkuchen, Drinks — 3 cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <p className="text-gold-400 font-display text-sm uppercase tracking-[0.25em] text-center mb-3">
              Entdecken
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white text-center mb-14">
              Unsere Karte
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <AnimateOnScroll delay={0}>
              <Link
                to="/speisekarte#rindsburger"
                className="group card-premium card-hover block overflow-hidden"
              >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85"
                  alt="Burger"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white group-hover:text-gold-400 transition-colors">
                  XXL Burger
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  226 g Rinderhack, Sesambrötchen, Pommes
                </p>
              </div>
            </Link>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <Link
                to="/speisekarte#flammkuchen"
                className="group card-premium card-hover block overflow-hidden relative"
              >
              <span className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-gold-500/90 text-ink-950 text-xs font-semibold">
                Neu
              </span>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=85"
                  alt="Flammkuchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white group-hover:text-gold-400 transition-colors">
                  Flammkuchen
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Leichte Alternative – frisch aus dem Ofen
                </p>
              </div>
            </Link>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <Link
                to="/speisekarte#drinks"
                className="group card-premium card-hover block overflow-hidden"
              >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=85"
                  alt="Cocktails"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white group-hover:text-gold-400 transition-colors">
                  Drinks & Bar
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Cocktails, Bier, Longdrinks
                </p>
              </div>
            </Link>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={250}>
          <div className="text-center mt-10">
            <Link to="/speisekarte" className="btn-outline">
              Vollständige Speisekarte
            </Link>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA — Reservierung + Öffnungszeiten */}
      <section className="py-24 sm:py-32 bg-ink-900/40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent pointer-events-none" />
        <AnimateOnScroll>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">
            Wir freuen uns auf Euren Besuch
          </h2>
          <p className="text-zinc-400 mb-10">
            Mo – Sa ab 11 Uhr · Sonntag geschlossen
          </p>
          <Link to="/reservierung" className="btn-primary shadow-gold-glow">
            Jetzt Tisch reservieren
          </Link>
          <p className="mt-8 text-sm text-zinc-500">
            Rote Str. 28, 37073 Göttingen ·{' '}
            <a href="tel:+4955129120709" className="text-gold-400 hover:underline">+49 551 291 207 09</a>
          </p>
        </div>
        </AnimateOnScroll>
      </section>
    </div>
  )
}
