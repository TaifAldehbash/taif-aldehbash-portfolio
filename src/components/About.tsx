import type { CSSProperties } from 'react'
import { certifications, milestones, profile, stats } from '../data/profile'
import { ui } from '../data/ui'
import { useReveal } from '../hooks/useReveal'
import { useText } from '../i18n'
import { Sparkle } from './Icons'
import { SectionHeading } from './SectionHeading'
import s from './About.module.css'

const kindColor = {
  Work: 'var(--tomato)',
  Training: 'var(--sky)',
  Internship: 'var(--violet-soft)',
  Education: 'var(--sun)',
} as const

export function About() {
  const t = useText()
  const portraitRef = useReveal<HTMLDivElement>()
  const bioRef = useReveal<HTMLDivElement>()
  const statsRef = useReveal<HTMLDListElement>()
  const journeyRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow={t(ui.about.eyebrow)} title={t(ui.about.title)} />

        <div className={s.layout}>
          <div ref={portraitRef} className={`reveal glass ${s.portrait}`}>
            {/* Swap for <img src={`${import.meta.env.BASE_URL}portrait.jpg`} alt={t(profile.name)} /> once you have a photo */}
            <div className={s.avatar} aria-hidden="true">
              <span>TA</span>
              <Sparkle className={s.avatarSparkle} />
            </div>
            <p className={s.caption}>
              <span className={s.captionName}>{t(profile.name)}</span>
              <span>{t(profile.location)}</span>
            </p>
          </div>

          <div ref={bioRef} className={`reveal ${s.bio}`} style={{ '--reveal-delay': '100ms' } as CSSProperties}>
            {profile.bio.map((paragraph) => (
              <p key={t(paragraph)}>{t(paragraph)}</p>
            ))}
            <div className={s.currently}>
              <h3 className={s.label}>{t(ui.about.learningNext)}</h3>
              <ul className={s.chips}>
                {profile.learning.map((item) => (
                  <li key={t(item)} className="chip">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <dl ref={statsRef} className={`reveal ${s.stats}`}>
          {stats.map((stat) => (
            <div key={stat.value} className={s.stat}>
              <dt className={s.statLabel}>{t(stat.label)}</dt>
              <dd className={s.statValue}>
                <span dir="ltr">{stat.value}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div ref={journeyRef} className={`reveal ${s.journey}`}>
          <h3 className={s.journeyTitle}>{t(ui.about.journey)}</h3>
          <div className={s.table}>
            <div className={s.head} aria-hidden="true">
              <span>{t(ui.about.when)}</span>
              <span>{t(ui.about.what)}</span>
              <span>{t(ui.about.where)}</span>
            </div>
            <ol className={s.rows}>
              {milestones.map((m) => (
                <li key={`${t(m.org)}-${t(m.title)}`} className={s.row}>
                  <span className={s.period}>{t(m.period)}</span>
                  <span className={s.role}>{t(m.title)}</span>
                  <span className={s.org}>
                    {t(m.org)}
                    <span className={s.kind}>
                      <span className="dot" style={{ color: kindColor[m.kind] }} />
                      {t(ui.milestoneKind[m.kind])}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <h3 className={s.label}>{t(ui.about.certifications)}</h3>
          <ul className={s.certs}>
            {certifications.map((cert) => (
              <li key={t(cert.title)} className={s.cert}>
                <span className={s.certTitle}>{t(cert.title)}</span>
                <span className={s.certMeta}>
                  {cert.issuer ? `${t(cert.issuer)} · ` : ''}
                  {cert.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
