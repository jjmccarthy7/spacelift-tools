'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'

// ── Project data ──────────────────────────────────────────────────────────────
const allProjects = projectsData
  .filter((p) => p.active)
  .map((p) => ({ photo: p.after_image, roomType: p.room_type, location: p.location_display }))

// ── Filter groups ─────────────────────────────────────────────────────────────
// Maps UI filter label -> raw roomTypes it should match
const filterGroups: Record<string, string[]> = {
  Kitchen:         ['Kitchen'],
  Bathroom:        ['Bathroom'],
  'Living Spaces': ['Bedroom', 'Dining Room', 'Family Room', 'Living Room'],
  Outdoor:         ['Exterior', 'Garden', 'Pool'],
  Additions:       ['Conversions', 'Atrium'],
  Utility:         ['Laundry'],
}

const filterLabels = ['All', ...Object.keys(filterGroups)]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) =>
          (filterGroups[activeFilter] ?? []).includes(p.roomType)
        )

  return (
    <div className="pt-16">
      {/* Page hero */}
      <section className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">
            Real results
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Homes transformed by Spacelift.
          </h1>
          <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-xl">
            Every project here started with a homeowner who imagined something better. These are
            their spaces.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filterLabels.map((label) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeFilter === label
                    ? 'bg-[#FC4C4C] text-white'
                    : 'bg-[#EEF1F4] text-[#141B24] hover:bg-[#141B24] hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid — 3 col desktop / 2 col tablet / 1 col mobile, 32px gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8D9EB2] text-lg">No projects found for this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EEF1F4] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6">
            Ready to add yours to the list?
          </h2>
          <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-md mx-auto mb-10">
            Every one of these projects started with a homeowner who decided to make it real. Yours
            can too.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
          >
            Get Started <ArrowRight size={18} strokeWidth={1.25} />
          </Link>
        </div>
      </section>
    </div>
  )
}
