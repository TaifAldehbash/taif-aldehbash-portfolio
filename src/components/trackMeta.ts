import type { TrackId } from '../data/profile'
import { Browser, Database, Phone } from './Icons'

export const trackMeta: Record<TrackId, { color: string; Icon: typeof Phone }> = {
  mobile: { color: 'var(--track-mobile)', Icon: Phone },
  web: { color: 'var(--track-web)', Icon: Browser },
  backend: { color: 'var(--track-backend)', Icon: Database },
}
