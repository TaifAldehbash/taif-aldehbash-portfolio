export const profile = {
  name: 'Taif Aldehbash',
  fullName: 'Taif Malouh Aldehbash',
  arabicName: 'طيف الدهبش',
  title: 'Software Engineer',
  subtitle: 'iOS, Flutter and web front-end',
  location: 'Riyadh, Saudi Arabia',
  timezone: 'GMT+3',
  email: 'taifmaldehbash@gmail.com',
  yearsShipping: '3+',
  /**
   * One-paragraph introduction. Written to be read, not scanned: concrete nouns,
   * no adjectives doing the work.
   */
  intro:
    'I build the parts of software people actually touch. Over the last three years that has meant native iOS in Swift, cross-platform apps in Flutter, and web front-ends in Vue, Nuxt and React, for a year of it as the only iOS developer on two production apps. I trained in UI/UX design as well as software engineering, so I tend to own a feature from the first wireframe to the App Store release.',
  /** Short line used in metadata and the header. */
  tagline: 'Software engineer in Riyadh shipping native iOS, Flutter and web front-ends.',
  languages: [
    { name: 'Arabic', level: 'native' },
    { name: 'English', level: 'fluent' },
  ],
  links: {
    github: { label: 'GitHub', url: 'https://github.com/TaifAldehbash', handle: 'TaifAldehbash' },
    linkedin: { label: 'LinkedIn', url: 'https://linkedin.com/in/taif-aldehbash', handle: 'taif-aldehbash' },
    // TODO(Taif): replace with your actual Behance profile URL.
    behance: { label: 'Behance', url: 'https://www.behance.net/', handle: 'Behance' },
  },
  /** Current status line. Edit freely. */
  availability: 'Open to senior front-end and mobile roles, in Riyadh or remote.',
} as const

export type Profile = typeof profile
