import { motion } from 'framer-motion'

/**
 * The DC monogram — a circular gold medallion used as the brand's signature
 * element across the navbar, hero, and footer.
 *
 * size: pixel size of the medallion
 * animated: whether the outer ring slowly rotates (used in the hero)
 */
export default function Logo({ size = 44, animated = false, className = '' }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {animated && (
        <motion.span
          className="absolute inset-0 rounded-full border border-dashed border-gold-400/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <span
        className="absolute inset-[3px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #1c1b18, #0a0a0a)',
          boxShadow: '0 0 0 1px rgba(212,175,55,0.55), inset 0 0 12px rgba(212,175,55,0.18)'
        }}
      />
      <span
        className="relative font-display italic text-gold-gradient"
        style={{ fontSize: size * 0.42, lineHeight: 1 }}
      >
        DC
      </span>
    </div>
  )
}
