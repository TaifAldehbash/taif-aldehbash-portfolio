import { useRef, type ReactNode, type PointerEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

interface Props {
  children: ReactNode
  className?: string
  /** How far the element follows the pointer, in px. */
  strength?: number
}

/**
 * Lets an element lean toward the pointer while hovered and spring back on
 * leave. Pointer-only: no effect on touch or under reduced motion.
 */
export function Magnetic({ children, className, strength = 14 }: Props) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set(((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * strength)
    y.set(((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} className={className} style={{ x: sx, y: sy, display: 'inline-block' }} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </motion.div>
  )
}
