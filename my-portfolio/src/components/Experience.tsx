import { Fragment, type ReactNode } from 'react'
import { experience, type Experience as Role } from '../content/experience'
import { education, certifications } from '../content/education'
import { profile } from '../content/profile'
import { buildDate, formatMonthYear, indexToYearMonth, monthIndex, overlap, parseYearMonth, spanOf, toDatetime, EPOCH } from '../lib/dates'
import { MarkGlyph } from './PlatformMark'
import { Section } from './Section'

/** The work entry that a job's product is described in, if any. */
const PROJECT_OF: Record<string, { href: string; label: string }> = {
  'ics-arabia': { href: '#finblade-ai', label: 'FinBlade AI' },
  'minute-taxi': { href: '#minute', label: 'Minute & MinuteDriver' },
}

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <Timeline />
      <RoleList />
      <EducationNote />
    </Section>
  )
}

function pct(n: number, total: number) {
  return `${(n / total) * 100}%`
}

/** A role's dates as text with <time> elements: "Apr 2024 to now". */
function Dates({ role }: { role: Role }) {
  const s = parseYearMonth(role.start)
  const e = parseYearMonth(role.end)
  if (s === 'present') return null
  const startText = formatMonthYear(s, 'short')
  if (e === 'present') {
    return (
      <>
        <time dateTime={toDatetime(s)}>{startText}</time> to now
      </>
    )
  }
  if (s.month === null && e.month === null && s.year === e.year) {
    return <time dateTime={toDatetime(s)}>{s.year}</time>
  }
  return (
    <>
      <time dateTime={toDatetime(s)}>{startText}</time> to <time dateTime={toDatetime(e)}>{formatMonthYear(e, 'short')}</time>
    </>
  )
}

/** A horizontal track with a 40px reserve on the right for the word "now". */
function Track({ children, className = '', end }: { children: ReactNode; className?: string; end?: ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 right-10">{children}</div>
      {end && <div className="absolute inset-y-0 right-0 flex w-10 items-center justify-end">{end}</div>}
    </div>
  )
}

/**
 * The record drawn to scale: one lane per role, month by month from January
 * 2021 to the build month. Overlapping roles overlap on the page.
 */
function Timeline() {
  const now = buildDate()
  const total = monthIndex(now, 1) + 1
  const lanes = experience.map((role) => ({ role, span: spanOf(role.start, role.end, now) }))

  const brackets: { start: number; end: number; label: string; sentence: string }[] = []
  for (let i = 0; i < lanes.length; i++) {
    for (let j = i + 1; j < lanes.length; j++) {
      const o = overlap(lanes[i].span, lanes[j].span)
      if (o) {
        const a = indexToYearMonth(o.start)
        const b = indexToYearMonth(o.end)
        const range =
          a.year === b.year
            ? `${formatMonthYear(a, 'short').split(' ')[0]} to ${formatMonthYear(b, 'short')}`
            : `${formatMonthYear(a, 'short')} to ${formatMonthYear(b, 'short')}`
        brackets.push({
          ...o,
          label: `Both roles, ${range}`,
          sentence: `${lanes[j].role.company} and ${lanes[i].role.company} overlapped from ${formatMonthYear(a)} to ${formatMonthYear(b)}.`,
        })
      }
    }
  }

  const years: number[] = []
  for (let y = EPOCH.year; y <= now.year; y++) years.push(y)

  const lane = 'lane md:grid md:grid-cols-[14rem_1fr] md:gap-6'

  return (
    <figure className="timeline-chart m-0">
      {brackets.length > 0 && (
        <div className={lane} aria-hidden="true">
          <div className="hidden md:block" />
          <Track className="h-7">
            {brackets.map((b) => {
              const left = b.start / total
              const width = (b.end - b.start + 1) / total
              const anchorRight = left + width / 2 > 0.55
              return (
                <div
                  key={b.label}
                  className="absolute bottom-0 h-2 border-x border-t border-ink"
                  style={{ left: pct(b.start, total), width: pct(b.end - b.start + 1, total) }}
                >
                  <span
                    className="ui absolute -top-5 whitespace-nowrap text-[0.8125rem] font-medium leading-4 text-ink"
                    style={anchorRight ? { right: 0 } : { left: 0 }}
                  >
                    {b.label}
                  </span>
                </div>
              )
            })}
          </Track>
        </div>
      )}

      <div className="divide-y divide-rule border-y border-rule">
        {lanes.map(({ role, span }) => (
          <div key={role.id} className={`${lane} py-3 md:min-h-[4.5rem] md:items-center md:py-0`}>
            <div className="ui text-sm leading-[1.125rem]">
              <p className="flex items-center gap-2 whitespace-nowrap font-medium text-ink">
                {role.company}
                {role.platforms.length > 0 && (
                  <span className="flex items-center gap-1.5" aria-hidden="true">
                    {role.platforms.map((p) => (
                      <MarkGlyph key={p} platform={p} size={11} />
                    ))}
                  </span>
                )}
              </p>
              <p className="mt-0.5 text-[0.8125rem] leading-4 text-ink-2">{role.role}</p>
              <p className="tnum whitespace-nowrap text-[0.8125rem] leading-4 text-ink-2">
                <Dates role={role} />
                {span.yearOnly && <span>, recorded to the year</span>}
              </p>
            </div>
            <Track
              className="lane-track mt-2 h-4 md:mt-0 md:h-full md:min-h-10"
              end={span.open ? <span className="ui text-[0.8125rem] leading-4 text-ink-2">now</span> : undefined}
            >
              <div aria-hidden="true" className="absolute inset-0">
                <div
                  className={`absolute top-1/2 h-3 -translate-y-1/2 ${span.yearOnly ? 'bar-hatched' : 'bar-solid bg-ink'}`}
                  style={{ left: pct(span.start, total), width: pct(span.end - span.start + 1, total) }}
                />
              </div>
            </Track>
          </div>
        ))}
      </div>

      <div className={lane} aria-hidden="true">
        <div className="hidden md:block" />
        <Track className="h-6">
          {years.map((y) => {
            const idx = (y - EPOCH.year) * 12
            return (
              <Fragment key={y}>
                <span className="absolute top-0 h-2 border-l border-rule" style={{ left: pct(idx, total) }} />
                <span className="ui tnum absolute top-2 text-xs leading-4 text-ink-3" style={{ left: pct(idx, total) }}>
                  {y}
                </span>
              </Fragment>
            )
          })}
        </Track>
      </div>

      <figcaption className="sr-only">
        Roles from {EPOCH.year} to {formatMonthYear(now)}, drawn to scale by month. {brackets.map((b) => b.sentence).join(' ')}
      </figcaption>
    </figure>
  )
}

function RoleList() {
  return (
    <div className="mt-12 border-b border-rule">
      {experience.map((role) => {
        const project = PROJECT_OF[role.id]
        return (
          <div key={role.id} id={role.id} className="role-row scroll-mt-4 border-t border-rule py-5 md:scroll-mt-20">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[1.375rem] leading-7">{role.company}</h3>
              <span className="ui tnum text-sm leading-5 text-ink-2">
                {role.role}, <Dates role={role} />
              </span>
            </div>
            <p className="measure mt-2 text-[1.0625rem] leading-[1.6875rem]">{role.summary}</p>
            <p className="ui mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm leading-5 text-ink-2">
              <span>
                <span className="font-bold">Stack:</span> {role.stack.join(', ')}
              </span>
              {project && (
                <a href={project.href} className="font-medium text-ink">
                  See {project.label}
                </a>
              )}
            </p>
          </div>
        )
      })}
    </div>
  )
}

function EducationNote() {
  const degree = education[0]
  const headingClass = 'ui text-sm font-bold leading-5 text-ink'
  return (
    <div className="ui mt-12 grid gap-8 text-sm leading-5 text-ink-2 md:grid-cols-3 md:gap-6">
      <div>
        <h3 className={headingClass}>Education</h3>
        <p className="mt-2 font-serif text-base leading-6 text-ink">{degree.degree}</p>
        <p className="mt-1">
          {degree.institution}, {degree.location}, {degree.year}. <span className="whitespace-nowrap">{degree.note}.</span>
        </p>
      </div>
      <div>
        <h3 className={headingClass}>Certificates</h3>
        <ul className="mt-2 space-y-1">
          {certifications.map((c) => (
            <li key={c.id}>
              {c.name}
              {c.issuer ? `, ${c.issuer}` : ''}, {c.year}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={headingClass}>Languages</h3>
        <p className="mt-2">{profile.languages.map((l) => `${l.name}, ${l.level}`).join('. ')}.</p>
      </div>
    </div>
  )
}
