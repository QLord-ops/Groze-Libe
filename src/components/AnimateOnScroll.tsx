import { useInView } from '../hooks/useInView'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimateOnScroll({ children, className = '', delay = 0 }: AnimateOnScrollProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
