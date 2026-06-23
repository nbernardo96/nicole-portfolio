import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from './ui/Section'
import { projects, projectFilters } from '../data/content'

function ProjectCard({ project }) {
  return (
    <motion.a
      layout
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group block overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Hover overlay: dark background + description */}
        <div className="absolute inset-0 flex flex-col justify-end bg-[var(--color-ink)]/75 p-6 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-ink)]">
            <ArrowUpRight size={20} />
          </span>
          <p className="text-sm leading-relaxed text-white">
            {project.desc}
          </p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-600)]">
          {project.tag}
        </p>
        <h3 className="mt-1 text-lg font-bold text-[var(--color-ink)]">
          {project.title}
        </h3>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  )

  return (
    <Section
      id="projects"
      className="bg-[var(--color-mist)]"
      eyebrow="Recent work"
      title="Selected projects"
      subtitle="A few things I've designed and built. Filter by category to explore."
    >
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === f.key
                ? 'bg-[var(--color-accent-500)] text-white'
                : 'border border-[var(--color-line)] text-[var(--color-body)] hover:border-[var(--color-accent-500)] hover:text-[var(--color-accent-600)]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Animated grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
