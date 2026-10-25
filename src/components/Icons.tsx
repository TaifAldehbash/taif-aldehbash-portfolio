import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const stroke = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

export const ArrowDown = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
)

export const ArrowUpRight = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)

export const Mail = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export const Copy = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="8" y="8" width="14" height="14" rx="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)

export const Check = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const Pause = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
)

export const Play = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
  </svg>
)

export const Phone = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M11 18.5h2" />
  </svg>
)

export const Browser = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2.5" />
    <path d="M2 9h20M5.5 6.5h.01M8.5 6.5h.01M11.5 6.5h.01" />
  </svg>
)

export const Database = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
)

export const GitHub = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .31.21.69.82.57A12 12 0 0 0 12 .3" />
  </svg>
)

export const LinkedIn = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

export const Behance = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.97 16.93a2.56 2.56 0 0 0 1.9.67c.55.02 1.08-.15 1.53-.47.36-.24.64-.59.78-.99h2.59a5.09 5.09 0 0 1-1.9 2.9 5.3 5.3 0 0 1-3.1.88 5.84 5.84 0 0 1-2.28-.44 4.87 4.87 0 0 1-1.72-1.2 5.66 5.66 0 0 1-1.08-1.88 7.06 7.06 0 0 1-.38-2.39c0-.8.13-1.6.4-2.35a5.31 5.31 0 0 1 5.08-3.6 4.87 4.87 0 0 1 2.38.56c.66.36 1.23.87 1.67 1.48.45.65.77 1.37.94 2.14.2.82.26 1.66.2 2.5h-7.7c-.06.8.19 1.58.69 2.19ZM6.95 4.08c.65-.01 1.3.06 1.93.2.53.12 1.04.33 1.49.64.42.3.75.71.96 1.18.24.58.36 1.2.34 1.83a3.5 3.5 0 0 1-.5 1.96 3.73 3.73 0 0 1-1.51 1.29 3.59 3.59 0 0 1 2.03 1.44c.46.74.7 1.61.67 2.49a4.6 4.6 0 0 1-.42 2.03 3.95 3.95 0 0 1-1.17 1.41 5.11 5.11 0 0 1-1.68.81 7.14 7.14 0 0 1-1.93.26H0V4.08h6.95Zm-.24 12.9c.31 0 .62-.03.92-.1.27-.06.53-.17.76-.33.23-.16.41-.37.54-.62.14-.32.2-.66.19-1.01a2.08 2.08 0 0 0-.64-1.71 2.62 2.62 0 0 0-1.7-.51H3.24v4.28h3.47Zm13.64-5.96a2.13 2.13 0 0 0-1.66-.62c-.4-.01-.8.08-1.16.26-.28.16-.53.37-.74.62-.18.24-.31.5-.4.79-.07.24-.12.49-.13.73h4.77a3.24 3.24 0 0 0-.68-1.78ZM6.53 10.37c.51.02 1.01-.13 1.42-.43.4-.36.61-.88.56-1.42.01-.3-.05-.61-.18-.89a1.3 1.3 0 0 0-.49-.53 1.85 1.85 0 0 0-.71-.28 3.97 3.97 0 0 0-.84-.07H3.24v3.63h3.29ZM21.62 5.12h-5.98v1.53h5.98V5.12Z" />
  </svg>
)

function starPath(points: number, outer: number, inner: number) {
  const step = Math.PI / points
  return (
    Array.from({ length: points * 2 }, (_, i) => {
      const r = i % 2 === 0 ? outer : inner
      const a = i * step - Math.PI / 2
      return `${i === 0 ? 'M' : 'L'}${(50 + r * Math.cos(a)).toFixed(2)} ${(50 + r * Math.sin(a)).toFixed(2)}`
    }).join(' ') + 'Z'
  )
}

const burst = starPath(12, 46, 33)
const sparkle = 'M50 0C53 35 65 47 100 50C65 53 53 65 50 100C47 65 35 53 0 50C35 47 47 35 50 0Z'

/** Chunky sunburst, as in the playful shape set. */
export const Burst = (props: IconProps) => (
  <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
    <path d={burst} fill="currentColor" strokeLinejoin="round" stroke="currentColor" strokeWidth="6" />
  </svg>
)

/** Four-point twinkle used as a separator and accent. */
export const Sparkle = (props: IconProps) => (
  <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
    <path d={sparkle} fill="currentColor" />
  </svg>
)
