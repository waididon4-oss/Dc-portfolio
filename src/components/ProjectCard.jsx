export default function ProjectCard({ project }) {
  const images = project.images || (project.image ? [project.image] : [])

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-soft/30 transition-transform duration-300 hover:-translate-y-1">

      {/* Image Grid Area */}
      <div className="relative w-full overflow-hidden">
        {images.length === 0 ? (
          <div className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <span className="font-display text-7xl italic text-white opacity-20">DC</span>
          </div>
        ) : images.length === 1 ? (
          <img
            src={images[0]}
            alt={project.title}
            className="h-52 w-full object-cover"
          />
        ) : (
          <div className="grid grid-cols-2 gap-0.5 bg-black/20">
            {/* Big first image */}
            <div className="row-span-2">
              <img
                src={images[0]}
                alt={`${project.title} 1`}
                className="h-full w-full object-cover"
                style={{ minHeight: '200px' }}
              />
            </div>
            {/* Right column - images 2 and 3 */}
            <img
              src={images[1]}
              alt={`${project.title} 2`}
              className="h-24 w-full object-cover"
            />
            <img
              src={images[2] || images[1]}
              alt={`${project.title} 3`}
              className="h-24 w-full object-cover"
            />
            {/* Bottom row - images 4 and 5 */}
            {images[3] && (
              <img
                src={images[3]}
                alt={`${project.title} 4`}
                className="h-20 w-full object-cover"
              />
            )}
            {images[4] && (
              <img
                src={images[4]}
                alt={`${project.title} 5`}
                className="h-20 w-full object-cover"
              />
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs tracking-widest text-white/50 mb-1 uppercase">
          {project.category}
        </p>
        <h3 className="font-display text-xl font-medium text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 px-3 py-0.5 text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            onClick={(e) => { if (project.link === '#') e.preventDefault() }}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </a>
        </div>
      </div>
    </div>
  )
}