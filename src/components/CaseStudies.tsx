import type { CSSProperties } from 'react'
import { caseStudies, profile, type CaseStudy } from '../data/profile'
import { ui } from '../data/ui'
import { useReveal } from '../hooks/useReveal'
import { useLocale, useText } from '../i18n'
import { ArrowUpRight, Behance } from './Icons'
import { SectionHeading } from './SectionHeading'
import s from './CaseStudies.module.css'

export function CaseStudies() {
  const t = useText()

  return (
    <section id="design" className="section" aria-labelledby="design-title">
      <div className="container">
        <SectionHeading
          id="design-title"
          eyebrow={t(ui.design.eyebrow)}
          title={
            <>
              {t(ui.design.title)} <em>{t(ui.design.titleAccent)}</em>
            </>
          }
          intro={t(profile.designIntro)}
        />

        <ul className={s.grid}>
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </ul>

        <a href={profile.socials.behance} className={`btn btn-ghost ${s.more}`} target="_blank" rel="noreferrer">
          <Behance />
          {t(ui.design.more)}
          <span className="visually-hidden">
            {t(ui.design.moreHidden)} {t(ui.opensNewTab)}
          </span>
          <ArrowUpRight data-nudge="diag" />
        </a>
      </div>
    </section>
  )
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useReveal<HTMLLIElement>()
  const locale = useLocale()
  const t = useText()

  return (
    <li ref={ref} className={`reveal ${s.card}`} style={{ '--reveal-delay': `${(index % 2) * 90}ms` } as CSSProperties}>
      <div className={s.cover}>
        <img src={study.image} alt="" width={808} height={632} loading="lazy" decoding="async" />
      </div>
      <div className={s.body}>
        <p className={s.meta}>
          <span>{t(study.team)}</span>
          <span aria-hidden="true">·</span>
          <span>{t(study.published)}</span>
        </p>
        <h3 className={s.title}>
          <a href={study.href} className={s.link} target="_blank" rel="noreferrer">
            {t(study.title)}
            {/* On the English page, Arabic product names also show in Arabic. */}
            {locale === 'en' && study.titleAr && (
              <>
                {' '}
                <span lang="ar" dir="rtl" className={s.titleAr}>
                  {study.titleAr}
                </span>
              </>
            )}
            <span className="visually-hidden">
              {locale === 'ar' ? ' – ' : ' '}
              {t(ui.design.caseHidden)} {t(ui.opensNewTab)}
            </span>
          </a>
          <ArrowUpRight className={s.arrow} />
        </h3>
        <p className={s.summary}>{t(study.summary)}</p>
      </div>
    </li>
  )
}
