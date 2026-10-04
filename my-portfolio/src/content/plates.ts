/**
 * Fact plates: the figure shown beside a project when no screens can be shown
 * (client work) or alongside its icon. Plain facts, no illustrations.
 */
export interface PlateLink {
  text: string
  href: string
}

export interface PlateRow {
  term: string
  detail: string | PlateLink[]
  /** Optional sentence rendered after the links. */
  note?: string
}

export const plates: Record<string, PlateRow[]> = {
  'finblade-ai': [
    {
      term: 'Client work',
      detail: 'Screens are shown on request.',
    },
    { term: 'Product site', detail: [{ text: 'finblade.ai', href: 'https://finblade.ai' }] },
    { term: 'Modules', detail: 'Workflow AI, Apps, Data Management' },
    { term: 'Since', detail: 'April 2024' },
  ],
  minute: [
    {
      term: 'Apps',
      detail: [
        { text: 'Minute on the App Store', href: 'https://apps.apple.com/sa/app/minute/id1633915418' },
        { text: 'Minute Driver on the App Store', href: 'https://apps.apple.com/sa/app/minute-driver/id1634657781' },
      ],
    },
    { term: 'Platform', detail: 'iOS, Swift and UIKit' },
    { term: 'Released', detail: '2023, both apps on the App Store' },
  ],
  nahaj: [
    {
      term: 'App Store',
      detail: [{ text: 'Nahaj for iPad', href: 'https://apps.apple.com/sa/app/nahaj-%D9%86%D9%87%D8%AC/id1601459555' }],
    },
    {
      term: 'Demos',
      detail: [
        { text: 'Student demo', href: 'https://www.youtube.com/watch?v=QSALU3Rya8c' },
        { text: 'Admin demo', href: 'https://youtu.be/D2UWrvB_WgM' },
      ],
      note: 'Both on YouTube.',
    },
    { term: 'Built with', detail: 'Flutter, Unity and C#, Vuforia, Firebase' },
  ],
  fastway: [
    {
      term: 'Demos',
      detail: [
        { text: 'Customer demo', href: 'https://youtu.be/O0SezM2mXLo' },
        { text: 'Courier demo', href: 'https://youtube.com/shorts/ao3oAvPgCNw' },
      ],
      note: 'Both on YouTube.',
    },
    { term: 'Source', detail: [{ text: 'GitHub', href: 'https://github.com/TaifAldehbash/Fastway-Delivery-Application' }] },
    { term: 'Built with', detail: 'Swift, SwiftUI, Apple Maps, Cloud Firestore' },
  ],
}
