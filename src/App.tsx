import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Tracks } from './components/Tracks'
import { Work } from './components/Work'
import { ui } from './data/ui'
import { useText } from './i18n'

export default function App() {
  const t = useText()

  return (
    <>
      <a href="#main" className="skip-link">
        {t(ui.skipToContent)}
      </a>
      <div className="backdrop" aria-hidden="true" />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <CaseStudies />
        <Tracks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
