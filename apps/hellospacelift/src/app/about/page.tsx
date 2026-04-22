import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Explore possibilities in the app',
    body: 'Take a video of your space, describe the changes you want, and get an instant sense of scope and cost — before you talk to anyone.',
  },
  {
    number: '02',
    title: 'Talk with a Spacelift Advisor',
    body: 'A real conversation with a real person. No scripts, no pressure. Just honest guidance to help you think clearly about your project.',
  },
  {
    number: '03',
    title: "Work with Spacelift's trusted local renovation partners",
    body: "We introduce you to vetted Spacelift Pros who are the right fit for your project — so you can move forward with confidence.",
  },
]

const beliefs = [
  {
    heading: 'Homes matter.',
    body: "Life is too short to live in a home you don't love. The space around you shapes how you feel every day.",
  },
  {
    heading: 'You can get smart before you start.',
    body: 'Our app helps you understand possibilities, scope, and cost before you commit to anything — so you go in informed.',
  },
  {
    heading: 'Great outcomes come from great people.',
    body: "Technology can clarify. But it's the right people — advisors and pros who genuinely care — that make the journey better and the outcome better.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">

        {/* Graph-paper background */}
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

        {/* White wash over text column */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0) 68%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20">
          <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
            About Spacelift
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8 max-w-3xl">
            We believe life is better when you love where you live.
          </h1>
          <p className="text-lg md:text-xl text-[#545F6B] leading-relaxed max-w-xl">
            Spacelift exists to make home renovations more approachable, affordable, and enjoyable.
          </p>
        </div>
      </section>

      {/* ── Why We Built Spacelift ─────────────────────────────────────────────── */}
      <section className="bg-[#141B24] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">Why we built Spacelift</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Home renovation shouldn't feel this hard.
            </h2>
            <div className="space-y-5 text-lg text-[#8D9EB2] leading-relaxed">
              <p>
                Home renovation is one of the most meaningful investments people make — but for too many homeowners, the process feels overwhelming.
              </p>
              <p>
                Unclear costs. Uncertain timelines. Too many questions. Too little guidance.
              </p>
              <p className="text-white font-medium">
                We started Spacelift to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How Spacelift Works ────────────────────────────────────────────────── */}
      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">How it works</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              How Spacelift works.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map(({ number, title, body }) => (
              <div key={number} className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-3">
                  <span className="text-5xl font-black leading-none text-[#3B86E1]">{number}</span>
                </div>
                <h3 className="text-xl font-bold text-[#141B24] mb-3">{title}</h3>
                <p className="text-[#8D9EB2] text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-[#545F6B] leading-relaxed max-w-2xl">
            We combine smart technology with real human guidance — because great renovations need both.
          </p>
        </div>
      </section>

      {/* ── What We Believe ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">Our beliefs</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight">
              What we believe.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {beliefs.map(({ heading, body }) => (
              <div key={heading} className="border-t-2 border-[#3B86E1] pt-8">
                <h3 className="text-xl font-black text-[#141B24] mb-4 tracking-tight">{heading}</h3>
                <p className="text-[#545F6B] text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#141B24] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Love where you live.
            </h2>
            <p className="text-lg text-[#8D9EB2] leading-relaxed mb-10">
              Whether you're dreaming, planning, or ready to begin, we're here to help.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
            >
              Get Started <ArrowRight size={18} strokeWidth={1.25} />
            </Link>
          </div>
          <hr className="mt-16 md:mt-20 border-0 h-px bg-white/10" />
        </div>
      </section>

    </div>
  )
}
