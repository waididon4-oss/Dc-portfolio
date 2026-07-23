import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { socialLinks } from '../data/social.js'

const contactDetails = [
  { label: 'Email', value: 'waididon4@gmail.com', href: 'mailto:waididon@gmail.com' },
  { label: 'Phone', value: '+2349166965526', href: 'tel:+2349166965526' },
  { label: 'Location', value: 'Base in Yola, Adamawa State', href: null }
]

export default function Contact() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get In Touch" title="Let's start a project" align="center">
          Have a brief, a half-formed idea, or just a question? I read every
          message and reply within one to two business days.
        </SectionHeading>

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <p className="eyebrow text-white-500 dark:text-white-300">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-lg font-medium hover:text-white-500 dark:hover:text-white-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-medium">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <p className="eyebrow text-white-500 dark:text-white-300 mb-4">Follow</p>
              <ul className="flex gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white-400/40 text-white-500 dark:text-gold-300 transition-colors hover:bg-gold-400/10"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white-400/20 bg-ink-soft/30 dark:bg-ink-soft/60 p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
