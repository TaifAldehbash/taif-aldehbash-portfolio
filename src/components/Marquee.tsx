import { useEffect, useSyncExternalStore } from 'react'
import { marquee } from '../data/profile'
import { ui } from '../data/ui'
import { useText } from '../i18n'
import { Pause, Play, Sparkle } from './Icons'
import s from './Marquee.module.css'

const STORAGE_KEY = 'motion-paused'

// The pause choice is a tiny external store: saved in localStorage, with an in-memory
// fallback for when storage is unavailable (private mode).
let memory: boolean | null = null
const listeners = new Set<() => void>()

function readPaused() {
  if (memory !== null) return memory
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function savePaused(next: boolean) {
  memory = next
  try {
    localStorage.setItem(STORAGE_KEY, String(next))
  } catch {
    // Storage is unavailable; the in-memory value still works for this visit.
  }
  listeners.forEach((notify) => notify())
}

function subscribe(notify: () => void) {
  listeners.add(notify)
  return () => listeners.delete(notify)
}

export function Marquee() {
  const items = [...marquee, ...marquee]
  const t = useText()
  // The server snapshot is "not paused", so the pre-rendered HTML and hydration match.
  const paused = useSyncExternalStore(subscribe, readPaused, () => false)

  // Pausing here stops every looping animation on the page, not just the band.
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'running'
  }, [paused])

  return (
    <div className={s.clip}>
      {/* Decorative: the same skills are listed in the "What I build" section. */}
      <div className={s.band} aria-hidden="true">
        <div className={s.track}>
          {items.map((item, i) => (
            <span key={i} className={s.item}>
              <span className={i % 2 ? s.serif : undefined}>{item}</span>
              <Sparkle className={s.sparkle} />
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={s.pause}
        aria-pressed={paused}
        aria-label={t(ui.pauseAnimations)}
        title={paused ? t(ui.playAnimations) : t(ui.pauseAnimations)}
        onClick={() => savePaused(!paused)}
      >
        {paused ? <Play /> : <Pause />}
      </button>
    </div>
  )
}
