import StepCarousel from '@/components/StepCarousel'
import ProjectCard from '@/components/ProjectCard'
import ReviewCard from '@/components/ReviewCard'

const projects = [
  { name: 'Modern Kitchen Overhaul', location: 'Austin, TX', budget: '$48,500', type: 'Kitchen Renovation', status: 'completed' as const, emoji: '🍳' },
  { name: 'Primary Bath Spa Retreat', location: 'Denver, CO', budget: '$32,000', type: 'Bathroom Remodel', status: 'completed' as const, emoji: '🛁' },
  { name: 'Open Floor Plan Conversion', location: 'Chicago, IL', budget: '$55,200', type: 'Structural + Interior', status: 'in-progress' as const, emoji: '🏗️' },
  { name: 'Backyard Deck & Pergola', location: 'Seattle, WA', budget: '$18,900', type: 'Outdoor Living', status: 'completed' as const, emoji: '🌿' },
]

const reviews = [
  {
    quote: 'Spacelift made the whole process so much less stressful. Our advisor was phenomenal and our contractor was amazing.',
    name: 'Sarah M.',
    role: 'Homeowner in Austin, TX',
    rating: 5,
    initials: 'SM',
    avatarColor: '#FC4C4C',
  },
  {
    quote: 'We got three great contractor matches within 48 hours. The whole project came in on time and under budget.',
    name: 'James L.',
    role: 'Homeowner in Denver, CO',
    rating: 5,
    initials: 'JL',
    avatarColor: '#3B86E1',
  },
  {
    quote: 'I was nervous about a big renovation but Spacelift guided us every step of the way. Truly a 5-star experience.',
    name: 'Priya K.',
    role: 'Homeowner in Chicago, IL',
    rating: 5,
    initials: 'PK',
    avatarColor: '#A27BFC',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-16 bg-[#F7F8FA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-24">
          {/* Headline */}
          <div className="max-w-2xl mb-12 md:mb-0">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-4">
              Love where<br />you live.
            </h1>
            <p className="text-xl md:text-2xl text-[#8D9EB2] font-light leading-relaxed">
              Renovate your space in five simple steps.
            </p>
          </div>

          {/* Step carousel with phone */}
          <div className="mt-16">
            <StepCarousel />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-[#FC4C4C] mb-3">Projects</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-tight tracking-tight max-w-lg">
              Real homes. Real results.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-[#FC4C4C] mb-3">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-tight tracking-tight max-w-lg">
              Homeowners love us.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#141B24]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 max-w-2xl mx-auto">
            Ready to transform your space?
          </h2>
          <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Join thousands of homeowners who found their perfect renovation partner with Spacelift.
          </p>
          <a
            href="#"
            className="inline-block bg-[#FC4C4C] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200"
          >
            Get the app
          </a>
        </div>
      </section>
    </>
  )
}
