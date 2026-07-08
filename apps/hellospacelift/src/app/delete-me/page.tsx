import type { Metadata } from 'next'
import { Mail, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delete Your Account — Spacelift',
  description:
    'Request deletion of your Spacelift account and the personal data associated with it.',
}

const DELETE_MAILTO =
  'mailto:delete-me@hellospacelift.com?subject=Account%20Deletion%20Request&body=Please%20confirm%20the%20below%20information%20before%20sending%20this%20email%3A%0D%0A%0D%0A-%20Confirm%20the%20email%20address%20tied%20to%20the%20account%20you%20want%20to%20delete%20(sending%20from%20that%20account%20speeds%20up%20processing).%0D%0A-%20Confirm%20your%20first%20and%20last%20name.%0D%0A-%20Clearly%20request%20that%20we%20delete%20your%20account%2C%20so%20we%20have%20a%20clear%20record%20of%20your%20request.%0D%0A-%20Confirm%20you%20understand%20this%20will%20permanently%20close%20your%20account.'

export default function DeleteMePage() {
  return (
    <div className="pt-16">

      {/* ── Hero (identical treatment to /support) ─────────────────────────────── */}
      <section className="relative bg-[#141B24] min-h-[80vh] flex items-center overflow-hidden">

        {/* Graph-paper background — same recipe/opacity as /support + /pros */}
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
              Account
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Delete your Spacelift account
            </h1>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-5">
              Your privacy matters to us, and we honor requests to delete your account
              and the personal data associated with it.
            </p>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-5">
              The easiest way is right in the Spacelift app — it has a built-in option
              to delete your account. Because you&rsquo;re already signed in, we can
              confirm it&rsquo;s yours and close it right away.
            </p>
            <p className="text-lg md:text-xl text-[#8D9EB2] leading-relaxed max-w-xl mb-12">
              Prefer email? You can also request deletion at delete-me@hellospacelift.com.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a
                href={DELETE_MAILTO}
                className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
              >
                <Mail size={18} strokeWidth={1.25} />
                Request account deletion
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

      {/* ── A few things to know (Stone section — /pros "Our standard" pattern) ── */}
      <section className="bg-[#EEF1F4] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#141B24] leading-[1.1] tracking-tight">
                A few things<br />to know.
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5">
                <Info size={20} strokeWidth={1.25} className="text-[#3B86E1] mt-0.5 flex-shrink-0" />
                <p className="text-[#141B24] text-base leading-relaxed">
                  Deleting your account in the Spacelift app takes effect right away —
                  you&rsquo;ll be signed out and your account closed.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5">
                <Info size={20} strokeWidth={1.25} className="text-[#3B86E1] mt-0.5 flex-shrink-0" />
                <p className="text-[#141B24] text-base leading-relaxed">
                  If you request by email, we&rsquo;ll first confirm you have access to
                  the account, then process your request (this can take up to a few weeks).
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5">
                <Info size={20} strokeWidth={1.25} className="text-[#3B86E1] mt-0.5 flex-shrink-0" />
                <p className="text-[#141B24] text-base leading-relaxed">
                  We remove the personal data associated with your account. We may keep a
                  limited amount of information where the law requires it — see our{' '}
                  <a href="https://hellospacelift.com/privacy" className="text-[#3B86E1] font-semibold hover:underline">
                    Privacy Policy
                  </a>{' '}
                  for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
