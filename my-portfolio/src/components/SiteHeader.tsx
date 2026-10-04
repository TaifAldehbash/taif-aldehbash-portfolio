import { HeaderNav } from './SectionNav'
import { ThemeToggle } from './ThemeControls'
import { profile } from '../content/profile'

export function SiteHeader({ active }: { active: string | null }) {
  return (
    <header className="site-header sticky top-0 z-20 hidden border-b-2 border-ink bg-canvas md:block">
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <a href="#top" className="font-serif text-xl font-semibold no-underline">
          {profile.name}
        </a>
        <div className="flex items-center gap-3">
          <HeaderNav active={active} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export function SkipLink() {
  return (
    <a
      href="#main"
      className="skip-link ui sr-only font-bold no-underline focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-on-ink"
    >
      Skip to content
    </a>
  )
}
