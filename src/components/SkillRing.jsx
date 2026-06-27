import { useState } from 'react'
import { motion } from 'framer-motion'

const SIZE = 96
const STROKE = 6
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function SkillRing({ name, level, delay = 0 }) {
  const [inView, setInView] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center gap-3 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} className="-rotate-90">
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            className="text-ink/10 dark:text-ivory/10"
            strokeWidth={STROKE}
          />
          <motion.circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#d4af37"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{
              strokeDashoffset: inView
                ? CIRCUMFERENCE - (CIRCUMFERENCE * level) / 100
                : CIRCUMFERENCE
            }}
            transition={{ duration: 1.1, delay: delay + 0.15, ease: 'easeOut' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-xl text-gold-500 dark:text-gold-300">
          {level}%
        </span>
      </div>
      <p className="text-sm font-medium text-ink/80 dark:text-ivory/80">{name}</p>
    </motion.div>
  )
}
