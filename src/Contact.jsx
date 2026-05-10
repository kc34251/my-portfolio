import Sidebar from './Sidebar'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-64 md:ml-48 ml-32 px-6 py-8">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="text-lg text-gray-700 mb-4">
          Get in touch with me.
        </p>
        <div className="space-y-2">
          <p><strong>Email:</strong> chris.chen0429@gmail.com</p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/chrismfchenarts" className="text-blue-600 hover:underline">@chrismfchenarts</a></p>
        </div>
      </div>
    </main>
  )
}