import { profile } from '../data/profile'
import s from './Footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={`container ${s.footer}`}>
      {/* The year is baked in at build time; this skips the warning if a visit crosses New Year. */}
      <p suppressHydrationWarning>
        © {year} {profile.name}
      </p>
      <p>Designed and built with React, TypeScript &amp; Vite</p>
      <a href="#top" className={s.top}>
        Back to top ↑
      </a>
    </footer>
  )
}
