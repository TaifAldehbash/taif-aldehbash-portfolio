import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'motion/react'

/**
 * Smooth, inertial scrolling for the whole page. Off when the visitor asks
 * for reduced motion, on touch devices (native momentum is better there),
 * and in print.
 */
export function useSmoothScroll() {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1, smoothWheel: true, anchors: true })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [reduce])
}
