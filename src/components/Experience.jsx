import { Briefcase, GraduationCap } from 'lucide-react'
import Section, { Reveal } from './ui/Section'
import { experience, education } from '../data/content'

function Timeline({ icon: Icon, heading, items }) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-ink)]">{heading}</h3>
      </div>

      <div className="relative space-y-8 border-l border-[var(--color-line)] pl-8">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[2.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[var(--color-accent-500)] ring-1 ring-[var(--color-accent-200)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-600)]">
                {item.period}
              </span>
              <h4 className="mt-1 text-base font-bold text-[var(--color-ink)]">
                {item.role}
              </h4>
              <p className="text-sm font-medium text-[var(--color-body)]">
                {item.org}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="My journey"
      title="Education & Experience"
    >
      <div className="grid gap-12 md:grid-cols-2">
        <Timeline icon={GraduationCap} heading="Education" items={education} />
        <Timeline icon={Briefcase} heading="Experience" items={experience} />
      </div>
    </Section>
  )
}
