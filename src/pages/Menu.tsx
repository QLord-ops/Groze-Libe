import { useRef, useEffect, useState } from 'react'
import { menuCategories } from '../data/menu'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function Menu() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [activeId, setActiveId] = useState<string>(menuCategories[0]?.id ?? '')

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && sectionRefs.current[hash]) {
      setActiveId(hash)
      sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-category')
            if (id) setActiveId(id)
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )
    menuCategories.forEach((cat) => {
      const el = sectionRefs.current[cat.id]
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <AnimateOnScroll>
          <header className="text-center mb-14 sm:mb-18">
            <p className="text-gold-400 font-display text-sm uppercase tracking-[0.25em] mb-3">
              Genießen
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-medium">
              Speisekarte
            </h1>
            <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-lg">
              Alle Burger mit Pommes inkl. Ketchup & Mayo. Es gilt die aktuelle Karte vor Ort.
            </p>
          </header>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Sticky category nav — desktop */}
          <aside className="lg:w-56 shrink-0">
            <nav className="lg:sticky lg:top-28 flex flex-wrap lg:flex-col gap-1">
              {menuCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveId(cat.id)
                    sectionRefs.current[cat.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeId === cat.id
                      ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {cat.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="space-y-24">
              {menuCategories.map((category) => (
                <AnimateOnScroll key={category.id}>
                  <section
                    id={category.id}
                    data-category={category.id}
                    ref={(el) => { sectionRefs.current[category.id] = el }}
                    className="scroll-mt-32"
                  >
                    <div className="mb-10">
                      <h2 className="font-display text-2xl sm:text-3xl text-gold-400 font-medium">
                        {category.title}
                      </h2>
                      {category.subtitle && (
                        <p className="mt-2 text-zinc-500 text-sm max-w-2xl leading-relaxed">
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                      {category.items.map((item) => (
                        <article
                          key={item.id}
                          className="group card-premium card-hover hover:border-gold-500/20"
                        >
                        <div className="aspect-[5/4] overflow-hidden bg-ink-800">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop'
                            }}
                          />
                        </div>
                        <div className="p-5 sm:p-6">
                          <h3 className="font-display text-lg sm:text-xl text-white font-medium leading-snug">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
                </AnimateOnScroll>
              ))}
            </div>

            <p className="mt-20 text-center text-sm text-zinc-600">
              Stand der Karte vorbehalten. Abbildungen Serviervorschläge.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
