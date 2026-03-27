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
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#8D9EB2] uppercase tracking-widest mb-4">Download the app</p>
                <a href="#" className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl px-5 py-4 w-full">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 leading-none mb-1">Download on the</p>
                    <p className="text-base font-bold text-white leading-none">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl px-5 py-4 w-full">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199a1 1 0 01.028 1.442L15.415 12l2.31 2.31-.028-.028a1 1 0 01-.028 1.329l-.028.028-2.31-2.31-1.31 1.31-2.302-2.302 1.31-1.31-2.31-2.31a1 1 0 011.357-1.357l2.31 2.31 1.31-1.31 2.302 2.302-1.31 1.31zm-14.09-8.175l10.937 6.333-2.302 2.302-8.635-8.635z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 leading-none mb-1">Get it on</p>
                    <p className="text-base font-bold text-white leading-none">Google Play</p>
                  </div>
                </a>
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