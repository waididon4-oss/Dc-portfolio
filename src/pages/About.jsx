import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'

const timeline = [
  {
    year: 'jun 2025 — Present',
    role: 'Founder.',
    org: 'DIDON CREA8IVE Studio',
    description:
      'Running an independent studio building brand identities and digital products for boutique businesses and founders.'
  },
  {
    year: 'Jan 2025 —jun 2025',
    role: 'Senior Product Designer',
    org: 'self-employed.',
    description:
      'Led design for a suite of fintech dashboards, establishing the company\u2019s first accessible design system.'
  },
  {
    year: 'oct 2024',
    role: 'Brand identity Design.',
    org: 'self-employed',
    description:
      'Designed and shipped in creating visuals identity of a brand for business or organization.'
  },
  {
    year: 'july 2024',
    role: 'Started Freelancing',
    org: 'Self-employed',
    description:
      'Took on first paid design projects while studying, focused on small business branding.'
  }
]

const values = [
  {
    title: 'Restraint',
    description:
      'Good design says no more than it needs to. I would rather remove an element than add one that doesn\u2019t earn its place.'
  },
  {
    title: 'Craft',
    description:
      'Every interaction, spacing decision, and line of code is treated as a deliberate choice, not a default.'
  },
  {
    title: 'Clarity',
    description:
      'Clients and users should always understand exactly what to do next. Confusion is a design failure.'
  }
]

export default function About() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto h-72 w-72 rounded-full border border-white-400/30 bg-white-radial sm:h-80 sm:w-80"
            
          >
            <img src="/Dc About 2 profile.jpg" alt="Photo of Didon, founder of DIDON CREA8IVE"
             className="Absolute inset-6 h-full w-full rounded-xL object-cover"/>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-xL
             border border-white-400/40 bg-ivory dark:bg-ink px-5 py-2 text-xs eyebrow text-white-500 dark:text-white-300">
              Designer / Developer
            </span>
          </motion.div>

          <div>
            <SectionHeading eyebrow="About Me" title="The person behind the work.">
              I'm Daniel waida Founder of DIDON CREA8IVE, an independent freelancer, working
              with founders and small studios who want their brand to feel
              considered, not templated. I trained as both a designer and a
              developer, which means I design with the constraints of code
              in mind, and I build with an eye for the details a developer
              alone might miss.
            </SectionHeading>

            <p className="mt-6 max-w-2xl leading-relaxed text-ink/70 dark:text-ivory/65">
              Outside of client work, I write about the business side of
              design for younger designers starting out, and I spend an
              unreasonable amount of time thinking about typography and the
              exact shade a gold accent should be. When I'm not at my desk,
              you'll usually find me watching football.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white-400/20 pt-8 max-w-md">
              {[
                ['Based in', 'Remote / Worldwide'],
                ['Availability', 'Open to projects'],
                ['Focus', 'Brand · Web · Product']
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-ink/50 dark:text-ivory/50">{label}</p>
                  <p className="mt-1 text-sm font-medium text-white-500 dark:text-white-300">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <Button to="/contact" variant="primary" className="mt-10">
              Work With Me
            </Button>
          </div>
        </div>

        <section className="mt-28">
          <SectionHeading eyebrow="Philosophy" title="What guides my work" align="center">
            Three principles shape every decision, from a single button to
            a full brand system.
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white-400/20 p-8 bg-ink-soft/30 dark:bg-ink-soft/60"
              >
                <h3 className="font-display text-2xl text-white-500 dark:text-white-300">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ivory/65">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-28">
          <SectionHeading eyebrow="Journey" title="Where I've worked" align="center" />
          <div className="relative mt-14 mx-auto max-w-3xl">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white-400/30 sm:left-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative pl-8 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                  }`}
                >
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-white-400 sm:left-auto sm:right-[-7px]" />
                  <p className="eyebrow text-white-500 dark:text-white-300">{item.year}</p>
                  <h3 className="font-display text-xl mt-1">{item.role}</h3>
                  <p className="text-sm text-ink/55 dark:text-ivory/55">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-ivory/65">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
