import Link from 'next/link'
import { ArrowRight, Smartphone, MessageCircle, HardHat, CheckCircle } from 'lucide-react'

const problems = [
  { text: 'You have ideas but no idea where to start.' },
  { text: 'You&apos;ve heard renovation horror stories.' },
  { text: 'You don&apos;t know who to trust.' },
  { text: 'The costs feel unpredictable and scary.' },
  { text: 'That project has been on the list for years.' },
  ]

const howItWorks = [
  {
        step: '01',
        icon: Smartphone,
        title: 'Explore with the app',
        description: 'Describe your project, upload photos of your space, and get a real sense of what&apos;s possible — scope, style, and cost — all before you talk to anyone.',
  },
  {
        step: '02',
        icon: MessageCircle,
        title: 'Talk to a Spacelift Advisor',
        description: 'Our advisors are renovation experts, not salespeople. They&apos;ll help you understand your options, ask the right questions, and build a plan you feel confident in.',
  },
  {
        step: '03',
        icon: HardHat,
        title: 'Build with local Spacelift Pros',
        description: 'We match you with vetted local professionals who are the right fit for your project. They&apos;ll do the work. You&apos;ll love the result.',
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
          
            {/* ── HERO ── */}
                <section className="bg-white min-h-[80vh] flex items-center">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
                                  <div className="max-w-3xl">
                                              <span className="inline-block text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6">
                                                            For homeowners
                                              </span>span>
                                              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8">
                                                            The space you&apos;ve imagined is closer than you think.
                                              </h1>h1>
                                              <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
                                                            Renovation doesn&apos;t have to be overwhelming. Spacelift guides you from the first idea all the way through to a finished space you love.
                                              </p>p>
                                              <div className="flex flex-col sm:flex-row gap-4">
                                                            <Link
                                                                              href="/get-started"
                                                                              className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
                                                                            >
                                                                            Get Started <ArrowRight size={18} strokeWidth={1.25} />
                                                            </Link>Link>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* ── EMOTIONAL PROBLEM ── */}
                <section className="bg-[#141B24] py-24 md:py-32">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                              <div>
                                                            <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6 block">Sound familiar?</span>span>
                                                            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                                                            Those ideas have been sitting there long enough.
                                                            </h2>h2>
                                                            <p className="text-lg text-[#8D9EB2] leading-relaxed mb-10">
                                                                            So many people live in spaces that don&apos;t quite work. Not because they don&apos;t want something better — but because renovation has always felt too hard to begin. We built Spacelift to change that.
                                                            </p>p>
                                                            <Link
                                                                              href="/get-started"
                                                                              className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
                                                                            >
                                                                            Start today <ArrowRight size={18} strokeWidth={1.25} />
                                                            </Link>Link>
                                              </div>div>
                                              <div className="space-y-4">
                                                {problems.map((p, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white/5 rounded-2xl px-6 py-5">
                                              <CheckCircle size={20} strokeWidth={1.25} className="text-[#FC4C4C] mt-0.5 flex-shrink-0" />
                                              <p className="text-white text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: p.text }} />
                            </div>div>
                          ))}
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* ── HOW IT WORKS ── */}
                <section className="bg-[#EEF1F4] py-24 md:py-32">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
                                  <div className="mb-16">
                                              <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C]">How it works</span>span>
                                              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
                                                            Three steps to a space you love.
                                              </h2>h2>
                                  </div>div>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {howItWorks.map(({ step, icon: Icon, title, description }) => (
                          <div key={step} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                                          <div className="flex items-center gap-3 mb-6">
                                                            <span className="text-xs font-black tracking-widest text-[#FC4C4C]">{step}</span>span>
                                                            <div className="w-px h-4 bg-[#EEF1F4]" />
                                                            <Icon size={20} strokeWidth={1.25} className="text-[#141B24]" />
                                          </div>div>
                                          <h3 className="text-xl font-bold text-[#141B24] mb-3">{title}</h3>h3>
                                          <p className="text-[#8D9EB2] text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
                          </div>div>
                        ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* ── PROJECTS ── */}
                <section className="bg-white py-24 md:py-32">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
                                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                                              <div>
                                                            <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C]">Real results</span>span>
                                                            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight">
                                                                            Spaces our homeowners love.
                                                            </h2>h2>
                                              </div>div>
                                              <Link
                                                              href="/projects"
                                                              className="inline-flex items-center gap-2 text-[#141B24] font-semibold hover:text-[#FC4C4C] transition-colors duration-200 text-sm"
                                                            >
                                                            View all projects <ArrowRight size={16} strokeWidth={1.25} />
                                              </Link>Link>
                                  </div>div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {projects.map((project) => (
                          <div key={project.name} className="bg-[#EEF1F4] rounded-3xl p-6 hover:shadow-md transition-shadow duration-300">
                                          <div className="text-4xl mb-5">{project.emoji}</div>div>
                                          <div className="flex items-center justify-between mb-2">
                                                            <span className="text-xs font-semibold text-[#8D9EB2]">{project.type}</span>span>
                                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                                                project.status === 'Completed'
                                                  ? 'bg-[#0ED096]/15 text-[#0ED096]'
                                                  : 'bg-[#3B86E1]/15 text-[#3B86E1]'
                          }`}>
                                                              {project.status}
                                                            </span>span>
                                          </div>div>
                                          <h3 className="text-base font-bold text-[#141B24] mb-1">{project.name}</h3>h3>
                                          <p className="text-sm text-[#8D9EB2] mb-3">{project.location}</p>p>
                                          <p className="text-lg font-black text-[#141B24]">{project.budget}</p>p>
                          </div>div>
                        ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* ── GET STARTED ── */}
                <section className="bg-[#FC4C4C] py-24 md:py-32">
                        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
                                  <span className="text-xs font-black tracking-widest uppercase text-white/70 mb-6 block">Ready?</span>span>
                                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8 max-w-2xl mx-auto">
                                              Give your home a Spacelift.
                                  </h2>h2>
                                  <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-12">
                                              Every great renovation starts with a simple question: do I love the place I live? If the answer isn&apos;t yes — let&apos;s change that.
                                  </p>p>
                                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                              <Link
                                                              href="/get-started"
                                                              className="inline-flex items-center justify-center gap-2 bg-white text-[#FC4C4C] font-semibold px-8 py-4 rounded-full hover:bg-[#EEF1F4] transition-colors duration-200 text-base"
                                                            >
                                                            Get Started <ArrowRight size={18} strokeWidth={1.25} />
                                              </Link>Link>
                                  </div>div>
                        </div>div>
                </section>section>
          
          </div>div>
        )
}</div>
