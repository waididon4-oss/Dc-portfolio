import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'
import Logo from '../components/Logo.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-10 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-gold-radial" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-gold-500 dark:text-gold-300 mb-5"
          >
            Graphics Designer &amp; Web developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05]"
          >
            Designing brands
            <br />
            building{' '}
            <span className="italic text-gold-gradient">digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-ink/70 dark:text-ivory/65"
          >
            I'm Daniel waida founder of DIDON CREA8IVE a designer and developer crafting bold brand identities and clean
            digital experiences, from the first sketch to shipped code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/projects" variant="primary">
              View My Work
            </Button>
            <Button href="resume .pdf" variant="outline" download>Download CV
               
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-10"
          >
            {[
              ['2', 'Deciplines Design & code'],
              ['DIDON', 'CREA8IVE Studio'],
              ['100%', 'Client First Approach']
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl text-gold-500 dark:text-gold-300">
                  {value}
                </p>
                <p className="text-xs text-ink/55 dark:text-ivory/55 mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96"
        >

          <img src="AirBrush_20260713160447.jpg" alt="Didon, founder of DIDON CREA8IVE" className="h-56 w-56 rounded-xL border-2 border-gold-400/60
          object-cover shadow-goldlg sm:h- 72 sm:w- 72"/>
        </motion.div>
      </div>
    </section>
  )
}
