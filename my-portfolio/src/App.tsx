import { useEffect } from 'react'
import { useActiveSection } from './hooks/useActiveSection'
import { SiteHeader, SkipLink } from './components/SiteHeader'
import { TabBar } from './components/SectionNav'
import { Hero } from './components/Hero'
import { WorkSection } from './components/Work'
import { ExperienceSection } from './components/Experience'
import { SkillsSection } from './components/Skills'
import { DesignSection } from './components/Design'
import { ContactSection } from './components/Contact'

const SECTION_IDS = ['top', 'work', 'experience', 'skills', 'design', 'contact'] as const

function App() {
  const activeRaw = useActiveSection(SECTION_IDS)
  const active = activeRaw === 'top' ? 'work' : activeRaw

  // Print every role expanded, then restore what the reader had open.
  useEffect(() => {
    let previouslyClosed: HTMLDetailsElement[] = []
    const before = () => {
      previouslyClosed = Array.from(document.querySelectorAll<HTMLDetailsElement>('details:not([open])'))
      previouslyClosed.forEach((d) => (d.open = true))
    }
    const after = () => {
      previouslyClosed.forEach((d) => (d.open = false))
      previouslyClosed = []
    }
    window.addEventListener('beforeprint', before)
    window.addEventListener('afterprint', after)
    return () => {
      window.removeEventListener('beforeprint', before)
      window.removeEventListener('afterprint', after)
    }
  }, [])

  return (
    <>
      <SkipLink />
      <SiteHeader active={active} />
      <main id="main" className="pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
        <DesignSection />
        <ContactSection />
      </main>
      <TabBar active={active} />
    </>
  )
}

export default App
