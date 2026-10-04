/**
 * UI/UX case studies published on Behance. The portfolio links to the Behance
 * profile; individual project URLs can be added to `url` when available.
 * Descriptions stay at the level of the resume: name, type and focus.
 */
export interface CaseStudy {
  id: string
  name: string
  kind: string
  focus: string
  url?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'vox',
    name: 'Vox Cinema',
    kind: 'App redesign',
    focus: 'Accessibility and navigation flow',
  },
  {
    id: 'rakaz',
    name: 'Rakaz AI',
    kind: 'Platform design',
    focus: 'Real-estate insights',
  },
  {
    id: 'najid',
    name: 'Najid',
    kind: 'App design',
    focus: 'Emergency response',
  },
]
