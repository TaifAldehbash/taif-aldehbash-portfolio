/**
 * Date helpers for the content files, which write dates the way a résumé does:
 * "Apr 2024", "Sept 2024", "2021", "Present".
 */

const MONTHS: Record<string, number> = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  sept: 9,
  oct: 10,
  nov: 11,
  dec: 12,
}

export const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export interface YearMonth {
  year: number
  /** 1-12, or null when only the year is known. */
  month: number | null
}

/** Start month of the timeline. */
export const EPOCH: YearMonth = { year: 2021, month: 1 }

/** Build date injected by Vite (YYYY-MM-DD). */
export function buildDate(): YearMonth {
  const [y, m] = __BUILD_DATE__.split('-').map(Number)
  return { year: y, month: m }
}

export function parseYearMonth(text: string): YearMonth | 'present' {
  const t = text.trim()
  if (/^present$/i.test(t) || /^now$/i.test(t)) return 'present'
  const parts = t.split(/\s+/)
  if (parts.length === 1) {
    const year = Number(parts[0])
    if (!Number.isFinite(year)) throw new Error(`Unparseable date "${text}"`)
    return { year, month: null }
  }
  const month = MONTHS[parts[0].toLowerCase().replace('.', '')]
  const year = Number(parts[1])
  if (!month || !Number.isFinite(year)) throw new Error(`Unparseable date "${text}"`)
  return { year, month }
}

/** Zero-based month index from the epoch. Year-only dates use the given fallback month. */
export function monthIndex(d: YearMonth, fallbackMonth: number): number {
  return (d.year - EPOCH.year) * 12 + (d.month ?? fallbackMonth) - 1
}

/** Inclusive month span for a role, in epoch month indexes. */
export interface Span {
  start: number
  end: number
  /** True when the role is ongoing at build time. */
  open: boolean
  /** True when only the year was recorded. */
  yearOnly: boolean
}

export function spanOf(start: string, end: string, now: YearMonth = buildDate()): Span {
  const s = parseYearMonth(start)
  const e = parseYearMonth(end)
  if (s === 'present') throw new Error('A role cannot start in the present')
  const yearOnly = s.month === null
  const startIdx = monthIndex(s, 1)
  if (e === 'present') return { start: startIdx, end: monthIndex(now, 1), open: true, yearOnly }
  return { start: startIdx, end: monthIndex(e, 12), open: false, yearOnly: yearOnly || e.month === null }
}

export function overlap(a: Span, b: Span): { start: number; end: number } | null {
  const start = Math.max(a.start, b.start)
  const end = Math.min(a.end, b.end)
  return end >= start ? { start, end } : null
}

export function indexToYearMonth(index: number): YearMonth {
  return { year: EPOCH.year + Math.floor(index / 12), month: (index % 12) + 1 }
}

export function formatMonthYear(d: YearMonth, style: 'long' | 'short' = 'long'): string {
  if (d.month === null) return String(d.year)
  const names = style === 'long' ? MONTH_NAMES : MONTH_SHORT
  return `${names[d.month - 1]} ${d.year}`
}

/** "2024-04" or "2021" for <time datetime>. */
export function toDatetime(d: YearMonth): string {
  return d.month === null ? String(d.year) : `${d.year}-${String(d.month).padStart(2, '0')}`
}

/** Formats the build date as "4 October 2026". */
export function formatBuildDate(): string {
  const [y, m, d] = __BUILD_DATE__.split('-').map(Number)
  return `${d} ${MONTH_NAMES[m - 1]} ${y}`
}

/**
 * Last year a résumé period string refers to: "2024 – now" -> "now",
 * "2021 – 2022" -> 2022, "Jul 2023" -> 2023.
 */
export function lastYearOf(period: string): number | 'now' {
  const tail = period.split(/[–-]/).pop()?.trim() ?? period
  if (/now|present/i.test(tail)) return 'now'
  const year = Number(tail.match(/\d{4}/)?.[0])
  return Number.isFinite(year) ? year : 'now'
}
