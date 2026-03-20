import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <nav>
        <div className="container">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">S</span>
            SynthraAI
          </Link>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#stats">Platform</a></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '8px 20px', fontSize: '0.8rem' }}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <div className="container">
          <span className="footer-text">
            © {new Date().getFullYear()} SynthraAI. All rights reserved.
          </span>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><a href="mailto:hello@synthraai.app">Contact</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
