import Link from 'next/link'
import { ArrowRight, Smartphone, MessageCircle } from 'lucide-react'

const advisorExpectations = [
  'A real conversation — no scripts, no pressure',
  'Honest guidance about your project and options',
  'Help understanding scope, cost, and next steps',
  'An introduction to vetted Spacelift Pros when you’re ready',
]

export default function GetStartedPage() {
  return (
    <div className="pt-16">

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <span className="inline-block text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-6">
            Get started
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8 max-w-3xl mx-auto">
            Two ways to give your home a Spacelift.
          </h1>
          <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mx-auto">
            Whether you’re ready to dive in or just want to talk it through — we’re here. Choose what feels right for you.
          </p>
        </div>
      </section>

      <section className="bg-[#EEF1F4] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-[#141B24] rounded-3xl p-10 md:p-12 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#FC4C4C]/10 flex items-center justify-center mb-8">
                <Smartphone size={24} strokeWidth={1.25} className="text-[#FC4C4C]" />
              </div>
              <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-4 block">Option 01</span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Get the Spacelift app.
              </h2>
              <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 flex-grow">
                Describe your project, upload photos, and explore what’s possible — all from your phone. Get a real sense of scope and cost before you talk to anyone. Start at your own pace, on your own terms.
              </p>
              {/* TODO: Add App Store and Google Play links once store listings are approved. */}
              <div className="flex flex-col items-start" style={{ gap: '12px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/badge-app-store.svg"
                  alt="Download on the App Store"
                  style={{ width: '135px', height: '40px', objectFit: 'contain', objectPosition: 'left' }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/badge-google-play.svg"
                  alt="Get it on Google Play"
                  style={{ width: '135px', height: '40px', objectFit: 'contain', objectPosition: 'left' }}
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 md:p-12 flex flex-col border border-[#EEF1F4]">
              <div className="w-12 h-12 rounded-2xl bg-[#FC4C4C]/10 flex items-center justify-center mb-8">
                <MessageCircle size={24} strokeWidth={1.25} className="text-[#FC4C4C]" />
              </div>
              <span className="text-xs font-black tracking-widest uppercase text-[#FC4C4C] mb-4 block">Option 02</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6">
                Talk to a Spacelift Advisor.
              </h2>
              <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 flex-grow">
                Not sure where to start? That’s exactly what our advisors are here for. They’re renovation experts — not salespeople. A conversation with them is free, honest, and genuinely useful.
              </p>
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#8D9EB2] uppercase tracking-widest">What to expect</p>
                <ul className="space-y-3">
                  {advisorExpectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FC4C4C] mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#141B24] leading-relaxed">{item}</span>
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