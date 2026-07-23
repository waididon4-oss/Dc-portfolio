import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillRing from '../components/SkillRing.jsx'
import { skillGroups } from '../data/skills.js'

const tools = [
  'PexilLab App',
  'Adobe Photoshop',
]

export default function Skills() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills &amp; Expertise"
          align="center"
        >
          A blend of design sensibility and engineering rigour, refined over
          six years of client and product work.
        </SectionHeading>

        <div className="mt-16 space-y-20">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl mb-10 text-white-500 dark:text-white-300"
              >
                {group.category}
              </motion.h3>
              <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
                {group.skills.map((skill, i) => (
                  <SkillRing
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={(gi * 4 + i) * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24">
          <SectionHeading eyebrow="Toolkit" title="Tools I reach for" align="center" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-full border border-white-400/30 px-5 py-2 text-sm text-ink/75 dark:text-ivory/75"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
