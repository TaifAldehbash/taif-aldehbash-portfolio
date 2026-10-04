import { caseStudies } from '../content/caseStudies'
import { profile, hasBehance } from '../content/profile'
import nahajLogo from '../assets/projects/nahaj-logo.png'
import { MarkGlyph } from './PlatformMark'
import { Section } from './Section'

const SHIPPED = [
  { href: '#finblade-ai', product: 'FinBlade AI', what: 'UI/UX redesign of the mobile app', years: '2024 to now' },
  { href: '#minute', product: 'Minute & MinuteDriver', what: 'Screens for the rider and driver apps', years: '2023 to 2024' },
]

const rowClass = 'grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-t border-rule py-3 first:border-t-0 md:grid-cols-[14rem_1fr_auto]'

export function DesignSection() {
  const behance = hasBehance()
  return (
    <Section
      id="design"
      title="Design"
      titleNode={
        <span className="flex items-center gap-3">
          <MarkGlyph platform="design" size={16} />
          Design
        </span>
      }
    >
      <p className="measure text-[1.0625rem] leading-[1.6875rem] lg:text-lg lg:leading-[1.8125rem]">
        At Minute I designed the screens I then built in Swift, and at ICS Arabia I led the UI/UX redesign of the FinBlade AI app. In
        2025 I formalised that side of the work with the Tuwaiq Academy UI/UX bootcamp.
      </p>

      <h3 className="mt-10 text-2xl leading-[1.875rem]">Design inside the shipped work</h3>
      <ul className="mt-4 border-y border-rule">
        {SHIPPED.map((s) => (
          <li key={s.href} className={rowClass}>
            <a href={s.href} className="text-[1.0625rem] leading-6">
              {s.product}
            </a>
            <span className="ui col-span-2 text-sm leading-5 text-ink-2 md:col-span-1">{s.what}</span>
            <span className="ui tnum col-start-2 row-start-1 text-sm leading-5 text-ink-2 md:col-start-3">{s.years}</span>
          </li>
        ))}
      </ul>

      <figure className="design-figure mt-8 flex items-center gap-5">
        <img src={nahajLogo} alt="The Nahaj logo: overlapping coral, teal, orange and navy shapes" width={120} height={89} className="w-[120px]" />
        <figcaption className="ui max-w-[26rem] text-sm leading-5 text-ink-2">
          The Nahaj mark, from the App Store release. The four shapes at the top of this page borrow from it.
        </figcaption>
      </figure>

      <h3 className="mt-12 text-2xl leading-[1.875rem]">Case studies</h3>
      <p className="ui mt-1 text-sm leading-5 text-ink-2">{behance ? 'Three UI/UX case studies, published on Behance.' : 'Three UI/UX case studies.'}</p>
      <ul className="mt-4 border-y border-rule">
        {caseStudies.map((c) => (
          <li key={c.id} id={`case-${c.id}`} className={rowClass}>
            <h4 className="text-[1.0625rem] font-medium leading-6">{c.url ? <a href={c.url}>{c.name}</a> : c.name}</h4>
            <span className="ui col-span-2 text-sm leading-5 text-ink-2 md:col-span-1">{c.focus}</span>
            <span className="ui col-start-2 row-start-1 text-sm leading-5 text-ink-2 md:col-start-3">{c.kind}</span>
          </li>
        ))}
      </ul>
      {behance && (
        <p className="ui mt-6 text-[0.9375rem] font-medium">
          <a href={profile.links.behance.url}>Case studies on Behance</a>
        </p>
      )}
    </Section>
  )
}
