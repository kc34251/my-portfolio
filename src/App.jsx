import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Gallery from './Gallery'
import Artwork from './Artwork'
import About from './About'
import ArtistStatement from './ArtistStatement'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<Artwork />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist-statement" element={<ArtistStatement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
