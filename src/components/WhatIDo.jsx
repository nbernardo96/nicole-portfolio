import {
  Code2,
  Server,
  Layers,
  FlaskConical,
  Sparkles,
  RefreshCw,
  ArrowUpRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import { whatIDo } from '../data/content'

const ICONS = { Code2, Server, Layers, FlaskConical, Sparkles, RefreshCw }

export default function WhatIDo() {
  return (
    <Section
      id="what-i-do"
      className="bg-[var(--color-mist)]"
      eyebrow="What I do"
      title="Building full-stack web applications, end to end"
      subtitle="From frontend interfaces to backend APIs, here's how I help teams design and ship for the web."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whatIDo.map((item, i) => {
          const Icon = ICONS[item.icon]
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
              className="group relative flex flex-col rounded-3xl border border-[var(--color-line)] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)] transition group-hover:bg-[var(--color-accent-500)] group-hover:text-white">
                {Icon && <Icon size={24} />}
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                {item.desc}
              </p>
              <ArrowUpRight
                size={18}
                className="absolute right-6 top-7 text-[var(--color-accent-500)] opacity-0 transition group-hover:opacity-100"
              />
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
