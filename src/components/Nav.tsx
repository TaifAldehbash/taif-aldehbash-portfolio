import type { MouseEvent } from 'react'
import { ui } from '../data/ui'
import { useActiveSection } from '../hooks/useActiveSection'
import { pathFor, useLocale, useText } from '../i18n'
import { Sparkle } from './Icons'
import s from './Nav.module.css'

const links = [
  { id: 'work', label: ui.nav.work, shape: s.blob },
  { id: 'about', label: ui.nav.about, shape: s.square },
  { id: 'contact', label: ui.nav.contact, shape: s.circle },
]

const sectionIds = links.map((link) => link.id)

export function Nav() {
  const active = useActiveSection(sectionIds)
  const locale = useLocale()
  const t = useText()
  const other = locale === 'ar' ? 'en' : 'ar'

  // Keep the reader in the same section when switching language.
  function keepSection(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = pathFor(other) + window.location.hash
  }

  return (
    <header className={s.header}>
      <div className={s.start}>
        <a href="#top" className={s.logo}>
          <Sparkle className={s.logoMark} />
          <span className={s.logoText}>TA</span>
          <span className="visually-hidden">{t(ui.backToTopLabel)}</span>
        </a>
        <a href={pathFor(other)} className={s.lang} lang={other} hrefLang={other} onClick={keepSection}>
          <span className={s.langLong}>{ui.switchTo[locale]}</span>
          <span className={s.langShort} aria-hidden="true">
            {ui.switchToShort[locale]}
          </span>
        </a>
      </div>

      <nav aria-label={t(ui.mainNav)}>
        <ul className={s.links}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${s.link} ${link.shape}`}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
