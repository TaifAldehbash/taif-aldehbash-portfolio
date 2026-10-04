import { caseStudies } from '../content/caseStudies'
import { profile, hasBehance } from '../content/profile'
import nahajLogo from '../assets/projects/nahaj-logo.png'
import { MarkGlyph } from './PlatformMark'
import { Section } from './Section'

const SHIPPED = [
  { href: '#finblade-ai', product: 'FinBlade AI', what: 'UI/UX redesign of the mobile app', years: '2024 to now' },
  { href: '#minute', product: 'Minute & MinuteDriver', what: 'Screens for the rider and driver apps', years: '2023 to 2024' },
  { href: '#nahaj', product: 'Nahaj', what: 'Brand, mascot and interface', years: '2021 to 2022', logo: true },
]

export function DesignSection() {
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
        I trained in UI/UX design at Tuwaiq Academy in 2025, after the software engineering degree. At Minute I designed the
        screens I then built in Swift, and at ICS Arabia I led the UI/UX redesign of the FinBlade AI app.
      </p>

      <h3 className="mt-10 text-[1.375rem] leading-7">Design inside the shipped work</h3>
      <ul className="mt-4 border-y border-rule">
        {SHIPPED.map((s) => (
          <li key={s.href} className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-t border-rule py-3 first:border-t-0 md:grid-cols-[14rem_1fr_auto]">
            <a href={s.href} className="text-[1.0625rem] leading-6">
              {s.product}
            </a>
            <span className="ui col-span-2 text-sm leading-5 text-ink-2 md:col-span-1">{s.what}</span>
            <span className="ui tnum row-start-1 col-start-2 text-sm leading-5 text-ink-2 md:col-start-3">{s.years}</span>
          </li>
        ))}
      </ul>
      <figure className="mt-6 flex items-center gap-4">
        <img src={nahajLogo} alt="The Nahaj logo: overlapping coral, teal, orange and navy shapes" width={120} height={89} className="w-[120px]" />
        <figcaption className="ui text-sm leading-5 text-ink-2">The Nahaj mark, drawn for the App Store release.</figcaption>
      </figure>

      <h3 className="mt-12 text-[1.375rem] leading-7">Case studies</h3>
      <p className="ui mt-1 text-sm leading-5 text-ink-2">Three UI/UX case studies, published on Behance.</p>
      <ul className="mt-5 grid gap-6 border-t border-rule pt-6 md:grid-cols-3 md:gap-8">
        {caseStudies.map((c) => (
          <li key={c.id} id={`case-${c.id}`}>
            <h4 className="text-[1.375rem] leading-7">{c.url ? <a href={c.url}>{c.name}</a> : c.name}</h4>
            <p className="ui mt-1 text-sm leading-5 text-ink-2">
              {c.kind}. {c.focus}.
            </p>
          </li>
        ))}
      </ul>
      {hasBehance() && (
        <p className="ui mt-8 text-[0.9375rem] font-medium">
          <a href={profile.links.behance.url}>Case studies on Behance</a>
        </p>
      )}
    </Section>
  )
}
