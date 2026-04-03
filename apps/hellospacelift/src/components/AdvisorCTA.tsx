'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function AdvisorCTA() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    // Analytics hook — replace with actual tracking call when ready
    // e.g. window.analytics?.track('advisor_cta_clicked')
    setClicked(true)
  }

  return (
    <div className="pt-4">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base w-full justify-center"
      >
        Book a free conversation <ArrowRight size={18} strokeWidth={1.25} />
      </button>
      {clicked && (
        <p className="text-[#8D9EB2] text-sm leading-relaxed mt-4">
          Our advisors are currently fully booked as we prepare the Spacelift launch. New sessions will open on June 1.
        </p>
      )}
    </div>
  )
}
