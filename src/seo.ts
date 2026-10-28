// The <head> tags that differ per language: title, description, canonical URL, links between
// the language versions, link-preview tags and structured data. scripts/prerender.mjs writes
// them into each page at build time.
import { profile } from './data/profile'
import { locales, type Locale } from './i18n'

const site = profile.siteUrl
const pageUrl = (locale: Locale) => (locale === 'ar' ? `${site}/ar/` : `${site}/`)

const meta = {
  en: {
    title: 'Taif Aldehbash · Mobile & Front-end Engineer, Riyadh',
    description:
      'Taif Aldehbash is a mobile and front-end engineer in Riyadh who builds native iOS, Flutter and web apps. See shipped apps, UI/UX case studies and how to get in touch.',
    ogTitle: 'Taif Aldehbash · Mobile & Front-end Engineer',
    ogDescription: 'Native iOS, Flutter and web apps, plus UI/UX case studies, by a software engineer in Riyadh.',
    ogImage: `${site}/og-image.jpg`,
    ogImageAlt: 'Taif Aldehbash, mobile and front-end engineer in Riyadh',
    ogLocale: 'en_US',
  },
  ar: {
    title: 'طيف آل دحباش · تطوير تطبيقات الجوال والواجهات الأمامية، الرياض',
    description:
      'طيف آل دحباش من الرياض: تطوير تطبيقات iOS أصلية وتطبيقات Flutter وتطبيقات ويب. تعرّف على التطبيقات المُطلقة ودراسات الحالة في تصميم الواجهات وطرق التواصل.',
    ogTitle: 'طيف آل دحباش · تطوير الجوال والواجهات الأمامية',
    ogDescription: 'تطبيقات iOS وFlutter وويب، ودراسات حالة في تصميم الواجهات وتجربة المستخدم، من الرياض.',
    ogImage: `${site}/og-image-ar.jpg`,
    ogImageAlt: 'طيف آل دحباش، تطوير تطبيقات الجوال والواجهات الأمامية في الرياض',
    ogLocale: 'ar_SA',
  },
} satisfies Record<Locale, Record<string, string>>

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function structuredData(locale: Locale) {
  const other = locale === 'ar' ? 'en' : 'ar'
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: pageUrl(locale),
    inLanguage: locale,
    mainEntity: {
      '@type': 'Person',
      name: profile.name[locale],
      alternateName: profile.name[other],
      url: `${site}/`,
      jobTitle: profile.role[locale],
      worksFor: { '@type': 'Organization', name: 'ICS Arabia' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: locale === 'ar' ? 'جامعة الملك سعود' : 'King Saud University' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: locale === 'ar' ? 'الرياض' : 'Riyadh',
        addressCountry: 'SA',
      },
      email: `mailto:${profile.email}`,
      knowsAbout: ['iOS development', 'Swift', 'SwiftUI', 'UIKit', 'Flutter', 'Vue.js', 'TypeScript', 'React', 'UI/UX design'],
      sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.behance],
    },
  }
}

/** The language-specific <head> tags for one page, as an HTML string. */
export function headTags(locale: Locale) {
  const m = meta[locale]
  const other = locale === 'ar' ? 'en' : 'ar'
  const tag = (html: string) => `    ${html}`
  return [
    tag(`<title>${escape(m.title)}</title>`),
    tag(`<meta name="description" content="${escape(m.description)}" />`),
    tag(`<link rel="canonical" href="${pageUrl(locale)}" />`),
    ...locales.map((l) => tag(`<link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`)),
    tag(`<link rel="alternate" hreflang="x-default" href="${pageUrl('en')}" />`),
    tag(`<meta property="og:type" content="profile" />`),
    tag(`<meta property="og:site_name" content="${escape(profile.name[locale])}" />`),
    tag(`<meta property="og:title" content="${escape(m.ogTitle)}" />`),
    tag(`<meta property="og:description" content="${escape(m.ogDescription)}" />`),
    tag(`<meta property="og:url" content="${pageUrl(locale)}" />`),
    tag(`<meta property="og:image" content="${m.ogImage}" />`),
    tag(`<meta property="og:image:type" content="image/jpeg" />`),
    tag(`<meta property="og:image:width" content="1200" />`),
    tag(`<meta property="og:image:height" content="630" />`),
    tag(`<meta property="og:image:alt" content="${escape(m.ogImageAlt)}" />`),
    tag(`<meta property="og:locale" content="${m.ogLocale}" />`),
    tag(`<meta property="og:locale:alternate" content="${meta[other].ogLocale}" />`),
    tag(`<meta property="profile:first_name" content="${escape(profile.firstName[locale])}" />`),
    tag(`<meta property="profile:last_name" content="${escape(profile.lastName[locale])}" />`),
    tag(`<meta name="twitter:card" content="summary_large_image" />`),
    tag(`<script type="application/ld+json">${JSON.stringify(structuredData(locale)).replace(/</g, '\\u003c')}</script>`),
  ].join('\n')
}
