// All of the site's content lives here, in English and Arabic. Edit this file to update the
// portfolio; the components only handle layout. Interface labels live in ui.ts.
//
// A text field is either a plain string (the same in both languages, e.g. names and tech terms)
// or { en, ar }.
import type { Text } from '../i18n'

/** A file in public/, prefixed with the site's base path so it also works on GitHub Pages. */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export type TrackId = 'mobile' | 'web' | 'backend'

export interface Track {
  id: TrackId
  label: Text
  title: Text
  blurb: Text
  skills: string[]
  focus: Text
}

export interface ProjectLink {
  label: Text
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
  title: Text
  summary: Text
  tracks: TrackId[]
  /** Where it was built, e.g. an employer or "Personal". */
  context: Text
  /** Shipped = released to users. Built = finished but not publicly released. */
  status: 'Shipped' | 'Built' | 'Building' | 'Planned'
  year?: Text
  tech: string[]
  cover: ProjectCover
  links?: ProjectLink[]
}

export interface CaseStudy {
  id: string
  title: Text
  /** Arabic name, shown next to the English title on the English page. */
  titleAr?: string
  summary: Text
  href: string
  image: string
  team: Text
  published: Text
}

export interface Milestone {
  period: Text
  title: Text
  org: Text
  kind: 'Work' | 'Training' | 'Internship' | 'Education'
}

export interface Stat {
  value: string
  label: Text
}

export const profile = {
  name: { en: 'Taif Aldehbash', ar: 'طيف آل دحباش' },
  firstName: { en: 'Taif', ar: 'طيف' },
  lastName: { en: 'Aldehbash', ar: 'آل دحباش' },
  role: { en: 'Mobile and front-end engineer', ar: 'تطوير تطبيقات الجوال والواجهات الأمامية' },
  tagline: {
    en: 'I build and ship native iOS, Flutter and web apps. I was the sole iOS developer on two production ride-hailing apps, and now I lead mobile development on a Gen-AI platform.',
    ar: 'أبني تطبيقات iOS أصلية وتطبيقات Flutter وتطبيقات ويب وأوصلها إلى المستخدمين. تولّيت تطوير iOS لتطبيقين لنقل الركاب يعملان في الإنتاج، وأقود اليوم تطوير تطبيقات الجوال في منصة للذكاء الاصطناعي التوليدي.',
  },
  availability: { en: 'Based in Riyadh, Saudi Arabia', ar: 'من الرياض، المملكة العربية السعودية' },
  location: { en: 'Riyadh, Saudi Arabia · GMT+3', ar: 'الرياض، المملكة العربية السعودية · GMT+3' },
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
    {
      en: "I'm a software engineer in Riyadh with more than three years of building and shipping mobile apps and web front ends. I studied software engineering at King Saud University and trained in UI/UX design at Tuwaiq Academy.",
      ar: 'أعمل في هندسة البرمجيات في الرياض منذ أكثر من ثلاث سنوات، أبني فيها تطبيقات الجوال وواجهات الويب الأمامية وأطلقها. درست هندسة البرمجيات في جامعة الملك سعود، وتدرّبت على تصميم الواجهات وتجربة المستخدم في أكاديمية طويق.',
    },
    // Keep this section commented
    // {
    //   en: 'At Minute Taxi Routing Company I was the sole iOS developer on two production ride-hailing apps, from design and Swift code to App Store releases. Now I lead mobile development on FinBlade AI at ICS Arabia. Next, I want to grow into full-stack work through personal projects in native iOS, React and backend, starting with this site.',
    //   ar: 'في Minute Taxi Routing Company تولّيت تطوير iOS لتطبيقين لنقل الركاب يعملان في الإنتاج، من التصميم وكتابة Swift إلى الإطلاق على App Store. وأقود اليوم تطوير الجوال في FinBlade AI لدى ICS Arabia. وأطمح بعد ذلك إلى العمل على كامل المنظومة عبر مشاريع شخصية في iOS الأصلي وReact والخلفية، بدءًا بهذا الموقع.',
    // },
  ] as Text[],
  learning: ['React', { en: 'Backend APIs', ar: 'واجهات API للخلفية' }, { en: 'Databases', ar: 'قواعد البيانات' }] as Text[],
  workIntro: {
    en: "Apps I've built at work and on other projects, across native iOS, Flutter, Android and the web.",
    ar: 'تطبيقات بنيتها في العمل وفي مشاريع أخرى، بين iOS الأصلي وFlutter وأندرويد والويب.',
  },
  designIntro: {
    en: 'Four UI/UX case studies designed in Figma and published on Behance, three with a team and one solo.',
    ar: 'أربع دراسات حالة في تصميم الواجهات وتجربة المستخدم، صمّمتها في Figma ونشرتها على Behance؛ ثلاث منها مع فريق وواحدة بشكل فردي.',
  },
  contactText: {
    en: "Hiring for iOS, mobile or front-end work? I can design the interface and build it. I'm based in Riyadh and work in Arabic and English.",
    ar: 'لديك فرصة في تطوير iOS أو الجوال أو الواجهات الأمامية؟ أستطيع تصميم الواجهة وبناءها. أقيم في الرياض وأعمل بالعربية والإنجليزية.',
  },
}

export const stats: Stat[] = [
  { value: '3+', label: { en: 'years shipping mobile and web apps', ar: 'سنوات في إطلاق تطبيقات الجوال والويب' } },
  {
    value: '2',
    label: { en: 'production iOS apps as the sole iOS developer', ar: 'تطبيقا iOS في الإنتاج تولّيت تطويرهما وحدي' },
  },
  { value: '4.51', label: { en: 'GPA out of 5, King Saud University', ar: 'المعدل من 5، جامعة الملك سعود' } },
]

export const tracks: Track[] = [
  {
    id: 'mobile',
    label: { en: 'Mobile', ar: 'الجوال' },
    title: { en: 'iOS and Flutter', ar: 'iOS وFlutter' },
    blurb: {
      en: "I've shipped Swift and UIKit apps to the App Store with maps, live location, push notifications and in-app payments. I also built every feature of the FinBlade AI Flutter app.",
      ar: 'أطلقت تطبيقات Swift وUIKit على App Store بخرائط وموقع مباشر وإشعارات فورية ومدفوعات داخل التطبيق، وبنيت كل ميزات تطبيق FinBlade AI بـ Flutter.',
    },
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Core Location', 'Google Maps SDK', 'Flutter', 'TestFlight'],
    focus: { en: 'Personal native iOS projects.', ar: 'مشاريع iOS أصلية شخصية.' },
  },
  {
    id: 'web',
    label: { en: 'Web', ar: 'الويب' },
    title: { en: 'Front end', ar: 'الواجهات الأمامية' },
    blurb: {
      en: 'I built major parts of the FinBlade AI web front end in Vue.js, Nuxt and TypeScript.',
      ar: 'بنيت أجزاء رئيسية من واجهة FinBlade AI على الويب باستخدام Vue.js وNuxt وTypeScript.',
    },
    skills: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
    focus: { en: 'Learning React, starting with this site.', ar: 'تعلّم React، بدءًا بهذا الموقع.' },
  },
  {
    id: 'backend',
    label: { en: 'Backend', ar: 'الخلفية' },
    title: { en: 'APIs and data', ar: 'الواجهات البرمجية والبيانات' },
    blurb: {
      en: 'For the Minute apps I architected the data layer for real-time ride tracking, using Firebase Realtime Database and RESTful APIs.',
      ar: 'صمّمت في تطبيقات Minute طبقة البيانات لتتبّع الرحلات لحظيًا باستخدام Firebase Realtime Database وواجهات RESTful.',
    },
    skills: ['Firebase Realtime Database', 'Cloud Firestore', 'RESTful APIs', 'SQL'],
    focus: { en: 'Building my own APIs and databases.', ar: 'بناء واجهاتي البرمجية وقواعد بياناتي بنفسي.' },
  },
]

const sourceOnGitHub = { en: 'Source on GitHub', ar: 'الشيفرة على GitHub' }

export const projects: Project[] = [
  {
    id: 'finblade',
    title: 'FinBlade AI',
    summary: {
      en: 'A Gen-AI productivity platform for government clients. I shipped every feature of the Flutter app, added native iOS features in Swift, built major parts of the web front end and led the app redesign.',
      ar: 'منصة إنتاجية بالذكاء الاصطناعي التوليدي لعملاء حكوميين. أطلقت كل ميزات تطبيق Flutter، وأضفت ميزات iOS أصلية بـ Swift، وبنيت أجزاء رئيسية من واجهة الويب، وقُدت إعادة تصميم التطبيق.',
    },
    tracks: ['mobile', 'web'],
    context: 'ICS Arabia',
    status: 'Shipped',
    year: { en: '2024 — Now', ar: '2024 — الآن' },
    tech: ['Flutter', 'Dart', 'Swift', 'Vue.js', 'Nuxt', 'TypeScript'],
    cover: { accent: '#1a9ab0', icons: [asset('logos/finblade.png')] },
  },
  {
    id: 'minute',
    title: { en: 'Minute and Minute Driver', ar: 'Minute وMinute Driver' },
    summary: {
      en: 'Two production ride-hailing apps. As the sole iOS developer I owned design, development, testing and App Store releases for over a year, including real-time ride tracking and in-app payments.',
      ar: 'تطبيقان لنقل الركاب يعملان في الإنتاج. تولّيت تطوير iOS لأكثر من عام، من التصميم والتطوير والاختبار إلى الإطلاق على App Store، بما في ذلك تتبّع الرحلات لحظيًا والمدفوعات داخل التطبيق.',
    },
    tracks: ['mobile', 'backend'],
    context: 'Minute Taxi Routing Company',
    status: 'Shipped',
    year: '2023 — 2024',
    tech: ['Swift', 'UIKit', 'Google Maps SDK', 'Core Location', 'Firebase', 'REST APIs'],
    cover: { accent: '#2f6fe0', icons: [asset('logos/minute.png'), asset('logos/minute-driver.png')] },
    links: [
      {
        label: { en: 'Minute on the App Store', ar: 'Minute على App Store' },
        href: 'https://apps.apple.com/sa/app/minute/id1633915418',
      },
      {
        label: { en: 'Minute Driver on the App Store', ar: 'Minute Driver على App Store' },
        href: 'https://apps.apple.com/sa/app/minute-driver/id1634657781',
      },
    ],
  },
  {
    id: 'nahaj',
    title: { en: 'Nahaj', ar: 'نهج' },
    summary: {
      en: 'An educational iPad app delivering 3D science experiments for children in augmented reality. Built by a team of four with Flutter, Unity and Firebase, and published to the App Store.',
      ar: 'تطبيق تعليمي على iPad يقدّم للأطفال تجارب علمية ثلاثية الأبعاد بالواقع المعزّز. بناه فريق من أربعة باستخدام Flutter وUnity وFirebase، ونُشر على App Store.',
    },
    tracks: ['mobile'],
    context: { en: 'KSU graduation project', ar: 'مشروع تخرج، جامعة الملك سعود' },
    status: 'Shipped',
    year: '2021',
    tech: ['Flutter', 'Unity', 'C#', 'Firebase'],
    cover: { accent: '#3fd4c4', icons: [asset('logos/nahaj.png')] },
    links: [{ label: sourceOnGitHub, href: 'https://github.com/TaifAldehbash/Nahaj-game-based-learning-Application' }],
  },
  {
    id: 'fastway',
    title: 'Fastway',
    summary: {
      en: 'A delivery app for the KSU female campus, built in an Agile Scrum team with Swift, SwiftUI, Apple Maps and Cloud Firestore.',
      ar: 'تطبيق توصيل للمدينة الجامعية للطالبات في جامعة الملك سعود، بُني ضمن فريق Agile Scrum باستخدام Swift وSwiftUI وApple Maps وCloud Firestore.',
    },
    tracks: ['mobile'],
    context: { en: 'KSU course project', ar: 'مشروع مقرر، جامعة الملك سعود' },
    status: 'Built',
    year: '2021',
    tech: ['Swift', 'SwiftUI', 'Apple Maps', 'Cloud Firestore'],
    cover: { accent: '#c13cff', icons: [asset('logos/fastway.png')] },
    links: [{ label: sourceOnGitHub, href: 'https://github.com/TaifAldehbash/Fastway-Delivery-Application' }],
  },
  {
    id: 'plantify',
    title: 'Plantify',
    summary: {
      en: 'An Android plant-retail app I developed as a software engineering intern at Communication Experts.',
      ar: 'تطبيق أندرويد لبيع النباتات طوّرته خلال تدريبي التعاوني في هندسة البرمجيات لدى Communication Experts.',
    },
    tracks: ['mobile'],
    context: { en: 'Internship', ar: 'تدريب تعاوني' },
    status: 'Built',
    year: '2021',
    tech: ['Android'],
    cover: { accent: '#4be3a6', monogram: 'Pl' },
  },
  {
    id: 'portfolio',
    title: { en: 'This portfolio', ar: 'هذا الموقع' },
    summary: {
      en: "The site you're on, and my first React project. Built with React, TypeScript, Vite and CSS Modules.",
      ar: 'الموقع الذي تتصفحه الآن، وأول مشروع لي بـ React. مبني باستخدام React وTypeScript وVite وCSS Modules.',
    },
    tracks: ['web'],
    context: { en: 'Personal', ar: 'شخصي' },
    status: 'Shipped',
    year: '2026',
    tech: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    cover: { accent: '#ffc83d', icons: [asset('favicon.svg')] },
    links: [
      { label: { en: 'Live site', ar: 'الموقع المباشر' }, href: profile.siteUrl },
      { label: sourceOnGitHub, href: 'https://github.com/TaifAldehbash/taif-aldehbash-portfolio' },
    ],
  },
]

const behanceImage = (file: string) => `https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/${file}`
const july2025 = { en: 'Jul 2025', ar: 'يوليو 2025' }

export const caseStudies: CaseStudy[] = [
  {
    id: 'rakaz',
    title: { en: 'Rakaz', ar: 'ركاز' },
    titleAr: 'ركاز',
    summary: {
      en: 'An AI-powered real-estate platform for evaluating properties and calculating investment returns. First prototype built in a five-day design sprint, co-designed with Joud Dahman and Wasayf Alramadhan.',
      ar: 'منصة عقارية مدعومة بالذكاء الاصطناعي لتقييم العقارات وحساب عوائد الاستثمار. بُني أول نموذج أولي لها في سباق تصميم مدته خمسة أيام، بالشراكة مع Joud Dahman وWasayf Alramadhan.',
    },
    href: 'https://www.behance.net/gallery/229789505/Rakaz',
    image: behanceImage('765472229789505.Y3JvcCwxMzA4LDEwMjMsMjYyLDA.png'),
    team: { en: 'Team of 3', ar: 'فريق من 3' },
    published: july2025,
  },
  {
    id: 'vox',
    title: { en: 'Vox Cinema redesign', ar: 'إعادة تصميم Vox Cinema' },
    summary: {
      en: 'A mobile app redesign focused on accessibility and navigation flow. Co-designed with Layali Baggashi at the Tuwaiq Academy UI/UX Bootcamp 2025.',
      ar: 'إعادة تصميم تطبيق جوال تركّز على سهولة الوصول وسلاسة التنقل، بالشراكة مع Layali Baggashi في معسكر تصميم الواجهات وتجربة المستخدم من أكاديمية طويق 2025.',
    },
    href: 'https://www.behance.net/gallery/229901237/Vox-Cinema-UIUX-Redesign',
    image: behanceImage('725d59229901237.Y3JvcCw5NDgxLDc0MTYsMCww.png'),
    team: { en: 'Team of 2', ar: 'فريق من 2' },
    published: july2025,
  },
  {
    id: 'najid',
    title: { en: 'Najid', ar: 'ناجد' },
    titleAr: 'ناجد',
    summary: {
      en: 'An emergency-response mobile app, co-designed with Layali Baggashi and Eyad Raffah.',
      ar: 'تطبيق جوال للاستجابة للطوارئ، بالشراكة مع Layali Baggashi وEyad Raffah.',
    },
    href: 'https://www.behance.net/gallery/230029307/Najid-',
    image: behanceImage('1ed9f9230029307.Y3JvcCwxMTYzLDkwOSwwLDA.png'),
    team: { en: 'Team of 3', ar: 'فريق من 3' },
    published: july2025,
  },
  {
    id: 'chapter',
    title: 'Chapter',
    summary: {
      en: 'Stories that find you. A solo UX/UI project for a cozy, personalized bookstore app.',
      ar: 'قصص تجدك. مشروع فردي في تصميم الواجهات وتجربة المستخدم لتطبيق مكتبة دافئ وشخصي.',
    },
    href: 'https://www.behance.net/gallery/229455511/Chapter',
    image: behanceImage('67c810229455511.Y3JvcCwzODgwLDMwMzUsMTcyLDE0NA.jpg'),
    team: { en: 'Solo', ar: 'عمل فردي' },
    published: july2025,
  },
]

// Job titles are written as fields of work in Arabic so they read naturally without gender.
export const milestones: Milestone[] = [
  {
    period: { en: 'Apr 2024 — Now', ar: 'أبريل 2024 — الآن' },
    title: { en: 'Software Engineer · Lead Mobile Developer', ar: 'هندسة البرمجيات · قيادة تطوير الجوال' },
    org: 'ICS Arabia',
    kind: 'Work',
  },
  {
    period: { en: 'Aug 2023 — Sep 2024', ar: 'أغسطس 2023 — سبتمبر 2024' },
    title: { en: 'iOS Developer', ar: 'تطوير iOS' },
    org: 'Minute Taxi Routing Company',
    kind: 'Work',
  },
  {
    period: { en: 'Dec 2022 — May 2023', ar: 'ديسمبر 2022 — مايو 2023' },
    title: { en: 'Business Analysis Trainee', ar: 'تدريب في تحليل الأعمال' },
    org: { en: 'Amlak International', ar: 'أملاك العالمية' },
    kind: 'Training',
  },
  {
    period: '2022',
    title: {
      en: 'B.S. Computer & Information Sciences, Software Engineering',
      ar: 'بكالوريوس علوم الحاسب والمعلومات، هندسة البرمجيات',
    },
    org: { en: 'King Saud University', ar: 'جامعة الملك سعود' },
    kind: 'Education',
  },
  {
    period: '2021',
    title: { en: 'Software Engineering Intern', ar: 'تدريب تعاوني في هندسة البرمجيات' },
    org: 'Communication Experts LTD',
    kind: 'Internship',
  },
]

const tuwaiq = { en: 'Tuwaiq Academy', ar: 'أكاديمية طويق' }

export const certifications: { title: Text; issuer?: Text; year: string }[] = [
  { title: { en: 'UI/UX Bootcamp', ar: 'معسكر تصميم الواجهات وتجربة المستخدم' }, issuer: tuwaiq, year: '2025' },
  { title: { en: 'Alibaba Cloud Computing Bootcamp', ar: 'معسكر الحوسبة السحابية من Alibaba Cloud' }, issuer: tuwaiq, year: '2023' },
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
