import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** Seconds per loop. */
  speed?: number
  reverse?: boolean
  className?: string
  /** Accessible label for the whole strip; the duplicated copy is hidden from assistive tech. */
  label?: string
}

/**
 * An endless horizontal strip. Built with a CSS keyframe so it costs nothing
 * on the main thread; pauses on hover and stops under reduced motion (see
 * the .marquee rules in index.css).
 */
export function Marquee({ children, speed = 28, reverse = false, className = '', label }: Props) {
  return (
    <div className={`marquee ${className}`} aria-label={label} role={label ? 'group' : undefined}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
