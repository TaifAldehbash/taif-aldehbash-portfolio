import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE_OUT, stagger } from './tokens'

interface RevealProps {
  children: ReactNode
  /** Extra delay in seconds, for staggering siblings by hand. */
  delay?: number
  /** Distance travelled in px. */
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'p' | 'span' | 'article' | 'header' | 'footer'
  /** Trigger once (default) or every time it enters. */
  once?: boolean
  /** Portion of the element that must be visible before it reveals. */
  amount?: number
}

/**
 * Fades and lifts its children into place as they enter the viewport.
 * Under reduced motion the content is simply there.
 */
export function Reveal({ children, delay = 0, y = 24, className, as = 'div', once = true, amount = 0.25 }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
    >
      {children}
    </Tag>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol' | 'section'
  amount?: number
}

/** Container whose motion children with `variants={item}` enter one after another. */
export function Stagger({ children, className, as = 'div', amount = 0.2 }: StaggerProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Tag className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount }}>
      {children}
    </Tag>
  )
}
