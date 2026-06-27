import Logo from './Logo.jsx'
import { socialLinks } from '../data/social.js'

export default function Footer() {
  return (
    <footer className="border-t border-gold-400/15 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div>
            <p className="font-display text-lg">DC Portfolio</p>
            <p className="text-xs text-ink/55 dark:text-ivory/55">
              Designed and built with intention.
            </p>
          </div>
        </div>

        <ul className="flex gap-3">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 text-gold-500 dark:text-gold-300 transition-colors hover:bg-gold-400/10"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-ink/50 dark:text-ivory/50">
          © {new Date().getFullYear()} DC Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
