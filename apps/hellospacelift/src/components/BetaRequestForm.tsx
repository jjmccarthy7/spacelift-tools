'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

function BetaRequestFormInner() {
  const searchParams = useSearchParams()
  const submitted = searchParams.get('app-request') === 'success'

  if (submitted) {
    return (
      <p className="text-[#8D9EB2] text-base leading-relaxed">
        Thanks — we&apos;ll send you a link to the app soon. Keep an eye on your email.
      </p>
    )
  }

  return (
    <form
      name="app-request"
      method="POST"
      action="/get-started?app-request=success"
      data-netlify="true"
      className="space-y-3"
    >
      <input type="hidden" name="form-name" value="app-request" />
      <div className="flex flex-col gap-3 w-full">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="w-full px-5 py-4 rounded-full bg-[#EEF1F4] text-[#141B24] placeholder-[#8D9EB2] border border-transparent focus:outline-none focus:border-white/50 text-base"
        />
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base"
        >
          Request the app <ArrowRight size={18} strokeWidth={1.25} />
        </button>
      </div>
    </form>
  )
}

export default function BetaRequestForm() {
  return (
    <Suspense fallback={null}>
      <BetaRequestFormInner />
    </Suspense>
  )
}
