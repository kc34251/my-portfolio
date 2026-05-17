import { useParams, useNavigate, Link } from 'react-router-dom'
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

export default function Artwork() {
  const { id } = useParams()
  const navigate = useNavigate()
  const artworkId = parseInt(id)
  const artwork = artworks.find(a => a.id === artworkId)

  if (!artwork) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="lg:ml-64 md:ml-48 ml-32 px-6 py-8">
          <p>Artwork not found.</p>
        </div>
      </main>
    )
  }

  const currentIndex = artworks.findIndex(a => a.id === artworkId)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < artworks.length - 1

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const imageWidth = rect.width

    if (clickX < imageWidth / 2) {
      // Left side - previous
      if (hasPrev) {
        navigate(`/gallery/${artworks[currentIndex - 1].id}`)
      }
    } else {
      // Right side - next
      if (hasNext) {
        navigate(`/gallery/${artworks[currentIndex + 1].id}`)
      }
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Sidebar */}
      <Sidebar position="left" showSocial={true} />

      {/* Main Content */}
      <div className="lg:ml-64 md:ml-48 ml-0 px-6 py-8 pt-28 md:pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="portrait:h-[95vh] landscape:h-[80vh] flex items-center justify-center">
          <img
            src={artwork.src}
            alt={artwork.alt}
            className="max-h-full max-w-full object-contain cursor-pointer"
            onClick={handleImageClick}
            loading="lazy"
          />
        </div>

          <div className="artwork-detail-text mt-8 text-slate-800">
            <h2 className="text-2xl font-semibold mb-4">{artwork.title}</h2>
            <div className="space-y-2 text-lg leading-8">
              <p><span className="font-semibold">Medium:</span> {artwork.medium}</p>
              <p><span className="font-semibold">Year:</span> {artwork.year}</p>
              <p><span className="font-semibold">Size:</span> {artwork.size}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}