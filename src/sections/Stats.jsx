import { motion } from 'framer-motion'

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '2+', label: 'Years Experience' },
  { number: '10+', label: 'Brands Designed' },
]

export default function Stats() {
  return (
    <section className="bg-ink px-6 py-20 text-ivory">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl sm:text-5xl font-medium">{stat.number}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-ivory/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}