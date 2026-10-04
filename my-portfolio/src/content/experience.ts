import type { PlatformKey } from '../lib/platforms'

export interface Experience {
  id: string
  company: string
  role: string
  location: string
  /** "Apr 2024", "2021". Month and year, or year only when that is all that is recorded. */
  start: string
  /** "Sept 2024", "2021" or "Present". */
  end: string
  /** Short label for compact lines, e.g. "2024 – now" */
  period: string
  summary: string
  bullets: string[]
  stack: string[]
  /** Platforms shipped in this role; drawn as glyphs in the timeline. */
  platforms: PlatformKey[]
}

export const experience: Experience[] = [
  {
    id: 'ics-arabia',
    company: 'ICS Arabia',
    role: 'Software Engineer',
    location: 'Riyadh',
    start: 'Apr 2024',
    end: 'Present',
    period: '2024 – now',
    summary:
      'Lead mobile developer on FinBlade AI, a generative-AI productivity platform used by several government clients and organisations, and a front-end contributor on its web application.',
    bullets: [
      'Developed and shipped every feature of the FinBlade AI mobile app in Flutter, including the Workflow AI, Apps and Data Management modules.',
      'Built major parts of the web front-end in Vue.js and Nuxt with TypeScript, HTML and CSS.',
      'Wrote native iOS features and platform integrations in Swift to extend what the Flutter app could do.',
      'Led a full refactor and UI/UX redesign of the mobile app, making it responsive and accessible across device sizes.',
      'Worked with cross-functional teams to bring generative-AI features to both web and mobile.',
    ],
    stack: ['Flutter', 'Dart', 'Swift', 'Vue.js', 'Nuxt', 'TypeScript', 'HTML', 'CSS'],
    platforms: ['ios', 'flutter', 'web'],
  },
  {
    id: 'minute-taxi',
    company: 'Minute Taxi Routing Company',
    role: 'iOS Developer',
    location: 'Riyadh',
    start: 'Aug 2023',
    end: 'Sept 2024',
    period: '2023 – 2024',
    summary:
      'Sole iOS developer for Minute and MinuteDriver, two production ride-hailing apps. Owned design, development, testing and release for over a year.',
    bullets: [
      'Built the core ride-hailing flows in Swift and UIKit with the Google Maps SDK, Core Location, push notifications and in-app payments.',
      'Architected the data layer on Firebase Realtime Database and REST APIs for live ride tracking.',
      'Published releases to the App Store and ran internal testing cycles through TestFlight.',
      'Found and fixed performance bottlenecks to keep both apps fast and reliable.',
    ],
    stack: ['Swift', 'UIKit', 'Google Maps SDK', 'Core Location', 'APNs', 'In-app payments', 'Firebase', 'REST APIs', 'TestFlight', 'App Store Connect'],
    platforms: ['ios'],
  },
  {
    id: 'amlak',
    company: 'Amlak International',
    role: 'Trainee, Business Analysis',
    location: 'Riyadh',
    start: 'Dec 2022',
    end: 'May 2023',
    period: '2022 – 2023',
    summary:
      'Documented business processes, wrote user stories and requirements, and verified compliance with SAMA regulations.',
    bullets: [],
    stack: ['Requirements', 'User stories'],
    platforms: [],
  },
  {
    id: 'communication-experts',
    company: 'Communication Experts LTD',
    role: 'Software Engineering Intern',
    location: 'Riyadh',
    start: '2021',
    end: '2021',
    period: '2021',
    summary:
      'Developed Plantify, an Android plant-retail application, and contributed to web and desktop development for the AnimeKey streaming service.',
    bullets: [],
    stack: ['Android', 'Java', 'HTML', 'CSS', 'JavaScript'],
    platforms: [],
  },
]
