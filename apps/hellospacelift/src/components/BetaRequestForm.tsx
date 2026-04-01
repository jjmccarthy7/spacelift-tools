'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function BetaRequestForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'app-beta-request',
          email,
        }).toString(),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <p className="text-[#8D9EB2] text-base leading-relaxed">
        Thanks — we&apos;ll send you a link to the app soon. Keep an eye on your email.
      </p>
    )
  }

  return (
    <form
      name="app-beta-request"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-3"
    >
      <input type="hidden" name="form-name" value="app-beta-request" />
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-5 py-4 rounded-full bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/50 text-base"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-[#FC4C4C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#CA3D3D] transition-colors duration-200 text-base whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending…' : <>Request the app <ArrowRight size={18} strokeWidth={1.25} /></>}
        </button>
      </div>
      {error && (
        <p className="text-red-400 text-sm pl-2">{error}</p>
      )}
    </form>
  )
}
