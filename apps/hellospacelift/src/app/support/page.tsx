import type { Metadata } from 'next'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support — Spacelift',
  description:
    'Get help with Spacelift. Reach us right inside the app or by email and we\'ll get back to you.',
}

export default function SupportPage() {
  return (
    <div className="pt-16">

      {/* ── Hero (mirrors the /pros hero: white nav → full Foundation Blue section) ── */}
      <section className="relative bg-[#141B24] min-h-[80vh] flex items-center overflow-hidden">

        {/* Graph-paper background — same recipe/opacity as the /pros hero */}
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

        {/* Subtle dark wash over text column */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(20,27,36,0.72) 0%, rgba(20,27,36,0.72) 48%, rgba(20,27,36,0) 70%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-[#3B86E1] mb-6">
              Support
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Spacelift Support
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight mb-6">
              Need help? We&rsquo;re here for you.
            </p>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
              The easiest way to reach us is right inside the app. You can also email
              us anytime and we&rsquo;ll get back to you.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a
                href="mailto:support@hellospacelift.com?subject=Spacelift%20Support%20Request&body=Please%20tell%20us%20how%20we%20can%20help%20you%20today."
                className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
              >
                <Mail size={18} strokeWidth={1.25} />
                Email Spacelift Support
              </a>
              <a
                href="https://hellospacelift.com/privacy"
                className="text-sm font-semibold text-[#8D9EB2] hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
