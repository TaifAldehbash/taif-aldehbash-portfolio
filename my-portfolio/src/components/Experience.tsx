import { Fragment } from 'react'
import { experience, type Experience as Role } from '../content/experience'
import { education, certifications } from '../content/education'
import { profile } from '../content/profile'
import { buildDate, formatMonthYear, indexToYearMonth, monthIndex, overlap, parseYearMonth, spanOf, toDatetime, EPOCH } from '../lib/dates'
import { MarkGlyph } from './PlatformMark'
import { Section } from './Section'

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

/**
 * The record drawn to scale: one lane per role, month by month from January
 * 2021 to the build month. Overlapping roles overlap on the page.
 */
function Timeline() {
  const now = buildDate()
  const total = monthIndex(now, 1) + 1
  const lanes = experience.map((role) => ({ role, span: spanOf(role.start, role.end, now) }))

  const brackets: { start: number; end: number; label: string }[] = []
  for (let i = 0; i < lanes.length; i++) {
    for (let j = i + 1; j < lanes.length; j++) {
      const o = overlap(lanes[i].span, lanes[j].span)
      if (o) {
        const a = indexToYearMonth(o.start)
        const b = indexToYearMonth(o.end)
        const label =
          a.year === b.year
            ? `Both roles, ${formatMonthYear(a, 'short').split(' ')[0]} to ${formatMonthYear(b, 'short')}`
            : `Both roles, ${formatMonthYear(a, 'short')} to ${formatMonthYear(b, 'short')}`
        brackets.push({ ...o, label })
      }
    }
  }

  const years: number[] = []
  for (let y = EPOCH.year; y <= now.year; y++) years.push(y)

  const laneGrid = 'md:grid md:grid-cols-[12.5rem_1fr] md:gap-6 lg:grid-cols-[13.5rem_1fr]'

  return (
    <figure className="timeline-chart m-0">
      <div aria-hidden="true">
        {brackets.length > 0 && (
          <div className={laneGrid}>
            <div className="hidden md:block" />
            <div className="relative h-7">
              {brackets.map((b) => {
                const left = b.start / total
                const width = (b.end - b.start + 1) / total
                const anchorRight = left + width / 2 > 0.5
                return (
                  <div
                    key={b.label}
                    className="absolute bottom-0 h-2 border-x border-t border-ink"
                    style={{ left: pct(b.start, total), width: pct(b.end - b.start + 1, total) }}
                  >
                    <span
                      className="ui absolute -top-5 whitespace-nowrap text-[0.8125rem] leading-4 font-medium text-ink"
                      style={anchorRight ? { right: 0 } : { left: 0 }}
                    >
                      {b.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="divide-y divide-rule border-y border-rule">
          {lanes.map(({ role, span }) => (
            <div key={role.id} className={`${laneGrid} py-3`}>
              <div className="ui text-sm leading-[1.125rem]">
                <p className="flex flex-wrap items-center gap-x-2 font-medium text-ink">
                  {role.company}
                  {role.platforms.length > 0 && (
                    <span className="flex items-center gap-1.5">
                      {role.platforms.map((p) => (
                        <MarkGlyph key={p} platform={p} size={10} />
                      ))}
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-[0.8125rem] leading-4 text-ink-2">
                  {role.role}, <Dates role={role} />
                  {span.yearOnly && <span>, dates recorded to the year</span>}
                </p>
              </div>
              <div className="relative mt-2 h-4 md:mt-0 md:h-full md:min-h-9">
                <div
                  className={`absolute top-1/2 h-3 -translate-y-1/2 ${span.yearOnly ? 'border-2 border-dashed border-rule' : 'bg-ink'}`}
                  style={{ left: pct(span.start, total), width: pct(span.end - span.start + 1, total) }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={laneGrid}>
          <div className="hidden md:block" />
          <div className="relative h-6">
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
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        <ol>
          {experience.map((role) => (
            <li key={role.id}>
              {role.role}, {role.company}, <Dates role={role} />
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  )
}

function RoleList() {
  return (
    <div className="mt-12 border-b border-rule">
      {experience.map((role) => {
        const meta = (
          <span className="ui tnum text-sm leading-5 text-ink-2">
            {role.role}, <Dates role={role} />
          </span>
        )
        if (role.bullets.length === 0) {
          return (
            <div key={role.id} id={role.id} className="role-row scroll-mt-20 border-t border-rule py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[1.375rem] leading-7">{role.company}</h3>
                {meta}
              </div>
              <p className="measure mt-2 text-[1.0625rem] leading-[1.6875rem]">{role.summary}</p>
            </div>
          )
        }
        return (
          <details key={role.id} id={role.id} open={role.id === 'ics-arabia'} className="role-row scroll-mt-20 border-t border-rule py-5">
            <summary className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[1.375rem] leading-7">{role.company}</h3>
              <span className="flex items-baseline gap-4">
                {meta}
                <span className="toggle-mark ui w-4 text-center text-base text-ink-2" />
              </span>
            </summary>
            <div className="mt-3">
              <p className="measure text-[1.0625rem] leading-[1.6875rem] lg:text-lg lg:leading-[1.8125rem]">{role.summary}</p>
              <ul className="measure mt-4 list-disc space-y-2 pl-5 text-[1.0625rem] leading-[1.6875rem] marker:text-ink-3">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="ui mt-4 text-sm leading-5 text-ink-2">
                <span className="font-bold">Stack:</span> {role.stack.join(', ')}
              </p>
            </div>
          </details>
        )
      })}
    </div>
  )
}

function EducationNote() {
  const degree = education[0]
  return (
    <div className="ui mt-12 grid gap-8 text-sm leading-5 text-ink-2 md:grid-cols-3 md:gap-6">
      <div>
        <p className="font-bold text-ink">Education</p>
        <p className="mt-2 font-serif text-base leading-6 text-ink">{degree.degree}</p>
        <p className="mt-1">
          {degree.institution}, {degree.location}, {degree.year}. {degree.note}.
        </p>
      </div>
      <div>
        <p className="font-bold text-ink">Certificates</p>
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
        <p className="font-bold text-ink">Languages</p>
        <p className="mt-2">{profile.languages.map((l) => `${l.name}, ${l.level}`).join('. ')}.</p>
      </div>
    </div>
  )
}
