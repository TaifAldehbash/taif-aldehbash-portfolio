import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import { ArrowDown, Behance, Burst, Check, Copy, GitHub, LinkedIn, Mail } from './Icons'
import s from './Contact.module.css'

type CopyState = 'idle' | 'copied' | 'failed'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [copyState, setCopyState] = useState<CopyState>('idle')
  // Bumped on every click so the status message re-announces on repeat copies.
  const [copyCount, setCopyCount] = useState(0)
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  async function copyEmail() {
    let next: CopyState
    try {
      await navigator.clipboard.writeText(profile.email)
      next = 'copied'
    } catch {
      next = 'failed'
    }
    setCopyState(next)
    setCopyCount((n) => n + 1)
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopyState('idle'), 2400)
  }

  const socials = [
    { label: 'GitHub', href: profile.socials.github, Icon: GitHub },
    { label: 'LinkedIn', href: profile.socials.linkedin, Icon: LinkedIn },
    { label: 'Behance', href: profile.socials.behance, Icon: Behance },
  ].filter((social) => social.href)

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div ref={ref} className={`reveal ${s.frame}`}>
          <div className={s.card}>
            <div className={s.shapes} aria-hidden="true">
              <span className={s.shapeSquare} />
              <Burst className={s.shapeBurst} />
              <span className={s.shapeCircle} />
            </div>
            <p className={s.eyebrow}>Contact</p>
            <h2 id="contact-title" className={s.title}>
              Let&rsquo;s build something <em>together</em>
            </h2>
            <p className={s.text}>{profile.contactText}</p>

            <div className={s.actions}>
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail />
                Email me
              </a>
              <button type="button" className="btn btn-ghost" onClick={copyEmail}>
                {copyState === 'copied' ? <Check /> : <Copy />}
                {copyState === 'copied' ? 'Copied' : 'Copy email'}
              </button>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} className="btn btn-ghost" download>
                  Download CV
                  <span className="visually-hidden"> (PDF)</span>
                  <ArrowDown data-nudge="down" />
                </a>
              )}
              <span className={s.feedback} role="status">
                {copyState !== 'idle' && (
                  <span key={copyCount}>
                    {copyState === 'copied'
                      ? `${profile.email} copied to clipboard`
                      : `Couldn't copy. The address is ${profile.email}`}
                  </span>
                )}
              </span>
            </div>

            {socials.length > 0 && (
              <ul className={s.socials}>
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} className={s.social} target="_blank" rel="noreferrer">
                      <Icon />
                      {label}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
