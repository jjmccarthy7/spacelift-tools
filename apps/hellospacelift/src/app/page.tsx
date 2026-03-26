'use client'

import { useState, useEffect } from 'react'
import StepCarousel from '@/components/StepCarousel'
import PhoneMock from '@/components/PhoneMock'
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

const STEP_COUNT = 5

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEP_COUNT)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* HERO SECTION overflow-visible so the tilted phone bottom can bleed below the section boundary,
          matching the reference design. The section itself clips via the page scroll context rather
          than cutting off the phone. */}
      <section
        className="py-32 lg:py-40 relative"
        style={{
          background:
            'radial-gradient(ellipse 80% 90% at 75% 60%, rgba(255,255,255,0.55) 0%, rgba(236,239,243,0.35) 35%, rgba(238,241,244,0) 70%), #EEF1F4',
        }}
      >
        {/* Depth layer: soft bloom behind phone position */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-[10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(240,240,242,0.35) 30%, rgba(220,224,230,0.18) 55%, rgba(247,248,250,0) 75%)',
            filter: 'blur(48px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          {/* Hero content: left column for text, phone absolutely positioned on desktop */}
          <div className="mt-16 lg:mt-12 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-8">

            {/* LEFT COLUMN: headline, subheadline, step carousel */}
            <div className="flex-1 min-w-0 max-w-[620px]">
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#141B24] leading-[1.05] tracking-[-0.02em]">
                Love where you live.
              </h1>
              <p className="mt-6 text-[30px] text-[#141B24] leading-relaxed max-w-xl">
                Renovate your space in five simple steps.
              </p>

              {/* Step carousel — left-side content only */}
              <div className="mt-12">
                <StepCarousel activeStep={activeStep} onStepChange={setActiveStep} />
              </div>
            </div>

            {/* RIGHT COLUMN: tablet + mobile phone (lg: phone is absolutely positioned via PhoneMock) */}
            <div className="flex-shrink-0 flex lg:hidden justify-center">
              <PhoneMock step={activeStep} />
            </div>

          </div>

          {/* DESKTOP: phone rendered absolutely — outside the flex row, inside relative container */}
          <div className="hidden lg:block">
            <PhoneMock step={activeStep} />
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
