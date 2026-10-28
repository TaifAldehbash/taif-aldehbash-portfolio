import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useText } from '../i18n'
import { ArrowDown, ArrowUpRight, Burst } from './Icons'
import s from './Hero.module.css'

const orbitChips = [
  { label: 'Swift · UIKit · Flutter', color: 'var(--track-mobile)', className: s.chipA },
  { label: 'Vue · Nuxt · TypeScript', color: 'var(--track-web)', className: s.chipB },
  { label: 'Firebase · REST', color: 'var(--track-backend)', className: s.chipC },
  { label: 'Figma · UI/UX', color: 'var(--violet-soft)', className: s.chipD },
]

export function Hero() {
  const t = useText()

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
            {/* Tech names always read left to right; the chip itself follows the page's side. */}
            <span dir="ltr">{chip.label}</span>
          </span>
        ))}
      </div>

      <div className={`container ${s.inner}`}>
        <p className={s.status}>
          <span className={s.pulse} aria-hidden="true" />
          {t(profile.availability)}
        </p>

        <h1 id="hero-title" className={s.title}>
          {/* The spaces keep the words apart in the HTML text crawlers and screen readers get;
              the flex layout ignores them visually. */}
          <span className={s.greeting}>{t(ui.hero.greeting)}</span>{' '}
          <span className={s.line}>
            {t(profile.firstName)}
            <Burst className={s.burst} />
          </span>{' '}
          <span className={s.line}>{t(profile.lastName)}</span>
        </h1>

        <div className={s.footer}>
          <p className={s.tagline}>
            <strong>{t(profile.role)}.</strong> {t(profile.tagline)}
          </p>
          <div className={s.actions}>
            <a href="#work" className="btn btn-primary">
              {t(ui.hero.seeMyWork)}
              <ArrowDown data-nudge="down" />
            </a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className="btn btn-ghost" download>
                {t(ui.downloadCv)}
                <span className="visually-hidden"> {t(ui.pdf)}</span>
                <ArrowDown data-nudge="down" />
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost">
                {t(ui.hero.getInTouch)}
                <ArrowUpRight data-nudge="diag" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
