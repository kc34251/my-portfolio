import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
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

export default function Gallery() {
  const navigate = useNavigate()

  useEffect(() => {
    // If this page was fully reloaded, set a flag so we can redirect after the reload.
    // This will not fire when navigating via react-router (SPA navigation).
    const handleBeforeUnload = () => {
      sessionStorage.setItem('galleryReload', 'true')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('galleryReload') === 'true') {
      sessionStorage.removeItem('galleryReload')
      navigate('/', { replace: true })
    }
  }, [navigate])

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Sidebar */}
      <Sidebar size="small" showSocial={true} />

      {/* Main Content */}
      <div className="lg:ml-64 md:ml-48 ml-0 pt-28 md:pt-0">
        <section className="w-full px-6 py-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {artworks.map((a) => (
              <figure key={a.id} className="group rounded-lg overflow-hidden">
                <Link
                  to={`/gallery/${a.id}`}
                  className="w-full h-full block focus:outline-none"
                  aria-label={`View ${a.title}`}
                >
                  <img
                    src={a.src}
                    alt={a.alt}
                    className="w-full h-72 md:h-64 lg:h-72 object-contain transform transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}