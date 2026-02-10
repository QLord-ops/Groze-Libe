import AnimateOnScroll from '../components/AnimateOnScroll'

const hours = [
  { day: 'Montag', bar: '11:00 – 00:00 Uhr', kitchen: '12:00 – 21:30' },
  { day: 'Dienstag', bar: '11:00 – 00:00 Uhr', kitchen: '12:00 – 21:30' },
  { day: 'Mittwoch', bar: '11:00 – 00:00 Uhr', kitchen: '12:00 – 21:30' },
  { day: 'Donnerstag', bar: '11:00 – 01:00 Uhr', kitchen: '12:00 – 21:30' },
  { day: 'Freitag', bar: '11:00 – 01:00 Uhr', kitchen: '12:00 – 22:00' },
  { day: 'Samstag', bar: '11:00 – 01:00 Uhr', kitchen: '12:00 – 22:00' },
  { day: 'Sonntag', bar: 'Ruhen wir', kitchen: '—' },
]

export default function Öffnungszeiten() {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <header className="text-center mb-14">
            <p className="text-gold-400 font-display text-sm uppercase tracking-[0.25em] mb-3">
              Öffnungszeiten
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium">
              Wann wir da sind
            </h1>
            <p className="mt-4 text-zinc-400 text-lg">
              Bar und Küche – Mo – Sa ab 11 Uhr
            </p>
          </header>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
        <div className="card-premium overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-5 px-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">Tag</th>
                <th className="text-left py-5 px-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">Bar</th>
                <th className="text-left py-5 px-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">Küche</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((row) => (
                <tr key={row.day} className="border-b border-white/5 last:border-0">
                  <td className="py-4 px-6 text-white font-medium">{row.day}</td>
                  <td className="py-4 px-6 text-zinc-400">{row.bar}</td>
                  <td className="py-4 px-6 text-zinc-400">{row.kitchen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </AnimateOnScroll>
        <p className="mt-6 text-center text-sm text-zinc-500">
          Sonntag geschlossen. Küche schließt vor der Bar.
        </p>
      </div>
    </div>
  )
}
