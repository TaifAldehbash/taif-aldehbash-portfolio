import { useSyncExternalStore } from 'react'

export type ThemeChoice = 'system' | 'light' | 'dark'

const KEY = 'theme'
const listeners = new Set<() => void>()

function read(): ThemeChoice {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : 'system'
  } catch {
    return 'system'
  }
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
  emit()
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  mql.addEventListener('change', cb)
  return () => {
    listeners.delete(cb)
    mql.removeEventListener('change', cb)
  }
}

/** The stored choice: system, light or dark. */
export function useThemeChoice(): ThemeChoice {
  return useSyncExternalStore(subscribe, read, () => 'system')
}

/** Whether the page is currently rendered in the dark scheme. */
export function useIsDark(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => {
      const choice = read()
      if (choice !== 'system') return choice === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    () => false,
  )
}
