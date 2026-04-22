import * as amplitude from '@amplitude/analytics-browser'

let initialized = false

/**
 * Initialize Amplitude once per page load.
 * Safe to call multiple times — subsequent calls are no-ops.
 * Must only be called from a browser context (client components).
 */
export function initAmplitude(): void {
  if (initialized || typeof window === 'undefined') return
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY
  if (!apiKey) return

  amplitude.init(apiKey, {
    defaultTracking: {
      pageViews: true,
      sessions: true,
      attribution: true,
      formInteractions: true,
    },
  })
  initialized = true
}

/**
 * Fire a custom event. No-ops on the server and before init.
 */
export function track(
  eventName: string,
  properties?: Record<string, string | number | boolean>,
): void {
  if (typeof window === 'undefined') return
  amplitude.track(eventName, properties)
}
