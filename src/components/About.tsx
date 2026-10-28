import type { CSSProperties } from 'react'
import { certifications, milestones, profile, stats } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
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
  const portraitRef = useReveal<HTMLDivElement>()
  const bioRef = useReveal<HTMLDivElement>()
  const statsRef = useReveal<HTMLDListElement>()
  const journeyRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="A little about me" title="About" />

        <div className={s.layout}>
          <div ref={portraitRef} className={`reveal glass ${s.portrait}`}>
            {/* Swap for <img src={`${import.meta.env.BASE_URL}portrait.jpg`} alt="Taif Aldehbash" /> once you have a photo */}
            <div className={s.avatar} aria-hidden="true">
              <span>TA</span>
              <Sparkle className={s.avatarSparkle} />
            </div>
            <p className={s.caption}>
              <span className={s.captionName}>{profile.name}</span>
              <span>{profile.location}</span>
            </p>
          </div>

          <div ref={bioRef} className={`reveal ${s.bio}`} style={{ '--reveal-delay': '100ms' } as CSSProperties}>
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className={s.currently}>
              <h3 className={s.label}>Learning next</h3>
              <ul className={s.chips}>
                {profile.learning.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <dl ref={statsRef} className={`reveal ${s.stats}`}>
          {stats.map((stat) => (
            <div key={stat.label} className={s.stat}>
              <dt className={s.statLabel}>{stat.label}</dt>
              <dd className={s.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div ref={journeyRef} className={`reveal ${s.journey}`}>
          <h3 className={s.journeyTitle}>Journey</h3>
          <div className={s.table}>
            <div className={s.head} aria-hidden="true">
              <span>When</span>
              <span>What</span>
              <span>Where</span>
            </div>
            <ol className={s.rows}>
              {milestones.map((m) => (
                <li key={`${m.org}-${m.title}`} className={s.row}>
                  <span className={s.period}>{m.period}</span>
                  <span className={s.role}>{m.title}</span>
                  <span className={s.org}>
                    {m.org}
                    <span className={s.kind}>
                      <span className="dot" style={{ color: kindColor[m.kind] }} />
                      {m.kind}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <h3 className={s.label}>Certifications</h3>
          <ul className={s.certs}>
            {certifications.map((cert) => (
              <li key={cert.title} className={s.cert}>
                <span className={s.certTitle}>{cert.title}</span>
                <span className={s.certMeta}>
                  {cert.issuer ? `${cert.issuer} · ` : ''}
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
