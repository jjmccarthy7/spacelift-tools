'use client'

import { Dispatch, SetStateAction } from 'react'

const steps = [
  {
    number: '01',
    title: 'Show us your space',
    copy: "Upload photos and tell us about your project. We'll learn what matters most to you - style, budget, and timeline.",
  },
  {
    number: '02',
    title: 'Talk to an advisor',
    copy: 'A dedicated Spacelift advisor will review your project and guide you through the process from start to finish.',
  },
  {
    number: '03',
    title: 'Meet your matches',
    copy: "We'll introduce you to vetted renovation professionals perfectly matched to your project and preferences.",
  },
  {
    number: '04',
    title: 'Pick your partner',
    copy: "Review profiles, past work, and reviews. Choose the contractor who feels right - we've already verified them.",
  },
  {
    number: '05',
    title: 'Enjoy your project',
    copy: "Sit back while your space transforms. We'll be with you every step of the way to ensure a smooth renovation.",
  },
]

interface StepCarouselProps {
  activeStep: number
  onStepChange: Dispatch<SetStateAction<number>>
}

export default function StepCarousel({ activeStep, onStepChange }: StepCarouselProps) {
  return (
    <div className="max-w-xl">
      {/* Step title & copy */}
      <div className="min-h-[120px]">
        <p className="text-xs font-black uppercase tracking-widest text-[#FC4C4C] mb-3">
          Step {activeStep + 1}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#141B24] leading-tight tracking-tight mb-3 transition-all duration-300">
          {steps[activeStep].title}
        </h2>
        <p className="text-base text-[#141B24] leading-relaxed max-w-[55ch]">
          {steps[activeStep].copy}
        </p>
      </div>

      {/* Step indicator — pill/dot */}
      <div className="flex items-center gap-3 mt-8">
        {steps.map((_, index) => (
          <div
            key={index}
            style={{
              width: index === activeStep ? '24px' : '8px',
              height: '8px',
              borderRadius: '999px',
              backgroundColor: index === activeStep ? '#FC4C4C' : '#BBC5D1',
            }}
          />
        ))}
      </div>

    </div>
  )
}
