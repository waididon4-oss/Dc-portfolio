import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-ivory text-ink dark:bg-ink dark:text-ivory transition-colors duration-300">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
