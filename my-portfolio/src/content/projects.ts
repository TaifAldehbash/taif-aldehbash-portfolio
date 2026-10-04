import nahajIcon from '../assets/projects/nahaj-icon.png'
import fastwayIcon from '../assets/projects/fastway-icon.png'
import reportitIcon from '../assets/projects/reportit-icon.png'

export type Platform = 'iOS' | 'iPadOS' | 'Flutter' | 'Web' | 'Swift Package'
export type Context = 'Work' | 'Personal' | 'Assignment' | 'University'

export interface ProjectLink {
  label: string
  url: string
  kind: 'github' | 'live' | 'video' | 'figma' | 'appstore' | 'other'
}

export interface Project {
  slug: string
  name: string
  arabicName?: string
  /** One line, under 12 words, says what it is. */
  kicker: string
  /** Where it sits: a job, a personal build, a hiring assignment, a degree project. */
  context: Context
  org?: string
  period: string
  year: number
  role: string
  platforms: Platform[]
  stack: string[]
  /** Two or three sentences a hiring manager can read in ten seconds. */
  summary: string
  /** Specific things that were technically or design-wise interesting. All verified against the source. */
  highlights: string[]
  links: ProjectLink[]
  icon?: string
  /** True when the source is private or belongs to an employer; the site says so instead of linking. */
  sourcePrivate?: boolean
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
      'A generative-AI productivity platform used by several government clients and organisations, with Workflow AI, Apps and Data Management modules. I ship every feature of its mobile app in Flutter, extend it with native Swift where needed, and build major parts of the web front-end in Vue and Nuxt.',
    highlights: [
      'Developed and shipped all features of the mobile app, including the Workflow AI, Apps and Data Management modules.',
      'Led a full refactor and UI/UX redesign of the app for responsive, accessible layouts across devices.',
      'Built native iOS features and platform integrations in Swift to extend what the Flutter app can do.',
      'Built web features in Vue and Nuxt with TypeScript against the same platform APIs.',
    ],
    links: [],
    sourcePrivate: true,
    featured: true,
  },
  {
    slug: 'minute',
    name: 'Minute & MinuteDriver',
    kicker: 'Two production ride-hailing apps, one iOS engineer',
    context: 'Work',
    org: 'Minute Taxi Routing Company',
    period: '2023 – 2024',
    year: 2023,
    role: 'Sole iOS developer',
    platforms: ['iOS'],
    stack: ['Swift', 'UIKit', 'Google Maps SDK', 'Core Location', 'Firebase Realtime Database', 'APNs'],
    summary:
      'A rider app and a driver app for a Riyadh taxi company, both in production on the App Store. For over a year I was the only iOS developer: I designed the screens, built them in Swift and UIKit, wired the real-time data layer, and shipped every release.',
    highlights: [
      'Live ride tracking on the Google Maps SDK, backed by Firebase Realtime Database and REST APIs.',
      'Core Location, push notifications and in-app payments integrated across both apps.',
      'Ran TestFlight cycles and App Store submissions for each release.',
      'Identified and fixed performance bottlenecks to keep both apps fast and reliable.',
    ],
    links: [],
    sourcePrivate: true,
    featured: true,
  },
  {
    slug: 'kalemah',
    name: 'Kalemah',
    arabicName: 'كلمة',
    kicker: 'A daily Arabic five-letter word puzzle for iOS',
    context: 'Personal',
    period: '2026',
    year: 2026,
    role: 'Design and development',
    platforms: ['iOS'],
    stack: ['Swift', 'SwiftUI', 'Swift Concurrency', 'XcodeGen'],
    summary:
      'One Arabic word a day, six attempts, a keyboard laid out right to left. Arabic is the first-class audience here, not a translation: typed letters and the word list both pass through a normaliser that strips diacritics and unifies alef forms, so a guess is never rejected over a hamza.',
    highlights: [
      'Custom three-row Arabic keyboard whose key colours only ever upgrade, never downgrade.',
      'Deterministic daily word from a fixed epoch, with saved state keyed by day so a reopened puzzle resumes.',
      'Hard mode that enforces confirmed letters, with Arabic error toasts naming the letter.',
      'Two-tier hint system across 19 semantic categories, unlocked on the third attempt.',
      'Whole UI driven from one design-token file: colour, type, spacing, sizing and motion, in light and dark.',
    ],
    links: [],
    sourcePrivate: true,
    featured: true,
  },
  {
    slug: 'stitch',
    name: 'Stitch',
    kicker: 'Drag-and-drop mini website builder with JSON import and export',
    context: 'Assignment',
    period: 'Oct 2025',
    year: 2025,
    role: 'Design and development',
    platforms: ['Web'],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Zod', 'dnd-kit', 'Framer Motion'],
    summary:
      'A front-end take-home turned into a working tool: add hero, features, FAQ and footer sections from a catalogue, edit their text and lists in an inspector, reorder them by dragging, and export the whole page as validated JSON. Built in a few days on a stack I had not used before, and deployed to Vercel.',
    highlights: [
      'Layout modelled as a Zod discriminated union, so an imported file is validated field by field with readable error paths.',
      'Drag-to-reorder canvas on dnd-kit with an 8px activation distance so click-to-select and drag never conflict.',
      'Page stays server-rendered: the four interactive panels are client-only leaves pushed down the tree.',
      'Persisted Zustand store writes only the layout to localStorage, so a refresh never loses work.',
    ],
    links: [
      { label: 'Live demo', url: 'https://stitch-one.vercel.app', kind: 'live' },
      { label: 'Source', url: 'https://github.com/TaifAldehbash/Stitch', kind: 'github' },
    ],
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
    role: 'Flutter, Firebase and Unity integration; brand and UI',
    platforms: ['iPadOS', 'Flutter'],
    stack: ['Flutter', 'Unity', 'C#', 'Vuforia AR', 'Firebase'],
    summary:
      'Children run 3D science experiments in augmented reality on an iPad, a volcano chemistry lab and an animal-identification scene, then answer quizzes that feed points, levels and unlockable avatars. Flutter drives the app, Unity renders the AR scenes, and Firebase keeps groups, scores and admin content in sync. Published to the App Store.',
    highlights: [
      'Unity scenes embedded inside Flutter with a two-way message bridge: Flutter sends the scene, Unity signals when the experiment ends.',
      'Study groups with six-digit join codes, a level-ranked leaderboard and real-time chat on Firestore streams.',
      'Admin role from the same sign-in for editing experiments and quiz questions.',
      'Arabic-first, right-to-left interface for young readers, with a custom logo and mascot.',
    ],
    links: [
      { label: 'Student demo', url: 'https://www.youtube.com/watch?v=QSALU3Rya8c', kind: 'video' },
      { label: 'Admin demo', url: 'https://youtu.be/D2UWrvB_WgM', kind: 'video' },
      { label: 'Source', url: 'https://github.com/TaifAldehbash/Nahaj-game-based-learning-Application', kind: 'github' },
    ],
    icon: nahajIcon,
    featured: true,
  },
  {
    slug: 'thmanyah',
    name: 'Thmanyah podcast client',
    kicker: 'SwiftUI podcast browser with paginated feed and tested view models',
    context: 'Assignment',
    period: 'Jul 2025',
    year: 2025,
    role: 'Development',
    platforms: ['iOS'],
    stack: ['Swift', 'SwiftUI', 'async/await', 'XCTest'],
    summary:
      'A take-home reproducing the home feed and search of a podcast app. The interesting part is underneath: four server-driven section layouts rendered from one card component, decoders that tolerate an inconsistent API instead of crashing on it, and unit tests that exercise both view models through a mock service.',
    highlights: [
      'Cursor-paginated home feed and a 200 ms debounced search, both on async/await.',
      'Defensive decoding: ids arriving under four different keys, numbers arriving as strings.',
      'View models behind a protocol with a mock service for XCTest.',
      'Light and dark colour tokens, and a splash that punches the logo out of a colour overlay before scaling open.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/TaifAldehbash/Thmanyah', kind: 'github' }],
    featured: true,
  },
  {
    slug: 'reportit',
    name: 'ReportIt',
    kicker: 'Bug reporter that files screenshots and notes into Google Sheets',
    context: 'Personal',
    period: 'Apr 2024',
    year: 2024,
    role: 'Design and development',
    platforms: ['iOS', 'Swift Package'],
    stack: ['Swift', 'SwiftUI', 'Google Sheets API', 'Firebase Storage', 'Google Sign-In', 'Swift Package Manager'],
    summary:
      'A small internal tool treated like a product. Testers describe a bug, attach a photo or capture the current screen, and the report lands as a row in a Google Sheet with the screenshot in Firebase Storage. The Google and Firebase plumbing was split out into GoogleCloudKit, a Swift package anyone can import.',
    highlights: [
      'Designed in Figma first, then built with asset-catalogue colour tokens, an animated splash and an enum-driven router.',
      'Upload pipeline creates a per-day sheet tab with a header row, stores the screenshot, then appends the report.',
      'Home screen stat tile with the running bug count and a list of the latest reports.',
      'GoogleCloudKit package: Google Sign-In, OAuth scopes, Sheets API and Cloud Storage in one dependency.',
    ],
    links: [
      { label: 'Source', url: 'https://github.com/TaifAldehbash/RportIt', kind: 'github' },
      { label: 'GoogleCloudKit package', url: 'https://github.com/TaifAldehbash/GoogleCloudKit', kind: 'github' },
      {
        label: 'Figma',
        url: 'https://www.figma.com/file/cdFofT6CRVsWjtBMa4snj3/Untitled?type=design&node-id=0%3A1&mode=design',
        kind: 'figma',
      },
    ],
    icon: reportitIcon,
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
    platforms: ['iOS'],
    stack: ['Swift', 'SwiftUI', 'Apple Maps', 'Cloud Firestore', 'Firebase Cloud Messaging'],
    summary:
      'Students on the KSU campus post a pickup-and-drop-off request, student couriers bid on it, and both sides follow the order on a map. Built by a team of five running Scrum; I owned the parts every other screen depended on: the Firestore data layer, sign-in, push notifications and the courier offer flow.',
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
    featured: false,
  },
  {
    slug: 'nyt-articles',
    name: 'NYT Most Popular',
    kicker: 'Flutter reader for the New York Times Most Popular API',
    context: 'Assignment',
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
