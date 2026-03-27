'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const allProjects = [
  { name: 'Modern Kitchen Overhaul', location: 'Austin, TX', type: 'Kitchen', budget: '$48,500', status: 'Completed', emoji: '🍳' },
  { name: 'Primary Bath Spa Retreat', location: 'Denver, CO', type: 'Bathroom', budget: '$32,000', status: 'Completed', emoji: '🛁' },
  { name: 'Open Floor Plan Conversion', location: 'Chicago, IL', type: 'Structural', budget: '$55,200', status: 'In Progress', emoji: '🏗️' },
  { name: 'Backyard Deck & Pergola', location: 'Seattle, WA', type: 'Outdoor', budget: '$18,900', status: 'Completed', emoji: '🌿' },
  { name: 'Primary Suite Addition', location: 'Nashville, TN', type: 'Addition', budget: '$72,000', status: 'Completed', emoji: '🛏️' },
  { name: 'Basement Finishing', location: 'Minneapolis, MN', type: 'Basement', budget: '$41,200', status: 'Completed', emoji: '🏠' },
  { name: 'Guest Bath Refresh', location: 'Portland, OR', type: 'Bathroom', budget: '$14,800', status: 'Completed', emoji: '🚿' },
  { name: 'Chef Kitchen Remodel', location: 'San Francisco, CA', type: 'Kitchen', budget: '$63,500', status: 'Completed', emoji: '👨‍🍳' },
  { name: 'Front Yard Landscaping', location: 'Phoenix, AZ', type: 'Outdoor', budget: '$22,000', status: 'In Progress', emoji: '🌵' },
  { name: 'Garage Conversion ADU', location: 'Los Angeles, CA', type: 'Addition', budget: '$89,000', status: 'Completed', emoji: '🏡' },
  { name: 'Home Office Build-Out', location: 'Boston, MA', type: 'Structural', budget: '$28,500', status: 'Completed', emoji: '💼' },
  { name: 'Laundry Room Upgrade', location: 'Atlanta, GA', type: 'Other', budget: '$9,200', status: 'Completed', emoji: '🧺' },
]

const roomTypes = ['All', 'Kitchen', 'Bathroom', 'Outdoor', 'Addition', 'Basement', 'Structural', 'Other']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.type === activeFilter)

  return (
    <div className="pt-16">

      <section className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6 block">Real results</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Homes transformed by Spacelift.
          </h1>
          <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-xl">
            Every project here started with a homeowner who imagined something better. These are their spaces.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap gap-3 mb-12">
            {roomTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${activeFilter === type ? 'bg-[#FC4C4C] text-white' : 'bg-[#EEF1F4] text-[#141B24] hover:bg-[#141B24] hover:text-white'}`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
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
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8D9EB2] text-lg">No projects found for this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6">
            Ready to add yours to the list?
          </h2>
          <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-md mx-auto mb-10">
            Every one of these projects started with a homeowner who decided to make it real. Yours can too.
          </p>
          <Link href="/get-started" className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
            Get Started <ArrowRight size={18} strokeWidth={1.25} />
          </Link>
        </div>
      </section>

    </div>
  )
}