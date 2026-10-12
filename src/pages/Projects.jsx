import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const designProjects = projects.filter(
    (p) => p.category !== 'Web Development'
  )
  const devProjects = projects.filter(
    (p) => p.category === 'Web Development'
  )

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Projects">
          A selection of graphic design and web development work.
        </SectionHeading>

        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold tracking-wide uppercase border-b border-white/10 pb-3">
            Graphic Design
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {designProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {devProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-bold tracking-wide uppercase border-b border-white/10 pb-3">
              Web Development
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {devProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}