import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const problems = [
  'You have ideas but no idea where to start.',
  'You’ve heard renovation horror stories.',
  'You don’t know who to trust.',
  'The costs feel unpredictable and scary.',
  'That project has been on the list for years.',
]

const howItWorks = [
  {
    step: '01',
    title: 'Explore with the app',
    description: 'Describe your project, upload photos of your space, and get a real sense of what’s possible — scope, style, and cost — all before you talk to anyone.',
  },
  {
    step: '02',
    title: 'Talk to a Spacelift Advisor',
    description: 'Our advisors are renovation experts, not salespeople. They’ll help you understand your options, ask the right questions, and build a plan you feel confident in.',
  },
  {
    step: '03',
    title: 'Build with local Spacelift Pros',
    description: 'We match you with vetted local professionals who are the right fit for your project. They’ll do the work. You’ll love the result.',
  },
]

const projects = [
  { name: 'Modern Kitchen Overhaul', location: 'Austin, TX', type: 'Kitchen', budget: '$48,500', status: 'Completed', emoji: '🍳' },
  { name: 'Primary Bath Spa Retreat', location: 'Denver, CO', type: 'Bathroom', budget: '$32,000', status: 'Completed', emoji: '🛁' },
  { name: 'Open Floor Plan Conversion', location: 'Chicago, IL', type: 'Structural', budget: '$55,200', status: 'In Progress', emoji: '🏗️' },
  { name: 'Backyard Deck & Pergola', location: 'Seattle, WA', type: 'Outdoor', budget: '$18,900', status: 'Completed', emoji: '🌿' },
  { name: 'Primary Suite Addition', location: 'Nashville, TN', type: 'Addition', budget: '$72,000', status: 'Completed', emoji: '🛏️' },
  { name: 'Basement Finishing', location: 'Minneapolis, MN', type: 'Basement', budget: '$41,200', status: 'Completed', emoji: '🏠' },
]

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
              The space you’ve imagined is closer than you think.
            </h1>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
              Renovation doesn’t have to be overwhelming. Spacelift guides you from the first idea all the way through to a finished space you love.
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
                So many people live in spaces that don’t quite work. Not because they don’t want something better — but because renovation has always felt too hard to begin. We built Spacelift to change that.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-6">
                  <span className="text-xs font-black tracking-widest text-[#FC4C4C]">{step}</span>
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
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#141B24] font-semibold hover:text-[#FC4C4C] transition-colors duration-200 text-sm">
              View all projects <ArrowRight size={16} strokeWidth={1.25} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="bg-[#EEF1F4] rounded-3xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-5">{project.emoji}</div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#8D9EB2]">{project.type}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.status === 'Completed' ? 'bg-[#0ED096]/15 text-[#0ED096]' : 'bg-[#3B86E1]/15 text-[#3B86E1]'}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#141B24] mb-1">{project.name}</h3>
                <p className="text-sm text-[#8D9EB2] mb-3">{project.location}</p>
                <p className="text-lg font-black text-[#141B24]">{project.budget}</p>
              </div>
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
            Every great renovation starts with a simple question: do I love the place I live? If the answer isn’t yes — let’s change that.
          </p>
          <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-white text-[#FC4C4C] font-semibold px-8 py-4 rounded-full hover:bg-[#EEF1F4] transition-colors duration-200 text-base">
            Get Started <ArrowRight size={18} strokeWidth={1.25} />
          </Link>
        </div>
      </section>

    </div>
  )
}
