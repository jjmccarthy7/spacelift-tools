import Link from 'next/link'
import { ArrowRight, CheckCircle, Wrench } from 'lucide-react'

const whyJoin = [
  {
    step: '01',
    title: 'Serious Homeowners',
    description: 'Every homeowner we introduce has already worked with a Spacelift Advisor to clarify their ideas, priorities, and expectations. You\'re meeting people who are ready to renovate.',
  },
  {
    step: '02',
    title: 'Warm Introductions',
    description: 'Spacelift introductions are based on fit. We introduce a maximum of three partners to each project, so you\'re meeting homeowners through a thoughtful referral — not competing with a crowd.',
  },
  {
    step: '03',
    title: 'Steady Pipeline',
    description: 'Spacelift is designed to create a steady flow of renovation opportunities — so when you\'re ready for your next project, there are homeowners ready to meet you.',
  },
  {
    step: '04',
    title: 'Continuous Feedback',
    description: 'After every project, we ask both the homeowner and the contractor for feedback. This helps us continuously ensure we\'re introducing the right clients to the right partners.',
  },
]

const whatWeLookFor = [
  'Properly licensed and insured',
  'Minimum 3 years of professional experience',
  'Strong track record of on-time, on-budget delivery',
  'Pride in craftsmanship — not just completion',
  'Commitment to the Spacelift standard of care',
]

export default function ProsPage() {
  return (
    <div className="pt-16">

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#141B24] min-h-[80vh] flex items-center overflow-hidden">

        {/* Graph-paper background — same design language as Homeowners, tuned for Foundation Blue */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(59,134,225,0.18) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(59,134,225,0.18) 1px, transparent 1px)',
              'linear-gradient(rgba(59,134,225,0.12) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(59,134,225,0.12) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '200px 200px, 200px 200px, 40px 40px, 40px 40px',
          }}
        />

        {/* Subtle dark wash over text column — softens grid behind copy */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(20,27,36,0.72) 0%, rgba(20,27,36,0.72) 48%, rgba(20,27,36,0) 70%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
              For Renovation Professionals
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Great renovations start with great partners.
            </h1>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
              Our partners are local professionals we know well and trust to deliver exceptional experiences with beautiful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#apply" className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
                Partner with Spacelift <ArrowRight size={18} strokeWidth={1.25} />
              </Link>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1mF6uhyVfGIGuTkHKUGZ-9b-htBREaP43kPRcqONt98mD02VFUxwp98-e7Zhsr7NbRJJCwrXas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-colors duration-200 text-base">
                Talk with our team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Standard ───────────────────────────────────────────────────────── */}
      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">Our standard</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-8">
                We don't work with<br />just anyone.
              </h2>
              <p className="text-lg text-[#8D9EB2] leading-relaxed mb-8">
                Spacelift homeowners trust us to send them the right people. That's a responsibility we take seriously. Our Pro partners meet a high bar — because our homeowners deserve nothing less.
              </p>
              <div className="flex items-center gap-3">
                <Wrench size={18} strokeWidth={1.25} className="text-[#FC4C4C]" />
                <span className="text-sm font-semibold text-[#141B24]">Vetted. Verified. Trusted.</span>
              </div>
            </div>
            <div className="space-y-4">
              {whatWeLookFor.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5">
                  <CheckCircle size={20} strokeWidth={1.25} className="text-[#0ED096] mt-0.5 flex-shrink-0" />
                  <p className="text-[#141B24] text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Spacelift ──────────────────────────────────────────────────────── */}
      <section id="why" className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">Why Spacelift</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              Four ways we support<br />our partners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyJoin.map(({ step, title, description }) => (
              <div key={step} className="bg-[#EEF1F4] rounded-3xl p-8 hover:shadow-md transition-shadow duration-300">
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

      {/* ── Apply ──────────────────────────────────────────────────────────────── */}
      <section id="apply" className="bg-[#141B24] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">Join the network</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Become a Spacelift Pro.
            </h2>
            <p className="text-lg text-[#8D9EB2] leading-relaxed mb-10">
              Apply to join our network of trusted renovation partners. Every application is reviewed personally, and we'll follow up within five business days.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1mF6uhyVfGIGuTkHKUGZ-9b-htBREaP43kPRcqONt98mD02VFUxwp98-e7Zhsr7NbRJJCwrXas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
              Partner with Spacelift <ArrowRight size={18} strokeWidth={1.25} />
            </a>
            <p className="mt-6 text-[#8D9EB2] text-sm">
              Prefer to talk first?{"  "}
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1mF6uhyVfGIGuTkHKUGZ-9b-htBREaP43kPRcqONt98mD02VFUxwp98-e7Zhsr7NbRJJCwrXas" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline underline-offset-2 transition-colors duration-200">
                Book time with our team
              </a>
            </p>
          </div>
          <hr className="mt-16 md:mt-20 border-0 h-px bg-white/10" />
        </div>
      </section>

    </div>
  )
}
