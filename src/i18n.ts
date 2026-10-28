import { createContext, useContext } from 'react'

export type Locale = 'en' | 'ar'

export const locales: Locale[] = ['en', 'ar']

/** Text in both languages. A plain string is the same in both (names, tech terms). */
export type Localized = Record<Locale, string>
export type Text = string | Localized

const LocaleContext = createContext<Locale>('en')

export const LocaleProvider = LocaleContext.Provider

export function useLocale() {
  return useContext(LocaleContext)
}

/** Returns a function that picks the current language's version of a Text. */
export function useText() {
  const locale = useLocale()
  return (value: Text) => (typeof value === 'string' ? value : value[locale])
}

export const textDir = (locale: Locale) => (locale === 'ar' ? 'rtl' : 'ltr')

const base = import.meta.env.BASE_URL

/** The page for each language: English at the site root, Arabic at /ar/. */
export const pathFor = (locale: Locale) => (locale === 'ar' ? `${base}ar/` : base)

export function localeFromPath(pathname: string): Locale {
  return pathname.startsWith(`${base}ar/`) || pathname === `${base}ar` ? 'ar' : 'en'
}

/** Picks the plural form for a count, using each language's own rules (Arabic has six). */
export function plural(locale: Locale, count: number, forms: Partial<Record<Intl.LDMLPluralRule, string>>) {
  const rule = new Intl.PluralRules(locale).select(count)
  return (forms[rule] ?? forms.other ?? '').replace('{n}', String(count))
}
