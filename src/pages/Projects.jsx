import { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const allTags = useMemo(() => {
    const tags = new Set(['All'])
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return Array.from(tags)
  }, [])

  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Projects" align="center">
          A curated selection of brand, product, and web design work,
          spanning real-estate, fintech, retail, and wellness.
        </SectionHeading>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by tag">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                activeTag === tag
                  ? 'border-gold-400 bg-gold-400/15 text-gold-600 dark:text-gold-200'
                  : 'border-gold-400/25 text-ink/65 dark:text-ivory/65 hover:border-gold-400/60'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink/60 dark:text-ivory/60">
            No projects match this filter yet.
          </p>
        )}
      </div>
    </div>
  )
}
