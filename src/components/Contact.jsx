import { useRef, useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Section, { Reveal } from './ui/Section'
import { profile } from '../data/content'

// Web3Forms access key — set VITE_WEB3FORMS_KEY in .env.local (see .env.example).
// This key is meant to be used client-side, so bundling it is expected and safe.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const DETAILS = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

const EMPTY = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const botRef = useRef(null) // honeypot — real users never fill this

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return

    // Bot filled the hidden honeypot → silently pretend success.
    if (botRef.current?.checked) {
      setStatus('success')
      setForm(EMPTY)
      return
    }

    if (!ACCESS_KEY) {
      setStatus('error')
      setStatusMsg(
        'Email isn’t configured yet. Add VITE_WEB3FORMS_KEY to your .env.local file.'
      )
      return
    }

    setStatus('sending')
    setStatusMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: `${profile.name} — Portfolio`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm(EMPTY)
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setStatusMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setStatusMsg('Network error — please try again in a moment.')
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's Connect"
      subtitle="Drop me a message below!"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Details */}
        <Reveal>
          <div className="space-y-6">
            {DETAILS.map((d) => {
              const content = (
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                    <d.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-body)]">
                      {d.label}
                    </p>
                    <p className="font-bold text-[var(--color-ink)]">{d.value}</p>
                  </div>
                </div>
              )
              return d.href ? (
                <a key={d.label} href={d.href} className="block transition hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={d.label}>{content}</div>
              )
            })}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Honeypot — hidden from users, catches bots */}
            <input
              ref={botRef}
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Jane Doe"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="jane@example.com"
            />
            <Field
              label="Message"
              name="message"
              textarea
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell me about your project…"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-500)] px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-500/20 transition hover:bg-[var(--color-accent-600)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={17} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={17} /> Send message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
                <CheckCircle2 size={18} className="text-[var(--color-accent-500)]" />
                Thanks! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                <AlertCircle size={18} className="text-red-500" />
                {statusMsg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({ label, name, error, textarea, ...props }) {
  const base =
    'w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-body)]/60 focus:border-[var(--color-accent-500)] focus:ring-2 focus:ring-[var(--color-accent-100)]'
  const borderClass = error ? 'border-red-400' : 'border-[var(--color-line)]'
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
      >
        {label}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={5} className={`${base} ${borderClass}`} {...props} />
      ) : (
        <input id={name} name={name} className={`${base} ${borderClass}`} {...props} />
      )}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}
