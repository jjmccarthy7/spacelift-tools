import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'

// Real Results — 6 featured active projects, same data source as /projects
const featuredProjects = projectsData
  .filter((p) => p.featured && p.active)
  .slice(0, 6)
  .map((p) => ({
    id: p.id,
    photo: p.after_image,
    roomType: p.room_type,
    location: p.location_display,
  }))

const problems = [
  'You have ideas but no idea where to start.',
  "You've heard renovation horror stories.",
  "You don't know who to trust.",
  'The costs feel unpredictable and scary.',
  'That project has been on the list for years.',
]

const howItWorks = [
  {
    step: '01',
    title: 'Explore with the app',
    description: "Describe your project, upload photos of your space, and get a real sense of what's possible — scope, style, and cost — all before you talk to anyone.",
  },
  {
    step: '02',
    title: 'Talk to a Spacelift Advisor',
    description: "Our advisors are renovation experts, not salespeople. They'll help you understand your options, ask the right questions, and build a plan you feel confident in.",
  },
  {
    step: '03',
    title: 'Build with local Spacelift Pros',
    description: "We match you with vetted local professionals who are the right fit for your project. They'll do the work. You'll love the result.",
  },
]


export default function HomeownersPage() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">

        {/* Graph-paper background — blueprint grid, ~6% opacity, scoped to this section */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(59,134,225,0.115) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(59,134,225,0.115) 1px, transparent 1px)',
              'linear-gradient(rgba(59,134,225,0.078) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(59,134,225,0.078) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '200px 200px, 200px 200px, 40px 40px, 40px 40px',
          }}
        />

        {/* White wash over text column — reduces grid competition behind copy */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0) 68%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">

            {/* Left column — text */}
            <div>
              <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
                For homeowners
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[4.875rem] font-black text-[#141B24] leading-[1.05] tracking-tight mb-8">
                The space you&apos;ve imagined is closer than you think.
              </h1>
              <p className="text-lg md:text-xl text-[#545F6B] leading-relaxed max-w-xl mb-12">
                Use the Spacelift app to show us your space, describe the changes you want, and see instant ballpark estimates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedLink
                  href="/get-started"
                  eventProps={{ cta_text: 'Get Started', location: 'homeowners_hero', destination: '/get-started' }}
                  className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
                >
                  Get Started <ArrowRight size={18} strokeWidth={1.25} />
                </TrackedLink>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#3B86E1] text-[#3B86E1] font-semibold px-8 py-4 rounded-full hover:bg-[#EEF1F4] transition-colors duration-200 text-base"
                >
                  Our Process
                </Link>
              </div>
            </div>

            {/* Right column — phone */}
            <div className="hidden lg:flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/camera-screen-with-bezel.png"
                alt="Spacelift app on iPhone"
                style={{
                  width: '346px',
                  height: 'auto',
                  filter: 'drop-shadow(0 50px 90px rgba(0,0,0,0.18)) drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#141B24] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">Sound familiar?</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-8">
                Those ideas have been sitting there long enough.
              </h2>
              <p className="text-lg text-[#8D9EB2] leading-relaxed mb-10">
                So many people live in spaces that don't quite work. Not because they don't want something better — but because renovation has always felt too hard to begin. We built Spacelift to change that.
              </p>
              <TrackedLink
                href="/get-started"
                eventProps={{ cta_text: 'Start today', location: 'homeowners_sound_familiar', destination: '/get-started' }}
                className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
              >
                Start today <ArrowRight size={18} strokeWidth={1.25} />
              </TrackedLink>
            </div>
            <div className="space-y-4">
              {problems.map((text, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 rounded-2xl px-6 py-5">
                  <CheckCircle size={20} strokeWidth={1.25} className="text-[#FC4C4C] mt-0.5 flex-shrink-0" />
                  <p className="text-white text-base leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">How it works</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              Three steps to a space you love.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-3">
                  <span className="text-5xl font-black leading-none text-[#3B86E1]">{step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#141B24] mb-3">{title}</h3>
                <p className="text-[#8D9EB2] text-base leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">Real results</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight">
                Spaces our homeowners love.
              </h2>
            </div>
            <TrackedLink
              href="/projects"
              eventProps={{ cta_text: 'View all projects', location: 'homeowners_projects', destination: '/projects' }}
              className="inline-flex items-center gap-2 text-[#141B24] font-semibold hover:text-[#FC4C4C] transition-colors duration-200 text-sm"
            >
              View all projects <ArrowRight size={16} strokeWidth={1.25} />
            </TrackedLink>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                photo={project.photo}
                roomType={project.roomType}
                location={project.location}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FC4C4C] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <span className="text-xs font-black tracking-widest uppercase text-white/70 mb-6 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8 max-w-2xl mx-auto">
            Give your home a Spacelift.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-12">
            Every great renovation starts with a simple question: do I love the place I live? If the answer isn't yes — let's change that.
          </p>
          <TrackedLink
            href="/get-started"
            eventProps={{ cta_text: 'Get Started', location: 'homeowners_bottom_cta', destination: '/get-started' }}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#FC4C4C] font-semibold px-8 py-4 rounded-full hover:bg-[#EEF1F4] transition-colors duration-200 text-base"
          >
            Get Started <ArrowRight size={18} strokeWidth={1.25} />
          </TrackedLink>
        </div>
      </section>

    </div>
  )
}
