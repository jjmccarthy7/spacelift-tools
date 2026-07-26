/**
 * /get-started — launch funnel configuration
 *
 * The app is the front door to every Spacelift project.
 * Visitors land here, download the app, and enter the guided funnel:
 *   01 Explore with the app → 02 Talk with an Advisor → 03 Build with local Pros
 *
 * The pre-launch two-path version (app OR advisor) is preserved in
 * _page-two-path.tsx for easy restoration and future A/B testing.
 */

import AppStoreBadge, { APPLE_APP_STORE_URL, GOOGLE_PLAY_URL } from '@/components/AppStoreBadge'

const steps = [
  {
    step: '01',
    title: 'Explore with the app',
    description:
      'Describe your project, upload photos or videos, and discover what\'s possible before talking to anyone.',
  },
  {
    step: '02',
    title: 'Talk with a Spacelift Advisor',
    description:
      'Once you have a project started, your advisor helps you refine scope, budget, priorities, and next steps.',
  },
  {
    step: '03',
    title: 'Build with local Spacelift Pros',
    description:
      'When you\'re ready, Spacelift introduces you to the right local professionals for your project.',
  },
]

export default function GetStartedPage() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">

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

        {/* White wash over text column — reduces grid competition behind copy */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0) 68%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">

            {/* Left column — text */}
            <div>
              <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
                Get started
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-[#141B24] leading-[1.05] tracking-tight mb-8">
                Love where you live.
              </h1>
              <div className="mb-12 space-y-5">
                <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl">
                  Every Spacelift project starts with our app — an infinitely knowledgeable, always available renovation advisor in your pocket.
                </p>
                <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl">
                  Take a video of your space and describe the changes you&apos;re considering — the app will instantly help you understand project scope, cost, and possibilities. Explore ideas as much as you&apos;d like, then connect with a Spacelift Advisor whenever you&apos;re ready to bring your project to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start" style={{ gap: '16px' }}>
                <AppStoreBadge
                  store="apple"
                  href={APPLE_APP_STORE_URL}
                  style={{ width: '204px', height: '68px' }}
                />
                <AppStoreBadge
                  store="google"
                  href={GOOGLE_PLAY_URL}
                  style={{ width: '229px', height: '68px' }}
                />
              </div>
            </div>

            {/* Right column — phone */}
            <div className="hidden lg:flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/get-started-screen-with-bezel.png"
                alt="Spacelift app on iPhone"
                style={{
                  width: '346px',
                  height: 'auto',
                  filter: 'drop-shadow(0 50px 90px rgba(0,0,0,0.18)) drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── How Spacelift Works ──────────────────────────────────────────────── */}
      <section className="bg-[#EEF1F4] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">
              How it works
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              Great spaces in three<br /> simple steps
            </h2>
          </div>
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
        </div>
      </section>

    </div>
  )
}
