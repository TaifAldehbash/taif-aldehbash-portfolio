import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useText } from '../i18n'
import s from './Footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  const t = useText()

  return (
    <footer className={`container ${s.footer}`}>
      {/* The year is baked in at build time; this skips the warning if a visit crosses New Year. */}
      <p suppressHydrationWarning>
        © {year} {t(profile.name)}
      </p>
      <p>{t(ui.footer.builtWith)}</p>
      <a href="#top" className={s.top}>
        {t(ui.footer.backToTop)} ↑
      </a>
    </footer>
  )
}
