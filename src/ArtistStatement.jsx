import Sidebar from './Sidebar'
import artist from './assets/Artist.jpeg'

export default function ArtistStatement() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Sidebar />

      {/* Main Content */}
      <div className="page-content lg:ml-64 md:ml-48 ml-32 px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Artist Statement</h1>
          <div className="flex justify-center lg:justify-end">
            <img
              src={artist}
              alt="Artist Photo"
              className="mb-4 w-48 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="text-lg text-gray-700 space-y-6">

  <h2 className="text-2xl font-semibold tracking-wide">
    THE NUMBER 8
  </h2>
  <p>
    I have a vision that, within the next decade, my wildest dreams will come true and my charcoal scripture will be known.
  </p>

  <p>
    My initial works were a way to prove to myself that I had the ability to become an artist; I tried my hardest to pack as much detail into each drawing and didn’t accept anything less than what was far beyond my reach.
  </p>

  <p>
    Despite all this, I was—and still am—thoroughly insecure about calling myself an artist.
  </p>

  <p>
    Yet the more I created, the more inspired I became by my capabilities. Art became a shot in the dark—the freest fall I’ve ever had. I realized that it wasn’t about how or if I fell; it was about how I landed.
  </p>

  <p>
    I attended college for finance and picked up art classes to give myself the time to actually create. When I took those classes, I craved freedom from any control, any syllabus. I needed to explore who I was and what I wanted to do. I didn’t want the noise of rules to influence what was already untampered with—my sanctuary: a preservation of this journey of becoming.
  </p>

  <p>
    I believed that if I kept pushing, it would turn into something beautiful—this chaos unfolding naturally.
  </p>

  <p>
    My eyes and charcoal became tools and witnesses to what I could achieve, pushing beyond my mental boundaries and creating tangible pieces that represent my passion. My drawings focus heavily on the textures I can draw out from my very soul. Each charcoal mark is an effort to tattoo my manifesto onto the paper.
  </p>

  <p>
    I thought my experiences were tearing me apart, but instead, I was being molded. The stark chiaroscuro in my work emphasizes the dualities within my life: a metaphorical silk-screening of memories. The blacks and whites in my drawings, while seemingly opposites, are constantly working together—polarizing, layering, and, most importantly, blending for the grand composition: an appreciation of softness within contrast.
  </p>

  <p>
    Each piece represents a dissonance I have no other way of expressing, a feeling that would otherwise be lost. Nothing good ever comes without putting in that pain.
  </p>

  <p>
    My soul has become adaptable within the turmoil. As I break, I feel pain, I heal, I transform, and I strengthen in ways unimaginable. I walk every day, no matter the task, in the shoes of an artist.
  </p>

  <p className="text-right font-semibold mt-10">
    — CHRISMFCHEN
  </p>

</div>
</div>
    </main>
  )
}