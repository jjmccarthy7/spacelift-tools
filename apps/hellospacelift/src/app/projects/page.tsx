import ProjectCard from '@/components/ProjectCard'

const projects = [
  { name: 'Modern Kitchen Overhaul', location: 'Austin, TX', budget: '$48,500', type: 'Kitchen Renovation', status: 'completed' as const, emoji: '🍳' },
  { name: 'Primary Bath Spa Retreat', location: 'Denver, CO', budget: '$32,000', type: 'Bathroom Remodel', status: 'completed' as const, emoji: '🛁' },
  { name: 'Open Floor Plan Conversion', location: 'Chicago, IL', budget: '$55,200', type: 'Structural + Interior', status: 'in-progress' as const, emoji: '🏗️' },
  { name: 'Backyard Deck & Pergola', location: 'Seattle, WA', budget: '$18,900', type: 'Outdoor Living', status: 'completed' as const, emoji: '🌿' },
  { name: 'Master Suite Addition', location: 'Nashville, TN', budget: '$72,000', type: 'Addition', status: 'completed' as const, emoji: '🛏️' },
  { name: 'Basement Media Room', location: 'Boston, MA', budget: '$28,500', type: 'Basement Finishing', status: 'in-progress' as const, emoji: '🎬' },
]

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <section className="bg-[#F7F8FA] py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-xs font-black uppercase tracking-widest text-[#FC4C4C] mb-4">Projects</p>
          <h1 className="text-5xl md:text-6xl font-black text-[#141B24] leading-tight tracking-tight mb-6 max-w-2xl">
            Real homes. Real results.
          </h1>
          <p className="text-xl text-[#8D9EB2] leading-relaxed max-w-lg">
            Browse completed and in-progress renovations across the country.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
