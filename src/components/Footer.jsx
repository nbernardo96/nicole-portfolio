import BrandIcon from './ui/BrandIcon'
import { profile, socials, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-mist)] py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a
          href="#home"
          className="font-serif text-2xl font-bold tracking-tight text-[var(--color-ink)]"
        >
          {profile.firstName}
          <span className="text-[var(--color-accent-500)]">.</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.slice(0, 6).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-body)] transition hover:text-[var(--color-accent-600)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
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
      </div>

      <p className="mt-8 text-center text-xs text-[var(--color-body)]">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
