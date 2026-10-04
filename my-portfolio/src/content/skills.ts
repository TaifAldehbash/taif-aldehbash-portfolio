export interface SkillGroup {
  id: string
  label: string
  /** Primary items shown prominently. */
  items: string[]
  /** Secondary items shown smaller or on demand. */
  also?: string[]
}

export const skills: SkillGroup[] = [
  {
    id: 'ios',
    label: 'iOS',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'async/await', 'Core Data'],
    also: ['MapKit', 'Google Maps SDK', 'Core Location', 'APNs', 'In-app payments', 'WidgetKit', 'Swift Package Manager', 'TestFlight', 'App Store Connect', 'XcodeGen'],
  },
  {
    id: 'web',
    label: 'Web',
    items: ['TypeScript', 'Vue.js', 'Nuxt', 'React', 'Next.js', 'Tailwind CSS'],
    also: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Zustand', 'Zod', 'Vite', 'Responsive design', 'Accessibility'],
  },
  {
    id: 'cross-platform',
    label: 'Cross-platform',
    items: ['Flutter', 'Dart'],
    also: ['Unity', 'C#', 'Vuforia AR'],
  },
  {
    id: 'backend',
    label: 'Backend & data',
    items: ['Firebase', 'REST APIs', 'SQL'],
    also: ['Realtime Database', 'Cloud Firestore', 'Cloud Storage', 'Google Sheets API', 'OAuth'],
  },
  {
    id: 'design',
    label: 'Design',
    items: ['UI/UX design', 'Figma', 'Design systems'],
    also: ['Case studies', 'Prototyping', 'RTL layout', 'Arabic typography'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'Xcode', 'Jira', 'Docker'],
    also: ['GitHub', 'Trello', 'Linux', 'Java', 'Python'],
  },
]
