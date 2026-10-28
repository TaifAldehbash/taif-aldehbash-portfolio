// All of the site's content lives here. Edit this file to update the portfolio;
// the components only handle layout.

/** A file in public/, prefixed with the site's base path so it also works on GitHub Pages. */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export type TrackId = 'mobile' | 'web' | 'backend'

export interface Track {
  id: TrackId
  label: string
  title: string
  blurb: string
  skills: string[]
  focus: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectCover {
  /** Glow and app-icon colour. */
  accent: string
  /** Letters shown on the generated app icon. */
  monogram?: string
  /** Real app icons (files in public/logos), used instead of the monogram. */
  icons?: string[]
}

export interface Project {
  id: string
  title: string
  summary: string
  tracks: TrackId[]
  /** Where it was built, e.g. an employer or "Personal". */
  context: string
  /** Shipped = released to users. Built = finished but not publicly released. */
  status: 'Shipped' | 'Built' | 'Building' | 'Planned'
  year?: string
  tech: string[]
  cover: ProjectCover
  links?: ProjectLink[]
}

export interface CaseStudy {
  id: string
  title: string
  /** Arabic name, rendered with lang="ar". */
  titleAr?: string
  summary: string
  href: string
  image: string
  team: string
  published: string
}

export interface Milestone {
  period: string
  title: string
  org: string
  kind: 'Work' | 'Training' | 'Internship' | 'Education'
}

export interface Stat {
  value: string
  label: string
}

export const profile = {
  name: 'Taif Aldehbash',
  firstName: 'Taif',
  lastName: 'Aldehbash',
  role: 'Mobile and front-end engineer',
  tagline:
    'I build and ship native iOS, Flutter and web apps. I was the sole iOS developer on two production ride-hailing apps, and now I lead mobile development on a Gen-AI platform.',
  availability: 'Based in Riyadh, Saudi Arabia',
  location: 'Riyadh, Saudi Arabia · GMT+3',
  email: 'taifmaldehbash@gmail.com',
  siteUrl: 'https://taif-aldehbash-portfolio.vercel.app',
  // The iOS CV. Leave empty to hide the download buttons.
  resumeUrl: asset('Taif-Aldehbash-CV.pdf'),
  socials: {
    github: 'https://github.com/TaifAldehbash',
    linkedin: 'https://www.linkedin.com/in/taif-aldehbash',
    behance: 'https://www.behance.net/taifm',
  },
  bio: [
    "I'm a software engineer in Riyadh with more than three years of building and shipping mobile apps and web front ends. I studied software engineering at King Saud University and trained in UI/UX design at Tuwaiq Academy.",
    // Keep this section commented
    // 'At Minute Taxi Routing Company I was the sole iOS developer on two production ride-hailing apps, from design and Swift code to App Store releases. Now I lead mobile development on FinBlade AI at ICS Arabia. Next, I want to grow into full-stack work through personal projects in native iOS, React and backend, starting with this site.',
  ],
  learning: ['React', 'Backend APIs', 'Databases'],
  workIntro: "Apps I've built at work and on other projects, across native iOS, Flutter, Android and the web.",
  designIntro: 'Four UI/UX case studies designed in Figma and published on Behance, three with a team and one solo.',
  contactText:
    "Hiring for iOS, mobile or front-end work? I can design the interface and build it. I'm based in Riyadh and work in Arabic and English.",
}

export const stats: Stat[] = [
  { value: '3+', label: 'years shipping mobile and web apps' },
  { value: '2', label: 'production iOS apps as the sole iOS developer' },
  { value: '4.51', label: 'GPA out of 5, King Saud University' },
]

export const tracks: Track[] = [
  {
    id: 'mobile',
    label: 'Mobile',
    title: 'iOS and Flutter',
    blurb:
      "I've shipped Swift and UIKit apps to the App Store with maps, live location, push notifications and in-app payments. I also built every feature of the FinBlade AI Flutter app.",
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Core Location', 'Google Maps SDK', 'Flutter', 'TestFlight'],
    focus: 'Personal native iOS projects.',
  },
  {
    id: 'web',
    label: 'Web',
    title: 'Front end',
    blurb: 'I built major parts of the FinBlade AI web front end in Vue.js, Nuxt and TypeScript.',
    skills: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
    focus: 'Learning React, starting with this site.',
  },
  {
    id: 'backend',
    label: 'Backend',
    title: 'APIs and data',
    blurb:
      'For the Minute apps I architected the data layer for real-time ride tracking, using Firebase Realtime Database and RESTful APIs.',
    skills: ['Firebase Realtime Database', 'Cloud Firestore', 'RESTful APIs', 'SQL'],
    focus: 'Building my own APIs and databases.',
  },
]

export const projects: Project[] = [
  {
    id: 'finblade',
    title: 'FinBlade AI',
    summary:
      'A Gen-AI productivity platform for government clients. I shipped every feature of the Flutter app, added native iOS features in Swift, built major parts of the web front end and led the app redesign.',
    tracks: ['mobile', 'web'],
    context: 'ICS Arabia',
    status: 'Shipped',
    year: '2024 — Now',
    tech: ['Flutter', 'Dart', 'Swift', 'Vue.js', 'Nuxt', 'TypeScript'],
    cover: { accent: '#1a9ab0', icons: [asset('logos/finblade.png')] },
  },
  {
    id: 'minute',
    title: 'Minute and Minute Driver',
    summary:
      'Two production ride-hailing apps. As the sole iOS developer I owned design, development, testing and App Store releases for over a year, including real-time ride tracking and in-app payments.',
    tracks: ['mobile', 'backend'],
    context: 'Minute Taxi Routing Company',
    status: 'Shipped',
    year: '2023 — 2024',
    tech: ['Swift', 'UIKit', 'Google Maps SDK', 'Core Location', 'Firebase', 'REST APIs'],
    cover: { accent: '#2f6fe0', icons: [asset('logos/minute.png'), asset('logos/minute-driver.png')] },
    links: [
      { label: 'Minute on the App Store', href: 'https://apps.apple.com/sa/app/minute/id1633915418' },
      { label: 'Minute Driver on the App Store', href: 'https://apps.apple.com/sa/app/minute-driver/id1634657781' },
    ],
  },
  {
    id: 'nahaj',
    title: 'Nahaj',
    summary:
      'An educational iPad app delivering 3D science experiments for children in augmented reality. Built by a team of four with Flutter, Unity and Firebase, and published to the App Store.',
    tracks: ['mobile'],
    context: 'KSU graduation project',
    status: 'Shipped',
    year: '2021',
    tech: ['Flutter', 'Unity', 'C#', 'Firebase'],
    cover: { accent: '#3fd4c4', icons: [asset('logos/nahaj.png')] },
    links: [{ label: 'Source on GitHub', href: 'https://github.com/TaifAldehbash/Nahaj-game-based-learning-Application' }],
  },
  {
    id: 'fastway',
    title: 'Fastway',
    summary:
      'A delivery app for the KSU female campus, built in an Agile Scrum team with Swift, SwiftUI, Apple Maps and Cloud Firestore.',
    tracks: ['mobile'],
    context: 'KSU course project',
    status: 'Built',
    year: '2021',
    tech: ['Swift', 'SwiftUI', 'Apple Maps', 'Cloud Firestore'],
    cover: { accent: '#c13cff', icons: [asset('logos/fastway.png')] },
    links: [{ label: 'Source on GitHub', href: 'https://github.com/TaifAldehbash/Fastway-Delivery-Application' }],
  },
  {
    id: 'plantify',
    title: 'Plantify',
    summary: 'An Android plant-retail app I developed as a software engineering intern at Communication Experts.',
    tracks: ['mobile'],
    context: 'Internship',
    status: 'Built',
    year: '2021',
    tech: ['Android'],
    cover: { accent: '#4be3a6', monogram: 'Pl' },
  },
  {
    id: 'portfolio',
    title: 'This portfolio',
    summary: "The site you're on, and my first React project. Built with React, TypeScript, Vite and CSS Modules.",
    tracks: ['web'],
    context: 'Personal',
    status: 'Shipped',
    year: '2026',
    tech: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    cover: { accent: '#ffc83d', icons: [asset('favicon.svg')] },
    links: [
      { label: 'Live site', href: profile.siteUrl },
      { label: 'Source on GitHub', href: 'https://github.com/TaifAldehbash/taif-aldehbash-portfolio' },
    ],
  },
]

const behanceImage = (file: string) => `https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/${file}`

export const caseStudies: CaseStudy[] = [
  {
    id: 'rakaz',
    title: 'Rakaz',
    titleAr: 'ركاز',
    summary:
      'An AI-powered real-estate platform for evaluating properties and calculating investment returns. First prototype built in a five-day design sprint, co-designed with Joud Dahman and Wasayf Alramadhan.',
    href: 'https://www.behance.net/gallery/229789505/Rakaz',
    image: behanceImage('765472229789505.Y3JvcCwxMzA4LDEwMjMsMjYyLDA.png'),
    team: 'Team of 3',
    published: 'Jul 2025',
  },
  {
    id: 'vox',
    title: 'Vox Cinema redesign',
    summary:
      'A mobile app redesign focused on accessibility and navigation flow. Co-designed with Layali Baggashi at the Tuwaiq Academy UI/UX Bootcamp 2025.',
    href: 'https://www.behance.net/gallery/229901237/Vox-Cinema-UIUX-Redesign',
    image: behanceImage('725d59229901237.Y3JvcCw5NDgxLDc0MTYsMCww.png'),
    team: 'Team of 2',
    published: 'Jul 2025',
  },
  {
    id: 'najid',
    title: 'Najid',
    titleAr: 'ناجد',
    summary: 'An emergency-response mobile app, co-designed with Layali Baggashi and Eyad Raffah.',
    href: 'https://www.behance.net/gallery/230029307/Najid-',
    image: behanceImage('1ed9f9230029307.Y3JvcCwxMTYzLDkwOSwwLDA.png'),
    team: 'Team of 3',
    published: 'Jul 2025',
  },
  {
    id: 'chapter',
    title: 'Chapter',
    summary: 'Stories that find you. A solo UX/UI project for a cozy, personalized bookstore app.',
    href: 'https://www.behance.net/gallery/229455511/Chapter',
    image: behanceImage('67c810229455511.Y3JvcCwzODgwLDMwMzUsMTcyLDE0NA.jpg'),
    team: 'Solo',
    published: 'Jul 2025',
  },
]

export const milestones: Milestone[] = [
  { period: 'Apr 2024 — Now', title: 'Software Engineer · Lead Mobile Developer', org: 'ICS Arabia', kind: 'Work' },
  { period: 'Aug 2023 — Sep 2024', title: 'iOS Developer', org: 'Minute Taxi Routing Company', kind: 'Work' },
  { period: 'Dec 2022 — May 2023', title: 'Business Analysis Trainee', org: 'Amlak International', kind: 'Training' },
  { period: '2022', title: 'B.S. Computer & Information Sciences, Software Engineering', org: 'King Saud University', kind: 'Education' },
  { period: '2021', title: 'Software Engineering Intern', org: 'Communication Experts LTD', kind: 'Internship' },
]

export const certifications: { title: string; issuer?: string; year: string }[] = [
  { title: 'UI/UX Bootcamp', issuer: 'Tuwaiq Academy', year: '2025' },
  { title: 'Alibaba Cloud Computing Bootcamp', issuer: 'Tuwaiq Academy', year: '2023' },
  { title: 'The Complete iOS App Development Bootcamp: iOS & Swift', year: '2023' },
]

export const marquee = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'Flutter',
  'Vue.js',
  'Nuxt',
  'TypeScript',
  'Firebase',
  'Figma',
  'Combine',
]
