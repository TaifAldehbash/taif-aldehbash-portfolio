export const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'design', label: 'Design' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

interface Props {
  active: string | null
}

/** Desktop header navigation: five text links, Contact framed as the one action. */
export function HeaderNav({ active }: Props) {
  return (
    <nav aria-label="Sections">
      <ul className="flex items-center gap-1">
        {SECTIONS.map((s) => {
          const current = active === s.id
          const isContact = s.id === 'contact'
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={current ? 'true' : undefined}
                className={[
                  'ui block px-3 py-2.5 text-[0.9375rem] font-medium no-underline decoration-2 underline-offset-[6px]',
                  current ? 'text-ink underline' : 'text-ink-2 hover:text-ink hover:underline',
                  isContact ? 'ml-2 border-2 border-ink px-3.5 text-ink' : '',
                ].join(' ')}
              >
                {s.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/** Phone navigation: a fixed bottom bar with the same five labels. */
export function TabBar({ active }: Props) {
  return (
    <nav
      aria-label="Sections"
      className="tab-bar fixed inset-x-0 bottom-0 z-20 border-t-2 border-ink bg-canvas pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="flex">
        {SECTIONS.map((s) => {
          const current = active === s.id
          return (
            <li key={s.id} className="min-w-0 flex-1">
              <a
                href={`#${s.id}`}
                aria-current={current ? 'true' : undefined}
                className={[
                  'ui grid h-14 place-items-center truncate px-1 text-[0.8125rem] font-bold no-underline active:bg-field-2',
                  current ? 'bg-ink text-on-ink' : 'text-ink-2',
                ].join(' ')}
              >
                {s.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
