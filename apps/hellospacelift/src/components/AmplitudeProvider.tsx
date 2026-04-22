'use client'

import { useEffect } from 'react'
import { initAmplitude } from '@/lib/analytics'

/**
 * Mounts at the root layout and initialises Amplitude exactly once.
 * Renders no DOM — purely an initialisation boundary.
 */
export default function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAmplitude()
  }, [])

  return <>{children}</>
}
