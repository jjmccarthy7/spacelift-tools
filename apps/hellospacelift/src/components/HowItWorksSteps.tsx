// Single source of truth for the How It Works / Three Steps card content.
// Both the homepage and the Homeowners page render this component.
// To update copy, edit the `steps` array below — one change propagates everywhere.

const steps = [
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

export default function HowItWorksSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map(({ step, title, description }) => (
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
  )
}
