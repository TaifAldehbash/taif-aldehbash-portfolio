import { profile, hasBehance } from '../content/profile'
import { formatBuildDate } from '../lib/dates'
import { Section } from './Section'
import { PrintButton, ThemeControl } from './ThemeControls'

export function ContactSection() {
  const rows = [
    { term: 'LinkedIn', href: profile.links.linkedin.url, text: profile.links.linkedin.display },
    { term: 'GitHub', href: profile.links.github.url, text: profile.links.github.display },
    ...(hasBehance() ? [{ term: 'Behance', href: profile.links.behance.url, text: profile.links.behance.display }] : []),
  ]
  const dtClass = 'ui mb-1 text-sm font-bold leading-5 text-ink-2 md:mb-0'
  const ddClass = 'text-[1.0625rem] leading-6'
  return (
    <Section
      id="contact"
      title="Contact"
      titleNode={
        <>
          <span className="sr-only">Contact: </span>
          <a
            href={`mailto:${profile.email}`}
            className="is-url break-all text-[1.625rem] leading-8 decoration-ink decoration-2 underline-offset-[0.12em] md:text-[2.5rem] md:leading-[2.875rem]"
          >
            {profile.email}
          </a>
        </>
      }
    >
      <dl className="grid gap-y-4 md:grid-cols-[8rem_1fr] md:gap-x-6 md:gap-y-3">
        {rows.map((r) => (
          <div key={r.term} className="md:contents">
            <dt className={dtClass}>{r.term}</dt>
            <dd className={ddClass}>
              <a href={r.href} className="is-url break-all">
                {r.text}
              </a>
            </dd>
          </div>
        ))}
        <div className="md:contents">
          <dt className={dtClass}>Location</dt>
          <dd className={ddClass}>
            {profile.location}, {profile.timezone}
          </dd>
        </div>
      </dl>

      {profile.availability && (
        <p className="measure mt-8 text-[1.0625rem] leading-[1.6875rem] lg:text-lg lg:leading-[1.8125rem]">{profile.availability}</p>
      )}

      <footer className="rule-1 mt-12 flex flex-wrap items-center justify-between gap-6 pt-6">
        <p className="ui text-sm leading-5 text-ink-2">Last updated {formatBuildDate()}.</p>
        <div className="no-print flex flex-wrap items-center gap-4">
          <ThemeControl />
          <PrintButton />
        </div>
      </footer>
    </Section>
  )
}
