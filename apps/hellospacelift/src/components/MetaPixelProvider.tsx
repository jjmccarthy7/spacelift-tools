'use client'

/**
 * MetaPixelProvider
 *
 * Fires a PageView event on every client-side route change in the App Router.
 * The initial PageView is already fired by the base script in layout.tsx,
 * so we skip the first render to avoid a duplicate event.
 *
 * Mirrors the shape of AmplitudeProvider.tsx.
 */

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { pixel } from '@/lib/meta-pixel'

export default function MetaPixelProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip initial mount — the base script already fired PageView on load.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // Fire PageView on every subsequent client-side navigation.
    pixel.pageView()
  }, [pathname])

  return <>{children}</>
}
