import type { PlatformKey } from '../lib/platforms'

export interface SkillGroup {
  id: string
  label: string
  /** Hue of the group header glyph; only the four platforms carry one. */
  platform?: PlatformKey
  /** Primary items, each shown with the projects and jobs that prove it. */
  items: string[]
  /** Secondary items shown as one line. */
  also?: string[]
}

export const skills: SkillGroup[] = [
  {
    id: 'ios',
    label: 'iOS',
    platform: 'ios',
    items: ['Swift', 'SwiftUI', 'UIKit'],
    also: ['Combine', 'async/await', 'Core Data', 'MapKit', 'Google Maps SDK', 'Core Location', 'APNs', 'In-app payments', 'TestFlight', 'App Store Connect'],
  },
  {
    id: 'cross-platform',
    label: 'Cross-platform',
    platform: 'flutter',
    items: ['Flutter', 'Dart'],
    also: ['Unity', 'C#', 'Vuforia AR'],
  },
  {
    id: 'web',
    label: 'Web',
    platform: 'web',
    items: ['TypeScript', 'Vue.js', 'Nuxt', 'React', 'Tailwind CSS'],
    also: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Responsive design', 'Accessibility'],
  },
  {
    id: 'design',
    label: 'Design',
    platform: 'design',
    items: ['UI/UX design', 'Figma', 'RTL layout'],
    also: ['Case studies', 'Prototyping'],
  },
  {
    id: 'backend',
    label: 'Backend & data',
    items: ['Firebase', 'REST APIs'],
    also: ['SQL', 'Realtime Database', 'Cloud Firestore', 'Cloud Storage', 'Cloud Messaging'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'Xcode', 'Jira'],
    also: ['Docker', 'GitHub', 'Trello', 'Linux', 'Java', 'Python'],
  },
]
