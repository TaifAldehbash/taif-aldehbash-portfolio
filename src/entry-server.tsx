import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { LocaleProvider, textDir, type Locale } from './i18n'

export { headTags } from './seo'
export { locales, textDir } from './i18n'

/** Renders one language's page to HTML at build time (see scripts/prerender.mjs). */
export function render(locale: Locale) {
  return renderToString(
    <StrictMode>
      <LocaleProvider value={locale}>
        <App />
      </LocaleProvider>
    </StrictMode>,
  )
}

/** Attributes for the page's <html> tag. */
export function htmlAttributes(locale: Locale) {
  return `lang="${locale}" dir="${textDir(locale)}"`
}
