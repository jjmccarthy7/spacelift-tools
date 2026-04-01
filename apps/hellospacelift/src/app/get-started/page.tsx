import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BetaRequestForm from '@/components/BetaRequestForm'

const advisorExpectations = [
  'A real conversation — no scripts, no pressure',
  'Honest guidance about your project and options',
  'Help understanding scope, cost, and next steps',
  'Introductions to vetted Spacelift Pros when you\'re ready',
]

export default function GetStartedPage() {
  return (
    <div className="pt-16">

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
            Get started
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Love where you live.
          </h1>
          <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl">
            Start by exploring your ideas in the Spacelift app, or talk with a Spacelift Advisor about your project. Choose what feels right for you.
          </p>
        </div>
      </section>

      <section className="bg-[#EEF1F4] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-[#141B24] rounded-3xl p-10 md:p-12 flex flex-col">
              <div className="mb-3">
                <span className="text-5xl font-black leading-none text-[#3B86E1]">01</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Get the Spacelift app.
              </h2>
              <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 flex-grow">
                Explore the possibilities by taking a video of your space and describing the changes you want to make. The app instantly gives you a real sense of scope and cost before you talk to anyone. Then book time with a Spacelift Advisor whenever you&apos;re ready.
              </p>
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#8D9EB2] uppercase tracking-widest">Request early access</p>
                <BetaRequestForm />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 md:p-12 flex flex-col border border-[#EEF1F4]">
              <div className="mb-3">
                <span className="text-5xl font-black leading-none text-[#3B86E1]">02</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6">
                Talk to a Spacelift Advisor.
              </h2>
              <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 flex-grow">
                Not sure where to start? That&apos;s exactly what our advisors are here for. They&apos;re renovation experts — not salespeople — and a conversation with them is free, honest, and genuinely useful.
              </p>
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#8D9EB2] uppercase tracking-widest">What to expect</p>
                <ul className="space-y-3">
                  {advisorExpectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FC4C4C] mt-2.5 flex-shrink-0" />
                      <span className="text-base text-[#141B24] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base w-full justify-center">
                    Book a free conversation <ArrowRight size={18} strokeWidth={1.25} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6 max-w-2xl mx-auto">
            Every great renovation starts with a simple question.
          </h2>
          <p className="text-xl text-[#FC4C4C] font-black mb-8">Do I love the place I live?</p>
          <p className="text-lg text-[#8D9EB2] leading-relaxed max-w-xl mx-auto">
            At Spacelift, we believe you should. And that you can. Because life is better when you love where you live.
          </p>
        </div>
      </section>

    </div>
  )
}
