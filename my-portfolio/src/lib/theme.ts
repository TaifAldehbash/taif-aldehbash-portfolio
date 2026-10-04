import { useSyncExternalStore } from 'react'

export type ThemeChoice = 'system' | 'light' | 'dark'

const KEY = 'theme'
const LIGHT_BAR = '#FFFFFF'
const DARK_BAR = '#111224'
const listeners = new Set<() => void>()

function read(): ThemeChoice {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : 'system'
  } catch {
    return 'system'
  }
}

function systemDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function effectiveDark(): boolean {
  const choice = read()
  return choice === 'system' ? systemDark() : choice === 'dark'
}

/** Keep the browser toolbar colour in step with the scheme actually showing. */
function syncThemeColor() {
  const color = effectiveDark() ? DARK_BAR : LIGHT_BAR
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((m) => {
    m.content = color
  })
}

function emit() {
  listeners.forEach((l) => l())
}

export function setTheme(choice: ThemeChoice) {
  try {
    if (choice === 'system') localStorage.removeItem(KEY)
    else localStorage.setItem(KEY, choice)
  } catch {
    /* storage unavailable: the attribute still applies for this page view */
  }
  if (choice === 'system') delete document.documentElement.dataset.theme
  else document.documentElement.dataset.theme = choice
  syncThemeColor()
  emit()
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const onChange = () => {
    syncThemeColor()
    cb()
  }
  mql.addEventListener('change', onChange)
  return () => {
    listeners.delete(cb)
    mql.removeEventListener('change', onChange)
  }
}

/** The stored choice: system, light or dark. */
export function useThemeChoice(): ThemeChoice {
  return useSyncExternalStore(subscribe, read, () => 'system')
}

/** Whether the page is currently rendered in the dark scheme. */
export function useIsDark(): boolean {
  return useSyncExternalStore(subscribe, effectiveDark, () => false)
}
