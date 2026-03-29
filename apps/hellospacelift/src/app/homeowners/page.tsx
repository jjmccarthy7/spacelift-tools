import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'

const problems = [
  'You have ideas but no idea where to start.',
  'You\u2019ve heard renovation horror stories.',
  'You don\u2019t know who to trust.',
  'The costs feel unpredictable and scary.',
]

const featuredProjects = projectsData.filter((p) => p.active).slice(0, 6)

export default function HomeownersPage() {
  return (
    <div className="pt-16">

      <section className="bg-white min-h-[80vh] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6">
              For homeowners
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8">
              The space you&apos;ve imagined is closer than you think.
            </h1>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
              Renovation doesn&apos;t have to be overwhelming. Spacelift guides you from the first idea all the way through to a finished space you love.
            </p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
              Get Started <ArrowRight size={18} strokeWidth={1.25} />
            </Link>
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
                So many people live in spaces that don&apos;t quite work. Not because they don&apos;t want something better — but because renovation has always felt too hard to begin. We built Spacelift to change that.
              </p>
              <Link href="/get-started" className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
                Start today <ArrowRight size={18} strokeWidth={1.25} />
              </Link>
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

      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">How it works</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              Three steps to a space you love.
            </h2>
          </div>
          <HowItWorksSteps />
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
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#141B24] font-semibold hover:text-[#FC4C4C] transition-colors duration-200 text-sm">
              View all projects <ArrowRight size={16} strokeWidth={1.25} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                photo={project.after_image}
                roomType={project.room_type}
                location={project.location_display}
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
            Every great renovation starts with a simple question: do I love the place I live? If the answer isn&apos;t yes — let&apos;s change that.
          </p>
          <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-white text-[#FC4C4C] font-semibold px-8 py-4 rounded-full hover:bg-[#EEF1F4] transition-colors duration-200 text-base">
            Get Started <ArrowRight size={18} strokeWidth={1.25} />
          </Link>
        </div>
      </section>

    </div>
  )
}
