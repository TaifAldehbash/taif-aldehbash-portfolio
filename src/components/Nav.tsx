import { useActiveSection } from '../hooks/useActiveSection'
import { Sparkle } from './Icons'
import s from './Nav.module.css'

const links = [
  { id: 'work', label: 'Work', shape: s.blob },
  { id: 'about', label: 'About', shape: s.square },
  { id: 'contact', label: 'Contact', shape: s.circle },
]

const sectionIds = links.map((link) => link.id)

export function Nav() {
  const active = useActiveSection(sectionIds)

  return (
    <header className={s.header}>
      <a href="#top" className={s.logo}>
        <Sparkle className={s.logoMark} />
        TA
        <span className="visually-hidden">, Taif Aldehbash, back to top</span>
      </a>

      <nav aria-label="Main">
        <ul className={s.links}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${s.link} ${link.shape}`}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
