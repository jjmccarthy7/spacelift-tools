'use client'
import { useEffect, useState } from 'react'
import PhoneMock from './PhoneMock'

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

export default function StepCarousel() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    /*
     * items-start so the phone top can sit above the left column text.
     * The phone's own translateY(-80px) lifts it up relative to its
     * natural position in the flex row, clearing above the H1.
     * overflow-visible ensures the lifted phone isn't clipped.
     */
    <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16 overflow-visible">
      {/* Left: step content — sits naturally at the top of the row */}
      <div className="flex-1 max-w-xl">
        {/* Step title & copy */}
        <div className="min-h-[120px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#141B24] leading-tight tracking-tight mb-3 transition-all duration-300">
            {steps[activeStep].title}
          </h2>
          <p className="text-base text-[#8D9EB2] leading-relaxed max-w-[55ch]">
            {steps[activeStep].copy}
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mt-8">
          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className="flex items-center gap-2 group"
              aria-label={"Go to step " + step.number}
            >
              <span
                className={[
                  'text-sm font-bold tabular-nums transition-all duration-200',
                  index === activeStep
                    ? 'text-[#141B24]'
                    : 'text-[#8D9EB2] hover:text-[#141B24]',
                ].join(' ')}
              >
                {step.number}
              </span>
              {index === activeStep && (
                <span className="block w-4 h-0.5 bg-[#FC4C4C] rounded-full" />
              )}
              {index < steps.length - 1 && (
                <span className="block w-3 h-px bg-[#8D9EB2]/50 rounded-full" />
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

      {/* Right: phone mockup — translateY(-80px) in PhoneMock lifts it above the row */}
      <PhoneMock step={activeStep} />
    </div>
  )
}
