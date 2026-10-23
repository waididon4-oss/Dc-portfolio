import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { socialLinks } from '../data/social.js'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const servicesList = [
  'Brand Identity Design',
  'Social Media Design',
  'Packaging Design',
  'Creative Consultation',
  'Public Speaking',
  'Design Training',
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="border-t border-white-400/15 mt-24 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={36} />
              <p className="font-display text-lg">Didon_Cr8ive</p>
            </div>
            <p className="mt-4 text-sm text-ink/60 dark:text-ivory/60">
              Designed and built with intention.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white-400/20 text-xs uppercase text-ink/70 dark:text-ivory/70"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm mb-4 uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-sm text-ink/65 dark:text-ivory/65">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm mb-4 uppercase tracking-widest">Services</p>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service} className="text-sm text-ink/65 dark:text-ivory/65">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm mb-4 uppercase tracking-widest">Newsletter</p>
            <p className="text-sm text-ink/60 dark:text-ivory/60 mb-4">
              Get design tips and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="rounded-lg border border-white-400/25 bg-transparent px-4 py-2.5 text-sm outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-white-400 px-4 py-2.5 text-sm font-medium text-ink"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-ink/50 dark:text-ivory/50">
          © {new Date().getFullYear()} Didon_Cr8ive Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}