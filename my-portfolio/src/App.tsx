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

  return (
    <>
      <SkipLink />
      {/* The phone tab bar comes early in the DOM so keyboard users reach it second, as on desktop. */}
      <TabBar active={active} />
      <SiteHeader active={active} />
      <main id="main" className="pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
        <DesignSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
