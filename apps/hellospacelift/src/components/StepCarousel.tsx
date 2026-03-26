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
        <h2 className="text-3xl md:text-4xl font-bold text-[#141B24] leading-tight tracking-tight mb-3 transition-all duration-300">
          {steps[activeStep].title}
        </h2>
        <p className="text-base text-[#141B24] leading-relaxed max-w-[55ch]">
          {steps[activeStep].copy}
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-5 mt-8">
        {steps.map((step, index) => (
          <button
            key={step.number}
            onClick={() => onStepChange(index)}
            className="flex flex-col items-center group"
            aria-label={"Go to step " + step.number}
          >
            <span
              className={[
                'text-sm tabular-nums transition-all duration-200 tracking-[0.04em]',
                index === activeStep
                  ? 'font-bold text-[#141B24]'
                  : 'font-medium text-[#A4B1C1] hover:text-[#141B24]',
              ].join(' ')}
            >
              {step.number}
            </span>
            {index === activeStep && (
              <span className="block w-full h-[2px] bg-[#FC4C4C] mt-0.5 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-0.5 bg-[#EEF1F4] rounded-full overflow-hidden max-w-xs">
        <div
          className="h-full bg-[#FC4C4C] rounded-full transition-all duration-[4000ms] ease-linear"
          style={{ width: ((activeStep + 1) / steps.length * 100) + '%' }}
        />
      </div>
    </div>
  )
}
