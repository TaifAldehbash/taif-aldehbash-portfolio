import type { Platform, Project } from '../content/projects'

/** The four hues of the mark. Hue means platform and nothing else. */
export type PlatformKey = 'ios' | 'flutter' | 'web' | 'design'

export const PLATFORM_LABEL: Record<PlatformKey, string> = {
  ios: 'iOS',
  flutter: 'Flutter',
  web: 'Web',
  design: 'Design',
}

export const PLATFORM_ORDER: PlatformKey[] = ['ios', 'flutter', 'web', 'design']

export function keyOfPlatform(p: Platform): PlatformKey | null {
  switch (p) {
    case 'iOS':
    case 'iPadOS':
      return 'ios'
    case 'Flutter':
      return 'flutter'
    case 'Web':
      return 'web'
    default:
      return null
  }
}

/** Which shapes of the mark are lit for a project. */
export function litFor(project: Pick<Project, 'platforms' | 'design'>): Set<PlatformKey> {
  const lit = new Set<PlatformKey>()
  for (const p of project.platforms) {
    const k = keyOfPlatform(p)
    if (k) lit.add(k)
  }
  if (project.design) lit.add('design')
  return lit
}

export const ALL_PLATFORMS: Set<PlatformKey> = new Set(PLATFORM_ORDER)
