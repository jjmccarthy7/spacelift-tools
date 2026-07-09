import Link from 'next/link'
import AdvisorCTA from '@/components/AdvisorCTA'

const advisorExpectations = [
  'A real conversation — no scripts, no pressure',
  'Honest guidance about your project and options',
  'Help understanding scope, cost, and next steps',
  'Introductions to vetted Spacelift Pros when you\'re ready',
]

export default function GetStartedPage() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">

        {/* Graph-paper background — blueprint grid, ~6% opacity, scoped to this section */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(59,134,225,0.115) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(59,134,225,0.115) 1px, transparent 1px)',
              'linear-gradient(rgba(59,134,225,0.078) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(59,134,225,0.078) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '200px 200px, 200px 200px, 40px 40px, 40px 40px',
          }}
        />

        {/* Subtle white wash over text — reduces grid competition behind copy */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0) 68%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
            Get started
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Love where you live.
          </h1>
          <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl">
            Start by exploring your ideas in the Spacelift app, or talk with a Spacelift Advisor. Choose the path that feels right.
          </p>
        </div>
      </section>

      {/* ── Option cards ─────────────────────────────────────────────────────── */}
      <section className="bg-[#EEF1F4] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Option 01 — App */}
            <div className="bg-[#141B24] rounded-3xl p-10 md:p-12 flex flex-col">
              <div className="mb-3">
                <span className="text-6xl font-black leading-none text-[#3B86E1]">01</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Get the Spacelift app.
              </h2>
              <p className="text-[#8D9EB2] text-lg leading-relaxed mb-14 flex-grow">
                Explore the possibilities by taking a video of your space and describing the changes you want to make. The app instantly gives you a real sense of scope and cost before you talk to anyone. Then book time with a Spacelift Advisor whenever you&apos;re ready.
              </p>
              {/* TODO: Add App Store and Google Play links once store listings are approved. */}
              <div className="flex flex-col sm:flex-row items-start" style={{ gap: '14px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/badge-app-store.svg"
                  alt="Download on the App Store"
                  style={{ width: '180px', height: '60px' }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/badge-google-play.svg"
                  alt="Get it on Google Play"
                  style={{ width: '203px', height: '60px' }}
                />
              </div>
            </div>

            {/* Option 02 — Advisor */}
            <div className="bg-white rounded-3xl p-10 md:p-12 flex flex-col border border-[#EEF1F4]">
              <div className="mb-3">
                <span className="text-6xl font-black leading-none text-[#3B86E1]">02</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6">
                Talk to a Spacelift Advisor.
              </h2>
              <p className="text-[#8D9EB2] text-lg leading-relaxed mb-10 flex-grow">
                Not sure where to start? That&apos;s exactly what our advisors are here for. They&apos;re renovation experts — not salespeople — and the conversation is free, honest, and genuinely useful.
              </p>
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#8D9EB2] uppercase tracking-widest">What to expect</p>
                <ul className="space-y-3">
                  {advisorExpectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8D9EB2] mt-2.5 flex-shrink-0" />
                      <span className="text-lg text-[#8D9EB2] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <AdvisorCTA />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Closing ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-6 mx-auto">
            Every great renovation starts with<br /> a simple question.
          </h2>
          <p className="text-2xl text-[#FC4C4C] font-black mb-5">Do I love the place I live?</p>
          <p className="text-lg text-[#545F6B] leading-relaxed max-w-2xl mx-auto">
            At Spacelift, we believe you should. And that you can.<br /> Because life is better when you love where you live.
          </p>
        </div>
      </section>

    </div>
  )
}
