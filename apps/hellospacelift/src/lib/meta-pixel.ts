/**
 * Meta Pixel utility — typed wrapper for window.fbq
 *
 * Mirrors the shape of src/lib/analytics.ts.
 * Import `pixel` wherever you need to fire standard or custom events.
 *
 * PageView on initial load is handled by the base script in layout.tsx.
 * PageView on route changes is handled by MetaPixelProvider.
 * Custom events can be fired from any client component via pixel.track().
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq: unknown
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/** Standard Meta Pixel event names. Extend as needed. */
export type MetaPixelEvent =
  | 'PageView'
  | 'Lead'
  | 'Contact'
  | 'CompleteRegistration'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'Search'
  | 'ViewContent'

export const pixel = {
  /**
   * Fire a standard or custom Meta Pixel event.
   * Safe to call on the server — no-ops if fbq is not initialised.
   */
  track(event: MetaPixelEvent | string, params?: Record<string, unknown>): void {
    if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
    if (params) {
      window.fbq('track', event, params)
    } else {
      window.fbq('track', event)
    }
  },

  /** Convenience wrapper — used by MetaPixelProvider on route changes. */
  pageView(): void {
    this.track('PageView')
  },
}
