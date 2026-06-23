import { Check } from 'lucide-react'
import Section, { Reveal } from './ui/Section'
import Counter from './ui/Counter'
import { profile, stats, skills } from '../data/content'

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Image */}
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-[var(--color-mist)]" />
            <img
              src={profile.portrait}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1}>
          <span className="eyebrow">About me</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Full-stack engineer who loves building for the web
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-body)]">
            I&apos;m {profile.name}, a {profile.location} based
            software engineer who loves turning ideas into functional,
            user-friendly web applications. While my current work focuses on frontend development, 
            I enjoy working across the stack, building web APIs and
            wiring them up to clean, modern frontends.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-body)]">
            Over the years I&apos;ve shipped features with React, TypeScript, and
            Django across teams at companies like Apple, First American, and Endpoint.
            Lately I&apos;ve been exploring how AI tools like Claude and
            Cursor can speed up everything from migrating legacy apps to writing
            better code.
          </p>

          {/* Skill chips */}
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
              >
                <Check size={16} className="text-[var(--color-accent-500)]" />
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
