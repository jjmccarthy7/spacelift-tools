// Dynamic import keeps the Amplitude bundle out of the SSR path entirely.
// All functions are safe to call from server-rendered client components.
// Initialised via AmplitudeProvider in the root layout.

type AmplitudeLib = typeof import('@amplitude/analytics-browser')

let amplitude: AmplitudeLib | null = null

async function load(): Promise<AmplitudeLib | null> {
  if (typeof window === 'undefined') return null
  if (!amplitude) {
    amplitude = await import('@amplitude/analytics-browser')
  }
  return amplitude
}

/**
 * Initialise Amplitude once per page load.
 * Safe to call multiple times — subsequent calls are no-ops.
 */
export function initAmplitude(): void {
  if (typeof window === 'undefined') return
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY
  if (!apiKey) return

  load().then((amp) => {
    if (!amp) return
    amp.init(apiKey, {
      defaultTracking: {
        pageViews: true,
        sessions: true,
        attribution: true,
        formInteractions: true,
      },
    })
  })
}

/**
 * Fire a custom event. No-ops before init resolves or on the server.
 */
export function track(
  eventName: string,
  properties?: Record<string, string | number | boolean>,
): void {
  if (!amplitude) return
  amplitude.track(eventName, properties)
}
