import { useEffect, useState, useRef } from 'react'
import instagramIcon from './assets/instagram.svg'
import slide1 from './assets/slide1.jpg'
import slide2 from './assets/slide2.jpg'

const SITE_NAME = 'chrismfchen'
const INSTAGRAM_URL = 'https://instagram.com/chrismfchenarts' // update with actual handle

const artworks = [
  {
    id: 1,
    title: 'Placeholder',
    year: 2025,
    medium: 'Placeholder',
    src: slide1,
    alt: 'Placeholder',
  },
  {
    id: 2,
    title: 'Placeholder',
    year: 2024,
    medium: 'Placeholder',
    src: slide2,
    alt: 'Placeholder',
  },
  {
    id: 3,
    title: 'Forest Path',
    year: 2023,
    medium: 'Watercolor',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=bb460e3d7f90b3d4557bca4b8b93b8a6',
    alt: 'Forest path in green',
  },
  {
    id: 4,
    title: 'Still Life Study',
    year: 2022,
    medium: 'Oil on board',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0bd3a1d0b8c61fbb8f5a2378b6b1b6df',
    alt: 'Still life with fruit',
  },
  {
    id: 5,
    title: 'Minimal Forms',
    year: 2025,
    medium: 'Ink on paper',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b5c0f9477a6f3b4e9d7b8a8f0f9be1e',
    alt: 'Minimal black ink shapes',
  },
  {
    id: 6,
    title: 'Coastal Study',
    year: 2021,
    medium: 'Mixed media',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f2f2f2b9b9b1c0a1b1a3c0d0e0f2a1',
    alt: 'Ocean waves on shore',
  },
]

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowRight') setHeroIndex((i) => (i + 1) % artworks.length)
      if (e.key === 'ArrowLeft') setHeroIndex((i) => (i - 1 + artworks.length) % artworks.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight - 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Toggle hiding the scrollbar and update hero pointer-events; hero is in normal flow so it will scroll away
  useEffect(() => {
    const root = document.documentElement
    if (!root) return
    if (!scrolled) {
      root.classList.add('hide-scrollbar')
      if (heroRef.current) {
        heroRef.current.style.pointerEvents = 'auto'
      }
    } else {
      root.classList.remove('hide-scrollbar')
      if (heroRef.current) {
        heroRef.current.style.pointerEvents = 'none'
      }
    }
  }, [scrolled])

  function nextHero() {
    setHeroIndex((i) => (i + 1) % artworks.length)
  }
  function prevHero() {
    setHeroIndex((i) => (i - 1 + artworks.length) % artworks.length)
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

  // Return a higher-resolution variant for the hero to better fill large viewports
  function getHeroSrc(src) {
    try {
      if (src.includes('w=')) return src.replace(/w=\d+/, 'w=2400')
      if (src.includes('?')) return src + '&w=2400'
      return src + '?w=2400'
    } catch {
      return src
    }
  }

  // Refs for parallax scrolling behavior
  const heroRef = useRef(null)
  const heroImgRef = useRef(null)

  useEffect(() => {
    let ticking = false
    function onParallaxScroll() {
      if (!heroRef.current || !heroImgRef.current) return
      const height = heroRef.current.offsetHeight
      const scroll = window.scrollY

      // progress 0..1 across the hero height
      const progress = Math.min(scroll / height, 1)

      // Parallax translate (subtle) - move up to 30% of the hero height
      const translate = progress * (height * 0.3)

      // Fade out hero as user scrolls past it
      const opacity = Math.max(0, 1 - progress * 1.2)

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Move image slightly for depth
          heroImgRef.current.style.transform = `translateY(-${translate}px)`

          // Fade and hide the hero when scrolled beyond it so it no longer overlays content
          if (heroRef.current) {
            heroRef.current.style.opacity = String(opacity)
            if (progress >= 1) {
              heroRef.current.style.display = 'none'
              heroRef.current.style.pointerEvents = 'none'
            } else {
              heroRef.current.style.display = ''
              heroRef.current.style.pointerEvents = 'auto'
            }
          }

          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onParallaxScroll, { passive: true })
    onParallaxScroll()
    return () => window.removeEventListener('scroll', onParallaxScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Topbar overlay - visible above hero, switches to light background when scrolled */}
      <div className={`fixed top-0 left-0 right-0 z-60 px-6 py-3 flex items-center justify-between transition-colors duration-200 ${scrolled ? 'bg-white/80 text-black backdrop-blur-sm' : 'bg-transparent text-white'}`}>
        <a href="/" className={`text-3xl md:text-4xl lg:text-5xl font-semibold leading-none transition-all tracking-tight title-contrast ${scrolled ? 'text-black' : 'text-white'}`}>{SITE_NAME}</a>
      </div>

      {/* Fullscreen hero carousel (first thing users see) */}
      <section
        ref={heroRef}
        className="fixed inset-0 z-40 w-full h-screen overflow-hidden select-none transition-opacity duration-500 ease-out"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
        aria-label="Featured artwork"
      >
        <div
          ref={heroImgRef}
          aria-hidden="true"
          style={{ backgroundImage: `url(${getHeroSrc(artworks[heroIndex].src)})` }}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform"
        />

        {/* subtle bottom gradient for caption readability */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10" />

        {/* left arrow: large invisible hit area, small dark button appears on hover nearby */}
        <button
          onClick={prevHero}
          className="group hero-nav absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center h-44 w-10 rounded-md bg-transparent text-white border border-transparent transition-colors duration-200 z-50 focus:outline-none"
          aria-label="Previous artwork"
        >
          <span className="pointer-events-none hero-inner w-10 h-10 flex items-center justify-center rounded-md bg-black/70 opacity-0 transition-opacity duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </button>

        {/* right arrow: large invisible hit area, small dark button appears on hover nearby */}
        <button
          onClick={nextHero}
          className="group hero-nav absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center h-44 w-10 rounded-md bg-transparent text-white border border-transparent transition-colors duration-200 z-50 focus:outline-none"
          aria-label="Next artwork"
        >
          <span className="pointer-events-none hero-inner w-10 h-10 flex items-center justify-center rounded-md bg-black/70 opacity-0 transition-opacity duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>

        {/* caption and pager (z-index above gradient) */}
        <div className="absolute left-6 bottom-6 text-white z-50">
          <div className="text-sm opacity-90">{artworks[heroIndex].medium} • {artworks[heroIndex].year}</div>
          <div className="text-xl font-semibold">{artworks[heroIndex].title}</div>
        </div>
        <div className="absolute right-6 bottom-6 text-white opacity-90 z-50">{heroIndex + 1} / {artworks.length}</div>
      </section>

      {/* spacer to push the gallery below the fullscreen hero (topbar remains fixed) */}
      <div className="h-screen" aria-hidden="true" />

      <section className="w-full px-6 py-8">

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {artworks.map((a) => (
            <figure key={a.id} className="group rounded-lg overflow-hidden">
              <button
                onClick={() => setSelected(a)}
                className="w-full h-full block focus:outline-none"
                aria-label={`Open ${a.title}`}
              >
                <img
                  src={a.src}
                  alt={a.alt}
                  className="w-full h-72 md:h-64 lg:h-72 object-cover transform transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-slate-700">
                  <div className="font-medium text-slate-900">{a.title}</div>
                  <div className="text-xs mt-1 text-slate-500">{a.medium} • {a.year}</div>
                </figcaption>
              </button>
            </figure>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} (${selected.year})`}
            onClick={() => setSelected(null)}
          >
            <div className="max-w-4xl w-full bg-white rounded-md overflow-hidden shadow-xl" onClick={(e)=>e.stopPropagation()}>
              <div className="relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 border border-slate-200 text-slate-900 hover:bg-slate-50 focus:outline-none"
                  aria-label="Close"
                >
                  ✕
                </button>
                <img src={selected.src} alt={selected.alt} className="w-full h-[60vh] object-contain" />
              </div>
              <div className="p-4 text-slate-900">
                <h3 className="text-lg font-medium">{selected.title}</h3>
                <div className="text-sm text-slate-500">{selected.medium} • {selected.year}</div>
              </div>
            </div>
          </div>
        )}
      </section>

      <footer className="text-center text-sm text-slate-600 py-6">
        © {new Date().getFullYear()} — Contact: <a href="mailto:artist@example.com" className="text-sky-600 hover:underline">artist@example.com</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center ml-3 text-sky-600 hover:text-sky-700">
          <img src={instagramIcon} alt="" aria-hidden="true" className="w-5 h-5" />
        </a>
      </footer>
    </main>
  )
}
