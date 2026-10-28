import type { ReactNode } from 'react'
import { projectWord } from '../data/ui'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../i18n'
import s from './SectionHeading.module.css'

interface Props {
  id: string
  eyebrow: string
  title: ReactNode
  /** Number of projects, shown as a small superscript. */
  count?: number
  intro?: ReactNode
}

export function SectionHeading({ id, eyebrow, title, count, intro }: Props) {
  const ref = useReveal<HTMLDivElement>()
  const locale = useLocale()

  return (
    <div ref={ref} className={`reveal ${s.heading}`}>
      <div>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h2 id={id} className={s.title}>
          {title}
          {count !== undefined && (
            <sup className={s.count}>
              <span className="visually-hidden"> (</span>
              {String(count).padStart(2, '0')}
              <span className="visually-hidden"> {projectWord(locale, count)})</span>
            </sup>
          )}
        </h2>
      </div>
      {intro && <p className={s.intro}>{intro}</p>}
    </div>
  )
}
