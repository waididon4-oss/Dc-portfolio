import { motion } from 'framer-motion'
import Hero from '../sections/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import SkillRing from '../components/SkillRing.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { skillGroups } from '../data/skills.js'
import { projects } from '../data/projects.js'

const featuredSkills = skillGroups.flatMap((group) => group.skills).slice(0, 4)
const featuredProjects = projects.slice(0, 3)

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto h-64 w-64 rounded-full border border-gold-400/30 bg-gold-radial sm:h-80 sm:w-80"
          >
                   <img
  src="/Dc profile pic 2.jpeg"
  alt="Didon, founder of DIDON CREA8IVE"
  className="h-full w-full rounded-full object-cover"
/>
          </motion.div>

          <div>
            <SectionHeading eyebrow="About Me" title="A craftsman's approach to digital work.">
              I work at the intersection of design and code, building brand
              identities, websites, and products for clients who want their
              presence online to feel as considered as their offline work.
              My process favours restraint over noise — every gold accent on
              this page, and on the sites I build, is placed on purpose.
            </SectionHeading>
            <Button to="/about" variant="ghost" className="mt-6 px-0">
              Read my full story →
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-ink-soft/30 dark:bg-ink-soft/60">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What I Do" title="Capabilities" align="center">
            A snapshot of the disciplines I bring to every engagement.
          </SectionHeading>
          <div className="mt-14 grid grid-cols-2 gap-10 sm:grid-cols-4">
            {featuredSkills.map((skill, i) => (
              <SkillRing key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/skills" variant="outline">
              See All Skills
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Selected Work" title="Featured Projects" align="center">
            A handful of recent engagements across branding, product, and web.
          </SectionHeading>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-3xl border border-gold-400/25 bg-gold-radial px-8 py-16 text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-ink/70 dark:text-ivory/65">
            Let's build something that looks as good as it performs.
          </p>
          <Button to="/contact" variant="primary" className="mt-8">
            Start a Conversation
          </Button>
        </motion.div>
      </section>
    </>
  )
}
