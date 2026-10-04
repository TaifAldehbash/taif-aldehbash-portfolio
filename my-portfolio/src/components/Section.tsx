import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  /** Replaces the plain title inside the h2 (the Contact section uses the email). */
  titleNode?: ReactNode
  children: ReactNode
}

/**
 * A page section. The scroll margin cancels the section's own top padding so
 * an anchor jump lands the heading 16px below the top edge on phones and 24px
 * below the sticky header on larger screens.
 */
export function Section({ id, title, titleNode, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="wrap scroll-mt-[-2.5rem] py-14 md:scroll-mt-[1.625rem] lg:scroll-mt-[-0.875rem] lg:py-24"
    >
      <div className="rule-2 pt-4 md:pt-5">
        <h2 id={`${id}-title`} className="text-[1.875rem] leading-9 lg:text-[2.5rem] lg:leading-[2.875rem] lg:tracking-[-0.01em]">
          {titleNode ?? title}
        </h2>
      </div>
      <div className="mt-8 lg:mt-12">{children}</div>
    </section>
  )
}
