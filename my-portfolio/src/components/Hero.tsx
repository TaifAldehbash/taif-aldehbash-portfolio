import { profile, hasBehance } from '../content/profile'
import { featuredProjects } from '../content/projects'
import { ALL_PLATFORMS } from '../lib/platforms'
import { MarkKey, PlatformMark } from './PlatformMark'

const MARK_LABEL = "Taif's mark: iOS, Flutter, Web and Design"

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="wrap pt-6 pb-14 md:pt-12 lg:pt-16 lg:pb-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <h1 className="text-[2.75rem] leading-[3rem] md:text-[3.5rem] md:leading-[3.75rem] xl:text-[4rem] xl:leading-[4.25rem] xl:tracking-[-0.01em]">
            {profile.name}
          </h1>
          {profile.arabicName && (
            <p lang="ar" dir="rtl" className="mt-2 text-right text-[1.375rem] leading-7 text-ink-2 md:text-[1.625rem] md:leading-8 lg:text-left">
              {profile.arabicName}
            </p>
          )}

          <p className="ui mt-4 flex flex-wrap gap-x-6 gap-y-1 text-base leading-6">
            <a href={`mailto:${profile.email}`} className="is-url">
              {profile.email}
            </a>
            <span className="text-ink-2">{profile.location}</span>
          </p>

          {/* Phone and tablet: the mark and its key sit between the contact line and the paragraph. */}
          <div className="hero-mark mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 lg:hidden">
            <PlatformMark lit={ALL_PLATFORMS} size={64} label={MARK_LABEL} />
            <MarkKey />
          </div>

          <p className="mt-6 max-w-[40rem] text-[1.1875rem] leading-[1.6875rem] md:mt-8 md:text-[1.375rem] md:leading-8 lg:text-2xl lg:leading-[2.125rem] xl:text-[1.625rem] xl:leading-9">
            {profile.intro}
          </p>
        </div>

        <div className="hero-mark hidden lg:col-span-4 lg:col-start-9 lg:block">
          <PlatformMark lit={ALL_PLATFORMS} size={200} label={MARK_LABEL} className="xl:hidden" />
          <PlatformMark lit={ALL_PLATFORMS} size={232} label={MARK_LABEL} className="hidden xl:block" />
          <MarkKey className="mt-5" />
        </div>
      </div>

      <Contents />
    </section>
  )
}

/** The facts, as a list whose labels are the navigation and whose values are the answers. */
function Contents() {
  const rows = [
    {
      id: 'work',
      label: 'Work',
      value: (
        <>
          {featuredProjects.map((p, i) => (
            <span key={p.slug}>
              <a href={`#${p.slug}`}>{p.name}</a>
              {i < featuredProjects.length - 1 ? ', ' : ''}
            </span>
          ))}
        </>
      ),
    },
    {
      id: 'experience',
      label: 'Experience',
      value: (
        <>
          Software Engineer at <a href="#ics-arabia">ICS Arabia</a> since April 2024, and until September 2024 the sole iOS developer at{' '}
          <a href="#minute-taxi">Minute Taxi Routing Company</a>.
        </>
      ),
    },
    {
      id: 'skills',
      label: 'Skills',
      value: <>Swift, SwiftUI, UIKit, Flutter, Vue.js, Nuxt, TypeScript, Figma</>,
    },
    {
      id: 'design',
      label: 'Design',
      value: (
        <>
          Vox Cinema, Rakaz AI and Najid, three UI/UX case studies
          {hasBehance() && (
            <>
              {' '}
              on <a href={profile.links.behance.url}>Behance</a>
            </>
          )}
        </>
      ),
    },
    {
      id: 'contact',
      label: 'Contact',
      value: (
        <>
          <a href={`mailto:${profile.email}`} className="is-url">
            {profile.email}
          </a>
          , <a href={profile.links.linkedin.url}>LinkedIn</a>, <a href={profile.links.github.url}>GitHub</a>
          {hasBehance() && (
            <>
              , <a href={profile.links.behance.url}>Behance</a>
            </>
          )}
        </>
      ),
    },
  ]
  return (
    <dl className="hero-contents rule-2 mt-8 lg:mt-10">
      {rows.map((r, i) => (
        <div
          key={r.id}
          className={`grid gap-1 py-3 md:grid-cols-[8rem_1fr] md:gap-6 md:py-3.5 ${i > 0 ? 'rule-1' : ''} ${i === rows.length - 1 ? 'border-b border-rule' : ''}`}
        >
          <dt className="ui text-[0.8125rem] font-bold leading-4 text-ink-2 md:pt-1 md:text-sm">
            <a href={`#${r.id}`} className="-my-1.5 inline-block py-1.5 no-underline hover:underline">
              {r.label}
            </a>
          </dt>
          <dd className="text-[1.0625rem] leading-6 [text-wrap:pretty]">{r.value}</dd>
        </div>
      ))}
    </dl>
  )
}
