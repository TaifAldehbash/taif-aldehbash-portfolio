import type { PlatformKey } from '../lib/platforms'
import { PLATFORM_LABEL, PLATFORM_ORDER } from '../lib/platforms'

/**
 * The mark: four shapes borrowed from the grammar of the Nahaj app icon
 * (a quarter disc, a circle, a capsule and a diamond), one per platform.
 * On a project only that project's platforms are lit. At large sizes the
 * unlit shapes stay as outlines so the whole key is visible; at glyph sizes
 * only the lit shapes are drawn so the glyph stays legible.
 *   iOS = peach quarter disc, Flutter = teal circle, Web = pink capsule, Design = plum diamond.
 */
interface MarkProps {
  lit: ReadonlySet<PlatformKey>
  size: number
  /** Accessible name. When omitted the mark is decorative (platform words follow in text). */
  label?: string
  className?: string
}

const MARK_COLOR: Record<PlatformKey, string> = {
  ios: 'var(--c-ios-mark)',
  flutter: 'var(--c-flutter-mark)',
  web: 'var(--c-web-mark)',
  design: 'var(--c-design-mark)',
}

const SHAPES: Record<PlatformKey, (props: Record<string, unknown>) => React.ReactElement> = {
  ios: (p) => <path d="M50 104 H10 A40 40 0 0 1 50 64 Z" {...p} />,
  flutter: (p) => <circle cx="78" cy="38" r="26" {...p} />,
  web: (p) => <rect x="8" y="50" width="84" height="28" rx="14" transform="rotate(-32 50 64)" {...p} />,
  design: (p) => <path d="M100 72 L112 84 L100 96 L88 84 Z" {...p} />,
}

export function PlatformMark({ lit, size, label, className }: MarkProps) {
  const small = size <= 32
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      style={{ isolation: 'isolate', flexShrink: 0 }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {PLATFORM_ORDER.map((key) => {
        if (lit.has(key)) {
          return <g key={key}>{SHAPES[key]({ fill: MARK_COLOR[key], fillOpacity: 'var(--mark-opacity)' })}</g>
        }
        if (small) return null
        return <g key={key}>{SHAPES[key]({ fill: 'none', stroke: 'var(--c-ink-3)', strokeWidth: 6, strokeLinejoin: 'round' })}</g>
      })}
    </svg>
  )
}

/** One shape of the mark at label size, in the platform's sign hue. Decorative; always followed by its word. */
export function MarkGlyph({ platform, size = 12, className }: { platform: PlatformKey; size?: number; className?: string }) {
  const fill = `var(--c-${platform})`
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" className={className} style={{ flexShrink: 0 }}>
      {platform === 'ios' && <path d="M22 22 H2 A20 20 0 0 1 22 2 Z" fill={fill} />}
      {platform === 'flutter' && <circle cx="12" cy="12" r="11" fill={fill} />}
      {platform === 'web' && <rect x="1" y="6" width="22" height="12" rx="6" transform="rotate(-25 12 12)" fill={fill} />}
      {platform === 'design' && <path d="M12 1 L23 12 L12 23 L1 12 Z" fill={fill} />}
    </svg>
  )
}

/** The legend: four glyphs with their words. */
export function MarkKey({ className = '' }: { className?: string }) {
  return (
    <ul className={`ui flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-ink ${className}`} aria-label="Key to the mark">
      {PLATFORM_ORDER.map((p) => (
        <li key={p} className="flex items-center gap-2">
          <MarkGlyph platform={p} />
          {PLATFORM_LABEL[p]}
        </li>
      ))}
    </ul>
  )
}
