import { useState, type CSSProperties, type PointerEvent } from 'react'
import { profile, projects, tracks, type Project, type TrackId } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import { ArrowUpRight, GitHub } from './Icons'
import { SectionHeading } from './SectionHeading'
import { trackMeta } from './trackMeta'
import s from './Work.module.css'

type Filter = 'all' | TrackId

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  ...tracks.map((track) => ({ id: track.id, label: track.label })),
]

const trackLabel = Object.fromEntries(tracks.map((t) => [t.id, t.label])) as Record<TrackId, string>

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
  const visible = filter === 'all' ? projects : projects.filter((p) => p.tracks.includes(filter))
  const activeLabel = filters.find((f) => f.id === filter)?.label

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Work"
          count={projects.length}
          intro={profile.workIntro}
        />

        <div className={s.filters} role="group" aria-label="Filter projects by track">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={s.filter}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.id !== 'all' && <span className="dot" style={{ color: trackMeta[f.id].color }} />}
              {f.label}
            </button>
          ))}
        </div>

        <p className="visually-hidden" aria-live="polite" aria-atomic="true">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          {filter !== 'all' && ` tagged ${activeLabel}`}.
        </p>

        <ul className={s.grid}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <li className={s.next}>
            <p className={s.nextTitle}>
              {visible.length === 0 ? `Nothing public on ${activeLabel} yet` : 'More on the way'}
            </p>
            <p className={s.nextText}>
              {visible.length === 0
                ? 'The first one in this track is coming.'
                : 'Personal projects in native iOS, React and backend are next.'}{' '}
              Follow along on GitHub.
            </p>
            <a href={profile.socials.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
              <GitHub />
              Follow on GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLLIElement>()
  const { accent, monogram, icons } = project.cover

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
          {project.status}
        </span>
      </div>

      <div className={s.body}>
        <p className={s.meta}>
          <span>{project.context}</span>
          {project.year && (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </>
          )}
          <span className="visually-hidden">
            · Status: {project.status} · Tracks: {project.tracks.map((id) => trackLabel[id]).join(', ')}
          </span>
        </p>
        <h3 className={s.title}>{project.title}</h3>
        <p className={s.summary}>{project.summary}</p>

        <ul className={s.tech} aria-label="Built with">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <div className={s.links}>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} className={s.link} target="_blank" rel="noreferrer">
                {link.label}
                <span className="visually-hidden"> for {project.title} (opens in a new tab)</span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
