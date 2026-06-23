import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Thin Embla wrapper for the Reviews slider.
export default function Carousel({
  children,
  options = { align: 'start', loop: true },
  slideClass = 'min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]',
  controls = true,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback((api) => {
    setCanPrev(api.canScrollPrev())
    setCanNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    const raf = requestAnimationFrame(() => onSelect(emblaApi))
    emblaApi.on('select', onSelect).on('reInit', onSelect)
    return () => {
      cancelAnimationFrame(raf)
      emblaApi.off('select', onSelect).off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const slides = Array.isArray(children) ? children : [children]

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {slides.map((slide, i) => (
            <div key={i} className={slideClass}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {controls && (
        <div className="mt-10 flex justify-center gap-3">
          <Btn onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} label="Previous">
            <ChevronLeft size={18} />
          </Btn>
          <Btn onClick={() => emblaApi?.scrollNext()} disabled={!canNext} label="Next">
            <ChevronRight size={18} />
          </Btn>
        </div>
      )}
    </div>
  )
}

function Btn({ onClick, disabled, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition hover:border-[var(--color-accent-500)] hover:bg-[var(--color-accent-500)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-ink)]"
    >
      {children}
    </button>
  )
}
