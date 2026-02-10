const ADDRESS = 'Rote Str. 28, 37073 Göttingen'
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&t=m&output=embed`

export default function Map() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-ink-800 shadow-premium h-[340px] sm:h-[400px] lg:h-[480px] min-h-[340px]">
      <iframe
        title="Die Große Liebe Bar – Standort auf Google Maps"
        src={MAP_EMBED_URL}
        width="100%"
        height="100%"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
