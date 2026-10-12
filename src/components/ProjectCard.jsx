export default function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 transition-transform duration-300 hover:-translate-y-1">

      <div className="relative h-52 w-full overflow-hidden bg-gray-900">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-7xl italic text-white opacity-20">DC</span>
          </div>
        )}
      </div>

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
        <div className="flex items-center justify-between">
          {project.link && project.link !== '#' ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition"
            >
              ↗
            </a>
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/20">
              ↗
            </span>
          )}
        </div>
      </div>
    </div>
  )
}