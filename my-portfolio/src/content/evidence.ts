import { experience } from './experience'
import { projects } from './projects'
import { caseStudies } from './caseStudies'
import { lastYearOf } from '../lib/dates'

/**
 * Evidence for a skill: a project, job or page section where it was used.
 * Derived from the dated content so the skills section cannot disagree with
 * the work and experience sections.
 */
export interface Evidence {
  label: string
  href: string
  kind: 'project' | 'experience' | 'case-study' | 'site'
  /** Last year of use, or 'now'. */
  lastUsed: number | 'now'
}

/** Names that count as the same skill when they appear in a stack list. */
const ALIASES: Record<string, string[]> = {
  Firebase: ['Firebase', 'Firebase Realtime Database', 'Cloud Firestore', 'Firebase Cloud Messaging', 'Cloud Storage'],
  'REST APIs': ['REST APIs', 'RESTful APIs'],
}

const projectsWithSource = projects.filter((p) => p.links.some((l) => l.kind === 'github'))

/** Skills whose evidence is not a stack entry. */
const SPECIAL: Record<string, Evidence[]> = {
  Accessibility: [
    { label: 'FinBlade AI', href: '#finblade-ai', kind: 'project', lastUsed: 'now' },
    { label: 'the Vox Cinema case study', href: '#design', kind: 'case-study', lastUsed: 2025 },
  ],
  'UI/UX design': [
    { label: 'FinBlade AI', href: '#finblade-ai', kind: 'project', lastUsed: 'now' },
    { label: 'Minute & MinuteDriver', href: '#minute', kind: 'project', lastUsed: 2024 },
    { label: 'three case studies', href: '#design', kind: 'case-study', lastUsed: 2025 },
  ],
  Figma: [{ label: 'three case studies', href: '#design', kind: 'case-study', lastUsed: 2025 }],
  'RTL layout': [{ label: 'Nahaj', href: '#nahaj', kind: 'project', lastUsed: 2022 }],
  'Responsive design': [{ label: 'FinBlade AI', href: '#finblade-ai', kind: 'project', lastUsed: 'now' }],
  React: [{ label: 'this site', href: '#top', kind: 'site', lastUsed: 'now' }],
  'Tailwind CSS': [{ label: 'this site', href: '#top', kind: 'site', lastUsed: 'now' }],
  Xcode: [
    { label: 'Minute & MinuteDriver', href: '#minute', kind: 'project', lastUsed: 2024 },
    { label: 'FastWay', href: '#fastway', kind: 'project', lastUsed: 2021 },
  ],
  Git: projectsWithSource.map((p) => ({ label: p.name, href: `#${p.slug}`, kind: 'project' as const, lastUsed: lastYearOf(p.period) })),
}

function norm(s: string) {
  return s.trim().toLowerCase()
}

function namesFor(skill: string): Set<string> {
  const set = new Set<string>([norm(skill)])
  for (const alias of ALIASES[skill] ?? []) set.add(norm(alias))
  return set
}

function later(a: number | 'now', b: number | 'now'): number | 'now' {
  if (a === 'now' || b === 'now') return 'now'
  return Math.max(a, b)
}

/** Which job a featured work project belongs to, so a skill is not cited twice for the same thing. */
function jobOfProject(href: string): string | null {
  if (href === '#finblade-ai') return 'ics-arabia'
  if (href === '#minute') return 'minute-taxi'
  return null
}

/** Builds the evidence map once at module load. */
function build(): Map<string, Evidence[]> {
  const map = new Map<string, Evidence[]>()
  const allSkills = new Set<string>()
  for (const p of projects) p.stack.forEach((s) => allSkills.add(s))
  for (const e of experience) e.stack.forEach((s) => allSkills.add(s))
  Object.keys(SPECIAL).forEach((s) => allSkills.add(s))
  Object.keys(ALIASES).forEach((s) => allSkills.add(s))

  for (const skill of allSkills) {
    const names = namesFor(skill)
    const found: Evidence[] = []
    for (const p of projects) {
      if (p.stack.some((s) => names.has(norm(s)))) {
        found.push({ label: p.name, href: `#${p.slug}`, kind: 'project', lastUsed: lastYearOf(p.period) })
      }
    }
    for (const e of experience) {
      if (e.stack.some((s) => names.has(norm(s)))) {
        const covered = found.some((f) => f.kind === 'project' && jobOfProject(f.href) === e.id)
        if (!covered) found.push({ label: e.company, href: `#${e.id}`, kind: 'experience', lastUsed: lastYearOf(e.period) })
      }
    }
    for (const s of SPECIAL[skill] ?? []) {
      if (!found.some((f) => f.href === s.href)) found.push(s)
    }
    if (found.length) map.set(norm(skill), found)
  }
  return map
}

const EVIDENCE = build()

export function evidenceFor(skill: string): Evidence[] {
  return EVIDENCE.get(norm(skill)) ?? []
}

export function lastUsedOf(skill: string): number | 'now' | null {
  const ev = evidenceFor(skill)
  if (!ev.length) return null
  return ev.map((e) => e.lastUsed).reduce(later)
}

/**
 * Development-time guard: every evidence link must point at an element the
 * page renders (a project slug, a job id, or a section).
 */
if (import.meta.env.DEV) {
  const ids = new Set<string>(['#top', '#work', '#experience', '#skills', '#design', '#contact'])
  projects.forEach((p) => ids.add(`#${p.slug}`))
  experience.forEach((e) => ids.add(`#${e.id}`))
  caseStudies.forEach((c) => ids.add(`#case-${c.id}`))
  for (const [skill, list] of EVIDENCE) {
    for (const e of list) {
      if (!ids.has(e.href)) throw new Error(`Evidence for "${skill}" points at ${e.href}, which does not exist on the page`)
    }
  }
}
