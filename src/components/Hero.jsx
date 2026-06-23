import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, ExternalLink } from 'lucide-react'
import BrandIcon from './ui/BrandIcon'
import useTypewriter from '../hooks/useTypewriter'
import { profile, socials } from '../data/content'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--color-mist)] pt-28 pb-20"
    >
      {/* Soft cyan glow accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-accent-200)] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-[var(--color-accent-100)] opacity-50 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
            Hi, I&apos;m {profile.name}
          </h1>

          <div className="mt-4 flex min-h-[2.5rem] items-center text-xl font-medium text-[var(--color-body)] sm:text-2xl">
            <span>I&apos;m a &nbsp;</span>
            <span className="font-semibold text-[var(--color-accent-600)]">
              {typed}
            </span>
            <span className="caret h-6 sm:h-7" aria-hidden="true" />
          </div>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-body)]">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-500)] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-500/20 transition hover:bg-[var(--color-accent-600)]"
            >
              Let's Connect <ArrowDown size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent-500)]"
            >
              <ExternalLink size={18} /> Resume
            </a>
          </div>

          <div className="mt-10 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition hover:border-[var(--color-accent-500)] hover:bg-[var(--color-accent-500)] hover:text-white"
              >
                <BrandIcon name={s.icon} size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[var(--color-accent-400)] to-[var(--color-accent-200)]" />
          <img
            src={profile.portrait}
            alt={profile.name}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            loading="eager"
          />
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--color-line)] bg-white px-5 py-3 shadow-lg shadow-black/5">
            <p className="font-serif text-2xl font-bold text-[var(--color-ink)]">
              6+ yrs
            </p>
            <p className="text-xs text-[var(--color-body)]">of experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
