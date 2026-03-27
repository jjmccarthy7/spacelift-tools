'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'

const howItWorks = [
  {
    step: '01',
    title: 'Explore your ideas',
    description:
      'Use our app to show us your space, describe the changes you want, and instantly see ballpark estimates.',
  },
  {
    step: '02',
    title: 'Talk with a Spacelift Advisor',
    description:
      'Our advisors help you find clarity. Ask questions, get honest guidance, and move forward with confidence.',
  },
  {
    step: '03',
    title: 'Build with local Spacelift Pros',
    description:
      'We recommend trusted local professionals from our network who are the best fit for you and your project.',
  },
]

// Homepage teaser — 4 featured projects
const featuredProjects = [
  { photo: '/hero-kitchen.png', roomType: 'Kitchen',      location: 'Austin, TX'    },
  { photo: '/hero-kitchen.png', roomType: 'Bathroom',     location: 'Denver, CO'    },
  { photo: '/hero-kitchen.png', roomType: 'Living Room',  location: 'Chicago, IL'   },
  { photo: '/hero-kitchen.png', roomType: 'Outdoor',      location: 'Seattle, WA'   },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-kitchen.png"
            alt="Beautiful renovated home interior"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.04) 100%)',
            }}
          />
          {/* Left-side scrim: improves H1/H2/CTA contrast without darkening the full image */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0) 55%)',
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="max-w-2xl">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Give your home a Spacelift.
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
                Explore your ideas, talk with a Spacelift Advisor, and work with local Spacelift
                Pros to bring your renovation to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 bg-[#141B24] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1e2a38] transition-colors duration-200 text-base"
                >
                  Get Started <ArrowRight size={18} strokeWidth={1.25} />
                </Link>
                <Link
                  href="/homeowners"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#141B24] transition-colors duration-200 text-base"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">
              Renovation Made Approachable
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              Your renovation, in three simple steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, description }) => (
              <div
                key={step}
                className="bg-white rounded-[32px] p-8 shadow hover:shadow-lg transition-shadow duration-300"
              >
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

      {/* Brand Promise */}
      <section className="bg-[#141B24] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">
              Our promise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Renovation should feel within reach.
            </h2>
            <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-2xl mb-6">
              Homes matter. They’re where mornings begin, where dinners stretch long after the
              food is gone, where life unfolds in a thousand small moments.
            </p>
            <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-2xl mb-12">
              Too many people live in spaces that don’t quite work — not because they
              don’t dream of something better, but because renovation has always felt too
              complicated to begin. That’s exactly what Spacelift is here to change.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
            >
              Start your renovation <ArrowRight size={18} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* Real Results — Projects Teaser */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          {/* mb-12 = 48px gap between heading row and card grid (was mb-16 = 64px) */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">
                Real results
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight">
                Homes transformed by Spacelift.
              </h2>
            </div>
            {/* Arrow nudges right on hover */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#141B24] font-semibold hover:text-[#FC4C4C] transition-colors duration-200 text-sm group/link"
            >
              View all projects{' '}
              <span className="transition-transform duration-150 ease-out group-hover/link:translate-x-[3px]">
                <ArrowRight size={16} strokeWidth={1.25} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
