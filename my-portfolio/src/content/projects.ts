import nahajIcon from '../assets/projects/nahaj-icon-128.png'
import nahajIcon2x from '../assets/projects/nahaj-icon-256.png'
import fastwayIcon from '../assets/projects/fastway-icon-128.png'
import fastwayIcon2x from '../assets/projects/fastway-icon-256.png'

export type Platform = 'iOS' | 'iPadOS' | 'Flutter' | 'Web' | 'Swift Package'
export type Context = 'Work' | 'Personal' | 'Assignment' | 'University'

export interface ProjectLink {
  label: string
  url: string
  kind: 'github' | 'live' | 'video' | 'figma' | 'appstore' | 'other'
}

export interface Screen {
  src: string
  alt: string
  caption: string
  device: 'phone' | 'tablet'
}

export interface Project {
  slug: string
  name: string
  arabicName?: string
  /** One line, under 12 words, says what it is. */
  kicker: string
  /** Where it sits: a job, a personal build, a hiring assignment, a degree project. */
  context: Context
  /** Short phrase shown instead of the bare context word in compact lists. */
  contextNote?: string
  org?: string
  period: string
  year: number
  role: string
  /** How the role line is labelled: "Role" by default, "My part" or "Team" for team projects. */
  roleLabel?: 'Role' | 'My part' | 'Team'
  platforms: Platform[]
  stack: string[]
  /** Two or three sentences a hiring manager can read in ten seconds. */
  summary: string
  /** Specific things that were technically or design-wise interesting. All verified against the source. */
  highlights: string[]
  links: ProjectLink[]
  icon?: string
  icon2x?: string
  /** True when the source is private or belongs to an employer; the site says so instead of linking. */
  sourcePrivate?: boolean
  /** True when Taif designed the interface as well as building it; lights the plum shape of the mark. */
  design?: boolean
  /** Screens exported without a device frame. Absent today; slots render when present. */
  screens?: Screen[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'finblade-ai',
    name: 'FinBlade AI',
    kicker: 'Generative-AI productivity platform for government clients',
    context: 'Work',
    org: 'ICS Arabia',
    period: '2024 – now',
    year: 2024,
    role: 'Lead mobile developer, web front-end contributor',
    platforms: ['Flutter', 'iOS', 'Web'],
    stack: ['Flutter', 'Dart', 'Swift', 'Vue.js', 'Nuxt', 'TypeScript'],
    summary:
      'A generative-AI productivity platform used by several government clients and organisations, with Workflow AI, Apps and Data Management modules. I ship every feature of its mobile app in Flutter. Where Flutter stops, I write the native piece in Swift. On the web side I build major parts of the front-end in Vue and Nuxt.',
    highlights: [
      'Developed and shipped all features of the mobile app, including the Workflow AI, Apps and Data Management modules.',
      'Led a full refactor and UI/UX redesign of the app for responsive, accessible layouts across devices.',
      'Built native iOS features and platform integrations in Swift to extend what the Flutter app can do.',
      'Built web features in Vue and Nuxt with TypeScript.',
    ],
    links: [{ label: 'Product site', url: 'https://finblade.ai', kind: 'live' }],
    sourcePrivate: true,
    design: true,
    featured: true,
  },
  {
    slug: 'minute',
    name: 'Minute & MinuteDriver',
    kicker: 'Rider and driver apps for a Riyadh taxi company, both on the App Store',
    context: 'Work',
    org: 'Minute Taxi Routing Company',
    period: '2023 – 2024',
    year: 2023,
    role: 'Sole iOS developer',
    platforms: ['iOS'],
    stack: ['Swift', 'UIKit', 'Google Maps SDK', 'Core Location', 'APNs', 'In-app payments', 'Firebase Realtime Database', 'REST APIs'],
    summary:
      'A rider app and a driver app for a Riyadh taxi company, both on the App Store. I was the only iOS developer for over a year. I designed the screens, built them in Swift and UIKit, wired the real-time data layer and submitted every release.',
    highlights: [
      'Live ride tracking on the Google Maps SDK, backed by Firebase Realtime Database and REST APIs.',
      'Core Location, push notifications and in-app payments integrated across both apps.',
      'Ran TestFlight cycles and App Store submissions for each release.',
    ],
    links: [
      { label: 'Minute on the App Store', url: 'https://apps.apple.com/sa/app/minute/id1633915418', kind: 'appstore' },
      { label: 'Minute Driver on the App Store', url: 'https://apps.apple.com/sa/app/minute-driver/id1634657781', kind: 'appstore' },
    ],
    sourcePrivate: true,
    design: true,
    featured: true,
  },
  {
    slug: 'nahaj',
    name: 'Nahaj',
    arabicName: 'نهج',
    kicker: 'iPad app teaching children science through AR experiments',
    context: 'University',
    org: 'King Saud University, graduation project',
    period: '2021 – 2022',
    year: 2022,
    role: 'Built with classmates as our graduation project; published to the App Store under my developer account.',
    roleLabel: 'Team',
    platforms: ['iPadOS', 'Flutter'],
    stack: ['Flutter', 'Dart', 'Unity', 'C#', 'Vuforia AR', 'Firebase'],
    summary:
      'Children run 3D science experiments in augmented reality on an iPad: a volcano chemistry lab and an animal-identification scene, followed by quizzes that feed points, levels and unlockable avatars. The app is Flutter. The AR scenes are Unity, embedded through a message bridge. Groups, scores and the admin content live in Firebase. Published to the App Store.',
    highlights: [
      'Unity scenes embedded inside Flutter with a two-way message bridge: Flutter sends the scene, Unity signals when the experiment ends.',
      'Study groups with six-digit join codes, a level-ranked leaderboard and real-time chat on Firestore streams.',
      'Admin role from the same sign-in for editing experiments and quiz questions.',
      'Arabic-first, right-to-left interface for young readers.',
    ],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/sa/app/nahaj-%D9%86%D9%87%D8%AC/id1601459555', kind: 'appstore' },
      { label: 'Student demo', url: 'https://www.youtube.com/watch?v=QSALU3Rya8c', kind: 'video' },
      { label: 'Admin demo', url: 'https://youtu.be/D2UWrvB_WgM', kind: 'video' },
      { label: 'Source', url: 'https://github.com/TaifAldehbash/Nahaj-game-based-learning-Application', kind: 'github' },
    ],
    icon: nahajIcon,
    icon2x: nahajIcon2x,
    featured: true,
  },
  {
    slug: 'fastway',
    name: 'FastWay',
    kicker: 'Two-sided campus delivery app with courier bidding and live tracking',
    context: 'University',
    org: 'King Saud University, team of five',
    period: '2021',
    year: 2021,
    role: 'Firestore data layer, authentication, notifications, courier-offer screens',
    roleLabel: 'My part',
    platforms: ['iOS'],
    stack: ['Swift', 'SwiftUI', 'MapKit', 'Cloud Firestore', 'Firebase Cloud Messaging'],
    summary:
      'Students on the KSU campus post a pickup-and-drop-off request, student couriers bid on it, and both sides follow the order on a map. Built by a team of five running Scrum. My part was the Firestore data layer, sign-in, push notifications and the courier offer flow.',
    highlights: [
      'Orders move through an eight-state lifecycle on real-time snapshot listeners, with a 15-minute auto-cancel for unanswered requests.',
      'Courier bidding, per-order chat, and courier location tracking on Apple Maps.',
      'A campus geofence that rejects pins and offers placed off campus.',
    ],
    links: [
      { label: 'Customer demo', url: 'https://youtu.be/O0SezM2mXLo', kind: 'video' },
      { label: 'Courier demo', url: 'https://youtube.com/shorts/ao3oAvPgCNw', kind: 'video' },
      { label: 'Source', url: 'https://github.com/TaifAldehbash/Fastway-Delivery-Application', kind: 'github' },
    ],
    icon: fastwayIcon,
    icon2x: fastwayIcon2x,
    featured: true,
  },
  {
    slug: 'nyt-articles',
    name: 'NYT Most Popular',
    kicker: 'Flutter reader for the New York Times Most Popular API',
    context: 'Assignment',
    contextNote: 'Take-home assignment',
    period: 'Dec 2023',
    year: 2023,
    role: 'Development',
    platforms: ['Flutter'],
    stack: ['Flutter', 'Dart', 'Widget tests'],
    summary:
      'A small, dependency-injected Flutter client with widget tests and a coverage report, and the API key supplied through dart-define rather than committed.',
    highlights: [],
    links: [{ label: 'Source', url: 'https://github.com/TaifAldehbash/NYT-Most-Popular-Articles', kind: 'github' }],
    featured: false,
  },
  {
    slug: 'sayara-tech',
    name: 'Sayara Tech',
    kicker: 'Flutter customer app for a car-services company',
    context: 'Assignment',
    contextNote: 'Assignment',
    period: 'Jul 2023',
    year: 2023,
    role: 'Development',
    platforms: ['Flutter'],
    stack: ['Flutter', 'Dart', 'REST APIs'],
    summary:
      'OTP sign-in, a vehicle registry with validated forms and a profile, built alone against an existing production API with Saudi plate and phone formats handled properly.',
    highlights: [],
    links: [{ label: 'Source', url: 'https://github.com/TaifAldehbash/Sayara-Tech', kind: 'github' }],
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
