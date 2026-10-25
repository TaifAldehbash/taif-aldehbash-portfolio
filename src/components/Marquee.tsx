import { useEffect, useState } from 'react'
import { marquee } from '../data/profile'
import { Pause, Play, Sparkle } from './Icons'
import s from './Marquee.module.css'

const STORAGE_KEY = 'motion-paused'

function readPaused() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function Marquee() {
  const items = [...marquee, ...marquee]
  const [paused, setPaused] = useState(readPaused)

  // Pausing here stops every looping animation on the page, not just the band.
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'running'
    try {
      localStorage.setItem(STORAGE_KEY, String(paused))
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
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
        aria-label="Pause animations"
        title={paused ? 'Play animations' : 'Pause animations'}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? <Play /> : <Pause />}
      </button>
    </div>
  )
}
