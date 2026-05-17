import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ children, size = "default", position = "left", showSocial = true }) {
  const [isOpen, setIsOpen] = useState(false)
  const sizeClasses = {
    small: "lg:w-64 md:w-48 w-24",
    default: "lg:w-64 md:w-48 w-32"
  }

  const positionClasses = {
    left: "top-0 left-0 h-screen flex-col",
    bottom: "bottom-0 left-0 w-full h-auto"
  }

  return (
    <aside className={`sidebar fixed ${sizeClasses[size]} ${positionClasses[position]} bg-transparent p-6 flex items-start text-left`}> 
      <div className="sidebar-header w-full flex items-center justify-center">
        <Link to="/gallery" className="sidebar-title text-3xl font-bold block leading-tight text-center mb-6 md:mb-8">
          CHRIS<br />
          MF<br />
          CHEN
        </Link>

        <button
          type="button"
          className="sidebar-toggle md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="sidebar-menu"
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 15l-6-6-6 6" />
            ) : (
              <path d="M6 9l6 6 6-6" />
            )}
          </svg>
        </button>
      </div>

      <div id="sidebar-menu" className={`sidebar-menu w-full ${isOpen ? 'sidebar-open' : ''}`}>
        {children ? (
          <div className="w-full space-y-4">
            {children}
          </div>
        ) : (
          <nav className="w-full space-y-4">
            <Link to="/about" className="block text-gray-600 hover:text-black">
              About
            </Link>
            <Link to="/artist-statement" className="block text-gray-600 hover:text-black">
              Artist Statement
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-black">
              Contact
            </Link>
          </nav>
        )}

        <div className={`mt-8 flex justify-start space-x-4 sidebar-social-links ${showSocial ? '' : 'hidden'}`}>
        <a
          href="https://www.instagram.com/chrismfchen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-600 hover:text-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.844.248 2.277.415a4.606 4.606 0 0 1 1.675 1.086 4.606 4.606 0 0 1 1.086 1.675c.167.433.359 1.071.415 2.277.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.248 1.844-.415 2.277a4.606 4.606 0 0 1-1.086 1.675 4.606 4.606 0 0 1-1.675 1.086c-.433.167-1.071.359-2.277.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.844-.248-2.277-.415a4.606 4.606 0 0 1-1.675-1.086 4.606 4.606 0 0 1-1.086-1.675c-.167-.433-.359-1.071-.415-2.277C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.248-1.844.415-2.277a4.606 4.606 0 0 1 1.086-1.675A4.606 4.606 0 0 1 5.409 2.648c.433-.167 1.071-.359 2.277-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.13 4.74.363 3.92.69a6.581 6.581 0 0 0-2.381 1.57A6.581 6.581 0 0 0 .69 4.641c-.327.82-.56 1.853-.618 3.132C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.279.291 2.312.618 3.132a6.581 6.581 0 0 0 1.57 2.381 6.581 6.581 0 0 0 2.381 1.57c.82.327 1.853.56 3.132.618C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.279-.058 2.312-.291 3.132-.618a6.581 6.581 0 0 0 2.381-1.57 6.581 6.581 0 0 0 1.57-2.381c.327-.82.56-1.853.618-3.132.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.279-.291-2.312-.618-3.132a6.581 6.581 0 0 0-1.57-2.381A6.581 6.581 0 0 0 19.08.69c-.82-.327-1.853-.56-3.132-.618C15.668.013 15.259 0 12 0z"/>
            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
            <circle cx="18.406" cy="5.594" r="1.44"/>
          </svg>
        </a>

        <a
          href="https://www.facebook.com/chrismfchenarts"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-600 hover:text-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
          </svg>
        </a>
      </div>
      </div>
    </aside>
  )
}
