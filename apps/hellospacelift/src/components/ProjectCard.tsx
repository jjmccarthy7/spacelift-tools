interface ProjectCardProps {
  name: string
  location: string
  budget: string
  type: string
  status: 'completed' | 'in-progress'
  emoji?: string
}

export default function ProjectCard({
  name,
  location,
  budget,
  type,
  status,
  emoji = '🏠',
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#EEF1F4] overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image placeholder */}
      <div className="h-48 bg-[#EEF1F4] flex items-center justify-center group-hover:bg-[#E2E6EA] transition-colors duration-200">
        <span className="text-5xl">{emoji}</span>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-base font-semibold text-[#141B24] leading-snug">{name}</h3>
            <p className="text-sm text-[#8D9EB2] mt-0.5">{location}</p>
          </div>
          <span
            className={[
              'flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full',
              status === 'completed'
                ? 'bg-[#0ED096]/15 text-[#0A9A70]'
                : 'bg-[#3B86E1]/15 text-[#2A6FCA]',
            ].join(' ')}
          >
            {status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>
        <p className="text-xs text-[#8D9EB2] mb-3">{type}</p>
        <p className="text-base font-bold text-[#141B24]">{budget}</p>
      </div>
    </div>
  )
}
