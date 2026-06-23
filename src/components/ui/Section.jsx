import { motion } from 'framer-motion'

// Shared section wrapper: consistent spacing, optional eyebrow + heading,
// centered header, and a Framer Motion scroll-reveal for the header block.
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = '',
  align = 'center',
  children,
}) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : ''
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`mb-14 flex max-w-2xl flex-col gap-4 ${alignClass}`}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.75rem] md:leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base leading-relaxed text-[var(--color-body)]">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

// Reusable reveal wrapper for staggered children.
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
