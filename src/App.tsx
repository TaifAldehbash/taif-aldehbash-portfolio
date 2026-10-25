import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Tracks } from './components/Tracks'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
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
