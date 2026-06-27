import Button from '../components/Button.jsx'
import Logo from '../components/Logo.jsx'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <Logo size={64} />
      <h1 className="font-display text-5xl mt-8">404</h1>
      <p className="mt-3 text-ink/65 dark:text-ivory/65">
        This page doesn't exist, or has moved.
      </p>
      <Button to="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </div>
  )
}
