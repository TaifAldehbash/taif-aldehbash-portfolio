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
  return (
    <Section
      id="contact"
      title="Contact"
      titleNode={
        <>
          <span className="sr-only">Contact: </span>
          <a href={`mailto:${profile.email}`} className="is-url break-all text-[1.625rem] leading-8 md:text-[2.5rem] md:leading-[2.875rem]">
            {profile.email}
          </a>
        </>
      }
    >
      <dl className="grid gap-x-6 gap-y-3 md:grid-cols-[8rem_1fr]">
        {rows.map((r) => (
          <div key={r.term} className="contents">
            <dt className="ui text-sm font-bold leading-5 text-ink-2">{r.term}</dt>
            <dd className="text-[1.0625rem] leading-6">
              <a href={r.href} className="is-url break-all">
                {r.text}
              </a>
            </dd>
          </div>
        ))}
        <div className="contents">
          <dt className="ui text-sm font-bold leading-5 text-ink-2">Location</dt>
          <dd className="text-[1.0625rem] leading-6">
            {profile.location}, {profile.timezone}
          </dd>
        </div>
      </dl>

      <p className="measure mt-8 text-[1.0625rem] leading-[1.6875rem] lg:text-lg lg:leading-[1.8125rem]">{profile.availability}</p>

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
