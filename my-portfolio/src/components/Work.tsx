import type { Project } from '../content/projects'
import { featuredProjects, otherProjects } from '../content/projects'
import { plates, type PlateRow } from '../content/plates'
import { litFor } from '../lib/platforms'
import { PlatformMark } from './PlatformMark'
import { Section } from './Section'
import nahajLogo from '../assets/projects/nahaj-logo.png'

export function WorkSection() {
  return (
    <Section id="work" title="Work">
      <div className="space-y-12 lg:space-y-16">
        {featuredProjects.map((p, i) => (
          <ProjectEntry key={p.slug} project={p} first={i === 0} />
        ))}
      </div>
      <div className="mt-16 lg:mt-24">
        <h3 className="text-2xl leading-8">Smaller projects</h3>
        <ul className="mt-5 border-y border-rule">
          {otherProjects.map((p) => (
            <li key={p.slug} id={p.slug} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-rule py-4 first:border-t-0">
              <PlatformMark lit={litFor(p)} size={20} className="self-center" />
              <span className="text-xl leading-7">
                {p.links[0] ? <a href={p.links[0].url}>{p.name}</a> : p.name}
              </span>
              <span className="ui text-sm leading-5 text-ink-2">{p.kicker}</span>
              <span className="ui ml-auto text-sm leading-5 text-ink-2 tnum">{p.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function contextLine(p: Project): string {
  const period = p.period.replace(/\s[–-]\s/, ' to ')
  switch (p.context) {
    case 'Work':
      return `Work at ${p.org}, ${period}`
    case 'University':
      return `${p.org}, ${period}`
    case 'Assignment':
      return `Assignment, ${period}`
    default:
      return `Personal project, ${period}`
  }
}

function ProjectEntry({ project: p, first }: { project: Project; first: boolean }) {
  const lit = litFor(p)
  return (
    <article id={p.slug} className={`scroll-mt-20 lg:grid lg:grid-cols-12 lg:gap-6 ${first ? '' : 'border-t border-rule pt-12 lg:pt-16'}`}>
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3">
          <PlatformMark lit={lit} size={28} />
          <h3 className="text-[1.625rem] leading-8 lg:text-[2rem] lg:leading-[2.375rem]">
            {p.name}
            {p.arabicName && (
              <>
                {' '}
                <span lang="ar" dir="rtl" className="text-[1.1em] font-medium">
                  {p.arabicName}
                </span>
              </>
            )}
          </h3>
        </div>
        <p className="mt-2 text-[1.125rem] leading-[1.625rem] text-ink-2 lg:text-xl lg:leading-7">{p.kicker}</p>

        <ul className="ui mt-4 space-y-1 text-sm leading-5 text-ink-2">
          <li>{contextLine(p)}</li>
          <li>
            <span className="font-bold">{p.roleLabel ?? 'Role'}:</span> {p.role}
          </li>
          <li>
            <span className="font-bold">Platforms:</span> {p.platforms.join(', ')}
          </li>
          <li>
            <span className="font-bold">Stack:</span> {p.stack.join(', ')}
          </li>
        </ul>

        <p className="measure mt-5 text-[1.0625rem] leading-[1.6875rem] lg:text-lg lg:leading-[1.8125rem]">{p.summary}</p>

        <div className="mt-6 lg:hidden">
          <ProjectFigure project={p} />
        </div>

        <ul className="highlights measure mt-5 list-disc space-y-2 pl-5 text-[1.0625rem] leading-[1.6875rem] marker:text-ink-3">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        {p.links.length > 0 && (
          <p className="ui mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] font-medium">
            {p.links.map((l) => (
              <a key={l.url} href={l.url}>
                {l.label}
              </a>
            ))}
          </p>
        )}
      </div>

      <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
        <div className="sticky top-20">
          <ProjectFigure project={p} />
        </div>
      </div>
    </article>
  )
}

/** The figure beside a project: screens when they exist, and a plate of plain facts. */
function ProjectFigure({ project: p }: { project: Project }) {
  const rows = plates[p.slug]
  return (
    <div className="space-y-4">
      {p.screens && p.screens.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2">
          {p.screens.map((s) => (
            <figure key={s.src} className="m-0">
              <div className={`border border-rule bg-field ${s.device === 'tablet' ? 'aspect-[4/3]' : 'aspect-[9/19.5]'}`}>
                <img src={s.src} alt={s.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="ui mt-1.5 text-[0.8125rem] leading-[1.125rem] text-ink-3">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
      {rows && <FactPlate project={p} rows={rows} />}
    </div>
  )
}

function FactPlate({ project: p, rows }: { project: Project; rows: PlateRow[] }) {
  const isNahaj = p.slug === 'nahaj'
  return (
    <div className="bg-field p-5">
      {p.icon && (
        <div className="mb-4 flex items-center gap-4">
          {isNahaj ? (
            <>
              <img src={p.icon} alt={`${p.name} app icon`} width={64} height={64} className="light-only border border-rule" />
              <img src={nahajLogo} alt={`${p.name} app icon`} width={86} height={64} className="dark-only h-16 w-auto" />
            </>
          ) : (
            <img src={p.icon} alt={`${p.name} app icon`} width={64} height={64} className="border border-rule" />
          )}
          <span className="ui text-sm leading-5 text-ink-2">App icon</span>
        </div>
      )}
      <dl className="divide-y divide-rule border-t border-rule">
        {rows.map((r) => (
          <div key={r.term} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
            <dt className="ui pt-0.5 text-[0.8125rem] font-bold leading-[1.125rem] text-ink-2">{r.term}</dt>
            <dd className="text-[1.0625rem] leading-6">
              {typeof r.detail === 'string' ? (
                r.detail
              ) : (
                <ul className="space-y-0.5">
                  {r.detail.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className={l.text.includes('.') && !l.text.includes(' ') ? 'is-url' : undefined}>
                        {l.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {r.note && <span className="ui mt-1 block text-[0.8125rem] leading-[1.125rem] text-ink-2">{r.note}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
