import Logo from './Logo.jsx'
import { socialLinks } from '../data/social.js'

export default function Footer() {
  return (
    <footer className="border-t border-white-400/15 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div>
            <p className="font-display text-lg">Didon_Cr8ive Portfolio</p>
            <p className="text-xs text-ink/55 dark:text-ivory/55">
              Designed and built with intention.
            </p>
          </div>
        </div>

        <p className="text-xs text-ink/50 dark:text-ivory/50">
          © {new Date().getFullYear()} Didon_Cr8ive Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
