import { useEffect, useState } from 'react'

// Cycles through `words`, typing then deleting each — a lightweight replacement
// for Typed.js. Returns the current visible substring.
export default function useTypewriter(
  words,
  { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}
) {
  const [index, setIndex] = useState(0) // which word
  const [text, setText] = useState('') // visible substring
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const word = words[index % words.length]

    // Decide the next transition; every setState runs inside the timeout so we
    // never call setState synchronously within the effect body.
    let delay
    let action
    if (!deleting && text === word) {
      // Finished typing → pause, then start deleting
      delay = pause
      action = () => setDeleting(true)
    } else if (deleting && text === '') {
      // Finished deleting → advance to the next word
      delay = typeSpeed
      action = () => {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }
    } else {
      const delta = deleting ? -1 : 1
      const next = word.slice(0, text.length + delta)
      delay = deleting ? deleteSpeed : typeSpeed
      action = () => setText(next)
    }

    const t = setTimeout(action, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}
