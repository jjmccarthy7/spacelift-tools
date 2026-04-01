import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Shield, Star, CheckCircle, Wrench } from 'lucide-react'

const whyJoin = [
  {
    icon: Users,
    title: 'Serious Homeowners',
    description: 'Every homeowner we introduce has already worked with a Spacelift Advisor to clarify their ideas, priorities, and expectations. You\'re meeting people who are ready to renovate.',
  },
  {
    icon: TrendingUp,
    title: 'Warm Introductions',
    description: 'Spacelift introductions are based on fit. We introduce a maximum of three partners to each project, so you\'re meeting homeowners through a thoughtful referral — not competing with a crowd.',
  },
  {
    icon: Shield,
    title: 'Steady Pipeline',
    description: 'Spacelift is designed to create a steady flow of renovation opportunities — so when you\'re ready for your next project, there are homeowners ready to meet you.',
  },
  {
    icon: Star,
    title: 'Continuous Feedback',
    description: 'After every project, we ask both the homeowner and the contractor for feedback. This helps us continuously ensure we\'re introducing the right clients to the right partners.',
  },
]

const whatWeLookFor = [
  'Licensed and insured in your state',
  'Minimum 3 years of professional experience',
  'Strong track record of on-time, on-budget delivery',
  'Excellent communication with homeowners',
  'Pride in craftsmanship — not just completion',
  'Commitment to the Spacelift standard of care',
]

export default function ProsPage() {
  return (
    <div className="pt-16">

      <section className="bg-[#141B24] min-h-[80vh] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
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
                Apply to become a Spacelift Pro <ArrowRight size={18} strokeWidth={1.25} />
              </Link>
              <Link href="#talk" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-colors duration-200 text-base">
                Talk with our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1]">Why Spacelift</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-[#141B24] leading-[1.1] tracking-tight max-w-2xl">
              Built to support the people who build.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyJoin.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-[#EEF1F4] rounded-3xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center mb-6">
                  <Icon size={20} strokeWidth={1.25} className="text-[#FC4C4C]" />
                </div>
                <h3 className="text-xl font-bold text-[#141B24] mb-3">{title}</h3>
                <p className="text-[#8D9EB2] text-base leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">Our standard</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight mb-8">
                We don’t work with just anyone.
              </h2>
              <p className="text-lg text-[#8D9EB2] leading-relaxed mb-8">
                Spacelift homeowners are trusting us to send them the right people. That’s a responsibility we take seriously. Our Pro partners meet a high bar — because our homeowners deserve nothing less.
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

      <section id="apply" className="bg-[#141B24] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6 block">Join the network</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Ready to become a Spacelift Pro?
              </h2>
              <p className="text-lg text-[#8D9EB2] leading-relaxed mb-10">
                Apply to join our network of trusted renovation professionals. We review every application personally and will be in touch within 5 business days.
              </p>
              <Link href="#apply" className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base">
                Apply now <ArrowRight size={18} strokeWidth={1.25} />
              </Link>
            </div>
            <div id="talk" className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Prefer to talk first?</h3>
              <p className="text-[#8D9EB2] text-base leading-relaxed mb-8">
                We’re happy to answer questions about the program, what it means to be a Spacelift Pro, and whether it’s a good fit for your business.
              </p>
              <Link href="#talk" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:border-white hover:bg-white/5 transition-colors duration-200 text-sm">
                Talk with our team <ArrowRight size={16} strokeWidth={1.25} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
