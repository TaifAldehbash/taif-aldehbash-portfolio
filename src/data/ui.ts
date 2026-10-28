// Interface text (buttons, labels, screen-reader phrases) in both languages.
// Page content (bio, projects, journey) lives in profile.ts.
import { plural, type Locale } from '../i18n'
import type { Milestone, Project } from './profile'

export const ui = {
  skipToContent: { en: 'Skip to content', ar: 'انتقل إلى المحتوى' },
  backToTopLabel: { en: ', Taif Aldehbash, back to top', ar: '، طيف آل دحباش، العودة إلى الأعلى' },
  mainNav: { en: 'Main', ar: 'التنقل الرئيسي' },
  nav: {
    work: { en: 'Work', ar: 'أعمالي' },
    about: { en: 'About', ar: 'عني' },
    contact: { en: 'Contact', ar: 'تواصل' },
  },
  // The switcher shows the other language, in that language.
  switchTo: { en: 'العربية', ar: 'English' },
  switchToShort: { en: 'ع', ar: 'EN' },
  opensNewTab: { en: '(opens in a new tab)', ar: '(يفتح في علامة تبويب جديدة)' },

  hero: {
    greeting: { en: 'Hi, I’m', ar: 'أهلًا، أنا' },
    seeMyWork: { en: 'See my work', ar: 'استعرض أعمالي' },
    getInTouch: { en: 'Get in touch', ar: 'تواصل معي' },
  },
  downloadCv: { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  pdf: { en: '(PDF)', ar: '(ملف PDF)' },

  pauseAnimations: { en: 'Pause animations', ar: 'إيقاف الحركة مؤقتًا' },
  playAnimations: { en: 'Play animations', ar: 'تشغيل الحركة' },

  work: {
    eyebrow: { en: 'Selected work', ar: 'أعمال مختارة' },
    title: { en: 'Work', ar: 'أعمالي' },
    filterLabel: { en: 'Filter projects by track', ar: 'تصفية المشاريع حسب المسار' },
    all: { en: 'All', ar: 'الكل' },
    builtWith: { en: 'Built with', ar: 'التقنيات المستخدمة' },
    status: { en: 'Status', ar: 'الحالة' },
    tracks: { en: 'Tracks', ar: 'المسارات' },
    moreOnTheWay: { en: 'More on the way', ar: 'المزيد في الطريق' },
    firstComing: { en: 'The first one in this track is coming.', ar: 'أول مشروع في هذا المسار قادم.' },
    nextUp: {
      en: 'Personal projects in native iOS, React and backend are next.',
      ar: 'مشاريع شخصية في iOS الأصلي وReact والخلفية هي الخطوة التالية.',
    },
    followAlong: { en: 'Follow along on GitHub.', ar: 'تابعها على GitHub.' },
    followOnGitHub: { en: 'Follow on GitHub', ar: 'تابعني على GitHub' },
  },

  design: {
    eyebrow: { en: 'UI/UX case studies', ar: 'دراسات حالة في تجربة المستخدم' },
    title: { en: 'Design', ar: 'والتصميم' },
    titleAccent: { en: 'too', ar: 'أيضًا' },
    more: { en: 'More on Behance', ar: 'المزيد على Behance' },
    moreHidden: { en: ': full case studies', ar: ': دراسات الحالة كاملة' },
    caseHidden: { en: 'case study on Behance', ar: 'دراسة حالة على Behance' },
  },

  tracks: {
    eyebrow: { en: 'What I build', ar: 'ما أبنيه' },
    titleStart: { en: 'Three layers,', ar: 'ثلاث طبقات' },
    titleAccent: { en: 'one', ar: 'بيدٍ' },
    titleEnd: { en: 'developer', ar: 'واحدة' },
    next: { en: 'Next', ar: 'التالي' },
    tools: { en: 'tools', ar: 'الأدوات' },
  },

  about: {
    eyebrow: { en: 'A little about me', ar: 'نبذة عني' },
    title: { en: 'About', ar: 'عني' },
    learningNext: { en: 'Learning next', ar: 'ما أتعلّمه تاليًا' },
    journey: { en: 'Journey', ar: 'المسيرة' },
    when: { en: 'When', ar: 'متى' },
    what: { en: 'What', ar: 'ماذا' },
    where: { en: 'Where', ar: 'أين' },
    certifications: { en: 'Certifications', ar: 'الشهادات' },
  },

  contact: {
    eyebrow: { en: 'Contact', ar: 'تواصل' },
    titleStart: { en: 'Let’s build something', ar: 'لنبنِ شيئًا' },
    titleAccent: { en: 'together', ar: 'معًا' },
    emailMe: { en: 'Email me', ar: 'راسلني' },
    copyEmail: { en: 'Copy email', ar: 'نسخ البريد' },
    copied: { en: 'Copied', ar: 'تم النسخ' },
  },

  footer: {
    builtWith: { en: 'Designed and built with React, TypeScript & Vite', ar: 'صُمّم وبُني باستخدام React وTypeScript وVite' },
    backToTop: { en: 'Back to top', ar: 'العودة إلى الأعلى' },
  },

  projectStatus: {
    Shipped: { en: 'Shipped', ar: 'أُطلق' },
    Built: { en: 'Built', ar: 'مكتمل' },
    Building: { en: 'Building', ar: 'قيد البناء' },
    Planned: { en: 'Planned', ar: 'مخطط له' },
  } satisfies Record<Project['status'], { en: string; ar: string }>,

  milestoneKind: {
    Work: { en: 'Work', ar: 'عمل' },
    Training: { en: 'Training', ar: 'تدريب' },
    Internship: { en: 'Internship', ar: 'تدريب تعاوني' },
    Education: { en: 'Education', ar: 'تعليم' },
  } satisfies Record<Milestone['kind'], { en: string; ar: string }>,
}

// Phrases that contain a number or a name.

export function projectCount(locale: Locale, count: number) {
  return locale === 'ar'
    ? plural('ar', count, { zero: 'لا مشاريع', one: 'مشروع واحد', two: 'مشروعان', few: '{n} مشاريع', many: '{n} مشروعًا', other: '{n} مشروع' })
    : plural('en', count, { one: '{n} project', other: '{n} projects' })
}

/** Screen-reader summary after filtering, e.g. "Showing 2 projects tagged Web." */
export function showingProjects(locale: Locale, count: number, track?: string) {
  if (locale === 'ar') return `يُعرض ${projectCount('ar', count)}${track ? ` في مسار ${track}` : ''}.`
  return `Showing ${projectCount('en', count)}${track ? ` tagged ${track}` : ''}.`
}

export function nothingYet(locale: Locale, track: string) {
  return locale === 'ar' ? `لا شيء منشور في ${track} بعد` : `Nothing public on ${track} yet`
}

export function copiedMessage(locale: Locale, email: string) {
  return locale === 'ar' ? `تم نسخ ${email}` : `${email} copied to clipboard`
}

export function copyFailedMessage(locale: Locale, email: string) {
  return locale === 'ar' ? `تعذّر النسخ. العنوان هو ${email}` : `Couldn't copy. The address is ${email}`
}

/** Hidden text after a link, so it makes sense out of context: " for Fastway (opens in a new tab)". */
export function linkContext(locale: Locale, title: string) {
  return locale === 'ar' ? ` – ${title} ${ui.opensNewTab.ar}` : ` for ${title} ${ui.opensNewTab.en}`
}

/** The noun after a project count: "projects", or the right Arabic plural form. */
export function projectWord(locale: Locale, count: number) {
  return locale === 'ar'
    ? plural('ar', count, { one: 'مشروع', two: 'مشروعان', few: 'مشاريع', many: 'مشروعًا', other: 'مشروع' })
    : plural('en', count, { one: 'project', other: 'projects' })
}

export function toolsLabel(locale: Locale, title: string) {
  return locale === 'ar' ? `أدوات ${title}` : `${title} tools`
}
