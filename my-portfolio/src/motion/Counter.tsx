import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion, animate } from 'motion/react'

interface Props {
  to: number
  from?: number
  /** Seconds. */
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

/** Counts up to a number when scrolled into view. Reduced motion shows the final value. */
export function Counter({ to, from = 0, duration = 1.4, suffix = '', prefix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const reduce = useReducedMotion()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce || !inView) {
      el.textContent = `${prefix}${reduce ? to : from}${suffix}`
      return
    }
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${prefix}${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, reduce, from, to, duration, prefix, suffix])
  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}
      {reduce ? to : from}
      {suffix}
    </span>
  )
}
