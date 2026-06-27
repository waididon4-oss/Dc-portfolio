import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-gold-gradient text-ink shadow-gold hover:shadow-goldLg hover:-translate-y-0.5',
  outline:
    'border border-gold-400/60 text-ink dark:text-ivory hover:bg-gold-400/10 hover:border-gold-400',
  ghost:
    'text-gold-600 dark:text-gold-300 hover:text-gold-700 dark:hover:text-gold-200'
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  className = '',
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
