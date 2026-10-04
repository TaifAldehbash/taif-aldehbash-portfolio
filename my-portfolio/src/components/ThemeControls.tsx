import { setTheme, useIsDark, useThemeChoice, type ThemeChoice } from '../lib/theme'

/** Header button: one constant label, underlined and pressed while the dark scheme is showing. */
export function ThemeToggle() {
  const isDark = useIsDark()
  return (
    <button
      type="button"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="ui h-11 px-3 text-sm font-medium text-ink-2 decoration-2 underline-offset-[6px] hover:text-ink hover:underline aria-[pressed=true]:text-ink aria-[pressed=true]:underline"
    >
      Dark
    </button>
  )
}

const CHOICES: { value: ThemeChoice; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

/** Three-way chooser in the footer: follow the system, or force light or dark. */
export function ThemeControl() {
  const choice = useThemeChoice()
  return (
    <fieldset className="theme-control m-0 border-0 p-0">
      <legend className="sr-only">Colour scheme</legend>
      <div className="segment">
        {CHOICES.map((c) => (
          <label key={c.value}>
            <input type="radio" name="theme" value={c.value} checked={choice === c.value} onChange={() => setTheme(c.value)} />
            {c.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print-button ui h-11 border-2 border-rule-2 px-3.5 text-sm font-medium hover:bg-ink hover:text-on-ink"
    >
      Print this page
    </button>
  )
}
