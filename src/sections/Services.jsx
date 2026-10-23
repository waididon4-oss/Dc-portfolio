import { motion } from 'framer-motion'
import { Palette, Smartphone, Mic, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description: 'Complete brand identity systems — logo, colors, typography, and everything your brand needs to stand out.',
    link: '/about',
    linkLabel: 'Explore Service',
  },
  {
    icon: Smartphone,
    title: 'Social Media Design',
    description: 'Scroll-stopping social media graphics and templates that maintain brand consistency across all platforms.',
    link: '/about',
    linkLabel: 'Explore Service',
  },
  {
    icon: Mic,
    title: 'Public Speaking',
    description: 'Engaging keynotes and workshops on branding, creativity, and design thinking for events and organizations.',
    link: '/contact',
    linkLabel: 'Book a Talk',
  },
  {
    icon: GraduationCap,
    title: 'Design Training',
    description: 'Structured design courses and mentorship, empowering creatives to build profitable design careers.',
    link: '/contact',
    linkLabel: 'Learn More',
  },
]

export default function Services() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3 text-center text-white-500 dark:text-white-300">What I Do</p>
        <h2 className="font-display text-center text-4xl sm:text-5xl font-medium">
          Premium Creative <span className="italic">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink/70 dark:text-ivory/65">
          Comprehensive brand and design solutions crafted to elevate your business and create lasting impressions.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white-400/15 bg-ink-soft/5 p-8 dark:bg-ink-soft/30"
              >
                <Icon size={28} className="mb-5 text-white-400" />
                <h3 className="font-display text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70 dark:text-ivory/65 mb-5">
                  {service.description}
                </p>
                <a href={service.link} className="text-sm font-medium text-white-500 dark:text-white-300">
                  {service.linkLabel} →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}