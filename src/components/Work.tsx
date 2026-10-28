import { useState, type CSSProperties, type PointerEvent } from 'react'
import { profile, projects, tracks, type Project, type TrackId } from '../data/profile'
import { linkContext, nothingYet, showingProjects, ui } from '../data/ui'
import { useReveal } from '../hooks/useReveal'
import { useLocale, useText, type Text } from '../i18n'
import { ArrowUpRight, GitHub } from './Icons'
import { SectionHeading } from './SectionHeading'
import { trackMeta } from './trackMeta'
import s from './Work.module.css'

type Filter = 'all' | TrackId

const filters: { id: Filter; label: Text }[] = [
  { id: 'all', label: ui.work.all },
  ...tracks.map((track) => ({ id: track.id, label: track.label })),
]

const trackLabel = Object.fromEntries(tracks.map((t) => [t.id, t.label])) as Record<TrackId, Text>

const statusColor: Record<Project['status'], string> = {
  Shipped: 'var(--mint)',
  Built: 'var(--sky)',
  Building: 'var(--sun)',
  Planned: 'var(--violet-soft)',
}

// Moves the soft highlight under the pointer.
function trackPointer(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function Work() {
  const [filter, setFilter] = useState<Filter>('all')
  const locale = useLocale()
  const t = useText()
  const visible = filter === 'all' ? projects : projects.filter((p) => p.tracks.includes(filter))
  const activeLabel = t(filters.find((f) => f.id === filter)?.label ?? '')

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow={t(ui.work.eyebrow)}
          title={t(ui.work.title)}
          count={projects.length}
          intro={t(profile.workIntro)}
        />

        <div className={s.filters} role="group" aria-label={t(ui.work.filterLabel)}>
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={s.filter}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.id !== 'all' && <span className="dot" style={{ color: trackMeta[f.id].color }} />}
              {t(f.label)}
            </button>
          ))}
        </div>

        <p className="visually-hidden" aria-live="polite" aria-atomic="true">
          {showingProjects(locale, visible.length, filter === 'all' ? undefined : activeLabel)}
        </p>

        <ul className={s.grid}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <li className={s.next}>
            <p className={s.nextTitle}>
              {visible.length === 0 ? nothingYet(locale, activeLabel) : t(ui.work.moreOnTheWay)}
            </p>
            <p className={s.nextText}>
              {visible.length === 0 ? t(ui.work.firstComing) : t(ui.work.nextUp)} {t(ui.work.followAlong)}
            </p>
            <a href={profile.socials.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
              <GitHub />
              {t(ui.work.followOnGitHub)}
              <span className="visually-hidden"> {t(ui.opensNewTab)}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLLIElement>()
  const locale = useLocale()
  const t = useText()
  const { accent, monogram, icons } = project.cover
  const status = t(ui.projectStatus[project.status])
  const title = t(project.title)

  return (
    <li
      ref={ref}
      className={`reveal ${s.card}`}
      style={{ '--accent': accent, '--reveal-delay': `${(index % 2) * 90}ms` } as CSSProperties}
      onPointerMove={trackPointer}
    >
      <div className={s.cover} aria-hidden="true">
        <div className={s.appIcons}>
          {icons ? (
            icons.map((src) => (
              <img key={src} className={s.appIcon} src={src} alt="" width={96} height={96} loading="lazy" decoding="async" />
            ))
          ) : (
            <span className={s.appIcon}>{monogram}</span>
          )}
        </div>
        <div className={s.badges}>
          {project.tracks.map((id) => {
            const { Icon, color } = trackMeta[id]
            return (
              <span key={id} className={s.badge} style={{ color }}>
                <Icon />
              </span>
            )
          })}
        </div>
        <span className={s.status}>
          <span className="dot" style={{ color: statusColor[project.status] }} />
          {status}
        </span>
      </div>

      <div className={s.body}>
        <p className={s.meta}>
          <span>{t(project.context)}</span>
          {project.year && (
            <>
              <span aria-hidden="true">·</span>
              <span>{t(project.year)}</span>
            </>
          )}
          <span className="visually-hidden">
            {' · '}
            {t(ui.work.status)}: {status} · {t(ui.work.tracks)}:{' '}
            {project.tracks.map((id) => t(trackLabel[id])).join(locale === 'ar' ? '، ' : ', ')}
          </span>
        </p>
        <h3 className={s.title}>{title}</h3>
        <p className={s.summary}>{t(project.summary)}</p>

        <ul className={s.tech} aria-label={t(ui.work.builtWith)}>
          {project.tech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <div className={s.links}>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} className={s.link} target="_blank" rel="noreferrer">
                {t(link.label)}
                <span className="visually-hidden">{linkContext(locale, title)}</span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
