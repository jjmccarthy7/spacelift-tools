/**
 * Meta Pixel utility — typed wrapper for window.fbq
 *
 * Low-level platform API. Do NOT import this in components.
 * Fire business events via src/lib/events.ts instead — it fans out to
 * all active analytics platforms including this one.
 *
 * PageView on initial load is handled by the base script in layout.tsx.
 * PageView on route changes is handled by MetaPixelProvider.
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
   * Fire a standard Meta Pixel event (fbq('track', ...)).
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

  /**
   * Fire a custom Meta Pixel event (fbq('trackCustom', ...)).
   * Use this for events not in Meta's standard event list.
   */
  trackCustom(event: string, params?: Record<string, unknown>): void {
    if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
    if (params) {
      window.fbq('trackCustom', event, params)
    } else {
      window.fbq('trackCustom', event)
    }
  },

  /** Convenience wrapper — used by MetaPixelProvider on route changes. */
  pageView(): void {
    this.track('PageView')
  },
}
