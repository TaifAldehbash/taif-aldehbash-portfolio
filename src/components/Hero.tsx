import { profile } from '../data/profile'
import { ArrowDown, ArrowUpRight, Burst } from './Icons'
import s from './Hero.module.css'

const orbitChips = [
  { label: 'Swift · UIKit · Flutter', color: 'var(--track-mobile)', className: s.chipA },
  { label: 'Vue · Nuxt · TypeScript', color: 'var(--track-web)', className: s.chipB },
  { label: 'Firebase · REST', color: 'var(--track-backend)', className: s.chipC },
  { label: 'Figma · UI/UX', color: 'var(--violet-soft)', className: s.chipD },
]

export function Hero() {
  return (
    <section id="top" className={s.hero} aria-labelledby="hero-title">
      <div className={s.visual} aria-hidden="true">
        <div className={s.arc} />
        <div className={s.orb}>
          <div className={s.ring} />
        </div>
        {orbitChips.map((chip) => (
          <span key={chip.label} className={`${s.chip} ${chip.className}`}>
            <span className="dot" style={{ color: chip.color }} />
            {chip.label}
          </span>
        ))}
      </div>

      <div className={`container ${s.inner}`}>
        <p className={s.status}>
          <span className={s.pulse} aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 id="hero-title" className={s.title}>
          <span className={s.greeting}>Hi, I&rsquo;m</span>
          <span className={s.line}>
            {profile.firstName}
            <Burst className={s.burst} />
          </span>
          <span className={s.line}>{profile.lastName}</span>
        </h1>

        <div className={s.footer}>
          <p className={s.tagline}>
            <strong>{profile.role}.</strong> {profile.tagline}
          </p>
          <div className={s.actions}>
            <a href="#work" className="btn btn-primary">
              See my work
              <ArrowDown data-nudge="down" />
            </a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className="btn btn-ghost" download>
                Download CV
                <span className="visually-hidden"> (PDF)</span>
                <ArrowDown data-nudge="down" />
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost">
                Get in touch
                <ArrowUpRight data-nudge="diag" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
