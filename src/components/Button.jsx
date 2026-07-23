import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-white-gradient text-ink shadow-white hover:shadow-whiteLg hover:-translate-y-0.5',
  outline:
    'border border-white-400/60 text-ink dark:text-ivory hover:bg-white-400/10 hover:border-white-400',
  ghost:
    'text-white-600 dark:text-white-300 hover:text-gradiant white-700 dark:hover:text-white-200'
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
