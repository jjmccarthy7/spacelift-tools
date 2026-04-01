import Link from 'next/link'
import { ArrowRight, Home, Search, Users } from 'lucide-react'
import HowItWorksSteps from '@/components/HowItWorksSteps'

const useCases = [
  {
    icon: Home,
    audience: 'Sellers',
    question: 'What should we fix before listing?',
    description:
      'Help your sellers understand exactly what improvements will move the needle — and get honest estimates before they spend a dollar.',
  },
  {
    icon: Search,
    audience: 'Buyers',
    question: 'What would it cost to renovate this?',
    description:
      'Walk into every showing with the ability to answer the question buyers always ask. Turn fixer-uppers into opportunities.',
  },
  {
    icon: Users,
    audience: 'Past Clients',
    question: 'Thinking about improving your home?',
    description:
      'Stay top of mind long after closing. Give your clients a reason to call you — and a reason to refer you.',
  },
]

export default function AgentsPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="bg-[#141B24] min-h-[80vh] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
              For Real Estate Agents
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              The agent who understands renovations wins.
            </h1>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
              Be the agent who knows what renovations cost — and how to get them done for your clients.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
            >
              Download the App <ArrowRight size={18} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">
              Built for every conversation
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-4xl">
              The renovation platform agents<br />can use with every client.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map(({ icon: Icon, audience, question, description }) => (
              <div
                key={audience}
                className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#EEF1F4]">
                    <Icon size={20} strokeWidth={1.25} className="text-[#3B86E1]" />
                  </div>
                </div>
                <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-3 block">
                  {audience}
                </span>
                <h3 className="text-xl font-bold text-[#141B24] mb-3 leading-snug">
                  "{question}"
                </h3>
                <p className="text-[#8D9EB2] text-base leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">
              How it works
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-4xl">
              Three steps to a renovation<br />your clients will love.
            </h2>
          </div>
          <HowItWorksSteps />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#FC4C4C] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <span className="text-xs font-black tracking-widest uppercase text-white/70 mb-6 block">
            Ready?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8 max-w-2xl mx-auto">
            Become the renovation expert your clients rely on.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-12">
            Download the Spacelift app and start showing every client what's possible — before they even ask.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#FC4C4C] font-semibold px-8 py-4 rounded-full hover:bg-[#EEF1F4] transition-colors duration-200 text-base"
          >
            Download the App <ArrowRight size={18} strokeWidth={1.25} />
          </Link>
        </div>
      </section>

    </div>
  )
}
