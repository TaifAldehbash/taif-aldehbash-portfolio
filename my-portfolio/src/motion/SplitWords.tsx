import { motion, useReducedMotion } from 'motion/react'
import { EASE_OUT } from './tokens'

interface Props {
  text: string
  className?: string
  /** Seconds between words. */
  step?: number
  delay?: number
  /** Animate when scrolled into view (default) or immediately on mount. */
  trigger?: 'inView' | 'mount'
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

/**
 * Reveals a line word by word, each word rising out of a clipped box. The
 * text stays a single string for screen readers; the words are decorative.
 * Under reduced motion the text renders plainly.
 */
export function SplitWords({ text, className, step = 0.045, delay = 0, trigger = 'inView', as = 'span' }: Props) {
  const reduce = useReducedMotion()
  const Tag = as
  if (reduce) return <Tag className={className}>{text}</Tag>
  const words = text.split(' ')
  const viewProps = trigger === 'inView' ? { whileInView: 'show', viewport: { once: true, amount: 0.6 } } : { animate: 'show' }
  return (
    <Tag className={className} aria-label={text}>
      <motion.span aria-hidden="true" initial="hidden" {...viewProps} className="inline">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="inline-block will-change-transform"
              variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: delay + i * step }}
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
