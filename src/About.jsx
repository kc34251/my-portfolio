import Sidebar from './Sidebar'

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Sidebar />

      {/* Main Content */}
      <div className="page-content lg:ml-64 md:ml-48 ml-32 px-6 py-8">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <div className="text-lg text-gray-700 space-y-6">
  <p>
    Chris Chen is a New York–born artist who is educated in finance at Boston College and currently works a corporate job as a bankruptcy and restructuring consultant.
  </p>

  <p>
    Chris is largely self-taught, a wildcard. He grew up as an only child in a conservative Chinese family. Being an artist was never an option.
  </p>

  <p>
    However, Chris went to Red Yellow Blue, a Chinatown art studio, at a young age as a break between his Saturday Chinese, piano, and Kumon courses. RYB became his sanctuary, deafening the dark side of the moon of the first-gen Asian American experience. The space closed as he entered high school, and for a long time, he gave up his aspirations of becoming an artist...
  </p>

  <p>
    Much of his life outside of art has been coerced along a predetermined path defined as success.
  </p>

  <p>
    However, the passion and need to create never fully left him. While there have been several deterrents, he is still focused on the ultimate goal of making artwork.
  </p>

  <p>
    Even now, he is fighting these inner battles; his pieces are still lifes of this intangible but very present conflict. A physical manifestation of his reflective mind, the very parts of himself that are this juxtaposition between frustration and peace.
  </p>

  <p>
    Any free time he has apart from work, ChrisMFChen makes art out of his rented studio in East Williamsburg, his newfound nest.
  </p>

  <p className="italic">
    Ready to fly at any given notice… Godspeed.
  </p>
</div>
      </div>
    </main>
  )
}