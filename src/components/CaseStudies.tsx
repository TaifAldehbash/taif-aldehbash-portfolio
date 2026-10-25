import type { CSSProperties } from 'react'
import { caseStudies, profile, type CaseStudy } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import { ArrowUpRight, Behance } from './Icons'
import { SectionHeading } from './SectionHeading'
import s from './CaseStudies.module.css'

export function CaseStudies() {
  return (
    <section id="design" className="section" aria-labelledby="design-title">
      <div className="container">
        <SectionHeading
          id="design-title"
          eyebrow="UI/UX case studies"
          title={
            <>
              Design <em>too</em>
            </>
          }
          intro={profile.designIntro}
        />

        <ul className={s.grid}>
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </ul>

        <a href={profile.socials.behance} className={`btn btn-ghost ${s.more}`} target="_blank" rel="noreferrer">
          <Behance />
          More on Behance
          <span className="visually-hidden">: full case studies (opens in a new tab)</span>
          <ArrowUpRight data-nudge="diag" />
        </a>
      </div>
    </section>
  )
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useReveal<HTMLLIElement>()

  return (
    <li ref={ref} className={`reveal ${s.card}`} style={{ '--reveal-delay': `${(index % 2) * 90}ms` } as CSSProperties}>
      <div className={s.cover}>
        <img src={study.image} alt="" width={808} height={632} loading="lazy" decoding="async" />
      </div>
      <div className={s.body}>
        <p className={s.meta}>
          <span>{study.team}</span>
          <span aria-hidden="true">·</span>
          <span>{study.published}</span>
        </p>
        <h3 className={s.title}>
          <a href={study.href} className={s.link} target="_blank" rel="noreferrer">
            {study.title}
            {study.titleAr && (
              <>
                {' '}
                <span lang="ar" dir="rtl" className={s.titleAr}>
                  {study.titleAr}
                </span>
              </>
            )}
            <span className="visually-hidden"> case study on Behance (opens in a new tab)</span>
          </a>
          <ArrowUpRight className={s.arrow} />
        </h3>
        <p className={s.summary}>{study.summary}</p>
      </div>
    </li>
  )
}
