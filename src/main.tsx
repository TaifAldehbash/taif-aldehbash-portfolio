import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque/standard.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
// Arabic glyphs: these only download on pages that show Arabic text.
import '@fontsource-variable/noto-sans-arabic/wght.css'
import '@fontsource-variable/marhey/wght.css'
import './styles/global.css'
import App from './App.tsx'
import { LocaleProvider, localeFromPath, textDir } from './i18n'

const locale = localeFromPath(window.location.pathname)
document.documentElement.lang = locale
document.documentElement.dir = textDir(locale)

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <LocaleProvider value={locale}>
      <App />
    </LocaleProvider>
  </StrictMode>
)

// The production build pre-renders the page into #root, so hydrate it; the dev server serves it empty.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
