import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative flex h-9 w-16 items-center rounded-full border border-gold-400/50 bg-ivory-soft dark:bg-ink-soft px-1 transition-colors"
    >
      <motion.span
        className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-gradient text-[10px] font-bold text-ink"
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {isDark ? '☾' : '☀'}
      </motion.span>
    </button>
  )
}
0