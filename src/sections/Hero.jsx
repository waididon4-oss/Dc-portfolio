import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-10 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-white-radial" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new projects
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-white-500 dark:text-white-300 mb-3"
          >
            Graphics Designer &amp; Web developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05]"
          >
            Designing brands
            <br />
            building{' '}
            <span className="italic text-white">digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-ink/70 dark:text-ivory/65"
          >
            I'm Daniel Waida, a creative Graphic designer and developer, I help in crafting bold brand identities and clean
            digital experiences, from the first sketch to shipped code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/projects" variant="primary">
              View My Work
            </Button>
            <Button href="resume.pdf" variant="outline" download>
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-10"
          >
            <div>
              <p className="font-display text-3xl font-medium">50+</p>
              <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50">Projects</p>
            </div>
            <div>
              <p className="font-display text-3xl font-medium">2+</p>
              <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl font-medium">30+</p>
              <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-ivory/50">Happy Clients</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto h-72 w-72 rounded-full border border-white-400/30 bg-white-radial sm:h-96 sm:w-96"
        >
          <img
            src="/Dc Hero jsx profile.jpg"
            alt="Daniel Waida, founder of DIDON CREATIVITY"
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}