import Sidebar from './Sidebar'

export default function VideoProcess() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-64 px-6 py-8">
        <h1 className="text-4xl font-bold mb-6">Video Process</h1>
        <p className="text-lg text-gray-700">
          This page showcases my creative process through video.
        </p>
        <div className="mt-6">
          {/* Placeholder for video */}
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded">
            <p className="text-gray-500">Video placeholder - embed your process videos here</p>
          </div>
        </div>
      </div>
    </main>
  )
}