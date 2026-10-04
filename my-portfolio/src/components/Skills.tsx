import { skills, type SkillGroup } from '../content/skills'
import { evidenceFor, lastUsedOf } from '../content/evidence'
import { MarkGlyph } from './PlatformMark'
import { Section } from './Section'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <p className="measure text-[1.0625rem] leading-[1.6875rem] text-ink-2 lg:text-lg lg:leading-[1.8125rem]">
        Each skill names the work it was used in. Nothing here is rated.
      </p>
      <div className="skills-grid mt-8 grid gap-10 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {skills.map((g) => (
          <Group key={g.id} group={g} />
        ))}
      </div>
    </Section>
  )
}

function Group({ group: g }: { group: SkillGroup }) {
  return (
    <div id={`skills-${g.id}`} className="skill-group scroll-mt-20">
      <h3 className="ui flex items-center gap-2 text-sm font-bold leading-4">
        {g.platform && <MarkGlyph platform={g.platform} />}
        {g.label}
      </h3>
      <ul className="mt-3 border-y border-rule">
        {g.items.map((name) => (
          <SkillRow key={name} name={name} />
        ))}
      </ul>
      {g.also && g.also.length > 0 && (
        <p className="ui mt-3 text-sm leading-5 text-ink-2">
          <span className="font-bold">Also:</span> {g.also.join(', ')}
        </p>
      )}
    </div>
  )
}

function SkillRow({ name }: { name: string }) {
  const evidence = evidenceFor(name)
  const last = lastUsedOf(name)
  return (
    <li className="border-t border-rule py-2.5 first:border-t-0 md:grid md:grid-cols-[9.5rem_1fr] md:gap-4">
      <span className="text-[1.0625rem] leading-[1.6875rem]">{name}</span>
      {evidence.length > 0 && (
        <span className="ui block text-sm leading-5 text-ink-2 md:pt-1">
          Used in{' '}
          {evidence.map((e, i) => (
            <span key={e.href}>
              <a href={e.href}>{e.label}</a>
              {i < evidence.length - 2 ? ', ' : i === evidence.length - 2 ? ' and ' : ''}
            </span>
          ))}
          {last === 'now' ? ', in use now.' : last ? `, last used ${last}.` : '.'}
        </span>
      )}
    </li>
  )
}
