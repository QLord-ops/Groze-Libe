import { useEffect, useRef, useState } from 'react'

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px 0px -60px 0px',
  threshold: 0,
}

export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { ...defaultOptions, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options.rootMargin, options.threshold])

  return { ref, isInView }
}
