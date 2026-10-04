export const profile = {
  name: 'Taif Aldehbash',
  fullName: 'Taif Malouh Aldehbash',
  /**
   * Arabic rendering of the name. Ask Taif for the exact spelling; do not
   * guess. The page renders the line only when this is non-empty.
   */
  arabicName: '',
  title: 'Software Engineer',
  subtitle: 'iOS, Flutter and web front-end',
  location: 'Riyadh, Saudi Arabia',
  timezone: 'GMT+3',
  email: 'taifmaldehbash@gmail.com',
  /**
   * The opening paragraph, in the first person. Three plain sentences.
   */
  intro:
    'I am a software engineer in Riyadh. For the last three years I have built native iOS apps in Swift, Flutter apps, and web front-ends in Vue and Nuxt, including a year as the only iOS developer behind two apps on the App Store. I also trained in UI/UX design, so I usually draw the screens I then build.',
  /** Short line used in metadata. */
  tagline: 'Software engineer in Riyadh shipping native iOS, Flutter and web front-ends.',
  languages: [
    { name: 'Arabic', level: 'native' },
    { name: 'English', level: 'fluent' },
  ],
  links: {
    github: { label: 'GitHub', url: 'https://github.com/TaifAldehbash', display: 'github.com/TaifAldehbash' },
    linkedin: {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/taif-aldehbash',
      display: 'linkedin.com/in/taif-aldehbash',
    },
    /**
     * Behance profile. The site hides every Behance link while this is the
     * placeholder root URL. Replace with the real profile URL to enable them.
     */
    behance: { label: 'Behance', url: 'https://www.behance.net/', display: 'behance.net' },
  },
  /**
   * Optional status line shown in Contact, in Taif's own words. Left empty
   * on purpose: the site must not announce a job search on her behalf.
   * Example: 'Open to front-end and mobile roles, in Riyadh or remote.'
   */
  availability: '',
} as const

export type Profile = typeof profile

/** True once the Behance URL points at a real profile rather than the site root. */
export function hasBehance(): boolean {
  const url = profile.links.behance.url.replace(/\/$/, '')
  return url !== 'https://www.behance.net' && url !== 'https://behance.net'
}
