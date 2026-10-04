import type { Variants } from 'motion/react'

/** The house easing: a quick start and a long settle. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

/** Parent that staggers its children (use with `item`). */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}
