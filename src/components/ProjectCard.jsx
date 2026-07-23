import { motion } from 'framer-motion'
import { img } from 'framer-motion/client'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white-400/20 bg-ink-soft/40 dark:bg-ink-soft"
    >
     <div className={`relative h-52 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity duration-500 group-hover:opacity-35">
        <span className="font-display text-7xl italic text-white-200">DC</span>
      </div>
    </>
  )}
</div> 

      <div className="p-6">
        <p className="eyebrow text-white-500 dark:text-white-300 mb-2">{project.category}</p>
        <h3 className="font-display text-2xl mb-3">{project.title}</h3>
        <p className="text-sm leading-relaxed text-ink/70 dark:text-ivory/65 mb-5">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white-400/30 px-3 py-1 text-xs text-ink/70 dark:text-ivory/70"
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={project.link}
            onClick={(e) => {
              if (project.link === '#') e.preventDefault()
            }}
            aria-label={`View ${project.title} project`}
            className="ml-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white-400/40 text-white-500 dark:text-white-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </a>
        </div>
      </div>
    </motion.article>
  )
}
