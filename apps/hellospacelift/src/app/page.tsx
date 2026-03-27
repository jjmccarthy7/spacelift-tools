import Link from 'next/link'
import { ArrowRight, Smartphone, MessageCircle, HardHat } from 'lucide-react'

const howItWorks = [
  {
    step: '01',
    icon: Smartphone,
    title: 'Explore with the app',
    description: 'Describe your project, upload photos, and get a real sense of scope and cost — all before talking to anyone.',
  },
  {
    step: '02',
    icon: MessageCircle,
    title: 'Talk to a Spacelift Advisor',
    description: 'Our advisors help you find clarity. Ask questions, get honest guidance, and move forward with confidence.',
  },
  {
    step: '03',
    icon: HardHat,
    title: 'Build with local Spacelift Pros',
    description: 'We match you with vetted local professionals who do great work. They bring your project to life.',
  },
]

const projects = [
  { name: 'Modern Kitchen Overhaul', location: 'Austin, TX', type: 'Kitchen', budget: '$48,500', status: 'Completed', emoji: '🍳' },
  { name: 'Primary Bath Spa Retreat', location: 'Denver, CO', type: 'Bathroom', budget: '$32,000', status: 'Completed', emoji: '🛁' },
  { name: 'Open Floor Plan Conversion', location: 'Chicago, IL', type: 'Structural', budget: '$55,200', status: 'In Progress', emoji: '🏗️' },
  { name: 'Backyard Deck & Pergola', location: 'Seattle, WA', type: 'Outdoor', budget: '$18,900', status: 'Completed', emoji: '🌿' },
]

export default function HomePage() {
  return (
    <div className="pt-16">

      <section className="bg-white min-h-[88vh] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6">
              Love where you live
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8">
              Your home should feel like home.
            </h1>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
              Most people dream about improving their space. Spacelift makes it possible — with the tools, advisors, and trusted local professionals to bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
                Get Started <ArrowRight size={18} strokeWidth={1.25} />
              </Link>
              <Link href="/homeowners" className="inline-flex items-center justify-center gap-2 border border-[#141B24] text-[#141B24] font-semibold px-8 py-4 rounded-full hover:bg-[#141B24] hover:text-white transition-colors duration-200 text-base">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C]">How it works</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              Three steps to a space you love.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black tracking-widest text-[#FC4C4C]">{step}</span>
                  <div className="w-px h-4 bg-[#EEF1F4]" />
                  <Icon size={20} strokeWidth={1.25} className="text-[#141B24]" />
                </div>
                <h3 className="text-xl font-bold text-[#141B24] mb-3">{title}</h3>
                <p className="text-[#8D9EB2] text-base leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141B24] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6 block">Our promise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Renovation should feel within reach.
            </h2>
            <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-2xl mb-6">
              Homes matter. They’re where mornings begin, where dinners stretch long after the food is gone, where life unfolds in a thousand small moments.
            </p>
            <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-2xl mb-12">
              Too many people live in spaces that don’t quite work — not because they don’t dream of something better, but because renovation has always felt too complicated to begin. That’s exactly what Spacelift is here to change.
            </p>
            <Link href="/get-started" className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
              Start your renovation <ArrowRight size={18} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C]">Real results</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight">
                Homes transformed.
              </h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#141B24] font-semibold hover:text-[#FC4C4C] transition-colors duration-200 text-sm">
              View all projects <ArrowRight size={16} strokeWidth={1.25} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

    </div>
  )
}