import type { CSSProperties } from 'react'
import { tracks, type Track } from '../data/profile'
import { toolsLabel, ui } from '../data/ui'
import { useReveal } from '../hooks/useReveal'
import { useLocale, useText } from '../i18n'
import { SectionHeading } from './SectionHeading'
import { trackMeta } from './trackMeta'
import s from './Tracks.module.css'

export function Tracks() {
  const t = useText()

  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <div className="container">
        <SectionHeading
          id="stack-title"
          eyebrow={t(ui.tracks.eyebrow)}
          title={
            <>
              {t(ui.tracks.titleStart)} <em>{t(ui.tracks.titleAccent)}</em> {t(ui.tracks.titleEnd)}
            </>
          }
        />
        <ol className={s.grid}>
          {tracks.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function TrackCard({ track, index }: { track: Track; index: number }) {
  const ref = useReveal<HTMLLIElement>()
  const locale = useLocale()
  const t = useText()
  const { Icon, color } = trackMeta[track.id]

  return (
    <li
      ref={ref}
      className={`reveal glass ${s.card}`}
      style={{ '--accent': color, '--reveal-delay': `${index * 100}ms` } as CSSProperties}
    >
      <div className={s.top}>
        <span className={s.icon} aria-hidden="true">
          <Icon />
        </span>
        <span className={s.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className={s.title}>{t(track.title)}</h3>
      <p className={s.blurb}>{t(track.blurb)}</p>
      <ul className={s.skills} aria-label={toolsLabel(locale, t(track.title))}>
        {track.skills.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
      </ul>
      <p className={s.focus}>
        <span>{t(ui.tracks.next)}</span>
        {t(track.focus)}
      </p>
    </li>
  )
}
