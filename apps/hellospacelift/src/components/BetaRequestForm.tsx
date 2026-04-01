'use client'

import { Suspense, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

function BetaRequestFormInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Success state lives in the URL — survives reloads
  const submitted = searchParams.get('app-request') === 'success'

  if (submitted) {
    return (
      <p className="text-[#8D9EB2] text-base leading-relaxed">
        Thanks — we&apos;ll send you a link to the app soon. Keep an eye on your email.
      </p>
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      // POST to the static netlify-forms.html file — Netlify's CDN intercepts
      // submissions to static assets, not to SSR Lambda routes.
      await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'app-request', email }).toString(),
      })
      router.push('/get-started?app-request=success')
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <form
      name="app-request"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-3"
    >
      <input type="hidden" name="form-name" value="app-request" />
      <div className="flex flex-col gap-3 w-full">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full px-5 py-4 rounded-full bg-[#EEF1F4] text-[#141B24] placeholder-[#8D9EB2] border border-transparent focus:outline-none focus:border-white/50 text-base"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending…' : <>Request the app <ArrowRight size={18} strokeWidth={1.25} /></>}
        </button>
      </div>
      {error && <p className="text-red-400 text-sm pl-2">{error}</p>}
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
