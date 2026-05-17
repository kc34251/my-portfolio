import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import slide1 from './assets/Mantra.webp'
import slide2 from './assets/MOSHPIT.webp'
import slide3 from './assets/Enlightenment.webp' 
import slide4 from './assets/Feathers.webp'
import slide5 from './assets/Mirage.webp'
import slide6 from './assets/Resonance.webp'
import slide7 from './assets/RODEO.webp'
import slide8 from './assets/Sublime.webp'
import slide9 from './assets/The Color Bricks.webp'
import slide10 from './assets/Under The Sun.webp'

const artworks = [
  {
    id: 1,
    title: 'MANTRA',
    year: 2025,
    medium: 'charcoal on paper',
    size: '71 x 44 in',
    src: slide1,
    alt: 'MANTRA charcoal artwork',
  },
  {
    id: 2,
    title: 'MONK MOSH',
    year: 2024,
    medium: 'charcoal & acrylic on paper',
    size: '30 x 22 in',
    src: slide2,
    alt: 'MONK MOSH charcoal and acrylic artwork',
  },
  {
    id: 3,
    title: 'PROMETHEUS',
    year: 2022,
    medium: 'charcoal on paper',
    size: '30 x 22 in',
    src: slide3,
    alt: 'PROMETHEUS charcoal artwork',
  },
  {
    id: 4,
    title: 'FEATHERS',
    year: 2023,
    medium: 'charcoal on paper',
    size: '30 x 22 in',
    src: slide4,
    alt: 'FEATHERS charcoal artwork',
  },
  {
    id: 5,
    title: 'Mirage',
    year: 2025,
    medium: 'Placeholder',
    size: 'Placeholder',
    src: slide5,
    alt: 'mirage artwork',
  },
  {
    id: 6,
    title: 'Resonance',
    year: 2026,
    medium: 'charcoal, graphite, watercolor & acrylic on paper',
    size: '63 x 46 in',
    src: slide6,
    alt: 'resonance artwork',
  },
  {
    id: 7,
    title: 'RODEO',
    year: 2024,
    medium: 'charcoal on paper',
    size: '30 x 22 in',
    src: slide7,
    alt: 'RODEO charcoal artwork',
  },
  {
    id: 8,
    title: 'Wave',
    year: 2026,
    medium: 'charcoal on paper',
    size: '22 x 24 in',
    src: slide8,
    alt: 'Wave charcoal artwork',
  },
  {
    id: 9,
    title: 'The Color Bricks',
    year: 2026,
    medium: 'charcoal, ink, acrylic, & gesso on paper',
    size: '22 x 30 in',
    src: slide9,
    alt: 'The Color Bricks charcoal artwork',
  },
  {
    id: 10,
    title: 'Under The Sun',
    year: 2025,
    medium: 'oil & acrylic wash on canvas',
    size: '30 x 24 in',
    src: slide10,
    alt: 'Under The Sun charcoal artwork',
  },
]

export default function Landing() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') {
        setHeroIndex((i) => (i + 1) % artworks.length)
        resetInterval()
      }
      if (e.key === 'ArrowLeft') {
        setHeroIndex((i) => (i - 1 + artworks.length) % artworks.length)
        resetInterval()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function startInterval() {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setHeroIndex((i) => (i + 1) % artworks.length)
    }, 7000)
  }

  function resetInterval() {
    startInterval()
  }

  function nextHero() {
    setHeroIndex((i) => (i + 1) % artworks.length)
    resetInterval()
  }

  function prevHero() {
    setHeroIndex((i) => (i - 1 + artworks.length) % artworks.length)
    resetInterval()
  }

  function onTouchStart(e) {
    setTouchStartX(e.touches[0].clientX)
  }

  function onTouchEnd(e) {
    if (touchStartX == null) return
    const dx = touchStartX - e.changedTouches[0].clientX
    if (dx > 50) nextHero()
    else if (dx < -50) prevHero()
    setTouchStartX(null)
  }

  function getHeroSrc(src) {
    try {
      if (src.includes('w=')) return src.replace(/w=\d+/, 'w=2400')
      if (src.includes('?')) return src + '&w=2400'
      return src + '?w=2400'
    } catch {
      return src
    }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* CHRISMFCHEN text in top left */}
      <div className="absolute top-6 left-6 z-50 font-serif text-red-500 text-4xl">
        CHRISMFCHEN
      </div>

      {/* Fullscreen hero carousel */}
      <section
        className="fixed inset-0 z-40 w-full h-screen overflow-hidden select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={resetInterval}
        aria-roledescription="carousel"
        aria-label="Featured artwork"
      >
        <div
          style={{ backgroundImage: `url(${getHeroSrc(artworks[heroIndex].src)})` }}
          className="absolute inset-0 bg-contain bg-center"
        />

       {/* Enter button moved closer to middle on portrait mobile */}
        <div className="absolute enter-button-wrapper z-50">
          <Link
            to="/gallery"
            className="enter-button"
          >
            ENTER
          </Link>
        </div>
        {/* subtle bottom gradient for caption readability */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10" />

        {/* left arrow */}
        <button
          onClick={prevHero}
          aria-label="Previous image"
          className="
            absolute left-6 top-1/2 -translate-y-1/2 z-50
            w-20 h-20 flex items-center justify-center
            bg-transparent border-none p-0
            text-white text-6xl
            opacity-0 hover:opacity-100
            focus:outline-none focus:ring-0
            transition-opacity duration-300
          "
        >
          ◀
        </button>

        {/* right arrow */}
        <button
          onClick={nextHero}
          aria-label="Next image"
          className="
            absolute right-6 top-1/2 -translate-y-1/2 z-50
            w-20 h-20 flex items-center justify-center
            bg-transparent border-none p-0
            text-white text-6xl
            opacity-0 hover:opacity-100
            focus:outline-none focus:ring-0
            transition-opacity duration-300
          "
        >
          ▶
        </button>

        {/* caption (pager removed) */}
        <div className="absolute left-6 bottom-6 text-white z-50">
          <div className="text-sm opacity-90">{artworks[heroIndex].medium} • {artworks[heroIndex].year}</div>
          <div className="text-xl font-semibold">{artworks[heroIndex].title}</div>
        </div>
      </section>
    </main>
  )
}