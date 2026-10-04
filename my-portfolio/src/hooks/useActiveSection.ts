import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently most visible, for
 * highlighting the matching navigation item. Uses one IntersectionObserver
 * with a band near the top of the viewport so the active item changes when a
 * section's heading crosses it, not when its bottom edge does.
 */
export function useActiveSection(ids: readonly string[], rootMargin = '-20% 0px -70% 0px'): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          // Prefer the entry closest to the top of the band.
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActive(visible[0].target.id)
        }
      },
      { rootMargin, threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return active
}
